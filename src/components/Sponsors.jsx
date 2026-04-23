import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { typography } from '../constants/designTokens'

const tiers = [
  {
    name: 'Venue Partner',
    logos: [
      { name: 'UTP', src: '/images/utp.svg', className: 'h-8 sm:h-10' },
    ],
    accent: 'text-flisol-leadRed',
    bg: 'bg-flisol-leadRed/5',
    border: 'border-flisol-leadRed/20',
    colSpan: 'lg:col-span-1',
    containerHeight: 'h-20',
  },
  {
    name: 'Sponsor Platinum',
    logos: [
      { name: 'Hugotech', src: '/images/hugotech-logo.png', className: 'h-14 sm:h-16' },
    ],
    accent: 'text-flisol-orange',
    bg: 'bg-flisol-orange/5',
    border: 'border-flisol-orange/20',
    colSpan: 'lg:col-span-2',
    containerHeight: 'h-24 sm:h-28',
  },
  {
    name: 'Digital Support',
    logos: [
      { name: 'Sessionize', src: '/images/sessionize-logo.svg', className: 'h-7 sm:h-9' },
    ],
    accent: 'text-flisol-leadPurple',
    bg: 'bg-flisol-leadPurple/5',
    border: 'border-flisol-leadPurple/20',
    colSpan: 'lg:col-span-1',
    containerHeight: 'h-20',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

function Sponsors() {
  return (
    <section id="patrocinadores-internal" className="relative px-4 sm:px-6 lg:px-8">
      {/* Atmospheric Glow */}
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-flisol-orange/5 blur-[120px]" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative space-y-10"
      >
        {/* Header compacto */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-4">

            <motion.h2 variants={itemVariants} className={typography.sectionTitle}>
              NUESTROS <br />
              <span className="outline-text text-white/20 uppercase">ALIADOS</span>
            </motion.h2>
          </div>

          {/* CTA inline al header */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <a
              href="https://felices25ruth.my.canva.site/brochure-flisol-utp-2026-sponsor"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[10px] font-black uppercase tracking-widest text-black transition-all hover:scale-105 active:scale-95 shadow-[0_10px_30px_rgba(255,255,255,0.08)]"
            >
              Conviértete en Patrocinador
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <p className="text-center text-[9px] font-bold uppercase tracking-widest text-zinc-600">
              leadutp@gmail.com
            </p>
          </motion.div>
        </div>

        {/* Tiers en grid horizontal */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          {tiers.map((tier) => (
            <div key={tier.name} className={`space-y-3 ${tier.colSpan || ''}`}>
              {/* Tier label */}
              <div className="flex items-center gap-3">
                <span className={`text-[9px] font-bold uppercase tracking-[0.35em] ${tier.accent}`}>{tier.name}</span>
                <div className="h-px flex-1 bg-white/5" />
              </div>

              {/* Logos del tier */}
              <div className="flex flex-wrap gap-3">
                {tier.logos.map((logo, idx) => (
                  <motion.div
                    key={logo.name + idx}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className={`group flex ${tier.containerHeight || 'h-20'} flex-1 min-w-[120px] items-center justify-center rounded-2xl border ${tier.border} ${tier.bg} backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/[0.04]`}
                  >
                    {logo.isPlaceholder ? (
                      <div className="flex flex-col items-center gap-2 opacity-20 transition-opacity group-hover:opacity-50">
                        <Sparkles className="h-4 w-4 text-white" />
                        <span className="text-[8px] font-bold uppercase tracking-widest text-white">Disponible</span>
                      </div>
                    ) : (
                      <img
                        src={logo.src}
                        alt={logo.name}
                        className={`${logo.className} w-auto object-contain transition-all duration-500 group-hover:brightness-125`}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Sponsors
