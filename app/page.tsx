import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import ScrollRevealSection from '@/components/ScrollRevealSection';
import OurStorySection from '@/components/OurStorySection';
import BoldChallengeSection from '@/components/BoldChallengeSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCarousel />
      <ScrollRevealSection />
      <BoldChallengeSection />
      <OurStorySection />
    </main>
  );
}
