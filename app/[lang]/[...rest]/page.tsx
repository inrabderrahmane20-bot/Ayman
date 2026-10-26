import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

/**
 * Any unknown path under a valid locale renders the localized 404. Without
 * this, Next would fall back to the nearest root not-found, which has no
 * locale and therefore no correct language or reading direction.
 */
export default function CatchAllPage() {
  notFound();
}
