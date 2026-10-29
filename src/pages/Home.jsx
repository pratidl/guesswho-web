import React, { useState, useEffect } from 'react';
import { Play, Users, HelpCircle, Trophy, Sparkles, Zap, Award, Flame, CheckCircle2 } from 'lucide-react';
import { CATEGORIES, FAMOUS_PEOPLE } from '../data/people.js';
import { soundService } from '../services/soundService.js';

export default function Home({ onNavigate }) {
  const [highScore, setHighScore] = useState(0);
  const [totalGames, setTotalGames] = useState(0);

  useEffect(() => {
    try {
      const storedHighScore = localStorage.getItem('guesswho_high_score');
      const storedTotalGames = localStorage.getItem('guesswho_total_games');
      if (storedHighScore) setHighScore(parseInt(storedHighScore, 10));
      if (storedTotalGames) setTotalGames(parseInt(storedTotalGames, 10));
    } catch {
      // ignore
    }
  }, []);

  const handleStartSolo = () => {
    soundService.playTick();
    onNavigate('category-selection');
  };

  const handleStartMultiplayer = () => {
    soundService.playTick();
    onNavigate('room-entry');
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 120px)',
      gap: '2.5rem',
      padding: '2rem 1rem'
    }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', maxWidth: '750px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          padding: '0.4rem 1rem',
          borderRadius: '30px',
          background: 'rgba(6, 182, 212, 0.1)',
          border: '1px solid var(--border-glow)',
          color: 'var(--accent-cyan-light)',
          fontSize: '0.85rem',
          fontWeight: 600,
          marginBottom: '1.25rem'
        }}>
          <Sparkles size={16} />
          <span>Interactive Multimedia Guessing Game</span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 4.2rem)',
          fontWeight: 900,
          lineHeight: 1.1,
          marginBottom: '1.25rem'
        }}>
          Tebak Tokoh Terkenal Dari <span className="gradient-text-cyan-purple">Foto Blur</span>
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.2rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.6,
          maxWidth: '620px',
          margin: '0 auto'
        }}>
          Uji ketajaman mata dan wawasanmu! Tebak nama tokoh nasional & dunia dari foto yang awalnya sangat blur hingga perlahan semakin jelas bersama petunjuk bertahap.
        </p>
      </div>

      {/* Main Action Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5rem',
        width: '100%',
        maxWidth: '780px'
      }}>
        {/* Play Solo Card */}
        <div 
          onClick={handleStartSolo}
          className="glass-panel"
          style={{
            padding: '2rem',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: 'var(--shadow-glow-cyan)'
          }}
        >
          <div>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #06b6d4, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              marginBottom: '1rem',
              boxShadow: '0 8px 20px rgba(6, 182, 212, 0.4)'
            }}>
              <Zap size={28} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              Play Solo
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Mainkan tebakan sendiri dengan timer kecepatan untuk mengumpulkan skor tertinggi.
            </p>
          </div>

          <button className="btn btn-primary" style={{ width: '100%' }}>
            <Play size={18} />
            <span>Mulai Solo</span>
          </button>
        </div>

        {/* Play With Friends Card */}
        <div 
          onClick={handleStartMultiplayer}
          className="glass-panel"
          style={{
            padding: '2rem',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem',
            background: 'linear-gradient(145deg, rgba(30, 41, 59, 0.8) 0%, rgba(15, 23, 42, 0.9) 100%)',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            boxShadow: 'var(--shadow-glow-purple)'
          }}
        >
          <div>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #8b5cf6, #6366f1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              marginBottom: '1rem',
              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)'
            }}>
              <Users size={28} />
            </div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.4rem' }}>
              Play With Friends
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              Buat room multiplayer, bagikan kode unik, dan adu kecepatan tebak foto bersama teman secara real-time.
            </p>
          </div>

          <button className="btn btn-purple" style={{ width: '100%' }}>
            <Users size={18} />
            <span>Masuk Room</span>
          </button>
        </div>
      </div>

      {/* Quick stats & features banner */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2rem',
        padding: '1rem 1.5rem',
        borderRadius: 'var(--radius-lg)',
        background: 'rgba(15, 23, 42, 0.6)',
        border: '1px solid var(--border-subtle)',
        width: '100%',
        maxWidth: '780px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Trophy size={20} color="#fbbf24" />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>High Score Solo</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: '#fbbf24' }}>
              {highScore} pts
            </div>
          </div>
        </div>

        <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} className="hide-mobile" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Sparkles size={20} color="var(--accent-cyan)" />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Total Tokoh</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-cyan-light)' }}>
              {FAMOUS_PEOPLE.length}+ Tokoh
            </div>
          </div>
        </div>

        <div style={{ width: '1px', height: '32px', background: 'var(--border-subtle)' }} className="hide-mobile" />

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <Award size={20} color="var(--accent-purple-light)" />
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Kategori Tersedia</div>
            <div style={{ fontWeight: 800, fontSize: '1.1rem', color: 'var(--accent-purple-light)' }}>
              {CATEGORIES.length - 1} Kategori
            </div>
          </div>
        </div>
      </div>

      {/* How to play trigger button */}
      <div>
        <button
          onClick={() => onNavigate('how-to-play')}
          className="btn btn-secondary"
          style={{ gap: '0.45rem', fontSize: '0.9rem' }}
        >
          <HelpCircle size={16} />
          <span>Pelajari Aturan & Sistem Penilaian</span>
        </button>
      </div>
    </div>
  );
}
