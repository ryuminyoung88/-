
import React, { useState } from 'react';

const EcommerceSection: React.FC = () => {
  // 이미지 로딩 실패를 추적하기 위한 상태
  const [brokenLogos, setBrokenLogos] = useState<Record<string, boolean>>({});

  const handleError = (name: string) => {
    setBrokenLogos(prev => ({ ...prev, [name]: true }));
  };

  const topMarketplaces = [
    { name: 'Amazon', color: '#FF9900', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', status: 'Core Node', region: 'Global' },
    { name: 'eBay', color: '#E53238', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg', status: 'Arbitrage', region: 'US/EU' },
    { name: 'Walmart', color: '#0071CE', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg', status: 'Enterprise', region: 'North America' },
    { name: 'Shopee', color: '#EE4D2D', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Shopee.svg', status: 'High Growth', region: 'SEA' }
  ];

  const secondaryPlatforms = [
    { name: 'Coupang', color: '#E1161B', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Coupang_logo.svg' },
    { name: 'Naver', color: '#03C75A', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Naver_Logotype.svg' },
    { name: 'Lazada', color: '#000083', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/Lazada_logo.svg' },
    { name: 'AliExpress', color: '#FF4747', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Aliexpress_logo.svg' },
    { name: 'Rakuten', color: '#BF0000', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Rakuten_Global_Brand_Logo.svg' },
    { name: 'Etsy', color: '#F1641E', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg' },
    { name: 'MercadoLibre', color: '#FFE600', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/MercadoLibre.svg' },
    { name: 'Allegro', color: '#FF5A00', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Allegro.pl_logo.svg' },
    { name: 'Target', color: '#CC0000', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Target_logo.svg' },
    { name: 'BestBuy', color: '#FFF200', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Best_Buy_Logo.svg' },
    { name: 'Zalando', color: '#FF6900', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Zalando_logo.svg' },
    { name: 'Wayfair', color: '#7F187F', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c2/Wayfair_logo.svg' },
    { name: 'Newegg', color: '#F39200', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Newegg_logo.svg' },
    { name: 'Catch', color: '#FFD700', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Catch.com.au_logo.svg' },
    { name: 'Noon', color: '#FEFE33', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Noon_Logo.svg' },
    { name: 'Jumia', color: '#F68B1E', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/41/Jumia_logo.svg' },
    { name: 'Kaufland', color: '#E30613', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/cc/Kaufland_Logo.svg' },
    { name: 'Ozon', color: '#005BFF', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/80/Ozon_logo.svg' },
    { name: 'Qoo10', color: '#00C7B1', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Qoo10_logo.png' },
    { name: 'ManoMano', color: '#FF4D00', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Manomano_logo.svg' }
  ];

  return (
    <section id="ecommerce" className="py-48 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Background Architectural Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/5 blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header - Scaled Down */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-32 gap-12">
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping"></div>
              <span className="font-mono text-[10px] text-indigo-500 font-bold tracking-[0.6em] uppercase block">Sector_02 // Operational Matrix</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
              Global <br/> <span className="text-indigo-500 drop-shadow-[0_0_20px_rgba(99,102,241,0.3)]">Distribution</span> <br/> <span className="opacity-20 italic">Intelligence</span>
            </h2>
            <p className="text-gray-500 text-xl font-light max-w-xl leading-relaxed tracking-tight border-l-2 border-indigo-500/30 pl-8">
              단일 채널의 한계를 넘는 멀티-플랫폼 지배력. <br/>
              전 세계 20개 이상의 거대 플랫폼을 하나의 지능형 매트릭스로 통합하여 비즈니스의 영토를 확장합니다.
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-[12rem] font-black text-white/[0.03] leading-none select-none tracking-tighter block -mb-10">CORE</span>
            <div className="flex gap-1.5 mr-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-4 bg-indigo-500/20"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Primary Nodes */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {topMarketplaces.map((m, i) => (
            <div key={i} className="group relative p-12 border border-white/10 rounded-[3rem] bg-white/[0.01] hover:bg-white/[0.03] hover:border-indigo-500/50 transition-all duration-700 overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 transition-opacity">
                 <span className="font-mono text-[8px] text-gray-500 uppercase tracking-widest">{m.region}</span>
              </div>
              
              <div className="w-full h-24 mb-10 flex items-center justify-center rounded-[2rem] bg-[#050508] border border-white/5 group-hover:border-indigo-500/30 transition-all duration-700 shadow-inner p-8 relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ backgroundColor: m.color, filter: 'blur(30px)' }}
                ></div>
                
                {brokenLogos[m.name] ? (
                  <span className="relative z-10 text-xl font-black text-white italic tracking-tighter uppercase">{m.name}</span>
                ) : (
                  <img 
                    src={m.logo} 
                    alt={m.name}
                    onError={() => handleError(m.name)}
                    className="relative z-10 max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                  />
                )}
              </div>
              
              <h4 className="text-2xl font-black text-white mb-2 uppercase italic tracking-tighter group-hover:text-indigo-400 transition-colors">{m.name}</h4>
              <p className="text-[10px] font-mono text-gray-600 font-bold uppercase tracking-[0.3em]">{m.status}</p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </div>
          ))}
        </div>

        {/* The Matrix Wall */}
        <div className="relative p-1 bg-white/5 rounded-[3.5rem] overflow-hidden group">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-px bg-white/10">
            {secondaryPlatforms.map((p, i) => (
              <div key={i} className="relative aspect-square bg-[#020204] flex flex-col items-center justify-center p-10 transition-all duration-500 hover:z-20 group/node cursor-default overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-0 group-hover/node:opacity-5 transition-opacity duration-500"
                  style={{ backgroundColor: p.color }}
                ></div>
                
                <div className="relative z-10 w-full h-full flex items-center justify-center filter grayscale opacity-40 group-hover/node:grayscale-0 group-hover/node:opacity-100 transition-all duration-700 transform group-hover/node:scale-125">
                   {brokenLogos[p.name] ? (
                     <span className="font-mono text-[9px] font-black uppercase text-white/50">{p.name}</span>
                   ) : (
                     <img 
                       src={p.logo} 
                       alt={p.name} 
                       onError={() => handleError(p.name)}
                       className="max-w-full max-h-full object-contain drop-shadow-[0_0_8px_rgba(255,255,255,0.05)]" 
                     />
                   )}
                </div>
                
                <div className="absolute bottom-3 left-0 w-full text-center translate-y-2 opacity-0 group-hover/node:translate-y-0 group-hover/node:opacity-100 transition-all duration-500">
                  <span className="font-mono text-[7px] font-black uppercase tracking-widest text-white/60">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 pointer-events-none border-[1.5rem] border-[#020204] rounded-[3.5rem] z-30"></div>
        </div>

        {/* Statistics Footer */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-20">
          {[
            { val: '20+', label: 'Connected Platforms', detail: 'Native API Integration' },
            { val: '24/7', label: 'Sync Frequency', detail: 'Real-time Catalog Bridge' },
            { val: 'ZERO', label: 'Latency Loss', detail: 'Optimized Buffer Queue' }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center md:items-start group">
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-black text-white italic tracking-tighter group-hover:text-indigo-500 transition-colors">{stat.val}</span>
                <div className="h-1 w-8 bg-indigo-500/30"></div>
              </div>
              <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-[0.4em] mb-2">{stat.label}</span>
              <p className="text-gray-600 text-xs font-light tracking-wide uppercase">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
