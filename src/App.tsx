import { useState } from 'react';
import { LayoutGroup, AnimatePresence } from 'motion/react';
import IntroAnimation from './components/IntroAnimation';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <LayoutGroup>
      <div className="relative min-h-screen text-zinc-800 selection:bg-zinc-200">
        <AnimatePresence>
          {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
        </AnimatePresence>
        
        <div className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
          <Navbar showLogo={introComplete} />
          
          <main>
            <Hero />
            <TechStack />
            <About />
            <Projects />
          </main>
          
          <Footer />
        </div>
      </div>
    </LayoutGroup>
  );
}
