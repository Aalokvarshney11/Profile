import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div>
      <header
        className="absolute top-0 inset-x-0 z-30 pointer-events-auto anim-nav-in"
        style={{
          paddingTop: 'max(2.5rem, env(safe-area-inset-top, 2.5rem))',
          paddingLeft: 'max(5.6vw, 2rem)',
          paddingRight: 'max(5.6vw, 2rem)',
        }}
      >
        <nav
          aria-label="Main Navigation"
          className="flex items-center justify-between w-full mx-auto"
        >
          {/* Identity & Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink rounded-lg"
            aria-label="Home — Aalok varshney"
          >
            {/* Custom Architectural Precision Monogram "V" */}
            <svg
              width="26"
              height="26"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-ink transition-transform duration-300 ease-editorial group-hover:scale-105"
              aria-hidden="true"
            >
              <rect
                x="1.5"
                y="1.5"
                width="25"
                height="25"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeOpacity="0.3"
                fill="#ffffff"
                fillOpacity="0.6"
              />
              <path
                d="M7.5 7.5L14 20.5L20.5 7.5"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="14" cy="12.5" r="1.5" fill="currentColor" fillOpacity="0.8" />
            </svg>

            <div className="flex flex-col">
              <span className="font-sans font-medium text-[20px] tracking-[-0.02em] text-ink leading-tight">
                Aalok Varshney
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-ink-subtle">
                FullStack Devloper
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 list-none">
            {['About', 'explore'].map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="font-mono text-[12px] tracking-[0.18em] uppercase text-ink-muted hover:text-ink transition-colors duration-200 py-2 px-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink rounded"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* Primary CTA Button */}
          <Link
            href="/contact"
            // target="_blank"
            // rel="noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-2.5 rounded-full bg-white/95 text-ink font-mono text-[12px] uppercase tracking-[0.14em] font-medium border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
          >
            <span>Let&apos;s talk</span>
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
