import Navbar from '@/components/Navbar';
import HeroCarousel from '@/components/HeroCarousel';
import BoldChallengeSection from '@/components/BoldChallengeSection';
import ScrollRevealSection from '@/components/ScrollRevealSection';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroCarousel />
      <ScrollRevealSection />
      <BoldChallengeSection />
    </main>
  );
}
