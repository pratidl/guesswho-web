import React from 'react';
import { ArrowLeft, Eye, Clock, Trophy, Users, Keyboard, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundService } from '../services/soundService.js';

export default function HowToPlay({ onNavigate }) {
  return (
    <div className="container" style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '850px',
      padding: '2rem 1rem'
    }}>
      {/* Back button & Title */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button
          onClick={() => {
            soundService.playTick();
            onNavigate('home');
          }}
          className="btn btn-secondary"
          style={{ padding: '0.6rem 1rem', fontSize: '0.85rem' }}
        >
          <ArrowLeft size={16} />
          <span>Kembali ke Beranda</span>
        </button>

        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, textAlign: 'center' }}>
          Panduan & <span className="gradient-text-cyan-purple">Cara Bermain</span>
        </h1>

        <div style={{ width: '80px' }} />
      </div>

      {/* Guide Cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Step 1: Konsep Foto Blur */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(6, 182, 212, 0.15)',
            color: 'var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Eye size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              1. Foto Awalnya Sangat Blur
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Di awal setiap ronde (detik ke-0), foto tokoh terkenal ditampilkan dalam kondisi blur tinggi (26px). Seiring detik waktu berjalan, foto akan menjadi semakin jelas secara halus hingga blur berkurang menjadi 0px.
            </p>
          </div>
        </div>

        {/* Step 2: Petunjuk Bertahap */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(139, 92, 246, 0.15)',
            color: 'var(--accent-purple-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Sparkles size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              2. Petunjuk Informasi Muncul Bertahap
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Jangan khawatir jika foto masih sulit dikenali! Petunjuk berharga akan terbuka secara otomatis:
            </p>
            <ul style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', paddingLeft: '1.25rem', lineHeight: 1.6 }}>
              <li><strong>Detik ke-8:</strong> Petunjuk #1 (Profesi & Bidang Tokoh) terbuka.</li>
              <li><strong>Detik ke-15:</strong> Petunjuk #2 (Negara Asal / Kebangsaan) terbuka.</li>
              <li><strong>Detik ke-22:</strong> Petunjuk #3 (Prestasi atau Karya Kunci) terbuka.</li>
            </ul>
          </div>
        </div>

        {/* Step 3: Tebak Manual & Toleransi Typo */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(16, 185, 129, 0.15)',
            color: 'var(--accent-emerald)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Keyboard size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              3. Input Jawaban Manual Cerdas
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Ketik nama tokoh pada kolom input dan tekan <strong>Enter</strong> atau klik <strong>Submit</strong>. Sistem dilengkapi algoritma <em>Levenshtein Distance</em> dan pengenalan nama panggung/alias sehingga toleran terhadap sedikit kesalahan ketik (typo), huruf besar/kecil, spasi, atau tanda baca.
            </p>
          </div>
        </div>

        {/* Step 4: Sistem Skor Kecepatan */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(245, 158, 11, 0.15)',
            color: 'var(--accent-amber)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Trophy size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              4. Sistem Skor Berdasarkan Kecepatan
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '0.5rem' }}>
              Semakin cepat kamu menebak dengan benar saat foto masih blur, semakin melimpah poin yang kamu raih!
            </p>
            <div style={{
              padding: '0.75rem 1rem',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid var(--border-subtle)',
              fontFamily: 'monospace',
              fontSize: '0.9rem',
              color: 'var(--accent-cyan-light)',
              marginBottom: '0.5rem'
            }}>
              score = round(maxScore × (remainingTime / totalTime))
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Skor maksimal per ronde adalah 1000 poin. Menjawab di detik ke-3 menghasilkan ~900 poin, sedangkan menjawab di detik ke-15 menghasilkan ~500 poin.
            </p>
          </div>
        </div>

        {/* Step 5: Bermain Bersama Teman */}
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'rgba(236, 72, 153, 0.15)',
            color: '#f472b6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <Users size={24} />
          </div>
          <div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              5. Multiplayer Online Real-Time
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Pilih menu <strong>Play With Friends</strong> untuk membuat room atau bergabung dengan kode 6 karakter. Seluruh pemain menerima foto, timer server, dan petunjuk yang tersinkronisasi serentak. Papan peringkat (leaderboard) akan diperbarui secara real-time setiap kali pemain menebak benar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
