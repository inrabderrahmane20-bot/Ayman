import type { Metadata } from 'next';
import { PageHeader } from '../../components/ui';
import TransformationsGallery from '../../components/TransformationsGallery';
import CTABanner from '../../components/CTABanner';
import Reveal from '../../components/Reveal';

export const metadata: Metadata = {
  title: 'Client Results',
  description:
    'Real client transformations — fat loss, muscle gain and body recomposition. Filter by goal and drag each before/after slider to see the change.',
};

export default function TransformationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Client Results"
        title={
          <>
            If they transformed, <span className="gold-gradient italic">so can you.</span>
          </>
        }
        intro="Real people. Real numbers. Real change. Filter by goal and drag any slider to reveal the before and after."
      />

      <section className="section">
        <div className="container-luxe">
          <Reveal>
            <TransformationsGallery />
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mx-auto mt-12 max-w-xl text-center text-sm text-dim">
              Results vary based on starting point, consistency and adherence. These reflect clients
              who committed fully to the process.
            </p>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={
          <>
            Your transformation belongs on this{' '}
            <span className="gold-gradient italic">wall.</span>
          </>
        }
        text="Apply today and become the next success story."
        secondary={{ href: '/pricing', label: 'View Plans' }}
      />
    </>
  );
}
