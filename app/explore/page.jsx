'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Fotter from '@/components/Fotter';

// Module data matching the reference architecture design
const MODULES = [
  {
    id: 'CORE_PROJECT_01',
    status: 'ONLINE',
    statusType: 'online',
    title: 'PassProps',
    description:
      'A full-stack Password Manager built with React, Node.js, Express, MongoDB, and Tailwind CSS.PassProps allows users to save, view, and delete website credentials through a simple and responsive interface ',
    tags: [ 'Node.js' , 'React', 'Tailwind' , 'Next.js' , 'Mongo DB' , 'Express.js'],
    category: 'WEB_APPS',
    colSpan: 'lg:col-span-7', // Wide card
    previewType: 'PassProps',
    link: 'https://github.com/Aalokvarshney11/PassProps',
    img_url:"/images/exploreimg/sample.png",
  },
  {
    id: 'WEB_APPS_01',
    status: 'PENDING',
    statusType: 'pending',
    title: 'Complaint-Box',
    description:
      'A smart, voice-enabled complaint management system built with Python and Streamlit. Clients can register complaints with voice assistance, and managers can track, manage, and resolve complaints through a dedicated dashboard.',
    tags: ['Python', 'Elevenlabs' , 'Streamlit'],
    category: 'WEB_APPS',
    colSpan: 'lg:col-span-5', // Compact card
    previewType: 'Complaint-BOx',
    link: 'https://github.com/Aalokvarshney11/Complaint-Box',
    img_url:"/images/exploreimg/image.png",
  },
  {
    id: 'EXP_PROJECT_01',
    status: 'ARCHIVE',
    statusType: 'archive',
    title: 'Jarvis.AI',
    description:
      'Jarvis AI is a Python-based personal voice assistant inspired by Iron Man Jarvis. It can listen to your commands, respond intelligently, play music, and perform various tasks on your computer using natural language processing and speech recognition.',
    tags: ['Pyhton', 'ElevenlLabs'],
    category: 'EXPERIMENTS',
    colSpan: 'lg:col-span-5', // Compact card
    previewType: 'Jarvis.AI',
    link: 'https://github.com/Aalokvarshney11/Jarvis.Ai',
    img_url:"/images/exploreimg/jarvis.jpg"
  },
  {
    id: 'EXP_PROJECT_02',
    status: 'COMPLETE',
    statusType: 'complete',
    title: 'Sudoko',
    description:
      'Sudoku puzzle generator and solver implemented in Python featuring backtracking, board validation, and randomized puzzle generation.',
    tags: ['Python', 'Algos'],
    category: 'SYSTEMS',
    colSpan: 'lg:col-span-7', // Wide card
    previewType: 'Sudoko',
    link: 'https://github.com/Aalokvarshney11/Sudoku',
    img_url:"/images/exploreimg/sudoku.png",
  },
  
];

// Status badge helper
function StatusBadge({ status, type }) {
  const getBadgeStyle = () => {
    switch (type) {
      case 'online':
        return 'text-emerald-700 bg-emerald-50/90 border-emerald-200/80';
      case 'beta':
        return 'text-amber-700 bg-amber-50/90 border-amber-200/80';
      case 'archived':
        return 'text-slate-600 bg-slate-100/90 border-slate-200/80';
      case 'active':
        return 'text-blue-700 bg-blue-50/90 border-blue-200/80';
      default:
        return 'text-blue-700 bg-blue-50/90 border-blue-200/80';
    }
  };

  return (
    <div className="flex items-center gap-2 font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-muted">
      <span>STATUS:</span>
      <span
        className={`font-semibold px-2 py-0.5 rounded-[4px] border ${getBadgeStyle()}`}
      >
        {status}
      </span>
    </div>
  );
}

