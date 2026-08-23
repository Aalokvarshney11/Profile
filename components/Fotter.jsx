import React from 'react'

const Fotter = () => {
  return (
    <footer className="pt-12 mt-12 border-t border-ink/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-ink-muted tracking-[0.2em] text-[11px] sm:text-xs">
            © 2026 Aalok Varshney // FULL_STACK_PORTFOLIO
          </div>

          <div className="flex items-center gap-6 sm:gap-8 text-ink-muted text-[11px] sm:text-xs tracking-wider">
            <a
              href="https://github.com/Aalokvarshney11"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/aalok-varshney-8949573b1/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/917351541931"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/aalok.varshney"
              target="_blank"
              rel="noreferrer"
              className="hover:text-ink transition-colors"
            >
              Instagram
            </a>
          </div>
        </footer>
  )
}

export default Fotter
