import React, { useState } from 'react';
import { Users, Crown, Play, Settings, LogOut, Sparkles, Check, Clock } from 'lucide-react';
import RoomCode from '../components/RoomCode.jsx';
import { CATEGORIES } from '../data/people.js';
import { updateRoomSettings, startRoomGame, leaveRoom } from '../services/roomService.js';
import { soundService } from '../services/soundService.js';

export default function RoomLobby({
  room,
  playerId,
  onGameStarted,
  onLeave
}) {
  const [starting, setStarting] = useState(false);
  const isHost = room?.hostId === playerId;
  const playerList = Object.values(room?.players || {});
  const settings = room?.settings || { category: 'all', roundCount: 5, roundDuration: 30 };

  const handleUpdateSettings = async (updates) => {
    if (!isHost || !room?.code) return;
    try {
      await updateRoomSettings(room.code, updates);
    } catch (e) {
      console.error(e);
    }
  };

  const handleStartGame = async () => {
    if (!isHost || starting || !room?.code) return;
    setStarting(true);
    soundService.playTick();
    try {
      await startRoomGame(room.code, settings);
    } catch (e) {
      console.error('Failed to start game', e);
      setStarting(false);
    }
  };

  const handleLeaveRoom = async () => {
    soundService.playTick();
    if (room?.code && playerId) {
      await leaveRoom(room.code, playerId);
    }
    onLeave();
  };

  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '900px',
      padding: '2rem 1rem'
    }}>
      {/* Top Bar: Room Code & Leave */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem'
      }}>
        <RoomCode code={room?.code || ''} />

        <button
          onClick={handleLeaveRoom}
          className="btn btn-danger"
          style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
        >
          <LogOut size={16} />
          <span>Keluar Room</span>
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {/* Left Column: Player List */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.75rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Users size={18} color="var(--accent-purple-light)" />
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>Daftar Pemain</h2>
            </div>
            <span style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              padding: '0.2rem 0.6rem',
              borderRadius: '20px',
              background: 'rgba(139, 92, 246, 0.15)',
              color: 'var(--accent-purple-light)'
            }}>
              {playerList.length} / 8 Pemain
            </span>
          </div>

          {/* Players Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {playerList.map((player) => {
              const isThisMe = player.id === playerId;

              return (
                <div
                  key={player.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isThisMe ? 'rgba(56, 189, 248, 0.1)' : 'rgba(15, 23, 42, 0.5)',
                    border: isThisMe ? '1px solid var(--accent-cyan)' : '1px solid var(--border-subtle)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '1rem',
                      color: '#ffffff'
                    }}>
                      {player.name?.charAt(0)?.toUpperCase() || '?'}
                    </div>

                    <div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontWeight: 700,
                        fontSize: '0.95rem'
                      }}>
                        <span>{player.name}</span>
                        {player.isHost && (
                          <span title="Host Room">
                            <Crown size={15} color="#fbbf24" />
                          </span>
                        )}
                        {isThisMe && (
                          <span style={{
                            fontSize: '0.7rem',
                            padding: '2px 6px',
                            borderRadius: '4px',
                            background: 'rgba(56, 189, 248, 0.2)',
                            color: 'var(--accent-cyan)'
                          }}>
                            Kamu
                          </span>
                        )}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--accent-emerald)', display: 'flex', alignItems: 'center', gap: '3px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-emerald)' }} />
                        <span>Siap bermain</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Waiting banner for non-host */}
          {!isHost && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.65rem',
              padding: '1rem',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(139, 92, 246, 0.1)',
              border: '1px dashed rgba(139, 92, 246, 0.3)',
              color: 'var(--accent-purple-light)',
              fontSize: '0.85rem',
              marginTop: 'auto'
            }}>
              <Clock size={18} className="animate-spin" />
              <span>Menunggu Host mengatur dan memulai permainan...</span>
            </div>
          )}
        </div>

        {/* Right Column: Game Settings & Start */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            paddingBottom: '0.75rem'
          }}>
            <Settings size={18} color="var(--accent-cyan-light)" />
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>
              {isHost ? 'Pengaturan Room (Host)' : 'Pengaturan Permainan'}
            </h2>
          </div>

          {/* Category Setting */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Kategori Tokoh
            </label>
            {isHost ? (
              <select
                value={settings.category || 'all'}
                onChange={(e) => handleUpdateSettings({ category: e.target.value })}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  outline: 'none'
                }}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id} style={{ background: '#0f172a' }}>
                    {cat.name}
                  </option>
                ))}
              </select>
            ) : (
              <div style={{
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(15, 23, 42, 0.5)',
                border: '1px solid var(--border-subtle)',
                fontSize: '0.9rem',
                fontWeight: 600
              }}>
                {CATEGORIES.find((c) => c.id === settings.category)?.name || 'Semua Kategori (Acak)'}
              </div>
            )}
          </div>

          {/* Round Count Setting */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Jumlah Ronde: {settings.roundCount || 5} Ronde
            </label>
            {isHost ? (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[3, 5, 8, 10].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => handleUpdateSettings({ roundCount: num })}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      fontSize: '0.85rem',
                      background: settings.roundCount === num ? 'var(--accent-purple)' : 'rgba(255, 255, 255, 0.07)',
                      color: '#ffffff',
                      fontWeight: 700
                    }}
                  >
                    {num}
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {settings.roundCount || 5} Ronde
              </div>
            )}
          </div>

          {/* Round Duration Setting */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
              Durasi per Ronde: {settings.roundDuration || 30} Detik
            </label>
            {isHost ? (
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {[20, 30, 45].map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() => handleUpdateSettings({ roundDuration: sec })}
                    className="btn"
                    style={{
                      flex: 1,
                      padding: '0.5rem',
                      fontSize: '0.85rem',
                      background: settings.roundDuration === sec ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.07)',
                      color: settings.roundDuration === sec ? '#000000' : '#ffffff',
                      fontWeight: 700
                    }}
                  >
                    {sec}s
                  </button>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                {settings.roundDuration || 30} Detik
              </div>
            )}
          </div>

          {/* Start Game Action (Host Only) */}
          {isHost && (
            <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
              <button
                onClick={handleStartGame}
                disabled={starting}
                className="btn btn-purple"
                style={{ width: '100%', padding: '0.85rem', fontSize: '1.05rem' }}
              >
                <Play size={20} />
                <span>{starting ? 'Memulai Permainan...' : 'Mulai Permainan Sekarang'}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
