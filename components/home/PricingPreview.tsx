import Link from 'next/link';
import PricingCards from '../PricingCards';
import { SectionHeading } from '../ui';
import { Stagger } from '../Reveal';
import { Arrow } from '../Icons';

export default function PricingPreview() {
  return (
    <section className="section">
      <div className="container-luxe">
        <SectionHeading
          align="center"
          eyebrow="Coaching Plans"
          title={
            <>
              Choose your level of <span className="gold-gradient italic">commitment</span>.
            </>
          }
          intro="Three ways to work with me. Every plan is built around you — cancel anytime, no lock-in."
        />

        <Stagger className="mt-16">
          <PricingCards />
        </Stagger>

        <div className="mt-12 text-center">
          <Link href="/pricing" className="link-underline text-sm uppercase tracking-[0.16em] text-gold">
            Compare all plans in detail
          </Link>
        </div>
      </div>
    </section>
  );
}
