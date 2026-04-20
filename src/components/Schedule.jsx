import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, MapPin } from 'lucide-react'
import { SCHEDULE, EVENT } from '../constants/eventData'
import { speakersData } from '../constants/speakersData'
import { typography } from '../constants/designTokens'

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.18 1 12 1 12s0 3.82.46 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.82 23 12 23 12s0-3.82-.46-5.58zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"/></svg>
);

const TiktokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.321 5.562a5.122 5.122 0 0 1-3.554-1.42 5.222 5.222 0 0 1-1.39-3.535H11.23v14.1a3.03 3.03 0 0 1-3.03 3.03 3.03 3.03 0 0 1-3.03-3.03 3.03 3.03 0 0 1 3.03-3.03c.27 0 .53.036.78.106V8.6a6.11 6.11 0 0 0-6.89 6.096c0 3.4 2.76 6.16 6.16 6.16 3.4 0 6.16-2.76 6.16-6.16V8.52a8.31 8.31 0 0 0 4.92 1.61v-3.148a5.2 5.2 0 0 1-3.14-1.42z"/></svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
);

const WebIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

// Color por tipo — el badge es el único portador de color en la lista
const typeStyles = {
  opening: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
  talk: { color: 'text-white', border: 'border-white/15', bg: 'bg-white/5' },
  workshop: { color: 'text-flisol-leadPurple', border: 'border-flisol-leadPurple/30', bg: 'bg-flisol-leadPurple/10' },
  break: { color: 'text-zinc-500', border: 'border-zinc-700/40', bg: 'bg-zinc-800/30' },
  activity: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
  closing: { color: 'text-flisol-orange', border: 'border-flisol-orange/30', bg: 'bg-flisol-orange/10' },
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
        <div className="mb-16 flex flex-col items-center justify-center text-center space-y-4 px-4 sm:px-6 lg:px-8">
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 text-flisol-orange w-full">
            <div className="h-px w-10 sm:w-16 lg:w-24 bg-flisol-orange/50" />
            <span className={typography.sectionLabel}>Programa del día</span>
            <div className="h-px w-10 sm:w-16 lg:w-24 bg-flisol-orange/50" />
          </motion.div>

          <motion.h2 variants={itemVariants} className={typography.sectionTitle}>
            AGENDA <span className="outline-text text-white/10 uppercase">OFICIAL</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base font-light italic leading-relaxed text-zinc-500 max-w-2xl">
            ¡Acompáñanos a disfrutar de estas ponencias!
          </motion.p>
          
          <motion.div variants={itemVariants} className="pt-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-zinc-900/60 px-5 py-2.5 text-sm font-semibold tracking-wide text-zinc-300 backdrop-blur-sm transition-colors hover:bg-zinc-800/80">
              <MapPin className="h-4 w-4 text-flisol-orange" />
              {EVENT.auditorium}
            </div>
          </motion.div>
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
                  <div className="space-y-3 text-center flex flex-col items-center">
                    <h3 className="font-display text-4xl md:text-5xl font-black text-white leading-[0.9] tracking-tight">
                      {selectedSpeaker.name.split(' ')[0]} <br />
                      <span className="text-white/40">{selectedSpeaker.name.split(' ').slice(1).join(' ')}</span>
                    </h3>
                    <p className="text-base text-orange-500 font-light pb-1">{selectedSpeaker.role}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 pt-1 pb-4">
                      {selectedSpeaker.linkedin && (
                        <a href={selectedSpeaker.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/30 text-blue-400 hover:bg-blue-900/50 border border-transparent hover:border-blue-500/20 transition-all">
                          <LinkedinIcon />
                          <span className="text-[13px] font-medium tracking-wide">LinkedIn</span>
                        </a>
                      )}
                      {selectedSpeaker.instagram && (
                        <a href={selectedSpeaker.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-fuchsia-950/40 text-fuchsia-400 hover:bg-fuchsia-900/50 border border-transparent hover:border-fuchsia-500/20 transition-all">
                          <InstagramIcon />
                          <span className="text-[13px] font-medium tracking-wide">Instagram</span>
                        </a>
                      )}
                      {selectedSpeaker.youtube && (
                        <a href={selectedSpeaker.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-950/40 text-red-500 hover:bg-red-900/50 border border-transparent hover:border-red-500/20 transition-all">
                          <YoutubeIcon />
                          <span className="text-[13px] font-medium tracking-wide">YouTube</span>
                        </a>
                      )}
                      {selectedSpeaker.tiktok && (
                        <a href={selectedSpeaker.tiktok} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700/80 border border-transparent hover:border-zinc-500/20 transition-all">
                          <TiktokIcon />
                          <span className="text-[13px] font-medium tracking-wide">TikTok</span>
                        </a>
                      )}
                      {selectedSpeaker.facebook && (
                        <a href={selectedSpeaker.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-950/50 text-blue-300 hover:bg-blue-800/50 border border-transparent hover:border-blue-500/20 transition-all">
                          <FacebookIcon />
                          <span className="text-[13px] font-medium tracking-wide">Facebook</span>
                        </a>
                      )}
                      {selectedSpeaker.web && (
                        <a href={selectedSpeaker.web} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/50 border border-transparent hover:border-emerald-500/20 transition-all">
                          <WebIcon />
                          <span className="text-[13px] font-medium tracking-wide">Web</span>
                        </a>
                      )}
                      {selectedSpeaker.email && (
                        <a href={`mailto:${selectedSpeaker.email}`} className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-950/40 text-orange-400 hover:bg-orange-900/50 border border-transparent hover:border-orange-500/20 transition-all">
                          <EmailIcon />
                          <span className="text-[13px] font-medium tracking-wide">Email</span>
                        </a>
                      )}
                    </div>
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

                  <div className="pb-8"></div>
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
