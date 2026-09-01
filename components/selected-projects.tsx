import { ParallaxImage } from './parallax-image'
import { Reveal } from './reveal'

type Project = {
  index: string
  name: string
  discipline: string
  location: string
  year: string
  note: string
  image: string
  detail?: string
}

const PROJECTS: Project[] = [
  {
    index: '01',
    name: 'Play Restaurant & Lounge',
    discipline: 'Hospitality',
    location: 'Dubai, UAE',
    year: 'Fit-out & Design',
    note: 'A rooftop dining room and lounge shaped around theatre, light and a slow, cinematic sense of arrival.',
    image: '/images/featured.png',
    detail: '/images/detail-material.png',
  },
  {
    index: '02',
    name: 'Private Villa',
    discipline: 'Residential',
    location: 'Dubai, UAE',
    year: 'Design & Fit-out',
    note: 'A family home reworked around calm, tactile materials and daylight — quietly luxurious rather than loud.',
    image: '/images/project-villa.png',
  },
  {
    index: '03',
    name: 'Secret Lounge Club',
    discipline: 'Hospitality',
    location: 'Dubai, UAE',
    year: 'Concept & Execution',
    note: 'An intimate members\u2019 club engineered for atmosphere — layered shadow, deep tone and considered acoustics.',
    image: '/images/project-lounge.png',
  },
  {
    index: '04',
    name: 'Alkhayala Club',
    discipline: 'Commercial',
    location: 'Dubai, UAE',
    year: 'Interior & Fit-out',
    note: 'A social and leisure destination balancing brand identity with the flow of the people who move through it.',
    image: '/images/project-club.png',
  },
]

function Meta({ project, tone }: { project: Project; tone: 'ink' | 'paper' }) {
  const line = tone === 'ink' ? 'border-ink-foreground/20' : 'border-border'
  const dim = tone === 'ink' ? 'text-ink-foreground/50' : 'text-muted-foreground'
  return (
    <div className={`flex items-center gap-6 border-t ${line} pt-5 text-[10px] uppercase tracking-[0.22em] ${dim}`}>
      <span>{project.discipline}</span>
      <span className="h-3 w-px bg-current opacity-30" />
      <span>{project.location}</span>
      <span className="ml-auto hidden sm:inline">{project.year}</span>
    </div>
  )
}

