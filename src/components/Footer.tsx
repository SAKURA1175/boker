import { motion } from 'motion/react';
import { Mail, Phone, ArrowUpRight, Github } from 'lucide-react';
import Lanyard from './Lanyard';

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden border-t border-zinc-200 bg-[linear-gradient(180deg,#f8f6f2_0%,#ffffff_45%,#f4f1ea_100%)] px-6 py-16 md:px-16 md:py-20"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-90">
          <Lanyard position={[0, 0, 20]} fov={18} gravity={[0, -40, 0]} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_58%,rgba(255,255,255,0.02),rgba(255,255,255,0.08)_16%,rgba(255,255,255,0.32)_36%,rgba(247,243,236,0.76)_68%,rgba(255,255,255,0.95)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/72 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white via-white/78 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl pointer-events-none">
        <div className="grid min-h-[460px] grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(360px,420px)] lg:items-center lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-900 text-white shadow-sm">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-3xl font-display font-black tracking-tighter text-zinc-900 md:text-4xl">联系 / CONTACT.</h2>
                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500">Let&apos;s build something meaningful</p>
              </div>
            </div>

            <p className="mb-8 max-w-xl text-lg leading-relaxed font-light text-zinc-500 md:text-xl">
              我总是在寻找新的灵感与合作机会。无论是关于技术、设计还是哲学的探讨，我都非常欢迎。
            </p>

            <div className="pointer-events-auto flex flex-wrap gap-4">
              <a
                href="https://github.com/sakura1175"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-zinc-800 active:scale-95"
              >
                <Github className="h-5 w-5" />
                <span>GitHub</span>
              </a>
              <a
                href="mailto:a1175146250@163.com"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/85 px-6 py-3 text-sm font-bold uppercase tracking-widest text-zinc-900 transition-all hover:scale-105 hover:bg-zinc-50 active:scale-95"
              >
                <ArrowUpRight className="h-5 w-5" />
                <span>发送邮件</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-col justify-center lg:items-end lg:justify-self-end lg:translate-x-12"
          >
            <div className="ml-auto flex w-full max-w-md flex-col gap-4 text-left">
              <div className="pointer-events-auto rounded-3xl border border-zinc-200 bg-white/88 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md">
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
                    <Mail className="h-4 w-4" />
                  </div>
                  <p className="pt-3 text-xs font-bold uppercase tracking-widest text-zinc-500">电子邮箱 / Email</p>
                </div>
                <a
                  href="mailto:a1175146250@163.com"
                  className="group inline-flex w-full items-center justify-between gap-3 text-zinc-900 transition-all hover:text-zinc-500"
                >
                  <span className="min-w-0 break-all border-b-2 border-zinc-900 pb-1 text-[clamp(1.05rem,1.35vw,1.45rem)] font-semibold leading-[1.15] tracking-[-0.03em] transition-colors group-hover:border-zinc-500">a1175146250@163.com</span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
                </a>
              </div>

              <div className="pointer-events-auto rounded-3xl border border-zinc-200 bg-white/88 p-6 shadow-sm backdrop-blur-sm transition-all duration-500 hover:shadow-md">
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <p className="pt-3 text-xs font-bold uppercase tracking-widest text-zinc-500">联系电话 / Phone</p>
                </div>
                <a
                  href="tel:+8613946881998"
                  className="group inline-flex w-full items-center justify-between gap-3 text-zinc-900 transition-all hover:text-zinc-500"
                >
                  <span className="min-w-0 border-b-2 border-zinc-900 pb-1 text-[clamp(1.2rem,1.55vw,1.6rem)] font-semibold leading-tight tracking-[-0.02em] transition-colors group-hover:border-zinc-500">+86 139 4688 1998</span>
                  <ArrowUpRight className="h-6 w-6 shrink-0 transition-transform group-hover:-translate-y-1.5 group-hover:translate-x-1.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-zinc-200/80 pt-8 text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 md:flex-row">
          <div className="mb-4 md:mb-0">© {new Date().getFullYear()} SONG.XP / 宋新鹏.</div>
          <div className="pointer-events-auto flex items-center gap-6 rounded-full border border-zinc-200 bg-white px-5 py-3 shadow-sm">
            <a href="#" className="transition-colors hover:text-zinc-900">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-zinc-900">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
