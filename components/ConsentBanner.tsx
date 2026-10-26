'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import type { Locale } from '../lib/content/types';
import { consent } from '../lib/content/common';
import { localePath } from '../lib/routes';
import { COOKIE_SETTINGS_EVENT, readConsent, writeConsent } from '../lib/consent';

export default function ConsentBanner({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!readConsent()) setVisible(true);
    const onSettings = () => setVisible(true);
    window.addEventListener(COOKIE_SETTINGS_EVENT, onSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, onSettings);
  }, []);

  function choose(choice: 'accepted' | 'declined') {
    writeConsent(choice);
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-labelledby="consent-title"
      className="no-print fixed inset-x-0 bottom-0 z-[60] border-t border-white/15 bg-ink-900/98 shadow-[0_-20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
    >
      <div className="container-luxe py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2 id="consent-title" className="font-display text-lg text-bone">
              {consent.title[locale]}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-stone-muted">{consent.body[locale]}</p>
            <Link
              href={localePath(locale, '/cookies')}
              className="mt-2 inline-block text-sm text-accent-soft underline underline-offset-4 hover:text-white"
            >
              {consent.policy[locale]}
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-none">
            <button type="button" className="btn btn-gold btn-sm" onClick={() => choose('accepted')}>
              {consent.accept[locale]}
            </button>
            <button type="button" className="btn btn-outline btn-sm" onClick={() => choose('declined')}>
              {consent.decline[locale]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
