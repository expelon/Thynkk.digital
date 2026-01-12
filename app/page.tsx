import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import OurStorySection from '@/components/OurStorySection';
import BoldChallengeSection from '@/components/BoldChallengeSection';
import WhatWeDoSection from '@/components/WhatWeDoSection';
import UnlockGenAISection from '@/components/UnlockGenAISection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ScrollRevealSection />
      <BoldChallengeSection />
      <OurStorySection />
      <WhatWeDoSection />
      <UnlockGenAISection />
      <Footer />
    </main>
  );
}
