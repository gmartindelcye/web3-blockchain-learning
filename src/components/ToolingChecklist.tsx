const toolCategories = [
  {
    category: 'Languages',
    icon: '🗣️',
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'Solidity', note: 'Primary smart contract language' },
      { name: 'TypeScript', note: 'Frontend & scripting' },
      { name: 'JavaScript', note: 'Web development' },
      { name: 'Rust', note: 'Bonus for L2/ZK development' },
    ],
  },
  {
    category: 'Smart Contract Framework',
    icon: '⚒️',
    color: 'from-purple-500 to-pink-500',
    tools: [
      { name: 'Foundry', note: 'Forge, Cast, Anvil' },
      { name: 'OpenZeppelin Contracts', note: 'Secure, audited contract library' },
    ],
  },
  {
    category: 'Frontend Framework',
    icon: '🖥️',
    color: 'from-green-500 to-emerald-500',
    tools: [
      { name: 'Next.js', note: 'React meta-framework' },
      { name: 'React', note: 'UI component library' },
      { name: 'Tailwind CSS', note: 'Utility-first CSS' },
    ],
  },
  {
    category: 'Web3 Libraries',
    icon: '🔌',
    color: 'from-orange-500 to-red-500',
    tools: [
      { name: 'Viem', note: 'Type-safe Ethereum library' },
      { name: 'Wagmi', note: 'React hooks for Ethereum' },
      { name: 'RainbowKit', note: 'Wallet connection UI' },
      { name: 'OpenZeppelin Contracts', note: 'Battle-tested Solidity library' },
    ],
  },
  {
    category: 'Security & Testing',
    icon: '🔒',
    color: 'from-red-500 to-pink-500',
    tools: [
      { name: 'Slither', note: 'Static analysis for Solidity' },
      { name: 'Foundry Fuzz Tests', note: 'Random input testing' },
      { name: 'Foundry Invariant Tests', note: 'Property-based testing' },
      { name: 'Ethernaut', note: 'Wargame for learning exploits' },
    ],
  },
  {
    category: 'Deployment',
    icon: '🚀',
    color: 'from-yellow-500 to-amber-500',
    tools: [
      { name: 'Sepolia/Holesky Testnet', note: 'Ethereum test networks' },
      { name: 'Vercel', note: 'Frontend deployment' },
      { name: 'IPFS / Arweave', note: 'Decentralized storage' },
    ],
  },
  {
    category: 'Version Control',
    icon: '📦',
    color: 'from-indigo-500 to-violet-500',
    tools: [
      { name: 'GitHub', note: 'Code hosting & collaboration' },
      { name: 'SSH Key Pairs', note: 'Secure authentication' },
    ],
  },
];

export default function ToolingChecklist() {
  return (
    <section id="tooling" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Essential <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Tooling Checklist</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The tools and technologies you'll need at each stage of your Web3 development journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {toolCategories.map((cat) => (
            <div key={cat.category} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-5 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center text-lg`}>
                  {cat.icon}
                </div>
                <h3 className="text-white font-semibold text-sm">{cat.category}</h3>
              </div>
              <div className="space-y-2">
                {cat.tools.map((tool) => (
                  <div key={tool.name} className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <div>
                      <span className="text-white text-sm font-medium">{tool.name}</span>
                      <span className="text-gray-500 text-xs block">{tool.note}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
