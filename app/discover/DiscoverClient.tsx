'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DiscoverClient() {
  const rootRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(titleRef.current, {
        opacity: 1,
        // Add a small negative bottom inset so descenders (g, y, p) are not visually clipped
        clipPath: 'inset(0 100% -0.15em 0)',
        filter: 'blur(12px)',
      });

      gsap.set('.discover-fade', { opacity: 0, y: 24 });
      gsap.set('.discover-card', { opacity: 0, y: 24, scale: 0.96 });

      const tl = gsap.timeline({ delay: 0.2 });

      tl.to(titleRef.current, {
        clipPath: 'inset(0 0% -0.15em 0)',
        filter: 'blur(0px)',
        duration: 1.2,
        ease: 'power4.out',
      })
        .to(
          '.discover-fade',
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            stagger: 0.14,
            ease: 'expo.out',
          },
          '-=0.45'
        )
        .to(
          '.discover-card',
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.1,
            stagger: 0.1,
            ease: 'power4.out',
          },
          '-=0.55'
        );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar variant="black" />
      <main className="min-h-screen bg-white text-neutral-950">
        <div ref={rootRef} className="relative">
          <section className="mx-auto max-w-6xl px-6 pb-14 pt-28 sm:px-10 lg:pt-32">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="discover-fade text-sm font-medium tracking-[0.22em] text-neutral-500">DISCOVER</p>
              <h1
                ref={titleRef}
                className="mt-4 text-4xl font-light leading-[1.12] tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl"
              >
                Turning insight into strategic advantage
              </h1>
              <p className="discover-fade mt-6 text-base leading-relaxed text-neutral-700 sm:text-lg">
                At Thynkk Digital, Discover is where meaningful digital transformation begins. Before design, development,
                or marketing, we focus on understanding your business, your customers, and the ecosystem you operate in.
                We bring together digital strategy, customer research, and data analysis to uncover opportunities hidden
                within your customer journeys.
              </p>
            </div>

            <div className="discover-fade flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/"
                className="inline-flex h-12 items-center justify-center rounded-md border border-neutral-200 px-6 text-sm font-medium text-neutral-800 transition hover:border-neutral-300 hover:text-neutral-950"
              >
                Back to home
              </Link>
              <a
                href="#discovery-phase"
                className="inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-medium text-white transition hover:bg-neutral-900"
              >
                Explore details
              </a>
            </div>
          </div>

          <div className="discover-fade mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="discover-card rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">PHASE</div>
              <div className="mt-2 text-lg font-semibold text-neutral-950">Business &amp; Brand</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-700">
                Align digital decisions with long-term growth objectives.
              </div>
            </div>
            <div className="discover-card rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">PHASE</div>
              <div className="mt-2 text-lg font-semibold text-neutral-950">Customer Research</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-700">
                Map real customer journeys using intent and behaviour data.
              </div>
            </div>
            <div className="discover-card rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">PHASE</div>
              <div className="mt-2 text-lg font-semibold text-neutral-950">Experience Audits</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-700">
                Identify gaps, friction points, and conversion opportunities.
              </div>
            </div>
            <div className="discover-card rounded-xl border border-neutral-200 bg-neutral-50 p-5">
              <div className="text-xs font-medium tracking-[0.18em] text-neutral-500">PHASE</div>
              <div className="mt-2 text-lg font-semibold text-neutral-950">Opportunity Mapping</div>
              <div className="mt-2 text-sm leading-relaxed text-neutral-700">
                Find the highest impact levers across strategy, design &amp; tech.
              </div>
            </div>
          </div>
        </section>

        <section id="discovery-phase" className="mx-auto max-w-6xl px-6 pb-20 sm:px-10">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div className="discover-card rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">What We Do in the Discovery Phase</h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
                We combine strategy, research, and analysis to reduce risk and increase clarity before execution.
              </p>

              <div className="mt-8 space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">Business &amp; Brand Analysis</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
                    We start by understanding your business goals, brand positioning, and competitive landscape. This
                    helps us align digital decisions with long-term growth objectives, not short-term trends.
                  </p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-neutral-900">Focus areas</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-neutral-700 sm:text-lg">
                    <li>Brand strategy and positioning</li>
                    <li>Market and competitor analysis</li>
                    <li>Business goals and success metrics</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">Customer Research &amp; Journey Mapping</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Your customers are at the centre of every decision. We analyse user behaviour, intent, and pain
                    points across touchpoints to map real customer journeys, not assumptions.
                  </p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-neutral-900">Focus areas</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-neutral-700 sm:text-lg">
                    <li>Target audience research</li>
                    <li>Customer personas</li>
                    <li>User journey mapping</li>
                    <li>Behaviour and intent analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="discover-card rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-9">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">Digital &amp; Experience Audits</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
                    We evaluate your existing digital presence to identify gaps, friction points, and growth
                    opportunities. From UX and UI audits to content and SEO reviews, we uncover what&apos;s working and
                    what&apos;s holding you back.
                  </p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-neutral-900">Focus areas</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-neutral-700 sm:text-lg">
                    <li>Website and UX audits</li>
                    <li>Content and SEO analysis</li>
                    <li>Performance and usability review</li>
                    <li>Conversion bottlenecks</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-neutral-950 sm:text-xl">Data-Driven Opportunity Identification</h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
                    Using insights from research, analytics, and audits, we identify high-impact opportunities where
                    strategy, design, and technology intersect. This ensures every next step is intentional and
                    measurable.
                  </p>
                  <p className="mt-4 text-sm font-medium tracking-wide text-neutral-900">Focus areas</p>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-base text-neutral-700 sm:text-lg">
                    <li>Opportunity mapping</li>
                    <li>Experience improvement areas</li>
                    <li>Conversion and growth levers</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="discover-card mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-7 sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-950 sm:text-3xl">Why Discovery Matters</h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
              Without discovery, digital decisions are guesswork. With discovery, every action is grounded in insight.
              Our approach ensures:
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 text-base text-neutral-700 sm:grid-cols-2 sm:text-lg">
              <li className="rounded-xl border border-neutral-200 bg-white px-5 py-4">Clear digital strategy aligned to business goals</li>
              <li className="rounded-xl border border-neutral-200 bg-white px-5 py-4">Reduced risk during design and development</li>
              <li className="rounded-xl border border-neutral-200 bg-white px-5 py-4">Better user experience and higher conversions</li>
              <li className="rounded-xl border border-neutral-200 bg-white px-5 py-4">Smarter use of time, budget, and technology</li>
            </ul>
          </div>
        </section>
      </div>
      </main>
      <Footer />
    </>
  );
}
