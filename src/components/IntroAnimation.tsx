import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 500);
    const t2 = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        layoutId="logo"
        className="text-4xl md:text-6xl font-display font-black tracking-tighter text-zinc-900"
        initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
        animate={{ 
          scale: stage >= 1 ? 1 : 0.9, 
          opacity: stage >= 1 ? 1 : 0,
          filter: stage >= 1 ? "blur(0px)" : "blur(10px)"
        }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        思绪 / THOUGHTS.
      </motion.div>
    </motion.div>
  );
}
