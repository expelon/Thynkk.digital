'use client';

import { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      })
      .from('.headline-line', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      }, '-=0.4')
      .from(ctaRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power3.out',
      }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-black"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 md:w-[600px] md:h-[600px] bg-gradient-radial from-red-500/30 via-purple-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 md:w-[500px] md:h-[500px] bg-gradient-radial from-pink-500/30 via-red-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-purple-600/20 via-transparent to-transparent rounded-full blur-3xl"></div>

        <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ef4444', stopOpacity: 0.3 }} />
              <stop offset="50%" style={{ stopColor: '#a855f7', stopOpacity: 0.3 }} />
              <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
            </linearGradient>
          </defs>
          <path
            d="M0,100 Q250,50 500,100 T1000,100 L1000,0 L0,0 Z"
            fill="url(#grad1)"
            className="animate-pulse"
          />
          <path
            d="M0,200 Q300,150 600,200 T1200,200 L1200,0 L0,0 Z"
            fill="url(#grad1)"
            opacity="0.5"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl">
          <p
            ref={subtitleRef}
            className="text-sm sm:text-base md:text-lg font-medium text-red-400 mb-6 md:mb-8 tracking-wider uppercase"
          >
            AI Executive Guide
          </p>

          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight mb-8 md:mb-12"
          >
            <div className="headline-line mb-2 md:mb-4">The Pragmatic</div>
            <div className="headline-line mb-2 md:mb-4">CEO&apos;s Guide to</div>
            <div className="headline-line bg-gradient-to-r from-red-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
              AI
            </div>
          </h1>

          <a
            ref={ctaRef}
            href="#read-more"
            className="inline-flex items-center space-x-2 text-base sm:text-lg md:text-xl font-semibold text-white bg-gradient-to-r from-red-500 to-pink-500 px-6 py-3 md:px-8 md:py-4 rounded-full hover:shadow-lg hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
          >
            <span>READ MORE</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
