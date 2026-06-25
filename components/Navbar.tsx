'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { navLinks } from '../lib/content';
import { Menu, Close, Arrow } from './Icons';

function Wordmark() {
  return (
    <Link href="/" aria-label="Ayman Coaching — home" className="group flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 text-gold transition-colors duration-500 group-hover:border-gold">
        <span className="font-display text-lg leading-none">A</span>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-base tracking-wide text-bone">AYMAN</span>
        <span className="font-sans text-[0.55rem] uppercase tracking-[0.34em] text-gold/80">
          Coaching
        </span>
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-luxe flex h-[72px] items-center justify-between">
        <Wordmark />

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={`link-underline font-sans text-[0.8rem] uppercase tracking-[0.16em] transition-colors duration-300 ${
                    active ? 'text-gold' : 'text-bone/70 hover:text-bone'
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Link href="/apply" className="btn btn-gold !px-6 !py-3 text-[0.72rem]">
            Apply Now
            <Arrow width={15} height={15} />
          </Link>
        </div>

        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-bone lg:hidden"
        >
          {open ? <Close width={20} height={20} /> : <Menu width={20} height={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 bg-ink/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-luxe flex flex-col gap-1 py-6">
              {navLinks.map((l, i) => {
                const active = pathname === l.href;
                return (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05 }}
                  >
                    <Link
                      href={l.href}
                      className={`flex items-center justify-between border-b border-white/5 py-4 font-display text-2xl ${
                        active ? 'text-gold' : 'text-bone'
                      }`}
                    >
                      {l.label}
                      <Arrow width={18} height={18} className="text-gold" />
                    </Link>
                  </motion.li>
                );
              })}
              <li className="pt-5">
                <Link href="/apply" className="btn btn-gold w-full">
                  Apply for Coaching
                  <Arrow width={16} height={16} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
