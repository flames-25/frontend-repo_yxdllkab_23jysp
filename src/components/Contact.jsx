import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // Demo form handler — replace with your backend endpoint when ready
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Thanks, Harshal! Your message has been noted — I will get back to you soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-600">Have a project in mind or just want to say hi?</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm grid grid-cols-1 gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" placeholder="Your name" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" name="email" placeholder="Email address" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <input name="phone" placeholder="Phone (optional)" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500" />
          <div className="flex items-center justify-between gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors">Send message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
          <p className="text-xs text-slate-500">Alternatively, reach me directly at harshal.upadhye70@gmail.com</p>
        </motion.form>
      </div>
    </section>
  )
}
