import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StudyPath from './components/StudyPath';
import BlockchainDemo from './components/BlockchainDemo';
import WalletSimulator from './components/WalletSimulator';
import Concepts from './components/Concepts';
import ToolingChecklist from './components/ToolingChecklist';
import Glossary from './components/Glossary';
import Resources from './components/Resources';
import ProTips from './components/ProTips';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <StudyPath />
      <BlockchainDemo />
      <WalletSimulator />
      <Concepts />
      <ToolingChecklist />
      <Glossary />
      <Resources />
      <ProTips />
      <Footer />
    </div>
  );
}
