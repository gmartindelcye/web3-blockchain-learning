const tips = [
  {
    icon: '📢',
    title: 'Build in Public',
    description: 'Web3 hiring is highly community-driven. Share your progress, bugs you fixed, and projects on X (Twitter) or LinkedIn. Your journey becomes your portfolio.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🏆',
    title: 'Participate in Hackathons',
    description: 'Join events on ETHGlobal or Devpost. Even if you don\'t win, the experience and networking are invaluable for landing roles in Web3.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📖',
    title: 'Read Production Code',
    description: 'Once comfortable, read the actual smart contracts of major protocols like Uniswap or OpenZeppelin. Understanding battle-tested code is the fastest path to mastery.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🔧',
    title: 'Leverage Your DevOps Skills',
    description: 'If you already use Docker, UFW, WireGuard, and Wazuh for secure infrastructure, you have a massive advantage in Web3 DevOps. Explore hosting your own RPC nodes, indexers (The Graph), or private mempool infrastructure.',
    color: 'from-orange-500 to-red-500',
  },
];

export default function ProTips() {
  return (
    <section id="tips" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Pro Tips for <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Success</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Beyond the curriculum — strategies to accelerate your career in Web3
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, i) => (
            <div key={i} className="bg-gray-800/50 border border-gray-700/50 rounded-2xl p-6 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${tip.color} flex items-center justify-center text-2xl shrink-0`}>
                  {tip.icon}
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-purple-300 transition-colors">
                    {tip.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Web3 Journey?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            The blockchain industry is growing rapidly. There's never been a better time to learn. 
            Start with Phase 1 and build your way up to production-ready dApps.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#study-path" className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all">
              Begin Phase 1
            </a>
            <a href="https://ethereum.org/en/developers/docs/" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-purple-500/50 text-purple-300 rounded-xl font-medium hover:bg-purple-500/10 transition-all">
              Ethereum.org Docs →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

