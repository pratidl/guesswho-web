import React from 'react';
import { Trophy, CheckCircle, Clock, Crown, User } from 'lucide-react';
import { rankPlayers } from '../services/scoreCalculator.js';

export default function Leaderboard({
  players = {},
  currentPlayerId = null,
  currentRoundIndex = 0,
  showRoundStatus = true
}) {
  const playerList = Object.values(players || {});
  const ranked = rankPlayers(playerList);

  const getRankBadge = (rank) => {
    if (rank === 1) return { label: '🥇', bg: 'rgba(245, 158, 11, 0.2)', color: '#fbbf24' };
    if (rank === 2) return { label: '🥈', bg: 'rgba(148, 163, 184, 0.2)', color: '#e2e8f0' };
    if (rank === 3) return { label: '🥉', bg: 'rgba(217, 119, 6, 0.2)', color: '#d97706' };
    return { label: `#${rank}`, bg: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' };
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.65rem',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontWeight: 600,
        padding: '0 0.25rem'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Trophy size={15} color="var(--accent-amber)" />
          <span>Klasemen Sementara</span>
        </div>
        <span>{playerList.length} Pemain</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.45rem',
        maxHeight: '340px',
        overflowY: 'auto'
      }}>
        {ranked.map((player) => {
          const isMe = player.id === currentPlayerId;
          const badge = getRankBadge(player.rank);
          const hasAnsweredCurrentRound = Boolean(player.roundAnswers?.[currentRoundIndex]);
          const isCorrect = player.roundAnswers?.[currentRoundIndex]?.isCorrect;

          return (
            <div
              key={player.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                background: isMe ? 'rgba(56, 189, 248, 0.12)' : 'rgba(30, 41, 59, 0.5)',
                border: isMe ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)',
                transition: 'all 0.2s ease'
              }}
            >
              {/* Left: Rank & Name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <div style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '6px',
                  background: badge.bg,
                  color: badge.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.85rem'
                }}>
                  {badge.label}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    color: isMe ? 'var(--accent-cyan-light)' : 'var(--text-primary)'
                  }}>
                    <span>{player.name}</span>
                    {player.isHost && (
                      <span title="Room Host">
                        <Crown size={13} color="var(--accent-amber)" />
                      </span>
                    )}
                    {isMe && (
                      <span style={{
                        fontSize: '0.65rem',
                        padding: '1px 5px',
                        borderRadius: '4px',
                        background: 'rgba(56, 189, 248, 0.2)',
                        color: 'var(--accent-cyan)'
                      }}>
                        Anda
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Round status & Score */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                {showRoundStatus && (
                  <div title={hasAnsweredCurrentRound ? (isCorrect ? 'Benar!' : 'Menjawab') : 'Sedang berpikir'}>
                    {hasAnsweredCurrentRound ? (
                      <CheckCircle size={16} color={isCorrect ? 'var(--accent-emerald)' : 'var(--text-muted)'} />
                    ) : (
                      <Clock size={16} color="var(--text-muted)" />
                    )}
                  </div>
                )}

                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 800,
                  fontSize: '0.95rem',
                  color: '#fbbf24',
                  minWidth: '55px',
                  textAlign: 'right'
                }}>
                  {player.score || 0} <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>pts</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
