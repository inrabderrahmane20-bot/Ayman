import type { ReactNode } from 'react';
import { Star } from './Icons';
import Reveal from './Reveal';

/* ── Section heading ───────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  invert = false,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
  invert?: boolean;
}) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <Reveal>
        <span className={`eyebrow ${centered ? 'centered' : ''}`}>{eyebrow}</span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`display mt-5 text-[2.1rem] leading-[1.04] sm:text-[2.8rem] lg:text-[3.4rem] ${
            invert ? 'text-ink' : 'text-bone'
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={`mt-5 text-base leading-relaxed ${
              invert ? 'text-ink/70' : 'text-muted'
            } ${centered ? 'mx-auto max-w-xl' : ''}`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ── Star rating ───────────────────────────────────────── */
export function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} width={15} height={15} />
      ))}
    </div>
  );
}

/* ── Inner-page hero header ────────────────────────────── */
export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <header className="relative overflow-hidden border-b border-white/10 pt-36 pb-16 sm:pt-44 sm:pb-24">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 glow-gold" />
      <div className="container-luxe relative z-10 text-center">
        <Reveal>
          <span className="eyebrow centered">{eyebrow}</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="display mx-auto mt-6 max-w-4xl text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {intro}
            </p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
