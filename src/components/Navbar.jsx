import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Users, HelpCircle, Trophy, Home } from 'lucide-react';
import { soundService } from '../services/soundService.js';

export default function Navbar({ currentScreen, onNavigate }) {
  const [isMuted, setIsMuted] = useState(soundService.isMuted);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('guesswho_high_score');
      if (stored) {
        setHighScore(parseInt(stored, 10));
      }
    } catch {
      // ignore
    }
  }, [currentScreen]);

  const handleToggleSound = () => {
    const muted = soundService.toggleMute();
    setIsMuted(muted);
    if (!muted) {
      soundService.playTick();
    }
  };

  return (
    <header style={{
      width: '100%',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(10, 15, 29, 0.85)',
      backdropFilter: 'blur(12px)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0.85rem 1rem'
      }}>
        {/* Brand Logo */}
        <div 
          onClick={() => onNavigate('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.25rem',
            boxShadow: '0 0 15px rgba(6, 182, 212, 0.4)'
          }}>
            🎭
          </div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.25rem',
              letterSpacing: '-0.02em',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Guess<span className="gradient-text-cyan-purple">Who</span>
            </div>
          </div>
        </div>

        {/* Center / Navigation items */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <button
            onClick={() => onNavigate('home')}
            className={`btn ${currentScreen === 'home' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
          >
            <Home size={16} />
            <span className="hide-mobile">Beranda</span>
          </button>

          <button
            onClick={() => onNavigate('category-selection')}
            className={`btn ${currentScreen === 'category-selection' || currentScreen === 'game-solo' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
          >
            <Sparkles size={16} />
            <span className="hide-mobile">Play Solo</span>
          </button>

          <button
            onClick={() => onNavigate('room-entry')}
            className={`btn ${currentScreen === 'room-entry' || currentScreen === 'lobby' || currentScreen === 'game-multi' ? 'btn-purple' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
          >
            <Users size={16} />
            <span className="hide-mobile">With Friends</span>
          </button>

          <button
            onClick={() => onNavigate('how-to-play')}
            className={`btn ${currentScreen === 'how-to-play' ? 'btn-primary' : 'btn-secondary'}`}
            style={{ padding: '0.5rem 0.85rem', fontSize: '0.875rem' }}
            title="Cara Bermain"
          >
            <HelpCircle size={16} />
            <span className="hide-mobile">Panduan</span>
          </button>
        </nav>

        {/* Right tools: High score & Audio Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          {highScore > 0 && (
            <div 
              className="hide-mobile"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.35rem 0.75rem',
                background: 'rgba(245, 158, 11, 0.12)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                borderRadius: '20px',
                color: '#fbbf24',
                fontSize: '0.8rem',
                fontWeight: 600
              }}
              title="Skor Tertinggi Anda"
            >
              <Trophy size={14} />
              <span>{highScore} pts</span>
            </div>
          )}

          <button
            onClick={handleToggleSound}
            className="btn btn-secondary btn-icon"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              color: isMuted ? 'var(--text-muted)' : 'var(--accent-cyan)'
            }}
            title={isMuted ? 'Nyalakan Efek Suara' : 'Matikan Suara (Mute)'}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hide-mobile {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
