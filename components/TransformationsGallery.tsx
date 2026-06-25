'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { transformations, type Goal } from '../lib/content';
import TransformationCard from './TransformationCard';

const filters: ('All' | Goal)[] = [
  'All',
  'Fat Loss',
  'Muscle Gain',
  'Recomposition',
  "Men's",
  "Women's",
];

export default function TransformationsGallery() {
  const [active, setActive] = useState<'All' | Goal>('All');
  const reduce = useReducedMotion();

  const list =
    active === 'All'
      ? transformations
      : transformations.filter((t) => t.goals.includes(active));

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {filters.map((f) => {
          const on = active === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-2 font-sans text-[0.72rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                on
                  ? 'border-gold/50 bg-gold/10 text-gold'
                  : 'border-white/10 text-muted hover:border-white/25 hover:text-bone'
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((t, i) => (
            <motion.div
              key={t.id}
              layout
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <TransformationCard item={t} index={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {list.length === 0 && (
        <p className="mt-16 text-center text-muted">No transformations in this category yet.</p>
      )}
    </div>
  );
}
