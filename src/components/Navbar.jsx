import { useState } from 'react'
import { Menu, X, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Layanan', href: '#services' },
    { label: 'Tentang', href: '#about' },
    { label: 'Portofolio', href: '#portfolio' },
    { label: 'Kontak', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="p-2 rounded-md bg-gradient-to-tr from-blue-600 to-purple-600 text-white">
              <Rocket size={18} />
            </div>
            <span className="font-semibold text-slate-800">Flames Digital</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-slate-600 hover:text-slate-900 transition">
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
              Konsultasi Gratis
            </a>
          </nav>

          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="block py-2 text-slate-700" onClick={() => setOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-blue-600 text-white" onClick={() => setOpen(false)}>
              Konsultasi Gratis
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
