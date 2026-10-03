import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentBlock, setCurrentBlock] = useState(1892);
  const [typedText, setTypedText] = useState('');
  const fullText = 'From Zero to Web3 Developer';

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBlock(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900">
      {/* Animated background blocks */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div
            key={i}
            className="absolute border border-purple-500/20 rounded-lg animate-pulse"
            style={{
              width: `${30 + Math.random() * 70}px`,
              height: `${30 + Math.random() * 70}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }} />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Block counter */}
        <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-4 py-2 mb-8">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-purple-300 text-sm font-mono">Block #{currentBlock.toLocaleString()} • Ethereum Mainnet</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
            {typedText}
            <span className="animate-pulse text-purple-400">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-4 leading-relaxed">
          A comprehensive, 13+ week study path covering blockchain fundamentals, smart contract development,
          full-stack dApps, security auditing, and advanced DeFi/DAO systems.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Built with curated resources from Cyfrin Updraft, Solidity by Example, OpenZeppelin, and more.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#study-path" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40">
            Start the Study Path
          </a>
          <a href="#demo" className="px-8 py-4 border border-purple-500/50 text-purple-300 rounded-xl font-semibold hover:bg-purple-500/10 transition-all">
            Try Interactive Demo
          </a>
        </div>

        {/* Phase overview cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-16">
          {[
            { phase: '1', label: 'Foundations', weeks: 'Wk 1–2', color: 'from-blue-500 to-cyan-500' },
            { phase: '2', label: 'Smart Contracts', weeks: 'Wk 3–6', color: 'from-purple-500 to-pink-500' },
            { phase: '3', label: 'Full-Stack dApp', weeks: 'Wk 7–10', color: 'from-green-500 to-emerald-500' },
            { phase: '4', label: 'Security', weeks: 'Wk 11–12', color: 'from-orange-500 to-red-500' },
            { phase: '5', label: 'Advanced', weeks: 'Wk 13+', color: 'from-yellow-500 to-amber-500' },
          ].map((item) => (
            <a key={item.phase} href="#study-path" className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-3 hover:bg-gray-800/70 transition-all group">
              <div className={`text-xs font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-1`}>
                Phase {item.phase}
              </div>
              <div className="text-white text-sm font-medium">{item.label}</div>
              <div className="text-gray-500 text-xs mt-1">{item.weeks}</div>
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
