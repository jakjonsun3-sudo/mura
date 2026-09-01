'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  /** extra classes applied only after the element enters the viewport */
  as?: ElementType
  delay?: number
  once?: boolean
}

/**
 * Adds the `is-visible` class when the element scrolls into view.
 * Pair with the `.rise`, `.img-reveal`, or `.reveal-clip` utility classes.
 */
export function Reveal({
  children,
  className = '',
  as,
  delay = 0,
  once = true,
}: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = window.setTimeout(() => setVisible(true), delay)
          if (once) observer.disconnect()
          return () => window.clearTimeout(timer)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [delay, once])

  return (
    <Tag ref={ref} className={`${className} ${visible ? 'is-visible' : ''}`}>
      {children}
    </Tag>
  )
}
