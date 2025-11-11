import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    await new Promise((r) => setTimeout(r, 800))
    setStatus('Message sent successfully! I will get back to you soon.')
    e.target.reset()
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#343A40]">Contact</h2>
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
            <input name="name" placeholder="Your name" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#007BFF]" />
            <input type="email" name="email" placeholder="Email address" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#007BFF]" />
          </div>
          <input name="subject" placeholder="Subject" className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#007BFF]" />
          <textarea name="message" placeholder="Message" rows="5" required className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none focus:ring-2 focus:ring-[#007BFF]" />
          <div className="flex items-center justify-between gap-3">
            <button type="submit" className="px-5 py-3 rounded-xl bg-[#28A745] text-white hover:brightness-110 transition-colors">Send Message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
          <p className="text-xs text-slate-500">Or reach me directly at harshal.upadhye70@gmail.com • +91 87677 17432 • Solapur, Maharashtra</p>
        </motion.form>
      </div>
    </section>
  )
}
