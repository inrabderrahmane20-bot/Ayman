'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { AnalyticsEvent } from '../lib/analytics';
import { track } from '../lib/analytics';

/** Internal CTA link that keeps client-side navigation and records one event. */
export default function TrackedNextLink({
  href,
  children,
  className,
  event = 'cta_click',
  location,
  label,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  event?: AnalyticsEvent;
  location: string;
  label?: string;
  ariaLabel?: string;
}) {
  return (
    <Link
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track(event, { location, ...(label ? { label } : {}) })}
    >
      {children}
    </Link>
  );
}
