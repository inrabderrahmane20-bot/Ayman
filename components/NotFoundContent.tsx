'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { notFoundCopy } from '../lib/content/common';
import { defaultLocale, isLocale } from '../lib/content/types';
import { localePath } from '../lib/routes';
import { SITE } from '../lib/site';
import { Arrow } from './Icons';

export default function NotFoundContent() {
  const pathname = usePathname() || '';
  const first = pathname.split('/').filter(Boolean)[0];
  const locale = first && isLocale(first) ? first : defaultLocale;

  // Next 14 renders this boundary inside the locale layout, then re-applies the
  // layout's home metadata during hydration. Keep the tab title accurate and do
  // not let a 404 claim the locale homepage as its canonical.
  useEffect(() => {
    document.title = `404 — ${notFoundCopy.title[locale]} | ${SITE.name}`;
    document.querySelectorAll('link[rel="canonical"]').forEach((node) => node.remove());
  }, [locale]);

  return (
    <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-32 pb-20">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-80 w-[48rem] -translate-x-1/2 glow-gold opacity-60"
        aria-hidden="true"
      />
      <div className="container-luxe relative z-10 mx-auto max-w-2xl text-center">
        <span className="eyebrow centered">{notFoundCopy.eyebrow[locale]}</span>
        <h1 className="display mt-6 text-[2.6rem] leading-tight text-bone sm:text-6xl">
          {notFoundCopy.title[locale]}
        </h1>
        <p className="lede mx-auto mt-5 max-w-xl">{notFoundCopy.body[locale]}</p>
        <Link href={localePath(locale)} className="btn btn-gold mt-8">
          {notFoundCopy.home[locale]}
          <Arrow width={16} height={16} />
        </Link>
      </div>
    </section>
  );
}
