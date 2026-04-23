import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { EVENT } from '../constants/eventData'

const navLinks = [
  { name: 'Qué es', href: '#que-es-flisol' },
  { name: 'Speakers', href: '#speakers' },
  { name: 'Agenda', href: '#agenda' },
  { name: 'Actividades', href: '#actividades' },
  { name: 'Aliados', href: '#patrocinadores' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isOpen])

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] w-full transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-xl shadow-md' : 'bg-transparent'}`}>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="mx-auto flex w-full max-w-screen-2xl flex-wrap items-center justify-between px-6 py-3 md:px-12 lg:px-16"
      >
        {/* LOGO OFICIAL */}
        <a href="#inicio" className="flex items-center gap-3 group relative ml-3 md:ml-6">
          <img
            src="/images/lead-utp-logo.png"
            alt="LEAD UTP"
            className="h-12 md:h-14 w-auto transition-all group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative flex items-center gap-2 rounded-lg px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 transition-all hover:text-white"
            >
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-flisol-orange">[</span>
              {link.name}
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-flisol-orange">]</span>
            </a>
          ))}
        </div>

        {/* ACTION */}
        <div className="flex items-center gap-3 mr-3 md:mr-6">
          <a
            href="#pase"
            className="hidden lg:inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white transition-all hover:bg-white/10"
          >
            Generar pase
          </a>
          <a
            href="#registro"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all hover:scale-105 shadow-glow hover:bg-flisol-orange hover:text-white"
          >
            Inscribirme
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.div>
    </nav>

      {/* MINIMALIST MOBILE OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[110] bg-flisol-black md:hidden flex flex-col"
          >
            {/* Header in Overlay con Logo Restaurado */}
            <div className="flex items-center justify-between p-6 sm:p-8 border-b border-white/5">
              <div className="flex items-center gap-3">
                <img
                  src="/images/lead-utp-logo.png"
                  alt="LEAD UTP"
                  className="h-12 w-auto transition-all group-hover:scale-105"
                />
              </div>
              <button onClick={() => setIsOpen(false)} className="h-10 w-10 flex items-center justify-center rounded-full bg-white/5 text-zinc-400 border border-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 flex flex-col justify-center px-10 space-y-8">
              <nav className="space-y-8">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4"
                  >
                    <div className="h-1 w-1 rounded-full bg-flisol-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="font-display text-3xl font-bold text-white tracking-tight active:text-flisol-orange transition-colors">
                      {link.name}
                    </span>
                  </motion.a>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-10 flex flex-col gap-4"
              >
                <a
                  href="#pase"
                  onClick={() => setIsOpen(false)}
                  className="flex h-16 items-center justify-center rounded-2xl border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] active:scale-95 transition-all hover:bg-white/5"
                >
                  Generar Pase
                </a>
                <a
                  href="#registro"
                  onClick={() => setIsOpen(false)}
                  className="flex h-16 items-center justify-center rounded-2xl bg-white text-black text-xs font-black uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all"
                >
                  Inscribirme Ahora
                </a>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
