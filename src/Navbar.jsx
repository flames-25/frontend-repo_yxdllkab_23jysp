import { Menu, Github, Mail, FileText, Linkedin } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = [
    { href: '#intro', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${scrolled ? 'backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 shadow-sm' : ''}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 border border-white/40 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#intro" className="text-xl font-semibold tracking-tight">
              <span className="text-[#007BFF]">Harshal Upadhye</span>
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm hover:text-[#007BFF] transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-[#007BFF]">
                <Github size={18} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-[#007BFF]">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 text-sm hover:text-[#007BFF]">
                <Mail size={18} /> Say hi
              </a>
              <a href="/Harshal_Upadhye_Resume.pdf" className="inline-flex items-center gap-2 text-sm text-white bg-[#007BFF] px-3 py-1.5 rounded-lg hover:opacity-90">
                <FileText size={18} /> Resume
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
            <div className="md:hidden border-t px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block py-2 hover:text-[#007BFF]" onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-2">
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm">
                  <Linkedin size={18} />
                </a>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm">
                  <Mail size={18} />
                </a>
                <a href="/Harshal_Upadhye_Resume.pdf" className="ml-auto inline-flex items-center gap-2 text-sm text-white bg-[#007BFF] px-3 py-1.5 rounded-lg">
                  <FileText size={18} /> Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
