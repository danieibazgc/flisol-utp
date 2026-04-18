import { motion } from 'framer-motion'
import { Globe, Shield, Zap, Terminal } from 'lucide-react'
import { typography } from '../constants/designTokens'

const stats = [
  {
    id: 'DB_V20',
    text: '+20 años de historia libre',
    icon: <Globe className="h-5 w-5" />,
    desc: 'Liderando el movimiento de instalación de software abierto en toda Latinoamérica.'
  },
  {
    id: 'SEC_CORE',
    text: 'Soberanía Tecnológica',
    icon: <Shield className="h-5 w-5" />,
    desc: 'Promovemos el uso de herramientas que garantizan la privacidad y el control total.'
  },
  {
    id: 'FREE_ACC',
    text: 'Acceso 100% Libre',
    icon: <Zap className="h-5 w-5" />,
    desc: 'Sin barreras económicas. Conocimiento compartido para toda la comunidad UTP.'
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
          className="space-y-12"
        >
          <div className="space-y-6">
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 text-flisol-orange"
            >
              <div className="h-px w-8 bg-flisol-orange/50" />
              <span className={typography.sectionLabel}>Propósito del Sistema</span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className={typography.sectionTitleLarge}
            >
              CULTURA <br />
              <span className="text-white/20 outline-text">DIGITAL</span>
            </motion.h2>
          </div>

          <motion.div variants={itemVariants} className="relative group">
            <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-flisol-orange via-zinc-800 to-transparent" />
            <div className="space-y-6">
              <p className="text-xl md:text-2xl font-display font-medium text-white leading-tight">
                "El FLISoL no es solo un evento, es la actualización masiva de nuestra libertad tecnológica."
              </p>
              <p className="text-zinc-400 leading-relaxed font-light">
                En la **Universidad Tecnológica del Perú**, reunimos a los arquitectos del futuro digital.
                Nuestra misión es descentralizar el conocimiento y empoderar a cada estudiante con las herramientas
                necesarias para construir un mundo más abierto, colaborativo y transparente.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-8 pt-4">
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-bold text-zinc-600 uppercase tracking-widest">Organiza</span>
              <span className="font-display font-bold text-white tracking-tighter">LEAD UTP</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Data Nodes Side */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="space-y-4"
        >
          {stats.map((stat) => (
            <motion.article
              key={stat.text}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 sm:rounded-[2.5rem] sm:border-white/5 sm:bg-white/[0.01] backdrop-blur-sm transition-all hover:border-flisol-orange/30 hover:bg-white/[0.03]"
            >
              <div className="absolute top-0 right-0 p-6 text-[8px] font-mono text-zinc-800 group-hover:text-flisol-orange/20 transition-colors hidden sm:block">
                {stat.id}
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
                <div className="inline-flex sm:flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-zinc-900 text-flisol-orange ring-1 ring-white/10 shadow-xl group-hover:scale-110 group-hover:bg-flisol-orange group-hover:text-white transition-all duration-500">
                  {stat.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-flisol-orange transition-colors tracking-tight">
                    {stat.text}
                  </h3>
                  <p className="text-base text-zinc-500 leading-relaxed font-light">
                    {stat.desc}
                  </p>
                  <div className="flex items-center gap-1 pt-2 opacity-100 transition-opacity">
                    <div className="h-1 w-1 rounded-full bg-flisol-orange" />
                    <span className="text-[8px] font-bold uppercase tracking-widest text-flisol-orange">Nodo Verificado</span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

      </div>
    </div>
  )
}

export default AboutFlisol
