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
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel2TitleRef = useRef<HTMLHeadingElement>(null);
  const panel2BodyRef = useRef<HTMLParagraphElement>(null);
  const panel2LinkRef = useRef<HTMLAnchorElement>(null);
  const panel2VisualRef = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);
  const panel3TitleRef = useRef<HTMLHeadingElement>(null);
  const panel3BodyRef = useRef<HTMLParagraphElement>(null);
  const panel3LinkRef = useRef<HTMLAnchorElement>(null);
  const panel4Ref = useRef<HTMLDivElement>(null);
  const panel4TitleRef = useRef<HTMLHeadingElement>(null);
  const panel4BodyRef = useRef<HTMLParagraphElement>(null);
  const panel4LinkRef = useRef<HTMLAnchorElement>(null);
  const panel5Ref = useRef<HTMLDivElement>(null);
  const panel5TitleRef = useRef<HTMLHeadingElement>(null);
  const panel5BodyRef = useRef<HTMLParagraphElement>(null);
  const panel5LinkRef = useRef<HTMLAnchorElement>(null);
  const panel6Ref = useRef<HTMLDivElement>(null);
  const panel6TitleRef = useRef<HTMLHeadingElement>(null);
  const panel6BodyRef = useRef<HTMLParagraphElement>(null);
  const panel6LinkRef = useRef<HTMLAnchorElement>(null);

  const chars = useMemo(() => Array.from(text), [text]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const letters = lettersRef.current.filter(Boolean) as HTMLSpanElement[];
    if (letters.length === 0) return;

    // Store ScrollTrigger instances for cleanup
    const triggers: ScrollTrigger[] = [];

    const ctx = gsap.context(() => {
      gsap.set(letters, { color: '#6b7280', opacity: 0.25 });
      gsap.set(panel1Ref.current, { opacity: 1 });
      gsap.set(panel2Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(panel2TitleRef.current, { opacity: 1, clipPath: 'inset(0 100% 0 0)', filter: 'blur(12px)' });
      gsap.set([panel2BodyRef.current, panel2LinkRef.current], { opacity: 0, x: -40 });
      gsap.set(panel3Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(panel3TitleRef.current, { opacity: 1, clipPath: 'inset(0 100% 0 0)', filter: 'blur(12px)' });
      gsap.set([panel3BodyRef.current, panel3LinkRef.current], { opacity: 0, x: -40 });
      gsap.set(panel4Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(panel4TitleRef.current, { opacity: 1, clipPath: 'inset(0 100% 0 0)', filter: 'blur(12px)' });
      gsap.set([panel4BodyRef.current, panel4LinkRef.current], { opacity: 0, x: -40 });
      gsap.set(panel5Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(panel5TitleRef.current, { opacity: 1, clipPath: 'inset(0 100% 0 0)', filter: 'blur(12px)' });
      gsap.set([panel5BodyRef.current, panel5LinkRef.current], { opacity: 0, x: -40 });
      gsap.set(panel6Ref.current, { opacity: 0, pointerEvents: 'none' });
      gsap.set(panel6TitleRef.current, { opacity: 1, clipPath: 'inset(0 100% 0 0)', filter: 'blur(12px)' });
      gsap.set([panel6BodyRef.current, panel6LinkRef.current], { opacity: 0, x: -40 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: 'top top',
          end: '+=900%',
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Store the ScrollTrigger instance
      const trigger = tl.scrollTrigger;
      if (trigger) triggers.push(trigger);

      tl.to(letters, {
        color: '#ffffff',
        opacity: 1,
        stagger: 0.012,
        duration: 1,
        ease: 'power2.out',
      })
        .to(panel1Ref.current, { opacity: 0, scale: 0.95, duration: 0.45, ease: 'power2.in' }, '+=0.18')
        .to(panel2Ref.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' }, '>')
        .to(
          panel2TitleRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(
          [panel2BodyRef.current, panel2LinkRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(panel2Ref.current, { opacity: 0, scale: 0.95, duration: 0.45, ease: 'power2.in' }, '+=0.18')
        .to(panel3Ref.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' }, '>')
        .to(
          panel3TitleRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(
          [panel3BodyRef.current, panel3LinkRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(panel3Ref.current, { opacity: 0, scale: 0.95, duration: 0.45, ease: 'power2.in' }, '+=0.18')
        .to(panel4Ref.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' }, '>')
        .to(
          panel4TitleRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(
          [panel4BodyRef.current, panel4LinkRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(panel4Ref.current, { opacity: 0, scale: 0.95, duration: 0.45, ease: 'power2.in' }, '+=0.18')
        .to(panel5Ref.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' }, '>')
        .to(
          panel5TitleRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(
          [panel5BodyRef.current, panel5LinkRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(panel5Ref.current, { opacity: 0, scale: 0.95, duration: 0.45, ease: 'power2.in' }, '+=0.18')
        .to(panel6Ref.current, { opacity: 1, duration: 0.35, ease: 'power2.out', pointerEvents: 'auto' }, '>')
        .to(
          panel6TitleRef.current,
          {
            clipPath: 'inset(0 0% 0 0)',
            filter: 'blur(0px)',
            duration: 0.75,
            ease: 'power3.out',
          },
          '<0.02'
        )
        .to(
          [panel6BodyRef.current, panel6LinkRef.current],
          {
            opacity: 1,
            x: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
          },
          '<0.02'
        );
    }, sectionEl);

    return () => {
      // Kill all ScrollTrigger instances
      triggers.forEach((trigger) => trigger.kill());
      ctx.revert();
    };
  }, [text]);

  return (
    <section
      ref={sectionRef}
      id="scroll-reveal"
      data-nav-theme="dark"
      className="relative bg-black"
      aria-label="Scroll reveal statement"
    >
      <div className="relative min-h-screen">
        <div ref={panel1Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-10">
            <p className="sr-only">{text}</p>
            <h2 className="text-4xl font-light leading-[1.1] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
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

        <div ref={panel2Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 text-center">
            <h2 ref={panel2TitleRef} className="text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              DISCOVER
            </h2>
            <p ref={panel2BodyRef} className="mt-6 text-sm leading-relaxed text-white/70">
              Discover the intersections of strategy, design, and technology.
              <br />
              We uncover opportunities hidden in your customer journeys
              <br />
              and turn them into experiences that move your business forward.
            </p>
            <a
              ref={panel2LinkRef}
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-sm text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div ref={panel3Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 text-center">
            <h2 ref={panel3TitleRef} className="text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              DESIGN
            </h2>
            <p ref={panel3BodyRef} className="mt-6 text-sm leading-relaxed text-white/70">
              Design is the bridge between imagination and reality.
              <br />
              We craft visual stories that resonate,
              <br />
              creating experiences that connect with your audience on a deeper level.
            </p>
            <a
              ref={panel3LinkRef}
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-sm text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div ref={panel4Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 text-center">
            <h2 ref={panel4TitleRef} className="text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              DEVELOP
            </h2>
            <p ref={panel4BodyRef} className="mt-6 text-sm leading-relaxed text-white/70">
              Development is where ideas become functional reality.
              <br />
              We build robust, scalable solutions
              <br />
              that power your digital presence and drive growth.
            </p>
            <a
              ref={panel4LinkRef}
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-sm text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div ref={panel5Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 text-center">
            <h2 ref={panel5TitleRef} className="text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              SECURE
            </h2>
            <p ref={panel5BodyRef} className="mt-6 text-sm leading-relaxed text-white/70">
              Security is the foundation of trust in the digital world.
              <br />
              We protect your assets and data with
              <br />
              enterprise-grade security measures and best practices.
            </p>
            <a
              ref={panel5LinkRef}
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-sm text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div ref={panel6Ref} className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 text-center">
            <h2 ref={panel6TitleRef} className="text-6xl font-light tracking-tight text-white sm:text-7xl md:text-8xl">
              SCALE
            </h2>
            <p ref={panel6BodyRef} className="mt-6 text-sm leading-relaxed text-white/70">
              Scaling is about growing without losing quality or performance.
              <br />
              We help you expand your reach and capacity
              <br />
              while maintaining the excellence that defines your brand.
            </p>
            <a
              ref={panel6LinkRef}
              href="#learn-more"
              className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2 text-sm text-white/80 transition hover:border-white hover:bg-white/5 hover:text-white"
            >
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