// Visual HUD / Graphic Previews matching the high-tech sci-fi aesthetic
function ModulePreview({ type }) {
  if (type === 'neural_sync') {
    return (
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-[#0a1120] overflow-hidden flex items-center justify-center border-b border-ink/10 group-hover:border-blue-400/40 transition-colors">
        {/* Background Grid & Star Dust */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(56,189,248,0.25) 0%, transparent 70%),
              linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 24px 24px, 24px 24px',
          }}
        />

        {/* Tactical HUD Hologram Graphic */}
        <svg
          viewBox="0 0 540 240"
          className="w-full h-full p-4 relative z-10 select-none text-cyan-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Target Reticle & Coordinate Rings */}
          <circle cx="270" cy="120" r="85" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.4" />
          <circle cx="270" cy="120" r="55" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.6" />
          <circle cx="270" cy="120" r="22" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.9" />
          <circle cx="270" cy="120" r="4" fill="currentColor" />

          {/* Radar Crosshairs */}
          <line x1="60" y1="120" x2="480" y2="120" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" strokeOpacity="0.3" />
          <line x1="270" y1="20" x2="270" y2="220" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 6" strokeOpacity="0.3" />

          {/* Top Left Spatial Telemetry Widget */}
          <rect x="25" y="25" width="130" height="60" rx="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.5" fill="#040c1a" fillOpacity="0.8" />
          <path d="M35 60 L50 42 L68 54 L85 36 L105 48 L125 32 L145 44" stroke="#38bdf8" strokeWidth="1.5" fill="none" />
          <text x="35" y="75" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="0.1em">LATENCY // 1.2MS</text>

          {/* Connected Network Nodes on Right */}
          <g transform="translate(340, 40)">
            <rect x="0" y="0" width="165" height="120" rx="4" stroke="currentColor" strokeWidth="0.8" strokeOpacity="0.4" fill="#030813" fillOpacity="0.85" />
            <circle cx="40" cy="40" r="5" fill="#38bdf8" />
            <circle cx="95" cy="30" r="4" fill="#22d3ee" fillOpacity="0.7" />
            <circle cx="130" cy="75" r="6" fill="#0284c7" />
            <circle cx="70" cy="90" r="4" fill="#38bdf8" fillOpacity="0.8" />
            <line x1="40" y1="40" x2="95" y2="30" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
            <line x1="95" y1="30" x2="130" y2="75" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.5" />
            <line x1="40" y1="40" x2="70" y2="90" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.6" />
            <line x1="70" y1="90" x2="130" y2="75" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
            <text x="15" y="110" fill="#38bdf8" fontSize="7.5" fontFamily="monospace" letterSpacing="0.15em">CLUSTER_SYNC: 99.98%</text>
          </g>

          {/* Bottom Coordinates */}
          <text x="30" y="215" fill="#38bdf8" fontSize="8" fontFamily="monospace" letterSpacing="0.18em">
            [SYS_NAV_PROTOCOL_ONLINE]
          </text>
          <text x="390" y="215" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="0.18em">
            LOC: 48.21 // 11.90
          </text>
        </svg>

        {/* Corner Accents */}
        <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-cyan-400/80" />
        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-cyan-400/80" />
        <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-cyan-400/80" />
        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-cyan-400/80" />
      </div>
    );
  }

  if (type === 'tactile_surface') {
    return (
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-[#0a1120] overflow-hidden flex items-center justify-center border-b border-ink/10 group-hover:border-blue-400/40 transition-colors">
        {/* Optic Fiber & Haptic Waves Graphic */}
        <svg
          viewBox="0 0 400 240"
          className="w-full h-full p-4 relative z-10 select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Server / Module Rack Plate */}
          <rect x="30" y="40" width="130" height="150" rx="4" fill="#0f192c" stroke="#1e293b" strokeWidth="1.2" />
          {Array.from({ length: 6 }).map((_, i) => (
            <g key={i}>
              <rect x="42" y={55 + i * 22} width="22" height="12" rx="2" fill="#0a101b" stroke="#334155" strokeWidth="1" />
              <circle cx="78" cy={61 + i * 22} r="2.5" fill={i === 1 ? '#fbbf24' : '#38bdf8'} />
            </g>
          ))}

          {/* Glowing Optical Wave Lines streaming outwards */}
          <path d="M55 61 C 120 61, 160 30, 360 45" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" strokeOpacity="0.9" />
          <path d="M55 83 C 140 83, 190 70, 370 95" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.85" />
          <path d="M55 105 C 130 105, 200 130, 365 140" stroke="#0ea5e9" strokeWidth="2.2" strokeLinecap="round" strokeOpacity="0.8" />
          <path d="M55 127 C 150 127, 180 180, 360 190" stroke="#38bdf8" strokeWidth="1.8" strokeLinecap="round" strokeOpacity="0.75" />
          <path d="M55 149 C 120 149, 170 210, 350 215" stroke="#67e8f9" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.7" />

          {/* High Intensity Light Pulse Orbs */}
          <circle cx="210" cy="52" r="5" fill="#ffffff" filter="drop-shadow(0 0 6px #38bdf8)" />
          <circle cx="260" cy="85" r="4" fill="#ffffff" filter="drop-shadow(0 0 6px #22d3ee)" />
          <circle cx="240" cy="132" r="4.5" fill="#ffffff" filter="drop-shadow(0 0 6px #0ea5e9)" />

          <text x="35" y="210" fill="#94a3b8" fontSize="7.5" fontFamily="monospace" letterSpacing="0.14em">
            OPTIC_BUS // 800GBPS
          </text>
        </svg>

        <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-amber-400/70" />
      </div>
    );
  }

  if (type === 'ghost_shell') {
    return (
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-[#0a1120] overflow-hidden p-4 flex flex-col justify-between border-b border-ink/10 group-hover:border-blue-400/40 transition-colors font-mono text-[11px] select-none">
        {/* Terminal Header Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="text-[10px] text-slate-400 ml-2 tracking-wider">ghost-sh // bash</span>
          </div>
          <span className="text-[9px] text-slate-400 tracking-widest">TLS_AES_256</span>
        </div>

        {/* Terminal Shell Interactive Code Output */}
        <div className="space-y-1.5 text-slate-300 text-[10px] sm:text-[11px] leading-relaxed overflow-hidden">
          <p className="text-slate-400">
            <span className="text-cyan-400">root@arch-core</span>:<span className="text-slate-300">~</span>$ ghost-cli --probe --target=mesh.local
          </p>
          <p className="text-emerald-400">✓ Initializing kernel bypass driver (v4.18)</p>
          <p className="text-slate-300">
            [+] Discovered active node pool: <span className="text-cyan-300">12 nodes</span>
          </p>
          <p className="text-slate-400">
            [0x7FFE9B] memory_map: <span className="text-amber-300/90">0x00FF901A - 0x00FFFFFF</span>
          </p>
          <p className="text-cyan-400 flex items-center gap-1">
            <span>&gt; stream listening on port 9042</span>
            <span className="inline-block w-2 h-3.5 bg-cyan-400 animate-pulse" />
          </p>
        </div>

        {/* Terminal Status Bar */}
        <div className="flex justify-between items-center text-[9px] text-slate-400 border-t border-slate-800 pt-1.5">
          <span>ENCRYPTION: QUANTUM_SAFE</span>
          <span>HEAP: 24.8MB</span>
        </div>
      </div>
    );
  }

  if (type === 'distributed_nexus') {
    return (
      <div className="relative w-full h-48 sm:h-56 md:h-64 bg-[#0a1120] overflow-hidden flex items-center justify-center border-b border-ink/10 group-hover:border-blue-400/40 transition-colors">
        {/* Decentralized 3D Mesh Graphic */}
        <svg
          viewBox="0 0 540 240"
          className="w-full h-full p-3 relative z-10 select-none text-cyan-400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Mesh Web Links */}
          <g stroke="#38bdf8" strokeWidth="0.9" strokeOpacity="0.45">
            <line x1="80" y1="120" x2="160" y2="60" />
            <line x1="80" y1="120" x2="140" y2="180" />
            <line x1="160" y1="60" x2="270" y2="35" />
            <line x1="160" y1="60" x2="220" y2="115" />
            <line x1="140" y1="180" x2="220" y2="115" />
            <line x1="140" y1="180" x2="250" y2="190" />
            <line x1="220" y1="115" x2="270" y2="35" />
            <line x1="220" y1="115" x2="330" y2="105" />
            <line x1="220" y1="115" x2="250" y2="190" />
            <line x1="270" y1="35" x2="380" y2="55" />
            <line x1="270" y1="35" x2="330" y2="105" />
            <line x1="330" y1="105" x2="380" y2="55" />
            <line x1="330" y1="105" x2="410" y2="160" />
            <line x1="330" y1="105" x2="250" y2="190" />
            <line x1="250" y1="190" x2="360" y2="205" />
            <line x1="360" y1="205" x2="410" y2="160" />
            <line x1="380" y1="55" x2="470" y2="110" />
            <line x1="410" y1="160" x2="470" y2="110" />
            <line x1="470" y1="110" x2="510" y2="140" />
          </g>

          {/* Secondary Sub-Mesh Connection Rays */}
          <g stroke="#0284c7" strokeWidth="0.6" strokeDasharray="3 4" strokeOpacity="0.6">
            <line x1="160" y1="60" x2="250" y2="190" />
            <line x1="270" y1="35" x2="410" y2="160" />
            <line x1="80" y1="120" x2="220" y2="115" />
            <line x1="330" y1="105" x2="470" y2="110" />
          </g>

          {/* Glowing Mesh Node Orbs */}
          {[
            { cx: 80, cy: 120, r: 4.5, color: '#38bdf8' },
            { cx: 160, cy: 60, r: 5.5, color: '#22d3ee' },
            { cx: 140, cy: 180, r: 4, color: '#38bdf8' },
            { cx: 220, cy: 115, r: 7.5, color: '#ffffff' },
            { cx: 270, cy: 35, r: 5, color: '#38bdf8' },
            { cx: 250, cy: 190, r: 4.5, color: '#22d3ee' },
            { cx: 330, cy: 105, r: 6.5, color: '#67e8f9' },
            { cx: 380, cy: 55, r: 4.5, color: '#38bdf8' },
            { cx: 360, cy: 205, r: 4, color: '#0ea5e9' },
            { cx: 410, cy: 160, r: 5, color: '#22d3ee' },
            { cx: 470, cy: 110, r: 5.5, color: '#38bdf8' },
            { cx: 510, cy: 140, r: 3.5, color: '#0284c7' },
          ].map((node, i) => (
            <circle
              key={i}
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.color}
              filter="drop-shadow(0 0 5px rgba(56,189,248,0.8))"
            />
          ))}

          {/* Node Broadcast Aura */}
          <circle cx="220" cy="115" r="14" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="330" cy="105" r="12" stroke="#22d3ee" strokeWidth="0.8" strokeOpacity="0.3" />

          {/* Bottom Metric */}
          <text x="30" y="220" fill="#38bdf8" fontSize="8" fontFamily="monospace" letterSpacing="0.18em">
            TOPOLOGY // DECENTRALIZED_DAG
          </text>
          <text x="380" y="220" fill="#94a3b8" fontSize="8" fontFamily="monospace" letterSpacing="0.18em">
            TPS // 142,000 EV/S
          </text>
        </svg>

        <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-emerald-400/70" />
      </div>
    );
  }

  return null;
}

