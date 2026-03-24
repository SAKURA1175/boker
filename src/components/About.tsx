import { motion } from 'motion/react';
import { Terminal, Cpu, Globe, User } from 'lucide-react';
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

export default function About() {
  return (
    <section id="about" className="relative py-40 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-50">
        <ImageTrail items={techIcons} variant={1} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
        >
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-zinc-900 flex items-center justify-center text-white">
              <User className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-display font-black tracking-tighter text-zinc-900">关于我 / ABOUT.</h2>
              <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Digital Architect & Thinker</p>
            </div>
          </div>
          
          <div className="space-y-8 text-xl text-zinc-500 font-light leading-relaxed">
            <p>
              你好，我是 <span className="text-zinc-900 font-bold">宋新鹏 (Song Xinpeng)</span>。我是一名全栈开发工程师，目前就读于哈尔滨信息工程学院。
            </p>
            <p>
              我专注于构建高效、智能的数字解决方案。我热衷于探索 AI 技术与传统软件工程的结合，通过 RAG、Prompt 设计及流程自动化，为复杂问题提供创新的解决思路。
            </p>
            <p>
              在我的视角里，代码不仅是逻辑的集合，更是通往数字智能的桥梁。我致力于将前沿技术转化为实际生产力。
            </p>
          </div>

          <div className="mt-16 flex space-x-6">
            <a href="mailto:a1175146250@163.com" className="px-8 py-4 rounded-full bg-zinc-900 text-white font-bold hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
              发送邮件
            </a>
            <a href="#contact" className="px-8 py-4 rounded-full bg-transparent border border-zinc-200 text-zinc-900 font-bold hover:bg-zinc-50 transition-all hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
              联系我
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 gap-6"
        >
          {/* Skill Cards */}
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <Terminal className="w-8 h-8 text-zinc-900 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Backend</span>
            </div>
            <h3 className="text-2xl font-display font-black mb-4 text-zinc-900">后端开发</h3>
            <p className="text-zinc-500 text-lg font-light">Spring Boot, Java, Python, MySQL, Redis, Docker</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <Cpu className="w-8 h-8 text-zinc-900 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">AI Integration</span>
            </div>
            <h3 className="text-2xl font-display font-black mb-4 text-zinc-900">AI 集成</h3>
            <p className="text-zinc-500 text-lg font-light">OpenAI API, Spring AI Alibaba, RAG, Prompt Design, Stable Diffusion</p>
          </div>
          
          <div className="p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-md transition-all duration-500 group">
            <div className="flex items-center justify-between mb-6">
              <Globe className="w-8 h-8 text-zinc-900 group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Frontend</span>
            </div>
            <h3 className="text-2xl font-display font-black mb-4 text-zinc-900">前端技术</h3>
            <p className="text-zinc-500 text-lg font-light">React, Next.js, TypeScript, TailwindCSS, Vue3</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
