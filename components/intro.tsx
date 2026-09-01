import { Reveal } from './reveal'

const FIGURES = [
  { value: '2006', label: 'Designing since' },
  { value: '200+', label: 'Projects delivered' },
  { value: '5.0', label: 'Google rating · 8 reviews' },
  { value: 'Dubai', label: 'Business Bay studio' },
]

export function Intro() {
  return (
    <section id="studio" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal as="p" className="rise text-[11px] font-medium uppercase tracking-[0.28em] text-bronze md:col-span-3">
          [ The Studio ]
        </Reveal>

        <div className="md:col-span-9">
          <Reveal
            as="h2"
            className="rise max-w-4xl text-balance font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] md:text-5xl lg:text-[3.4rem]"
          >
            A Dubai studio building considered interiors since 2006 — architectural
            and creative solutions that turn a client&apos;s vision into a place
            with genuine character.
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2 md:gap-16">
            <Reveal as="p" className="rise text-pretty text-base font-light leading-relaxed text-muted-foreground" delay={80}>
              We describe our approach as{' '}
              <span className="text-foreground">live minimalism</span> — design that is
              less about a visual wrap and more about how a space feels to live and
              work in. Every project moves through a full cycle of documentation, from
              outline sketch to working drawings and on-site supervision.
            </Reveal>
            <Reveal as="p" className="rise text-pretty text-base font-light leading-relaxed text-muted-foreground" delay={160}>
              From private villas to restaurants, lounges and workplaces, we work across
              residential, hospitality and commercial interiors — selecting materials,
              manufacturers and details that hold up to the way a space is really used.
            </Reveal>
          </div>
        </div>
      </div>

      {/* Verified figures — set as an editorial index line, not a stat grid */}
      <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t border-border pt-12 md:mt-28 md:grid-cols-4">
        {FIGURES.map((f, i) => (
          <Reveal key={f.label} className="rise" delay={i * 80}>
            <p className="font-serif text-5xl font-light tracking-[-0.02em] md:text-6xl">
              {f.value}
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {f.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
