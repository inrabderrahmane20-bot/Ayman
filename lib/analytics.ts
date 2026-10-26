export type AnalyticsEvent =
  | 'cta_click'
  | 'apply_start'
  | 'apply_submit'
  | 'apply_delivered'
  | 'apply_fallback'
  | 'contact_submit'
  | 'contact_delivered'
  | 'contact_fallback'
  | 'whatsapp_click'
  | 'email_click'
  | 'language_switch'
  | 'pricing_view'
  | 'plan_select'
  | 'faq_open'
  | 'calculator_use'
  | 'protection_enquiry';

type AnalyticsValue = string | number | boolean;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Send a GA4 event only when the measurement script has been loaded after
 * consent. Params must never contain names, emails, phone numbers or message
 * content.
 */
export function track(event: AnalyticsEvent, params?: Record<string, AnalyticsValue>) {
  if (typeof window === 'undefined') return;
  if (typeof window.gtag !== 'function') return;
  window.gtag('event', event, params ?? {});
}

export function clickProps(location: string, label: string) {
  return { location, label };
}
