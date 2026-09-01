import { ParallaxImage } from './parallax-image'
import { Reveal } from './reveal'

const YEAR = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink text-ink-foreground">
      <Reveal className="reveal-clip relative">
        <ParallaxImage src="/images/detail-material.png" alt="A palette of travertine, bronze, oak and linen" sizes="100vw" speed={0.08} className="h-[46svh] min-h-[320px] w-full" />
        <div className="absolute inset-0 bg-ink/40" />
        <div className="absolute inset-0 flex items-center"><div className="mx-auto w-full max-w-[1600px] px-5 md:px-10"><p className="max-w-xl text-balance font-serif text-2xl font-light italic leading-[1.3] text-ink-foreground/90 md:text-4xl">&ldquo;Live minimalism&rdquo; — a design philosophy focused on how a space feels to live and work in.</p></div></div>
      </Reveal>

      <div className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="border-b border-ink-foreground/15 py-24 md:py-40">
          <Reveal as="p" className="rise mb-8 text-[11px] font-medium uppercase tracking-[0.28em] text-bronze">[ Start a Project ]</Reveal>
          <Reveal as="h2" className="rise max-w-5xl text-balance font-serif text-[13vw] font-light leading-[0.92] tracking-[-0.02em] md:text-[8.5rem]">Let&apos;s design a space<br /><span className="italic text-ink-foreground/60">with character.</span></Reveal>
          <Reveal as="div" className="rise mt-14 flex flex-wrap items-center gap-4" delay={120}>
            <a href="mailto:design@mura.ae" className="group inline-flex items-center gap-3 bg-ink-foreground px-9 py-5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-bronze hover:text-ink-foreground">design@mura.ae<span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span></a>
            <a href="tel:+971565507775" className="inline-flex items-center gap-3 border border-ink-foreground/25 px-9 py-5 text-[11px] font-medium uppercase tracking-[0.22em] text-ink-foreground transition-colors duration-300 hover:border-bronze hover:text-bronze">+971 56 550 7775</a>
          </Reveal>
        </div>

        <div className="grid gap-10 py-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4"><p className="font-serif text-3xl font-light">Mura<span className="text-bronze">.</span></p><p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-ink-foreground/55">Interior design and fit-out solutions across residential, hospitality and commercial spaces.</p></div>
          <div className="md:col-span-3"><p className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/40">Studio</p><address className="mt-4 text-sm font-light not-italic leading-relaxed text-ink-foreground/70">Office # 807, Prism Tower<br />Business Bay<br />Dubai, United Arab Emirates</address></div>
          <div className="md:col-span-3"><p className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/40">Contact</p><ul className="mt-4 space-y-2 text-sm font-light text-ink-foreground/70"><li><a href="mailto:design@mura.ae" className="transition-colors hover:text-bronze">design@mura.ae</a></li><li><a href="tel:+971565507775" className="transition-colors hover:text-bronze">+971 56 550 7775</a></li><li><a href="tel:+97144243033" className="transition-colors hover:text-bronze">+971 4 424 3033</a></li></ul></div>
          <div className="md:col-span-2"><p className="text-[10px] uppercase tracking-[0.24em] text-ink-foreground/40">Enquiries</p><p className="mt-4 max-w-[14rem] text-sm font-light leading-relaxed text-ink-foreground/70">For new projects and design enquiries, contact the studio directly.</p></div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink-foreground/15 py-8 text-[11px] uppercase tracking-[0.18em] text-ink-foreground/40 md:flex-row md:items-center"><p>&copy; {YEAR} Mura LLC — Interior Design, Dubai</p><p>Live Minimalism</p></div>
      </div>
    </footer>
  )
}
