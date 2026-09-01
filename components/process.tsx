import { Reveal } from './reveal'

const STEPS = [
  {
    n: '01',
    title: 'Connect & Consult',
    body: 'We begin with extensive conversation — understanding your vision, goals and the requirements of the space.',
  },
  {
    n: '02',
    title: 'Concept Development',
    body: 'Innovative thinking, artistic vision and technical expertise combine into a complete interior design solution.',
  },
  {
    n: '03',
    title: 'Design Approval',
    body: 'We refine and present until the concept meets your expectations, then seek formal approval before we build.',
  },
  {
    n: '04',
    title: 'Build & Install',
    body: 'We execute the design on site, keeping the project moving smoothly, on budget and on schedule.',
  },
]

export function Process() {
  return (
    <section id="process" className="bg-ink py-24 text-ink-foreground md:py-40">
      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="mb-16 md:mb-24">
          <Reveal as="p" className="rise mb-6 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
            [ Process ]
          </Reveal>
          <Reveal
            as="h2"
            className="rise max-w-3xl text-balance font-serif text-5xl font-light leading-[0.98] tracking-[-0.01em] md:text-7xl"
          >
            A streamlined path from vision to delivery.
          </Reveal>
        </div>

        <div className="grid gap-px border-t border-ink-foreground/15 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.n}
              as="div"
              className="rise border-b border-ink-foreground/15 py-10 md:border-b-0 md:pr-8 md:pt-12"
              delay={i * 100}
            >
              <span className="font-serif text-5xl font-light text-bronze md:text-6xl">{step.n}</span>
              <h3 className="mt-6 font-serif text-2xl font-light md:text-[1.75rem]">{step.title}</h3>
              <p className="mt-4 text-pretty text-sm font-light leading-relaxed text-ink-foreground/60">
                {step.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
