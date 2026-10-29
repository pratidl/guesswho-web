import React, { useState } from 'react';
import { Copy, Check, Share2 } from 'lucide-react';

export default function RoomCode({ code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!code) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.85rem',
      padding: '0.6rem 1.15rem',
      background: 'rgba(15, 23, 42, 0.8)',
      border: '1px solid var(--border-glow)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-glow-cyan)'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-secondary)',
          fontWeight: 600
        }}>
          Kode Room
        </span>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '1.4rem',
          fontWeight: 900,
          letterSpacing: '0.2em',
          color: 'var(--accent-cyan-light)'
        }}>
          {code}
        </div>
      </div>

      <button
        onClick={handleCopy}
        className="btn btn-secondary"
        style={{
          padding: '0.45rem 0.75rem',
          fontSize: '0.8rem',
          borderRadius: 'var(--radius-sm)',
          gap: '0.35rem'
        }}
        title="Salin Kode Room"
      >
        {copied ? (
          <>
            <Check size={14} color="var(--accent-emerald)" />
            <span style={{ color: 'var(--accent-emerald)' }}>Disalin!</span>
          </>
        ) : (
          <>
            <Copy size={14} />
            <span>Salin</span>
          </>
        )}
      </button>
    </div>
  );
}
