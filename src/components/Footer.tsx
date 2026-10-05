export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W3</span>
              </div>
              <span className="text-white font-bold text-lg">Web3 Study Path</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              A comprehensive, open-source study path for aspiring Web3 developers. 
              From blockchain fundamentals to production-ready dApps — curated resources, 
              hands-on projects, and a clear roadmap to your first Web3 role.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Study Path</h4>
            <ul className="space-y-2">
              {[
                'Phase 1: Foundations',
                'Phase 2: Smart Contracts',
                'Phase 3: Full-Stack dApps',
                'Phase 4: Security',
                'Phase 5: Advanced & Capstone',
              ].map(item => (
                <li key={item}>
                  <a href="#study-path" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: 'Blockchain Demo', href: '#demo' },
                { label: 'Wallet Simulator', href: '#demo' },
                { label: 'Core Concepts', href: '#concepts' },
                { label: 'Tooling Checklist', href: '#tooling' },
                { label: 'Glossary', href: '#glossary' },
                { label: 'Resources', href: '#resources' },
              ].map(item => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Web3 Blockchain Learning. Open source educational platform.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gmartindelcye/web3-blockchain-learning" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <span className="text-gray-600 text-xs">Built with React + Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

