import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import CategorySelection from './pages/CategorySelection.jsx';
import RoomJoinCreate from './pages/RoomJoinCreate.jsx';
import RoomLobby from './pages/RoomLobby.jsx';
import Game from './pages/Game.jsx';
import Results from './pages/Results.jsx';
import HowToPlay from './pages/HowToPlay.jsx';
import AdminImages from './pages/AdminImages.jsx';
import { getGameQuestions } from './data/people.js';
import { subscribeToRoom, leaveRoom } from './services/roomService.js';
import { db } from './services/firebaseService.js';
import { onValue, ref } from 'firebase/database';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  // Solo State
  const [soloQuestions, setSoloQuestions] = useState([]);
  const [soloRoundIndex, setSoloRoundIndex] = useState(0);
  const [soloSettings, setSoloSettings] = useState({ category: 'all', roundCount: 5, roundDuration: 30 });
  const [soloResultsData, setSoloResultsData] = useState(null);
  // Accumulate round results outside Game because Game is remounted for each round.
  const [soloAccumulatedRounds, setSoloAccumulatedRounds] = useState([]);
  const [soloAccumulatedScore, setSoloAccumulatedScore] = useState(0);

  // Multiplayer State
  const [roomCode, setRoomCode] = useState(null);
  const [roomData, setRoomData] = useState(null);
  const [playerId, setPlayerId] = useState(() => {
    return localStorage.getItem('guesswho_player_id') || ('player_' + Math.random().toString(36).substring(2, 9));
  });

  // Load admin-edited person data from Firebase so every device uses the same photo, hints, and accepted answers.
  useEffect(() => {
    if (!db) return undefined;
    return onValue(ref(db, 'adminOverrides/people'), (snapshot) => {
      const overrides = snapshot.val() || {};
      localStorage.setItem('guesswho_people_overrides', JSON.stringify(overrides));
      const images = Object.fromEntries(Object.entries(overrides).filter(([, value]) => value?.imageUrl).map(([id, value]) => [id, value.imageUrl]));
      localStorage.setItem('guesswho_image_overrides', JSON.stringify(images));
      window.dispatchEvent(new Event('guesswho-overrides-updated'));
    }, (error) => console.error('[GuessWho] Failed to sync admin overrides:', error));
  }, []);

  // Subscribe to room updates when in multiplayer
  useEffect(() => {
    if (!roomCode) return;

    const unsubscribe = subscribeToRoom(
      roomCode,
      (updatedRoom) => {
        if (!updatedRoom) {
          // Room was removed or closed
          setRoomData(null);
          setRoomCode(null);
          setCurrentScreen('room-entry');
          return;
        }

        setRoomData(updatedRoom);

        // Sync screen with room status
        if (updatedRoom.status === 'lobby') {
          setCurrentScreen('lobby');
        } else if (updatedRoom.status === 'playing' || updatedRoom.status === 'round_reveal') {
          setCurrentScreen('game-multi');
        } else if (updatedRoom.status === 'finished') {
          setCurrentScreen('results-multi');
        }
      },
      (err) => {
        console.error('Room subscription error:', err);
      }
    );

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [roomCode]);

  // Solo Handlers
  const handleStartSoloGame = (settings) => {
    const questions = getGameQuestions(settings.category, settings.roundCount);
    setSoloSettings(settings);
    setSoloQuestions(questions);
    setSoloRoundIndex(0);
    setSoloResultsData(null);
    setSoloAccumulatedRounds([]);
    setSoloAccumulatedScore(0);
    setCurrentScreen('game-solo');
  };

  const handleSoloRoundAdvance = ({ nextRoundIndex, currentSoloScore, currentRoundStats }) => {
    setSoloAccumulatedRounds((prev) => [...prev, ...(currentRoundStats || [])]);
    setSoloAccumulatedScore((prev) => prev + (Number(currentSoloScore) || 0));
    setSoloRoundIndex(nextRoundIndex);
  };

  const handleSoloGameOver = (finalStats) => {
    // The last round's stats are still inside the currently mounted Game instance.
    // Earlier rounds were accumulated in App before each remount.
    const allRounds = [...soloAccumulatedRounds, ...(finalStats.rounds || [])];
    const totalScore = soloAccumulatedScore + (Number(finalStats.totalScore) || 0);
    setSoloResultsData({
      ...finalStats,
      totalScore,
      rounds: allRounds,
      totalQuestions: soloQuestions.length || finalStats.totalQuestions || allRounds.length
    });
    setCurrentScreen('results-solo');
  };

  // Multiplayer Handlers
  const handleJoinedRoom = ({ code, playerId: pId, playerName, isHost }) => {
    setPlayerId(pId);
    setRoomCode(code);
    setCurrentScreen('lobby');
  };

  const handleLeaveMultiplayer = async () => {
    if (roomCode && playerId) {
      await leaveRoom(roomCode, playerId);
    }
    setRoomCode(null);
    setRoomData(null);
    setCurrentScreen('room-entry');
  };

  const handleNavigate = (targetScreen) => {
    setCurrentScreen(targetScreen);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar currentScreen={currentScreen} onNavigate={handleNavigate} />

      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Landing Page */}
        {currentScreen === 'home' && (
          <Home onNavigate={handleNavigate} />
        )}

        {/* Category Selection for Solo Mode */}
        {currentScreen === 'category-selection' && (
          <CategorySelection
            onStartSoloGame={handleStartSoloGame}
            onNavigate={handleNavigate}
          />
        )}

        {/* Multiplayer Entry: Create or Join */}
        {currentScreen === 'room-entry' && (
          <RoomJoinCreate
            onJoinedRoom={handleJoinedRoom}
            onNavigate={handleNavigate}
          />
        )}

        {/* Multiplayer Lobby */}
        {currentScreen === 'lobby' && (
          <RoomLobby
            room={roomData}
            playerId={playerId}
            onLeave={handleLeaveMultiplayer}
          />
        )}

        {/* Game Arena: Solo Mode */}
        {currentScreen === 'game-solo' && (
          <Game
            key={`solo-${soloRoundIndex}`}
            mode="solo"
            questions={soloQuestions}
            currentRoundIndex={soloRoundIndex}
            roundDuration={soloSettings.roundDuration || 30}
            categoryName={soloSettings.category}
            onGameOver={(stats) => {
              if (stats.nextRoundIndex !== undefined) {
                handleSoloRoundAdvance(stats);
              } else {
                handleSoloGameOver(stats);
              }
            }}
            onLeaveGame={() => setCurrentScreen('home')}
          />
        )}

        {/* Game Arena: Multiplayer Mode */}
        {currentScreen === 'game-multi' && (
          <Game
            key={`multi-${roomCode}-${roomData?.currentRoundIndex ?? 0}`}
            mode="multi"
            questions={roomData?.questions || []}
            currentRoundIndex={roomData?.currentRoundIndex || 0}
            roundDuration={roomData?.settings?.roundDuration || 30}
            categoryName={roomData?.settings?.category || 'all'}
            room={roomData}
            playerId={playerId}
            onGameOver={() => setCurrentScreen('results-multi')}
            onLeaveGame={handleLeaveMultiplayer}
          />
        )}

        {/* Results Screen: Solo */}
        {currentScreen === 'results-solo' && (
          <Results
            mode="solo"
            soloData={soloResultsData}
            onPlayAgain={() => handleStartSoloGame(soloSettings)}
            onBackToHome={() => setCurrentScreen('home')}
          />
        )}

        {/* Results Screen: Multiplayer */}
        {currentScreen === 'results-multi' && (
          <Results
            mode="multi"
            room={roomData}
            playerId={playerId}
            onPlayAgain={() => {}}
            onBackToHome={handleLeaveMultiplayer}
          />
        )}

        {currentScreen === 'admin-images' && <AdminImages onNavigate={handleNavigate} />}

        {/* How to Play Screen */}
        {currentScreen === 'how-to-play' && (
          <HowToPlay onNavigate={handleNavigate} />
        )}
      </main>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '1.25rem',
        borderTop: '1px solid var(--border-subtle)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)',
        background: 'rgba(10, 15, 29, 0.8)'
      }}>
        <div>
          <strong>GuessWho</strong> — Famous People Guessing Game by CIMAHI JPG
        </div>
      </footer>
    </div>
  );
}
