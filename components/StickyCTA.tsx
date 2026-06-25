'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { coach } from '../lib/content';
import { WhatsApp, Arrow, Close } from './Icons';

export default function StickyCTA() {
  const pathname = usePathname();
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 620);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Hide on the application page itself — they're already converting.
  if (pathname === '/apply') return null;

  return (
    <>
      {/* Floating WhatsApp consult */}
      <a
        href={coach.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-ink-800/90 text-gold shadow-[0_10px_40px_-10px_rgba(225,29,42,0.5)] backdrop-blur transition-transform duration-300 hover:scale-105 sm:bottom-7 sm:right-7"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/20" />
        <WhatsApp width={26} height={26} />
      </a>

      {/* Slide-up apply bar */}
      <AnimatePresence>
        {show && !dismissed && (
          <motion.div
            initial={{ y: 90, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 90, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-3 bottom-3 z-40 mx-auto max-w-3xl sm:inset-x-0 sm:bottom-6"
          >
            <div className="glass flex items-center justify-between gap-4 rounded-full px-5 py-3 pr-3 shadow-2xl">
              <div className="hidden items-center gap-3 sm:flex">
                <span className="h-2 w-2 animate-pulse-dot rounded-full bg-gold" />
                <p className="text-sm text-bone">
                  <span className="font-semibold">3 coaching spots</span>
                  <span className="text-muted"> open this month.</span>
                </p>
              </div>
              <p className="text-sm text-bone sm:hidden">Spots open this month</p>
              <div className="flex items-center gap-2">
                <Link href="/apply" className="btn btn-gold !px-5 !py-2.5 text-[0.7rem]">
                  Apply Now
                  <Arrow width={14} height={14} />
                </Link>
                <button
                  type="button"
                  aria-label="Dismiss"
                  onClick={() => setDismissed(true)}
                  className="flex h-9 w-9 items-center justify-center rounded-full text-dim transition-colors hover:text-bone"
                >
                  <Close width={16} height={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
