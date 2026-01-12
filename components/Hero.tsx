'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.35 });

      tl.from(subtitleRef.current, {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: 'power3.out',
      })
        .from(
          '.hero-title-line',
          {
            opacity: 0,
            y: 28,
            duration: 0.85,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .from(
          '.hero-body',
          {
            opacity: 0,
            y: 18,
            duration: 0.75,
            ease: 'power3.out',
          },
          '-=0.45'
        )
        .from(
          '.hero-cta',
          {
            opacity: 0,
            y: 16,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power3.out',
          },
          '-=0.35'
        )
        .from(
          '.hero-proof',
          {
            opacity: 0,
            y: 14,
            duration: 0.7,
            ease: 'power3.out',
          },
          '-=0.25'
        )
        .from(
          '.hero-card',
          {
            opacity: 0,
            y: 18,
            scale: 0.98,
            duration: 0.85,
            stagger: 0.08,
            ease: 'power3.out',
          },
          '-=0.55'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-black"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5/0 via-white/5/0 to-white/5/0" />

      <div className="relative mx-auto grid min-h-[110vh] max-w-7xl grid-cols-1 items-center gap-14 px-6 pb-20 pt-28 sm:px-10 lg:grid-cols-2 lg:gap-10 lg:px-20">
        <div className="max-w-xl">
          <p ref={subtitleRef} className="hero-eyebrow text-sm font-medium tracking-wide text-white/60">
            thynkk.digital
          </p>

          <h1 className="mt-5 text-4xl font-light leading-[1.15] tracking-tight text-white sm:text-5xl lg:text-6xl">
            <span className="hero-title-line block">Top Tier Web Design and</span>
            <span className="hero-title-line block">Development</span>
          </h1>

          <p className="hero-body mt-6 max-w-lg text-sm leading-relaxed text-white/60 sm:text-base">
            Welcome to thynkk.digital — we’re a specialist web design and development team focused on custom work within
            WordPress, WooCommerce and Shopify.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#start-project"
              className="hero-cta inline-flex h-12 items-center justify-center rounded-md bg-white px-7 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Start a Project
            </a>
          </div>

          <div className="hero-proof mt-10 flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                  <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303C33.662 32.657 29.246 36 24 36c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917Z" />
                  <path fill="#FF3D00" d="M6.306 14.691 12.88 19.51C14.662 15.108 18.977 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.047 6.053 29.268 4 24 4c-7.682 0-14.344 4.337-17.694 10.691Z" />
                  <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.191-5.238C29.141 35.091 26.715 36 24 36c-5.224 0-9.63-3.356-11.283-7.998l-6.522 5.025C9.505 39.556 16.227 44 24 44Z" />
                  <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.06 12.06 0 0 1-4.087 5.57l.003-.002 6.191 5.238C36.971 39.204 44 34 44 24c0-1.341-.138-2.65-.389-3.917Z" />
                </svg>
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#fbbf24]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-1 text-xs text-white/50">30+ REVIEWS</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#fb7185]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <svg key={idx} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-1 text-xs text-white/50">20+ REVIEWS</div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="lg:hidden">
            <div className="flex flex-col gap-6 overflow-hidden">
              <div className="overflow-hidden">
                <div className="hero-row hero-row-left">
                  {[1, 2].map((loop) => (
                    <div key={loop} className="flex gap-5">
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden">
                <div className="hero-row hero-row-right">
                  {[1, 2].map((loop) => (
                    <div key={loop} className="flex gap-5">
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                      <div className="hero-card w-64 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                        <div className="relative aspect-[16/11]">
                          <Image src="/hero1.webp" alt="Preview" fill sizes="256px" className="object-cover" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex h-[520px] gap-6 overflow-hidden">
              {/* Column 1 - scrolls up */}
              <div className="hero-column hero-column-up w-1/2">
                {[1, 2].map((loop) => (
                  <div key={loop} className="flex flex-col gap-6">
                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>

                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>

                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 - scrolls down */}
              <div className="hero-column hero-column-down w-1/2">
                {[1, 2].map((loop) => (
                  <div key={loop} className="flex flex-col gap-6">
                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>

                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>

                    <div className="hero-card overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
                      <div className="relative aspect-[16/11]">
                        <Image src="/hero1.webp" alt="Preview" fill sizes="(min-width:1024px) 360px, 100vw" className="object-cover" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
