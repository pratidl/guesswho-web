import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Trophy, Clock, CheckCircle2, XCircle, RotateCcw, Home, Award, Sparkles, Crown } from 'lucide-react';
import { calculateAverageTime, rankPlayers } from '../services/scoreCalculator.js';
import { soundService } from '../services/soundService.js';
import { resetRoomToLobby } from '../services/roomService.js';

export default function Results({
  mode = 'solo', // 'solo' or 'multi'
  soloData = null,
  room = null,
  playerId = null,
  onPlayAgain,
  onBackToHome
}) {
  const isMultiplayer = mode === 'multi';
  const isHost = isMultiplayer && room?.hostId === playerId;

  // Trigger celebration fanfare and confetti on mount
  useEffect(() => {
    soundService.playFanfare();
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }

    // Save Solo High Score
    if (!isMultiplayer && soloData?.totalScore) {
      try {
        const stored = localStorage.getItem('guesswho_high_score');
        const prevHigh = stored ? parseInt(stored, 10) : 0;
        if (soloData.totalScore > prevHigh) {
          localStorage.setItem('guesswho_high_score', soloData.totalScore.toString());
        }

        const totalGamesStored = localStorage.getItem('guesswho_total_games');
        const prevTotalGames = totalGamesStored ? parseInt(totalGamesStored, 10) : 0;
        localStorage.setItem('guesswho_total_games', (prevTotalGames + 1).toString());
      } catch {
        // ignore
      }
    }
  }, [isMultiplayer, soloData]);

  // Solo Calculations
  const rounds = soloData?.rounds || [];
  const correctCount = rounds.filter((r) => r.isCorrect).length;
  const totalRounds = soloData?.totalQuestions || rounds.length || 5;
  const accuracy = Math.round((correctCount / Math.max(1, totalRounds)) * 100);
  const avgTime = calculateAverageTime(rounds);

  // Multiplayer Calculations
  const playerList = Object.values(room?.players || {});
  const rankedPlayers = rankPlayers(playerList);
  const winner = rankedPlayers[0] || null;

  const handleMultiPlayAgain = async () => {
    if (isHost && room?.code) {
      await resetRoomToLobby(room.code);
    }
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '2rem',
      maxWidth: '850px',
      padding: '2.5rem 1rem'
    }}>
      {/* Title & Podium Banner */}
      <div style={{ textAlign: 'center' }}>
        <div style={{
          width: '72px',
          height: '72px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 1.25rem',
          color: '#000000',
          boxShadow: '0 0 35px rgba(245, 158, 11, 0.5)'
        }}>
          <Trophy size={36} />
        </div>

        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 900, marginBottom: '0.4rem' }}>
          Permainan <span className="gradient-text-gold">Selesai!</span>
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)' }}>
          {isMultiplayer 
            ? `Pemenang utama adalah ${winner?.name || 'Juara 1'}!`
            : 'Berikut rangkuman performa dan skor permainanmu.'}
        </p>
      </div>

      {/* Main Score Showcase Card */}
      {!isMultiplayer ? (
        /* SOLO RESULT CARD */
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel" style={{
            padding: '2rem',
            borderRadius: 'var(--radius-xl)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1.5rem',
            textAlign: 'center',
            border: '1px solid rgba(245, 158, 11, 0.3)',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.4)'
          }}>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Total Skor</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: '#fbbf24', fontFamily: 'var(--font-heading)' }}>
                {soloData?.totalScore || 0}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Jawaban Benar</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-emerald)', fontFamily: 'var(--font-heading)' }}>
                {correctCount} / {totalRounds}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Akurasi</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-cyan-light)', fontFamily: 'var(--font-heading)' }}>
                {accuracy}%
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600 }}>Rata-rata Waktu</div>
              <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--accent-purple-light)', fontFamily: 'var(--font-heading)' }}>
                {avgTime}s
              </div>
            </div>
          </div>

          {/* Round-by-round Detailed Breakdown */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem', color: 'var(--text-primary)' }}>
              Rincian Setiap Ronde
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {rounds.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: item.isCorrect ? 'rgba(16, 185, 129, 0.08)' : 'rgba(244, 63, 94, 0.08)',
                    border: item.isCorrect ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(244, 63, 94, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: item.isCorrect ? 'rgba(16, 185, 129, 0.2)' : 'rgba(244, 63, 94, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {item.isCorrect ? (
                        <CheckCircle2 size={18} color="var(--accent-emerald)" />
                      ) : (
                        <XCircle size={18} color="var(--accent-rose)" />
                      )}
                    </div>

                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>
                        {item.person?.name || `Ronde ${idx + 1}`}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                        {item.person?.profession} • {item.person?.nationality}
                      </div>
                    </div>
                  </div>

                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontWeight: 800, fontSize: '1rem', color: item.isCorrect ? '#fbbf24' : 'var(--text-muted)' }}>
                      +{item.score} pts
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Waktu: {item.timeTaken}s
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* MULTIPLAYER PODIUM & LEADERBOARD */
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* Winner Highlight Banner */}
          {winner && (
            <div className="glass-panel" style={{
              padding: '2rem',
              borderRadius: 'var(--radius-xl)',
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(139, 92, 246, 0.2))',
              border: '2px solid rgba(245, 158, 11, 0.5)',
              boxShadow: '0 0 40px rgba(245, 158, 11, 0.25)'
            }}>
              <Crown size={42} color="#fbbf24" style={{ margin: '0 auto 0.75rem' }} />
              <h2 style={{ fontSize: '1.85rem', fontWeight: 900, color: '#ffffff', marginBottom: '0.25rem' }}>
                {winner.name}
              </h2>
              <div style={{ fontSize: '1.1rem', color: '#fbbf24', fontWeight: 800 }}>
                Juara 1 dengan Skor {winner.score || 0} Poin!
              </div>
            </div>
          )}

          {/* Full Player Leaderboard */}
          <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1rem' }}>
              Peringkat Akhir Seluruh Pemain
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {rankedPlayers.map((player) => {
                const isMe = player.id === playerId;
                return (
                  <div
                    key={player.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.85rem 1.25rem',
                      borderRadius: 'var(--radius-md)',
                      background: isMe ? 'rgba(56, 189, 248, 0.15)' : 'rgba(30, 41, 59, 0.5)',
                      border: isMe ? '1.5px solid var(--accent-cyan)' : '1px solid var(--border-subtle)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{
                        fontSize: '1.25rem',
                        fontWeight: 900,
                        minWidth: '32px'
                      }}>
                        {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : `#${player.rank}`}
                      </span>

                      <div>
                        <div style={{
                          fontWeight: 700,
                          fontSize: '1rem',
                          color: isMe ? 'var(--accent-cyan-light)' : 'var(--text-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <span>{player.name}</span>
                          {isMe && (
                            <span style={{
                              fontSize: '0.7rem',
                              padding: '1px 6px',
                              borderRadius: '4px',
                              background: 'var(--accent-cyan)',
                              color: '#000000',
                              fontWeight: 800
                            }}>
                              Anda
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 900,
                      fontSize: '1.25rem',
                      color: '#fbbf24'
                    }}>
                      {player.score || 0} <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>pts</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        {!isMultiplayer ? (
          <button
            onClick={onPlayAgain}
            className="btn btn-primary"
            style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
          >
            <RotateCcw size={18} />
            <span>Main Lagi</span>
          </button>
        ) : (
          isHost && (
            <button
              onClick={handleMultiPlayAgain}
              className="btn btn-purple"
              style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
            >
              <RotateCcw size={18} />
              <span>Kembali ke Lobby (Main Lagi)</span>
            </button>
          )
        )}

        <button
          onClick={onBackToHome}
          className="btn btn-secondary"
          style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
        >
          <Home size={18} />
          <span>Kembali ke Beranda</span>
        </button>
      </div>
    </div>
  );
}
