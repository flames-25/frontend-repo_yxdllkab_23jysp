import { motion } from 'framer-motion'
import { Code, Database, Cpu, Atom, GitBranch, Globe } from 'lucide-react'

const categories = [
  {
    title: 'AI/ML & Data',
    icon: Atom,
    items: ['LangChain', 'FAISS', 'Pandas', 'NumPy', 'Generative AI', 'RAG', 'HuggingFace'],
  },
  {
    title: 'Programming',
    icon: Code,
    bars: [
      { label: 'Python', level: 90 },
      { label: 'C', level: 75 },
      { label: 'Core Java', level: 70 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    items: ['Flask', 'Socket.IO', 'HTML5', 'CSS3', 'JavaScript'],
  },
  {
    title: 'Tools & IoT',
    icon: Cpu,
    items: ['Git/GitHub', 'VS Code', 'RFID Systems', 'Arduino', 'Raspberry Pi'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[#F8F9FA]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#343A40]">Skills & Technical Stack</h2>
          <p className="mt-3 text-slate-600">The tools and technologies I work with.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <cat.icon className="text-[#343A40]" />
                <h3 className="font-semibold text-[#343A40]">{cat.title}</h3>
              </div>

              {cat.items && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span key={item} className="text-xs px-2 py-1 rounded-full bg-[#E9F5FF] text-[#007BFF]">{item}</span>
                  ))}
                </div>
              )}

              {cat.bars && (
                <div className="mt-4 space-y-3">
                  {cat.bars.map((b) => (
                    <div key={b.label}>
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-[#343A40]">{b.label}</span>
                        <span className="text-slate-500">{b.level}%</span>
                      </div>
                      <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-[#007BFF]" style={{ width: `${b.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
