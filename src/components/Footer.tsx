import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Github } from 'lucide-react';
import { Suspense, lazy } from 'react';

const Lanyard = lazy(() => import('./Lanyard'));

export default function Footer() {
  return (
    <footer id="contact" className="relative py-32 px-6 md:px-16 border-t border-zinc-200 bg-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-40">
        <Suspense fallback={null}>
          <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} transparent={true} />
        </Suspense>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12 text-zinc-900">
              保持 <br />
              <span className="text-zinc-400">联系.</span>
            </h2>
            <p className="text-zinc-500 max-w-xl mb-12 text-xl font-light leading-relaxed">
              我总是在寻找新的灵感与合作机会。无论是关于技术、设计还是哲学的探讨，我都非常欢迎。
            </p>
            <div className="flex space-x-6">
              <a href="https://github.com/sakura1175" target="_blank" rel="noreferrer" className="flex items-center space-x-2 text-zinc-900 font-bold uppercase tracking-widest text-sm hover:text-zinc-500 transition-colors">
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-end lg:items-end"
          >
            <div className="flex flex-col space-y-12 text-left lg:text-right">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">电子邮箱 / EMAIL</p>
                <a href="mailto:songxinpeng07@gmail.com" className="group inline-flex items-center space-x-4 text-2xl md:text-4xl font-display font-black text-zinc-900 border-b-4 border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-500 transition-all">
                  <span>songxinpeng07@gmail.com</span>
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
              </div>
              
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-4">联系电话 / PHONE</p>
                <a href="tel:+8613946881998" className="group inline-flex items-center space-x-4 text-2xl md:text-4xl font-display font-black text-zinc-900 border-b-4 border-zinc-900 pb-2 hover:text-zinc-500 hover:border-zinc-500 transition-all">
                  <span>+86 139 4688 1998</span>
                  <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-zinc-100 text-zinc-400 text-xs font-bold uppercase tracking-widest">
          <div className="mb-4 md:mb-0">© {new Date().getFullYear()} SONG.XP / 宋新鹏.</div>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
