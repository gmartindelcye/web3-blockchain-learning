import { useState } from 'react';

const concepts = [
  {
    id: 'blockchain',
    icon: '🔗',
    title: 'Blockchain',
    subtitle: 'The Foundation',
    description: 'A distributed, immutable ledger that records transactions across a network of computers. Each block contains a cryptographic hash of the previous block, creating a chain.',
    details: [
      'Distributed across thousands of nodes worldwide',
      'Each block contains transaction data and a hash',
      'Once written, data cannot be altered (immutability)',
      'Consensus mechanisms ensure agreement on state',
    ],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'smart-contracts',
    icon: '📜',
    title: 'Smart Contracts',
    subtitle: 'Self-Executing Code',
    description: 'Programs that run on the blockchain and automatically execute when predetermined conditions are met. They eliminate the need for intermediaries.',
    details: [
      'Written in languages like Solidity or Rust',
      'Deployed to the blockchain and immutable once live',
      'Execute automatically when conditions are met',
      'Power DeFi, NFTs, DAOs, and more',
    ],
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'defi',
    icon: '💰',
    title: 'DeFi',
    subtitle: 'Decentralized Finance',
    description: 'Financial services built on blockchain technology that operate without traditional intermediaries like banks. Includes lending, borrowing, trading, and yield farming.',
    details: [
      'Lending & borrowing protocols (Aave, Compound)',
      'Decentralized exchanges (Uniswap, Curve)',
      'Yield farming and liquidity mining',
      'Stablecoins and synthetic assets',
    ],
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'nfts',
    icon: '🎨',
    title: 'NFTs',
    subtitle: 'Non-Fungible Tokens',
    description: 'Unique digital assets that represent ownership of items like art, music, gaming items, and more. Each token has unique properties and cannot be replicated.',
    details: [
      'Represent unique digital or physical assets',
      'Built on standards like ERC-721 and ERC-1155',
      'Enable true digital ownership and provenance',
      'Used in art, gaming, music, and real estate',
    ],
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'daos',
    icon: '🏛️',
    title: 'DAOs',
    subtitle: 'Decentralized Organizations',
    description: 'Organizations governed by smart contracts and token-holder voting rather than traditional hierarchical structures. Decisions are made collectively by the community.',
    details: [
      'Governed by token holders through proposals',
      'Treasury managed by smart contracts',
      'Transparent decision-making on-chain',
      'Used for protocol governance and communities',
    ],
    color: 'from-indigo-500 to-violet-500',
  },
  {
    id: 'consensus',
    icon: '⚡',
    title: 'Consensus',
    subtitle: 'Network Agreement',
    description: 'Mechanisms that allow distributed nodes to agree on the state of the blockchain. Different approaches offer trade-offs between security, speed, and decentralization.',
    details: [
      'Proof of Work (PoW) — Bitcoin\'s approach',
      'Proof of Stake (PoS) — Ethereum\'s current model',
      'Delegated Proof of Stake (DPoS)',
      'Proof of History (PoH) — Solana\'s innovation',
    ],
    color: 'from-yellow-500 to-amber-500',
  },
];

export default function Concepts() {
  const [activeConcept, setActiveConcept] = useState(concepts[0].id);
  const active = concepts.find(c => c.id === activeConcept)!;

  return (
    <section id="concepts" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Core <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Concepts</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Understand the fundamental building blocks of Web3 technology
          </p>
        </div>

        {/* Concept tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {concepts.map((concept) => (
            <button
              key={concept.id}
              onClick={() => setActiveConcept(concept.id)}
              className={`px-5 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
                activeConcept === concept.id
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="text-xl">{concept.icon}</span>
              <span className="hidden sm:inline">{concept.title}</span>
            </button>
          ))}
        </div>

        {/* Active concept display */}
        <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${active.color} text-white mb-4`}>
                {active.subtitle}
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">{active.title}</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{active.description}</p>
            </div>
            <div className="space-y-4">
              {active.details.map((detail, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${active.color} flex items-center justify-center text-white text-sm font-bold shrink-0`}>
                    {i + 1}
                  </div>
                  <span className="text-gray-300">{detail}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
