import { motion } from 'framer-motion'

const projects = [
  {
    title: 'E-Commerce UI',
    description: 'A modern storefront with shoppable micro-interactions and blazing-fast filtering.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['React', 'Tailwind', 'Stripe']
  },
  {
    title: 'Analytics Dashboard',
    description: 'Composable widgets, realtime charts, and role-based access control.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Next.js', 'D3', 'Auth']
  },
  {
    title: '3D Landing',
    description: 'Immersive hero with Spline and smooth scroll choreography.',
    image: 'https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tags: ['Spline', 'Framer Motion']
  }
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Project Showcase</h2>
          <p className="mt-3 text-slate-600">Selected work featuring interactive UIs and thoughtful UX.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-700">{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{p.description}</p>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
