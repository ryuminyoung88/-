
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-8 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
        <div className="flex items-center gap-6 group cursor-pointer">
          {/* DEEPSCALA Advanced Cybernetic Logo */}
          <div className="relative h-16 w-16">
            <div className="absolute inset-0 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-400/30 transition-all duration-700"></div>
            
            {/* Dual Outer Rotating Rings */}
            <div className="absolute inset-0 border border-dashed border-cyan-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
            <div className="absolute inset-2 border border-dotted border-indigo-500/30 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            {/* Deep-Scala Hexagonal Core with Custom SVG Symbol */}
            <div className="absolute inset-1 bg-black border border-cyan-500/40 [clip-path:polygon(50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex items-center justify-center overflow-hidden group-hover:border-white/60 transition-all duration-500 shadow-[inset_0_0_20px_rgba(0,242,255,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-indigo-900/20"></div>
              
              {/* Symbolic "D+S" Vector Logo */}
              <svg viewBox="0 0 100 100" className="w-8 h-8 relative z-10 fill-none stroke-cyan-400 group-hover:stroke-white transition-colors duration-500" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
                {/* "D" Shape */}
                <path d="M30 25 V75 C30 75 70 75 70 50 C70 25 30 25 30 25" className="opacity-80" />
                {/* "S" Path Overlay */}
                <path d="M40 40 L60 40 L40 60 L60 60" className="stroke-indigo-400" strokeWidth="4" />
                {/* Central Data Node */}
                <circle cx="50" cy="50" r="2" fill="white" className="animate-pulse" />
              </svg>
              
              {/* Vertical Scanning Beam */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#00f2ff] animate-[logoScan_2s_ease-in-out_infinite]"></div>
            </div>
            
            {/* Dynamic Status Indicator */}
            <div className="absolute top-0 right-0 w-3 h-3 flex items-center justify-center">
              <div className="w-full h-full bg-white rounded-full animate-ping opacity-20"></div>
              <div className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_8px_#00f2ff]"></div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative overflow-hidden group">
              <span className="font-black tracking-[0.25em] text-3xl uppercase italic leading-none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.4)] select-none block transition-transform group-hover:scale-[1.02]">
                DEEPSCALA
              </span>
              {/* Text Hover Flow Effect */}
              <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-cyan-400 to-transparent group-hover:w-full transition-all duration-700"></div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="w-8 h-[1px] bg-cyan-500/30"></div>
              <span className="font-mono text-[9px] text-cyan-500/60 tracking-[0.4em] uppercase font-black italic">Neural_Architect</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4 md:gap-10 items-center">
          <div className="hidden lg:flex flex-col items-end">
            <span className="font-mono text-[8px] text-gray-700 tracking-[0.3em] uppercase font-bold">Node_Status: 200_OK</span>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
              <span className="font-mono text-[10px] text-white/80 tracking-[0.15em] uppercase font-black italic">Network_Scaling_Active</span>
            </div>
          </div>
          
          <button className="text-[10px] font-mono font-black uppercase tracking-[0.2em] text-cyan-400 bg-white/[0.03] border border-cyan-400/20 py-3.5 px-9 rounded-sm hover:border-cyan-400 hover:text-black transition-all group overflow-hidden relative">
            <div className="absolute inset-0 bg-cyan-400 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 -z-10"></div>
            CONNECT_CORE
          </button>
        </div>
      </div>
      <style>{`
        @keyframes logoScan {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
