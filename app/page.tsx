import type { Metadata } from 'next';
import Hero from '../components/home/Hero';
import SocialProof from '../components/home/SocialProof';
import TransformationsPreview from '../components/home/TransformationsPreview';
import HowItWorks from '../components/home/HowItWorks';
import WhatsIncluded from '../components/home/WhatsIncluded';
import CoachAuthority from '../components/home/CoachAuthority';
import Testimonials from '../components/home/Testimonials';
import AppPreview from '../components/home/AppPreview';
import PricingPreview from '../components/home/PricingPreview';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

export const metadata: Metadata = {
  title: 'Online Fitness & Nutrition Coach | Ayman Yakhmim',
  description:
    'Custom training, nutrition and weekly accountability for fat loss and muscle gain. Online coaching built around your schedule. Apply in 60 seconds.',
  alternates: {
    canonical: '/',
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <TransformationsPreview />
      <HowItWorks />
      <WhatsIncluded />
      <CoachAuthority />
      <Testimonials />
      <AppPreview />
      <PricingPreview />
      <FAQ />
      <FinalCTA />
    </>
  );
}
