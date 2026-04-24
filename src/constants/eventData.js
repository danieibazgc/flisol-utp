// ─────────────────────────────────────────────
// FLISoL UTP 2026 – Constantes centralizadas
// ─────────────────────────────────────────────

export const EVENT = {
  name: 'FLISoL UTP 2026',
  fullName: 'Festival Latinoamericano de Instalación de Software Libre',
  year: 2026,

  // Fecha y hora del evento (zona horaria de Lima, UTC-5)
  date: 'Sábado 25 de abril de 2026',
  dateShort: '25 de abril',
  startTime: '9:00 a.m.',
  // ISO 8601 para el contador regresivo
  targetDateISO: '2026-04-25T09:00:00-05:00',

  // Ubicación
  venue: 'Universidad Tecnológica del Perú',
  city: 'Lima',
  country: 'Perú',
  locationFull: 'Universidad Tecnológica del Perú – Lima',
  auditorium: 'Auditorio UTP Torre Arequipa, Lima',

  // Costo
  cost: '¡Totalmente gratuito!',
  costShort: 'Gratis',

  // Comunidad organizadora
  organizer: 'LEAD UTP',
  contactEmail: 'leadutp@gmail.com',

  // URLs
  sessionizeUrl: 'https://sessionize.com/flisol-utp-2026',
  flisolOfficialUrl: 'https://flisol.info/FLISOL2026/Peru/Lima-UTP',
  flisolInfoUrl: 'https://flisol.info',
  websiteUrl: 'https://flisolutp.tech',
  leadInstagramUrl: 'https://www.instagram.com/lead_utp/',
  leadLinkedinUrl: 'https://www.linkedin.com/company/lead-utp/',

  // Call for Speakers
  cfpDeadline: '15 de abril de 2026',
  cfpDeadlineShort: '15 Abr 2026',

  // Imágenes
  logoFlisol: '/images/flisol-utp-logo.png',
  logoLead: '/images/lead-utp-logo.png',

  // SEO
  seoTitle: 'FLISoL UTP 2026 | 25 de abril · Lima, Perú',
  seoDescription:
    'FLISoL UTP 2026 – Festival Latinoamericano de Instalación de Software Libre. 25 de abril en la Universidad Tecnológica del Perú (Lima). Charlas, talleres e instalaciones de GNU/Linux. Entrada gratuita. Organizado por LEAD UTP.',
  seoImage: '/images/flisol-logo.png',
}

export const NAV_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: '¿Qué es FLISoL?', href: '#que-es-flisol' },
  { label: 'Actividades', href: '#actividades' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Agenda', href: '#agenda' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
]

export const SCHEDULE = [
  {
    time: '09:00am - 09:20am',
    title: 'Registro y Apertura del evento',
    description: 'Bienvenida por LEAD UTP e información general del día.',
    type: 'opening',
  },
  {
    time: '09:20am - 10:10am',
    title: 'Flutter Play: Creando Juegos Multiplataforma',
    description: 'A cargo de Angela Enciso Camacho',
    type: 'talk',
  },
  {
    time: '10:10am - 10:20am',
    title: 'Intermedio',
    description: 'Tiempo de conexión y preparación para la siguiente ponencia.',
    type: 'break',
  },
  {
    time: '10:20am - 11:10am',
    title: 'Bypassing MFA - Microsoft',
    description: 'A cargo de Gianpaul Custodio (Aka. HackeMate)',
    type: 'talk',
  },
  {
    time: '11:10am - 11:30am',
    title: 'Dinámica 1 🎁',
    description: 'Actividades y sorpresas con los asistentes.',
    type: 'activity',
  },
  {
    time: '11:30am - 12:20pm',
    title: '¿No sabes diseñar una web? Skills y Agentes de IA al rescate',
    description: 'A cargo de Jose Flores Chamba',
    type: 'talk',
  },
  {
    time: '12:20pm - 12:30pm',
    title: 'Intermedio',
    description: 'Tiempo de conexión y preparación para la siguiente ponencia.',
    type: 'break',
  },
  {
    time: '12:30pm - 01:20pm',
    title: 'Tu código no habla solo: habilidades humanas para crecer en el mundo open source',
    description: 'A cargo de Hugo Casanova',
    type: 'talk',
  },
  {
    time: '01:20pm - 01:40pm',
    title: 'Coffe Break ☕',
    description: 'Espacio breve para recargar energías y generar networking entre asistentes.',
    type: 'activity',
  },
  {
    time: '01:40pm - 02:30pm',
    title: 'Mi primera cita con... opencode: tu mejor compañero de coding',
    description: 'A cargo de Brayan Ccarita',
    type: 'talk',
  },
  {
    time: '02:30pm - 02:40pm',
    title: 'Intermedio',
    description: 'Tiempo de conexión y preparación para la siguiente ponencia.',
    type: 'break',
  },
  {
    time: '02:40pm - 03:30pm',
    title: 'IA Local con Software Libre: Tu propio asistente inteligente sin internet ni suscripción',
    description: 'A cargo de Henry Keniding Tarazona',
    type: 'talk',
  },
  {
    time: '03:30pm - 03:40pm',
    title: 'Intermedio',
    description: 'Tiempo de conexión y preparación para la siguiente ponencia.',
    type: 'break',
  },
  {
    time: '03:40pm - 04:30pm',
    title: 'Aplicaciones de visión por computadora y GenAI para la accesibilidad',
    description: 'A cargo de Gerardo Vilcamiza',
    type: 'talk',
  },
  {
    time: '04:30pm - 04:40pm',
    title: 'Intermedio',
    description: 'Tiempo de conexión y preparación para la siguiente ponencia.',
    type: 'break',
  },
  {
    time: '04:40pm - 05:30pm',
    title: 'Gemma 4: La Nueva IA de Google Corriendo en tu Laptop (Sin Pagar APIs)',
    description: 'A cargo de Darvis Paz Miranda',
    type: 'talk',
  },
  {
    time: '05:30pm - 06:00pm',
    title: 'Cierre del evento 🎉',
    description: 'Agradecimientos finales y sorteos.',
    type: 'closing',
  },
]
