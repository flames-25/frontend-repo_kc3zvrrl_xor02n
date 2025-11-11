import { useState } from 'react'
import { Send, Mail, Phone, Building2, User } from 'lucide-react'

export default function Contact() {
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSent(false)
    try {
      const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${base}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Gagal mengirim pesan')
      setSent(true)
      setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const Input = ({ icon: Icon, ...props }) => (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
        <Icon size={16} />
      </div>
      <input {...props} className="w-full pl-9 pr-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
  )

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Hubungi Kami</h2>
          <p className="mt-3 text-slate-600">Ceritakan kebutuhan Anda, kami siap membantu dari ide hingga implementasi.</p>
          <ul className="mt-6 space-y-2 text-slate-700 text-sm">
            <li>Email: hello@flames.digital</li>
            <li>WhatsApp: +62 812-3456-7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input icon={User} name="name" placeholder="Nama Lengkap" value={form.name} onChange={handleChange} required />
            <Input icon={Mail} type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
            <Input icon={Phone} name="phone" placeholder="No. Telepon (opsional)" value={form.phone} onChange={handleChange} />
            <Input icon={Building2} name="company" placeholder="Perusahaan (opsional)" value={form.company} onChange={handleChange} />
            <input name="subject" placeholder="Subjek (opsional)" value={form.subject} onChange={handleChange} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea name="message" placeholder="Ceritakan kebutuhan Anda" value={form.message} onChange={handleChange} rows={5} className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            {error && <p className="text-sm text-red-600">{error}</p>}
            {sent && <p className="text-sm text-green-600">Pesan berhasil dikirim. Kami akan segera menghubungi Anda.</p>}
            <button disabled={loading} className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60">
              <Send size={16} className="mr-2" /> {loading ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
