
import React from 'react';
import { SPLINE_URL } from '../constants';

const Hero: React.FC = () => {
  // 문장을 의미 단위(단락)로 분리
  const textBlocks = [
    "나는 인공지능으로",
    "귀사의 자동화를 설계하는",
    "브레인 아키텍트",
    "류근용을 찾고있습니다"
  ];

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#010102]">
      {/* Grid Pattern Layer */}
      <div className="absolute inset-0 z-0 cyber-grid opacity-40"></div>
      
      {/* Spline Background */}
      <div className="absolute inset-0 z-10">
        <iframe 
          src={SPLINE_URL} 
          frameBorder="0" 
          width="100%" 
          height="100%" 
          style={{ filter: 'brightness(0.8) contrast(1.1)' }}
        ></iframe>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#010102_80%)]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#010102]/60 via-transparent to-[#010102]"></div>
      </div>

      {/* Left UI Decoration */}
      <div className="absolute top-1/4 left-10 z-20 hidden lg:flex flex-col gap-2 opacity-40 font-mono text-[9px] text-[#00f2ff]">
        <div className="flex gap-4"><span>SYSTEM_SYNC...</span><span className="animate-pulse">[ONLINE]</span></div>
        <div className="w-32 h-[1px] bg-white/10"></div>
        <div className="flex gap-4"><span>CORE_TEMP...</span><span className="text-white">32°C</span></div>
      </div>

      {/* Right Side Vertical Paragraph Stream (Updated to Ascend) */}
      <div className="absolute top-0 right-8 md:right-16 h-full z-20 flex flex-col items-center justify-start py-20 pointer-events-none">
        {/* HUD Header */}
        <div className="flex flex-col items-center mb-6 opacity-60">
          <div className="w-[1px] h-16 bg-gradient-to-t from-cyan-500 to-transparent"></div>
          <span className="font-mono text-[9px] text-cyan-400 uppercase tracking-[0.4em] mt-3 bg-cyan-950/30 px-2 py-1 border border-cyan-500/20">
            Data_Upload
          </span>
        </div>

        {/* Paragraph Stream Container */}
        <div className="relative h-[65vh] w-16 overflow-hidden flex flex-col items-center">
          {/* Main Animation Container - Moving UP */}
          <div className="animate-[paragraphAscend_25s_linear_infinite] flex flex-col items-center gap-16 py-10">
            {/* First Set of Paragraphs */}
            {textBlocks.map((phrase, blockIdx) => (
              <div key={`block-1-${blockIdx}`} className="flex flex-col items-center group">
                <div className="w-px h-6 bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent mb-4"></div>
                <div className="flex flex-col items-center gap-1.5 py-4 px-2 border-x border-cyan-500/10 bg-cyan-500/5 rounded-sm backdrop-blur-[2px]">
                  {phrase.split('').map((char, charIdx) => (
                    <span 
                      key={charIdx} 
                      className={`font-mono text-sm md:text-base font-bold leading-none
                        ${char === ' ' ? 'h-4' : 'h-auto'} 
                        ${blockIdx === 3 ? 'text-indigo-400' : 'text-cyan-400'}
                        drop-shadow-[0_0_8px_currentColor] transition-all
                      `}
                      style={{ opacity: char === ' ' ? 0 : 0.9 }}
                    >
                      {char}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex flex-col items-center gap-1">
                  <div className="w-1 h-1 bg-cyan-500/40 rounded-full"></div>
                  <div className="w-0.5 h-4 bg-cyan-500/20"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicated Set for Infinite Loop */}
            {textBlocks.map((phrase, blockIdx) => (
              <div key={`block-2-${blockIdx}`} className="flex flex-col items-center opacity-40 grayscale-[0.5]">
                <div className="w-px h-6 bg-cyan-500/20 mb-4"></div>
                <div className="flex flex-col items-center gap-1.5 py-4 px-2 border-x border-white/5">
                  {phrase.split('').map((char, charIdx) => (
                    <span 
                      key={charIdx} 
                      className={`font-mono text-sm md:text-base ${char === ' ' ? 'h-4' : 'h-auto'} 
                      ${blockIdx === 3 ? 'text-indigo-400' : 'text-cyan-400'}`}
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Masking Overlays for smooth entry/exit */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#010102] to-transparent z-10"></div>
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#010102] to-transparent z-10"></div>
        </div>

        {/* HUD Footer */}
        <div className="flex flex-col items-center mt-6 opacity-60">
          <span className="font-mono text-[9px] text-indigo-400 uppercase tracking-[0.4em] mb-3">
            Source_Init
          </span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-indigo-500 to-transparent"></div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <span className="text-[10px] font-mono tracking-[0.5em] text-cyan-400 uppercase animate-pulse">Scroll to Initiate</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500/0 via-cyan-500 to-cyan-500/0"></div>
      </div>

      <style>{`
        @keyframes paragraphAscend {
          0% { transform: translateY(0%); }
          100% { transform: translateY(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
