import Image from 'next/image'

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="A double-height luxury Dubai interior with travertine walls at golden dusk"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
        {/* cinematic gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 md:px-10 md:pb-20">
        <div className="max-w-4xl">
          <p className="hero-line mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-foreground/70">
            <span className="h-px w-10 bg-bronze" />
            Interior Design Studio — Dubai, UAE
          </p>

          <h1 className="font-serif text-[15vw] font-light leading-[0.92] tracking-[-0.02em] text-ink-foreground sm:text-[13vw] md:text-[9.5rem] lg:text-[11rem]">
            <span className="hero-line block">Spaces With</span>
            <span className="hero-line hero-line-2 block italic text-bronze">Character.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <p className="hero-line hero-line-3 max-w-md text-pretty text-base font-light leading-relaxed text-ink-foreground/80 md:text-lg">
              Refined residential, commercial and hospitality interiors shaped around
              architecture, material and atmosphere.
            </p>

            <div className="hero-line hero-line-4 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink-foreground px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-bronze hover:text-ink-foreground"
              >
                Start a Project
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  &rarr;
                </span>
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-3 border border-ink-foreground/30 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground transition-colors duration-300 hover:border-bronze hover:text-bronze"
              >
                Explore Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 md:right-10 md:flex">
        <span className="text-[10px] uppercase tracking-[0.3em] text-ink-foreground/50">Scroll</span>
        <span className="h-10 w-px bg-ink-foreground/30">
          <span className="block h-4 w-px animate-[scrollcue_1.8s_ease-in-out_infinite] bg-bronze" />
        </span>
      </div>

      <style>{`
        @keyframes scrollcue {
          0% { transform: translateY(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: translateY(24px); opacity: 0; }
        }
        @keyframes hero-kenburns {
          from { transform: scale(1.08); }
          to { transform: scale(1); }
        }
        .hero-kenburns { animation: hero-kenburns 8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-line {
          opacity: 0;
          transform: translateY(24px);
          animation: hero-rise 1s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-line-2 { animation-delay: 0.12s; }
        .hero-line-3 { animation-delay: 0.34s; }
        .hero-line-4 { animation-delay: 0.46s; }
        @keyframes hero-rise {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns, .hero-line { animation: none; opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  )
}
