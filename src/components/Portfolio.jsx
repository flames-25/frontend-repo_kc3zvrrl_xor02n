export default function Portfolio() {
  const items = [
    {
      title: 'Platform E-commerce',
      image: 'https://images.unsplash.com/photo-1519337265831-281ec6cc8514?q=80&w=1200&auto=format&fit=crop',
      desc: 'Skalabel, aman, dan siap promo besar.'
    },
    {
      title: 'Aplikasi Mobile Fintech',
      image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1200&auto=format&fit=crop',
      desc: 'Pembayaran cepat, KYC, dan integrasi bank.'
    },
    {
      title: 'Dashboard Analytics',
      image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEYXNoYm9hcmQlMjBBbmFseXRpY3N8ZW58MHwwfHx8MTc2Mjg1NDY3MHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
      desc: 'Insight real-time untuk keputusan bisnis.'
    }
  ]

  return (
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Portofolio</h2>
        <p className="text-slate-600 text-center mt-2">Sejumlah karya yang telah kami bangun.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group overflow-hidden rounded-xl border border-slate-200">
              <img src={it.image} alt={it.title} className="h-52 w-full object-cover group-hover:scale-105 transition" />
              <div className="p-5">
                <h3 className="font-semibold text-lg text-slate-800">{it.title}</h3>
                <p className="text-slate-600 text-sm mt-1">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
