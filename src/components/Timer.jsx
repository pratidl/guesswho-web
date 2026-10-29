import React from 'react';
import { Clock, AlertTriangle } from 'lucide-react';

export default function Timer({ remainingTime = 30, totalDuration = 30 }) {
  const percentage = Math.max(0, Math.min(100, (remainingTime / totalDuration) * 100));
  const isCritical = remainingTime <= 5;
  const isWarning = remainingTime <= 12 && remainingTime > 5;

  let color = 'var(--accent-cyan)';
  if (isCritical) color = 'var(--accent-rose)';
  else if (isWarning) color = 'var(--accent-amber)';

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.4rem',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.9rem',
        fontWeight: 600
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          color: isCritical ? 'var(--accent-rose)' : 'var(--text-secondary)'
        }}>
          {isCritical ? <AlertTriangle size={16} /> : <Clock size={16} />}
          <span>Sisa Waktu</span>
        </div>
        <div 
          className={isCritical ? 'timer-critical' : ''}
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '1.25rem',
            fontWeight: 800,
            color
          }}
        >
          {remainingTime}s
        </div>
      </div>

      {/* Progress Bar */}
      <div style={{
        width: '100%',
        height: '8px',
        background: 'rgba(255, 255, 255, 0.08)',
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <div style={{
          height: '100%',
          width: `${percentage}%`,
          background: isCritical 
            ? 'linear-gradient(90deg, #f43f5e, #fb7185)' 
            : isWarning 
            ? 'linear-gradient(90deg, #f59e0b, #fbbf24)' 
            : 'linear-gradient(90deg, #06b6d4, #3b82f6)',
          borderRadius: '10px',
          transition: 'width 0.25s linear, background 0.3s ease',
          boxShadow: `0 0 10px ${color}`
        }} />
      </div>
    </div>
  );
}
