import { motion, useSpring, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';

interface DrawingBackgroundProps {
  speed: number;
}

const paths = [
  // Large Circle
  { d: "M 500, 500 m -400, 0 a 400,400 0 1,0 800,0 a 400,400 0 1,0 -800,0", delay: 0, type: 'main' },
  // Large Square
  { d: "M 100,100 L 900,100 L 900,900 L 100,900 Z", delay: 2, type: 'main' },
  // Diagonal Line 1
  { d: "M 0,0 L 1000,1000", delay: 4, type: 'bg' },
  // Diagonal Line 2
  { d: "M 1000,0 L 0,1000", delay: 5, type: 'bg' },
  // Inner Circle
  { d: "M 500, 500 m -200, 0 a 200,200 0 1,0 400,0 a 200,200 0 1,0 -400,0", delay: 7, type: 'main' },
  // Horizontal Line
  { d: "M 0,500 L 1000,500", delay: 8, type: 'bg' },
  // Vertical Line
  { d: "M 500,0 L 500,1000", delay: 9, type: 'bg' },
  // Small Square Top Left
  { d: "M 150,150 L 300,150 L 300,300 L 150,300 Z", delay: 11, type: 'main' },
  // Small Square Bottom Right
  { d: "M 700,700 L 850,700 L 850,850 L 700,850 Z", delay: 12, type: 'main' },
  // Arc Top
  { d: "M 200,200 A 424,424 0 0,1 800,200", delay: 14, type: 'bg' },
  // Arc Bottom
  { d: "M 200,800 A 424,424 0 0,0 800,800", delay: 15, type: 'bg' },
];

function InteractivePath({ path, speed, mouseX, mouseY, containerRef }: any) {
  const pathRef = useRef<SVGPathElement>(null);
  const [center, setCenter] = useState({ x: 500, y: 500 });
  const lastMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef({ x: 0, y: 0 });

  // Physics-based springs for smooth disturbance
  const springConfig = path.type === 'main' 
    ? { stiffness: 100, damping: 35, mass: 2 } // Main lines: Very stable, heavy, slow recovery
    : { stiffness: 400, damping: 15, mass: 0.4 }; // Background lines: Very light, high frequency, fast recovery

  const translateX = useSpring(0, springConfig);
  const translateY = useSpring(0, springConfig);
  const rotate = useSpring(0, springConfig);
  const skewX = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  useEffect(() => {
    const updateDisturbance = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const mX = mouseX.get();
      const mY = mouseY.get();

      // Calculate mouse velocity
      velocity.current = {
        x: mX - lastMousePos.current.x,
        y: mY - lastMousePos.current.y
      };
      lastMousePos.current = { x: mX, y: mY };

      // Convert mouse coords to SVG space (0-1000)
      const svgX = ((mX - rect.left) / rect.width) * 1000;
      const svgY = ((mY - rect.top) / rect.height) * 1000;

      const dx = svgX - center.x;
      const dy = svgY - center.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Smaller radius for a more "localized" pluck feel
      const influenceRadius = path.type === 'main' ? 250 : 400;
      
      if (distance < influenceRadius) {
        // Sharper power curve for localized effect
        const power = (1 - distance / influenceRadius) ** 3;
        
        const velMag = Math.sqrt(velocity.current.x ** 2 + velocity.current.y ** 2);
        const velFactor = Math.min(velMag * 0.3, 15);
        const strength = (path.type === 'main' ? 25 : 50) + velFactor * 4;
        
        // Add a high-frequency jitter when mouse is very close to simulate "plucking" vibration
        const jitter = distance < 50 ? (Math.random() - 0.5) * 5 * power : 0;
        
        translateX.set((dx / distance) * strength * power + jitter);
        translateY.set((dy / distance) * strength * power + jitter);
        
        rotate.set((dx / influenceRadius) * (path.type === 'main' ? 2 : 10) * power);
        skewX.set((velocity.current.x / 8) * power * (path.type === 'main' ? 0.5 : 2.5));
        scale.set(1 + (path.type === 'main' ? 0.015 : 0.06) * power);
      } else {
        translateX.set(0);
        translateY.set(0);
        rotate.set(0);
        skewX.set(0);
        scale.set(1);
      }
    };

    const unsubscribeX = mouseX.on("change", updateDisturbance);
    const unsubscribeY = mouseY.on("change", updateDisturbance);

    return () => {
      unsubscribeX();
      unsubscribeY();
    };
  }, [center, mouseX, mouseY, containerRef, path.type, translateX, translateY, rotate, skewX, scale]);

  // Initial center calculation
  useEffect(() => {
    if (pathRef.current) {
      const bbox = pathRef.current.getBBox();
      setCenter({
        x: bbox.x + bbox.width / 2,
        y: bbox.y + bbox.height / 2
      });
    }
  }, []);

  return (
    <g>
      {/* Dashed Background Path (Blurred) */}
      <motion.path
        ref={pathRef}
        d={path.d}
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="15 30"
        className="text-zinc-300 blur-[10px] opacity-5"
        style={{ x: translateX, y: translateY, rotate, skewX, scale, originX: "500px", originY: "500px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 1.5, delay: path.delay / speed }}
      />
      
      {/* Solid Drawing Path */}
      <motion.path
        d={path.d}
        fill="none"
        stroke="currentColor"
        strokeWidth={path.type === 'main' ? 1.5 : 1}
        className={`${path.type === 'main' ? 'text-zinc-500' : 'text-zinc-400'} pointer-events-none`}
        style={{ x: translateX, y: translateY, rotate, skewX, scale, originX: "500px", originY: "500px" }}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: path.type === 'main' ? 0.8 : 0.4 
        }}
        transition={{
          pathLength: {
            duration: 5 / speed,
            delay: path.delay / speed,
            ease: "easeInOut"
          },
          opacity: {
            duration: 0.8,
            delay: path.delay / speed
          }
        }}
      />
    </g>
  );
}

export default function DrawingBackground({ speed }: DrawingBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
      <svg
        viewBox="0 0 1000 1000"
        className="w-full h-full opacity-30"
        preserveAspectRatio="xMidYMid slice"
      >
        {paths.map((path, i) => (
          <InteractivePath 
            key={i} 
            path={path} 
            speed={speed} 
            mouseX={mouseX} 
            mouseY={mouseY} 
            containerRef={containerRef}
          />
        ))}
      </svg>
    </div>
  );
}
