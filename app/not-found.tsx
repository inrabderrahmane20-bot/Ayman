import Link from 'next/link';
import { Arrow } from '../components/Icons';

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-50" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 h-72 w-[44rem] -translate-x-1/2 glow-gold" />
      <div className="container-luxe relative z-10 text-center">
        <p className="font-display text-[7rem] leading-none text-gold sm:text-[10rem]">404</p>
        <h1 className="display mt-2 text-3xl text-bone sm:text-4xl">This page took a rest day.</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">
          The page you're looking for doesn't exist — but your transformation still does.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/" className="btn btn-gold">
            Back Home
            <Arrow width={16} height={16} />
          </Link>
          <Link href="/apply" className="btn btn-outline">
            Apply for Coaching
          </Link>
        </div>
      </div>
    </section>
  );
}
