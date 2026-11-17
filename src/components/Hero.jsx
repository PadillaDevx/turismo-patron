import { asset, NEGOCIO } from '../data'
import { Calendar, Car, MapPin, Plane, Shield, Users, WhatsApp } from './Icons'

const BADGES = [
  [Shield, 'Viajes seguros'],
  [Users, 'Hasta 14 pasajeros'],
  [Calendar, 'Cotización rápida'],
]

export default function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-[#001d3b] pt-28 pb-24 sm:pb-36 xl:flex xl:h-[max(680px,35vw)] xl:items-center xl:pt-24 xl:pb-28">
      {/* Fondo (compu): paisaje con la van y las franjas de la marca */}
      <img
        src={asset('img/hero.webp')}
        alt="Van de Turismo Patrón en carretera de montaña"
        className="absolute inset-0 -z-20 hidden h-full w-full object-cover object-[63%_center] xl:block"
        fetchPriority="high"
      />
      <div className="absolute inset-y-0 left-0 -z-10 hidden w-[48%] bg-gradient-to-r from-[#001d3b] via-[#001d3b]/85 to-transparent xl:block" />
      <div className="absolute inset-x-0 top-0 -z-10 h-32 bg-gradient-to-b from-navy-950/70 to-transparent" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 px-4 sm:px-6 xl:grid-cols-[1fr_1.15fr]">
        <div className="relative z-10 max-w-xl xl:max-w-[32rem]">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-oro-500/40 bg-oro-500/10 px-4 py-1.5 text-sm font-semibold text-oro-300">
            <MapPin className="size-4" /> Desde {NEGOCIO.baseCorta} y alrededores
          </span>

          <h1 className="reveal title mt-5 text-[2.75rem] leading-[1.02] text-white sm:text-6xl xl:text-[3.6rem]">
            Te llevamos <br className="hidden sm:block" />
            <span className="text-oro-500">a donde quieras</span>
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl xl:text-lg">
            Transporte turístico y privado con la confianza, comodidad y puntualidad de Turismo Patrón. Solos, en familia o en grupo.
          </p>

          <ul className="reveal mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {BADGES.map(([Icon, label]) => (
              <li key={label} className="flex items-center gap-2 text-[15px] font-medium text-white/90">
                <Icon className="size-5 text-oro-500" /> {label}
              </li>
            ))}
          </ul>

          <div className="reveal mt-9 flex flex-col gap-3 sm:flex-row xl:mt-8">
            <a href="#cotizar" className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-[#25d366] px-7 py-4 xl:px-6 text-base font-bold text-[#053d1e] shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:brightness-105">
              <WhatsApp className="size-6" /> Solicitar cotización
            </a>
            <a href="#vehiculos" className="inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-white/40 xl:px-6 bg-white/5 px-7 py-4 text-base font-bold text-white backdrop-blur transition hover:border-white hover:bg-white/10">
              <Car className="size-5" /> Conocer vehículos
            </a>
          </div>
        </div>

        {/* Imagen en celular / tablet: debajo del texto */}
        <div className="-mx-4 sm:-mx-6 lg:mx-auto lg:w-full lg:max-w-4xl lg:overflow-hidden lg:rounded-3xl xl:hidden">
          <img src={asset('img/hero-mobile.webp')} alt="Van de Turismo Patrón en carretera de montaña" className="aspect-[4/3] w-full object-cover object-center" />
        </div>
      </div>

      {/* Curva inferior hacia el fondo crema */}
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="absolute inset-x-0 -bottom-px h-16 w-full sm:h-24" aria-hidden="true">
        <path d="M0 120V40C240 95 520 120 760 110C1040 98 1260 60 1440 0V120Z" fill="var(--color-crema)" />
      </svg>
    </section>
  )
}

const FEATURES = [
  [MapPin, 'Viajes turísticos', 'Pueblos, santuarios y más'],
  [Plane, 'Traslados', 'Aeropuertos y eventos'],
  [Users, 'Viajes grupales', 'Familias, escuelas y empresas'],
  [Calendar, 'Reservación sencilla', 'Directo por WhatsApp'],
]

export function FeatureBar() {
  return (
    <div className="relative z-10 mx-auto -mt-24 max-w-6xl px-4 sm:-mt-28 sm:px-6 xl:-mt-20">
      <ul className="reveal grid grid-cols-2 gap-px overflow-hidden rounded-3xl bg-navy-900/10 shadow-2xl shadow-navy-900/15 ring-1 ring-navy-900/5 lg:grid-cols-4">
        {FEATURES.map(([Icon, t, d]) => (
          <li key={t} className="flex flex-col items-start gap-3 bg-white p-5 sm:flex-row sm:items-center sm:p-6">
            <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-turq-500/10 text-turq-600">
              <Icon className="size-6" />
            </span>
            <span>
              <b className="block text-[15px] font-bold text-navy-900 sm:text-base">{t}</b>
              <span className="text-sm text-navy-800/70">{d}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
