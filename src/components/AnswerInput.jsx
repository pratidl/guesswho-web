import React, { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle2, XCircle, AlertCircle, HelpCircle, ArrowRight } from 'lucide-react';

export default function AnswerInput({
  onSubmitAnswer,
  onGiveUp,
  isAnswered = false,
  isRevealed = false,
  feedback = null,
  disabled = false,
  placeholder = 'Type your answer...'
}) {
  const [inputText, setInputText] = useState('');
  const inputRef = useRef(null);

  // Auto-focus input when a new round starts
  useEffect(() => {
    if (!isAnswered && !isRevealed && !disabled && inputRef.current) {
      setInputText('');
      inputRef.current.focus();
    }
  }, [isAnswered, isRevealed, disabled]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed || isAnswered || isRevealed || disabled) return;

    onSubmitAnswer(trimmed);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
      {/* Input Row */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', width: '100%' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            disabled={isAnswered || isRevealed || disabled}
            placeholder={placeholder}
            autoComplete="off"
            spellCheck="false"
            style={{
              width: '100%',
              padding: '0.85rem 1.15rem',
              background: 'rgba(15, 23, 42, 0.8)',
              border: feedback?.isCorrect 
                ? '2px solid var(--accent-emerald)' 
                : '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              color: 'var(--text-primary)',
              fontSize: '1rem',
              fontFamily: 'var(--font-heading)',
              outline: 'none',
              boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.4)',
              transition: 'border-color 0.2s, box-shadow 0.2s'
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!inputText.trim() || isAnswered || isRevealed || disabled}
          className="btn btn-primary"
          style={{
            padding: '0.85rem 1.35rem',
            opacity: (!inputText.trim() || isAnswered || isRevealed || disabled) ? 0.5 : 1,
            cursor: (!inputText.trim() || isAnswered || isRevealed || disabled) ? 'not-allowed' : 'pointer'
          }}
        >
          <Send size={18} />
          <span>Submit</span>
        </button>

        {onGiveUp && !isAnswered && !isRevealed && (
          <button
            type="button"
            onClick={onGiveUp}
            className="btn btn-secondary"
            style={{ padding: '0.85rem 1rem', fontSize: '0.85rem' }}
            title="Menyerah dan lihat jawaban benar"
          >
            Menyerah
          </button>
        )}
      </form>

      {/* Feedback Messages */}
      {feedback && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.65rem 1rem',
            borderRadius: 'var(--radius-md)',
            fontSize: '0.9rem',
            fontWeight: 600,
            animation: 'slideUp 0.25s ease-out',
            background: feedback.isCorrect
              ? 'rgba(16, 185, 129, 0.15)'
              : feedback.similarity > 0.65
              ? 'rgba(245, 158, 11, 0.15)'
              : 'rgba(244, 63, 94, 0.15)',
            border: `1px solid ${
              feedback.isCorrect
                ? 'rgba(16, 185, 129, 0.4)'
                : feedback.similarity > 0.65
                ? 'rgba(245, 158, 11, 0.4)'
                : 'rgba(244, 63, 94, 0.4)'
            }`,
            color: feedback.isCorrect
              ? '#6ee7b7'
              : feedback.similarity > 0.65
              ? '#fcd34d'
              : '#fda4af'
          }}
        >
          {feedback.isCorrect ? (
            <CheckCircle2 size={18} color="#10b981" />
          ) : feedback.similarity > 0.65 ? (
            <AlertCircle size={18} color="#f59e0b" />
          ) : (
            <XCircle size={18} color="#f43f5e" />
          )}
          <span>{feedback.message}</span>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
