import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { SCHEDULE } from '../constants/eventData'
import { speakersData } from '../constants/speakersData'
import { typography } from '../constants/designTokens'

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)

// Color por tipo — el badge es el único portador de color en la lista
const typeStyles = {
  opening:  { color: 'text-flisol-orange',    border: 'border-flisol-orange/30',     bg: 'bg-flisol-orange/10' },
  talk:     { color: 'text-white',             border: 'border-white/15',             bg: 'bg-white/5' },
  workshop: { color: 'text-flisol-leadPurple', border: 'border-flisol-leadPurple/30', bg: 'bg-flisol-leadPurple/10' },
  break:    { color: 'text-zinc-500',          border: 'border-zinc-700/40',          bg: 'bg-zinc-800/30' },
  activity: { color: 'text-flisol-orange',     border: 'border-flisol-orange/30',     bg: 'bg-flisol-orange/10' },
  closing:  { color: 'text-flisol-orange',     border: 'border-flisol-orange/30',     bg: 'bg-flisol-orange/10' },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
}

const itemVariants = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
}

function Schedule() {
  const [selectedSpeaker, setSelectedSpeaker] = useState(null)

  return (
    <section id="agenda-internal" className="relative">
      {/* Atmospheric Glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-flisol-orange/5 blur-[120px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="relative"
      >
        {/* Editorial Header */}
        <div className="mb-10 space-y-6 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange">
            <div className="h-px w-12 bg-flisol-orange/50" />
            <span className={typography.sectionLabel}>Protocolo de Eventos</span>
          </motion.div>

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <motion.h2 variants={itemVariants} className={typography.sectionTitle}>
              AGENDA <br />
              <span className="outline-text text-white/10 uppercase">OFICIAL</span>
            </motion.h2>
            <p className="text-base font-light italic leading-relaxed text-zinc-500 lg:text-right lg:max-w-xs">
              Sincroniza tu reloj con la jornada más intensa de conocimiento libre.
            </p>
          </div>
        </div>

        {/* Compact List */}
        <div className="px-4 sm:px-6 lg:px-8">
          {/* Header de columnas — solo desktop */}
          <div className="mb-3 hidden grid-cols-[140px_90px_1fr_200px] gap-6 border-b border-white/5 pb-3 sm:grid">
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Hora</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Tipo</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Sesión</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-700">Speaker</span>
          </div>

          {SCHEDULE.map((item, index) => {
            const style = typeStyles[item.type] || typeStyles.break
            const speaker = speakersData.find(
              (s) => s.sessionTitle === item.title || item.title.includes(s.name.split(' ')[0])
            )
            const isBreak = item.type === 'break'
            const isTalkWithSpeaker = item.type === 'talk' && speaker

            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => isTalkWithSpeaker && setSelectedSpeaker(speaker)}
                className={`group border-b border-white/5 transition-colors duration-200 ${isBreak ? 'opacity-50' : ''} ${isTalkWithSpeaker ? 'cursor-pointer' : ''}`}
              >
                {/* Desktop row */}
                <div className="hidden grid-cols-[140px_90px_1fr_200px] items-center gap-6 py-5 sm:grid">
                  <span className="font-mono text-sm tabular-nums text-zinc-500">
                    {item.time.split(' - ')[0]}
                  </span>

                  <div className={`inline-flex w-fit items-center rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${style.color} ${style.border} ${style.bg}`}>
                    {item.type}
                  </div>

                  <h3 className="font-display text-xl font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-flisol-orange">
                    {item.title}
                  </h3>

                  {speaker ? (
                    <div className="flex items-center gap-2.5">
                      <img src={speaker.image} alt={speaker.name} className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" />
                      <span className="truncate text-sm text-zinc-400">{speaker.name}</span>
                    </div>
                  ) : (
                    <span className="text-sm text-zinc-700">{item.description ? item.description.slice(0, 40) + '…' : '—'}</span>
                  )}
                </div>

                {/* Mobile row */}
                <div className="flex flex-col gap-2 py-4 sm:hidden">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs tabular-nums text-zinc-500">{item.time.split(' - ')[0]}</span>
                    <div className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${style.color} ${style.border} ${style.bg}`}>
                      {item.type}
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold leading-snug text-white transition-colors group-hover:text-flisol-orange">
                    {item.title}
                  </h3>
                  {speaker && (
                    <div className="flex items-center gap-2">
                      <img src={speaker.image} alt={speaker.name} className="h-6 w-6 rounded-full object-cover ring-1 ring-white/10" />
                      <span className="text-xs text-zinc-500">{speaker.name}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      {/* Modal speaker — igual al de SpeakersCarousel */}
      <AnimatePresence>
        {selectedSpeaker && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-10 bg-flisol-black/95 backdrop-blur-2xl"
            onClick={() => setSelectedSpeaker(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.95, y: 40, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-5xl w-full bg-zinc-950 border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-flisol-orange/10 blur-[120px] rounded-full pointer-events-none" />
              <button
                className="absolute top-8 right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-flisol-orange transition-all"
                onClick={() => setSelectedSpeaker(null)}
              >
                <X className="h-6 w-6" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[85vh] overflow-y-auto hide-scrollbar">
                {/* Imagen */}
                <div className="lg:w-5/12 pt-10 pb-4 px-8 md:p-10 flex items-center justify-center lg:sticky lg:top-0">
                  <div className="relative">
                    <div className="absolute -inset-6 bg-flisol-orange/20 blur-3xl rounded-full opacity-40" />
                    <img
                      src={selectedSpeaker.image}
                      alt={selectedSpeaker.name}
                      className="relative w-44 h-44 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full object-cover ring-2 ring-flisol-orange/30 shadow-2xl"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <div className="lg:w-7/12 p-8 md:p-10 lg:pl-0 space-y-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-flisol-orange" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-flisol-orange">Speaker Perfil</span>
                    </div>
                    <h3 className="font-display text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tight">
                      {selectedSpeaker.name.split(' ')[0]} <br />
                      <span className="text-white/40">{selectedSpeaker.name.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p className="text-base text-zinc-400 font-light">{selectedSpeaker.role}</p>
                  </div>

                  <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                    <div className="inline-flex items-center gap-2 rounded-full bg-flisol-orange/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-flisol-orange">
                      {selectedSpeaker.track}
                    </div>
                    <h4 className="font-display text-xl sm:text-2xl font-bold text-white leading-tight">{selectedSpeaker.sessionTitle}</h4>
                    <p className="text-zinc-400 text-sm leading-relaxed font-light italic">"{selectedSpeaker.sessionDesc}"</p>
                  </div>

                  <div className="space-y-3">
                    <h5 className="text-[10px] font-bold uppercase tracking-[0.4em] text-zinc-600">Background</h5>
                    <p className="text-zinc-400 leading-relaxed text-sm font-light">{selectedSpeaker.bio}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 pb-8">
                    {selectedSpeaker.linkedin && <a href={selectedSpeaker.linkedin} target="_blank" rel="noopener noreferrer" className="h-12 px-6 flex items-center gap-3 rounded-full bg-white text-black hover:bg-flisol-orange hover:text-white transition-all"><LinkedinIcon /><span className="text-[10px] font-bold uppercase tracking-widest">LinkedIn</span></a>}
                    {selectedSpeaker.instagram && <a href={selectedSpeaker.instagram} target="_blank" rel="noopener noreferrer" className="h-12 px-6 flex items-center gap-3 rounded-full bg-zinc-900 border border-white/10 text-white hover:border-flisol-orange/50 transition-all"><InstagramIcon /><span className="text-[10px] font-bold uppercase tracking-widest">Instagram</span></a>}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Schedule
