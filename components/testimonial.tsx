import { Reveal } from './reveal'

export function Testimonial() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-36">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal as="p" className="rise mb-10 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">
            5.0 on Google — Client Reviews
          </Reveal>
          <Reveal
            as="blockquote"
            className="rise text-balance font-serif text-3xl font-light leading-[1.25] tracking-[-0.01em] md:text-5xl lg:text-[3.25rem]"
          >
            <span className="text-bronze">&ldquo;</span>
            The team understood exactly what we wanted and delivered a space with real
            character — professional from the first sketch to the final install.
            <span className="text-bronze">&rdquo;</span>
          </Reveal>
          <Reveal as="p" className="rise mt-10 text-[11px] font-medium uppercase tracking-[0.22em] text-muted-foreground" delay={100}>
            Verified Client — Mura Studio, Dubai
          </Reveal>
        </div>
      </div>
    </section>
  )
}
