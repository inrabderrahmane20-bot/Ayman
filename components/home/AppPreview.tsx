import { appFeatures } from '../../lib/content';
import Reveal from '../Reveal';
import { Check } from '../Icons';

function PhoneMock() {
  return (
    <div className="relative mx-auto w-[280px]">
      <div className="absolute -inset-8 -z-10 glow-gold opacity-60" />
      <div className="relative rounded-[2.6rem] border border-white/15 bg-ink-700 p-2.5 shadow-2xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-ink-900">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/80" />
          {/* screen */}
          <div className="px-5 pb-6 pt-9">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[0.6rem] uppercase tracking-widest text-dim">Today</p>
                <p className="font-display text-lg text-bone">Push Day</p>
              </div>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 font-display text-gold">
                A
              </span>
            </div>

            {/* progress ring row */}
            <div className="mt-5 grid grid-cols-3 gap-2">
              {[
                { l: 'Cals', v: '1,840' },
                { l: 'Protein', v: '176g' },
                { l: 'Steps', v: '8.2k' },
              ].map((m) => (
                <div key={m.l} className="rounded-lg border border-white/8 bg-white/[0.02] p-2.5 text-center">
                  <p className="font-display text-sm text-gold tnum">{m.v}</p>
                  <p className="text-[0.55rem] uppercase tracking-wider text-dim">{m.l}</p>
                </div>
              ))}
            </div>

            {/* exercises */}
            <div className="mt-4 space-y-2">
              {[
                { n: 'Incline Bench', s: '4 × 8', done: true },
                { n: 'Shoulder Press', s: '3 × 10', done: true },
                { n: 'Cable Fly', s: '3 × 12', done: false },
                { n: 'Triceps Rope', s: '3 × 15', done: false },
              ].map((ex) => (
                <div
                  key={ex.n}
                  className="flex items-center justify-between rounded-lg border border-white/8 bg-white/[0.02] px-3 py-2.5"
                >
                  <div>
                    <p className="text-xs text-bone">{ex.n}</p>
                    <p className="text-[0.6rem] text-dim">{ex.s}</p>
                  </div>
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded-full ${
                      ex.done ? 'bg-gold text-white' : 'border border-white/15 text-transparent'
                    }`}
                  >
                    <Check width={12} height={12} />
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg bg-gradient-to-r from-gold-soft to-gold-deep py-2.5 text-center font-sans text-[0.65rem] uppercase tracking-[0.18em] text-white">
              Submit Check-in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AppPreview() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-ink-900">
      <div className="container-luxe section grid items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <PhoneMock />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">The Members App</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="display mt-5 text-[2.2rem] leading-[1.04] sm:text-5xl">
              Your coach, your plan, <span className="gold-gradient italic">in your pocket.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 text-base leading-relaxed text-muted">
              Track every workout, log your nutrition, submit check-ins and message your coach — all
              from one beautifully simple app.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {appFeatures.map((f, i) => (
              <Reveal key={f.title} delay={0.2 + i * 0.06}>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-7 w-7 flex-none items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold">
                    <Check width={15} height={15} />
                  </span>
                  <div>
                    <p className="font-medium text-bone">{f.title}</p>
                    <p className="text-sm text-muted">{f.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
