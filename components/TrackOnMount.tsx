'use client';

import { useEffect } from 'react';
import type { AnalyticsEvent } from '../lib/analytics';
import { track } from '../lib/analytics';

/** Fires one non-PII analytics event when a page becomes visible. */
export default function TrackOnMount({
  event,
  location,
  label,
}: {
  event: AnalyticsEvent;
  location: string;
  label?: string;
}) {
  useEffect(() => {
    track(event, { location, ...(label ? { label } : {}) });
  }, [event, location, label]);

  return null;
}
