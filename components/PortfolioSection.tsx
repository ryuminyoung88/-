
import React from 'react';

const PortfolioSection: React.FC = () => {
  const channels = [
    { name: 'Meta', icon: 'fa-brands fa-meta', color: '#0668E1', role: 'Neural_Targeting', kpi: '520%', status: 'Active', latency: '0.04ms' },
    { name: 'Google', icon: 'fa-brands fa-google', color: '#4285F4', role: 'Intent_Search', kpi: 'Top_10', status: 'Optimizing', latency: '0.02ms' },
    { name: 'TikTok', icon: 'fa-brands fa-tiktok', color: '#FFFFFF', role: 'Viral_Engine', kpi: '1.4M', status: 'Scaling', latency: '0.08ms' },
    { name: 'YouTube', icon: 'fa-brands fa-youtube', color: '#FF0000', role: 'Brand_Story', kpi: '92%', status: 'Stable', latency: '0.05ms' },
    { name: 'Naver', icon: 'fa-solid fa-n', color: '#03C75A', role: 'Local_Flow', kpi: 'Fixed', status: 'Verified', latency: '0.01ms' }
  ];

  return (
    <section id="portfolio" className="py-48 px-6 bg-[#010102] relative overflow-hidden border-t border-white/5">
      {/* Background Architectural Decals */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-0 w-full h-full cyber-grid opacity-10"></div>
        <div className="absolute top-1/4 -left-20 font-mono text-[20vw] font-black text-white/[0.02] leading-none tracking-tighter uppercase -rotate-12">Architecture</div>
        <div className="absolute bottom-1/4 -right-20 font-mono text-[20vw] font-black text-blue-500/[0.02] leading-none tracking-tighter uppercase rotate-12">Performance</div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section: Scaled Down Typography */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-32 gap-16">
          <div className="relative space-y-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-blue-500 shadow-[0_0_15px_#3b82f6]"></div>
              <span className="font-mono text-[10px] text-blue-500 font-bold tracking-[0.5em] uppercase">Tactical_Intelligence // Portfolio_v4</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.8] mb-4">
              Engineered <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-cyan-400 drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">Conversion</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-8 md:items-center">
              <p className="text-gray-400 text-xl font-light max-w-xl leading-relaxed tracking-tight border-l-4 border-white/10 pl-8 italic">
                데이터는 거짓말을 하지 않습니다. <br/>
                우리는 비즈니스의 <span className="text-white font-bold">'생존과 직결된 숫자'</span>를 직접 설계하고 증명합니다.
              </p>
              <div className="flex flex-col gap-1 px-6 py-3 border border-white/5 bg-white/[0.02] rounded-lg">
                <span className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Global_Operations</span>
                <span className="font-mono text-xs text-blue-400 font-bold tracking-tighter">EST. 2010 // CORE_BUILD_STABLE</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:flex flex-col items-end group cursor-default">
            <div className="flex gap-1.5 mb-2">
              {[...Array(24)].map((_, i) => (
                <div key={i} className={`w-1 h-6 transition-all duration-500 ${i < 18 ? 'bg-blue-500 group-hover:h-8' : 'bg-white/10 group-hover:bg-white/20'}`} style={{ transitionDelay: `${i * 20}ms` }}></div>
              ))}
            </div>
            <span className="font-mono text-[10px] text-gray-400 uppercase tracking-[0.3em] font-black group-hover:text-blue-400 transition-colors">Success_Rate: 98.4%</span>
          </div>
        </div>

        {/* Tactical Channel Grid: Modular UI */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-px bg-white/5 border border-white/5 rounded-[2rem] overflow-hidden mb-32 shadow-2xl">
          {channels.map((ch, i) => (
            <div key={i} className="group relative bg-[#020204] p-10 transition-all duration-500 hover:bg-blue-500/[0.03] cursor-default">
              {/* Internal HUD Decoration */}
              <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></div>
              </div>
              
              <div className="relative z-10 space-y-10">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-[#0a0a0f] border border-white/5 group-hover:border-blue-500/50 transition-all shadow-inner">
                    <i className={`${ch.icon} text-3xl transition-transform group-hover:scale-110`} style={{ color: ch.color, filter: `drop-shadow(0 0 10px ${ch.color}44)` }}></i>
                  </div>
                  <div className="text-right">
                    <span className="block font-mono text-[8px] text-gray-600 uppercase tracking-widest mb-1">Status</span>
                    <span className={`block font-mono text-[9px] uppercase font-black tracking-widest ${ch.status === 'Optimizing' ? 'text-yellow-500' : 'text-green-500'}`}>{ch.status}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="text-xl font-black text-white uppercase italic tracking-tighter group-hover:text-blue-400 transition-colors">{ch.name}</h4>
                  <p className="font-mono text-[9px] text-gray-500 uppercase tracking-[0.3em]">{ch.role}</p>
                </div>

                <div className="space-y-4 pt-6 border-t border-white/5">
                   <div className="flex justify-between items-baseline">
                      <span className="text-3xl font-black text-white italic tracking-tighter group-hover:scale-110 transition-transform origin-left">{ch.kpi}</span>
                      <span className="font-mono text-[8px] text-gray-700 tracking-tighter">{ch.latency}</span>
                   </div>
                   <div className="flex gap-0.5 w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500 w-0 group-hover:w-[85%] transition-all duration-1000 ease-out"></div>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modules: Bento-Box Evolution */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Hero Case: Data Visualization Feel */}
          <div className="lg:col-span-8 group relative bg-gradient-to-br from-[#050508] to-[#010102] border border-white/10 rounded-[3.5rem] p-16 overflow-hidden hover:border-blue-500/40 transition-all duration-700 shadow-2xl flex flex-col justify-between min-h-[550px]">
             {/* Background Mesh Overlay */}
             <div className="absolute inset-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#smallGrid)" />
                </svg>
             </div>

             <div className="relative z-10 flex flex-col md:flex-row gap-12 items-start">
                <div className="space-y-8 flex-1">
                   <div className="inline-flex items-center gap-3 px-5 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full">
                      <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse shadow-[0_0_8px_#60a5fa]"></span>
                      <span className="font-mono text-[10px] text-blue-400 font-bold tracking-widest uppercase">System_Logic_v4.5</span>
                   </div>
                   <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic leading-[0.9] tracking-tighter">
                     Revenue <br/> 
                     <span className="text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]">Pipeline</span> <br/>
                     <span className="opacity-30">Orchestration</span>
                   </h3>
                   <p className="text-gray-400 text-xl font-light leading-relaxed max-lg">
                      단순 집행을 넘어 전사적 성장을 위한 **'수익 파이프라인'**을 구축합니다. 
                      데이터 분석부터 매체 최적화까지 모든 단계를 통합 제어하여 안정적인 스케일업을 실현합니다.
                   </p>
                </div>

                <div className="w-full md:w-auto flex flex-col gap-6 md:pt-16">
                  {[
                    { l: 'ROAS', v: '680%' },
                    { l: 'Efficiency', v: '2.4x' },
                    { l: 'Scalability', v: 'MAX' }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col items-end border-r-2 border-blue-500/30 pr-6 group-hover:border-blue-500 transition-colors">
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest mb-1">{item.l}</span>
                      <span className="text-3xl font-black text-white italic tracking-tighter">{item.v}</span>
                    </div>
                  ))}
                </div>
             </div>

             <div className="relative z-10 flex items-center justify-between pt-16 border-t border-white/5">
                <div className="flex gap-16">
                   <div className="flex flex-col">
                      <span className="text-7xl font-black text-white italic tracking-tighter group-hover:text-blue-400 transition-colors">+240%</span>
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold mt-2">Conversion_Delta</span>
                   </div>
                   <div className="hidden md:flex flex-col">
                      <span className="text-7xl font-black text-white italic tracking-tighter group-hover:text-cyan-400 transition-colors">8.5x</span>
                      <span className="font-mono text-[10px] text-gray-600 uppercase tracking-[0.4em] font-bold mt-2">Scale_Factor</span>
                   </div>
                </div>
                <button className="w-20 h-20 rounded-full border-2 border-blue-500/20 flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-black hover:border-blue-500 transition-all group/btn shadow-[0_0_30px_rgba(59,130,246,0)] hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]">
                   <i className="fa-solid fa-chevron-right text-2xl group-hover/btn:translate-x-1 transition-transform"></i>
                </button>
             </div>
          </div>

          {/* Sub Case: High Energy Visual */}
          <div className="lg:col-span-4 group relative bg-blue-600 rounded-[3.5rem] p-16 overflow-hidden flex flex-col justify-between shadow-2xl transition-transform hover:-translate-y-2 duration-700">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
             <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/20 to-black/60"></div>
             
             {/* Moving Energy Ring */}
             <div className="absolute -top-20 -right-20 w-64 h-64 border-[20px] border-white/5 rounded-full animate-[spin_10s_linear_infinite]"></div>

             <div className="relative z-10 space-y-8 text-white">
                <div className="flex justify-between items-center">
                   <span className="font-mono text-[10px] text-white/60 font-black uppercase tracking-[0.5em]">Viral_Ecosystem</span>
                   <i className="fa-solid fa-bolt text-white/40"></i>
                </div>
                <h3 className="text-4xl font-black uppercase italic leading-none tracking-tighter">
                   MZ <br className="hidden lg:block"/> Target <br/> Viral <br className="hidden lg:block"/> Engine
                </h3>
                <p className="text-white/80 text-lg font-light leading-relaxed">
                   200개 이상의 크리에이티브 베리에이션 자동 최적화 알고리즘 도입. 
                   도달률 폭발을 통한 압도적 바이럴 파워.
                </p>
             </div>

             <div className="relative z-10 pt-16">
                <div className="flex flex-col gap-2 mb-8">
                   <div className="flex items-baseline justify-between text-white">
                      <span className="text-7xl font-black italic tracking-tighter">3.2M</span>
                      <span className="font-mono text-[10px] uppercase font-bold tracking-widest opacity-60">Reach</span>
                   </div>
                   <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full bg-white w-[92%] shadow-[0_0_15px_#fff] animate-pulse"></div>
                   </div>
                </div>
                <div className="flex justify-between font-mono text-[9px] text-white/50 uppercase font-bold tracking-[0.2em]">
                   <span>Impact: Critical</span>
                   <span>Retention: 42%</span>
                </div>
             </div>
          </div>
        </div>

        {/* HUD System Status: Footer Decal */}
        <div className="mt-32 flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-12 gap-8">
          <div className="flex gap-12 font-mono text-[9px] text-gray-600 uppercase tracking-[0.4em] font-bold">
             <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> Auth: Verified</div>
             <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span> Data: Encrypted</div>
             <div className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></span> Link: Secure</div>
          </div>
          <div className="flex items-center gap-6 group">
             <span className="font-mono text-[10px] text-blue-500 font-black uppercase tracking-[0.3em] group-hover:text-white transition-colors">Operational_Interface_v9.2</span>
             <div className="flex gap-1">
               {[...Array(5)].map((_, i) => (
                 <div key={i} className="w-4 h-1 bg-blue-500/20 group-hover:bg-blue-500 transition-colors" style={{ transitionDelay: `${i * 100}ms` }}></div>
               ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
