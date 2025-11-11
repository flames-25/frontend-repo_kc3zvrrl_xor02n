import { Code, Cloud, Palette, Brain, ShoppingCart, Shield } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Services() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const base = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${base}/api/services`)
        const data = await res.json()
        setServices(data.services || [])
      } catch (e) {
        setServices([])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const icons = { Code, Cloud, Palette, Brain, ShoppingCart, Shield }

  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Layanan Kami</h2>
        <p className="text-slate-600 text-center mt-2">Solusi end-to-end untuk kebutuhan digital Anda.</p>
        {loading ? (
          <p className="text-center text-slate-500 mt-10">Memuat layanan...</p>
        ) : (
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = icons[s.icon] || Code
              return (
                <div key={s.title} className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition">
                  <div className="inline-flex p-2 rounded-md bg-blue-50 text-blue-600 mb-3"><Icon size={20} /></div>
                  <h3 className="font-semibold text-lg text-slate-800">{s.title}</h3>
                  <p className="text-slate-600 mt-2 text-sm">{s.description}</p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
