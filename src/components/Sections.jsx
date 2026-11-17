import { useState } from 'react'
import { asset, CONFIANZA, DESTINOS, FAQ, NEGOCIO, PASOS, VEHICULOS, waLink } from '../data'
import { ArrowRight, Check, Chevron, Facebook, IdCard, MapPin, Phone, Shield, Users, WhatsApp, Wrench } from './Icons'

export function SectionTitle({ kicker, children, accent, sub, center = false, dark = false }) {
  return (
    <div className={`reveal ${center ? 'mx-auto text-center' : ''} max-w-2xl`}>
      {kicker && <p className={`mb-2 text-sm font-bold uppercase tracking-[0.2em] ${dark ? 'text-turq-400' : 'text-turq-600'}`}>{kicker}</p>}
      <h2 className={`title text-4xl sm:text-5xl ${dark ? 'text-white' : 'text-navy-900'}`}>
        {children} {accent && <span className="text-turq-600">{accent}</span>}
      </h2>
      <div className={`underline-tri ${center ? 'mx-auto' : ''}`} />
      {sub && <p className={`mt-5 text-lg ${dark ? 'text-white/75' : 'text-navy-800/75'}`}>{sub}</p>}
    </div>
  )
}

/* ---------- Vehículos ---------- */
function CoveredCar() {
  return (
    <div className="relative grid h-full place-items-center bg-gradient-to-br from-arena to-[#e6dcc6]">
      <svg viewBox="0 0 320 150" className="w-[94%] translate-y-4 drop-shadow-xl" aria-hidden="true">
        <path d="M20 118c0-14 6-24 18-30l38-20c14-22 40-38 78-40h52c26 0 46 14 62 34l26 10c12 5 18 14 18 26v20H20z" fill="var(--color-navy-900)" />
        <path d="M60 86c40-10 120-16 230-4" stroke="#ffffff22" strokeWidth="3" fill="none" />
        <path d="M110 40c-6 24-8 52-6 96M200 30c4 30 4 66 0 106" stroke="#ffffff18" strokeWidth="3" fill="none" />
        <ellipse cx="160" cy="140" rx="150" ry="8" fill="#00000022" />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center text-white">
          <Users className="mx-auto size-9" />
          <p className="title mt-1 text-2xl">Próximamente</p>
        </div>
      </div>
    </div>
  )
}

