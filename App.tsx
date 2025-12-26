
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfileSection from './components/ProfileSection';
import AICopywriter from './components/AICopywriter';
import FinalManifesto from './components/FinalManifesto';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#010102] text-white selection:bg-cyan-500 selection:text-black relative">
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <ProfileSection />
        <AICopywriter />
        <FinalManifesto />
      </main>

      {/* Network Status Floating Overlay */}
      <div className="fixed bottom-0 left-0 w-full z-50 pointer-events-none px-6 py-4 flex justify-between items-end">
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] text-gray-500 uppercase">Traffic_Load</span>
            <div className="flex gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className={`w-1 h-3 ${i < 8 ? 'bg-cyan-500' : 'bg-gray-800'} animate-pulse`} style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[8px] text-gray-500 uppercase">Server_Latency</span>
            <span className="font-mono text-[10px] text-cyan-400 font-bold">0.02ms</span>
          </div>
        </div>
        
        <div className="bg-[#050508]/80 backdrop-blur-md border border-white/10 p-3 rounded-lg flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
          <span className="font-mono text-[9px] text-white tracking-[0.2em] uppercase font-bold">
            Vercel Global Edge Infrastructure: OPTIMIZED
          </span>
        </div>
      </div>

      <footer className="py-32 px-6 border-t border-white/5 bg-[#010102] relative">
        <div className="absolute inset-0 cyber-grid opacity-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 relative z-10">
          <div className="flex flex-col gap-3">
            <span className="font-black text-3xl tracking-tighter italic uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-indigo-500 drop-shadow-[0_0_12px_rgba(0,242,255,0.4)]">
                AI SOLUTIONS ARCHITECT
              </span>
            </span>
            <p className="text-gray-700 text-[10px] font-mono tracking-[0.4em] uppercase">Powered by Vercel Global Anycast Network // [STABLE_BUILD]</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-10 text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-gray-600">
            <a href="#" className="hover:text-cyan-400 transition-all">// Interface</a>
            <a href="#" className="hover:text-cyan-400 transition-all">// Protocols</a>
            <a href="#" className="hover:text-cyan-400 transition-all">// Encryption</a>
          </div>
        </div>
        <div className="mt-16 text-center text-[9px] font-mono text-gray-800 uppercase tracking-[0.5em]">
          End_of_Transmission_2025 // Global_Release
        </div>
      </footer>
    </div>
  );
};

export default App;
