import Link from 'next/link';
import { transformations } from '../../lib/content';
import TransformationCard from '../TransformationCard';
import { SectionHeading } from '../ui';
import { Stagger, StaggerItem } from '../Reveal';
import { Arrow } from '../Icons';

export default function TransformationsPreview() {
  const featured = transformations.slice(0, 3);
  return (
    <section className="section">
      <div className="container-luxe">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Real Results"
            title={
              <>
                Transformations that <span className="gold-gradient italic">speak</span> for
                themselves.
              </>
            }
            intro="Every result below is a real person who decided to start. Drag each slider to see the change."
          />
          <Link href="/transformations" className="btn btn-ghost flex-none">
            View All Results
            <Arrow width={15} height={15} />
          </Link>
        </div>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((t, i) => (
            <StaggerItem key={t.id}>
              <TransformationCard item={t} index={i} />
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
