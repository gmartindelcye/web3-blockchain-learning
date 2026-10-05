# Web3 & Blockchain Learning Platform

A comprehensive, interactive learning platform for aspiring Web3 developers. This project includes both a **web application** with interactive demos and a **structured study path** document covering everything from blockchain fundamentals to production-ready dApp development.

## 📁 Project Structure

```
web3-blockchain-learning/
├── index.html                    # HTML entry point
├── src/                          # React application source
│   ├── App.tsx                   # Main app entry point
│   ├── main.tsx                  # React DOM root
│   ├── index.css                 # Global styles (Tailwind)
│   └── components/
│       ├── Navbar.tsx            # Responsive navigation
│       ├── Hero.tsx              # Landing hero with live block counter
│       ├── StudyPath.tsx         # 5-phase interactive curriculum
│       ├── BlockchainDemo.tsx    # Interactive blockchain simulation
│       ├── WalletSimulator.tsx   # Simulated wallet connection UX
│       ├── Concepts.tsx          # Core Web3 concept explorer
│       ├── ToolingChecklist.tsx  # Developer tools reference
│       ├── Glossary.tsx          # Searchable Web3 glossary
│       ├── Resources.tsx         # Curated learning resources
│       ├── ProTips.tsx           # Career advice & tips
│       └── Footer.tsx            # Site footer
├── public/                       # Static assets
├── web3_study_path.md            # 📚 Full study path documentation
└── README.md                     # This file
```

## 🗺️ Study Path Documentation

The complete curriculum is documented in **[`web3_study_path.md`](./web3_study_path.md)**. It covers:

| Phase | Topic | Duration |
|-------|-------|----------|
| 1 | Foundations & Core Concepts | Weeks 1–2 |
| 2 | Smart Contract Development (Solidity + Foundry) | Weeks 3–6 |
| 3 | Full-Stack dApp Development | Weeks 7–10 |
| 4 | Security & Best Practices | Weeks 11–12 |
| 5 | Advanced Topics & Capstone Portfolio | Weeks 13+ |

Each phase includes curated resources, hands-on projects, and clear milestones.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/gmartindelcye/web3-blockchain-learning.git
cd web3-blockchain-learning

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling

## 📚 Key Resources Referenced

- [Ethereum.org Developer Docs](https://ethereum.org/en/developers/docs/)
- [Cyfrin Updraft](https://updraft.cyfrin.io/)
- [Solidity by Example](https://solidity-by-example.org/)
- [CryptoZombies](https://cryptozombies.io/)
- [Foundry](https://getfoundry.sh/)
- [Wagmi + Viem](https://wagmi.sh/)
- [RainbowKit](https://www.rainbowkit.com/)
- [Ethernaut](https://ethernaut.openzeppelin.com/)

## 📄 License

This project is open source and available for educational purposes.
