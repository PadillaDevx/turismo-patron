import { useEffect, useState } from 'react'
import { asset, NEGOCIO, waLink } from '../data'
import { Menu, WhatsApp, X } from './Icons'

const LINKS = [
  ['#inicio', 'Inicio'],
  ['#vehiculos', 'Vehículos'],
  ['#destinos', 'Destinos'],
  ['#como-funciona', 'Cómo funciona'],
  ['#cotizar', 'Cotizar'],
  ['#preguntas', 'Preguntas'],
]

export default function Navbar() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid || open ? 'bg-navy-900/95 shadow-xl shadow-navy-950/30 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2" aria-label={`${NEGOCIO.nombre}, inicio`}>
          <img src={asset('img/emblem.png')} alt="" className="h-14 w-auto drop-shadow-lg" />
          <img src={asset('img/wordmark.png')} alt={NEGOCIO.nombre} className="h-10 w-auto sm:h-11" />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} className="rounded-full px-3.5 py-2 text-[15px] font-semibold text-white/85 transition hover:bg-white/10 hover:text-white">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={waLink('¡Hola Turismo Patrón! Quiero cotizar un viaje 🚐')}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-full bg-[#25d366] px-4 py-2.5 text-sm font-bold text-[#053d1e] shadow-lg shadow-green-500/30 transition hover:-translate-y-0.5 hover:brightness-105 sm:px-5"
          >
            <WhatsApp className="size-5" />
            <span className="hidden sm:inline">Cotiza por WhatsApp</span>
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-11 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/10 px-4 pb-5 pt-2 lg:hidden">
          {LINKS.map(([href, label]) => (
            <li key={href}>
              <a href={href} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-base font-semibold text-white/90 hover:bg-white/10">
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
