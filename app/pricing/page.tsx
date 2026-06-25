import type { Metadata } from 'next';
import { faqs } from '../../lib/content';
import { PageHeader, SectionHeading } from '../../components/ui';
import PricingCards from '../../components/PricingCards';
import Accordion from '../../components/Accordion';
import CTABanner from '../../components/CTABanner';
import Reveal, { Stagger } from '../../components/Reveal';
import { Check, Close } from '../../components/Icons';

const compareRows: { label: string; nutrition: boolean; training: boolean; vip: boolean }[] = [
  { label: 'Custom nutrition plan', nutrition: true, training: true, vip: true },
  { label: 'Macro & calorie targets', nutrition: true, training: true, vip: true },
  { label: 'Custom training program', nutrition: false, training: true, vip: true },
  { label: 'Exercise video library', nutrition: false, training: true, vip: true },
  { label: 'Progressive overload tracking', nutrition: false, training: true, vip: true },
  { label: 'Members app access', nutrition: false, training: true, vip: true },
  { label: 'Weekly accountability check-ins', nutrition: false, training: true, vip: true },
  { label: 'Direct messaging support', nutrition: true, training: true, vip: true },
  { label: 'Weekly 1-on-1 video calls', nutrition: false, training: false, vip: true },
  { label: 'Form-check video reviews', nutrition: false, training: false, vip: true },
  { label: 'Priority response line', nutrition: false, training: false, vip: true },
];

function Cell({ on }: { on: boolean }) {
  return on ? (
    <Check width={18} height={18} className="mx-auto text-gold" />
  ) : (
    <Close width={16} height={16} className="mx-auto text-white/15" />
  );
}

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Investment"
        title={
          <>
            An investment in the one thing you{' '}
            <span className="gold-gradient italic">can't replace.</span>
          </>
        }
        intro="Transparent pricing. No lock-in contracts. Cancel anytime. Choose the level of support that fits where you are right now."
      />

      <section className="section">
        <div className="container-luxe">
          <Stagger>
            <PricingCards />
          </Stagger>
          <Reveal delay={0.1}>
            <p className="mt-10 text-center text-sm text-dim">
              All plans are billed monthly · Secure checkout · 100% commitment to your results
            </p>
          </Reveal>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-y border-white/10 bg-ink-900">
        <div className="container-luxe section">
          <SectionHeading
            align="center"
            eyebrow="Compare Plans"
            title={
              <>
                Every detail, <span className="gold-gradient italic">side by side.</span>
              </>
            }
          />

          <Reveal>
            <div className="mt-12 overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-5 text-left font-sans text-xs uppercase tracking-[0.16em] text-dim">
                      Feature
                    </th>
                    <th className="px-4 py-5 text-center font-display text-lg text-bone">
                      Nutrition
                    </th>
                    <th className="px-4 py-5 text-center font-display text-lg text-bone">
                      Training+
                    </th>
                    <th className="rounded-t-lg bg-gold/[0.06] px-4 py-5 text-center font-display text-lg text-gold">
                      VIP
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r) => (
                    <tr key={r.label} className="border-b border-white/5">
                      <td className="py-4 pr-4 text-muted">{r.label}</td>
                      <td className="px-4 py-4">
                        <Cell on={r.nutrition} />
                      </td>
                      <td className="px-4 py-4">
                        <Cell on={r.training} />
                      </td>
                      <td className="bg-gold/[0.04] px-4 py-4">
                        <Cell on={r.vip} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="section">
        <div className="container-luxe grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Before You Decide"
            title={
              <>
                Common <span className="gold-gradient italic">questions.</span>
              </>
            }
            intro="Still weighing it up? These are the questions I hear most."
          />
          <Reveal delay={0.1}>
            <Accordion items={faqs.slice(0, 4)} />
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Not sure which plan fits? <span className="gold-gradient italic">Let's talk.</span>
          </>
        }
        text="Apply and I'll personally recommend the right plan for your goals — no pressure, no obligation."
        primary={{ href: '/apply', label: 'Apply & Get Matched' }}
        secondary={{ href: '/contact', label: 'Ask First' }}
      />
    </>
  );
}
