import type { ReactNode } from 'react';
import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className = '',
  titleClassName = '',
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
  titleClassName?: string;
  id?: string;
}) {
  const centered = align === 'center';
  return (
    <div className={`${centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} ${className}`.trim()}>
      {eyebrow && (
        <Reveal>
          <span className={`eyebrow ${centered ? 'centered' : ''}`}>{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={70}>
        <h2
          id={id}
          className={`display mt-5 text-[2rem] leading-[1.06] text-bone sm:text-[2.6rem] lg:text-[3.15rem] ${titleClassName}`.trim()}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={140}>
          <p className={`lede mt-5 ${centered ? 'mx-auto max-w-2xl' : ''}`.trim()}>{intro}</p>
        </Reveal>
      )}
    </div>
  );
}
