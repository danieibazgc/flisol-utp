import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { EVENT } from '../constants/eventData'

const targetDate = new Date(EVENT.targetDateISO).getTime()

function getTimeLeft() {
  const now = Date.now()
  const difference = Math.max(targetDate - now, 0)
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

function Hero() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

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
        className="relative mx-auto w-full max-w-7xl"
      >
        {/* Título masivo full-width */}
        <motion.h1
          variants={itemVariants}
          className="mt-8 font-display font-black tracking-tighter leading-[0.82] text-white"
        >
          <div className="text-[clamp(4rem,14vw,10rem)]">FLISOL</div>
          <div className="flex flex-wrap items-end gap-3 sm:gap-5">
            <span className="text-[clamp(4rem,14vw,10rem)] text-flisol-orange">UTP</span>
            <span className="outline-text text-white/15 text-[clamp(2.8rem,9vw,6.5rem)] pb-1">
              LIMA '26
            </span>
          </div>
        </motion.h1>

        {/* Franja inferior: descripción + CTAs | countdown */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-end">

          {/* Izquierda: descripción, CTAs, metadata */}
          <motion.div variants={itemVariants} className="space-y-8">
            <p className="text-base text-zinc-400 max-w-md leading-relaxed font-light">
              El mayor festival de Software Libre de Latinoamérica. Charlas, talleres e instalaciones en la Universidad Tecnológica del Perú. Entrada gratuita.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#registro"
                className="group inline-flex items-center gap-3 rounded-full bg-flisol-orange px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-glow transition-all hover:scale-105"
              >
                Inscribirme
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#agenda"
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-3.5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10"
              >
                Ver Agenda
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-5 pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <Calendar className="h-3.5 w-3.5 text-zinc-600" />
                <span className="text-sm font-bold text-white">25 Abril, 2026</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-zinc-600" />
                <span className="text-sm font-bold text-white">Torre Arequipa, Lima</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <span className="text-sm font-bold text-flisol-orange">Acceso Gratuito</span>
            </div>
          </motion.div>

          {/* Derecha: countdown limpio */}
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-px w-8 bg-flisol-orange/40" />
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">
                Cuenta regresiva
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { val: timeLeft.days, label: 'Días' },
                { val: timeLeft.hours, label: 'Horas' },
                { val: timeLeft.minutes, label: 'Min' },
                { val: timeLeft.seconds, label: 'Seg' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="group/c relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.02] p-3 sm:p-5 text-center"
                >
                  <div className="font-display text-3xl sm:text-5xl font-black text-white tabular-nums tracking-tighter">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-zinc-600 transition-colors group-hover/c:text-flisol-orange">
                    {item.label}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-flisol-orange/40 to-transparent opacity-0 transition-opacity group-hover/c:opacity-100" />
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default Hero
