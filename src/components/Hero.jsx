import { ArrowRight, CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center text-sm font-medium text-blue-700 bg-blue-50 px-3 py-1 rounded-full mb-4">
            <span className="mr-2">🚀</span> Digital Solution Partner
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Bangun Produk Digital Lebih Cepat dan Andal
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Kami membantu startup dan perusahaan mengembangkan aplikasi web, mobile, dan solusi cloud yang scalable.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
              Konsultasi Gratis
              <ArrowRight className="ml-2" size={18} />
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-slate-300 text-slate-700 hover:bg-slate-50">
              Lihat Layanan
            </a>
          </div>

          <ul className="mt-6 space-y-2 text-slate-700">
            {["Pengembangan Cepat", "Tim Berpengalaman", "Jaminan Kualitas"].map((i) => (
              <li key={i} className="flex items-center gap-2"><CheckCircle2 className="text-green-600" size={18} /> {i}</li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-600 to-purple-600 opacity-10 absolute inset-0 -z-10" />
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop" alt="Team" className="rounded-xl shadow-lg" />
        </div>
      </div>
    </section>
  )
}
