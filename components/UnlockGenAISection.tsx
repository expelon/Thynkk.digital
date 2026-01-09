'use client';

export default function UnlockGenAISection() {
  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0">
        <div className="absolute -left-40 -top-32 h-[520px] w-[520px] rounded-full bg-fuchsia-600/25 blur-3xl" />
        <div className="absolute -right-40 top-10 h-[560px] w-[560px] rounded-full bg-indigo-500/25 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-[460px] w-[460px] -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl items-center justify-center px-6 py-24 sm:px-10">
        <div className="relative flex w-full items-center justify-center">
          <div className="pointer-events-none absolute h-[520px] w-[520px] rounded-full bg-gradient-to-br from-indigo-500/30 via-transparent to-fuchsia-500/30 blur-2xl" />

          <div className="pointer-events-none absolute h-[520px] w-[520px] orb-float [perspective:1200px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500/20 via-black to-fuchsia-500/20" />
            <div className="absolute inset-4 rounded-full bg-black/50 blur-sm" />
            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_60px_rgba(0,0,0,0.75)]" />

            <div className="absolute inset-0 orb-sheen">
              <div className="absolute left-1/2 top-1/2 h-44 w-[360px] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md" />
            </div>

            <div className="absolute inset-0 rounded-full border border-white/10" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Unlock The
              <br />
              Power of{' '}
              <span className="bg-gradient-to-r from-[#025CFE] via-[#025CFE] to-[#025CFE] bg-clip-text text-transparent">
                Gen AI
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base">
              Today’s businesses need more than just digital tools—they need clear
              strategic direction, backed by deep customer insight.
            </p>

            <button
              type="button"
              className="group mt-10 inline-flex items-center gap-3 rounded-sm border border-white/30 bg-white/5 px-8 py-3 text-sm font-medium text-white transition hover:border-white/60 hover:bg-white/10"
            >
              Learn more
              <span
                aria-hidden="true"
                className="text-lg transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
