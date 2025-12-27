
import React, { useEffect, useState } from 'react';

const FintechSection: React.FC = () => {
  const emeraldColor = '#10b981';
  const mintColor = '#00ffcc';
  const [txId, setTxId] = useState('TX_' + Math.random().toString(16).slice(2, 10).toUpperCase());

  useEffect(() => {
    const timer = setInterval(() => {
      setTxId('TX_' + Math.random().toString(16).slice(2, 10).toUpperCase());
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="fintech" className="py-48 px-6 bg-[#020202] border-t border-white/5 relative overflow-hidden">
      {/* Transaction Feed Background */}
      <div className="absolute inset-y-0 right-10 w-px bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent pointer-events-none opacity-50 hidden xl:block">
         <div className="[writing-mode:vertical-lr] font-mono text-[8px] text-emerald-500/40 tracking-[1em] py-20 uppercase">
           LIVE_LEDGER_FEED // {txId} // SECURE_SYNC_COMPLETE
         </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-32 gap-12">
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-sm font-mono text-[10px] text-emerald-400 uppercase tracking-[0.5em] font-black shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                PROTOCOL_ID: AES_256_ACTIVE
              </div>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-4">
              Capital <br/> 
              <span 
                className="inline-block drop-shadow-[0_0_40px_rgba(0,255,204,0.3)]"
                style={{ 
                  color: mintColor,
                  backgroundImage: `linear-gradient(to bottom, #fff 20%, ${emeraldColor} 80%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                GOVERNANCE
              </span>
            </h2>
            
            <div className="max-w-xl border-l-2 pl-8 space-y-6" style={{ borderLeftColor: `${emeraldColor}66` }}>
              <p className="text-gray-400 text-xl font-light leading-relaxed tracking-tight">
                자본의 흐름은 정확해야 합니다. <br/>
                글로벌 결제 승인율 최적화와 리스크 최소화를 위한 <span className="text-emerald-400 font-bold italic">엔터프라이즈 거버넌스</span>를 설계합니다.
              </p>
            </div>
          </div>

          <div className="hidden lg:flex flex-col items-end group">
             <div className="bg-black/40 backdrop-blur-md p-6 border border-emerald-500/20 rounded-2xl flex flex-col items-end gap-3 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Network_Stability</span>
                <div className="flex items-center gap-4">
                   <span className="font-mono text-xl text-emerald-400 font-black tracking-tighter">SECURED</span>
                   <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]" style={{ animationDelay: `${i * 0.2}s` }}></div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Digital Ledger Table Visual */}
        <div className="border border-white/10 rounded-[4rem] overflow-hidden mb-32 shadow-[0_0_100px_rgba(0,0,0,0.5)] bg-[#050505]/80 backdrop-blur-xl relative group">
          {/* Scanning Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent z-20 animate-[ledgerScan_5s_linear_infinite]"></div>
          
          {[
            { cat: 'Cross-border Settlement', detail: '다중 통화 정산 및 환전 수수료(FX Fee) 15% 이상 절감 시스템 구축', metric: 'FX_OPTIM', data: 'USD_EUR_KRW_SYNC' },
            { cat: 'Subscription Logic', detail: '정기 결제 실패 방지(Dunning Management)를 통한 자동 리텐션 확보', metric: 'RET_MAX', data: 'CHURN_REDUCTION: 24%' },
            { cat: 'Fraud & Risk (FMS)', detail: 'AI 기반 이상거래 탐지 알고리즘으로 차지백 리스크 0.1% 미만 관리', metric: 'RISK_MIN', data: 'SLA: 99.99%' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-16 bg-transparent border-b border-white/5 last:border-0 hover:bg-emerald-500/[0.04] transition-all group/row relative overflow-hidden">
              <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover/row:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[10px] px-3 py-1 rounded bg-emerald-500 text-black font-black">{item.metric}</span>
                  <span className="font-mono text-[8px] text-gray-700 uppercase tracking-widest">Entry_Node_{i+1}</span>
                </div>
                <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter group-hover/row:translate-x-4 transition-transform duration-500">{item.cat}</h4>
              </div>
              
              <div className="mt-8 md:mt-0 relative z-10 flex flex-col items-end gap-4 text-right">
                <p className="text-gray-400 font-light text-lg leading-relaxed max-w-lg group-hover/row:text-white transition-colors">
                  {item.detail}
                </p>
                <span className="font-mono text-[9px] text-emerald-500/60 font-black tracking-widest border-b border-emerald-500/20 pb-1">{item.data}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @keyframes ledgerScan { 0% { top: 0%; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
      `}</style>
    </section>
  );
};

export default FintechSection;
