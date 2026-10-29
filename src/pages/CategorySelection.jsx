import React, { useState } from 'react';
import { 
  Sparkles, Crown, Landmark, Music, Film, Trophy, Video, BookOpen, Atom, Briefcase, ArrowLeft, Play, Clock
} from 'lucide-react';
import { CATEGORIES } from '../data/people.js';
import { soundService } from '../services/soundService.js';

const ICON_MAP = {
  Sparkles,
  Crown,
  Landmark,
  Music,
  Film,
  Trophy,
  Video,
  BookOpen,
  Atom,
  Briefcase
};

export default function CategorySelection({ onStartSoloGame, onNavigate }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [roundCount, setRoundCount] = useState(5);
  const [roundDuration, setRoundDuration] = useState(30);

  const handleSelectCategory = (catId) => {
    setSelectedCategory(catId);
    soundService.playTick();
  };

  const handleStart = () => {
    soundService.playTick();
    onStartSoloGame({
      category: selectedCategory,
      roundCount,
      roundDuration
    });
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '900px',
      padding: '2rem 1rem'
    }}>
      {/* Header with Back Button */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => onNavigate('home')}
          className="btn btn-secondary"
          style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} />
          <span>Kembali</span>
        </button>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, textAlign: 'center' }}>
          Pilih <span className="gradient-text-cyan-purple">Kategori Tokoh</span>
        </h1>

        <div style={{ width: '80px' }} />
      </div>

      {/* Category Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1rem'
      }}>
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          const IconComp = ICON_MAP[cat.icon] || Sparkles;

          return (
            <div
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              className="glass-panel"
              style={{
                padding: '1.25rem',
                cursor: 'pointer',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.85rem',
                background: isSelected 
                  ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(139, 92, 246, 0.2) 100%)' 
                  : 'rgba(30, 41, 59, 0.6)',
                border: isSelected 
                  ? '2px solid var(--accent-cyan)' 
                  : '1px solid var(--border-subtle)',
                boxShadow: isSelected ? 'var(--shadow-glow-cyan)' : 'none',
                transform: isSelected ? 'translateY(-2px)' : 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{
                width: '42px',
                height: '42px',
                borderRadius: '12px',
                background: isSelected 
                  ? 'linear-gradient(135deg, #06b6d4, #8b5cf6)' 
                  : 'rgba(255, 255, 255, 0.05)',
                color: isSelected ? '#ffffff' : 'var(--accent-cyan-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <IconComp size={22} />
              </div>

              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: isSelected ? '#ffffff' : 'var(--text-primary)',
                  marginBottom: '4px'
                }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.35 }}>
                  {cat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Game Settings Options: Rounds & Duration */}
      <div className="glass-panel" style={{
        padding: '1.5rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.5rem',
        borderRadius: 'var(--radius-lg)'
      }}>
        {/* Round Count Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Jumlah Ronde:
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[3, 5, 8, 10].map((num) => (
              <button
                key={num}
                type="button"
                onClick={() => setRoundCount(num)}
                className="btn"
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.9rem',
                  background: roundCount === num ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.07)',
                  color: roundCount === num ? '#000000' : 'var(--text-primary)',
                  fontWeight: 700
                }}
              >
                {num} Ronde
              </button>
            ))}
          </div>
        </div>

        {/* Round Duration Selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)' }}>
            Durasi per Ronde:
          </label>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[20, 30, 45].map((sec) => (
              <button
                key={sec}
                type="button"
                onClick={() => setRoundDuration(sec)}
                className="btn"
                style={{
                  padding: '0.45rem 1rem',
                  fontSize: '0.9rem',
                  background: roundDuration === sec ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.07)',
                  color: '#ffffff',
                  fontWeight: 700
                }}
              >
                {sec}s
              </button>
            ))}
          </div>
        </div>

        {/* Start Game Action */}
        <div>
          <button
            onClick={handleStart}
            className="btn btn-primary"
            style={{ padding: '0.85rem 2rem', fontSize: '1.1rem' }}
          >
            <Play size={20} />
            <span>Mulai Permainan</span>
          </button>
        </div>
      </div>
    </div>
  );
}
