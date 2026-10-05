import { useState } from 'react';

const glossary = [
  { term: 'Address', definition: 'A unique identifier for a blockchain account, typically a 42-character hexadecimal string starting with 0x.', category: 'Basics' },
  { term: 'Block', definition: 'A collection of transactions that are bundled together and added to the blockchain.', category: 'Basics' },
  { term: 'Gas', definition: 'The unit measuring the computational effort required to execute operations on Ethereum.', category: 'Basics' },
  { term: 'Hash', definition: 'A fixed-length output of a hash function that uniquely identifies input data.', category: 'Basics' },
  { term: 'Node', definition: 'A computer that participates in the blockchain network by maintaining a copy of the ledger.', category: 'Basics' },
  { term: 'Wallet', definition: 'Software or hardware that stores private keys and enables interaction with the blockchain.', category: 'Basics' },
  { term: 'Solidity', definition: 'The most popular programming language for writing smart contracts on Ethereum.', category: 'Development' },
  { term: 'ABI', definition: 'Application Binary Interface — defines how to interact with a smart contract\'s functions.', category: 'Development' },
  { term: 'EVM', definition: 'Ethereum Virtual Machine — the runtime environment for smart contracts on Ethereum.', category: 'Development' },
  { term: 'ERC-20', definition: 'The standard interface for fungible tokens on Ethereum (e.g., USDC, UNI).', category: 'Standards' },
  { term: 'ERC-721', definition: 'The standard interface for non-fungible tokens (NFTs) on Ethereum.', category: 'Standards' },
  { term: 'IPFS', definition: 'InterPlanetary File System — a decentralized storage network for storing and sharing data.', category: 'Infrastructure' },
  { term: 'Oracle', definition: 'A service that provides external data to smart contracts on the blockchain.', category: 'Infrastructure' },
  { term: 'Rollup', definition: 'A Layer 2 scaling solution that executes transactions off-chain but posts data to Layer 1.', category: 'Scaling' },
  { term: 'Bridge', definition: 'A protocol that enables transfer of assets and data between different blockchains.', category: 'Scaling' },
  { term: 'MEV', definition: 'Maximal Extractable Value — profit miners/validators can make by reordering transactions.', category: 'Advanced' },
  { term: 'Flash Loan', definition: 'An uncollateralized loan that must be borrowed and repaid within a single transaction.', category: 'Advanced' },
  { term: 'Zero-Knowledge Proof', definition: 'A cryptographic method to prove knowledge of information without revealing the information itself.', category: 'Advanced' },
];

const categories = ['All', ...Array.from(new Set(glossary.map(g => g.category)))];

export default function Glossary() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = glossary.filter(g => {
    const matchesSearch = g.term.toLowerCase().includes(search.toLowerCase()) || 
                          g.definition.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || g.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="glossary" className="py-24 bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web3 <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Glossary</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Quick reference for blockchain and Web3 terminology
          </p>
        </div>

        {/* Search and filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search terms..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Glossary grid */}
        <div className="grid gap-3">
          {filtered.map((item) => (
            <div key={item.term} className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4 hover:bg-gray-800/70 transition-all group">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-white font-semibold group-hover:text-purple-300 transition-colors">
                    {item.term}
                  </h4>
                  <p className="text-gray-400 text-sm mt-1">{item.definition}</p>
                </div>
                <span className="text-xs text-purple-400 bg-purple-500/10 px-2 py-1 rounded shrink-0">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No terms found matching your search.
          </div>
        )}
      </div>
    </section>
  );
}
