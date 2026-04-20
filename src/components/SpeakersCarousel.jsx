import React, { useState, useEffect, useRef } from 'react';
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
  const [selectedSpeaker, setSelectedSpeaker] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const getScrollAmount = () => {
    if (carouselRef.current && carouselRef.current.children.length > 0) {
      return carouselRef.current.children[0].offsetWidth;
    }
    return 0;
  };

  const handleScroll = () => {
    if (!carouselRef.current) return;
    const scrollLeft = carouselRef.current.scrollLeft;
    const itemWidth = getScrollAmount();
    if (itemWidth > 0) {
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollToSlide = (index) => {
    if (!carouselRef.current) return;
    const itemWidth = getScrollAmount();
    carouselRef.current.scrollTo({ left: index * itemWidth, behavior: 'smooth' });
  };

  const nextSlide = () => {
    if (!carouselRef.current) return;
    const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
    if (carouselRef.current.scrollLeft >= maxScrollLeft - 10) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    }
  };

  const prevSlide = () => {
    if (!carouselRef.current) return;
    if (carouselRef.current.scrollLeft <= 10) {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      carouselRef.current.scrollTo({ left: maxScrollLeft, behavior: 'smooth' });
    } else {
      carouselRef.current.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (isPaused || selectedSpeaker) return;
    const interval = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(interval);
  }, [isPaused, selectedSpeaker]);

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
        </div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        variants={containerVariants}
        className="relative overflow-visible px-14 sm:px-20 lg:px-24 group/carousel"
      >
        {/* Navigation Buttons */}
        <div className="absolute top-1/2 left-1 sm:left-4 lg:left-6 -translate-y-1/2 z-10 flex">
          <button onClick={prevSlide} className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white transition-all duration-300 hover:border-flisol-orange hover:bg-flisol-orange shadow-lg">
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        
        <div className="absolute top-1/2 right-1 sm:right-4 lg:right-6 -translate-y-1/2 z-10 flex">
          <button onClick={nextSlide} className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white transition-all duration-300 hover:border-flisol-orange hover:bg-flisol-orange shadow-lg">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          ref={carouselRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mb-8 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {speakersData.map((speaker) => (
            <div key={speaker.id} className="flex-shrink-0 snap-start snap-always px-3 flex justify-center w-full md:w-1/2 lg:w-1/3">
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
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12 mb-4">
          {speakersData.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'w-8 bg-flisol-orange' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
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
