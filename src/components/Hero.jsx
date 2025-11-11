import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="intro" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#F8F9FA]/90 via-[#F8F9FA]/75 to-[#F8F9FA]/92 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#343A40]"
        >
          Hi, I'm Harshal Upadhye
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-3xl mx-auto text-lg text-[#343A40]"
        >
          Aspiring AI Developer & Full‑Stack Enthusiast. I build RAG systems with LangChain/FAISS and practical web apps with Flask & Socket.IO.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-[#007BFF] text-white hover:brightness-110 transition-colors">Explore My Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white text-[#343A40] border border-slate-200 hover:bg-slate-50 transition-colors">Contact Me</a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-slate-600 text-sm"
        >
          Solapur, Maharashtra • +91 87677 17432 • harshal.upadhye70@gmail.com
        </motion.div>
      </div>
    </section>
  )
}
