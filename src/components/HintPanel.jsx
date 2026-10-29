import React from 'react';
import { Lock, Sparkles, Briefcase, Globe, Award, HelpCircle } from 'lucide-react';

export default function HintPanel({
  hints = [],
  nationality = '',
  profession = '',
  activeHintCount = 0,
  elapsedTime = 0,
  isRevealed = false
}) {
  const hintConfigs = [
    {
      title: 'Profesi & Bidang',
      unlockAt: 8,
      icon: Briefcase,
      content: hints[0] || (profession ? `Berprofesi sebagai: ${profession}` : 'Tokoh terkemuka di bidangnya.')
    },
    {
      title: 'Kewarganegaraan & Asal',
      unlockAt: 15,
      icon: Globe,
      content: hints[1] || (nationality ? `Berasal dari: ${nationality}` : 'Memiliki pengaruh internasional.')
    },
    {
      title: 'Prestasi & Karya Kunci',
      unlockAt: 22,
      icon: Award,
      content: hints[2] || 'Dikenal atas kontribusi besarnya dalam sejarah.'
    }
  ];

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
      width: '100%'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        fontWeight: 600
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <Sparkles size={15} color="var(--accent-purple-light)" />
          <span>Petunjuk Bertahap</span>
        </div>
        <span>{isRevealed ? 3 : Math.min(3, activeHintCount)} / 3 Terbuka</span>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem'
      }}>
        {hintConfigs.map((hint, idx) => {
          const isUnlocked = isRevealed || activeHintCount > idx;
          const timeLeft = Math.max(0, hint.unlockAt - elapsedTime);
          const IconComponent = hint.icon;

          return (
            <div
              key={idx}
              style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: isUnlocked 
                  ? 'rgba(30, 41, 59, 0.7)' 
                  : 'rgba(15, 23, 42, 0.4)',
                border: isUnlocked 
                  ? '1px solid rgba(139, 92, 246, 0.3)' 
                  : '1px dashed rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                transition: 'all 0.35s ease',
                boxShadow: isUnlocked ? '0 4px 15px rgba(0, 0, 0, 0.2)' : 'none'
              }}
            >
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: isUnlocked 
                  ? 'rgba(139, 92, 246, 0.2)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: isUnlocked ? 'var(--accent-purple-light)' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {isUnlocked ? <IconComponent size={16} /> : <Lock size={15} />}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: isUnlocked ? 'var(--accent-purple-light)' : 'var(--text-muted)',
                  marginBottom: '2px'
                }}>
                  Petunjuk #{idx + 1} – {hint.title}
                </div>

                {isUnlocked ? (
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--text-primary)',
                    lineHeight: 1.4,
                    animation: 'fadeIn 0.4s ease-out'
                  }}>
                    {hint.content}
                  </p>
                ) : (
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                    fontStyle: 'italic'
                  }}>
                    Terkunci — Terbuka dalam {timeLeft} detik
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
