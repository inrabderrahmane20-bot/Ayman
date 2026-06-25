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
