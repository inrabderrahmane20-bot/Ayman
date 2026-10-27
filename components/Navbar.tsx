'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Arrow, Close, Menu } from './Icons';
import LanguageSwitcher from './LanguageSwitcher';
import { nav, ui } from '../lib/content/common';
import type { Locale } from '../lib/content/types';
import { localePath, mainNav, stripLocale } from '../lib/routes';

const focusableSelector =
  'a[href], button:not([disabled]), select, input, textarea, [tabindex]:not([tabindex="-1"])';

export default function Navbar({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const currentPath = stripLocale(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = 'hidden';
    const panel = panelRef.current;
    const focusables = panel ? Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)) : [];
    focusables[0]?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
        return;
      }
      if (event.key !== 'Tab' || !panel) return;
      const items = Array.from(panel.querySelectorAll<HTMLElement>(focusableSelector)).filter(
        (el) => el.offsetParent !== null,
      );
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
      previous?.focus?.();
      triggerRef.current?.focus?.();
    };
  }, [open]);

  function isActive(path: string) {
    if (path === '/coaching') return currentPath === '/coaching' || currentPath.startsWith('/coaching/');
    return currentPath === path;
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink/95 backdrop-blur-xl border-b border-white/10' : 'border-b border-transparent bg-gradient-to-b from-ink/90 to-ink/70 backdrop-blur-md'
      }`}
    >
      <nav className="container-luxe flex h-[72px] items-center justify-between gap-4" aria-label={nav.primary[locale]}>
        <Link
          href={localePath(locale)}
          className="group flex min-h-11 items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/45 font-display text-lg text-accent-soft transition-colors group-hover:border-accent-soft"
          >
            A
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base tracking-wide text-bone">Coach Ayman</span>
            <span className="mt-1 text-[0.55rem] uppercase tracking-[0.22em] text-dim">
              {locale === 'fr' ? 'Coaching en ligne' : locale === 'ar' ? 'تدريب عبر الإنترنت' : 'Online coaching'}
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.path);
            return (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  aria-current={active ? 'page' : undefined}
                  className={`link-underline text-[0.75rem] uppercase tracking-[0.14em] transition-colors ${
                    active ? 'text-accent-soft' : 'text-stone-muted hover:text-bone'
                  }`}
                >
                  {nav[item.key][locale]}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitcher locale={locale} label={nav.language[locale]} />
          <Link href={localePath(locale, '/apply')} className="btn btn-gold btn-sm">
            {ui.applyShort[locale]}
            <Arrow width={14} height={14} />
          </Link>
        </div>

        <button
          ref={triggerRef}
          type="button"
          aria-label={open ? nav.close[locale] : nav.menu[locale]}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setOpen((value) => !value);
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-bone transition-colors hover:border-white/40 lg:hidden"
        >
          {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
        </button>
      </nav>

      <div
        id="mobile-navigation"
        ref={panelRef}
        role="dialog"
        aria-modal={open}
        aria-hidden={!open}
        aria-label={nav.primary[locale]}
        data-nav-mobile
        className={`fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-white/10 bg-ink/98 backdrop-blur-xl lg:hidden`}
        style={{ display: open ? 'block' : 'none', pointerEvents: open ? 'auto' : 'none', height: open ? 'calc(100dvh - 72px)' : '0', minHeight: open ? 'calc(100dvh - 72px)' : '0' }}
      >
          <div className="container-luxe flex min-h-full flex-col py-7" style={{ minHeight: 'calc(100vh - 72px)' }}>
            <ul className="flex flex-col">
              {mainNav.map((item) => {
                const active = isActive(item.path);
                return (
                  <li key={item.path} className="border-b border-white/10">
                    <Link
                      href={localePath(locale, item.path)}
                      onClick={() => setOpen(false)}
                      aria-current={active ? 'page' : undefined}
                      className={`flex min-h-14 items-center justify-between py-3 font-display text-2xl ${
                        active ? 'text-accent-soft' : 'text-bone'
                      }`}
                    >
                      {nav[item.key][locale]}
                      <Arrow width={18} height={18} className="arrow-icon text-accent-soft" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8">
              <LanguageSwitcher locale={locale} variant="stacked" label={nav.language[locale]} />
            </div>

            <div className="mt-auto pt-10">
              <Link
                href={localePath(locale, '/apply')}
                onClick={() => setOpen(false)}
                className="btn btn-gold w-full"
              >
                {ui.apply[locale]}
                <Arrow width={16} height={16} />
              </Link>
              <p className="mt-4 text-center text-xs text-dim">
                {locale === 'fr'
                  ? 'Aucun paiement sur ce site.'
                  : locale === 'ar'
                    ? 'لا يوجد دفع على هذا الموقع.'
                    : 'No payment is collected on this site.'}
              </p>
            </div>
          </div>
        </div>
    </header>
  );
}
