
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <div className="flex items-center gap-5">
          {/* Advanced Cybernetic Logo */}
          <div className="relative group cursor-pointer">
             {/* Chromatic Aberration Shadows */}
             <div className="absolute inset-0 bg-magenta-500/20 rounded-lg blur-md -translate-x-1 translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             <div className="absolute inset-0 bg-cyan-500/20 rounded-lg blur-md translate-x-1 -translate-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

             <div className="relative w-14 h-14 flex items-center justify-center">
                {/* Rotating Outer Ring */}
                <svg className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite] opacity-40" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="48" fill="none" stroke="#00f2ff" strokeWidth="1" strokeDasharray="4 8" />
                </svg>
                
                {/* Hexagonal Frame */}
                <div className="absolute inset-0 bg-black/80 border border-cyan-500/30 clip-hex shadow-[inset_0_0_15px_rgba(0,242,255,0.2)]"></div>
                
                {/* Internal Pulsing Core */}
                <div className="relative z-10 w-8 h-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-cyan-500 rounded-sm rotate-45 animate-pulse opacity-20"></div>
                  <div className="absolute inset-1.5 border border-white/40 rotate-45 group-hover:scale-110 transition-transform"></div>
                  <i className="fas fa-bolt text-cyan-400 text-sm drop-shadow-[0_0_8px_#00f2ff] group-hover:animate-bounce"></i>
                </div>

                {/* Status Indicator */}
                <div className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center">
                   <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-20"></div>
                   <div className="w-2 h-2 bg-red-500 rounded-full border border-black"></div>
                </div>

                {/* Data Decals */}
                <div className="absolute -bottom-1 -left-1 flex gap-0.5">
                   <div className="w-1 h-3 bg-cyan-500/50"></div>
                   <div className="w-1 h-2 bg-indigo-500/50"></div>
                </div>
             </div>
          </div>

          {/* Brand Name Text Section */}
          <div className="flex flex-col">
            <span className="font-black tracking-[0.15em] text-2xl uppercase italic leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_12px_rgba(0,242,255,0.6)] hover:tracking-[0.18em] transition-all duration-500 cursor-default">
              RYU KEUNYOUNG
            </span>
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex gap-1">
                <div className="w-2 h-0.5 bg-cyan-500"></div>
                <div className="w-4 h-0.5 bg-cyan-500/30"></div>
              </div>
              <span className="font-mono text-[9px] text-cyan-500 tracking-[0.25em] uppercase font-bold">AI Solutions Architect</span>
              <span className="w-1 h-1 bg-cyan-500 rounded-full animate-ping"></span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="hidden lg:flex flex-col items-end">
            <span className="font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase font-bold">Network_Provider</span>
            <div className="flex items-center gap-2">
              <svg width="10" height="10" viewBox="0 0 512 512" fill="white"><path d="M256 48l240 416H16z"/></svg>
              <span className="font-mono text-[10px] text-white tracking-[0.1em] uppercase font-bold">Vercel_Edge</span>
            </div>
          </div>
          
          <div className="w-px h-6 bg-white/10 hidden md:block"></div>
          
          <div className="flex flex-col items-end">
             <span className="font-mono text-[8px] text-gray-500 tracking-[0.2em] uppercase font-bold">DNS_Resolution</span>
             <span className="font-mono text-[10px] text-cyan-400 tracking-[0.1em] uppercase animate-pulse">GLOBAL_ANYCAST // ACTIVE</span>
          </div>

          <button className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 bg-cyan-400/5 border border-cyan-400/20 py-2.5 px-6 rounded hover:bg-cyan-400 hover:text-black transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-10"></div>
            Secure_Access
          </button>
        </div>
      </div>
      
      <style>{`
        .clip-hex {
          clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
