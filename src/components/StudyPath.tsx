import { useState } from 'react';

interface Resource {
  name: string;
  description: string;
  url: string;
}

interface Project {
  title: string;
  description: string;
}

interface Phase {
  id: number;
  title: string;
  subtitle: string;
  weeks: string;
  goal: string;
  icon: string;
  color: string;
  borderColor: string;
  resources: Resource[];
  projects: Project[];
}

const phases: Phase[] = [
  {
    id: 1,
    title: 'Foundations & Core Concepts',
    subtitle: 'Understand how blockchains work before writing any code',
    weeks: 'Weeks 1–2',
    goal: 'Understand how blockchains work, cryptography basics, consensus mechanisms, wallets, and the Ethereum Virtual Machine (EVM) before writing any code.',
    icon: '🎯',
    color: 'from-blue-500 to-cyan-500',
    borderColor: 'border-blue-500/30',
    resources: [
      { name: 'Ethereum.org Developer Docs', description: 'The definitive, unbiased starting point for blockchain fundamentals.', url: 'https://ethereum.org/en/developers/docs/' },
      { name: 'Cyfrin Updraft: Blockchain Basics', description: 'Free, high-quality video course covering the absolute essentials of Web3 architecture.', url: 'https://updraft.cyfrin.io/courses/blockchain-basics' },
      { name: 'Whiteboard Crypto (YouTube)', description: 'Excellent visual explanations of complex topics (PoS, Merkle Trees, Oracles).', url: 'https://www.youtube.com/c/WhiteboardCrypto' },
    ],
    projects: [
      { title: 'Write a Technical Breakdown', description: 'Create a Markdown document or blog post explaining how a transaction moves from a user\'s wallet to finality on the blockchain. This solidifies your understanding and starts your "build in public" journey.' },
    ],
  },
  {
    id: 2,
    title: 'Smart Contract Development',
    subtitle: 'Learn to write, test, and deploy smart contracts with Solidity & Foundry',
    weeks: 'Weeks 3–6',
    goal: 'Learn to write, test, and deploy smart contracts. Solidity is the primary language, and Foundry is currently the industry-standard framework (preferred over Hardhat for new projects due to speed and native Solidity testing).',
    icon: '💻',
    color: 'from-purple-500 to-pink-500',
    borderColor: 'border-purple-500/30',
    resources: [
      { name: 'Cyfrin Updraft: Solidity & Foundry Course', description: 'The most comprehensive, free, full-stack Web3 course available, taught by Patrick Collins.', url: 'https://updraft.cyfrin.io/courses/foundry' },
      { name: 'Solidity by Example', description: 'The official, concise collection of annotated Solidity snippets organized by language feature and pattern.', url: 'https://solidity-by-example.org/' },
      { name: 'CryptoZombies', description: 'A fun, interactive, gamified tutorial to learn Solidity basics by building a zombie-themed game.', url: 'https://cryptozombies.io/' },
    ],
    projects: [
      { title: 'Simple Storage & Counter', description: 'Write a basic contract, deploy it to a local Anvil node, and interact with it using Foundry\'s cast command.' },
      { title: 'Custom ERC-20 Token', description: 'Create a cryptocurrency with mint, burn, and transfer functions. Use OpenZeppelin Contracts to ensure security.' },
      { title: 'ERC-721 NFT Collection', description: 'Build a mintable NFT contract with dynamic metadata and a whitelist mechanism.' },
    ],
  },
  {
    id: 3,
    title: 'Full-Stack dApp Development',
    subtitle: 'Connect smart contracts to a modern frontend with wallet integration',
    weeks: 'Weeks 7–10',
    goal: 'Connect your smart contracts to a modern frontend, handle wallet connections, and manage blockchain state changes from a user interface.',
    icon: '🌐',
    color: 'from-green-500 to-emerald-500',
    borderColor: 'border-green-500/30',
    resources: [
      { name: 'Cyfrin Updraft: Full-Stack Web3', description: 'Teaches how to bridge the gap between smart contracts and frontend applications.', url: 'https://updraft.cyfrin.io/courses/full-stack-web3-development-crash-course' },
      { name: 'Wagmi + Viem Documentation', description: 'The modern standard for React Web3 development. Type-safe alternative to Ethers.js.', url: 'https://wagmi.sh/' },
      { name: 'RainbowKit', description: 'The best-in-class library for adding a beautiful, seamless wallet connection modal to your dApp.', url: 'https://www.rainbowkit.com/' },
    ],
    projects: [
      { title: 'NFT Minting dApp', description: 'Build a Next.js frontend that connects a wallet (via RainbowKit), displays the mint price, and allows users to mint the NFT you built in Phase 2.' },
      { title: 'Decentralized Crowdfunding Platform', description: 'A Kickstarter clone where users can create campaigns, pledge ETH, and the smart contract holds funds in escrow. If the goal is met, the creator can withdraw; if not, contributors can refund themselves.' },
    ],
  },
  {
    id: 4,
    title: 'Security & Best Practices',
    subtitle: 'Learn to write secure code — bugs in Web3 mean irreversible financial loss',
    weeks: 'Weeks 11–12',
    goal: 'Learn to write secure code. In Web3, bugs are not just inconveniences; they result in irreversible financial loss. Security is the most valuable skill you can develop.',
    icon: '🛡️',
    color: 'from-orange-500 to-red-500',
    borderColor: 'border-orange-500/30',
    resources: [
      { name: 'Cyfrin Updraft: Smart Contract Security', description: 'Deep dive into vulnerabilities, auditing, and secure development lifecycles.', url: 'https://updraft.cyfrin.io/courses/smart-contract-security' },
      { name: 'Ethernaut by OpenZeppelin', description: 'A Web3 wargame where you must hack purposely vulnerable smart contracts to learn how exploits work.', url: 'https://ethernaut.openzeppelin.com/' },
      { name: 'Slither', description: 'A static analysis framework for Solidity. Learn to run this on your code to catch common pitfalls automatically.', url: 'https://github.com/crytic/slither' },
    ],
    projects: [
      { title: 'Audit Report', description: 'Take a deliberately vulnerable contract (like one from Ethernaut), find the exploit, write a fixed version, and draft a professional mock "Audit Report" in Markdown detailing the vulnerability and remediation.' },
      { title: 'Advanced Testing', description: 'Add Foundry fuzz testing and invariant testing to your Crowdfunding dApp from Phase 3 to prove it cannot be drained under edge-case scenarios.' },
    ],
  },
  {
    id: 5,
    title: 'Advanced Topics & Capstone',
    subtitle: 'Specialize in a niche and build production-ready portfolio projects',
    weeks: 'Weeks 13+',
    goal: 'Specialize in a niche and build 1–2 complex, production-ready projects that will impress employers or protocol teams.',
    icon: '🚀',
    color: 'from-yellow-500 to-amber-500',
    borderColor: 'border-yellow-500/30',
    resources: [],
    projects: [
      { title: 'Decentralized Exchange (DEX) Clone', description: 'Build a simplified Uniswap V2 clone. Implement liquidity pools, token swapping, and a frontend to display pool reserves and execute trades.' },
      { title: 'DAO with On-Chain Governance', description: 'Create a governance token, a treasury, and a smart contract system that allows token holders to propose and vote on how treasury funds are spent.' },
      { title: 'On-Chain Attestation System', description: 'Use the Ethereum Attestation Service (EAS) to build a dApp that issues verifiable, on-chain credentials (e.g., "Completed Web3 Course").' },
    ],
  },
];

