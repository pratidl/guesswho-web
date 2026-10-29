import React, { useState, useEffect } from 'react';
import { Users, PlusCircle, LogIn, ArrowLeft, AlertCircle, Sparkles } from 'lucide-react';
import { createRoom, joinRoom } from '../services/roomService.js';
import { soundService } from '../services/soundService.js';

export default function RoomJoinCreate({ onJoinedRoom, onNavigate }) {
  const [activeTab, setActiveTab] = useState('join'); // 'join' or 'create'
  const [nickname, setNickname] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    try {
      const storedName = localStorage.getItem('guesswho_nickname');
      if (storedName) setNickname(storedName);
    } catch {
      // ignore
    }
  }, []);

  const getPlayerId = () => {
    let pId = localStorage.getItem('guesswho_player_id');
    if (!pId) {
      pId = 'player_' + Math.random().toString(36).substring(2, 9);
      localStorage.setItem('guesswho_player_id', pId);
    }
    return pId;
  };

  const saveNickname = (name) => {
    try {
      localStorage.setItem('guesswho_nickname', name.trim());
    } catch {
      // ignore
    }
  };

  const handleCreate = async (e) => {
    if (e) e.preventDefault();
    setError('');
    const cleanNick = nickname.trim();
    if (!cleanNick) {
      setError('Harap masukkan nama / nickname kamu.');
      return;
    }

    setLoading(true);
    soundService.playTick();
    saveNickname(cleanNick);

    try {
      const playerId = getPlayerId();
      const { code } = await createRoom({
        hostName: cleanNick,
        hostId: playerId,
        settings: { category: 'all', roundCount: 5, roundDuration: 30 }
      });

      onJoinedRoom({ code, playerId, playerName: cleanNick, isHost: true });
    } catch (err) {
      setError(err.message || 'Gagal membuat room. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  const handleJoin = async (e) => {
    if (e) e.preventDefault();
    setError('');
    const cleanNick = nickname.trim();
    const cleanCode = roomCode.trim().toUpperCase();

    if (!cleanNick) {
      setError('Harap masukkan nama / nickname kamu.');
      return;
    }
    if (!cleanCode || cleanCode.length < 4) {
      setError('Harap masukkan kode room yang valid (contoh: G7K9P2).');
      return;
    }

    setLoading(true);
    soundService.playTick();
    saveNickname(cleanNick);

    try {
      const playerId = getPlayerId();
      await joinRoom(cleanCode, { playerId, playerName: cleanNick });
      onJoinedRoom({ code: cleanCode, playerId, playerName: cleanNick, isHost: false });
    } catch (err) {
      setError(err.message || 'Gagal bergabung ke room.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 140px)',
      padding: '2rem 1rem'
    }}>
      <div style={{ width: '100%', maxWidth: '480px' }}>
        {/* Back Button */}
        <button
          onClick={() => onNavigate('home')}
          className="btn btn-secondary"
          style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem', marginBottom: '1.5rem' }}
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </button>

        <div className="glass-panel" style={{
          padding: '2rem',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(139, 92, 246, 0.3)',
          boxShadow: 'var(--shadow-glow-purple)'
        }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '1.75rem' }}>
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1rem',
              color: '#ffffff',
              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.4)'
            }}>
              <Users size={28} />
            </div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '0.25rem' }}>
              Multiplayer <span className="gradient-text-cyan-purple">Room</span>
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              Bermain tebak foto bersama teman secara real-time
            </p>
          </div>

          {/* Nickname Input (Common for both Join and Create) */}
          <div style={{ marginBottom: '1.5rem' }}>
            <label style={{
              display: 'block',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: 'var(--text-secondary)',
              marginBottom: '0.4rem'
            }}>
              Nama / Nickname Kamu
            </label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Masukkan nickname (cth: Budi, Alex)..."
              maxLength={15}
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-heading)',
                fontSize: '1rem',
                outline: 'none'
              }}
            />
          </div>

          {/* Mode Switch Tabs */}
          <div style={{
            display: 'flex',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(15, 23, 42, 0.6)',
            padding: '4px',
            marginBottom: '1.5rem',
            border: '1px solid var(--border-subtle)'
          }}>
            <button
              type="button"
              onClick={() => { setActiveTab('join'); setError(''); }}
              style={{
                flex: 1,
                padding: '0.65rem',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                background: activeTab === 'join' ? 'var(--accent-purple)' : 'transparent',
                color: activeTab === 'join' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <LogIn size={16} />
              <span>Join Room</span>
            </button>

            <button
              type="button"
              onClick={() => { setActiveTab('create'); setError(''); }}
              style={{
                flex: 1,
                padding: '0.65rem',
                border: 'none',
                borderRadius: 'var(--radius-sm)',
                background: activeTab === 'create' ? 'var(--accent-purple)' : 'transparent',
                color: activeTab === 'create' ? '#ffffff' : 'var(--text-secondary)',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.4rem'
              }}
            >
              <PlusCircle size={16} />
              <span>Create Room</span>
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.4)',
              color: '#fda4af',
              fontSize: '0.85rem',
              marginBottom: '1.25rem'
            }}>
              <AlertCircle size={16} flexShrink={0} />
              <span>{error}</span>
            </div>
          )}

          {/* Form Actions */}
          {activeTab === 'join' ? (
            <form onSubmit={handleJoin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{
                  display: 'block',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                  marginBottom: '0.4rem'
                }}>
                  Kode Room (6 Karakter)
                </label>
                <input
                  type="text"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  placeholder="G7K9P2"
                  maxLength={6}
                  style={{
                    width: '100%',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--accent-cyan-light)',
                    fontFamily: 'monospace',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    letterSpacing: '0.15em',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    outline: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-purple"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                <LogIn size={18} />
                <span>{loading ? 'Menghubungkan...' : 'Gabung ke Room'}</span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleCreate} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Kamu akan menjadi <strong>Host</strong>. Kode room acak akan dibuat otomatis dan dapat kamu bagikan kepada teman-temanmu.
              </p>

              <button
                type="submit"
                disabled={loading}
                className="btn btn-purple"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1rem', marginTop: '0.5rem' }}
              >
                <PlusCircle size={18} />
                <span>{loading ? 'Membuat Room...' : 'Buat Room Baru'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
