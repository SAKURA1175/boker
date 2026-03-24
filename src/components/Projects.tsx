import { motion } from 'motion/react';
import { Github, ExternalLink, Code2, Database, Cpu, Terminal } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const projects = [
  {
    title: "AI 音乐分析与专辑封面生成系统",
    description: "面向音乐内容创作场景，解决风格精准转化视觉 Prompt 的难题。负责前后端全链路设计与联调。",
    tags: ["React", "Spring Boot", "MySQL"],
    icon: <Code2 className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ analyze audio.mp3<br/>
        <span className="text-zinc-300">Style: Melodic Techno</span>
      </>
    )
  },
  {
    title: "蛋壳伴学 AI 家庭学习陪伴平台",
    description: "面向 3-6 岁儿童家庭陪伴场景，构建包含家庭资料、老师角色、长期记忆的 AI 学习工作台。",
    tags: ["Next.js", "FastAPI", "PostgreSQL"],
    icon: <Cpu className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ start eggshell-companion<br/>
        <span className="text-zinc-300">Platform ready.</span>
      </>
    )
  },
  {
    title: "智能学业辅助平台",
    description: "面向高校师生场景，解决个性化辅导与资料检索效率低的问题。负责旧版 SSM 向 Spring Boot 3.x 迁移。",
    tags: ["Spring Boot 3", "RAG", "MyBatis"],
    icon: <Database className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ query rag-engine<br/>
        <span className="text-zinc-300">Response generated.</span>
      </>
    )
  },
  {
    title: "项目占位符 04",
    description: "这是一个待补充的项目描述。后续您可以在这里添加更多关于该项目的详细信息和技术细节。",
    tags: ["TypeScript", "Tailwind", "Node.js"],
    icon: <Terminal className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ loading project...<br/>
        <span className="text-zinc-300">Coming soon.</span>
      </>
    )
  },
  {
    title: "项目占位符 05",
    description: "这是一个待补充的项目描述。后续您可以在这里添加更多关于该项目的详细信息和技术细节。",
    tags: ["Vue", "Go", "Redis"],
    icon: <Code2 className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ initializing...<br/>
        <span className="text-zinc-300">Stay tuned.</span>
      </>
    )
  },
  {
    title: "项目占位符 06",
    description: "这是一个待补充的项目描述。后续您可以在这里添加更多关于该项目的详细信息和技术细节。",
    tags: ["Flutter", "Firebase", "Dart"],
    icon: <Terminal className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ building mobile app...<br/>
        <span className="text-zinc-300">Coming soon.</span>
      </>
    )
  },
  {
    title: "项目占位符 07",
    description: "这是一个待补充的项目描述。后续您可以在这里添加更多关于该项目的详细信息和技术细节。",
    tags: ["Rust", "Wasm", "WebGPU"],
    icon: <Cpu className="w-5 h-5 text-zinc-700" />,
    github: "#",
    demo: "#",
    terminal: (
      <>
        <span className="text-green-400">➜</span> ~ compiling rust...<br/>
        <span className="text-zinc-300">High performance.</span>
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
            我在 AI 代理、全栈开发及流程自动化领域的实践积累。向左或向右拖动查看更多。
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
              className="w-[350px] md:w-[450px] flex-shrink-0 flex flex-col justify-between p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 perspective-1000"
            >
              <div>
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
                  <motion.a 
                    whileHover={{ x: 3 }}
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center space-x-2 text-sm font-medium text-zinc-400 hover:text-zinc-900 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live Demo</span>
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
