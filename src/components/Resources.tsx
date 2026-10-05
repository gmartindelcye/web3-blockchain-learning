const resources = [
  {
    category: 'Core Learning',
    icon: '📚',
    items: [
      { name: 'Ethereum.org Developer Docs', description: 'The definitive, unbiased starting point for blockchain fundamentals', url: 'https://ethereum.org/en/developers/docs/' },
      { name: 'Cyfrin Updraft', description: 'Free, comprehensive courses by Patrick Collins — the gold standard for Web3 education', url: 'https://updraft.cyfrin.io/' },
      { name: 'Solidity by Example', description: 'Concise, annotated Solidity snippets organized by language feature', url: 'https://solidity-by-example.org/' },
      { name: 'CryptoZombies', description: 'Fun, interactive, gamified tutorial for learning Solidity basics', url: 'https://cryptozombies.io/' },
    ],
  },
  {
    category: 'Development Tools',
    icon: '🛠️',
    items: [
      { name: 'Foundry', description: 'Blazing fast, portable toolkit for Ethereum application development', url: 'https://getfoundry.sh' },
      { name: 'Wagmi + Viem', description: 'Modern, type-safe React hooks for Ethereum development', url: 'https://wagmi.sh/' },
      { name: 'RainbowKit', description: 'Best-in-class wallet connection modal for dApps', url: 'https://www.rainbowkit.com/' },
      { name: 'OpenZeppelin Contracts', description: 'Secure, audited smart contract library', url: 'https://docs.openzeppelin.com/contracts/' },
    ],
  },
  {
    category: 'Security',
    icon: '🛡️',
    items: [
      { name: 'Ethernaut', description: 'Web3 wargame — hack vulnerable contracts to learn exploits', url: 'https://ethernaut.openzeppelin.com/' },
      { name: 'Slither', description: 'Static analysis framework for Solidity security', url: 'https://github.com/crytic/slither' },
      { name: 'Rekt News', description: 'DeFi hack post-mortems and security incident reports', url: 'https://rekt.news/' },
      { name: 'Smart Contract Hacking Course', description: 'Learn attack vectors by actually exploiting contracts', url: 'https://smartcontractshacking.com/' },
    ],
  },
  {
    category: 'Community & Events',
    icon: '🌐',
    items: [
      { name: 'ETHGlobal', description: 'The largest Ethereum hackathon organizer worldwide', url: 'https://ethglobal.com/' },
      { name: 'Devpost', description: 'Discover and participate in blockchain hackathons', url: 'https://devpost.com/hackathons?search=&search_type=ideas&themes[]=blockchain' },
      { name: 'Whiteboard Crypto', description: 'Visual explanations of complex Web3 topics on YouTube', url: 'https://www.youtube.com/c/WhiteboardCrypto' },
      { name: 'Uniswap GitHub', description: 'Read production-grade DeFi smart contract code', url: 'https://github.com/Uniswap' },
    ],
  },
];

export default function Resources() {
  return (
    <section id="resources" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Curated <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Resources</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The best free and open-source resources for every stage of your Web3 learning journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {resources.map((section) => (
            <div key={section.category} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-xl font-bold text-white">{section.category}</h3>
              </div>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 bg-gray-900/50 rounded-xl border border-gray-700/30 hover:border-purple-500/50 hover:bg-gray-900/70 transition-all group"
                  >
                    <div>
                      <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors text-sm">
                        {item.name}
                      </h4>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

