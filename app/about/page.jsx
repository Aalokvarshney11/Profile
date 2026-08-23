'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Fotter from '@/components/Fotter';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden font-sans selection:bg-blue-100 selection:text-ink">
      {/* Background Architectural Grid Lines (matching explore page & design system) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(180, 205, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 205, 235, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Ambient Decorative Geometry Glow / Circle */}
      <div
        className="fixed top-[-15vw] left-[20vw] w-[55vw] h-[55vw] rounded-full border border-blue-200/50 pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="fixed bottom-[-10vw] right-[-10vw] w-[45vw] h-[45vw] rounded-full bg-blue-100/30 blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Page Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-8 pb-20 flex flex-col min-h-screen justify-between">
        
        {/* Navigation Bar */}
        <Navbar />

        {/* HERO SECTION */}
        <main className="pt-24 md:pt-32 pb-16">
          
          {/* Top Hero Grid: Left Content + Right Tech HUD Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-24">
            
            {/* Left Column: Heading, Subtitle & Action Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              {/* System Status Pill Badge */}
              <div className="inline-flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-ink-muted uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="px-3 py-1 rounded-full bg-white/80 border border-ink/10 shadow-sm">
                  SYSTEM STATUS: ONLINE
                </span>
              </div>

              {/* Main Two-Line Headline */}
              <h1 className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-[-0.04em] leading-[0.96] text-ink mb-6">
                Architecting
                <br />
                <span className="text-blue-600 font-semibold">Digital Realities.</span>
              </h1>

              {/* Editorial Introduction */}
              <p className="text-ink-muted text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8">
                I am <span className="font-medium text-ink">Aalok</span>, a passionate full-stack developer focused on building modern, scalable, and visually engaging digital experiences. I bridge the gap between high-performance backend architectures and immersive, intuitive frontend interfaces.
              </p>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-blue-600 text-white font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase font-medium hover:bg-blue-700 shadow-[0_4px_16px_rgba(37,99,235,0.25)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>GET IN TOUCH</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 5v14M19 12l-7 7-7-7"/>
                  </svg>
                </Link>

                <a
                  href="https://github.com/Aalokvarshney11"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-white/90 text-ink font-mono text-xs sm:text-[13px] tracking-[0.14em] uppercase font-medium border border-ink/15 hover:border-ink/30 hover:bg-white shadow-sm hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>GITHUB PROFILE</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column: Architectural HUD Visual Display Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl bg-white/90 backdrop-blur-md border border-ink/10 p-6 sm:p-7 shadow-[0_8px_32px_rgba(180,205,235,0.35)] overflow-hidden group hover:border-blue-500/40 transition-all duration-300">
                <img src="/images/aalok.png" alt="aalok varshney"
                className='h-auto w-auto' />
  
              </div>
            </div>

          </div>

          {/* SECTION 2: EXPERIENCE & SKILLS (Matching Reference Image) */}
          <section className="pt-12 border-t border-ink/10">
            
            {/* Section Tag & Top Heading with Action */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
              <div>
                <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.2em] text-ink-muted uppercase mb-3">
                  <span>[SEC-01] // RESUME_DATA</span>
                </div>
                <h2 className="font-sans font-semibold text-3xl sm:text-5xl tracking-[-0.03em] text-ink leading-tight">
                  Experience &
                  <br />
                  <span className="text-blue-600">Skills.</span>
                </h2>
              </div>

              {/* Action Button */}
              {/* <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/90 text-ink font-mono text-xs tracking-wider uppercase border border-ink/15 hover:border-blue-500/50 hover:bg-white shadow-sm transition-all duration-200"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                  </svg>
                  <span>CONNECT / RESUME</span>
                </Link>
              </div> */}
            </div>

            {/* Split Grid: Left Experience Timeline + Right Skills Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* LEFT COLUMN: Experience & Focus Areas Timeline */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Timeline Card 1: Full-Stack Engineering */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/40 pb-2 group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-paper border-2 border-blue-600 group-hover:scale-110 transition-transform" />
                  
                  <div className="bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(180,205,235,0.3)] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-ink">
                          Full-Stack Web Development
                        </h3>
                        <p className="font-mono text-xs text-blue-600 tracking-wider uppercase mt-0.5">
                          Frontend & Backend Architecture
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-3 py-1 rounded bg-slate-100 text-ink-muted border border-ink/10">
                        2023 — PRESENT
                      </span>
                    </div>

                    <p className="text-ink-muted text-sm sm:text-[15px] leading-relaxed font-normal mb-4">
                      Building end-to-end web applications with clean architecture and reactive UI. Developing dynamic frontends with React and Next.js alongside reliable backend APIs, Auth.js authentication, and secure JWT-based authorization workflows.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-ink/5">
                      {['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'Express.js', 'REST APIs', 'Auth.js', 'JWT'].map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-blue-50 text-blue-700 border border-blue-200/60 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Card 2: UI/UX & Creative Product Design */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-blue-600/40 pb-2 group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-paper border-2 border-blue-600 group-hover:scale-110 transition-transform" />

                  <div className="bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(180,205,235,0.3)] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-ink">
                          UI/UX & Creative Product Design
                        </h3>
                        <p className="font-mono text-xs text-blue-600 tracking-wider uppercase mt-0.5">
                          Interface & Systems Craft
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-3 py-1 rounded bg-slate-100 text-ink-muted border border-ink/10">
                        DESIGN CRAFT
                      </span>
                    </div>

                    <p className="text-ink-muted text-sm sm:text-[15px] leading-relaxed font-normal mb-4">
                      Focusing on user-centered design, interactive prototypes, and design systems. Translating early concepts into polished visual layouts and fluid micro-interactions with Figma, Google Stitch, and Google Flow.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-ink/5">
                      {['Figma', 'Google Stitch', 'Google Flow', 'Design Systems', 'Prototyping'].map((tool) => (
                        <span
                          key={tool}
                          className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-2.5 py-1 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60 font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline Card 3: Vision & Continuous Exploration */}
                <div className="relative pl-6 sm:pl-8 border-l-2 border-transparent pb-2 group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-paper border-2 border-emerald-500 group-hover:scale-110 transition-transform" />

                  <div className="bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(180,205,235,0.3)] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-ink">
                          Product Vision & AI Exploration
                        </h3>
                        <p className="font-mono text-xs text-emerald-600 tracking-wider uppercase mt-0.5">
                          Concept to Deployment
                        </p>
                      </div>
                      <span className="font-mono text-[11px] px-3 py-1 rounded bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                        VISION
                      </span>
                    </div>

                    <p className="text-ink-muted text-sm sm:text-[15px] leading-relaxed font-normal mb-3">
                      My vision is to <span className="font-medium text-ink">turn ideas into meaningful products — from concept and design to development and deployment.</span> Constantly exploring new technologies and AI-powered tools to push the boundaries of developer productivity and product fidelity.
                    </p>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Stack Matrix & Tooling Sidebar */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Sidebar Card 1: Core Stack */}
                <div className="bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
                    <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                      // CORE_STACK
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-600" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'React',
                      'Next.js',
                      'JavaScript',
                      'Tailwind CSS',
                      'Express.js',
                      'REST APIs',
                      'Auth.js',
                      'JWT',
                      'Node.js',
                    ].map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-ink border border-ink/10 hover:border-blue-500/40 hover:bg-blue-50/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sidebar Card 2: UI/UX & Creative Tools */}
                <div className="bg-white/90 backdrop-blur-md border border-ink/10 rounded-xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
                  <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
                    <span className="font-mono text-xs tracking-widest text-ink-muted uppercase">
                      // CREATIVE_TOOLING
                    </span>
                    <span className="w-2 h-2 rounded-full bg-indigo-600" />
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {[
                      'Figma',
                      'Google Stitch',
                      'Google Flow',
                      'UI/UX Design',
                      'Visual Systems',
                      'Responsive Wireframes',
                    ].map((item) => (
                      <span
                        key={item}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-50 text-ink border border-ink/10 hover:border-indigo-500/40 hover:bg-indigo-50/50 transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sidebar Card 3: Philosophy / Vision Callout */}
                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-xl p-6 shadow-[0_8px_24px_rgba(37,99,235,0.25)]">
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-blue-200 mb-2">
                    [ PRINCIPLE // CORE_FOCUS ]
                  </div>
                  <h4 className="font-sans font-semibold text-lg leading-snug mb-2 text-white">
                    Turning Ideas into Meaningful Products.
                  </h4>
                  <p className="font-sans text-xs text-blue-100 leading-relaxed">
                    Committed to writing clean, maintainable code with modern aesthetics and relentless attention to detail.
                  </p>
                </div>

              </div>

            </div>

          </section>

        </main>

        {/* EDITORIAL FOOTER */}
        <Fotter/>

      </div>
    </div>
  );
}
