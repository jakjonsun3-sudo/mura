import Image from 'next/image'
import { Reveal } from './reveal'

type Project = {
  index: string
  name: string
  type: string
  location: string
  image: string
  span: string
  ratio: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Play Restaurant & Lounge',
    type: 'Hospitality',
    location: 'Dubai',
    image: '/images/featured.png',
    span: 'md:col-span-7',
    ratio: 'aspect-[4/5] md:aspect-[4/5]',
  },
  {
    index: '02',
    name: 'Private Villa',
    type: 'Residential',
    location: 'Dubai',
    image: '/images/project-villa.png',
    span: 'md:col-span-5 md:mt-32',
    ratio: 'aspect-[4/5]',
  },
  {
    index: '03',
    name: 'Secret Lounge Club',
    type: 'Hospitality',
    location: 'Dubai',
    image: '/images/project-lounge.png',
    span: 'md:col-span-5',
    ratio: 'aspect-[4/5]',
  },
  {
    index: '04',
    name: 'Alkhayala Club',
    type: 'Commercial',
    location: 'Dubai',
    image: '/images/project-club.png',
    span: 'md:col-span-7 md:mt-16',
    ratio: 'aspect-[4/5] md:aspect-[16/11]',
  },
]

export function SelectedProjects() {
  return (
    <section id="work" className="bg-ink py-24 text-ink-foreground md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-16 flex flex-col justify-between gap-6 md:mb-24 md:flex-row md:items-end">
          <div>
            <Reveal as="p" className="rise mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
              [ Selected Work ]
            </Reveal>
            <Reveal
              as="h2"
              className="rise text-balance font-serif text-5xl font-light leading-[0.95] tracking-[-0.01em] md:text-7xl lg:text-8xl"
            >
              Projects with
              <br />
              <span className="italic text-ink-foreground/70">a point of view.</span>
            </Reveal>
          </div>
          <Reveal as="p" className="rise max-w-xs text-sm font-light leading-relaxed text-ink-foreground/60" delay={120}>
            A selection of interiors delivered across Dubai — each shaped by its
            architecture, brief and atmosphere.
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 md:gap-y-8">
          {PROJECTS.map((p) => (
            <Reveal key={p.index} className={`group ${p.span}`}>
              <a href="#contact" className="block">
                <div className={`img-reveal relative w-full overflow-hidden ${p.ratio}`}>
                  <Image
                    src={p.image || '/placeholder.svg'}
                    alt={`${p.name} — ${p.type} interior in ${p.location} by Mura`}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
                </div>
                <div className="mt-6 flex items-start justify-between border-t border-ink-foreground/15 pt-5">
                  <div>
                    <h3 className="font-serif text-2xl font-light md:text-3xl">{p.name}</h3>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-ink-foreground/50">
                      {p.type} — {p.location}
                    </p>
                  </div>
                  <span className="font-serif text-lg text-bronze">{p.index}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
