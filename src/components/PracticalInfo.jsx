import { motion } from 'framer-motion'
import { Calendar, Clock, MapPin, Ticket, ExternalLink } from 'lucide-react'
import { EVENT } from '../constants/eventData'

const details = [
  {
    title: 'Día del Evento',
    value: EVENT.date,
    icon: <Calendar className="h-6 w-6" />,
    color: 'text-blue-400',
  },
  {
    title: 'Hora de Inicio',
    value: EVENT.startTime,
    icon: <Clock className="h-6 w-6" />,
    color: 'text-emerald-400',
  },
  {
    title: 'Lugar del Evento',
    value: 'UTP Torre Arequipa, Lima',
    icon: <MapPin className="h-6 w-6" />,
    color: 'text-rose-400',
  },
  {
    title: 'Inversión',
    value: 'Acceso 100% Gratuito',
    icon: <Ticket className="h-6 w-6" />,
    color: 'text-amber-400',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

function PracticalInfo() {
  return (
    <section id="informacion" className="py-12">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-16"
      >
        <div className="text-center space-y-4">
          <motion.h2 
            variants={itemVariants}
            className="font-display text-4xl font-bold sm:text-6xl text-white"
          >
            Datos <span className="text-flisol-orange">Clave</span>
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-zinc-400 max-w-xl mx-auto text-lg"
          >
            Prepara tu visita al festival tecnológico más esperado del año.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {details.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-6">
                <div className={`inline-flex rounded-2xl bg-white/5 p-4 ${item.color} ring-1 ring-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500`}>
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 group-hover:text-flisol-orange transition-colors">
                    {item.title}
                  </p>
                  <p className="font-display text-xl font-bold text-white leading-tight">
                    {item.value}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-center"
        >
          <a 
            href="https://maps.app.goo.gl/YourMapLink" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-bold text-zinc-300 hover:text-white hover:bg-white/10 transition-all"
          >
            Ver en Google Maps <ExternalLink className="h-4 w-4" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default PracticalInfo
