import { Menu, Github, Mail } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#intro', label: 'Intro' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/70 border border-white/40 shadow-sm rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#intro" className="text-xl font-semibold tracking-tight">
              <span className="bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent">Harshal Upadhye</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                <Github size={18} /> GitHub
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                <Mail size={18} /> Say hi
              </a>
            </nav>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-white/60 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu size={22} />
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-white/50 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block py-2 text-slate-700 hover:text-slate-900" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
