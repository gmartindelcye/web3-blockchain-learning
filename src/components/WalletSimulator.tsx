import { useState } from 'react';

interface WalletState {
  connected: boolean;
  address: string;
  balance: string;
  network: string;
}

export default function WalletSimulator() {
  const [wallet, setWallet] = useState<WalletState>({
    connected: false,
    address: '',
    balance: '',
    network: '',
  });
  const [txHistory, setTxHistory] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const connectWallet = () => {
    setIsProcessing(true);
    setTimeout(() => {
      const addr = '0x' + Array.from({ length: 40 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      setWallet({
        connected: true,
        address: addr,
        balance: (Math.random() * 10).toFixed(4),
        network: 'Ethereum Mainnet',
      });
      setTxHistory(prev => [...prev, `Connected wallet: ${addr.slice(0, 6)}...${addr.slice(-4)}`]);
      setIsProcessing(false);
    }, 1500);
  };

  const sendTransaction = () => {
    if (!wallet.connected) return;
    setIsProcessing(true);
    setTimeout(() => {
      const amount = (Math.random() * 0.1).toFixed(6);
      const recipient = '0x' + Array.from({ length: 8 }, () => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('') + '...';
      const newBalance = (parseFloat(wallet.balance) - parseFloat(amount)).toFixed(4);
      setWallet(prev => ({ ...prev, balance: newBalance }));
      setTxHistory(prev => [...prev, `Sent ${amount} ETH to ${recipient} ✓`]);
      setIsProcessing(false);
    }, 2000);
  };

  const disconnect = () => {
    setWallet({ connected: false, address: '', balance: '', network: '' });
    setTxHistory(prev => [...prev, 'Wallet disconnected']);
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Wallet <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">Simulator</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Experience how Web3 wallet connections work — no real funds involved
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Wallet Panel */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold text-lg">Wallet</h3>
              <div className={`w-3 h-3 rounded-full ${wallet.connected ? 'bg-green-400 animate-pulse' : 'bg-gray-600'}`} />
            </div>

            {!wallet.connected ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">🦊</div>
                <p className="text-gray-400 mb-6">Connect a simulated wallet to get started</p>
                <button
                  onClick={connectWallet}
                  disabled={isProcessing}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:from-purple-500 hover:to-pink-500 transition-all disabled:opacity-50"
                >
                  {isProcessing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Connecting...
                    </span>
                  ) : 'Connect Wallet'}
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="text-sm text-gray-500 mb-1">Address</div>
                  <div className="font-mono text-purple-300 text-sm">
                    {wallet.address.slice(0, 10)}...{wallet.address.slice(-8)}
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="text-sm text-gray-500 mb-1">Balance</div>
                  <div className="text-2xl font-bold text-white">{wallet.balance} ETH</div>
                </div>
                <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-700/50">
                  <div className="text-sm text-gray-500 mb-1">Network</div>
                  <div className="text-green-400 font-medium">{wallet.network}</div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={sendTransaction}
                    disabled={isProcessing}
                    className="flex-1 py-2.5 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium hover:from-green-500 hover:to-emerald-500 transition-all disabled:opacity-50 text-sm"
                  >
                    {isProcessing ? 'Processing...' : 'Send ETH'}
                  </button>
                  <button
                    onClick={disconnect}
                    className="px-4 py-2.5 bg-gray-700 text-gray-300 rounded-xl font-medium hover:bg-gray-600 transition-all text-sm"
                  >
                    Disconnect
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Transaction History */}
          <div className="bg-gray-800/50 border border-gray-700 rounded-2xl p-6">
            <h3 className="text-white font-bold text-lg mb-6">Transaction History</h3>
            <div className="space-y-2 max-h-80 overflow-y-auto">
              {txHistory.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No transactions yet</p>
              ) : (
                txHistory.map((tx, i) => (
                  <div key={i} className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-3 border border-gray-700/30">
                    <div className="w-2 h-2 rounded-full bg-green-400 shrink-0" />
                    <span className="text-sm text-gray-300 font-mono truncate">{tx}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

