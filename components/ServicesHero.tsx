"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Home } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        {/* Sub-navigation bar - Matching dropdown structure */}
        <motion.nav
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white/80 text-sm md:text-base font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Link
            href="/services/brand-consulting"
            className="hover:text-white transition-colors"
          >
            Brand Consulting
          </Link>
          <Link
            href="/services/logo-design"
            className="hover:text-white transition-colors"
          >
            Logo Design
          </Link>
          <Link
            href="/services/graphic-design"
            className="hover:text-white transition-colors"
          >
            Graphic Design
          </Link>
          <Link
            href="/services/ui-ux-design"
            className="hover:text-white transition-colors"
          >
            UI/UX Design
          </Link>
          <Link
            href="/services/web-and-mobile-design"
            className="hover:text-white transition-colors"
          >
            Web & Mobile Design
          </Link>
          <Link
            href="/services/web-development"
            className="hover:text-white transition-colors"
          >
            Web Development
          </Link>
          <Link
            href="/services/technology"
            className="hover:text-white transition-colors"
          >
            Technology
          </Link>
          <Link
            href="/services/seo-content"
            className="hover:text-white transition-colors"
          >
            SEO & Content
          </Link>
          <Link
            href="/services/social-media"
            className="hover:text-white transition-colors"
          >
            Social Media
          </Link>
          <Link
            href="/services/marketing"
            className="hover:text-white transition-colors"
          >
            Marketing
          </Link>
        </motion.nav>
      </div>
    </section>
  );
}
