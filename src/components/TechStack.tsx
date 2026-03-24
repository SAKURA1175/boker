// @ts-nocheck
import { motion } from 'motion/react';
import ImageTrail from './ImageTrail';

const techIcons = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="relative py-32 border-y border-zinc-200 bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-50">
        <ImageTrail items={techIcons} variant={1} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-400 mb-4">
            Technology Stack / 技术栈
          </p>
          <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter text-zinc-900 mb-8">
            构建未来的工具集.
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg leading-relaxed">
            在鼠标移动时探索我的核心技术栈。我专注于构建高性能、可扩展且智能的现代 Web 应用程序。
          </p>
        </motion.div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 opacity-20 grayscale pointer-events-none">
          {techIcons.slice(0, 16).map((icon, i) => (
            <div key={i} className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-500">
              <img src={icon} alt="tech icon" className="w-12 h-12 object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
