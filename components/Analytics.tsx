'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SITE } from '../lib/site';
import { CONSENT_EVENT, readConsent, type ConsentChoice } from '../lib/consent';

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(';')
    .map((item) => item.split('=')[0]?.trim())
    .filter((name): name is string => Boolean(name) && (name.startsWith('_ga') || name === '_gid'));
  for (const name of names) {
    document.cookie = `${name}=; Max-Age=0; Path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; Path=/; Domain=${window.location.hostname}; SameSite=Lax`;
  }
}

export default function Analytics() {
  const gaId = SITE.gaId;
  const pathname = usePathname();
  const [accepted, setAccepted] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setAccepted(readConsent() === 'accepted');
    function onConsent(event: Event) {
      const choice = (event as CustomEvent<ConsentChoice>).detail;
      setAccepted(choice === 'accepted');
      if (choice === 'declined') {
        clearAnalyticsCookies();
        setReady(false);
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'denied',
          });
        }
      }
    }
    window.addEventListener(CONSENT_EVENT, onConsent);
    return () => window.removeEventListener(CONSENT_EVENT, onConsent);
  }, []);

  useEffect(() => {
    if (!accepted || !ready || typeof window.gtag !== 'function') return;
    window.gtag('event', 'page_view', {
      page_title: document.title,
      page_location: `${window.location.origin}${pathname}`,
      page_path: pathname,
    });
  }, [accepted, ready, pathname]);

  if (!gaId || !accepted) return null;

  return (
    <>
      <Script
        id="ga4-source"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`}
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          window.gtag = gtag;
          gtag('js', new Date());
          gtag('consent', 'default', {
            ad_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            analytics_storage: 'granted'
          });
          gtag('config', ${JSON.stringify(gaId)}, {
            send_page_view: false,
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