export function Vehiculos() {
  return (
    <section id="vehiculos" className="mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6">
      <SectionTitle accent="Vehículos" sub="Unidades cómodas, limpias y seguras para cada tipo de viaje.">
        Nuestros
      </SectionTitle>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {VEHICULOS.map((v) => {
          const soon = !v.img
          return (
            <article key={v.id} className="reveal group overflow-hidden rounded-3xl bg-white shadow-xl shadow-navy-900/10 ring-1 ring-navy-900/5 transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                {soon ? (
                  <CoveredCar />
                ) : (
                  <img src={v.img} alt={`${v.nombre} de Turismo Patrón`} loading="lazy" className={`h-full w-full object-cover transition duration-700 group-hover:scale-105 ${v.id === 'hiace' ? 'object-[85%_center]' : ''}`} />
                )}
                {v.extra && (
                  <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-bold ${soon ? 'bg-oro-500 text-navy-950' : v.id === 'hiace' ? 'bg-turq-500 text-white' : 'bg-navy-900/70 text-white backdrop-blur'}`}>
                    {v.extra}
                  </span>
                )}
              </div>
              <div className="relative overflow-hidden bg-navy-900 px-6 pt-5 pb-6 text-white">
                <div className="corner-stripes absolute -right-2 bottom-0 h-full w-40" aria-hidden="true" />
                <div className="relative">
                  <h3 className="title text-2xl">{v.nombre}</h3>
                  <p className="mt-1 flex items-center gap-2 font-medium text-white/85">
                    <Users className="size-5 text-oro-500" /> {v.detalle}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {v.tags.map((t) => (
                      <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <p className="reveal mt-6 text-center text-sm text-navy-800/60">
        ¿No sabes cuál te conviene? Dinos cuántos viajan y te recomendamos la unidad ideal.
      </p>
    </section>
  )
}

/* ---------- Sobre nosotros / confianza ---------- */
const ICONOS = { placa: IdCard, escudo: Shield, llave: Wrench, mapa: MapPin }
const TONOS = ['bg-turq-500/10 text-turq-600', 'bg-oro-500/15 text-oro-600', 'bg-rojo-500/10 text-rojo-500', 'bg-verde-500/10 text-verde-500']

export function Nosotros() {
  return (
    <section id="nosotros" className="mx-auto max-w-7xl px-4 pb-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-xl shadow-navy-900/5 ring-1 ring-navy-900/5 sm:p-10 lg:p-12">
        <div className="corner-stripes pointer-events-none absolute -right-8 -top-2 h-24 w-72 rotate-180 opacity-90" aria-hidden="true" />
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionTitle kicker="Sobre nosotros" accent="tranquilo">
              Viaja seguro y
            </SectionTitle>
            <p className="reveal mt-5 text-lg text-navy-800/75">
              Somos de {NEGOCIO.base} y conocemos la región como nadie. Nuestro compromiso es que llegues bien, a tiempo y cómodo, ya sea en un viaje corto o en un tour con toda la familia.
            </p>
            <img src={asset('img/wordmark-dark.png')} alt="" className="reveal mt-8 h-14 w-auto opacity-90" />
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {CONFIANZA.map((c, i) => {
              const Icon = ICONOS[c.icon]
              return (
                <li key={c.t} className="reveal rounded-3xl bg-crema p-6 ring-1 ring-navy-900/5">
                  <span className={`grid size-12 place-items-center rounded-2xl ${TONOS[i]}`}><Icon /></span>
                  <h3 className="mt-4 text-lg font-bold text-navy-900">{c.t}</h3>
                  <p className="mt-1 text-sm text-navy-800/70">{c.d}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

/* ---------- Destinos ---------- */
export function Destinos({ onPick }) {
  return (
    <section id="destinos" className="bg-arena/60 py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_2fr] lg:items-center">
        <div>
          <SectionTitle accent="populares" sub={`Salimos de ${NEGOCIO.base} y sus alrededores hacia donde lo necesites. Elige una idea y te ayudamos a armar el viaje.`}>
            Destinos
          </SectionTitle>
          <div className="reveal mt-6 rounded-2xl bg-white p-4 shadow-sm">
            <p className="flex items-center gap-2 text-sm font-bold text-navy-900">
              <MapPin className="size-4 shrink-0 text-rojo-500" /> Pasamos por ti en:
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {NEGOCIO.zona.map((z) => (
                <li key={z} className="rounded-full bg-turq-500/10 px-3 py-1 text-xs font-semibold text-turq-700">{z}</li>
              ))}
            </ul>
            <p className="mt-3 text-xs text-navy-800/60">¿Tienes otro destino en mente? Escríbenos y lo cotizamos.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {DESTINOS.map((d, i) => (
            <button
              key={d.nombre}
              onClick={() => onPick(d.nombre)}
              className={`reveal group relative overflow-hidden rounded-3xl text-left shadow-lg shadow-navy-900/15 ${i === 0 ? 'col-span-2 row-span-2 min-h-[24rem] sm:col-span-1' : 'min-h-[12rem]'}`}
            >
              <img src={d.img} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-4 sm:p-5">
                <span className="flex items-center gap-1.5 text-lg font-bold text-white sm:text-xl">
                  <MapPin className="size-5 text-oro-500" /> {d.nombre}
                </span>
                <span className="mt-1 text-sm text-white/80">{d.desc}</span>
                <span className="mt-2 inline-flex items-center gap-1 text-sm font-bold text-oro-400 opacity-0 transition group-hover:opacity-100">
                  Cotizar <ArrowRight className="size-4" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- Cómo funciona ---------- */
export function Pasos() {
  const colors = ['text-oro-500', 'text-turq-500', 'text-rojo-500']
  return (
    <section id="como-funciona" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <SectionTitle center accent="3 pasos" sub="Sin apps ni registros. Todo por WhatsApp, rápido y directo.">
        Tu viaje en
      </SectionTitle>
      <ol className="mt-12 grid gap-6 md:grid-cols-3">
        {PASOS.map((p, i) => (
          <li key={p.n} className="reveal relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg shadow-navy-900/5 ring-1 ring-navy-900/5">
            <span className={`title block text-6xl ${colors[i]}`}>{p.n}</span>
            <h3 className="title mt-3 text-2xl text-navy-900">{p.t}</h3>
            <p className="mt-2 text-navy-800/75">{p.d}</p>
            {i < 2 && <ArrowRight className="absolute right-6 top-8 hidden size-7 text-navy-900/15 md:block" />}
          </li>
        ))}
      </ol>
    </section>
  )
}

/* ---------- Preguntas ---------- */
export function Faq() {
  const [open, setOpen] = useState(0)
  return (
    <section id="preguntas" className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
      <SectionTitle center accent="frecuentes">Preguntas</SectionTitle>
      <div className="mt-10 space-y-3">
        {FAQ.map((f, i) => {
          const isOpen = open === i
          return (
            <div key={f.q} className={`reveal overflow-hidden rounded-2xl bg-white ring-1 transition ${isOpen ? 'ring-turq-500/50 shadow-lg shadow-turq-500/10' : 'ring-navy-900/5'}`}>
              <button
                onClick={() => setOpen(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-navy-900"
                aria-expanded={isOpen}
              >
                {f.q}
                <Chevron className={`size-5 shrink-0 text-turq-600 transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className="overflow-hidden px-6 text-navy-800/75">
                  <span className="block pb-5">{f.a}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

/* ---------- Banner final ---------- */
export function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div className="reveal relative overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-10 text-center shadow-2xl shadow-navy-900/30 sm:px-10 md:text-left">
        <div className="corner-stripes absolute -right-10 bottom-0 h-full w-[45%] opacity-90" aria-hidden="true" />
        <img src={asset('img/emblem.png')} alt="" className="absolute -left-10 -bottom-8 hidden w-56 opacity-95 md:block" />
        <div className="relative flex flex-col items-center gap-6 md:flex-row md:justify-between md:pl-44">
          <div>
            <h2 className="title text-3xl text-white sm:text-4xl">¿Planeas un viaje?</h2>
            <p className="mt-2 text-white/80">Contáctanos y recibe una cotización sin compromiso.</p>
          </div>
          <a
            href={waLink('¡Hola Turismo Patrón! Quiero cotizar un viaje 🚐')}
            target="_blank"
            rel="noopener"
            className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-[#25d366] px-7 py-4 font-bold text-[#053d1e] shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5"
          >
            <WhatsApp className="size-6" /> Cotizar ahora
          </a>
        </div>
      </div>
    </section>
  )
}

/* ---------- Footer ---------- */
export function Footer() {
  return (
    <footer className="relative bg-navy-950 pt-14 pb-28 text-white/75 sm:pb-14">
      <div className="absolute inset-x-0 top-0 flex h-1.5" aria-hidden="true">
        <span className="flex-1 bg-turq-500" /><span className="flex-1 bg-oro-500" /><span className="flex-1 bg-rojo-500" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <img src={asset('img/emblem.png')} alt="" className="h-16 w-auto" />
            <img src={asset('img/wordmark.png')} alt={NEGOCIO.nombre} className="h-12 w-auto" />
          </div>
          <p className="mt-4 max-w-sm">Transporte turístico y privado desde {NEGOCIO.base} y alrededores. Te llevamos a donde quieras.</p>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Servicios</h3>
          <ul className="space-y-2 text-sm">
            {['Viajes turísticos', 'Traslados a aeropuerto', 'Viajes grupales', 'Eventos y peregrinaciones'].map((s) => (
              <li key={s} className="flex items-center gap-2"><Check className="size-4 text-turq-400" /> {s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-3 font-bold text-white">Contacto</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={waLink('¡Hola Turismo Patrón!')} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-oro-400">
                <WhatsApp className="size-5 text-[#25d366]" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`tel:+${NEGOCIO.telefono}`} className="flex items-center gap-2 hover:text-oro-400">
                <Phone className="size-5 text-oro-500" /> {NEGOCIO.telefonoVisible}
              </a>
            </li>
            {NEGOCIO.facebook && (
              <li>
                <a href={NEGOCIO.facebook} target="_blank" rel="noopener" className="flex items-center gap-2 hover:text-oro-400">
                  <Facebook className="size-5 text-turq-400" /> Facebook
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl px-4 text-xs text-white/40 sm:px-6">
        © {new Date().getFullYear()} {NEGOCIO.nombre}. Algunas fotos son ilustrativas (Unsplash). Foto de la RAV4:{' '}
        <a href="https://commons.wikimedia.org/wiki/File:Toyota_Rav4_2.5_2013_(14359533490).jpg" target="_blank" rel="noopener" className="underline hover:text-white/70">order_242</a>,{' '}
        <a href="https://creativecommons.org/licenses/by-sa/2.0/" target="_blank" rel="noopener" className="underline hover:text-white/70">CC BY-SA 2.0</a>.
      </p>
    </footer>
  )
}

export function WaFloat() {
  return (
    <a
      href={waLink('¡Hola Turismo Patrón! Quiero cotizar un viaje 🚐')}
      target="_blank"
      rel="noopener"
      aria-label="Escríbenos por WhatsApp"
      className="animate-pulse-ring fixed right-5 bottom-5 z-40 grid size-16 place-items-center rounded-full bg-[#25d366] text-white shadow-2xl transition hover:scale-105"
    >
      <WhatsApp className="size-9" />
    </a>
  )
}

