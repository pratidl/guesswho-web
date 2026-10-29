import React, { useState, useEffect } from 'react';
import { ImageOff, ExternalLink, ShieldCheck } from 'lucide-react';

export default function BlurImage({
  src,
  alt = 'Foto Tokoh Terkenal',
  blurAmount = 25,
  isRevealed = false,
  sourceName = 'Wikimedia Commons',
  wikiTitle = ''
}) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [resolvedSrc, setResolvedSrc] = useState(src || '');
  const [fallbackTried, setFallbackTried] = useState(false);

  // Reset image status when a new person is shown. If no direct image URL
  // exists, resolve the page thumbnail from Wikipedia using the supplied title.
  useEffect(() => {
    let cancelled = false;
    setHasError(false);
    setIsLoading(true);
    setResolvedSrc(src || '');
    setFallbackTried(false);

    const resolveImage = async () => {
      if (src) return;
      const title = String(wikiTitle || alt || '').trim();
      if (!title) {
        if (!cancelled) { setIsLoading(false); setHasError(true); }
        return;
      }
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&format=json&formatversion=2&prop=pageimages&piprop=thumbnail&pithumbsize=600&redirects=1&titles=${encodeURIComponent(title.replace(/ /g, '_'))}&origin=*`,
          { headers: { Accept: 'application/json' } }
        );
        if (response.ok) {
          const data = await response.json();
          const imageUrl = data?.query?.pages?.[0]?.thumbnail?.source;
          if (imageUrl && !cancelled) {
            setResolvedSrc(imageUrl);
            setIsLoading(true);
            setHasError(false);
            return;
          }
        }
      } catch (error) {
        // Try the fallback search below when the exact page has no image.
      }
      try {
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(title)}&gsrnamespace=0&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=600&format=json&origin=*`,
          { headers: { Accept: 'application/json' } }
        );
        if (response.ok) {
          const data = await response.json();
          const pages = Object.values(data?.query?.pages || {});
          const imageUrl = pages[0]?.thumbnail?.source;
          if (imageUrl && !cancelled) {
            setResolvedSrc(imageUrl);
            setIsLoading(true);
            setHasError(false);
            return;
          }
        }
      } catch (error) {
        // Show the existing fallback UI if Wikipedia is unavailable.
      }
      if (!cancelled) { setIsLoading(false); setHasError(true); }
    };

    resolveImage();
    return () => { cancelled = true; };
  }, [src, alt, wikiTitle]);

  const handleImageError = async () => {
    setIsLoading(false);

    // Some Commons thumbnail URLs can be stale. Try Wikipedia's page thumbnail once.
    if (!fallbackTried && alt) {
      setFallbackTried(true);
      try {
        const title = String(wikiTitle || alt).replace(/^Ir\.\s*/i, '').trim();
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title.replace(/ /g, '_'))}`,
          { headers: { Accept: 'application/json' } }
        );
        if (response.ok) {
          const data = await response.json();
          const fallbackUrl = data?.thumbnail?.source || data?.originalimage?.source;
          if (fallbackUrl && fallbackUrl !== resolvedSrc) {
            setResolvedSrc(fallbackUrl);
            setIsLoading(true);
            setHasError(false);
            return;
          }
        }

        // If the exact Wikipedia title differs, search for the closest matching page.
        const searchResponse = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(title)}&gsrnamespace=0&gsrlimit=1&prop=pageimages&piprop=thumbnail&pithumbsize=600&format=json&origin=*`,
          { headers: { Accept: 'application/json' } }
        );
        if (searchResponse.ok) {
          const searchData = await searchResponse.json();
          const pages = Object.values(searchData?.query?.pages || {});
          const fallbackUrl = pages[0]?.thumbnail?.source;
          if (fallbackUrl && fallbackUrl !== resolvedSrc) {
            setResolvedSrc(fallbackUrl);
            setIsLoading(true);
            setHasError(false);
            return;
          }
        }
      } catch (error) {
        // Keep the local fallback UI if the external API is unavailable.
      }
    }

    setHasError(true);
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      maxWidth: '380px',
      aspectRatio: '3/4',
      margin: '0 auto',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      background: 'radial-gradient(circle, #1e293b 0%, #0f172a 100%)',
      border: isRevealed 
        ? '2px solid var(--accent-emerald)' 
        : '1px solid var(--border-glow)',
      boxShadow: isRevealed 
        ? '0 0 30px rgba(16, 185, 129, 0.35)' 
        : '0 10px 30px -10px rgba(0, 0, 0, 0.7)',
      transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      {/* Loading Skeleton */}
      {isLoading && !hasError && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, #1e293b 25%, #334155 50%, #1e293b 75%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite linear',
          zIndex: 1
        }}>
          <style>{`
            @keyframes shimmer {
              0% { background-position: -200% 0; }
              100% { background-position: 200% 0; }
            }
          `}</style>
        </div>
      )}

      {/* Main Image with Progressive Blur */}
      {!hasError && resolvedSrc ? (
        <img
          src={resolvedSrc}
          alt={isRevealed ? alt : 'Misteri Tokoh'}
          onLoad={() => setIsLoading(false)}
          onError={handleImageError}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top center',
            filter: `blur(${blurAmount}px)`,
            transform: isRevealed ? 'scale(1)' : 'scale(1.06)',
            transition: 'filter 0.45s ease-out, transform 0.6s ease-out',
            display: 'block',
            userSelect: 'none',
            pointerEvents: 'none'
          }}
        />
      ) : (
        /* Fallback if image fails */
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          color: 'var(--text-secondary)'
        }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
            color: 'var(--accent-cyan)'
          }}>
            <ImageOff size={32} />
          </div>
          <p style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
            {isRevealed ? alt : 'Gambar Sedang Dimuat'}
          </p>
          <span style={{ fontSize: '0.8rem', marginTop: '0.25rem' }}>
            Foto tokoh terkenal terverifikasi
          </span>
        </div>
      )}

      {/* Blur Level Indicator Badge */}
      <div style={{
        position: 'absolute',
        top: '12px',
        left: '12px',
        padding: '0.35rem 0.75rem',
        background: 'rgba(10, 15, 29, 0.75)',
        backdropFilter: 'blur(8px)',
        borderRadius: '20px',
        fontSize: '0.75rem',
        fontWeight: 600,
        color: isRevealed ? 'var(--accent-emerald)' : 'var(--accent-cyan-light)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.4rem',
        zIndex: 5
      }}>
        {isRevealed ? (
          <>
            <ShieldCheck size={13} color="var(--accent-emerald)" />
            <span>Terungkap Jelas</span>
          </>
        ) : (
          <>
            <span style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: blurAmount <= 6 ? 'var(--accent-amber)' : 'var(--accent-cyan)',
              boxShadow: `0 0 8px ${blurAmount <= 6 ? 'var(--accent-amber)' : 'var(--accent-cyan)'}`
            }} />
            <span>Tingkat Blur: {blurAmount}px</span>
          </>
        )}
      </div>

      {/* Image Attribution */}
      {sourceName && (
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          padding: '0.2rem 0.5rem',
          background: 'rgba(0, 0, 0, 0.65)',
          backdropFilter: 'blur(4px)',
          borderRadius: '6px',
          fontSize: '0.65rem',
          color: 'var(--text-muted)',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          <span>{sourceName}</span>
        </div>
      )}
    </div>
  );
}
