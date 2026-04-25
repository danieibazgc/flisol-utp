import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin, Radio } from 'lucide-react'
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

            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                href="#registro"
                className="group inline-flex items-center justify-center gap-2 rounded-[2rem] bg-flisol-orange hover:bg-orange-600 px-8 py-3.5 text-[13px] sm:text-sm font-bold tracking-[0.15em] text-white uppercase transition-all"
              >
                INSCRIBIRME
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
              </a>
              <a
                href="#agenda"
                className="group relative inline-flex items-center justify-center gap-2.5 rounded-[2rem] border border-red-500/40 bg-red-500/10 hover:bg-red-500/20 px-8 py-3.5 text-[13px] sm:text-sm font-bold tracking-[0.15em] text-red-400 uppercase transition-all"
              >
                {/* Pulsing live dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
                </span>
                <Radio className="h-3.5 w-3.5" strokeWidth={2.5} />
                VER AGENDA EN VIVO
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3 sm:gap-4 w-full max-w-[22rem] mt-6">
              {[
                { val: timeLeft.days, label: 'Días' },
                { val: timeLeft.hours, label: 'Horas' },
                { val: timeLeft.minutes, label: 'Minutos' },
                { val: timeLeft.seconds, label: 'Segundos' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/50 p-4 transition-colors hover:border-white/20"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-white tabular-nums tracking-tight mb-1">
                    {String(item.val).padStart(2, '0')}
                  </div>
                  <div className="text-[9px] sm:text-[10px] font-medium uppercase tracking-widest text-zinc-500">
                    {item.label}
                  </div>
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
