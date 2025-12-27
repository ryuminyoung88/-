
import React from 'react';

const AIEcommerceSection: React.FC = () => {
  const aiColor = '#a855f7'; // Amethyst Purple

  return (
    <section id="ai-ecommerce" className="py-48 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Neural Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="neuralPattern" width="120" height="120" patternUnits="userSpaceOnUse">
            <circle cx="60" cy="60" r="1.5" fill={aiColor} />
            <path d="M 60 60 L 120 0 M 60 60 L 0 0 M 60 60 L 60 120" stroke={aiColor} strokeWidth="0.5" fill="none" opacity="0.3" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#neuralPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-32 border-b border-white/10 pb-16 gap-12">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="font-mono text-[10px] text-violet-500 font-black tracking-[0.4em] uppercase">Sector_05 // Intelligence_Core</span>
              <div className="h-[1px] w-32 bg-gradient-to-r from-violet-500 to-transparent shadow-[0_0_10px_#a855f7]"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              Intelligence <br/> 
              <span className="drop-shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all hover:drop-shadow-[0_0_50px_rgba(168,85,247,0.6)]" style={{ color: aiColor }}>Ecosystem</span>
            </h2>
            
            <p className="text-gray-400 text-xl font-light max-w-xl leading-relaxed italic border-l-2 pl-8" style={{ borderLeftColor: `${aiColor}44` }}>
              데이터는 스스로를 개선합니다. <br/>
              비즈니스의 다음 수(Next Move)를 예측하는 <span className="text-white font-bold">'지능형 전환 엔진'</span>을 구축합니다.
            </p>
          </div>
          
          <div className="flex flex-col items-end gap-3">
            <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest">Neural_Processor_Sync</span>
            <div className="flex gap-1.5">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1.5 h-10 bg-violet-500/10 rounded-full overflow-hidden">
                  <div className="w-full bg-violet-500 animate-pulse" style={{ height: `${10 + Math.random() * 90}%`, animationDelay: `${i * 0.1}s`, boxShadow: `0 0 15px ${aiColor}` }}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* AI Processing Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
          {[
            { title: 'Predictive Analytics', desc: '15년 빅데이터 기반 수요 예측 및 매출 시뮬레이션 알고리즘', icon: 'fa-brain-circuit', metric: 'ACC: 98.2%' },
            { title: 'GenAI Content', desc: '글로벌 현지 최적화를 위한 실시간 지능형 콘텐츠 생성 엔진', icon: 'fa-wand-magic-sparkles', metric: 'TPS: 1.2k' },
            { title: 'Autonomous Agents', desc: '고객 행동 패턴 정밀 분석 기반의 개인화 추천 시스템', icon: 'fa-user-gear', metric: 'LAT: 0.04s' }
          ].map((item, i) => (
            <div key={i} className="relative group p-1 bg-white/[0.02] rounded-[4rem] border border-white/5 transition-all overflow-hidden hover:border-violet-500/40">
              {/* Internal Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-violet-500/20 opacity-0 group-hover:opacity-100 animate-[scanHorizontal_2s_linear_infinite] pointer-events-none"></div>
              
              <div className="p-16 rounded-[3.8rem] bg-[#050505] text-center h-full flex flex-col items-center shadow-2xl">
                <div className="w-24 h-24 rounded-3xl bg-violet-500/5 flex items-center justify-center mb-10 border border-violet-500/10 group-hover:border-violet-500/50 transition-all">
                  <i className={`fas ${item.icon} text-4xl group-hover:scale-110 transition-transform`} style={{ color: aiColor, filter: `drop-shadow(0 0 15px ${aiColor}66)` }}></i>
                </div>
                <h4 className="text-2xl font-black text-white uppercase mb-6 italic tracking-tighter group-hover:text-violet-400 transition-colors">{item.title}</h4>
                <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 flex-grow">{item.desc}</p>
                <div className="font-mono text-[10px] text-violet-500/80 font-black tracking-widest border border-violet-500/20 px-6 py-2 rounded-full bg-violet-500/5">{item.metric}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Efficiency Dashboard Visual */}
        <div className="bg-[#080808]/80 backdrop-blur-md border border-white/10 rounded-[5rem] p-12 md:p-24 relative overflow-hidden shadow-2xl group">
           <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none group-hover:opacity-[0.06] transition-opacity">
              <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M 0 50 Q 25 25 50 50 T 100 50" fill="none" stroke="white" strokeWidth="0.5" className="animate-[oscilloscope_4s_linear_infinite]" />
              </svg>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-5 gap-24 items-center relative z-10">
              <div className="lg:col-span-3 space-y-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full border border-violet-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-violet-500 rounded-full animate-ping"></div>
                  </div>
                  <h4 className="text-3xl font-black text-white uppercase italic tracking-tighter">Operational Efficiency Delta</h4>
                </div>
                
                <div className="space-y-12">
                  <div className="space-y-4">
                    <div className="flex justify-between font-mono text-[10px] uppercase text-gray-700 tracking-[0.3em]">
                      <span>Human_Logic_Capacity</span>
                      <span>Baseline // 1.0x</span>
                    </div>
                    <div className="h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/5">
                      <div className="w-[28%] h-full bg-gray-800"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.3em]" style={{ color: aiColor }}>
                      <span className="font-black">Neural_Ecosystem_Growth</span>
                      <span className="font-black text-sm">300% SCALING</span>
                    </div>
                    <div className="h-4 rounded-full overflow-hidden border border-violet-500/30 relative" style={{ backgroundColor: `${aiColor}08` }}>
                      <div className="h-full relative z-10 animate-[chartGrow_5s_ease-out_infinite_alternate]" style={{ backgroundColor: aiColor, boxShadow: `0 0 25px ${aiColor}` }}></div>
                      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] animate-[scanHorizontal_3s_linear_infinite]"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="lg:col-span-2 grid grid-cols-2 gap-8">
                {[
                  { l: 'ROAS', v: '+45%', c: aiColor }, { l: 'OpEx', v: '-70%', c: '#fff' },
                  { l: 'Growth', v: '10X', c: '#fff' }, { l: 'Accuracy', v: '99%', c: aiColor }
                ].map((stat, i) => (
                  <div key={i} className="p-10 border border-white/5 rounded-[2.5rem] bg-black/60 text-center hover:border-violet-500/30 transition-all">
                    <span className="text-[10px] font-mono text-gray-600 uppercase mb-4 block tracking-[0.3em]">{stat.l}</span>
                    <span className="text-4xl font-black italic tracking-tighter block" style={{ color: stat.c }}>{stat.v}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
      <style>{`
        @keyframes chartGrow { 0% { width: 40%; } 100% { width: 100%; } }
        @keyframes scanHorizontal { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        @keyframes oscilloscope { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
      `}</style>
    </section>
  );
};

export default AIEcommerceSection;
