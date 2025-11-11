export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Tentang Kami</h2>
          <p className="mt-4 text-slate-600">
            Kami adalah tim multidisiplin yang berfokus pada solusi digital modern. 
            Dengan pengalaman pada berbagai industri, kami membantu klien merancang, 
            membangun, dan mengembangkan produk digital yang berdampak.
          </p>
          <ul className="mt-4 text-slate-700 list-disc pl-5 space-y-1">
            <li>Berorientasi pada hasil</li>
            <li>Kolaborasi erat dengan klien</li>
            <li>Standar kualitas tinggi</li>
          </ul>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
            <img className="rounded-lg shadow" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop" alt="Office" />
            <img className="rounded-lg shadow" src="https://images.unsplash.com/photo-1585399058947-f68f9db58e5f?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxDb2xsYWJvcmF0aW9ufGVufDB8MHx8fDE3NjI4NTQ2NzB8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Collaboration" />
            <img className="rounded-lg shadow col-span-2" src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=1200&auto=format&fit=crop" alt="Workspace" />
          </div>
        </div>
      </div>
    </section>
  )
}
