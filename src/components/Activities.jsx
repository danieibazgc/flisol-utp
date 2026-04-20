import { motion } from 'framer-motion'
import { Terminal, Cpu, Users, Code } from 'lucide-react'
import { typography } from '../constants/designTokens'

const activities = [
  {
    title: 'Charlas Magistrales',
    description: 'Descubre herramientas open source para potenciar tu perfil profesional.',
    icon: <Terminal className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-1',
    color: 'from-flisol-orange/20 to-flisol-orange/5',
  },
  {
    title: 'Talleres Hands-on',
    description: 'Aprende tecnologías reales y tendencias que están transformando la industria.',
    icon: <Code className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-2',
    color: 'from-flisol-leadPurple/20 to-flisol-leadPurple/5',
  },
  {
    title: 'Comunidad',
    description: 'Conecta con estudiantes, desarrolladores y expertos del ecosistema tech',
    icon: <Users className="h-6 w-6" />,
    className: 'md:col-span-1 md:row-span-1',
    color: 'from-flisol-orange/15 to-flisol-leadPurple/10',
  },
  {
    title: 'Hardware Libre',
    description: 'Explora Raspberry Pi y el fascinante mundo del hardware abierto.',
    icon: <Cpu className="h-6 w-6" />,
    className: 'md:col-span-2 md:row-span-1',
    color: 'from-flisol-leadPurple/20 to-flisol-orange/5',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

function Activities() {
  return (
    <section id="actividades" className="overflow-hidden px-4 sm:px-6 lg:px-8">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="space-y-10"
      >
        {/* Header */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center justify-end gap-4 text-flisol-orange">
            <span className={typography.sectionLabel}>Experiencia Inmersiva</span>
            <div className="h-px w-12 bg-flisol-orange/50" />
          </motion.div>

          <div className="flex flex-col justify-between gap-8 text-right lg:flex-row lg:items-end">
            <motion.p variants={itemVariants} className="order-2 max-w-sm border-r border-white/10 pr-6 text-base leading-relaxed text-zinc-500 lg:order-1">
              Un ecosistema de aprendizaje diseñado para potenciar tu creatividad y habilidades técnicas.
            </motion.p>

            <motion.h2 variants={itemVariants} className={`order-1 lg:order-2 ${typography.sectionTitle}`}>
              QUÉ VAS <br />
              <span className="outline-text text-white/20 uppercase">A VIVIR</span>
            </motion.h2>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-min grid-cols-1 gap-4 md:grid-cols-3">
          {activities.map((item) => (
            <motion.article
              key={item.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur-sm transition-all hover:border-white/20 hover:shadow-2xl ${item.className}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex rounded-2xl bg-white/5 p-3 text-flisol-orange ring-1 ring-white/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-flisol-orange group-hover:text-white">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white transition-colors group-hover:text-flisol-orange">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400 transition-colors group-hover:text-zinc-300">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-2 -right-2 h-24 w-24 rounded-full bg-white/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Activities