const advancedTopics = [
  { name: 'DeFi Mechanics', description: 'Automated Market Makers (AMMs), lending protocols, and flash loans' },
  { name: 'Layer 2 Scaling', description: 'Optimistic Rollups (Optimism, Arbitrum) and Zero-Knowledge (ZK) Rollups' },
  { name: 'Account Abstraction (ERC-4337)', description: 'Building smart contract wallets for gasless transactions and social recovery' },
  { name: 'Chainlink Oracles', description: 'Integrating real-world data (price feeds, VRF for randomness) into your contracts' },
];

export default function StudyPath() {
  const [activePhase, setActivePhase] = useState(1);
  const phase = phases.find(p => p.id === activePhase)!;

  return (
    <section id="study-path" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Developer <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Study Path</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A structured 13+ week curriculum taking you from blockchain fundamentals to production-ready dApps
          </p>
        </div>

        {/* Timeline navigation */}
        <div className="relative mb-12">
          {/* Timeline line */}
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-700 hidden md:block" />
          
          <div className="flex flex-col md:flex-row justify-between gap-4">
            {phases.map((p) => (
              <button
                key={p.id}
                onClick={() => setActivePhase(p.id)}
                className={`relative flex flex-col items-center gap-2 p-4 rounded-xl transition-all ${
                  activePhase === p.id
                    ? 'bg-gray-800 border border-purple-500/50 shadow-lg shadow-purple-500/10'
                    : 'hover:bg-gray-800/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl z-10 ${
                  activePhase === p.id
                    ? `bg-gradient-to-r ${p.color} shadow-lg`
                    : 'bg-gray-800 border-2 border-gray-600'
                }`}>
                  {p.icon}
                </div>
                <div className="text-center">
                  <div className={`text-xs font-bold ${activePhase === p.id ? 'text-purple-400' : 'text-gray-500'}`}>
                    Phase {p.id}
                  </div>
                  <div className={`text-sm font-medium ${activePhase === p.id ? 'text-white' : 'text-gray-400'}`}>
                    {p.title.split(' ')[0]}
                  </div>
                  <div className="text-xs text-gray-500 hidden md:block">{p.weeks}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Active phase detail */}
        <div className={`bg-gray-800/50 border ${phase.borderColor} rounded-2xl p-8 md:p-10`}>
          <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${phase.color} flex items-center justify-center text-3xl shrink-0`}>
              {phase.icon}
            </div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-sm font-bold bg-gradient-to-r ${phase.color} bg-clip-text text-transparent`}>
                  Phase {phase.id} • {phase.weeks}
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{phase.title}</h3>
              <p className="text-gray-400">{phase.subtitle}</p>
            </div>
          </div>

          {/* Goal */}
          <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-5 mb-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-lg">🎯</span>
              <h4 className="text-white font-semibold">Goal</h4>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">{phase.goal}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Resources */}
            {phase.resources.length > 0 && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-lg">📚</span>
                  <h4 className="text-white font-semibold">Resources</h4>
                </div>
                <div className="space-y-3">
                  {phase.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block bg-gray-900/50 border border-gray-700/30 rounded-xl p-4 hover:border-purple-500/50 hover:bg-gray-900/70 transition-all group"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h5 className="text-white font-medium group-hover:text-purple-300 transition-colors text-sm">
                            {resource.name}
                          </h5>
                          <p className="text-gray-500 text-xs mt-1">{resource.description}</p>
                        </div>
                        <svg className="w-4 h-4 text-gray-600 group-hover:text-purple-400 transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Projects/Milestones */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">✅</span>
                <h4 className="text-white font-semibold">Milestones & Projects</h4>
              </div>
              <div className="space-y-3">
                {phase.projects.map((project, i) => (
                  <div key={i} className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${phase.color} flex items-center justify-center text-xs font-bold text-white shrink-0 mt-0.5`}>
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="text-white font-medium text-sm">{project.title}</h5>
                        <p className="text-gray-400 text-xs mt-1 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Advanced topics for Phase 5 */}
          {phase.id === 5 && (
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">🔬</span>
                <h4 className="text-white font-semibold">Advanced Topics to Explore</h4>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {advancedTopics.map((topic, i) => (
                  <div key={i} className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-4">
                    <h5 className="text-white font-medium text-sm mb-1">{topic.name}</h5>
                    <p className="text-gray-400 text-xs">{topic.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
