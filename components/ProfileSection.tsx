
import React from 'react';

// Profile section highlighting the core identity of DeepScala
const ProfileSection: React.FC = () => {
  return (
    <section className="py-40 px-6 bg-[#010102] relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Background Spline Visual - Enhanced Brightness & Cropped to hide watermark */}
      <div className="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden opacity-50">
        <div className="absolute inset-0" style={{ transform: 'scale(1.15)', transformOrigin: 'center' }}>
           <iframe 
            src='https://my.spline.design/particleaibrain-hHT9sX2f8cDS7ajYDrKfDSzq/' 
            frameBorder='0' 
            width='100%' 
            height='100%'
            style={{ filter: 'brightness(1.2) contrast(1.1)' }}
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#010102]/60 to-[#010102]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-cyan-500 shadow-[0_0_10px_#00f2ff]"></div>
              <span className="font-mono text-[10px] text-cyan-500 font-bold tracking-[0.5em] uppercase">Neural_Architect // Identity_01</span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
              Scale <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_15px_rgba(0,242,255,0.4)]">Thinking</span>
            </h2>
            
            <div className="max-w-xl border-l-4 border-cyan-500/30 pl-8 space-y-6">
              <p className="text-gray-400 text-xl font-light leading-relaxed tracking-tight">
                DEEPSCALA는 단순한 개발사가 아닙니다. <br/>
                우리는 인공지능을 통해 비즈니스의 한계를 재정의하고, 
                가장 효율적인 경로로 성장을 설계하는 <span className="text-white font-bold">'브레인 아키텍트'</span>입니다.
              </p>
              <p className="text-gray-500 text-lg font-light italic">
                The future belongs to those who build with silicon logic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Core_Engine</span>
                <span className="font-mono text-xs text-cyan-400 font-bold">GEMINI_LATEST</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Network_Reach</span>
                <span className="font-mono text-xs text-indigo-400 font-bold">GLOBAL_ANYCAST</span>
              </div>
            </div>
          </div>
          
          {/* Visual HUD Decoration Removed to emphasize background spline art */}
          <div className="hidden lg:block h-full"></div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
