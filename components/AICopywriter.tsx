
import React, { useState } from 'react';
import { generateMarketingStrategy } from '../services/geminiService';
import { MarketingStrategy } from '../types';

const AICopywriter: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [strategy, setStrategy] = useState<MarketingStrategy | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setError(null);
    try {
      const res = await generateMarketingStrategy(input);
      setStrategy(res);
    } catch (err) {
      setError("COMMUNICATION_LINK_ERROR: RETRY REQUIRED");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="engine" className="py-32 px-6 bg-[#010102] relative">
      <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 gap-16">
          {/* Header Section with Cybernetic Underline */}
          <div className="text-center space-y-6 flex flex-col items-center">
             <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 font-mono text-[10px] tracking-[0.3em] uppercase mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                Core Processor Ready
             </div>
             
             <div className="relative inline-block">
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                  Strategy <span className="text-cyan-400">Engine</span>
                </h2>
                
                {/* Advanced Cyber Underline Structure */}
                <div className="mt-4 flex flex-col items-center gap-1">
                  {/* Primary Glow Line */}
                  <div className="relative w-full h-[2px] bg-cyan-500/20 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-1/2 animate-[dataSweep_3s_infinite]"></div>
                    <div className="absolute inset-0 shadow-[0_0_15px_#00f2ff]"></div>
                  </div>
                  
                  {/* Complex Decal Line */}
                  <div className="flex items-center gap-4 w-full justify-center">
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
                    <div className="flex gap-2">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rotate-45 shadow-[0_0_8px_#00f2ff]"></div>
                      <div className="w-8 h-[3px] bg-cyan-500/40 rounded-full"></div>
                      <div className="w-1.5 h-1.5 bg-cyan-500 rotate-45 shadow-[0_0_8px_#00f2ff]"></div>
                    </div>
                    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
                  </div>
                  
                  {/* Technical Coordinates */}
                  <div className="flex justify-between w-full px-2 opacity-40">
                    <span className="font-mono text-[8px] text-cyan-500">MARK_V_BUILD</span>
                    <span className="font-mono text-[8px] text-cyan-500 tracking-[0.3em]">37.7749° N, 122.4194° W</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Input Area */}
          <div className="relative glass-card p-1 rounded-[2rem] overflow-hidden group">
            {/* Animated Border Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-indigo-500/20 opacity-50"></div>
            
            {/* HUD Corner Elements */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500 rounded-tl-3xl shadow-[-5px_-5px_15px_rgba(0,242,255,0.3)]"></div>
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-cyan-500 rounded-tr-3xl shadow-[5px_-5px_15px_rgba(0,242,255,0.3)]"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-indigo-500 rounded-bl-3xl shadow-[-5px_5px_15px_rgba(99,102,241,0.3)]"></div>
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-indigo-500 rounded-br-3xl shadow-[5px_5px_15px_rgba(99,102,241,0.3)]"></div>
            
            <div className="bg-[#050508]/90 backdrop-blur-xl rounded-[1.8rem] p-8 md:p-14 relative z-10 border border-white/5">
              <div className="flex items-center gap-2 mb-6 font-mono text-[9px] text-gray-500">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                SYSTEM_LISTENING_PROMPT_v2.0
              </div>
              
              <textarea
                className="w-full bg-transparent border-none text-xl md:text-2xl font-mono text-cyan-50 placeholder:text-gray-900 focus:outline-none min-h-[140px] resize-none"
                placeholder="PROMPT: DESCRIBE TARGET BUSINESS OBJECTIVE..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              
              <div className="mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex gap-10">
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Input_Entropy</span>
                    <span className="font-mono text-xs text-cyan-500">{input.length} BYTES</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">Priority_Level</span>
                    <span className="font-mono text-xs text-indigo-400">CLASS_OMEGA</span>
                  </div>
                </div>

                <button
                  onClick={handleGenerate}
                  disabled={loading}
                  className={`relative px-12 py-5 rounded-xl font-black uppercase tracking-tighter transition-all flex items-center gap-6 group overflow-hidden
                    ${loading ? 'bg-gray-900 text-gray-600 cursor-not-allowed' : 'bg-cyan-500 text-black hover:shadow-[0_0_40px_rgba(0,242,255,0.6)] active:scale-95'}`}
                >
                  <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  <span className="relative z-10 flex items-center gap-4">
                    {loading ? (
                      <>
                        <i className="fas fa-circle-notch animate-spin"></i>
                        CALCULATING...
                      </>
                    ) : (
                      <>
                        EXECUTE SEQUENCE
                        <i className="fas fa-bolt animate-pulse"></i>
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>

          {error && (
            <div className="flex items-center justify-center gap-4 text-red-500 font-mono text-sm bg-red-500/5 py-4 border border-red-500/20 rounded-lg animate-pulse">
              <i className="fas fa-exclamation-triangle"></i>
              {error}
            </div>
          )}

          {strategy && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-12 duration-1000">
              <div className="glass-card p-10 rounded-[2rem] border border-cyan-500/20 relative col-span-full group">
                <div className="absolute top-0 right-0 p-4 font-mono text-[8px] text-cyan-500 opacity-30">RESULT_ID: {Math.random().toString(16).slice(2, 8).toUpperCase()}</div>
                <span className="text-[10px] font-mono font-bold text-cyan-500 uppercase tracking-[0.3em] mb-4 block">Primary Vector // Headline</span>
                <h3 className="text-4xl md:text-5xl font-black mb-4 text-white group-hover:text-cyan-400 transition-colors drop-shadow-[0_0_10px_rgba(0,242,255,0.2)]">{strategy.headline}</h3>
                <p className="text-xl text-gray-500 italic font-light">"{strategy.slogan}"</p>
              </div>

              <div className="glass-card p-10 rounded-[2rem] border border-indigo-500/20 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6 block">Target Demographics</span>
                <p className="text-lg text-gray-200 mb-8 font-medium leading-relaxed">{strategy.targetAudience}</p>
                <div className="flex flex-wrap gap-2">
                  {strategy.channelSuggestions.map((c, i) => (
                    <span key={i} className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/30 rounded text-[10px] font-mono font-bold text-indigo-400 uppercase hover:bg-indigo-500/20 transition-colors cursor-default">{c}</span>
                  ))}
                </div>
              </div>

              <div className="glass-card p-10 rounded-[2rem] border border-indigo-500/20 relative group overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent"></div>
                <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-[0.3em] mb-6 block">Tactical Directives</span>
                <ul className="space-y-6">
                  {strategy.keyPoints.map((p, i) => (
                    <li key={i} className="flex gap-5 items-start group/item">
                      <span className="text-cyan-500 font-mono text-xs mt-1.5 bg-cyan-500/10 w-6 h-6 flex items-center justify-center rounded border border-cyan-500/20 group-hover/item:bg-cyan-500 group-hover/item:text-black transition-all">0{i+1}</span>
                      <p className="text-gray-400 group-hover:text-gray-200 transition-colors leading-relaxed">{p}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes dataSweep {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </section>
  );
};

export default AICopywriter;
