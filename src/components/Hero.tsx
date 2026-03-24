import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import DrawingBackground from './DrawingBackground';

export default function Hero() {
  const ref = useRef(null);
  const [speed, setSpeed] = useState(1);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const handleAccelerate = () => {
    setSpeed(prev => prev === 1 ? 8 : 1);
  };

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-12 overflow-hidden cursor-pointer" onClick={handleAccelerate}>
        {/* Step-by-step Drawing Background */}
        <DrawingBackground speed={speed} />

      <motion.div 
        className="z-10 flex flex-col items-center text-center max-w-5xl mx-auto w-full pointer-events-none"
        style={{ y, opacity, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mb-10 pointer-events-auto"
        >
          <span className="px-5 py-2 rounded-full border border-zinc-900/10 bg-zinc-900/5 backdrop-blur-sm text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-500 shadow-sm">
            Full Stack & AI Developer
          </span>
        </motion.div>

        <motion.h1 
          className="text-6xl md:text-8xl lg:text-9xl font-display font-black tracking-[-0.04em] leading-[0.9] mb-16 text-zinc-900 pointer-events-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          宋新鹏 <br />
          <span className="text-zinc-500">SONG.XP.</span>
        </motion.h1>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mt-12 pt-12 border-t border-zinc-900/10 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
        >
          <div className="text-left mb-8 md:mb-0">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Focus Area</p>
            <p className="text-xl font-medium text-zinc-900">全栈开发 / AI 应用 / 流程自动化</p>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2">Based In</p>
            <p className="text-xl font-medium text-zinc-900">哈尔滨, 中国</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div 
        className="absolute top-1/4 -left-20 w-64 h-64 bg-zinc-900/5 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-zinc-900/5 rounded-full blur-3xl pointer-events-none"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 60, 0]
        }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
    </section>
  );
}
