'use client';

import { useEffect, useMemo, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

type ScrollRevealSectionProps = {
  text?: string;
};

export default function ScrollRevealSection({
  text =
    'We believe in a world where technology fosters your everyday experiences. And our mission is to make it happen!',
}: ScrollRevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const lettersRef = useRef<Array<HTMLSpanElement | null>>([]);

  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (letters.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.set(letters, { color: '#6b7280', opacity: 0.25 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: '+=200%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(letters, {
        color: '#ffffff',
        opacity: 1,
        stagger: 0.012,
        duration: 1,
        ease: 'power2.out',
      });
    }, sectionEl);

    return () => ctx.revert();
  }, [text]);

  return (
    <section
      ref={sectionRef}
      id="scroll-reveal"
      data-nav-theme="dark"
      className="relative bg-black"
      aria-label="Scroll reveal statement"
    >
      <div className="relative min-h-screen flex items-center">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <p className="sr-only">{text}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1]">
            {chars.map((ch, idx) => (
              <span
                key={idx}
                ref={(el) => {
                  lettersRef.current[idx] = el;
                }}
                aria-hidden="true"
                className="inline-block will-change-[opacity,color]"
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
}
