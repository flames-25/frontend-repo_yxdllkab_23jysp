import { motion } from 'framer-motion'

const projects = [
  {
    title: 'University Query Assistant',
    description: 'Role-based AI Telegram chatbot with RAG using LangChain + FAISS for contextual and accurate retrieval.',
    image: 'https://images.unsplash.com/photo-1589652739890-77a7733b8a23?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVbml2ZXJzaXR5JTIwUXVlcnklMjBBc3Npc3RhbnR8ZW58MHwwfHx8MTc2Mjg4MzYyOXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Python', 'LangChain', 'FAISS', 'Flask']
  },
  {
    title: 'Bike Pool Ride-Sharing',
    description: 'Full‑stack web app connecting riders and passengers with authentication and realtime chat.',
    image: 'https://images.unsplash.com/photo-1732090040019-949ed35a0177?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxCaWtlJTIwUG9vbCUyMFJpZGUtU2hhcmluZ3xlbnwwfDB8fHwxNzYyODgzNjQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Flask', 'Socket.IO', 'Web']
  },
  {
    title: 'AI for Textile Waste',
    description: 'Computer vision pipeline for textile waste classification and lifecycle analysis to lower CO₂ impact.',
    image: 'https://images.unsplash.com/photo-1606053929013-311c13f97b5f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxBSSUyMGZvciUyMFRleHRpbGUlMjBXYXN0ZXxlbnwwfDB8fHwxNzYyODgzNjQxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['Computer Vision', 'Sustainability']
  },
  {
    title: 'RFID-Based Lock',
    description: 'Hardware prototype for controlled access using RFID readers and microcontrollers.',
    image: 'https://images.unsplash.com/photo-1696013910376-c56f76dd8178?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxSRklELUJhc2VkJTIwTG9ja3xlbnwwfDB8fHwxNzYyODgzNjYxfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#',
    tags: ['RFID', 'Arduino', 'Raspberry Pi']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Project Showcase</h2>
          <p className="mt-3 text-slate-600">Selected work across AI, web apps, and hardware.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
              </div>
              <div className="p-5">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-[#E9F5FF] text-[#007BFF]">{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-[#343A40]">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-3 py-1.5 text-sm rounded-lg bg-[#007BFF] text-white hover:brightness-110">View Case Study</button>
                  <button className="px-3 py-1.5 text-sm rounded-lg bg-white border border-slate-200 hover:bg-slate-50">GitHub</button>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/40 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
