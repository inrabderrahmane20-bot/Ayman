'use client';

import type { ReactNode } from 'react';
import type { AnalyticsEvent } from '../lib/analytics';
import { track } from '../lib/analytics';

export default function TrackedLink({
  href,
  children,
  className,
  event,
  location,
  label,
  external = false,
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  event: AnalyticsEvent;
  location: string;
  label?: string;
  external?: boolean;
  ariaLabel?: string;
}) {
  return (
    <a
      href={href}
      className={className}
      aria-label={ariaLabel}
      onClick={() => track(event, { location, ...(label ? { label } : {}) })}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  );
}
