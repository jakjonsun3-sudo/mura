'use client'

import { useEffect, useRef } from 'react'

/**
 * Subtle scroll parallax. Translates the referenced element vertically as it
 * passes through the viewport. `speed` is a fraction of the viewport-travel
 * expressed in px at the extremes (e.g. 0.12 ≈ ±60px on a 1000px viewport).
 * Respects prefers-reduced-motion.
 */
export function useParallax<T extends HTMLElement>(speed = 0.12) {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // -1 when below the fold, +1 when above it, 0 at viewport center
      const center = rect.top + rect.height / 2
      const progress = (center - vh / 2) / (vh / 2 + rect.height / 2)
      const clamped = Math.max(-1, Math.min(1, progress))
      el.style.transform = `translate3d(0, ${(clamped * speed * vh).toFixed(2)}px, 0)`
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
  }, [speed])

  return ref
}
