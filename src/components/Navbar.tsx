import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Github, Mail } from 'lucide-react';

export default function Navbar({ showLogo }: { showLogo: boolean }) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 transition-all duration-500 md:px-16 ${
      isScrolled 
        ? 'py-4 bg-white/80 backdrop-blur-md border-b border-zinc-200/50 shadow-sm' 
        : 'py-8 bg-transparent border-b-transparent'
    }`}>
      <div className="flex items-center">
        {showLogo && (
          <motion.div
            layoutId="logo"
            className="text-xl md:text-2xl font-display font-black tracking-tighter text-zinc-900"
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            思绪.
          </motion.div>
        )}
      </div>
      
      <div className="hidden md:flex items-center space-x-12 text-sm font-medium text-zinc-500">
        <a href="#about" className="hover:text-zinc-900 transition-colors">关于</a>
        <a href="#projects" className="hover:text-zinc-900 transition-colors">项目</a>
        <a href="#contact" className="hover:text-zinc-900 transition-colors">联系</a>
      </div>

      <div className="flex items-center space-x-6">
        <a href="https://github.com/sakura1175" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-zinc-900 transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="mailto:a1175146250@163.com" className="text-zinc-400 hover:text-zinc-900 transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </nav>
  );
}
