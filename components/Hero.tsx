
import React from 'react';
import { SPLINE_URL } from '../constants';

const Hero: React.FC = () => {
  const chapters = [
    { id: '0x01', label: 'NEURAL_CORE', section: 'profile' },
    { id: '0x02', label: 'TACTICAL_PERF', section: 'portfolio' },
    { id: '0x03', label: 'DIST_MATRIX', section: 'ecommerce' },
    { id: '0x04', label: 'LIQUID_ARCH', section: 'shopify' },
    { id: '0x05', label: 'INTEL_ECO', section: 'ai-ecommerce' },
    { id: '0x06', label: 'CAPITAL_GOV', section: 'fintech' },
    { id: '0x07', label: 'AUTO_GROWTH', section: 'automation' }
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#010102]">
      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-40"></div>
      
      {/* Spline Background - Scaled to hide watermark */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        <div className="absolute inset-0" style={{ transform: 'scale(1.1)', transformOrigin: 'center' }}>
          <iframe 
            src={SPLINE_URL} 
            frameBorder="0" 
            width="100%" 
            height="100%" 
            style={{ filter: 'brightness(0.7) contrast(1.2)' }}
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010102_85%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010102] via-transparent to-[#010102]"></div>
      </div>

      {/* Left UI Decoration */}
      <div className="absolute top-1/4 left-10 z-20 hidden lg:flex flex-col gap-2 opacity-40 font-mono text-[9px] text-[#00f2ff]">
        <div className="flex gap-4"><span>SYSTEM_SYNC...</span><span className="animate-pulse">[ONLINE]</span></div>
        <div className="w-32 h-[1px] bg-white/10"></div>
        <div className="flex gap-4"><span>CORE_TEMP...</span><span className="text-white">32°C</span></div>
      </div>

      {/* Right Side Tactical Navigation Rail (Replaced text stream) */}
      <div className="absolute top-0 right-4 md:right-12 h-full z-30 flex flex-col items-center justify-center pointer-events-none antialiased">
        
        {/* Top Header Label */}
        <div className="mb-12 flex flex-col items-center">
          <div className="w-[1px] h-20 bg-gradient-to-t from-cyan-400 to-transparent"></div>
          <span className="font-mono text-[8px] text-cyan-400 font-black uppercase tracking-[0.5em] rotate-90 mt-10 whitespace-nowrap opacity-50">
            Tactical_Nav_Interface
          </span>
        </div>

        {/* Navigation Rail Container */}
        <div className="relative flex flex-col items-center gap-10 py-10">
          
          {/* Vertical Data Line */}
          <div className="absolute inset-y-0 w-[1px] bg-white/5 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-[railScan_4s_linear_infinite]"></div>
          </div>

          {/* Chapter Nodes */}
          {chapters.map((ch, idx) => (
            <div key={idx} className="relative group/node flex items-center justify-center pointer-events-auto cursor-pointer">
              
              {/* Node Hex Box */}
              <div className="absolute right-8 flex items-center gap-3 opacity-0 group-hover/node:opacity-100 transition-all duration-500 translate-x-4 group-hover/node:translate-x-0">
                <span className="font-mono text-[10px] text-white/40">{ch.id}</span>
                <span className="font-mono text-[10px] text-cyan-400 font-black tracking-widest whitespace-nowrap bg-black/80 px-2 py-1 border border-cyan-500/20 shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                  {ch.label}
                </span>
              </div>

              {/* Central Geometric Node */}
              <div className="relative w-4 h-4 flex items-center justify-center">
                 {/* Rotating Outer Ring */}
                 <div className="absolute inset-0 border border-cyan-500/20 rounded-sm rotate-45 group-hover/node:rotate-90 group-hover/node:border-cyan-400 transition-all duration-500"></div>
                 {/* Inner Core Dot */}
                 <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_8px_#00f2ff] group-hover/node:scale-150 transition-transform"></div>
                 
                 {/* Active Pulse (Only for specific nodes or hover) */}
                 <div className="absolute inset-0 bg-cyan-400/20 rounded-full animate-ping opacity-0 group-hover/node:opacity-100"></div>
              </div>
            </div>
          ))}

        </div>

        {/* Bottom Footer Label */}
        <div className="mt-12 flex flex-col items-center">
          <span className="font-mono text-[8px] text-indigo-400 font-black uppercase tracking-[0.5em] -rotate-90 mb-10 whitespace-nowrap opacity-50">
            Ecosystem_Status_v9.2
          </span>
          <div className="w-[1px] h-20 bg-gradient-to-b from-indigo-500/50 to-transparent"></div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.6em] text-cyan-400 uppercase font-black animate-pulse drop-shadow-[0_0_8px_#00f2ff]">Scale to Initiate</span>
        <div className="w-[1.5px] h-16 bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></div>
      </div>

      <style>{`
        @keyframes railScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(500%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
