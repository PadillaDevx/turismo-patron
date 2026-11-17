import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { NEGOCIO, waLink } from '../data'
import { Clock, Phone, Shield, Wallet, WhatsApp } from './Icons'
import { SectionTitle } from './Sections'

const TIPOS = ['Solo ida', 'Viaje redondo', 'Tour / paseo', 'Aeropuerto', 'Evento / grupo']
const UNIDADES = ['Sin preferencia', 'Toyota Hiace (hasta 14)', 'Toyota RAV4 (hasta 4)']

const VACIO = { nombre: '', origen: '', destino: '', fecha: '', hora: '', pasajeros: 1, tipo: TIPOS[0], unidad: UNIDADES[0], notas: '' }

export const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3200,
  timerProgressBar: true,
  customClass: { popup: 'tp-toast' },
})

const swalBase = {
  customClass: { popup: 'tp-popup', confirmButton: 'tp-btn-wa', cancelButton: 'tp-btn-ghost', denyButton: 'tp-btn-oro' },
  buttonsStyling: false,
  reverseButtons: true,
}

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c])

const fechaBonita = (iso) =>
  iso ? new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' }) : ''

export default function Cotizador({ destinoInicial }) {
  const [f, setF] = useState(VACIO)
  const hoy = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (destinoInicial) setF((p) => ({ ...p, destino: destinoInicial.nombre, tipo: 'Tour / paseo' }))
  }, [destinoInicial])

  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }))

  const enviar = async (e) => {
    e.preventDefault()
    const pax = Number(f.pasajeros)
    let unidad = f.unidad

    const faltan = [
      !f.nombre.trim() && 'tu nombre',
      !f.origen.trim() && 'de dónde sales',
      !f.destino.trim() && 'a dónde vas',
      !f.fecha && 'la fecha',
    ].filter(Boolean)
    if (faltan.length) {
      return Swal.fire({ ...swalBase, icon: 'warning', title: 'Nos faltan unos datos', html: `Por favor completa <b>${faltan.length > 1 ? faltan.slice(0, -1).join(', ') + ' y ' + faltan.at(-1) : faltan[0]}</b>.`, confirmButtonText: 'Entendido', customClass: { ...swalBase.customClass, confirmButton: 'tp-btn-oro' } })
    }

    if (pax > 14) {
      const r = await Swal.fire({
        ...swalBase,
        icon: 'info',
        title: `¿Son ${pax} personas?`,
        html: 'Nuestra van lleva hasta <b>14 pasajeros</b>. Escríbenos y vemos la mejor opción para tu grupo.',
        showCancelButton: true,
        confirmButtonText: 'Continuar a WhatsApp',
        cancelButtonText: 'Corregir',
      })
      if (!r.isConfirmed) return
    } else if (pax > 4 && unidad.startsWith('Toyota RAV4')) {
      const r = await Swal.fire({
        ...swalBase,
        icon: 'question',
        title: 'La RAV4 es para 4',
        html: `Para <b>${pax} pasajeros</b> te recomendamos la <b>Toyota Hiace</b>. ¿La cambiamos?`,
        showDenyButton: true,
        confirmButtonText: 'Sí, usar Hiace',
        denyButtonText: 'Dejar como está',
      })
      if (r.isDismissed) return
      if (r.isConfirmed) unidad = UNIDADES[1]
    }

    const filas = [
      ['👤 Nombre', f.nombre],
      ['📍 Salida', f.origen],
      ['🏁 Destino', f.destino],
      ['📅 Fecha', fechaBonita(f.fecha) + (f.hora ? ` · ${f.hora} h` : '')],
      ['👥 Pasajeros', pax],
      ['🧭 Tipo', f.tipo],
      ['🚐 Unidad', unidad],
      ...(f.notas.trim() ? [['📝 Notas', f.notas.trim()]] : []),
    ]

    const ok = await Swal.fire({
      ...swalBase,
      title: '¿Todo bien con tu viaje?',
      html: `<div style="text-align:left;background:#fbf7ef;border-radius:16px;padding:14px 16px;margin-top:6px">${filas
        .map(([k, v]) => `<div style="display:flex;gap:10px;padding:5px 0;border-bottom:1px dashed #e6dcc6"><span style="min-width:110px;font-weight:600">${k}</span><span>${esc(v)}</span></div>`)
        .join('')}</div><p style="margin-top:14px;font-size:13px;opacity:.7">Se abrirá WhatsApp con tu mensaje listo. Solo dale enviar.</p>`,
      showCancelButton: true,
      confirmButtonText: 'Enviar por WhatsApp',
      cancelButtonText: 'Editar',
    })
    if (!ok.isConfirmed) return

    const msg = `¡Hola Turismo Patrón! 👋 Quiero cotizar un viaje:\n\n${filas.map(([k, v]) => `${k}: ${v}`).join('\n')}`
    const url = waLink(msg)
    const w = window.open(url, '_blank', 'noopener')
    if (!w) window.location.href = url // por si el navegador bloquea la ventana nueva
    Toast.fire({ icon: 'success', title: '¡Listo! Te respondemos muy pronto por WhatsApp.' })
    setF(VACIO)
  }

  const input = 'w-full rounded-2xl border-2 border-arena bg-white px-4 py-3 font-medium text-navy-900 placeholder:text-navy-800/40 transition focus:border-turq-500 focus:outline-none focus:ring-4 focus:ring-turq-500/15'
  const label = 'mb-1.5 block text-sm font-bold text-navy-900'

  return (
    <section id="cotizar" className="relative overflow-hidden bg-navy-900 py-20">
      <div className="corner-stripes pointer-events-none absolute -left-24 bottom-0 h-56 w-[38rem] -scale-x-100 opacity-25" aria-hidden="true" />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionTitle dark kicker="Cotización sin compromiso" sub="Llena tus datos y te mandamos el mensaje listo a WhatsApp. Te respondemos rapidito.">
            Cotiza tu <span className="text-oro-500">viaje</span>
          </SectionTitle>
          <ul className="reveal mt-8 space-y-4">
            {[
              [Clock, 'Respuesta rápida', 'Te contestamos lo antes posible.'],
              [Wallet, 'Precio claro', 'Sabes cuánto pagas antes de salir.'],
              [Shield, 'Viaja tranquilo', 'Unidades en buen estado y chofer responsable.'],
            ].map(([Icon, t, d]) => (
              <li key={t} className="flex gap-4">
                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white/10 text-oro-500"><Icon /></span>
                <span><b className="block text-white">{t}</b><span className="text-white/70">{d}</span></span>
              </li>
            ))}
          </ul>
          <a href={`tel:+${NEGOCIO.telefono}`} className="reveal mt-8 inline-flex items-center gap-3 text-white">
            <span className="grid size-12 place-items-center rounded-full bg-oro-500 text-navy-950"><Phone /></span>
            <span><span className="block text-sm text-white/60">¿Prefieres llamar?</span><b className="title text-2xl tracking-normal">{NEGOCIO.telefonoVisible}</b></span>
          </a>
        </div>

        <form onSubmit={enviar} noValidate className="reveal grid gap-4 rounded-[2rem] bg-crema p-6 shadow-2xl shadow-navy-950/40 sm:grid-cols-2 sm:p-8">
          <div className="sm:col-span-2">
            <label htmlFor="nombre" className={label}>Tu nombre</label>
            <input id="nombre" className={input} value={f.nombre} onChange={set('nombre')} placeholder="Ej. María López" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="origen" className={label}>¿De dónde sales?</label>
            <input id="origen" className={input} value={f.origen} onChange={set('origen')} placeholder="Ciudad o colonia" />
          </div>
          <div>
            <label htmlFor="destino" className={label}>¿A dónde vas?</label>
            <input id="destino" className={input} value={f.destino} onChange={set('destino')} placeholder="Destino" />
          </div>
          <div>
            <label htmlFor="fecha" className={label}>Fecha</label>
            <input id="fecha" type="date" min={hoy} className={input} value={f.fecha} onChange={set('fecha')} />
          </div>
          <div>
            <label htmlFor="hora" className={label}>Hora <span className="font-medium text-navy-800/50">(opcional)</span></label>
            <input id="hora" type="time" className={input} value={f.hora} onChange={set('hora')} />
          </div>
          <div>
            <label htmlFor="pasajeros" className={label}>Pasajeros</label>
            <input id="pasajeros" type="number" min="1" max="40" className={input} value={f.pasajeros} onChange={set('pasajeros')} />
          </div>
          <div>
            <label htmlFor="tipo" className={label}>Tipo de viaje</label>
            <select id="tipo" className={input} value={f.tipo} onChange={set('tipo')}>
              {TIPOS.map((t) => <option key={t}>{t}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <span className={label}>Unidad preferida</span>
            <div className="grid gap-2 sm:grid-cols-3">
              {UNIDADES.map((u) => (
                <label key={u} className={`cursor-pointer rounded-2xl border-2 px-3 py-2.5 text-center text-sm font-semibold transition ${f.unidad === u ? 'border-turq-500 bg-turq-500/10 text-navy-900' : 'border-arena bg-white text-navy-800/70 hover:border-turq-300'}`}>
                  <input type="radio" name="unidad" value={u} checked={f.unidad === u} onChange={set('unidad')} className="sr-only" />
                  {u}
                </label>
              ))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="notas" className={label}>Algo más <span className="font-medium text-navy-800/50">(opcional)</span></label>
            <textarea id="notas" rows="3" className={input} value={f.notas} onChange={set('notas')} placeholder="Paradas, equipaje, horario de vuelo, etc." />
          </div>
          <button type="submit" className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25d366] px-7 py-4 text-base font-bold text-[#053d1e] shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:brightness-105 sm:col-span-2">
            <WhatsApp className="size-6" /> Enviar por WhatsApp
          </button>
          <p className="text-center text-xs text-navy-800/55 sm:col-span-2">No guardamos tus datos: el mensaje va directo a WhatsApp.</p>
        </form>
      </div>
    </section>
  )
}
