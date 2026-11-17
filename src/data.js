// ===== Datos del negocio: cambia aquí lo que necesites =====

export const NEGOCIO = {
  nombre: 'Turismo Patrón',
  telefono: '523957830107', // 52 + 10 dígitos (WhatsApp)
  telefonoVisible: '395 783 0107',
  facebook: '', // pega aquí el link de Facebook cuando lo tengas
  base: 'Unión de San Antonio, Jalisco',
  baseCorta: 'Unión de San Antonio',
  // Lugares cercanos desde donde también pasamos por ti
  zona: ['Unión de San Antonio', 'Lagos de Moreno', 'San Diego de Alejandría', 'San Julián', 'León, Gto.'],
}

// Rutas a /public que funcionan también en GitHub Pages (subcarpeta)
export const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const waLink = (msg) =>
  `https://wa.me/${NEGOCIO.telefono}?text=${encodeURIComponent(msg)}`

// Fotos libres de Unsplash (licencia Unsplash: uso comercial gratuito)
const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=75`

export const VEHICULOS = [
  {
    id: 'hiace',
    nombre: 'Toyota Hiace',
    detalle: 'Hasta 14 pasajeros',
    img: asset('img/van.jpg'),
    tags: ['Aire acondicionado', 'Viajes largos', 'Grupos y familias'],
  },
  {
    id: 'rav4',
    nombre: 'Toyota RAV4',
    detalle: 'Hasta 4 pasajeros',
    extra: 'Imagen ilustrativa',
    img: asset('img/rav4.jpg'), // Foto: order_242 (CC BY-SA 2.0), Wikimedia Commons
    tags: ['Aire acondicionado', 'Viajes privados', 'Aeropuerto'],
  },
  {
    id: 'familiar',
    nombre: 'Unidad familiar',
    detalle: 'Hasta 7 pasajeros',
    extra: 'Próximamente',
    img: null,
    tags: ['Muy pronto'],
  },
]

// Sección "Sobre nosotros": por qué viajar con Turismo Patrón
export const CONFIANZA = [
  { icon: 'placa', t: 'Placas de turismo', d: 'Nuestras unidades están registradas para el transporte turístico.' },
  { icon: 'escudo', t: 'Unidades aseguradas', d: 'Viajas protegido durante todo el trayecto.' },
  { icon: 'llave', t: 'Mantenimiento al día', d: 'Unidades limpias, con aire acondicionado y revisadas antes de salir.' },
  { icon: 'mapa', t: 'Choferes de la región', d: 'Conocemos las carreteras y los mejores lugares de la zona.' },
]

export const DESTINOS = [
  {
    nombre: 'Pueblos Mágicos',
    desc: 'Calles empedradas, plazas y comida típica.',
    img: u('1717654543196-4d6826ec4bb8'),
  },
  {
    nombre: 'Santuarios',
    desc: 'Peregrinaciones y visitas a templos.',
    img: u('1561788635-faea961b6461'),
  },
  {
    nombre: 'Ruta del Tequila',
    desc: 'Campos de agave y destilerías.',
    img: u('1683313890724-ec2df503a9d6'),
  },
  {
    nombre: 'Naturaleza',
    desc: 'Cerros, presas, miradores y balnearios.',
    img: u('1772170598379-1f9da1c73cc5'),
  },
  {
    nombre: 'Playa',
    desc: 'Viajes largos bajo cotización.',
    img: u('1673455062571-38884c0f984a'),
  },
]

export const PASOS = [
  { n: '01', t: 'Escríbenos', d: 'Cuéntanos a dónde vas, la fecha y cuántas personas viajan.' },
  { n: '02', t: 'Te cotizamos', d: 'Recibes un precio claro y te recomendamos la unidad ideal.' },
  { n: '03', t: '¡Nos vamos!', d: 'Pasamos por ti puntualmente y viajas tranquilo.' },
]

export const FAQ = [
  {
    q: '¿Cuánto cuesta un viaje?',
    a: 'Depende del destino, la distancia, la unidad y si es viaje redondo. Mándanos tus datos por WhatsApp y te damos un precio claro sin compromiso.',
  },
  {
    q: '¿Hasta dónde viajan?',
    a: 'Salimos de Unión de San Antonio y a donde quieras: pueblos, ciudades, aeropuertos y destinos turísticos. Para viajes largos, pregúntanos y lo cotizamos.',
  },
  {
    q: '¿Desde dónde pasan por mí?',
    a: 'Estamos en Unión de San Antonio, Jalisco, y pasamos por ti en los alrededores: Lagos de Moreno, San Diego de Alejandría, San Julián y León, Guanajuato. Si estás en otro punto cercano, pregúntanos.',
  },
  {
    q: '¿Cuántas personas caben?',
    a: 'En la Toyota Hiace viajan hasta 14 pasajeros y en la RAV4 hasta 4. Te recomendamos la unidad según tu grupo.',
  },
  {
    q: '¿Con cuánta anticipación debo reservar?',
    a: 'Entre más pronto mejor, sobre todo para fines de semana, temporada alta y aeropuerto. Si es para hoy, escríbenos y vemos disponibilidad.',
  },
  {
    q: '¿Cómo se paga?',
    a: 'En efectivo o transferencia. Para viajes largos o en grupo se puede pedir un anticipo para apartar la fecha.',
  },
  {
    q: '¿Pueden esperarme durante el viaje?',
    a: 'Sí. En viajes redondos y tours te esperamos el tiempo acordado para que disfrutes sin prisas.',
  },
]
