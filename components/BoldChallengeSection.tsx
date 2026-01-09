'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

type Step = 'industry' | 'need' | 'results';

type Recommendation = {
  title: string;
  description: string;
  href: string;
};

const INDUSTRIES = [
  'Advanced Manufacturing & Services',
  'Aerospace & Defense',
  'Agribusiness',
  'Automotive',
  'Aviation',
  'Chemicals',
  'Construction & Infrastructure',
  'Consumer Products',
  'Energy & Natural Resources',
  'Financial Services',
  'Healthcare & Life Sciences',
  'Machinery & Equipment',
  'Media & Entertainment',
  'Mining',
  'Oil & Gas',
  'Paper & Packaging',
  'Private Equity',
  'Retail',
  'Social Impact',
  'Technology',
  'Telecommunications',
] as const;

const BUSINESS_NEEDS = [
  'Change Management',
  'Cost Reduction',
  'Customer Experience',
  'Data Analytics',
  'Digital Strategy',
  'Innovation',
  'Market Expansion',
  'Operations',
  'Organization',
  'Revenue Growth',
  'Sales & Marketing',
  'Transformation',
] as const;

const DEFAULT_RECOMMENDATIONS: Recommendation[] = [
  {
    title: 'Organizational Design and Operating Model',
    description: 'This is how you make your strategy happen',
    href: '#',
  },
  {
    title: 'Business Strategy',
    description: 'Win today and in the future.',
    href: '#',
  },
  {
    title: 'M&A Capability',
    description:
      "To achieve strong growth through M&A it's imperative to develop a repeatable model based on four key disciplines. Success rates double when you master these critical capabilities.",
    href: '#',
  },
];

function PillButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'rounded-full border px-4 py-2 text-sm font-medium transition-colors ' +
        (active
          ? 'border-red-600 bg-red-50 text-red-700'
          : 'border-zinc-200 bg-white text-red-600 hover:border-red-300 hover:bg-red-50')
      }
    >
      {label}
    </button>
  );
}

function Loader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-zinc-200 border-t-red-600" />
    </div>
  );
}

export default function BoldChallengeSection() {
  const [step, setStep] = useState<Step>('industry');
  const [industry, setIndustry] = useState<string | null>(null);
  const [need, setNeed] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAllIndustries, setShowAllIndustries] = useState(false);
  const [showAllNeeds, setShowAllNeeds] = useState(false);

  const industriesToShow = useMemo(() => {
    if (showAllIndustries) return [...INDUSTRIES];
    return INDUSTRIES.slice(0, 10);
  }, [showAllIndustries]);

  const needsToShow = useMemo(() => {
    if (showAllNeeds) return [...BUSINESS_NEEDS];
    return BUSINESS_NEEDS.slice(0, 10);
  }, [showAllNeeds]);

  useEffect(() => {
    if (!isLoading) return;

    const t = window.setTimeout(() => {
      setIsLoading(false);
      setStep('results');
    }, 900);

    return () => window.clearTimeout(t);
  }, [isLoading]);

  const reset = () => {
    setStep('industry');
    setIndustry(null);
    setNeed(null);
    setIsLoading(false);
    setShowAllIndustries(false);
    setShowAllNeeds(false);
  };

  const handleSelectIndustry = (value: string) => {
    setIndustry(value);
    setNeed(null);
    setStep('need');
  };

  const handleSelectNeed = (value: string) => {
    setNeed(value);
    setShowAllIndustries(false);
    setShowAllNeeds(false);
    setIsLoading(true);
  };

  return (
    <section className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-7xl px-8 sm:px-16 lg:px-24 py-16">
        {isLoading ? (
          <Loader />
        ) : step !== 'results' ? (
          showAllIndustries || showAllNeeds ? (
            <div className="w-full">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-semibold">
                  {showAllIndustries ? 'All Industries' : 'All Business Needs'}
                </h3>
                <button
                  type="button"
                  onClick={() => {
                    if (showAllIndustries) {
                      setShowAllIndustries(false);
                    } else {
                      setShowAllNeeds(false);
                    }
                  }}
                  className="text-zinc-400 hover:text-zinc-600"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                {(showAllIndustries ? INDUSTRIES : BUSINESS_NEEDS).map((item, idx) => (
                  <div key={item} className="group">
                    <button
                      type="button"
                      onClick={() => {
                        if (showAllIndustries) {
                          handleSelectIndustry(item);
                        } else {
                          handleSelectNeed(item);
                        }
                      }}
                      className="text-left font-semibold text-red-600 hover:underline"
                    >
                      {item}
                    </button>
                    <div className="mt-2 h-px bg-zinc-200" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
              <div className="relative aspect-[4/5] w-full max-w-[420px] justify-self-center overflow-hidden bg-zinc-100 lg:justify-self-start">
                <Image
                  src="/hero1.webp"
                  alt="Section image"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              <div>
                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                  We champion the bold to achieve the extraordinary.
                </h2>
                <p className="mt-4 text-zinc-600">
                  Answer two questions and put our thinking to work on your
                  challenges.
                </p>

                {step === 'industry' ? (
                  <div className="mt-8">
                    <div className="flex items-baseline gap-3">
                      <p className="text-sm font-semibold">
                        1. What is your industry?
                      </p>
                      <p className="text-xs text-zinc-500">Question 1 of 2</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {industriesToShow.map((label) => (
                        <PillButton
                          key={label}
                          label={label}
                          active={industry === label}
                          onClick={() => handleSelectIndustry(label)}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-6 text-sm text-zinc-500 underline underline-offset-4"
                      onClick={() => setShowAllIndustries(true)}
                    >
                      View all
                    </button>
                  </div>
                ) : (
                  <div className="mt-8">
                    <div className="flex items-baseline gap-3">
                      <p className="text-sm font-semibold">
                        2. What is your business need?
                      </p>
                      <p className="text-xs text-zinc-500">Question 2 of 2</p>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-3">
                      {needsToShow.map((label) => (
                        <PillButton
                          key={label}
                          label={label}
                          active={need === label}
                          onClick={() => handleSelectNeed(label)}
                        />
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-6 text-sm text-zinc-500 underline underline-offset-4"
                      onClick={() => setShowAllNeeds(true)}
                    >
                      View all
                    </button>
                  </div>
                )}
              </div>
            </div>
          )
        ) : (
          <div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <h2 className="text-3xl sm:text-4xl font-semibold leading-tight">
                You selected <span className="font-extrabold">{industry}</span>
                {''} as your industry and{' '}
                <span className="font-extrabold">{need}</span> as your business
                need.
              </h2>

              <button
                type="button"
                onClick={reset}
                className="h-10 shrink-0 rounded-sm border border-zinc-200 px-10 text-xs font-semibold text-red-600 hover:bg-zinc-50"
              >
                RESET
              </button>
            </div>

            <p className="mt-4 text-sm text-zinc-600">
              You selected {industry} as your industry and {need} as your
              business need.
            </p>

            <div className="mt-10">
              <p className="text-sm font-semibold">Recommended for you</p>

              <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
                {DEFAULT_RECOMMENDATIONS.map((rec) => (
                  <div
                    key={rec.title}
                    className="min-h-[260px] rounded-sm border border-zinc-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold leading-snug">
                      {rec.title}
                    </h3>
                    <p className="mt-6 text-sm leading-relaxed text-zinc-600">
                      {rec.description}
                    </p>
                    <a
                      href={rec.href}
                      className="mt-8 inline-flex items-center text-sm font-semibold text-red-600"
                    >
                      Read More
                      <span className="ml-2">›</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
