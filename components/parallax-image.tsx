'use client'

import Image from 'next/image'
import { useParallax } from './use-parallax'

type ParallaxImageProps = {
  src: string
  alt: string
  sizes: string
  speed?: number
  className?: string
  priority?: boolean
}

/**
 * Image that drifts slowly against the scroll. The inner wrapper is taller than
 * the frame so the translate never exposes an edge. Pair the outer frame with a
 * `reveal-clip` Reveal for an editorial wipe-in entrance.
 */
export function ParallaxImage({
  src,
  alt,
  sizes,
  speed = 0.1,
  className = '',
  priority,
}: ParallaxImageProps) {
  const ref = useParallax<HTMLDivElement>(speed)
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div ref={ref} className="absolute inset-x-0 -top-[12%] h-[124%] will-change-transform">
        <Image
          src={src || '/placeholder.svg'}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    </div>
  )
}
