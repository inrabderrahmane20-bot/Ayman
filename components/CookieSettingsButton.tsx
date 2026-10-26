'use client';

import { Cookie } from './Icons';
import { clearConsent } from '../lib/consent';

export default function CookieSettingsButton({ label }: { label: string }) {
  return (
    <button
      type="button"
      onClick={() => {
        clearConsent();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      }}
      className="inline-flex items-center gap-1.5 text-start text-sm text-stone-muted transition-colors hover:text-bone"
    >
      <Cookie width={15} height={15} aria-hidden="true" />
      {label}
    </button>
  );
}
