
import React from 'react';

const ShopifyDesignSection: React.FC = () => {
  // 제공된 이미지의 느낌을 살린 더 진하고 선명한 공식 Shopify 그린 컬러 (#008060)
  const shopifyGreen = '#008060';

  const showcaseItems = [
    { 
      id: '01',
      title: 'Luxury Brand Identity', 
      desc: '픽셀 단위로 커스터마이징된 Liquid 테마와 독보적인 UI 라이브러리를 통해 브랜드의 품격을 디지털로 전이시킵니다.',
      metric: '99.9%',
      label: 'UI_FIDELITY',
      tag: 'CRAFT_ENGINE',
      data: ['RENDER_TIME: 12ms', 'LIQUID_V3: ACTIVE']
    },
    { 
      id: '02',
      title: 'Global Scale Architecture', 
      desc: '다국어 결제 시스템과 글로벌 물류 API를 유기적으로 통합하여 전 세계 어디서든 중단 없는 구매 경험을 제공합니다.',
      metric: '0.4s',
      label: 'LCP_OPTIMIZED',
      tag: 'GLOBAL_BRIDGE',
      data: ['GEO_SYNC: 120_NODES', 'API_LATENCY: 0.02s']
    }
  ];

  return (
    <section id="shopify-design" className="py-48 px-6 bg-[#030303] border-t border-white/5 relative overflow-hidden">
      {/* Background Liquid Code Stream */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none font-mono text-[7px] text-white overflow-hidden whitespace-nowrap">
        {[...Array(25)].map((_, i) => (
          <div key={i} className="animate-[liquidScroll_25s_linear_infinite]" style={{ animationDelay: `${i * -1}s`, opacity: 0.1 + (i % 5) * 0.05 }}>
            {`{% assign product = all_products['cyber-scala'] %} {{ product.title | upcase }} <div class="node-{{ i }}">{{ 'SECURE' | md5 }}</div> `.repeat(15)}
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-40 gap-16">
          <div className="relative">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[2px] w-12 shadow-[0_0_15px_#008060]" style={{ backgroundColor: shopifyGreen }}></div>
              <span className="font-mono text-[10px] font-black tracking-[0.5em] uppercase" style={{ color: shopifyGreen }}>System_Core // Shopify_Plus_v5.2</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-12">
              <span className="opacity-20 italic block text-2xl mb-2">Architectural_Precision</span>
              <span 
                className="inline-block transition-all duration-1000 select-none drop-shadow-[0_0_40px_rgba(0,128,96,0.5)]" 
                style={{ 
                  color: shopifyGreen,
                  backgroundImage: `linear-gradient(to bottom, #fff 10%, ${shopifyGreen} 90%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                SHOPIFY
              </span> 
              <br/>
              <span className="text-white">ARCHITECTURE</span>
            </h2>
            
            <div className="max-w-xl border-l-2 pl-8 space-y-6" style={{ borderLeftColor: `${shopifyGreen}44` }}>
              <p className="text-gray-400 text-xl font-light leading-relaxed tracking-tight">
                단순한 몰 구축을 넘어 <span style={{ color: shopifyGreen }} className="font-bold italic">Shopify Plus</span> 엔진의 확장성을 극대화합니다. 
                커스텀 <span className="text-white">Liquid Logic</span>으로 비즈니스의 모든 터치포인트를 브랜드화합니다.
              </p>
            </div>
          </div>
          
          {/* Visual Data Monitor */}
          <div className="hidden lg:flex flex-col items-end group cursor-default">
            <div className="bg-black/40 backdrop-blur-md p-5 border border-white/10 rounded-xl mb-6 flex gap-12 shadow-2xl">
               <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-gray-600 uppercase mb-1">Live_Render</span>
                  <span className="font-mono text-xs font-black" style={{ color: shopifyGreen }}>99.8_OPTIMIZED</span>
               </div>
               <div className="flex flex-col">
                  <span className="font-mono text-[8px] text-gray-600 uppercase mb-1">API_Stability</span>
                  <span className="font-mono text-xs text-white font-black">200_OK</span>
               </div>
            </div>
            <div className="flex gap-2">
              {[...Array(20)].map((_, i) => (
                <div key={i} className="w-1.5 h-10 bg-white/5 overflow-hidden rounded-full">
                  <div 
                    className="w-full animate-[liquidHeight_2s_infinite_alternate]" 
                    style={{ 
                      height: `${20 + Math.random() * 80}%`, 
                      backgroundColor: shopifyGreen,
                      animationDelay: `${i * 0.15}s`,
                      boxShadow: `0 0 10px ${shopifyGreen}aa`
                    }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Module Cards with Enhanced Visual Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-40">
          {showcaseItems.map((item, i) => (
            <div key={i} className="group relative">
              <div className="relative bg-[#080808]/90 backdrop-blur-xl border border-white/10 rounded-[4rem] p-16 overflow-hidden transition-all duration-700 hover:border-[#008060]/60 shadow-[0_0_60px_rgba(0,0,0,0.8)]">
                {/* Tech Grid Background Accent */}
                <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <pattern id={`sg-${i}`} width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" />
                    </pattern>
                    <rect width="100%" height="100%" fill={`url(#sg-${i})`} />
                  </svg>
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-xs font-black px-4 py-1.5 rounded-sm bg-[#008060]/10 border border-[#008060]/30" style={{ color: shopifyGreen }}>
                        INFRA_{item.id}
                      </span>
                      <span className="font-mono text-[9px] text-gray-700 uppercase tracking-widest">{item.tag}</span>
                    </div>
                    <div className="flex flex-col items-end">
                      {item.data.map((d, idx) => (
                        <span key={idx} className="font-mono text-[7px] text-gray-800 uppercase">{d}</span>
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-8 group-hover:text-[#008060] transition-colors leading-none">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 group-hover:text-gray-300 transition-colors">
                    {item.desc}
                  </p>

                  <div className="flex items-end justify-between">
                    <div className="space-y-3">
                       <span className="block font-mono text-[10px] text-gray-600 uppercase tracking-widest">{item.label}</span>
                       <span className="text-7xl font-black italic tracking-tighter drop-shadow-[0_0_20px_rgba(0,128,96,0.4)] transition-all group-hover:scale-105 inline-block" style={{ color: shopifyGreen }}>
                          {item.metric}
                       </span>
                    </div>
                    <div className="w-16 h-16 rounded-full border border-[#008060]/30 flex items-center justify-center transition-all group-hover:bg-[#008060] group-hover:text-black" style={{ color: shopifyGreen }}>
                      <i className="fa-solid fa-arrow-right-long text-xl"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes liquidHeight { from { height: 20%; } to { height: 100%; } }
        @keyframes liquidScroll { 0% { transform: translateY(0); } 100% { transform: translateY(-100%); } }
      `}</style>
    </section>
  );
};

export default ShopifyDesignSection;
