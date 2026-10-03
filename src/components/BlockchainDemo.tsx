import { useState } from 'react';

interface Block {
  index: number;
  timestamp: string;
  data: string;
  hash: string;
  previousHash: string;
  nonce: number;
}

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(8, '0') + 
         Math.abs(hash * 31).toString(16).padStart(8, '0');
}

function generateBlock(index: number, data: string, previousHash: string): Block {
  const timestamp = new Date().toLocaleTimeString();
  const nonce = Math.floor(Math.random() * 1000);
  const hash = simpleHash(`${index}${timestamp}${data}${previousHash}${nonce}`);
  return { index, timestamp, data, hash, previousHash, nonce };
}

export default function BlockchainDemo() {
  const [blocks, setBlocks] = useState<Block[]>([
    generateBlock(0, 'Genesis Block', '0000000000000000'),
  ]);
  const [newData, setNewData] = useState('');
  const [tamperedBlock, setTamperedBlock] = useState<number | null>(null);

  const addBlock = () => {
    if (!newData.trim()) return;
    const lastBlock = blocks[blocks.length - 1];
    const newBlock = generateBlock(blocks.length, newData, lastBlock.hash);
    setBlocks([...blocks, newBlock]);
    setNewData('');
    setTamperedBlock(null);
  };

  const tamperBlock = (index: number) => {
    const newBlocks = [...blocks];
    newBlocks[index] = { ...newBlocks[index], data: '⚠️ TAMPERED!' };
    setBlocks(newBlocks);
    setTamperedBlock(index);
  };

  const isChainValid = () => {
    for (let i = 1; i < blocks.length; i++) {
      const current = blocks[i];
      const previous = blocks[i - 1];
      if (current.previousHash !== previous.hash) return false;
      const expectedHash = simpleHash(`${current.index}${current.timestamp}${current.data}${current.previousHash}${current.nonce}`);
      if (current.hash !== expectedHash) return false;
    }
    return true;
  };

  const resetChain = () => {
    setBlocks([generateBlock(0, 'Genesis Block', '0000000000000000')]);
    setTamperedBlock(null);
  };

  const chainValid = isChainValid();

  return (
    <section id="demo" className="py-24 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Interactive <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Blockchain Demo</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Add blocks, tamper with data, and see how the chain detects modifications in real-time
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex gap-2">
            <input
              type="text"
              value={newData}
              onChange={(e) => setNewData(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addBlock()}
              placeholder="Enter transaction data..."
              className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 w-64"
            />
            <button
              onClick={addBlock}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-blue-500 transition-all"
            >
              Add Block
            </button>
          </div>
          <button
            onClick={resetChain}
            className="px-6 py-3 bg-gray-800 border border-gray-700 text-gray-300 rounded-xl font-medium hover:bg-gray-700 transition-all"
          >
            Reset Chain
          </button>
        </div>

        {/* Chain validity indicator */}
        <div className={`text-center mb-8 px-4 py-2 rounded-full inline-block mx-auto ${
          chainValid ? 'bg-green-500/10 border border-green-500/30' : 'bg-red-500/10 border border-red-500/30'
        }`}>
          <span className={`font-medium ${chainValid ? 'text-green-400' : 'text-red-400'}`}>
            {chainValid ? '✓ Chain is Valid' : '✗ Chain is INVALID — Tampering Detected!'}
          </span>
        </div>

        {/* Blocks visualization */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4 min-w-max px-4">
            {blocks.map((block, i) => (
              <div key={i} className="flex items-center">
                <div className={`w-64 bg-gray-800 border rounded-xl p-4 transition-all ${
                  tamperedBlock === i ? 'border-red-500 shadow-lg shadow-red-500/20' : 'border-gray-700'
                }`}>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2 py-1 rounded">
                      Block #{block.index}
                    </span>
                    <span className="text-xs text-gray-500">{block.timestamp}</span>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="text-gray-500 text-xs">Data:</span>
                      <p className={`font-mono truncate ${tamperedBlock === i ? 'text-red-400' : 'text-white'}`}>
                        {block.data}
                      </p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Hash:</span>
                      <p className="font-mono text-cyan-400 text-xs truncate">{block.hash}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Prev Hash:</span>
                      <p className="font-mono text-gray-400 text-xs truncate">{block.previousHash}</p>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs">Nonce:</span>
                      <span className="font-mono text-yellow-400 text-xs">{block.nonce}</span>
                    </div>
                  </div>

                  {i > 0 && (
                    <button
                      onClick={() => tamperBlock(i)}
                      className="mt-3 w-full text-xs py-1.5 bg-red-500/10 border border-red-500/30 text-red-400 rounded-lg hover:bg-red-500/20 transition-all"
                    >
                      Tamper Data
                    </button>
                  )}
                </div>

                {/* Chain link */}
                {i < blocks.length - 1 && (
                  <div className="flex items-center mx-2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500" />
                    <div className="w-3 h-3 border-2 border-purple-500 rounded-full bg-gray-900" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Explanation */}
        <div className="mt-12 bg-gray-800/30 border border-gray-700/50 rounded-xl p-6 max-w-3xl mx-auto">
          <h4 className="text-white font-semibold mb-2">💡 How it works:</h4>
          <ul className="text-gray-400 text-sm space-y-1">
            <li>• Each block contains data, a unique hash, and the hash of the previous block</li>
            <li>• Changing any data in a block invalidates its hash and breaks the chain</li>
            <li>• This is why blockchains are considered tamper-proof</li>
            <li>• Try clicking "Tamper Data" on any block to see the chain break!</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
