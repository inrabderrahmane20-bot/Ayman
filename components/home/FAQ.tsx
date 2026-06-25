import Link from 'next/link';
import { faqs } from '../../lib/content';
import Accordion from '../Accordion';
import { SectionHeading } from '../ui';
import Reveal from '../Reveal';

export default function FAQ() {
  return (
    <section className="relative border-t border-white/10 bg-ink-900">
      <div className="container-luxe section grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Honest Answers"
            title={
              <>
                You've got <span className="gold-gradient italic">questions</span>.
              </>
            }
            intro="The objections that hold most people back — answered directly. If yours isn't here, just ask."
          />
          <Reveal delay={0.2}>
            <Link href="/contact" className="link-underline mt-7 inline-block text-sm uppercase tracking-[0.16em] text-gold">
              Ask a question →
            </Link>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion items={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
