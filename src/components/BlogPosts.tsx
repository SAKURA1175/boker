import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

const posts = [
  {
    title: "AI 代理的未来：从工具到伙伴的进化",
    excerpt: "探讨大语言模型如何通过工具调用和自主规划，从简单的聊天机器人演变为能够独立完成复杂任务的智能代理。",
    date: "2026-03-15",
    readTime: "8 min read",
    category: "人工智能",
    image: "https://picsum.photos/seed/ai-agent/800/600"
  },
  {
    title: "极简主义设计在数字产品中的哲学思考",
    excerpt: "为什么少即是多？本文深入分析了极简主义不仅是一种视觉风格，更是一种降低认知负荷、提升用户体验的深层逻辑。",
    date: "2026-03-10",
    readTime: "6 min read",
    category: "设计",
    image: "https://picsum.photos/seed/design/800/600"
  },
  {
    title: "Rust 语言：为何它是构建高性能系统的首选",
    excerpt: "从内存安全到零成本抽象，Rust 正在重新定义系统级编程。分享我在使用 Rust 构建高并发服务时的心得体会。",
    date: "2026-02-28",
    readTime: "12 min read",
    category: "编程",
    image: "https://picsum.photos/seed/rust/800/600"
  }
];

export default function BlogPosts() {
  return (
    <section id="blog" className="relative py-32 px-6 md:px-16 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6 text-white">
          深度阅读 / <span className="text-zinc-500">BLOG.</span>
        </h2>
        <p className="text-zinc-400 max-w-2xl text-xl font-light">
          记录关于技术、设计与生活的思考。
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-12">
        {posts.map((post, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-white/10 pb-12 last:border-0 p-6 -mx-6 rounded-3xl transition-all duration-500 hover:bg-white/5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
          >
            <div className="lg:col-span-5 overflow-hidden rounded-2xl bg-zinc-900 aspect-[4/3] lg:aspect-square">
              <motion.img
                src={post.image}
                alt={post.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
              />
            </div>

            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-6 text-xs font-bold uppercase tracking-widest text-zinc-500">
                <span className="px-2 py-1 bg-white/10 rounded text-zinc-300">{post.category}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6 text-white group-hover:text-zinc-400 transition-colors leading-tight">
                {post.title}
              </h3>

              <p className="text-zinc-400 text-lg mb-8 font-light leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>

              <a href="#" className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-white group-hover:translate-x-2 transition-transform">
                <span>阅读全文</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
