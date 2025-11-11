import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="intro" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          Creative Developer
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-5 max-w-2xl mx-auto text-lg text-slate-700"
        >
          I build delightful, performant web experiences with React, TypeScript, and modern tooling.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-8 flex items-center justify-center gap-4"
        >
          <a href="#projects" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">View Projects</a>
          <a href="#contact" className="px-5 py-3 rounded-xl bg-white/80 backdrop-blur border border-white/60 hover:bg-white transition-colors">Contact Me</a>
        </motion.div>
      </div>
    </section>
  )
}
