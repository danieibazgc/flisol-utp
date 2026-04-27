import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { EVENT } from '../constants/eventData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function Hero() {

  return (
    <section
      id="inicio"
      className="hero-pattern relative overflow-hidden min-h-dvh flex flex-col justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="hero-gradient-pointer-events absolute inset-0" aria-hidden="true" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto w-full max-w-7xl pt-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Logo a la izquierda */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end pr-0 lg:pr-8">
            <img
              src="/images/flisol-utp-logo.png"
              alt="FLISoL UTP 2026"
              className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px]"
            />
          </motion.div>

          {/* Información a la derecha */}
          <motion.div variants={itemVariants} className="flex flex-col items-center text-center space-y-8 lg:items-center">

            <div className="inline-flex items-center rounded-3xl border border-white/10 bg-white/5 px-5 py-2 text-xs font-medium text-zinc-300">
              25 de abril · UTP Torre Arequipa, Lima, Perú
            </div>

            <div className="space-y-4">
              <h1 className="font-display leading-[0.85] tracking-tighter text-white mb-6">
                <div className="text-5xl sm:text-6xl lg:text-[5rem] font-bold">
                  FLISoL <span className="text-flisol-orange">UTP</span>
                </div>
                <div className="text-5xl sm:text-6xl lg:text-[5rem] font-bold mt-2 outline-text text-white/10 uppercase">
                  2026
                </div>
              </h1>

              <p className="text-lg sm:text-xl font-medium text-zinc-200 px-4">
                Festival Latinoamericano de Instalación de Software Libre
              </p>

              <p className="text-sm sm:text-base text-zinc-400 max-w-sm mx-auto leading-relaxed">
                Un día entero de charlas y talleres de software libre.<br />
                Organizado por LEAD UTP.
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="mt-2 w-full max-w-md rounded-2xl border border-flisol-orange/30 bg-flisol-orange/10 px-6 py-5 text-center"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Heart className="h-4 w-4 text-flisol-orange fill-flisol-orange" />
                <span className="text-xs font-bold uppercase tracking-widest text-flisol-orange">Evento finalizado</span>
                <Heart className="h-4 w-4 text-flisol-orange fill-flisol-orange" />
              </div>
              <p className="text-base sm:text-lg font-semibold text-white leading-snug">
                ¡Gracias por ser parte del FLISoL UTP 2026!
              </p>
              <p className="mt-1.5 text-sm text-zinc-400 leading-relaxed">
                Fue un día increíble de aprendizaje y comunidad. Nos vemos en la próxima edición. 🐧
              </p>
            </motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
