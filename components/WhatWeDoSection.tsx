'use client';

import Image from 'next/image';

type WhatWeDoItem = {
  title: string;
  imageSrc: string;
};

const ITEMS: WhatWeDoItem[] = [
  {
    title: 'Strategy + Customer\nExperience',
    imageSrc: '/hero1.webp',
  },
  {
    title: 'Data + Intelligence',
    imageSrc: '/hero1.webp',
  },
  {
    title: 'Digital Marketing +\nTransformation',
    imageSrc: '/hero1.webp',
  },
  {
    title: 'E-commerce +\nAccelerators',
    imageSrc: '/hero1.webp',
  },
  {
    title: 'Innovation + Product\nEngineering',
    imageSrc: '/hero1.webp',
  },
  {
    title: 'Platforms + Technology',
    imageSrc: '/hero1.webp',
  },
];

export default function WhatWeDoSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <h2 className="text-5xl font-medium tracking-tight sm:text-6xl">
          What We Do
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden border border-zinc-200 bg-white"
            >
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={item.imageSrc}
                  alt={item.title.replace(/\n/g, ' ')}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="border-t border-zinc-200 p-6">
                <p className="whitespace-pre-line text-lg leading-snug">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            type="button"
            className="group inline-flex items-center gap-3 rounded-sm border border-zinc-900 px-8 py-3 text-sm font-medium text-zinc-900 transition hover:bg-zinc-900 hover:text-white"
          >
            Explore What We Do
            <span
              aria-hidden="true"
              className="text-lg transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
