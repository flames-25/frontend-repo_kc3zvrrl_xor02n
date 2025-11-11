import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-slate-600 text-sm">
        © {new Date().getFullYear()} Flames Digital — All rights reserved.
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
