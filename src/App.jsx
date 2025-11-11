import Navbar from './Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <footer className="py-10 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Name. All rights reserved.</footer>
      </main>
    </div>
  )
}

export default App