export function SelectedProjects() {
  const [p1, p2, p3, p4] = PROJECTS

  return (
    <section id="work" className="relative bg-ink text-ink-foreground">
      {/* Section opening — the work is announced like a magazine masthead */}
      <div className="mx-auto max-w-[1600px] px-5 pt-24 md:px-10 md:pt-40">
        <div className="flex items-end justify-between border-b border-ink-foreground/15 pb-8">
          <Reveal as="p" className="rise text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
            [ Selected Work ]
          </Reveal>
          <Reveal as="p" className="rise hidden text-[11px] uppercase tracking-[0.22em] text-ink-foreground/40 sm:block" delay={80}>
            Interiors — Dubai
          </Reveal>
        </div>
        <Reveal
          as="h2"
          className="rise mt-10 max-w-5xl text-balance font-serif text-6xl font-light leading-[0.9] tracking-[-0.02em] md:text-8xl lg:text-[9rem]"
        >
          The <span className="italic text-ink-foreground/60">work</span> speaks first.
        </Reveal>
      </div>

      {/* Project 01 — full-width hero moment with a supporting detail */}
      <article className="mx-auto mt-20 max-w-[1600px] px-5 md:mt-32 md:px-10">
        <Reveal className="reveal-clip group relative">
          <a href="#contact" className="block">
            <ParallaxImage
              src={p1.image}
              alt={`${p1.name} — ${p1.discipline} interior in ${p1.location} by Mura`}
              sizes="100vw"
              speed={0.08}
              className="aspect-[4/5] w-full sm:aspect-[16/10]"
            />
            <span className="pointer-events-none absolute left-5 top-5 font-serif text-[18vw] leading-none text-ink-foreground/10 md:left-8 md:top-8 md:text-[10rem]">
              {p1.index}
            </span>
          </a>
        </Reveal>
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal as="h3" className="rise font-serif text-4xl font-light leading-[0.95] tracking-[-0.01em] md:text-6xl">
              {p1.name}
            </Reveal>
            <Reveal as="div" className="rise mt-6" delay={80}>
              <Meta project={p1} tone="ink" />
            </Reveal>
          </div>
          <Reveal
            as="p"
            className="rise self-end text-pretty text-base font-light leading-relaxed text-ink-foreground/60 md:col-span-4 md:col-start-9"
            delay={140}
          >
            {p1.note}
          </Reveal>
        </div>
      </article>

      {/* Projects 02 + 03 — an asymmetric diptych with staggered heights */}
      <div className="mx-auto mt-24 grid max-w-[1600px] grid-cols-1 gap-x-8 gap-y-20 px-5 md:mt-40 md:grid-cols-12 md:px-10">
        <article className="group md:col-span-6">
          <Reveal className="reveal-clip">
            <a href="#contact" className="block">
              <ParallaxImage
                src={p2.image}
                alt={`${p2.name} — ${p2.discipline} interior in ${p2.location} by Mura`}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="aspect-[4/5] w-full"
              />
            </a>
          </Reveal>
          <div className="mt-7 flex items-baseline justify-between gap-6">
            <Reveal as="h3" className="rise font-serif text-3xl font-light tracking-[-0.01em] md:text-5xl">
              {p2.name}
            </Reveal>
            <span className="font-serif text-lg text-bronze">{p2.index}</span>
          </div>
          <Reveal as="div" className="rise mt-5" delay={80}>
            <Meta project={p2} tone="ink" />
          </Reveal>
        </article>

        <article className="group md:col-span-5 md:col-start-8 md:mt-40">
          <Reveal className="reveal-clip">
            <a href="#contact" className="block">
              <ParallaxImage
                src={p3.image}
                alt={`${p3.name} — ${p3.discipline} interior in ${p3.location} by Mura`}
                sizes="(max-width: 768px) 100vw, 42vw"
                speed={0.14}
                className="aspect-[4/5] w-full"
              />
            </a>
          </Reveal>
          <div className="mt-7 flex items-baseline justify-between gap-6">
            <Reveal as="h3" className="rise font-serif text-3xl font-light tracking-[-0.01em] md:text-5xl">
              {p3.name}
            </Reveal>
            <span className="font-serif text-lg text-bronze">{p3.index}</span>
          </div>
          <Reveal as="div" className="rise mt-5" delay={80}>
            <Meta project={p3} tone="ink" />
          </Reveal>
        </article>
      </div>

      {/* Project 04 — wide closing frame with title laid over the image */}
      <article className="mx-auto mt-24 max-w-[1600px] px-5 pb-24 md:mt-40 md:px-10 md:pb-40">
        <Reveal className="reveal-clip group relative">
          <a href="#contact" className="block">
            <ParallaxImage
              src={p4.image}
              alt={`${p4.name} — ${p4.discipline} interior in ${p4.location} by Mura`}
              sizes="100vw"
              speed={0.06}
              className="aspect-[4/5] w-full sm:aspect-[16/9]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <div className="flex items-end justify-between gap-6">
                <h3 className="text-balance font-serif text-4xl font-light leading-[0.95] tracking-[-0.01em] md:text-7xl">
                  {p4.name}
                </h3>
                <span className="font-serif text-lg text-bronze md:text-2xl">{p4.index}</span>
              </div>
            </div>
          </a>
        </Reveal>
        <Reveal as="div" className="rise mt-7 md:max-w-2xl" delay={80}>
          <Meta project={p4} tone="ink" />
        </Reveal>
      </article>
    </section>
  )
}
