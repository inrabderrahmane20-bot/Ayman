'use client';

import { useCallback, useRef, useState } from 'react';

type Props = {
  beforeSrc?: string;
  afterSrc?: string;
  result?: string;
  duration?: string;
  /** seed (0-360) to vary the placeholder tone per card */
  hue?: number;
};

function Placeholder({
  label,
  variant,
  hue = 0,
}: {
  label: string;
  variant: 'before' | 'after';
  hue?: number;
}) {
  const after = variant === 'after';
  return (
    <div
      className="absolute inset-0 flex items-end overflow-hidden"
      style={{
        background: after
          ? `radial-gradient(120% 90% at 70% 10%, hsl(${42 + hue} 55% 22%) 0%, #0c0b09 62%)`
          : `radial-gradient(120% 90% at 30% 10%, hsl(${220 + hue} 12% 24%) 0%, #0a0a0c 62%)`,
        filter: after ? 'none' : 'grayscale(0.5)',
      }}
    >
      {/* abstract figure */}
      <svg
        viewBox="0 0 200 320"
        className="absolute left-1/2 top-1/2 h-[78%] -translate-x-1/2 -translate-y-1/2"
        style={{ color: after ? 'rgba(212,175,55,0.9)' : 'rgba(180,185,195,0.5)' }}
        aria-hidden
      >
        <path
          fill="currentColor"
          opacity={after ? 0.95 : 0.55}
          d={
            after
              ? 'M100 18c14 0 23 10 23 24 0 9-4 15-10 19 18 5 30 17 33 38l8 56c1 9-6 14-13 11-7-2-9-9-10-17l-6-34-2 60 8 60c1 9-5 14-12 14s-11-5-12-13l-7-52-7 52c-1 8-5 13-12 13s-13-5-12-14l8-60-2-60-6 34c-1 8-3 15-10 17-7 3-14-2-13-11l8-56c3-21 15-33 33-38-6-4-10-10-10-19 0-14 9-24 23-24Z'
              : 'M100 20c12 0 21 9 21 22 0 8-4 14-9 17 16 5 26 16 29 35l9 58c1 8-5 13-12 11-6-2-8-8-9-15l-7-36-1 56 9 62c1 8-5 12-11 12s-10-4-11-12l-7-50-7 50c-1 8-5 12-11 12s-12-4-11-12l9-62-1-56-7 36c-1 7-3 13-9 15-7 2-13-3-12-11l9-58c3-19 13-30 29-35-5-3-9-9-9-17 0-13 9-22 21-22Z'
          }
        />
      </svg>
      <span
        className={`relative z-10 m-4 rounded-full px-3 py-1 font-sans text-[0.6rem] uppercase tracking-[0.22em] ${
          after ? 'bg-gold text-ink' : 'bg-white/10 text-bone'
        }`}
      >
        {label}
      </span>
    </div>
  );
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  result,
  duration,
  hue = 0,
}: Props) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="group relative aspect-[4/5] w-full cursor-ew-resize select-none overflow-hidden rounded-md border border-white/10"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        setFromClientX(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && setFromClientX(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      role="slider"
      aria-label="Before and after comparison"
      aria-valuenow={Math.round(pos)}
      aria-valuemin={0}
      aria-valuemax={100}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowLeft') setPos((p) => Math.max(2, p - 4));
        if (e.key === 'ArrowRight') setPos((p) => Math.min(98, p + 4));
      }}
    >
      {/* AFTER (full) */}
      {afterSrc ? (
        <img src={afterSrc} alt="After" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <Placeholder label="After" variant="after" hue={hue} />
      )}

      {/* BEFORE (clipped) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {beforeSrc ? (
          <img src={beforeSrc} alt="Before" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <Placeholder label="Before" variant="before" hue={hue} />
        )}
      </div>

      {/* Result badge */}
      {result && (
        <div className="pointer-events-none absolute right-3 top-3 z-20 rounded-full border border-gold/40 bg-ink/70 px-3 py-1.5 backdrop-blur">
          <span className="font-display text-sm text-gold">{result}</span>
          {duration && <span className="ml-2 text-[0.62rem] text-muted">{duration}</span>}
        </div>
      )}

      {/* Handle */}
      <div
        className="absolute inset-y-0 z-20 w-px bg-gold/80"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-ink text-gold shadow-lg">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
          </svg>
        </span>
      </div>
    </div>
  );
}