export default function ExplorePage() {
  const [selectedFilter, setSelectedFilter] = useState('ALL');

  // Filter modules based on selected tab
  const filteredModules =
    selectedFilter === 'ALL'
      ? MODULES
      : MODULES.filter((m) => m.category === selectedFilter);

  return (
    <div className="min-h-screen bg-paper text-ink relative overflow-x-hidden font-sans selection:bg-blue-100 selection:text-ink">
      {/* Background Architectural Grid Lines (matching glass-hero) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-70"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(180, 205, 235, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(180, 205, 235, 0.4) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Subtle Background Geometry Arc (matching hero-bg-circle) */}
      <div
        className="fixed top-[-20vw] left-[10vw] w-[60vw] h-[60vw] rounded-full border border-blue-200/50 pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 pt-8 pb-16 flex flex-col min-h-screen justify-between">
        {/* TOP NAVIGATION */}
        <Navbar />

        {/* HERO SECTION */}
        <main className="pt-24 md:pt-32 pb-12">
          {/* System Directory Tag */}
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs tracking-[0.22em] text-ink-muted mb-6 uppercase">
            <span className="w-2 h-2 bg-blue-600 inline-block" />
            <span>SYSTEM_DIRECTORY: /EXPLORE/CORE_PROJECTS</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-sans font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] tracking-[-0.04em] leading-[0.96] text-ink">
            Projects
            <br />
            <span className="text-blue-600 font-semibold">Experiments.</span>
          </h1>

          {/* Subtitle / Editorial Description */}
          <p className="text-ink-muted text-sm sm:text-base md:text-lg max-w-2xl font-normal leading-relaxed mt-6">
            A collection of projects, experiments, and digital systems built while exploring web development, creative interfaces, and modern technologies.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2.5 mt-8 mb-10 pt-4 border-t border-ink/10">
            {['ALL', 'WEB_APPS', 'EXPERIMENTS', 'TOOLS'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`font-mono text-[10px] sm:text-[11px] tracking-[0.16em] uppercase px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  selectedFilter === cat
                    ? 'bg-blue-600 text-white shadow-[0_2px_10px_rgba(37,99,235,0.28)] border border-blue-600 font-medium'
                    : 'bg-white/80 text-ink-muted border border-ink/10 hover:text-ink hover:bg-white hover:border-ink/20 shadow-sm'
                }`}
              >
                {cat === 'ALL' ? 'ALL_MODULES' : cat}
              </button>
            ))}
          </div>

          {/* BENTO CARDS GRID */}
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            {filteredModules.map((item) => (
              <article
                key={item.id}
                className={`col-span-12 ${
                  selectedFilter === 'ALL' ? item.colSpan : 'lg:col-span-6'
                } group bg-white/90 backdrop-blur-md border border-ink/10 hover:border-blue-500/50 rounded-xl overflow-hidden flex flex-col justify-between transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_32px_rgba(180,205,235,0.4)]`}
              >
                <div>
                  {/* Card Header Top Bar: [ID: ...] and STATUS */}
                  <div className="flex items-center justify-between px-5 py-3 bg-slate-50/80 border-b border-ink/5">
                    <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.16em] text-ink-muted">
                      [ID: {item.id}]
                    </span>
                    <StatusBadge status={item.status} type={item.statusType} />
                  </div>

                  {/* Card Preview Graphic */}
                  <ModulePreview type={item.previewType} />

                  {/* Card Body Info */}
                  <button onClick={() => window.open(`${item.link}`, "_blank")}>
                  <div className="p-5 sm:p-6">
                    <h2 className="font-sans font-semibold text-xl sm:text-2xl text-ink tracking-[-0.02em] group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h2>
                    <img className='w-auto h-auto' src={item.img_url} alt={item.title}/>
                    <p className="font-sans text-xs sm:text-[13px] md:text-sm text-ink-muted leading-relaxed mt-2.5 font-normal">
                      {item.description}
                    </p>
                  </div>
                  </button>
                </div>

                {/* Card Tags Footer */}
                <div className="px-5 sm:px-6 pb-6 pt-0 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200/70 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* FOOTER */}
        <Fotter/>
      </div>
    </div>
  );
}
