import { Reveal } from './reveal'

const FIGURES = [
  { value: '2006', label: 'Beginning our services' },
  { value: '200+', label: 'Successful projects' },
  { value: '5.0', label: 'Google rating · 8 reviews' },
]

export function Intro() {
  return (
    <section id="studio" className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-40">
      <div className="grid gap-12 md:grid-cols-12 md:gap-16">
        <Reveal as="p" className="rise text-[11px] font-medium uppercase tracking-[0.28em] text-bronze md:col-span-3">
          [ The Studio ]
        </Reveal>

        <div className="md:col-span-9">
          <Reveal as="h2" className="rise max-w-4xl text-balance font-serif text-3xl font-light leading-[1.15] tracking-[-0.01em] md:text-5xl lg:text-[3.4rem]">
            A Dubai studio creating considered interiors across residential, hospitality and commercial spaces.
          </Reveal>

          <div className="mt-14 grid gap-10 border-t border-border pt-10 md:grid-cols-2 md:gap-16">
            <Reveal as="p" className="rise text-pretty text-base font-light leading-relaxed text-muted-foreground" delay={80}>
              Mura calls its philosophy <span className="text-foreground">live minimalism</span> — a focus on the feeling and function of a space rather than a purely visual wrap.
            </Reveal>
            <Reveal as="p" className="rise text-pretty text-base font-light leading-relaxed text-muted-foreground" delay={160}>
              The studio describes a full project cycle spanning outline sketches, design development, working documentation and on-site supervision.
            </Reveal>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border pt-12 sm:grid-cols-3 md:mt-28 md:gap-8">
        {FIGURES.map((f, i) => (
          <Reveal key={f.label} className="rise" delay={i * 80}>
            <p className="font-serif text-5xl font-light tracking-[-0.02em] md:text-6xl">{f.value}</p>
            <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{f.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
