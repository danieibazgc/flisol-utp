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
  { label: 'Agenda', href: '#agenda' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Patrocinadores', href: '#patrocinadores' },
  { label: '¡Participa!', href: '#participa' },
]

export const SCHEDULE = [
  {
    time: '09:00 – 09:15',
    title: 'Apertura del evento',
    description: 'Bienvenida por LEAD UTP e información general del día.',
    type: 'opening',
  },
  {
    time: '09:15 – 10:00',
    title: '🐧 Linux para todos: elige tu distribución y empieza hoy',
    description: 'Historia, distribuciones populares y proceso de instalación con dual boot.',
    type: 'talk',
  },
  {
    time: '10:00 – 10:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '10:15 – 11:00',
    title: '🔐 Ciberseguridad con Software Libre',
    description: 'Kali Linux, Parrot OS y herramientas open source para auditoría de seguridad.',
    type: 'talk',
  },
  {
    time: '11:00 – 11:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '11:15 – 12:00',
    title: '🎮 Videojuegos con Open Source',
    description: 'Godot Engine, desarrollo en Linux y distribución independiente de videojuegos.',
    type: 'talk',
  },
  {
    time: '12:00 – 12:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '12:15 – 13:00',
    title: '🤖 n8n y OpenClaw en Linux',
    description: 'Automatización de flujos de trabajo con n8n y OpenClaw en entornos Linux.',
    type: 'talk',
  },
  {
    time: '13:00 – 13:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '13:15 – 14:00',
    title: '🌐 Desarrollo Web y Mobile Open Source',
    description: 'Frameworks open source para desarrollo web y mobile, herramientas de despliegue y CI/CD.',
    type: 'talk',
  },
  {
    time: '14:00 – 14:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '14:15 – 15:00',
    title: '🧠 Inteligencia Artificial con Software Libre',
    description: 'TensorFlow, PyTorch, modelos abiertos e IA local para privacidad de datos.',
    type: 'talk',
  },
  {
    time: '15:00 – 15:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '15:15 – 16:00',
    title: '🔧 Hardware Abierto',
    description: 'Raspberry Pi, Arduino y proyectos open hardware en educación.',
    type: 'talk',
  },
  {
    time: '16:00 – 16:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '16:15 – 17:00',
    title: '⛓️ Blockchain y Web3',
    description: 'Tecnologías blockchain, contratos inteligentes, DApps y herramientas open source para Web3.',
    type: 'talk',
  },
  {
    time: '17:00 – 17:15',
    title: 'Receso ☕',
    description: 'Networking informal y consultas rápidas.',
    type: 'break',
  },
  {
    time: '17:15 – 18:00',
    title: '💻 Herramientas Open Source para Desarrolladores',
    description: 'Git, GitLab, editores libres, contenedores y DevOps con herramientas open source.',
    type: 'talk',
  },
  {
    time: '18:00 – 18:15',
    title: 'Cierre del evento 🎉',
    description: 'Preguntas del público, invitación a LEAD UTP y próximos eventos.',
    type: 'closing',
  },
]
