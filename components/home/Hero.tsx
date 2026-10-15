'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import heroImg from '../../public/hero.jpg';
import { Arrow, Star } from '../Icons';

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* ── Background image ── */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={heroImg}
          alt="Coach Mohamed Ayman Yakhmim"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[center_22%] sm:object-[70%_20%]"
        />
        {/* readability + brand scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30 sm:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 55% at 18% 35%, rgba(225,29,42,0.18) 0%, transparent 60%)',
          }}
        />
        <div className="absolute inset-0 grid-overlay opacity-30" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-ink to-transparent" />
      </div>

      {/* ── Content ── */}
      <div className="container-luxe relative z-10 pt-32 pb-20 sm:pt-28">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="chip border-gold/40 !text-gold-soft"
          >
            <span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-gold" />
            Online fitness coaching for fat loss, muscle gain and strength
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08, ease }}
            className="display mt-6 text-[3rem] leading-[0.96] sm:text-[4rem] lg:text-[5rem]"
          >
            Online Fitness &amp; Nutrition Coaching for <span className="gold-gradient italic">Fat Loss</span> and <span className="gold-gradient italic">Muscle Gain</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="mt-5 max-w-xl text-base text-bone/80 sm:text-lg"
          >
            “My goal isn’t just to transform your body, but to transform your mindset so you can face every challenge with confidence and strength.”
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.24, ease }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <Link href="/apply" className="btn btn-gold">
              Apply for Coaching
              <Arrow width={16} height={16} />
            </Link>
            <Link href="/transformations" className="btn btn-outline">
              See Client Results
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-10 flex items-center gap-5"
          >
            <div>
              <div className="flex gap-0.5 text-gold">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} width={14} height={14} />
                ))}
              </div>
              <p className="mt-1 text-xs text-bone/70">
                <span className="font-semibold text-bone">220+ clients</span> coached worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.3em] text-bone/40">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
}
