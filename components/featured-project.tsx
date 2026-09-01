import Image from 'next/image'
import { Reveal } from './reveal'

export function FeaturedProject() {
  return (
    <section className="relative">
      <Reveal className="img-reveal relative h-[80svh] min-h-[520px] w-full overflow-hidden">
        <Image
          src="/images/project-othman.png"
          alt="Othman residence — a contemporary majlis interior in Dubai by Mura"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

        <div className="absolute inset-0 mx-auto flex max-w-[1600px] flex-col justify-end px-5 pb-14 md:px-10 md:pb-20">
          <div className="max-w-2xl text-ink-foreground">
            <p className="mb-5 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.28em] text-ink-foreground/70">
              <span className="h-px w-10 bg-bronze" />
              Featured Project — Residential
            </p>
            <h2 className="text-balance font-serif text-5xl font-light leading-[0.95] tracking-[-0.01em] md:text-8xl">
              Othman
            </h2>
            <p className="mt-6 max-w-lg text-pretty text-base font-light leading-relaxed text-ink-foreground/80 md:text-lg">
              A private residence where handcrafted timber, warm stone and layered
              textiles meet a restrained, contemporary majlis — designed for gathering,
              light and quiet.
            </p>
          </div>
        </div>
      </Reveal>

      {/* Meta strip */}
      <div className="bg-ink text-ink-foreground">
        <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-y-8 px-5 py-10 md:grid-cols-4 md:px-10">
          {[
            { k: 'Discipline', v: 'Residential' },
            { k: 'Location', v: 'Dubai, UAE' },
            { k: 'Scope', v: 'Design & Fit-out' },
            { k: 'Approach', v: 'Live Minimalism' },
          ].map((item) => (
            <div key={item.k}>
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/45">{item.k}</p>
              <p className="mt-2 font-serif text-xl font-light md:text-2xl">{item.v}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
