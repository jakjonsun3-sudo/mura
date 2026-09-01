'use client'

import { useEffect, useRef, useState } from 'react'

type Stat = {
  target: number
  decimals?: number
  prefix?: string
  suffix?: string
  label: string
  sub: string
}

const STATS: Stat[] = [
  { target: 2006, label: 'Established', sub: 'Designing across the UAE', suffix: '' },
  { target: 200, prefix: '', suffix: '+', label: 'Projects Delivered', sub: 'Homes, venues & workplaces' },
  { target: 5, decimals: 1, suffix: '.0', label: 'Google Rating', sub: 'Based on 8 client reviews' },
  { target: 3, label: 'Disciplines', sub: 'Residential · Hospitality · Commercial' },
]

function useCountUp(target: number, decimals: number, run: boolean) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!run) return
    let raf = 0
    const duration = 1600
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setValue(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, run])
  return decimals ? value.toFixed(decimals) : Math.round(value).toString()
}

function StatItem({ stat, run }: { stat: Stat; run: boolean }) {
  // decimals handled via suffix (".0") so the integer counts cleanly
  const display = useCountUp(stat.target, 0, run)
  return (
    <div className="border-t border-border pt-6">
      <p className="font-serif text-6xl font-light tracking-[-0.02em] tabular-nums md:text-8xl">
        {stat.prefix}
        {display}
        <span className="text-bronze">{stat.suffix}</span>
      </p>
      <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-foreground">{stat.label}</p>
      <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">{stat.sub}</p>
    </div>
  )
}

export function Stats() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [run, setRun] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <p className="mb-16 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
        [ By the Numbers ]
      </p>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {STATS.map((s) => (
          <StatItem key={s.label} stat={s} run={run} />
        ))}
      </div>
    </section>
  )
}
