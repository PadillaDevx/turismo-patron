import { useEffect, useState } from 'react'
import Cotizador, { Toast } from './components/Cotizador'
import Hero, { FeatureBar } from './components/Hero'
import Navbar from './components/Navbar'
import { CtaBanner, Destinos, Faq, Footer, Pasos, Vehiculos, WaFloat } from './components/Sections'

export default function App() {
  const [destino, setDestino] = useState(null)

  // Animación de aparición al hacer scroll
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('is-visible'), io.unobserve(e.target))),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const elegirDestino = (nombre) => {
    setDestino({ nombre, t: Date.now() })
    document.getElementById('cotizar')?.scrollIntoView({ behavior: 'smooth' })
    Toast.fire({ icon: 'info', title: `${nombre}: completa tus datos y te cotizamos` })
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeatureBar />
        <Vehiculos />
        <Destinos onPick={elegirDestino} />
        <Pasos />
        <Cotizador destinoInicial={destino} />
        <Faq />
        <CtaBanner />
      </main>
      <Footer />
      <WaFloat />
    </>
  )
}
