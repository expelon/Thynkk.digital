'use client';

export default function OurStorySection() {
  const stats = [
    { value: '700+', label: 'High-Impact Projects', position: 'top-16 -left-6' },
    { value: '100+', label: 'Brand Connections', position: 'bottom-16 right-8' },
  ];

  return (
    <section
      data-nav-theme="dark"
      className="relative bg-black text-white"
      aria-labelledby="our-story-heading"
    >
      <div className="mx-auto flex min-h-[90vh] max-w-6xl flex-col gap-16 px-6 py-24 sm:px-10 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-1">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">Legacy</p>
          <h2
            id="our-story-heading"
            className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Our Story
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            In a world brimming with possibilities, we sprouted, seizing our destiny to create an extraordinary narrative—
            a tale that encapsulates laughter, tears, challenges, and triumphs.
          </p>
          <button
            type="button"
            className="mt-10 inline-flex items-center gap-3 rounded-sm border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
          >
            About us
            <span aria-hidden="true" className="text-lg">
              →
            </span>
          </button>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="relative aspect-square w-full max-w-[420px] orb-float [perspective:1200px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-3xl" />
            <div className="absolute inset-10 rounded-full bg-black/40 blur-2xl" />

            <div className="relative h-full w-full [transform-style:preserve-3d]">
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-neutral-900 via-black to-neutral-900 shadow-[0_0_90px_rgba(255,255,255,0.12)]" />

              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-500 via-cyan-300 to-amber-400 opacity-80 blur-sm orb-core" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black/40 blur-xl" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute h-[92%] w-[92%] rounded-full border border-white/10 shadow-[inset_0_0_40px_rgba(0,0,0,0.55)]" />

                <div className="absolute h-[92%] w-[92%] rounded-full orb-ring-spin [transform:rotateX(68deg)]">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-0 rounded-full border border-transparent [background:conic-gradient(from_90deg,rgba(34,211,238,0.0),rgba(34,211,238,0.55),rgba(99,102,241,0.0),rgba(245,158,11,0.5),rgba(34,211,238,0.0))] [mask:radial-gradient(closest-side,transparent_66%,#000_67%)] opacity-80" />
                </div>

                <div className="absolute h-[78%] w-[78%] rounded-full orb-ring-spin-rev [transform:rotateY(66deg)]">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-0 rounded-full border border-transparent [background:conic-gradient(from_200deg,rgba(236,72,153,0.0),rgba(236,72,153,0.55),rgba(59,130,246,0.0),rgba(34,211,238,0.55),rgba(236,72,153,0.0))] [mask:radial-gradient(closest-side,transparent_66%,#000_67%)] opacity-80" />
                </div>

                <div className="absolute h-[62%] w-[62%] rounded-full orb-ring-spin [transform:rotateX(72deg)_rotateZ(25deg)]">
                  <div className="absolute inset-0 rounded-full border border-white/10" />
                  <div className="absolute inset-0 rounded-full border border-transparent [background:conic-gradient(from_40deg,rgba(16,185,129,0.0),rgba(16,185,129,0.55),rgba(250,204,21,0.0),rgba(99,102,241,0.55),rgba(16,185,129,0.0))] [mask:radial-gradient(closest-side,transparent_66%,#000_67%)] opacity-70" />
                </div>
              </div>

              <div className="absolute inset-0 orb-particles opacity-50">
                <div className="absolute left-10 top-20 h-1 w-1 rounded-full bg-white/60 shadow-[0_0_12px_rgba(255,255,255,0.5)]" />
                <div className="absolute right-14 top-28 h-1 w-1 rounded-full bg-white/50 shadow-[0_0_12px_rgba(34,211,238,0.45)]" />
                <div className="absolute left-24 bottom-24 h-1 w-1 rounded-full bg-white/50 shadow-[0_0_12px_rgba(99,102,241,0.45)]" />
                <div className="absolute right-24 bottom-16 h-1 w-1 rounded-full bg-white/40 shadow-[0_0_12px_rgba(245,158,11,0.4)]" />
              </div>

              <div className="absolute inset-0 orb-sheen">
                <div className="absolute left-1/2 top-1/2 h-40 w-[260px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent blur-md" />
              </div>
            </div>

            {stats.map((stat) => (
              <div
                key={stat.label}
                className={`absolute ${stat.position} rounded-full border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md`}
              >
                <p className="text-sm font-semibold text-white">{stat.value}</p>
                <p className="text-xs text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
