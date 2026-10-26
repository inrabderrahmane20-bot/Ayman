'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { Locale } from '../lib/content/types';
import { ui } from '../lib/content/common';
import { localePath } from '../lib/routes';
import { whatsappLink } from '../lib/site';
import { track } from '../lib/analytics';
import { CONSENT_EVENT, readConsent } from '../lib/consent';
import { Arrow, WhatsApp } from './Icons';

export default function StickyCTA({ locale }: { locale: Locale }) {
  const pathname = usePathname() || '';
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    setResolved(readConsent() !== null);
    const onConsent = () => setResolved(true);
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  if (!resolved) return null;
  if (pathname.endsWith('/apply') || pathname.endsWith('/contact')) return null;

  return (
    <div
      className="no-print fixed inset-x-0 bottom-0 z-40 border-t border-white/15 bg-ink-900/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl md:hidden"
      aria-label={locale === 'fr' ? 'Actions rapides' : locale === 'ar' ? 'إجراءات سريعة' : 'Quick actions'}
    >
      <div className="flex items-center gap-2.5">
        <Link
          href={localePath(locale, '/apply')}
          onClick={() => track('cta_click', { location: 'sticky_mobile', label: 'apply' })}
          className="btn btn-gold flex-1 !px-4 !py-3"
        >
          {ui.applyShort[locale]}
          <Arrow width={15} height={15} />
        </Link>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('whatsapp_click', { location: 'sticky_mobile' })}
          className="btn btn-outline flex-1 !px-4 !py-3"
          aria-label={`${ui.whatsapp[locale]} — ${locale === 'fr' ? 'ouvre une nouvelle fenêtre' : locale === 'ar' ? 'يفتح نافذة جديدة' : 'opens in a new window'}`}
        >
          <WhatsApp width={16} height={16} />
          WhatsApp
        </a>
      </div>
    </div>
  );
}
