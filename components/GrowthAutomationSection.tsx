
import React from 'react';

const GrowthAutomationSection: React.FC = () => {
  return (
    <section id="automation" className="py-48 px-6 bg-[#010101] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      {/* Background Orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-500/5 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-indigo-500/5 rounded-full animate-[spin_100s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-32 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-6">
              <div className="w-[1.5px] h-14 bg-gradient-to-t from-cyan-500 to-transparent shadow-[0_0_15px_#00f2ff]"></div>
              <span className="font-mono text-[11px] text-cyan-500 font-black tracking-[0.5em] uppercase">Sector_06 // Growth_Engineering</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Autonomous <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all hover:drop-shadow-[0_0_50px_rgba(0,242,255,0.6)]">Growth_Logic</span>
            </h2>
            
            <p className="text-gray-400 text-xl font-light max-w-2xl leading-relaxed italic border-l-2 border-white/10 pl-8">
              확장성은 노동이 아닌 <span className="text-white font-bold italic underline decoration-cyan-500/50 underline-offset-8">코드</span>에서 탄생합니다. <br/>
              물리적 한계를 초월하는 자율 주행 비즈니스 아키텍처를 실현합니다.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-40 items-center">
          {/* Tactical Protocol Node */}
          <div className="space-y-16">
            <div className="relative p-16 border border-white/10 bg-[#050508]/90 backdrop-blur-xl rounded-[4rem] group hover:border-cyan-500/50 transition-all duration-700 overflow-hidden shadow-2xl">
               {/* Protocol Branch Visual Overlay */}
               <div className="absolute top-0 right-0 w-48 h-48 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity pointer-events-none">
                  <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" stroke="cyan" strokeWidth="0.5">
                    <path d="M50,10 V90 M50,30 L80,50 M50,30 L20,50 M50,60 L70,80 M50,60 L30,80" />
                    <circle cx="50" cy="10" r="1" fill="cyan" />
                  </svg>
               </div>

               <div className="flex items-center gap-4 mb-10">
                  <span className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse shadow-[0_0_10px_#00f2ff]"></span>
                  <span className="text-[11px] font-mono text-gray-500 uppercase tracking-[0.4em] font-bold">Operation_Protocol // AUTO_SCALING</span>
               </div>
               <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic mb-10 tracking-tighter leading-[0.9] group-hover:text-cyan-400 transition-colors">
                 Autonomous <br/> Scaling Engine
               </h3>
               <p className="text-gray-400 text-xl leading-relaxed font-light mb-12 group-hover:text-gray-200 transition-colors">
                 전 세계 30여 개 플랫폼의 실시간 데이터를 통합 제어하여 인간의 개입 없는 <span className="text-white font-bold underline decoration-cyan-500/30 underline-offset-4">'무한 확장 가능 비즈니스'</span>를 구현합니다.
               </p>
               <div className="grid grid-cols-2 gap-4">
                  {['Distributed_Nodes', 'Live_API_Sync', 'Auto_Logistics', 'Neural_Pricing'].map(tag => (
                    <div key={tag} className="px-4 py-2 border border-white/5 bg-white/[0.03] rounded font-mono text-[9px] text-gray-600 uppercase tracking-widest text-center group-hover:text-cyan-400 group-hover:border-cyan-500/20 transition-all">
                      {tag}
                    </div>
                  ))}
               </div>
            </div>
          </div>
          
          {/* Result Highlight - IMPACT MAXIMIZED */}
          <div className="relative group cursor-default h-full">
             {/* Glowing External Brackets */}
             <div className="absolute -inset-4 border border-cyan-500/20 rounded-[4.5rem] pointer-events-none group-hover:border-cyan-500/40 transition-all duration-700"></div>
             <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
             <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

             {/* Result Box */}
             <div className="relative bg-[#050508] border border-white/10 p-12 md:p-20 rounded-[4rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,1)] hover:border-cyan-500/60 transition-all duration-700 flex flex-col items-center justify-center min-h-[600px]">
                
                {/* Advanced Background Visuals */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Energy Core Pulse */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-[radial-gradient(circle,rgba(0,242,255,0.08)_0%,transparent_60%)] animate-pulse"></div>
                  
                  {/* Internal Scanning Beam */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent animate-[beamHorizontal_4s_linear_infinite]"></div>
                  
                  {/* Floating Hex Grid Decor */}
                  <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-700">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern id="hexGrid" width="40" height="34.6" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
                        <path d="M20 0L40 11.5V34.6L20 46.1L0 34.6V11.5L20 0Z" fill="none" stroke="white" strokeWidth="1" />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#hexGrid)" />
                    </svg>
                  </div>
                </div>

                {/* HUD Header Decor */}
                <div className="absolute top-10 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full shadow-[0_0_15px_rgba(0,242,255,0.2)]">
                   <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-ping"></div>
                   <span className="font-mono text-[10px] text-cyan-400 font-black uppercase tracking-[0.4em]">Efficiency_Limit_Exceeded</span>
                </div>

                {/* Main Metric Section */}
                <div className="relative z-10 w-full flex flex-col items-center">
                   <div className="relative">
                      {/* Sub-glow behind text */}
                      <div className="absolute inset-0 blur-[40px] bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                      
                      {/* Massive Scaling Number - Controlled sizing to prevent overflow */}
                      <h3 className="text-7xl sm:text-[9rem] md:text-[10rem] lg:text-[11rem] font-black italic tracking-tighter leading-none text-white transition-all duration-700 group-hover:scale-[1.05] drop-shadow-[0_0_40px_rgba(0,242,255,0.6)] [text-shadow:4px_4px_0px_#6366f1,8px_8px_0px_rgba(0,242,255,0.1)]">
                        3000%
                      </h3>
                   </div>
                   
                   {/* Decorative Visual Under Number */}
                   <div className="mt-8 flex items-center gap-4 w-2/3">
                      <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
                      <div className="flex gap-1.5">
                        <div className="w-2 h-2 bg-cyan-500 rotate-45 shadow-[0_0_8px_#00f2ff]"></div>
                        <div className="w-12 h-1 bg-cyan-500/30 rounded-full"></div>
                        <div className="w-2 h-2 bg-cyan-500 rotate-45 shadow-[0_0_8px_#00f2ff]"></div>
                      </div>
                      <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
                   </div>

                   {/* Descriptive Subtext */}
                   <div className="mt-14 space-y-6 text-center">
                      <p className="font-black text-2xl md:text-4xl text-white uppercase tracking-tighter italic leading-none transition-transform duration-700 group-hover:-translate-y-2">
                        Revenue Explosion <br/> 
                        <span className="text-gray-700 text-lg md:text-2xl not-italic tracking-[0.2em]">by</span> 
                        <span className="ml-4 text-indigo-400 drop-shadow-[0_0_12px_rgba(99,102,241,0.5)]">Autonomous_Code</span>
                      </p>
                      
                      <div className="flex justify-center gap-4 opacity-40 group-hover:opacity-100 transition-opacity">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className="w-8 h-1 bg-white/5 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}></div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>

                {/* HUD Corner Accents */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/30 rounded-tl-[4rem]"></div>
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-[4rem]"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-indigo-500/30 rounded-bl-[4rem]"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-500/30 rounded-br-[4rem]"></div>
                
                {/* Real-time Data Footer */}
                <div className="absolute bottom-10 left-0 w-full px-12 flex justify-between items-end">
                   <div className="flex flex-col gap-1">
                      <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest">Growth_Vector_Sync</span>
                      <span className="font-mono text-[10px] text-cyan-500/60 font-black">ACTIVE_NODE_STABLE</span>
                   </div>
                   <div className="text-right flex flex-col gap-1">
                      <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest">Network_Load</span>
                      <div className="flex gap-0.5">
                        {[...Array(8)].map((_, i) => (
                          <div key={i} className={`w-1 h-3 ${i < 6 ? 'bg-cyan-500' : 'bg-gray-800'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
                        ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes beamHorizontal {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default GrowthAutomationSection;
