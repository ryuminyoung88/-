
import React from 'react';

const ProfileSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-[#010102] relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
      
      {/* Background Decorative Data Particles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        {[...Array(10)].map((_, i) => (
          <div 
            key={i}
            className="absolute bg-cyan-500 w-[1px] h-20 animate-[pulse_3s_infinite]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Left/Center: Complex Cybernetic Brain Visual (Glow Intensified) */}
          <div className="relative flex justify-center items-center py-12">
            <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
              
              {/* Intensified Core Glow & Pulsing Aura */}
              <div className="absolute inset-0 bg-cyan-500/25 rounded-full blur-[100px] animate-pulse"></div>
              <div className="absolute inset-10 bg-indigo-500/15 rounded-full blur-[80px] animate-[pulse_4s_infinite]"></div>
              
              {/* Outer Rotating Data Rings */}
              <div className="absolute inset-0 border-[1px] border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_15px_#00f2ff]"></div>
              </div>
              <div className="absolute inset-8 border-[1px] border-indigo-500/30 rounded-full animate-[spin_12s_linear_infinite_reverse]">
                 <div className="absolute bottom-0 left-1/2 w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_15px_#6366f1]"></div>
              </div>

              {/* The Detailed Neural Core */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center scale-100 md:scale-110">
                  {/* Enhanced Drop Shadow for the whole SVG */}
                  <svg viewBox="0 0 400 400" className="w-64 h-64 md:w-full md:h-full drop-shadow-[0_0_50px_rgba(0,242,255,0.6)]">
                    <defs>
                      <radialGradient id="brainShadow" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#0a2e1d" />
                        <stop offset="100%" stopColor="#020202" />
                      </radialGradient>
                      
                      {/* Brighter High-Contrast Highlight Gradient */}
                      <linearGradient id="brainHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#3de8a3" />
                        <stop offset="30%" stopColor="#1a4731" />
                        <stop offset="100%" stopColor="#040d08" />
                      </linearGradient>

                      {/* Intensified Volume Filter */}
                      <filter id="volumeFilter" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
                        <feSpecularLighting in="blur" surfaceScale="7" specularConstant="1.2" specularExponent="25" lightingColor="#00f2ff" result="specOut">
                          <fePointLight x="-50" y="-100" z="250" />
                        </feSpecularLighting>
                        <feComposite in="specOut" in2="SourceAlpha" operator="in" result="specOut" />
                        <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" />
                      </filter>

                      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                      </filter>

                      <filter id="grain" x="0" y="0">
                        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0, 0 0 0 0 0, 0 0 0 0 0, 0 0 0 -1.5 1.2" />
                        <feComposite operator="in" in2="SourceGraphic" />
                      </filter>
                    </defs>

                    <g transform="translate(100, 70) scale(0.5)">
                      {/* Right Hemisphere */}
                      <path d="M205,40 C285,40 365,100 365,200 C365,300 325,340 285,360 C265,370 245,400 225,420 C220,425 210,425 205,420 L205,40 Z" fill="url(#brainHighlight)" filter="url(#volumeFilter)" />
                      {/* Left Hemisphere */}
                      <path d="M195,40 C115,40 35,100 35,200 C35,300 75,340 115,360 C135,370 155,400 175,420 C180,425 190,425 195,420 L195,40 Z" fill="url(#brainHighlight)" filter="url(#volumeFilter)" opacity="0.9" />
                      
                      {/* Surface Texture */}
                      <path d="M200,40 C280,40 360,100 360,200 C360,280 320,340 280,360 C260,370 240,400 220,420 C210,430 190,430 180,420 C160,400 140,370 120,360 C80,340 40,280 40,200 C40,100 120,40 200,40 Z" fill="white" filter="url(#grain)" opacity="0.1" />

                      {/* Highly Vibrant Neural Circuitry */}
                      <g fill="none" strokeWidth="5" strokeLinecap="round" filter="url(#glow)">
                         <path d="M200,450 Q200,380 200,40" stroke="#00f2ff" strokeWidth="2" opacity="0.5" />
                         
                         {/* High Intensity Glow Lines */}
                         <path d="M220,430 Q320,320 340,200 Q350,150 280,100" stroke="#00f2ff" opacity="0.9" className="animate-pulse" />
                         <path d="M210,410 Q280,350 300,250 Q310,200 260,150" stroke="#6366f1" opacity="0.8" />
                         <path d="M180,430 Q80,320 60,200 Q50,150 120,100" stroke="#00f2ff" opacity="0.9" />
                         <path d="M190,410 Q120,350 100,250 Q90,200 140,150" stroke="#6366f1" opacity="0.8" />
                         
                         <path d="M100,200 C150,180 250,180 300,200" stroke="#00f2ff" strokeWidth="3" opacity="0.6" />
                         <path d="M130,120 C170,110 230,110 270,120" stroke="#6366f1" strokeWidth="3" opacity="0.6" />
                      </g>

                      {/* Bright Glowing Bio-Nodes */}
                      <g className="animate-pulse" filter="url(#glow)">
                         <circle cx="200" cy="180" r="12" fill="#00f2ff" opacity="0.9" filter="url(#volumeFilter)" />
                         <circle cx="200" cy="180" r="5" fill="white" />
                         
                         <circle cx="100" cy="200" r="8" fill="#00f2ff" shadow="0 0 10px #00f2ff" />
                         <circle cx="300" cy="200" r="8" fill="#6366f1" shadow="0 0 10px #6366f1" />
                         
                         <circle cx="150" cy="300" r="6" fill="#00f2ff" opacity="0.7" />
                         <circle cx="250" cy="300" r="6" fill="#6366f1" opacity="0.7" />
                         
                         <circle cx="180" cy="80" r="5" fill="#00f2ff" />
                         <circle cx="220" cy="80" r="5" fill="#6366f1" />
                      </g>

                      {/* Internal Core Stem Glow */}
                      <rect x="195" y="420" width="10" height="50" fill="#00f2ff" opacity="0.4" filter="url(#glow)" />
                    </g>
                  </svg>

                  {/* Anatomical Call-outs (Updated with new text labels) */}
                  <div className="absolute -top-10 -left-12 flex flex-col items-end">
                    <div className="bg-[#050508]/80 border-r-2 border-cyan-500 p-2 glass-card backdrop-blur-md">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Strategic Layer</span>
                      <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">Global Marketing</span>
                    </div>
                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-cyan-500 rotate-[30deg] origin-right"></div>
                  </div>

                  <div className="absolute -top-12 -right-10 flex flex-col items-start z-20">
                    <div className="bg-[#050508]/90 border-l-2 border-indigo-500 p-2 glass-card backdrop-blur-md shadow-xl">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Cognitive Layer</span>
                      <span className="block text-xs font-bold text-indigo-400 uppercase tracking-widest">Artificial Intelligence (AI)</span>
                    </div>
                    <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-indigo-500 -rotate-[30deg] origin-left"></div>
                  </div>

                  <div className="absolute top-1/2 -left-16 flex flex-col items-end -translate-y-1/2">
                    <div className="bg-[#050508]/80 border-r-2 border-cyan-500 p-2 glass-card backdrop-blur-md">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Operational Layer</span>
                      <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">Global E-commerce</span>
                    </div>
                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"></div>
                  </div>

                  <div className="absolute top-1/2 -right-12 flex flex-col items-start -translate-y-1/2 z-20">
                    <div className="bg-[#050508]/90 border-l-2 border-indigo-500 p-2 glass-card backdrop-blur-md shadow-xl">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Financial Layer</span>
                      <span className="block text-xs font-bold text-indigo-400 uppercase tracking-widest">Fintech Payment Infrastructure</span>
                    </div>
                    <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-indigo-500"></div>
                  </div>

                  <div className="absolute -bottom-10 -left-8 flex flex-col items-end">
                    <div className="bg-[#050508]/80 border-r-2 border-cyan-400 p-2 glass-card backdrop-blur-md">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Interface Layer</span>
                      <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">Shopify Web Design</span>
                    </div>
                    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-cyan-400 -rotate-[45deg] origin-right"></div>
                  </div>

                  <div className="absolute -bottom-12 -right-10 flex flex-col items-start z-20">
                    <div className="bg-[#050508]/90 border-l-2 border-indigo-400 p-2 glass-card backdrop-blur-md shadow-xl">
                      <span className="block text-[8px] font-mono text-gray-500 uppercase tracking-tighter">System Layer</span>
                      <span className="block text-xs font-bold text-indigo-400 uppercase tracking-widest">Web Development</span>
                    </div>
                    <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-indigo-400 rotate-[45deg] origin-left"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Career Details */}
          <div className="space-y-10 relative">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="h-px w-12 bg-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
                <span className="font-mono text-cyan-500 text-[10px] font-bold tracking-[0.5em] uppercase animate-pulse">NEURAL IDENTITY: 01-RYU</span>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="relative inline-block group">
                  <div className="absolute -inset-1 bg-cyan-500/10 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <h2 className="relative font-mono text-[9px] md:text-[13px] font-black tracking-[0.2em] uppercase flex items-center gap-2 overflow-hidden">
                    <span className="text-cyan-500 animate-[bounce_2s_infinite]">[</span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-white drop-shadow-[0_0_12px_rgba(0,242,255,0.7)]">
                      AI BUSINESS ARCHITECT, RYU KEUNYOUNG
                    </span>
                    <span className="text-cyan-500 animate-[bounce_2s_infinite_reverse]">]</span>
                  </h2>
                  <div className="h-[0.8px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent mt-1 shadow-[0_0_10px_#00f2ff]"></div>
                </div>

                <div className="flex flex-col gap-1 mt-1">
                  <div className="flex items-center gap-2">
                    <div className="w-0.5 h-2 bg-indigo-500 animate-pulse"></div>
                    <span className="font-mono text-[7.8px] md:text-[9.1px] text-cyan-400 font-bold tracking-[0.1em] uppercase italic bg-cyan-500/5 px-1.5 py-0.5 border-l border-cyan-500/30">
                      "MY TECHNOLOGY SETS YOU FREE."
                    </span>
                  </div>
                  <div className="flex items-center gap-2 ml-2">
                    <span className="font-mono text-[7.8px] text-white/30 tracking-[0.3em] uppercase">Status: Architect_Verified</span>
                    <span className="font-mono text-[9.1px] text-indigo-400/60 tracking-[0.1em] font-bold">// CONTACT: 010-8082-8802</span>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-xl leading-relaxed font-light italic border-l-2 border-cyan-500/30 pl-8 max-w-lg">
              "My cognitive structure is optimized for the conversion loop. 15 years of operational entropy have been synthesized into a precise global sales algorithm."
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group relative glass-card p-8 rounded-2xl neon-border-indigo transition-all hover:bg-cyan-500/5 overflow-hidden">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors">15Y+</div>
                <div className="font-mono text-[10px] text-cyan-500 uppercase tracking-[0.2em] mb-4">E-commerce Engineering</div>
                <p className="text-xs text-gray-500 leading-relaxed">Shopify ecosystem mastery. Architectural dominance in global retail systems and 15 years of uninterrupted online sales operations.</p>
              </div>

              <div className="group relative glass-card p-8 rounded-2xl neon-border-indigo transition-all hover:bg-indigo-500/5 overflow-hidden">
                <div className="text-4xl font-black text-white mb-2 group-hover:text-indigo-400 transition-colors">13Y+</div>
                <div className="font-mono text-[10px] text-indigo-500 uppercase tracking-[0.2em] mb-4">Neural Marketing</div>
                <p className="text-xs text-gray-500 leading-relaxed">Aggressive digital scaling. Implementing 13+ years of data-driven neural marketing to bypass traditional conversion barriers.</p>
              </div>

              <div className="md:col-span-2 group relative glass-card p-10 rounded-3xl neon-border-indigo bg-[#050508]/50 overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                   <div className="space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="flex -space-x-2">
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-[10px] font-bold">US</div>
                            <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-[10px] font-bold">CN</div>
                            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-500/50 flex items-center justify-center text-[10px] font-bold">KR</div>
                         </div>
                         <div className="font-mono text-[11px] text-cyan-400 font-bold uppercase tracking-widest">Tri-National Legal Mastery</div>
                      </div>
                      <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                        Founder and operator of legal entities in <span className="text-white font-bold">USA, China, and Korea</span>. Expert level comprehension of cross-border payment gateways and global financial infrastructure.
                      </p>
                   </div>
                   <div className="flex flex-col items-end gap-2 text-right">
                      <span className="text-[9px] font-mono text-indigo-400 tracking-widest uppercase opacity-60">Status: Fully Operational</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-6 h-1 bg-cyan-500 shadow-[0_0_5px_#00f2ff]"></div>
                        ))}
                      </div>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
