import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Trophy, ArrowRight, CheckCircle2, XCircle, AlertCircle, Eye, LogOut } from 'lucide-react';
import BlurImage from '../components/BlurImage.jsx';
import Timer from '../components/Timer.jsx';
import HintPanel from '../components/HintPanel.jsx';
import AnswerInput from '../components/AnswerInput.jsx';
import ScoreBoard from '../components/ScoreBoard.jsx';
import Leaderboard from '../components/Leaderboard.jsx';
import { useGameTimer } from '../hooks/useGameTimer.js';
import { validateAnswer } from '../services/answerValidator.js';
import { calculateScore } from '../services/scoreCalculator.js';
import { soundService } from '../services/soundService.js';
import { submitRoomAnswer, revealRoomRound, nextRoomRound } from '../services/roomService.js';

export default function Game({
  mode = 'solo', // 'solo' or 'multi'
  questions = [],
  currentRoundIndex = 0,
  roundDuration = 30,
  categoryName = 'Semua Kategori',
  room = null,
  playerId = null,
  onGameOver,
  onLeaveGame
}) {
  const currentPerson = questions[currentRoundIndex] || null;
  const isMultiplayer = mode === 'multi';
  const isHost = isMultiplayer && room?.hostId === playerId;

  // Local round state
  const [isAnswered, setIsAnswered] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [feedback, setFeedback] = useState(null);
  const [soloScore, setSoloScore] = useState(0);
  const [lastAddedScore, setLastAddedScore] = useState(null);
  const [roundStats, setRoundStats] = useState([]); // Array of stats per round

  const prevHintCountRef = useRef(0);

  // Reset round state whenever currentRoundIndex changes
  useLayoutEffect(() => {
    // Reset reveal/answer UI before the browser paints the next round.
    setIsAnswered(false);
    setIsRevealed(false);
    setFeedback(null);
    setLastAddedScore(null);
    prevHintCountRef.current = 0;
  }, [currentRoundIndex]);

  // Synchronize state with multiplayer room status if in multi mode
  useEffect(() => {
    if (isMultiplayer && room) {
      if (room.status === 'round_reveal') {
        setIsRevealed(true);
      }
      // Check if current player already answered this round
      const myAnswer = room.players?.[playerId]?.roundAnswers?.[currentRoundIndex];
      if (myAnswer) {
        setIsAnswered(true);
        if (!feedback) {
          setFeedback({
            isCorrect: myAnswer.isCorrect,
            message: myAnswer.isCorrect ? `Jawaban Benar! (+${myAnswer.score} pts)` : 'Menyerah / Salah',
            similarity: myAnswer.isCorrect ? 1.0 : 0
          });
        }
      }
    }
  }, [isMultiplayer, room, playerId, currentRoundIndex, feedback]);

  const handleTimeUp = () => {
    setIsRevealed(true);
    if (!isAnswered) {
      soundService.playWrong();
      setFeedback({
        isCorrect: false,
        message: `Waktu Habis! Jawabannya adalah: ${currentPerson?.name}`,
        similarity: 0
      });

      // Record 0 score round
      if (!isMultiplayer) {
        setRoundStats((prev) => [
          ...prev,
          {
            person: currentPerson,
            isCorrect: false,
            score: 0,
            timeTaken: roundDuration
          }
        ]);
      } else {
        submitRoomAnswer(room.code, playerId, currentRoundIndex, {
          isCorrect: false,
          score: 0,
          timeTaken: roundDuration,
          guess: 'WAKTU_HABIS'
        });
      }
    }

    if (isMultiplayer && isHost && room?.status !== 'round_reveal') {
      revealRoomRound(room.code);
    }
  };

  // Timer Hook
  const {
    remainingTime,
    elapsedTime,
    blurAmount,
    activeHintCount
  } = useGameTimer({
    duration: roundDuration,
    resetKey: currentRoundIndex,
    isActive: Boolean(currentPerson && !isRevealed),
    isRevealed,
    roundStartTime: isMultiplayer ? room?.roundStartTime : null,
    roundEndTime: isMultiplayer ? room?.roundEndTime : null,
    onTimeUp: handleTimeUp
  });

  // Sound chime when a new hint unlocks
  useEffect(() => {
    if (activeHintCount > prevHintCountRef.current && !isRevealed) {
      soundService.playHint();
      prevHintCountRef.current = activeHintCount;
    }
  }, [activeHintCount, isRevealed]);

  // Handle Answer Submission
  const handleSubmitAnswer = (userAnswer) => {
    if (isAnswered || isRevealed || !currentPerson) return;

    const validation = validateAnswer(userAnswer, currentPerson);

    if (validation.isCorrect) {
      // Calculate speed points
      const score = calculateScore(remainingTime, roundDuration, 1000);
      const timeTaken = roundDuration - remainingTime;

      soundService.playCorrect();
      try {
        confetti({
          particleCount: 75,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch {
        // ignore
      }

      setIsAnswered(true);
      setLastAddedScore(score);
      setFeedback({
        isCorrect: true,
        message: `Tepat sekali! "${validation.matchedAnswer}" (+${score} pts)`,
        similarity: validation.similarity
      });

      if (!isMultiplayer) {
        setSoloScore((prev) => prev + score);
        setRoundStats((prev) => [
          ...prev,
          {
            person: currentPerson,
            isCorrect: true,
            score,
            timeTaken
          }
        ]);
        // Solo mode auto-reveals on correct guess so player can see true picture
        setIsRevealed(true);
      } else {
        // Submit to multiplayer room
        submitRoomAnswer(room.code, playerId, currentRoundIndex, {
          isCorrect: true,
          score,
          timeTaken,
          guess: userAnswer
        });
      }
    } else {
      soundService.playWrong();
      setFeedback({
        isCorrect: false,
        message: validation.feedback,
        similarity: validation.similarity
      });
    }
  };

  // Handle Player Surrender (Solo mode only)
  const handleGiveUp = () => {
    if (isAnswered || isRevealed || !currentPerson) return;
    soundService.playWrong();
    setIsAnswered(true);
    setIsRevealed(true);
    setFeedback({
      isCorrect: false,
      message: `Menyerah! Jawabannya adalah: ${currentPerson.name}`,
      similarity: 0
    });

    setRoundStats((prev) => [
      ...prev,
      {
        person: currentPerson,
        isCorrect: false,
        score: 0,
        timeTaken: roundDuration - remainingTime
      }
    ]);
  };

  // Next Round Trigger
  const handleNextRound = () => {
    soundService.playTick();
    const nextIdx = currentRoundIndex + 1;

    if (!isMultiplayer) {
      if (nextIdx >= questions.length) {
        // Solo game complete!
        onGameOver({
          totalScore: soloScore,
          rounds: roundStats,
          categoryName,
          totalQuestions: questions.length
        });
      } else {
        onGameOver({ nextRoundIndex: nextIdx, currentSoloScore: soloScore, currentRoundStats: roundStats });
      }
    } else {
      if (isHost && room?.code) {
        nextRoomRound(room.code, nextIdx, roundDuration);
      }
    }
  };

  const isLastRound = currentRoundIndex >= questions.length - 1;

  if (!currentPerson) {
    return (
      <div className="container" style={{ maxWidth: '760px', padding: '3rem 1rem', textAlign: 'center' }}>
        <div className="glass-panel" style={{ padding: '2rem', borderRadius: 'var(--radius-xl)' }}>
          <h2 style={{ marginBottom: '0.75rem' }}>Pertanyaan belum tersedia</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
            Kategori ini belum memiliki cukup data tokoh untuk dimainkan. Pilih kategori lain atau kembali ke beranda.
          </p>
          <button onClick={onLeaveGame} className="btn btn-primary">Kembali</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.25rem',
      maxWidth: '1050px',
      padding: '1.25rem 1rem'
    }}>
      {/* Top Header Row: Scoreboard & Exit */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '100%' }}>
        <div style={{ flex: 1 }}>
          <ScoreBoard
            score={isMultiplayer ? (room?.players?.[playerId]?.score || 0) : soloScore}
            currentRound={currentRoundIndex + 1}
            totalRounds={questions.length}
            categoryName={categoryName}
            lastAddedScore={lastAddedScore}
          />
        </div>

        <button
          onClick={onLeaveGame}
          className="btn btn-secondary"
          style={{ padding: '0.65rem 1rem', fontSize: '0.85rem' }}
          title="Keluar dari permainan"
        >
          <LogOut size={16} />
          <span className="hide-mobile">Keluar</span>
        </button>
      </div>

      {/* Main Game Arena */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: isMultiplayer ? 'minmax(0, 1fr) 280px' : 'minmax(0, 1fr)',
        gap: '1.5rem',
        alignItems: 'start'
      }}>
        {/* Game Arena Center Card */}
        <div className="glass-panel" style={{
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          borderRadius: 'var(--radius-xl)'
        }}>
          {/* Timer Bar */}
          <Timer
            remainingTime={remainingTime}
            totalDuration={roundDuration}
          />

          {/* Center Content: Blur Image & Hints Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            alignItems: 'center'
          }}>
            {/* Left: Blur Photo Display */}
            <div>
              <BlurImage
                src={currentPerson?.imageUrl}
                alt={currentPerson?.name}
                blurAmount={isRevealed ? 0 : blurAmount}
                isRevealed={isRevealed}
                sourceName={currentPerson?.imageSource}
                wikiTitle={currentPerson?.wikiTitle}
              />
            </div>

            {/* Right: Hints Panel */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <HintPanel
                hints={currentPerson?.hints || []}
                nationality={currentPerson?.nationality}
                profession={currentPerson?.profession}
                activeHintCount={activeHintCount}
                elapsedTime={elapsedTime}
                isRevealed={isRevealed}
              />
            </div>
          </div>

          {/* Reveal Information Banner (When round completed/surrendered) */}
          {isRevealed && currentPerson && (
            <div style={{
              padding: '1.25rem',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.15))',
              border: '1px solid var(--accent-emerald)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              animation: 'fadeIn 0.35s ease-out'
            }}>
              <div>
                <span style={{
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  fontWeight: 800,
                  color: 'var(--accent-emerald)',
                  letterSpacing: '0.08em'
                }}>
                  Identitas Tokoh Terungkap:
                </span>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 900,
                  color: '#ffffff',
                  marginBottom: '0.2rem'
                }}>
                  {currentPerson.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  {currentPerson.profession} • {currentPerson.nationality}
                </p>
              </div>

              {/* Next Round Button */}
              {(!isMultiplayer || isHost) && (
                <button
                  onClick={handleNextRound}
                  className="btn btn-primary"
                  style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
                >
                  <span>{isLastRound ? 'Lihat Hasil Akhir' : 'Ronde Berikutnya'}</span>
                  <ArrowRight size={18} />
                </button>
              )}

              {isMultiplayer && !isHost && (
                <div style={{ fontSize: '0.85rem', color: 'var(--accent-cyan-light)', fontStyle: 'italic' }}>
                  Menunggu host melanjutkan ke ronde berikutnya...
                </div>
              )}
            </div>
          )}

          {/* Answer Input Field (Active while not revealed) */}
          {!isRevealed && (
            <AnswerInput
              onSubmitAnswer={handleSubmitAnswer}
              onGiveUp={!isMultiplayer ? handleGiveUp : null}
              isAnswered={isAnswered}
              isRevealed={isRevealed}
              feedback={feedback}
              placeholder="Ketik nama tokoh di sini..."
            />
          )}
        </div>

        {/* Right Sidebar: Real-time Leaderboard for Multiplayer */}
        {isMultiplayer && (
          <div className="glass-panel" style={{ padding: '1.25rem', borderRadius: 'var(--radius-lg)' }}>
            <Leaderboard
              players={room?.players || {}}
              currentPlayerId={playerId}
              currentRoundIndex={currentRoundIndex}
              showRoundStatus={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}
