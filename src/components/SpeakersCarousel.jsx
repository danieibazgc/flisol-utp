import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { speakersData } from '../constants/speakersData.js';
import { typography } from '../constants/designTokens';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

const SpeakersCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setSlidesToShow(1);
      else if (window.innerWidth < 1024) setSlidesToShow(2);
      else setSlidesToShow(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1 >= speakersData.length - slidesToShow + 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 < 0 ? speakersData.length - slidesToShow : prev - 1));
  };

  useEffect(() => {
    if (isPaused || selectedSpeaker) return;
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, [isPaused, selectedSpeaker, slidesToShow]);

  return (
    <section
      id="speakers-internal"
      className="relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Editorial Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
        className="mb-12 space-y-6 px-4 sm:px-6 lg:px-8"
      >
        <motion.div variants={itemVariants} className="flex items-center gap-4 text-flisol-orange">
          <div className="h-px w-12 bg-flisol-orange/50" />
          <span className={typography.sectionLabel}>Expertos de la Industria</span>
        </motion.div>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.h2 variants={itemVariants} className={typography.sectionTitle}>
            LÍDERES DE LA <br />
            <span className="outline-text text-white/10 uppercase">REVOLUCIÓN</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <button onClick={prevSlide} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-flisol-orange hover:bg-flisol-orange">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button onClick={nextSlide} className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white transition-all duration-300 hover:border-flisol-orange hover:bg-flisol-orange">
              <ChevronRight className="h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative overflow-visible px-4 sm:px-6 lg:px-8"
      >
        <motion.div
          className="flex transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
          animate={{ x: `-${activeIndex * (100 / slidesToShow)}%` }}
        >
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="flex-shrink-0 px-3 flex justify-center" style={{ width: `${100 / slidesToShow}%` }}>
              <motion.div
                whileHover={{ y: -10 }}
                onClick={() => setSelectedSpeaker(speaker)}
                className="group relative cursor-pointer overflow-hidden rounded-[2.5rem] border border-white/10 bg-zinc-900/40 p-3 backdrop-blur-md transition-all hover:border-flisol-orange/30 hover:shadow-glow w-full max-w-sm"
              >
                <div className="absolute top-4 right-4 z-10">
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-black/60 border border-white/10 backdrop-blur-md">
                    <div className="h-1.5 w-1.5 rounded-full bg-flisol-orange animate-pulse" />
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">Speaker</span>
                  </div>
                </div>

                <div className="aspect-square overflow-hidden rounded-[2rem] bg-zinc-800 border border-white/5">
                  <img src={speaker.image} alt={speaker.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-flisol-orange bg-flisol-orange/10 px-2 py-0.5 rounded-md border border-flisol-orange/20">
                      {speaker.track}
                    </span>

                  </div>
                  <div className="space-y-1">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-flisol-orange transition-colors">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-zinc-500 font-light truncate">{speaker.role}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-flisol-orange/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>

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
              <button className="absolute top-8 right-8 z-50 h-12 w-12 flex items-center justify-center rounded-full bg-white/5 text-white border border-white/10 hover:bg-flisol-orange transition-all" onClick={() => setSelectedSpeaker(null)}><X className="h-6 w-6" /></button>

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
  );
};

export default SpeakersCarousel;
