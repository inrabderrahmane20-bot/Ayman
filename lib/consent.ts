export const CONSENT_KEY = 'ayman-consent-v1';
export const CONSENT_EVENT = 'ayman:consent';
export const COOKIE_SETTINGS_EVENT = 'ayman:cookie-settings';

export type ConsentChoice = 'accepted' | 'declined';

export function readConsent(): ConsentChoice | null {
  if (typeof window === 'undefined') return null;
  try {
    const value = window.localStorage.getItem(CONSENT_KEY);
    return value === 'accepted' || value === 'declined' ? value : null;
  } catch {
    return null;
  }
}

export function writeConsent(choice: ConsentChoice) {
  try {
    window.localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    // Storage can be unavailable in private modes; the choice still applies to this page.
  }
  window.dispatchEvent(new CustomEvent<ConsentChoice>(CONSENT_EVENT, { detail: choice }));
}

export function clearConsent() {
  try {
    window.localStorage.removeItem(CONSENT_KEY);
  } catch {
    // Ignore storage failures.
  }
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}
