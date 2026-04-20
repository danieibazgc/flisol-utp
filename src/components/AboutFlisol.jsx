import { motion } from 'framer-motion'
import { Clock, MapPin, Ticket } from 'lucide-react'
import { typography } from '../constants/designTokens'

const stats = [
  {
    id: 'HIST',
    text: '+20 años de historia',
    icon: <Clock className="h-6 w-6" />,
  },
  {
    id: 'CITIES',
    text: '+300 ciudades participantes',
    icon: <MapPin className="h-6 w-6" />,
  },
  {
    id: 'FREE',
    text: 'Entrada 100% gratuita',
    icon: <Ticket className="h-6 w-6" />,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

function AboutFlisol() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Light */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-flisol-orange/10 blur-[120px] pointer-events-none opacity-40" />

      <div className="grid gap-16 lg:grid-cols-2 lg:items-start">

        {/* Manifest Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col items-center justify-center text-center lg:items-center space-y-8 px-4"
        >
          <motion.div variants={itemVariants} className="flex flex-col items-center w-full">
            <h3 className="text-flisol-orange/90 text-sm sm:text-base font-bold tracking-[0.2em] uppercase mb-10">
              ¿Qué es FLISoL?
            </h3>
            
            <img 
              src="/images/flisol-logo.png" 
              alt="FLISoL" 
              className="w-full max-w-[280px] sm:max-w-[360px] drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out mb-12" 
            />
            
            <p className="text-zinc-300 text-base sm:text-[1.1rem] leading-relaxed max-w-lg text-pretty">
              El Festival Latinoamericano de Instalación de Software Libre (FLISoL) es el evento de difusión de Software Libre más grande de Latinoamérica, realizado simultáneamente en decenas de ciudades desde 2005. La entrada es completamente gratuita.
            </p>
          </motion.div>
        </motion.div>

        {/* Data Nodes Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="flex flex-col justify-center space-y-4 lg:py-8"
        >
          {stats.map((stat) => (
            <motion.article
              key={stat.text}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group relative flex items-center gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/50 p-6 sm:border-white/5 sm:bg-white/[0.01] backdrop-blur-sm transition-all hover:border-flisol-orange/30 hover:bg-white/[0.03]"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-flisol-orange ring-1 ring-white/10 shadow-xl group-hover:scale-110 group-hover:bg-flisol-orange group-hover:text-white transition-all duration-500">
                {stat.icon}
              </div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-flisol-orange transition-colors tracking-tight">
                {stat.text}
              </h3>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default AboutFlisol
