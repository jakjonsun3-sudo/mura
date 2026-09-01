'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function FeaturedProject() {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const kickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const update = () => {
      raf = 0
      const section = sectionRef.current
      if (!section) return
      const rect = section.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // 0 as the section enters the bottom, 1 as it leaves the top
      const progress = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)))
      if (imageRef.current) {
        imageRef.current.style.transform = `translate3d(0, ${((progress - 0.5) * 18).toFixed(2)}%, 0) scale(1.15)`
      }
      if (titleRef.current) {
        titleRef.current.style.transform = `translate3d(0, ${((0.5 - progress) * 120).toFixed(2)}px, 0)`
      }
      if (kickerRef.current) {
        kickerRef.current.style.transform = `translate3d(0, ${((0.5 - progress) * -160).toFixed(2)}px, 0)`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-ink text-ink-foreground">
      {/* The signature moment: a slow-revealing image with type drifting across it */}
      <div className="relative h-[110svh] min-h-[680px] w-full overflow-hidden">
        <div ref={imageRef} className="absolute inset-0 will-change-transform">
          <Image
            src="/images/project-othman.png"
            alt="Othman residence — a contemporary majlis interior in Dubai by Mura"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/10 to-ink/80" />
        </div>

        {/* drifting kicker, upper field */}
        <div
          ref={kickerRef}
          className="absolute inset-x-0 top-[16%] z-10 will-change-transform"
        >
          <div className="mx-auto max-w-[1600px] px-5 md:px-10">
            <p className="flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.3em] text-ink-foreground/70">
              <span className="h-px w-12 bg-bronze" />
              Featured Project — Residential
            </p>
          </div>
        </div>

        {/* oversized title drifting across the center */}
        <div
          ref={titleRef}
          className="absolute inset-0 z-10 flex items-center justify-center will-change-transform"
        >
          <h2 className="text-center font-serif text-[26vw] font-light leading-none tracking-[-0.03em] md:text-[18rem]">
            Othman
          </h2>
        </div>

        {/* grounding caption, lower field */}
        <div className="absolute inset-x-0 bottom-0 z-10 pb-14 md:pb-20">
          <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 md:flex-row md:items-end md:justify-between md:px-10">
            <p className="max-w-lg text-pretty text-base font-light leading-relaxed text-ink-foreground/80 md:text-lg">
              A private residence where handcrafted timber, warm stone and layered
              textiles meet a restrained, contemporary majlis — designed for gathering,
              light and quiet.
            </p>
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground"
            >
              <span className="border-b border-bronze pb-1">View the Project</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Meta strip — quiet, factual, closes the moment */}
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-8 px-5 py-12 md:grid-cols-4 md:px-10">
          {[
            { k: 'Discipline', v: 'Residential' },
            { k: 'Location', v: 'Dubai, UAE' },
            { k: 'Scope', v: 'Design & Fit-out' },
            { k: 'Approach', v: 'Live Minimalism' },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/45">{item.k}</p>
              <p className="mt-2 font-serif text-xl font-light md:text-2xl">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
