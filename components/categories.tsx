'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Reveal } from './reveal'

const CATEGORIES = [
  {
    index: '01',
    name: 'Residential',
    description:
      'Private villas and homes designed around how you actually live — calm, tactile and quietly luxurious.',
    image: '/images/project-villa.png',
  },
  {
    index: '02',
    name: 'Hospitality',
    description:
      'Restaurants, lounges and clubs engineered for atmosphere, service flow and a lasting impression.',
    image: '/images/project-lounge.png',
  },
  {
    index: '03',
    name: 'Commercial',
    description:
      'Offices, retail and workplaces that balance brand identity with the way people work and move.',
    image: '/images/category-commercial.png',
  },
]

export function Categories() {
  const [active, setActive] = useState(0)

  return (
    <section className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <Reveal as="p" className="rise mb-16 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
        [ Disciplines ]
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Interactive list */}
        <div className="lg:col-span-7">
          <ul className="border-t border-border">
            {CATEGORIES.map((cat, i) => (
              <li key={cat.name}>
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  className="group flex w-full items-center justify-between border-b border-border py-8 text-left transition-colors md:py-12"
                >
                  <div className="flex items-baseline gap-5 md:gap-10">
                    <span
                      className={`font-serif text-sm transition-colors ${active === i ? 'text-bronze' : 'text-muted-foreground'}`}
                    >
                      {cat.index}
                    </span>
                    <h3
                      className={`font-serif text-4xl font-light leading-none tracking-[-0.01em] transition-all duration-500 md:text-6xl lg:text-7xl ${
                        active === i ? 'translate-x-2 text-foreground' : 'text-foreground/55'
                      }`}
                    >
                      {cat.name}
                    </h3>
                  </div>
                  <span
                    className={`hidden text-2xl transition-all duration-500 md:block ${active === i ? 'translate-x-0 text-bronze opacity-100' : 'translate-x-3 opacity-0'}`}
                  >
                    &rarr;
                  </span>
                </button>
                {/* Mobile description */}
                <p className="pb-8 pr-6 text-sm font-light leading-relaxed text-muted-foreground lg:hidden">
                  {cat.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Preview image (desktop) */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <div className="img-reveal is-visible relative aspect-[4/5] w-full overflow-hidden">
              {CATEGORIES.map((cat, i) => (
                <Image
                  key={cat.name}
                  src={cat.image || '/placeholder.svg'}
                  alt={`${cat.name} interior design by Mura`}
                  fill
                  sizes="40vw"
                  className={`object-cover transition-opacity duration-700 ${active === i ? 'opacity-100' : 'opacity-0'}`}
                />
              ))}
            </div>
            <p className="mt-6 max-w-sm text-sm font-light leading-relaxed text-muted-foreground">
              {CATEGORIES[active].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
