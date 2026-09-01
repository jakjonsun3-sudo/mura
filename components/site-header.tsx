'use client'

import { useEffect, useState } from 'react'

const NAV = [
  { label: 'Work', href: '#work' },
  { label: 'Studio', href: '#studio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? 'bg-background/85 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto flex max-w-[1600px] items-center justify-between px-5 md:px-10 transition-all duration-500 ${
          scrolled ? 'py-4' : 'py-6 md:py-8'
        }`}
      >
        <a
          href="#top"
          className={`font-serif text-2xl leading-none tracking-tight transition-colors ${
            scrolled ? 'text-foreground' : 'text-ink-foreground'
          } md:text-3xl`}
          aria-label="Mura — home"
        >
          Mura
          <span className="text-bronze">.</span>
        </a>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`group relative text-[11px] font-medium uppercase tracking-[0.22em] transition-colors ${
                scrolled
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-ink-foreground/70 hover:text-ink-foreground'
              }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-bronze transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className={`hidden text-[11px] font-medium uppercase tracking-[0.22em] transition-colors md:inline-flex ${
            scrolled ? 'text-foreground' : 'text-ink-foreground'
          }`}
        >
          <span className="border-b border-bronze pb-1">Start a Project</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-8 w-8 flex-col items-center justify-center gap-[6px] md:hidden ${
            open || scrolled ? 'text-foreground' : 'text-ink-foreground'
          }`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${open ? 'translate-y-[3.5px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-6 bg-current transition-transform duration-300 ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`}
          />
        </button>
      </div>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink px-6 pt-28 text-ink-foreground transition-opacity duration-500 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-2" aria-label="Mobile">
          {NAV.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-ink-foreground/10 py-4 font-serif text-4xl font-light"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-10 inline-flex w-fit text-xs font-medium uppercase tracking-[0.22em] text-bronze"
        >
          Start a Project — Dubai
        </a>
      </div>
    </header>
  )
}
