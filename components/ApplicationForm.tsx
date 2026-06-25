'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { coach } from '../lib/content';
import { Check, Arrow, WhatsApp } from './Icons';

type Data = {
  goal: string;
  gender: string;
  experience: string;
  commitment: string;
  budget: string;
  name: string;
  email: string;
  phone: string;
  age: string;
  notes: string;
};

const empty: Data = {
  goal: '',
  gender: '',
  experience: '',
  commitment: '',
  budget: '',
  name: '',
  email: '',
  phone: '',
  age: '',
  notes: '',
};

const choiceSteps = [
  {
    key: 'goal' as const,
    title: "What's your #1 goal right now?",
    options: ['Lose Fat', 'Build Muscle', 'Body Recomposition', 'Get Stronger'],
  },
  {
    key: 'gender' as const,
    title: 'Who am I building this plan for?',
    options: ['Man', 'Woman', 'Prefer not to say'],
  },
  {
    key: 'experience' as const,
    title: "What's your training experience?",
    options: ['Complete Beginner', 'Some Experience', 'Advanced'],
  },
  {
    key: 'commitment' as const,
    title: 'How many days a week can you train?',
    options: ['2–3 days', '4–5 days', '6+ days'],
  },
  {
    key: 'budget' as const,
    title: 'Which plan are you leaning toward?',
    options: ['Nutrition Only', 'Training + Nutrition', 'VIP Transformation', 'Not sure yet'],
  },
];

const TOTAL = choiceSteps.length + 1; // + details step

export default function ApplicationForm() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<Data>(empty);
  const [done, setDone] = useState(false);

  const isChoice = step < choiceSteps.length;
  const progress = Math.round(((step + (done ? 1 : 0)) / TOTAL) * 100);

  const pick = (key: keyof Data, value: string) => {
    setData((d) => ({ ...d, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 220);
  };

  const detailsValid =
    data.name.trim() && /\S+@\S+\.\S+/.test(data.email) && data.phone.trim();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!detailsValid) return;
    setDone(true);
  };

  const field =
    'w-full rounded-md border border-white/10 bg-ink-800 px-4 py-3 text-bone outline-none transition-colors focus:border-gold/60';

  if (done) {
    const summary = encodeURIComponent(
      `New coaching application:\n• Goal: ${data.goal}\n• For: ${data.gender}\n• Experience: ${data.experience}\n• Days/week: ${data.commitment}\n• Plan: ${data.budget}\n• Name: ${data.name}\n• Age: ${data.age}\n• Email: ${data.email}\n• Phone: ${data.phone}\n• Notes: ${data.notes}`,
    );
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="card mx-auto max-w-xl p-8 text-center sm:p-12"
      >
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Check width={30} height={30} />
        </span>
        <h2 className="display mt-6 text-3xl text-bone sm:text-4xl">Application received.</h2>
        <p className="mt-4 text-muted">
          Thank you, {data.name.split(' ')[0] || 'champion'}. Your application is in. I personally
          review every submission and will reach out within 24–48 hours to confirm your spot and
          next steps.
        </p>
        <p className="mt-2 text-sm text-dim">
          Want to skip the queue? Send me your details directly:
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={`${coach.whatsapp}?text=${summary}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            <WhatsApp width={18} height={18} />
            Message on WhatsApp
          </a>
          <a href={`mailto:${coach.email}?subject=Coaching Application&body=${summary}`} className="btn btn-outline">
            Email Coach Ayman
          </a>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="mx-auto max-w-xl">
      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-dim">
          <span className="uppercase tracking-[0.16em]">
            Step {step + 1} of {TOTAL}
          </span>
          <span className="tnum">{progress}%</span>
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/8">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-gold-deep to-gold-soft"
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {isChoice ? (
            <div className="card p-7 sm:p-9">
              <h2 className="font-display text-2xl text-bone sm:text-3xl">
                {choiceSteps[step].title}
              </h2>
              <div className="mt-7 grid gap-3">
                {choiceSteps[step].options.map((opt) => {
                  const selected = data[choiceSteps[step].key] === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => pick(choiceSteps[step].key, opt)}
                      className={`group flex items-center justify-between rounded-lg border px-5 py-4 text-left transition-all duration-300 ${
                        selected
                          ? 'border-gold/60 bg-gold/10 text-gold'
                          : 'border-white/10 text-bone hover:border-gold/30 hover:bg-white/[0.02]'
                      }`}
                    >
                      <span>{opt}</span>
                      <Arrow
                        width={18}
                        height={18}
                        className="text-gold opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </button>
                  );
                })}
              </div>

              {step > 0 && (
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="mt-6 text-sm text-dim transition-colors hover:text-muted"
                >
                  ← Back
                </button>
              )}
            </div>
          ) : (
            <form onSubmit={submit} className="card p-7 sm:p-9">
              <h2 className="font-display text-2xl text-bone sm:text-3xl">
                Last step — where do I send your plan?
              </h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
                    Full name *
                  </span>
                  <input
                    required
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                    className={field}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
                    Email *
                  </span>
                  <input
                    required
                    type="email"
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className={field}
                    placeholder="you@email.com"
                    autoComplete="email"
                  />
                </label>
                <label className="block">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
                    Phone / WhatsApp *
                  </span>
                  <input
                    required
                    type="tel"
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                    className={field}
                    placeholder="+212 ..."
                    autoComplete="tel"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
                    Age
                  </span>
                  <input
                    type="number"
                    value={data.age}
                    onChange={(e) => setData({ ...data, age: e.target.value })}
                    className={field}
                    placeholder="28"
                  />
                </label>
                <label className="block sm:col-span-2">
                  <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
                    Anything I should know? (injuries, schedule, goals)
                  </span>
                  <textarea
                    rows={3}
                    value={data.notes}
                    onChange={(e) => setData({ ...data, notes: e.target.value })}
                    className={`${field} resize-none`}
                    placeholder="Optional — the more I know, the better your plan."
                  />
                </label>
              </div>

              <div className="mt-7 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => setStep((s) => s - 1)}
                  className="text-sm text-dim transition-colors hover:text-muted"
                >
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={!detailsValid}
                  className="btn btn-gold disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Submit Application
                  <Arrow width={16} height={16} />
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
