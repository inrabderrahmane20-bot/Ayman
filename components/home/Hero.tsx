'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import BeforeAfter from '../BeforeAfter';
import { Arrow, Star } from '../Icons';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(80% 60% at 25% 20%, rgba(212,175,55,0.10) 0%, transparent 55%), radial-gradient(70% 60% at 85% 80%, rgba(212,175,55,0.06) 0%, transparent 55%), #08080a',
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
      </div>

      <div className="container-luxe grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="chip border-gold/30 !text-gold-soft"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
            Elite Online Transformation Coaching
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="display mt-6 text-[2.9rem] leading-[0.98] sm:text-[3.8rem] lg:text-[4.6rem]"
          >
            Your Body Can Change <span className="gold-gradient italic">Faster</span> Than You
            Think.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            Personalized training, nutrition, accountability and coaching designed specifically
            around your goals, lifestyle, schedule and body.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/apply" className="btn btn-gold">
              Start My Transformation
              <Arrow width={16} height={16} />
            </Link>
            <Link href="/transformations" className="btn btn-outline">
              View Client Results
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex items-center gap-5"
          >
            <div className="flex -space-x-3">
              {[0, 1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-ink bg-gradient-to-br from-ink-600 to-ink-800 font-display text-sm text-gold"
                  style={{ filter: `hue-rotate(${i * 12}deg)` }}
                >
                  {['Y', 'S', 'O', 'I'][i]}
                </span>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width={14} height={14} />
                ))}
              </div>
              <p className="mt-1 text-xs text-muted">
                <span className="font-semibold text-bone">220+ clients</span> coached worldwide
              </p>
            </div>
          </motion.div>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -inset-4 -z-10 glow-gold opacity-70" />
          <div className="relative rounded-xl border border-white/10 bg-ink-800/60 p-3 backdrop-blur">
            <BeforeAfter result="−18 kg" duration="20 weeks" hue={10} />
            <div className="flex items-center justify-between px-2 py-3">
              <p className="text-xs uppercase tracking-[0.18em] text-dim">Drag to reveal</p>
              <p className="font-display text-sm text-gold">Real Client Result</p>
            </div>
          </div>

          {/* floating stat */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7, ease }}
            className="absolute -bottom-5 -left-5 hidden rounded-lg border border-white/10 bg-ink-800/90 px-5 py-3 backdrop-blur sm:block"
          >
            <p className="font-display text-2xl text-gold tnum">98%</p>
            <p className="text-[0.65rem] uppercase tracking-[0.15em] text-muted">Success Rate</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
