import { motion } from 'motion/react';
import { Github, Code2, Database, Cpu, Terminal } from 'lucide-react';
import { useRef, useEffect, useState, type ReactNode } from 'react';
import aisteamCover from '../assets/projects/aisteam.png';
import yinyueCover from '../assets/projects/yinyue.png';
import aishowCover from '../assets/projects/aishow.png';
import opencodeCover from '../assets/projects/opencode-plan-cards-plugin.png';
import bokerCover from '../assets/projects/boker.png';

interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  icon: ReactNode;
  cover: string;
  github: string;
  terminal: ReactNode;
}

const projects: ProjectItem[] = [
  {
    title: "TutorMarket AI 教学平台",
    description: "面向教学市场的 AI 老师平台，落地老师市场、邮箱登录、流式聊天、知识库与长期记忆等一期 MVP 骨架。",
    tags: ["Next.js", "Spring Boot", "FastAPI", "PostgreSQL"],
    icon: <Cpu className="w-5 h-5 text-zinc-700" />,
    cover: aisteamCover,
    github: "https://github.com/SAKURA1175/aisteam",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ start tutor-market-ai<br/>
        <span className="text-zinc-300">Teachers, chat and knowledge base ready.</span>
      </>
    )
  },
  {
    title: "AI 音乐分析与封面生成系统",
    description: "围绕音频识别、结构化特征分析、语义标签与 AI 视觉生成，构建一条从音乐理解到封面创作的完整主线。",
    tags: ["React", "Spring Boot", "MySQL", "RAG"],
    icon: <Code2 className="w-5 h-5 text-zinc-700" />,
    cover: yinyueCover,
    github: "https://github.com/SAKURA1175/yinyue",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ analyze audio.mp3<br/>
        <span className="text-zinc-300">Feature extraction and cover prompt generated.</span>
      </>
    )
  },
  {
    title: "智能学业辅助平台",
    description: "将旧版 SSM 教学系统迁移到 Spring Boot 3，并接入 Spring AI Alibaba、RAG 与文档解析能力，服务高校师生问答场景。",
    tags: ["Spring Boot 3", "Spring AI", "MyBatis", "Redis"],
    icon: <Database className="w-5 h-5 text-zinc-700" />,
    cover: aishowCover,
    github: "https://github.com/SAKURA1175/aishow",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ query campus-rag-engine<br/>
        <span className="text-zinc-300">Context retrieved and answer composed.</span>
      </>
    )
  },
  {
    title: "OpenCode Plan Cards Plugin",
    description: "为 OpenCode 桌面端与 CLI 增强 plan 卡片问答流程，通过插件方式注入澄清、确认与自适应追问机制。",
    tags: ["TypeScript", "OpenCode Plugin", "Node.js"],
    icon: <Terminal className="w-5 h-5 text-zinc-700" />,
    cover: opencodeCover,
    github: "https://github.com/SAKURA1175/opencode-plan-cards-plugin",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ /plan card on<br/>
        <span className="text-zinc-300">Clarification flow injected successfully.</span>
      </>
    )
  },
  {
    title: "个人作品集 / 博客站",
    description: "基于 React、Vite 与 Motion 构建的个人展示站，整合项目轮播、联系区 3D 吊牌和更鲜明的个人品牌表达。",
    tags: ["React", "Vite", "Three.js", "Tailwind"],
    icon: <Code2 className="w-5 h-5 text-zinc-700" />,
    cover: bokerCover,
    github: "https://github.com/SAKURA1175/boker",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ npm run dev<br/>
        <span className="text-zinc-300">Portfolio site ready on localhost:3000.</span>
      </>
    )
  }
];

export default function Projects() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="projects" className="relative py-32 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter mb-4 text-zinc-900">
            精选项目 / WORKS.
          </h2>
          <p className="text-zinc-500 max-w-2xl text-lg">
            这里展示的是我当前 GitHub 仓库里的真实项目，覆盖 AI 应用、全栈系统、插件工具和个人站点。向左或向右拖动查看更多。
          </p>
        </motion.div>
      </div>

      <div className="relative px-6 md:px-12" ref={carouselRef}>
        <motion.div 
          drag="x"
          dragConstraints={{ left: -width, right: 0 }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-8 cursor-grab active:cursor-grabbing"
          style={{ width: 'max-content' }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                rotateY: index % 2 === 0 ? 2 : -2,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="w-[360px] md:w-[460px] flex-shrink-0 flex flex-col justify-between p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 perspective-1000"
            >
              <div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mb-8 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100"
                >
                  <img
                    src={project.cover}
                    alt={`${project.title} cover`}
                    className="aspect-[5/3] w-full object-cover object-center"
                    loading="lazy"
                  />
                </motion.div>

                <motion.div 
                  whileHover={{ rotate: 15, scale: 1.1 }}
                  className="w-12 h-12 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center mb-8"
                >
                  <div className="text-zinc-900">
                    {project.icon}
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-display font-bold mb-4 text-zinc-900">
                  {project.title}
                </h3>
                
                <p className="text-zinc-500 mb-8 text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <motion.span 
                      key={tag} 
                      whileHover={{ scale: 1.05, backgroundColor: '#18181b', color: '#fff' }}
                      className="px-3 py-1.5 text-xs font-mono rounded-lg bg-zinc-50 border border-zinc-200 text-zinc-500 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                {/* Dark Preview Window */}
                <motion.div 
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1.02 }}
                  className="mb-8 rounded-xl overflow-hidden border border-zinc-800 bg-[#0D0D0D] shadow-2xl group/terminal"
                >
                  <div className="px-4 py-2.5 border-b border-zinc-800 bg-[#111] flex items-center justify-between">
                    <div className="flex items-center">
                      <Terminal className="w-3.5 h-3.5 text-zinc-500 mr-2" />
                      <span className="text-[11px] font-mono text-zinc-500">output</span>
                    </div>
                    <div className="flex space-x-1.5">
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                      <div className="w-2 h-2 rounded-full bg-zinc-800" />
                    </div>
                  </div>
                  <div className="p-5 font-mono text-xs text-zinc-400 leading-relaxed relative overflow-hidden">
                    <motion.div 
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/terminal:translate-x-full transition-transform duration-1000"
                    />
                    {project.terminal}
                  </div>
                </motion.div>

                <div className="flex items-center space-x-6 pt-6 border-t border-zinc-100">
                  <motion.a 
                    whileHover={{ x: 3 }}
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
