"use client";

import Navbar from "@/components/Navbar";
import ServicesHero from "@/components/ServicesHero";
import ServicesGrid from "@/components/ServicesGrid";
import ImpactSection from "@/components/ImpactSection";
import TrustedBy from "@/components/TrustedBy";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="relative">
      <Navbar variant="glass" />
      <ServicesHero />
      <ServicesGrid />
      <TrustedBy />
      <ImpactSection />
      <Footer />
    </main>
  );
}
