import Image from 'next/image'
import { Reveal } from './reveal'

const SERVICES = [
  {
    name: 'Interior Design',
    note: 'Residential, hospitality & commercial',
  },
  {
    name: 'Space Planning',
    note: 'Layout, flow & spatial strategy',
  },
  {
    name: 'Concept & 3D Visualisation',
    note: 'Sketches, modelling & renders',
  },
  {
    name: 'Fit-out & Execution',
    note: 'Build, install & delivery',
  },
  {
    name: 'Material & Furniture Selection',
    note: 'Finishes, joinery & sourcing',
  },
  {
    name: 'Author\u2019s Supervision',
    note: 'On-site oversight to completion',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-5">
          <div className="md:sticky md:top-28">
            <Reveal as="p" className="rise mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
              [ Services ]
            </Reveal>
            <Reveal
              as="h2"
              className="rise text-balance font-serif text-4xl font-light leading-[1.05] tracking-[-0.01em] md:text-6xl"
            >
              A full cycle, from first sketch to final install.
            </Reveal>
            <Reveal as="div" className="rise mt-10 img-reveal relative aspect-[16/10] w-full overflow-hidden" delay={120}>
              <Image
                src="/images/detail-material.png"
                alt="A palette of travertine, bronze, oak and linen"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </Reveal>
          </div>
        </div>

        <div className="md:col-span-7">
          <ul className="border-t border-border">
            {SERVICES.map((s, i) => (
              <Reveal as="li" key={s.name} className="rise" delay={i * 60}>
                <div className="group flex items-baseline justify-between gap-6 border-b border-border py-7 md:py-9">
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="font-serif text-sm text-bronze">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-serif text-2xl font-light tracking-[-0.01em] transition-colors duration-300 group-hover:text-bronze md:text-4xl">
                      {s.name}
                    </h3>
                  </div>
                  <p className="hidden max-w-[46%] text-right text-sm font-light leading-relaxed text-muted-foreground sm:block">
                    {s.note}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
