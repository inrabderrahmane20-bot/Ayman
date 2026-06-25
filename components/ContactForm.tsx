'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { coach } from '../lib/content';
import { Check, Arrow } from './Icons';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const valid =
    form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim().length > 4;

  const field =
    'w-full rounded-md border border-white/10 bg-ink-800 px-4 py-3 text-bone outline-none transition-colors focus:border-gold/60';

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    // Open the user's mail client with a prefilled message (no backend required).
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    const subject = encodeURIComponent(form.subject || 'Coaching enquiry');
    window.location.href = `mailto:${coach.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="card flex flex-col items-center p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-gold">
          <Check width={26} height={26} />
        </span>
        <h3 className="display mt-5 text-2xl text-bone">Message ready to send.</h3>
        <p className="mt-3 text-sm text-muted">
          Your email app should have opened with your message. If it didn't, reach me directly at{' '}
          <a href={`mailto:${coach.email}`} className="text-gold">
            {coach.email}
          </a>
          .
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={submit} className="card p-7 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">Name *</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">Email *</span>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">Subject</span>
          <input
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={field}
            placeholder="What's this about?"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-[0.16em] text-dim">
            Message *
          </span>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${field} resize-none`}
            placeholder="Tell me about your goals..."
          />
        </label>
      </div>
      <button
        type="submit"
        disabled={!valid}
        className="btn btn-gold mt-6 w-full disabled:cursor-not-allowed disabled:opacity-40"
      >
        Send Message
        <Arrow width={16} height={16} />
      </button>
    </form>
  );
}
