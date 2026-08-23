import React from 'react'

const visula = () => {
  return (
    <div>
                    {/* Visual Top Bar */}
                <div className="flex items-center justify-between border-b border-ink/10 pb-4 mb-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-600/80" />
                    <span className="font-mono text-[11px] tracking-wider text-ink-muted uppercase">
                      SYS_INTERFACE // ADITYA_CORE
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200/60">
                    v2.6_STABLE
                  </span>
                </div>

                {/* Interactive Schematic Diagram */}
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Visual Node 1: Frontend Layer */}
                  <div className="p-3.5 rounded-lg bg-slate-50/90 border border-ink/5 hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between text-ink font-sans font-semibold text-sm mb-1">
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        FRONTEND_LAYER
                      </span>
                      <span className="font-mono text-[10px] text-blue-600 uppercase">99.8% FIDELITY</span>
                    </div>
                    <p className="font-sans text-xs text-ink-muted">
                      React, Next.js, Tailwind CSS & Responsive Interfaces
                    </p>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center text-blue-500/60 py-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                  </div>

                  {/* Visual Node 2: Backend Architecture */}
                  <div className="p-3.5 rounded-lg bg-slate-50/90 border border-ink/5 hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between text-ink font-sans font-semibold text-sm mb-1">
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-600" />
                        BACKEND_CORE
                      </span>
                      <span className="font-mono text-[10px] text-cyan-600 uppercase">REST // JWT</span>
                    </div>
                    <p className="font-sans text-xs text-ink-muted">
                      Express.js, REST APIs, Auth.js & Scalable Server Logic
                    </p>
                  </div>

                  {/* Flow Connector Arrow */}
                  <div className="flex justify-center text-blue-500/60 py-0.5">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 5v14M19 12l-7 7-7-7"/>
                    </svg>
                  </div>

                  {/* Visual Node 3: Design & UI/UX */}
                  <div className="p-3.5 rounded-lg bg-slate-50/90 border border-ink/5 hover:border-blue-200 transition-colors">
                    <div className="flex items-center justify-between text-ink font-sans font-semibold text-sm mb-1">
                      <span className="flex items-center gap-2 font-mono text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                        CREATIVE_DESIGN
                      </span>
                      <span className="font-mono text-[10px] text-indigo-600 uppercase">VECTOR // PROTOTYPE</span>
                    </div>
                    <p className="font-sans text-xs text-ink-muted">
                      Figma, Google Stitch, Google Flow & Systems Design
                    </p>
                  </div>

                </div>

                {/* Box Footer Telemetry */}
                <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between font-mono text-[10px] text-ink-subtle">
                  <span>DISCIPLINE: FULL_STACK</span>
                  <span>STATUS: ACTIVE_CONTRIBUTOR</span>
                </div>





    </div>
  )
}

export default visula
