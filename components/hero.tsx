'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${(y * 0.35).toFixed(2)}px, 0) scale(1.05)`
      }
      if (contentRef.current) {
        contentRef.current.style.transform = `translate3d(0, ${(y * 0.18).toFixed(2)}px, 0)`
        contentRef.current.style.opacity = `${Math.max(0, 1 - y / 560).toFixed(3)}`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-ink">
      <div ref={imageRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/hero.png"
          alt="A double-height luxury Dubai interior with travertine walls at golden dusk"
          fill
          priority
          sizes="100vw"
          className="hero-kenburns object-cover"
        />
        {/* cinematic gradients for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/25 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/55 to-transparent" />
      </div>

      {/* vertical studio marker — editorial detail */}
      <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 md:right-10 md:block">
        <p className="text-[10px] uppercase tracking-[0.4em] text-ink-foreground/50 [writing-mode:vertical-rl]">
          Est. 2006 — Business Bay
        </p>
      </div>

      <div
        ref={contentRef}
        className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-end px-5 pb-16 will-change-transform md:px-10 md:pb-20"
      >
        <div className="max-w-4xl">
          <p className="hero-line mb-6 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-foreground/70">
            <span className="h-px w-10 bg-bronze" />
            Interior Design Studio — Dubai, UAE
          </p>

          <h1 className="font-serif text-[16vw] font-light leading-[0.9] tracking-[-0.03em] text-ink-foreground sm:text-[13vw] md:text-[9.5rem] lg:text-[11.5rem]">
            <span className="hero-line block overflow-hidden">
              <span className="block">Spaces With</span>
            </span>
            <span className="hero-line hero-line-2 block overflow-hidden">
              <span className="block italic text-bronze">Character.</span>
            </span>
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
      <div className="absolute bottom-6 left-5 z-10 flex items-center gap-3 md:left-10">
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
          from { transform: scale(1.12); }
          to { transform: scale(1); }
        }
        .hero-kenburns { animation: hero-kenburns 9s cubic-bezier(0.16,1,0.3,1) forwards; }
        .hero-line > span {
          display: block;
          transform: translateY(105%);
          animation: hero-rise 1.1s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-line:not(:has(> span)) {
          opacity: 0;
          transform: translateY(24px);
          animation: hero-fade 1s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .hero-line-2 > span { animation-delay: 0.12s; }
        .hero-line-3 { animation-delay: 0.4s; }
        .hero-line-4 { animation-delay: 0.52s; }
        @keyframes hero-rise {
          to { transform: translateY(0); }
        }
        @keyframes hero-fade {
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-kenburns, .hero-line, .hero-line > span {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
