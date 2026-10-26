import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Locale } from '../lib/content/types';
import { localePath } from '../lib/routes';
import { ui } from '../lib/content/common';
import Reveal from './Reveal';

export default function PageHeader({
  locale,
  eyebrow,
  title,
  intro,
  breadcrumbs,
  children,
  align = 'start',
}: {
  locale: Locale;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  breadcrumbs?: Array<{ name: string; path?: string }>;
  children?: ReactNode;
  align?: 'start' | 'center';
}) {
  const centered = align === 'center';
  return (
    <header className="relative overflow-hidden border-b border-white/10 pt-32 pb-14 sm:pt-40 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[44rem] -translate-x-1/2 glow-gold"
        aria-hidden="true"
      />
      <div className={`container-luxe relative z-10 ${centered ? 'text-center' : ''}`.trim()}>
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label={ui.breadcrumb[locale]} className="mb-8">
            <ol
              className={`flex flex-wrap items-center gap-2 text-xs text-dim ${
                centered ? 'justify-center' : ''
              }`.trim()}
            >
              <li>
                <Link href={localePath(locale)} className="transition-colors hover:text-accent-soft">
                  {ui.home[locale]}
                </Link>
              </li>
              {breadcrumbs.map((item, index) => {
                const last = index === breadcrumbs.length - 1;
                return (
                  <li key={`${item.name}-${index}`} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-white/25">
                      /
                    </span>
                    {item.path && !last ? (
                      <Link
                        href={localePath(locale, item.path)}
                        className="transition-colors hover:text-accent-soft"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span aria-current={last ? 'page' : undefined} className="text-stone-muted">
                        {item.name}
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
        <div className={centered ? 'mx-auto max-w-4xl' : 'max-w-4xl'}>
          <Reveal>
            <span className={`eyebrow ${centered ? 'centered' : ''}`}>{eyebrow}</span>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.02] text-bone sm:text-6xl lg:text-[4.3rem]">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={160}>
              <p className="lede mt-6 max-w-2xl">{intro}</p>
            </Reveal>
          )}
          {children && (
            <Reveal delay={240}>
              <div className="mt-8">{children}</div>
            </Reveal>
          )}
        </div>
      </div>
    </header>
  );
}
