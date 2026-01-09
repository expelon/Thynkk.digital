'use client';

import Image from 'next/image';
import { useRef, useEffect, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';

type Slide = {
  id: number;
  content: React.ReactNode;
};

export default function HeroCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef<Array<HTMLDivElement | null>>([]);

  const slides: Slide[] = [
    {
      id: 1,
      content: (
        <>
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

          <div className="relative z-10 h-full">
            <div className="flex items-center min-h-[110vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="max-w-4xl">
                <p className="text-xs sm:text-sm md:text-base font-medium text-white mb-4 md:mb-6 tracking-[0.4em] uppercase">
                  AI Executive Guide
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-snug mb-6 md:mb-10">
                  <div className="headline-line mb-1.5 md:mb-3">The Pragmatic</div>
                  <div className="headline-line mb-1.5 md:mb-3">CEO&apos;s Guide to</div>
                  <div className="headline-line text-white">
                    AI
                  </div>
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </>
      ),
    },
    {
      id: 2,
      content: (
        <>
          <div className="absolute inset-0 hero-zoom">
            <Image
              src="/hero1.webp"
              alt="Hero background"
              fill
              sizes="100vw"
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 h-full">
            <div className="flex items-center min-h-[110vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
              <div className="max-w-4xl">
                <p className="text-xs sm:text-sm md:text-base font-medium text-white mb-4 md:mb-6 tracking-[0.4em] uppercase">
                  Innovation
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-white leading-snug mb-6 md:mb-10">
                  <div className="mb-1.5 md:mb-3">Transform Your</div>
                  <div className="text-white">
                    Digital Future
                  </div>
                </h1>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
        </>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      slidesRef.current.forEach((slide, idx) => {
        if (!slide) return;

        if (idx === currentSlide) {
          gsap.fromTo(
            slide,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
          );
        } else {
          gsap.set(slide, { opacity: 0 });
        }
      });
    }, carouselRef);

    return () => ctx.revert();
  }, [currentSlide]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section
      id="hero-carousel"
      data-nav-theme="dark"
      ref={carouselRef}
      className="relative min-h-[110vh] flex items-center overflow-hidden bg-black"
    >
      {slides.map((slide, idx) => (
        <div
          key={slide.id}
          ref={(el) => (slidesRef.current[idx] = el)}
          className={`absolute inset-0 transition-opacity ${
            idx === currentSlide
              ? 'z-10 opacity-100'
              : 'z-0 opacity-0 pointer-events-none'
          }`}
        >
          {slide.content}
        </div>
      ))}

      {/* Indicators and navigation removed per request */}
    </section>
  );
}
