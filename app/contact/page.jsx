'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Fotter from '@/components/Fotter';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'transmitting' | 'transmitted'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.name || !formData.email || !formData.message) {
    return;
  }

  setStatus("transmitting");

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setStatus("transmitted");

      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setStatus("idle");
      }, 3500);
    } else {
      setStatus("idle");
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    console.error(error);
    setStatus("idle");
    alert("Something went wrong. Please try again.");
  }
};

  const activeNodes = [
    {
      id: 'GITHUB',
      title: 'GITHUB',
      subtitle: 'Repository_Access',
      link: 'https://github.com/Aalokvarshney11',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      ),
    },
    {
      id: 'LINKEDIN',
      title: 'LINKEDIN',
      subtitle: 'Professional_Network',
      link: 'https://www.linkedin.com/in/aalok-varshney-8949573b1/',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      id: 'WHATSAPP',
      title: 'WHATSAPP',
      subtitle: 'Direct_Comms',
      link: 'https://wa.me/917351541931',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <line x1="9" y1="10" x2="15" y2="10" />
          <line x1="9" y1="14" x2="13" y2="14" />
        </svg>
      ),
    },
    {
      id: 'INSTAGRAM',
      title: 'INSTAGRAM',
      subtitle: 'Visual_Log',
      link: 'https://www.instagram.com/aalok.varshney',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden font-sans selection:bg-blue-100 selection:text-ink">
      {/* Background Architectural Grid Lines (matching Explore & About) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(180, 205, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 205, 235, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Background Geometry Glow */}
      <div
        className="fixed top-[-15vw] left-[15vw] w-[55vw] h-[55vw] rounded-full border border-blue-200/50 pointer-events-none -z-10"
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

        {/* HERO / CONTACT CONTENT SECTION */}
        <main className="pt-24 md:pt-32 pb-12">
          
          {/* Header Tag */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.22em] text-ink-muted mb-6 uppercase">
            <span className="w-2 h-2 bg-blue-600 inline-block" />
            <span>SYSTEM_DIRECTORY: /COMMUNICATIONS/FEEDBACK</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] tracking-[-0.04em] leading-[0.96] text-ink mb-6">
            Let&apos;s Work
            <br />
            <span className="text-blue-600 font-semibold">Together.</span>
          </h1>

          {/* Subtitle / Intro */}
          <p className="text-ink-muted text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-12">
            Have an ambitious project in mind, an engineering challenge, or looking to collaborate? Dispatch a transmission below or connect directly through active network nodes.
          </p>

          {/* TWO-COLUMN GRID: Left Form Card + Right Active Nodes & Direct Comms */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* LEFT COLUMN: Transmission Form Card (Faithfully matching Reference Image) */}
            <div className="lg:col-span-7">
              <div className="relative bg-white/95 backdrop-blur-md border border-ink/10 rounded-2xl p-6 sm:p-8 md:p-10 shadow-[0_8px_32px_rgba(180,205,235,0.35)]">
                
                {/* Tactical Corner Accents (Matching Reference Graphic) */}
                <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-blue-600" />
                <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-blue-600" />
                <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-blue-600" />
                <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-blue-600" />

                {/* Form Header */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-8 font-mono text-xs text-ink-muted">
                  <span className="tracking-wider text-ink font-semibold">[FEEDBACK]</span>
                  <span className="tracking-widest uppercase">USER_RESPONSE</span>
                </div>

                {/* The Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-7">
                  
                  {/* Field 1: Name */}
                  <div className="space-y-2 font-mono">
                    <label htmlFor="name" className="block text-xs sm:text-[13px] tracking-wider text-ink font-medium">
                      &gt; NAME
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter FULL_NAME"
                      className="w-full font-mono text-xs sm:text-sm px-4 py-3 bg-slate-50/80 border-b-2 border-ink/15 focus:border-blue-600 rounded-t-lg text-ink placeholder:text-ink-muted/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 2: Email */}
                  <div className="space-y-2 font-mono">
                    <label htmlFor="email" className="block text-xs sm:text-[13px] tracking-wider text-ink font-medium">
                      &gt; EMAIL
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="address@gmail.com"
                      className="w-full font-mono text-xs sm:text-sm px-4 py-3 bg-slate-50/80 border-b-2 border-ink/15 focus:border-blue-600 rounded-t-lg text-ink placeholder:text-ink-muted/50 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Field 3: Message */}
                  <div className="space-y-2 font-mono">
                    <label htmlFor="message" className="block text-xs sm:text-[13px] tracking-wider text-ink font-medium">
                      &gt; MESSAGE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="message payload here and add contact details also"
                      className="w-full font-mono text-xs sm:text-sm px-4 py-3 bg-slate-50/80 border-b-2 border-ink/15 focus:border-blue-600 rounded-t-lg text-ink placeholder:text-ink-muted/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Action Button */}
                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={status === 'transmitting'}
                      className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#d9f2fa] text-ink hover:bg-blue-600 hover:text-white font-mono text-xs sm:text-[13px] tracking-[0.16em] uppercase font-semibold border border-blue-300 shadow-[0_2px_12px_rgba(56,189,248,0.2)] hover:shadow-[0_4px_20px_rgba(37,99,235,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                    >
                      <span>▷</span>
                      <span>
                        Submit 
                        {/* {status === 'idle' && 'TRANSMIT_SIGNAL'}
                        {status === 'transmitting' && 'ENCRYPTING_PAYLOAD...'}
                        {status === 'transmitted' && '✓ SIGNAL_TRANSMITTED'} */}
                      </span>
                    </button>

                    {status === 'transmitted' && (
                      <p className="font-mono text-xs text-emerald-600 mt-3 animate-fade-in">
                        Your message has been submited
                      </p>
                    )}
                  </div>

                </form>

              </div>
            </div>

            {/* RIGHT COLUMN: Active Nodes & Communication Channels */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Section Tag */}
              <div className="font-mono text-xs sm:text-[13px] tracking-[0.18em] text-ink font-medium uppercase mb-2">
                &gt; ACTIVE_NODES
              </div>

              {/* Stacked Node Cards (Matching Reference Layout) */}
              <div className="space-y-3.5">
                {activeNodes.map((node) => (
                  <a
                    key={node.id}
                    href={node.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block p-4 sm:p-5 rounded-xl bg-white/90 backdrop-blur-md border border-ink/10 hover:border-blue-500/50 shadow-sm hover:shadow-[0_6px_24px_rgba(180,205,235,0.35)] hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <div className="flex items-center gap-4">
                      {/* Icon Box */}
                      <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-ink-muted group-hover:text-blue-600 group-hover:bg-blue-50 border border-ink/5 transition-colors">
                        {node.icon}
                      </div>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-xs sm:text-[13px] font-semibold text-ink tracking-wider group-hover:text-blue-600 transition-colors uppercase">
                          {node.title}
                        </div>
                        <div className="font-mono text-[11px] text-ink-muted tracking-wide mt-0.5 truncate">
                          {node.subtitle}
                        </div>
                      </div>

                      {/* Arrow indicator */}
                      <span className="font-mono text-xs text-ink-subtle group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all">
                        ↗
                      </span>
                    </div>
                  </a>
                ))}
              </div>

              {/* Direct Dispatch / Status Info Card */}
              <div className="rounded-xl p-5 bg-slate-50/90 border border-ink/10 font-mono text-xs space-y-3">
                <div className="flex items-center justify-between border-b border-ink/10 pb-2.5">
                  <span className="text-ink-muted uppercase tracking-wider">AVAILABILITY:</span>
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    ONLINE // READY
                  </span>
                </div>
                <div className="flex items-center justify-between text-ink-muted">
                  <span className="uppercase tracking-wider">LOCATION:</span>
                  <span className="text-ink font-medium">REMOTE / GLOBAL</span>
                </div>
                <div className="flex items-center justify-between text-ink-muted">
                  <span className="uppercase tracking-wider">RESPONSE_TIME:</span>
                  <span className="text-ink font-medium">&lt; 24 HOURS</span>
                </div>
              </div>

            </div>

          </div>

        </main>

        {/* EDITORIAL FOOTER */}
        <Fotter/>

      </div>
    </div>
  );
}
