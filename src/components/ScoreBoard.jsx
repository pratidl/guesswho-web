import React from 'react';
import { Trophy, Flame, Layers } from 'lucide-react';

export default function ScoreBoard({
  score = 0,
  currentRound = 1,
  totalRounds = 5,
  categoryName = 'Semua Kategori',
  lastAddedScore = null
}) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0.75rem 1.25rem',
      borderRadius: 'var(--radius-md)',
      background: 'rgba(15, 23, 42, 0.65)',
      border: '1px solid var(--border-subtle)',
      width: '100%',
      position: 'relative'
    }}>
      {/* Round & Category Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.3rem 0.65rem',
          borderRadius: '8px',
          background: 'rgba(56, 189, 248, 0.12)',
          color: 'var(--accent-cyan-light)',
          fontSize: '0.825rem',
          fontWeight: 700
        }}>
          <Layers size={14} />
          <span>Ronde {currentRound} / {totalRounds}</span>
        </div>

        <div style={{
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          fontWeight: 500
        }}>
          {categoryName}
        </div>
      </div>

      {/* Score */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        position: 'relative'
      }}>
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: 'rgba(245, 158, 11, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-amber)'
        }}>
          <Trophy size={15} />
        </div>

        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          fontSize: '1.25rem',
          color: '#fbbf24'
        }}>
          {score} <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)' }}>pts</span>
        </div>

        {/* Floating Added Score Animation */}
        {lastAddedScore && lastAddedScore > 0 && (
          <div
            className="animate-float-score"
            style={{
              position: 'absolute',
              right: '0px',
              top: '-18px',
              color: '#34d399',
              fontWeight: 800,
              fontSize: '1rem',
              pointerEvents: 'none',
              textShadow: '0 0 10px rgba(52, 211, 153, 0.6)'
            }}
          >
            +{lastAddedScore}
          </div>
        )}
      </div>
    </div>
  );
}
