import { motion } from 'framer-motion'
import { Code, Palette, Database, Sparkles } from 'lucide-react'

const skills = [
  { name: 'React / Next.js', level: 90, icon: Code },
  { name: 'TypeScript', level: 85, icon: Sparkles },
  { name: 'UI/UX & Prototyping', level: 80, icon: Palette },
  { name: 'APIs & Databases', level: 75, icon: Database },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Skills</h2>
          <p className="mt-3 text-slate-600">A snapshot of tools and technologies I use.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((s, idx) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <s.icon className="text-slate-700" />
                <h3 className="font-semibold text-slate-900">{s.name}</h3>
              </div>
              <div className="mt-4 h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500"
                  style={{ width: `${s.level}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
