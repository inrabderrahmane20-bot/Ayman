'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { track } from '../lib/analytics';
import { locales, type Locale } from '../lib/content/types';
import { languageNames } from '../lib/content/common';
import { localeFromPath, localePath, stripLocale } from '../lib/routes';

export default function LanguageSwitcher({
  locale,
  variant = 'bar',
  label,
}: {
  locale: Locale;
  variant?: 'bar' | 'stacked' | 'footer';
  label: string;
}) {
  const pathname = usePathname() || `/${locale}`;
  const current = localeFromPath(pathname) ?? locale;
  const rest = stripLocale(pathname);

  function remember(next: Locale) {
    document.cookie = `NEXT_LOCALE=${next}; Path=/; Max-Age=31536000; SameSite=Lax`;
    track('language_switch', { from: current, to: next });
  }

  if (variant === 'stacked') {
    return (
      <div>
        <p className="text-[0.68rem] uppercase tracking-[0.2em] text-dim">{label}</p>
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {locales.map((l) => (
            <li key={l}>
              <Link
                href={localePath(l, rest)}
                hrefLang={l}
                lang={l}
                onClick={() => remember(l)}
                aria-current={l === current ? 'page' : undefined}
                className={`flex min-h-11 items-center justify-center rounded border px-3 text-sm transition-colors ${
                  l === current
                    ? 'border-accent/60 bg-accent/10 text-accent-soft'
                    : 'border-white/15 text-stone-muted hover:border-white/30 hover:text-bone'
                }`}
              >
                {languageNames[l][locale]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        {locales.map((l) => (
          <Link
            key={l}
            href={localePath(l, rest)}
            hrefLang={l}
            lang={l}
            onClick={() => remember(l)}
            aria-current={l === current ? 'page' : undefined}
            className={`text-sm transition-colors ${
              l === current ? 'text-accent-soft' : 'text-stone-muted hover:text-bone'
            }`}
          >
            {languageNames[l][locale]}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <nav aria-label={label} className="flex items-center gap-1">
      {locales.map((l, index) => (
        <span key={l} className="flex items-center">
          {index > 0 && (
            <span aria-hidden="true" className="px-0.5 text-[0.6rem] text-white/25">
              /
            </span>
          )}
          <Link
            href={localePath(l, rest)}
            hrefLang={l}
            lang={l}
            onClick={() => remember(l)}
            aria-current={l === current ? 'page' : undefined}
            className={`rounded px-1.5 py-2 text-[0.68rem] font-medium uppercase tracking-[0.12em] transition-colors ${
              l === current ? 'text-accent-soft' : 'text-stone-muted hover:text-bone'
            }`}
          >
            {l}
          </Link>
        </span>
      ))}
    </nav>
  );
}
