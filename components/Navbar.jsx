'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div>
      <header
        className="absolute top-0 inset-x-0 z-30 pointer-events-auto anim-nav-in px-4 pt-4 sm:px-6 sm:pt-6 md:p-0"
        style={{
          paddingTop: undefined, // Handled by responsive classes & style on md
        }}
      >
        <div
          className="w-full md:pt-[max(2.5rem,env(safe-area-inset-top,2.5rem))] md:px-[max(5.6vw,2rem)]"
          style={{
            // Inline fallback for desktop padding specs
            paddingTop: undefined,
          }}
        >
          <nav
            aria-label="Main Navigation"
            className="flex items-center justify-between w-full mx-auto"
          >
            {/* Identity & Monogram */}
            <Link
              href="/"
              className="group flex items-center gap-2.5 sm:gap-3 py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink rounded-lg shrink-0"
              aria-label="Home — Aalok varshney"
              onClick={() => setIsMenuOpen(false)}
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
                <span className="font-sans font-medium text-[18px] sm:text-[20px] tracking-[-0.02em] text-ink leading-tight">
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

            {/* Desktop Primary CTA Button */}
            <div className="hidden md:flex items-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-2.5 rounded-full bg-white/95 text-ink font-mono text-[12px] uppercase tracking-[0.14em] font-medium border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 active:translate-y-0 active:shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                <span>Let&apos;s talk</span>
              </Link>
            </div>

            {/* Mobile Actions: Compact CTA + Hamburger Menu Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center min-h-[36px] px-3.5 py-1.5 rounded-full bg-white/95 text-ink font-mono text-[11px] uppercase tracking-[0.12em] font-medium border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white active:scale-95 transition-all duration-200"
              >
                <span>Talk</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen((prev) => !prev)}
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={isMenuOpen}
                className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/95 text-ink border border-ink/10 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:bg-white active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
              >
                {isMenuOpen ? (
                  /* Close Icon */
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  /* Hamburger Icon */
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-2.5 w-full bg-white/95 backdrop-blur-md border border-ink/10 rounded-2xl shadow-[0_12px_36px_rgba(0,0,0,0.08)] p-3.5 flex flex-col gap-1 anim-nav-in">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink-muted hover:text-ink hover:bg-ink/5 px-3.5 py-2.5 rounded-xl transition-colors duration-150 flex items-center justify-between"
              >
                <span>Home</span>
                <span className="text-[10px] text-ink-subtle opacity-60">/01</span>
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink-muted hover:text-ink hover:bg-ink/5 px-3.5 py-2.5 rounded-xl transition-colors duration-150 flex items-center justify-between"
              >
                <span>About</span>
                <span className="text-[10px] text-ink-subtle opacity-60">/02</span>
              </Link>
              <Link
                href="/explore"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink-muted hover:text-ink hover:bg-ink/5 px-3.5 py-2.5 rounded-xl transition-colors duration-150 flex items-center justify-between"
              >
                <span>Explore</span>
                <span className="text-[10px] text-ink-subtle opacity-60">/03</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="font-mono text-[12px] tracking-[0.16em] uppercase text-ink-muted hover:text-ink hover:bg-ink/5 px-3.5 py-2.5 rounded-xl transition-colors duration-150 flex items-center justify-between"
              >
                <span>Contact</span>
                <span className="text-[10px] text-ink-subtle opacity-60">/04</span>
              </Link>

              <div className="pt-2 mt-1 border-t border-ink/5">
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center py-2.5 rounded-xl bg-ink text-white font-mono text-[12px] uppercase tracking-[0.14em] font-medium shadow-sm hover:bg-ink/90 active:scale-[0.99] transition-all duration-200"
                >
                  <span>Let&apos;s talk</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  )
}

export default Navbar
