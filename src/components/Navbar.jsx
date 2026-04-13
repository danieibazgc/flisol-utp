import { useEffect, useState, useRef } from 'react'
import { NAV_LINKS, EVENT } from '../constants/eventData'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (
        mobileOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(e.target)
      ) {
        setMobileOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [mobileOpen])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-black/90 backdrop-blur-xl'
          : 'border-transparent bg-black/25 backdrop-blur-md'
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <a href="#inicio" className="shrink-0" aria-label="Ir al inicio">
          <img
            src={EVENT.logoLead}
            alt="Logo LEAD UTP – comunidad organizadora de FLISoL UTP"
            className="h-10 w-auto rounded-sm"
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 text-sm text-zinc-200 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors duration-300 hover:text-flisol-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#registro"
            className="hidden rounded-full border border-flisol-orange/60 bg-white/5 px-4 py-2 text-sm font-semibold text-flisol-orange transition duration-300 hover:scale-105 hover:bg-flisol-orange hover:text-white sm:inline-flex"
          >
            Inscríbete
          </a>
          <a
            href="https://felices25ruth.my.canva.site/brochure-flisol-utp-2026-sponsor"
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-full border border-flisol-orange px-4 py-2 text-sm font-semibold text-white bg-flisol-orange transition duration-300 hover:scale-105 hover:bg-orange-500 sm:inline-flex"
          >
            Se Sponsor
          </a>

          {/* Hamburger button */}
          <button
            ref={buttonRef}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-200 transition-colors hover:text-white md:hidden"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <div className="flex w-5 flex-col items-center gap-[5px]">
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'translate-y-[7px] rotate-45' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? 'scale-x-0 opacity-0' : ''
                }`}
              />
              <span
                className={`block h-[2px] w-5 rounded-full bg-current transition-all duration-300 ${
                  mobileOpen ? '-translate-y-[7px] -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          mobileOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden="true"
        onClick={closeMobile}
      />

      {/* Mobile drawer */}
      <div
        ref={menuRef}
        id="mobile-nav"
        role="navigation"
        aria-label="Menú móvil"
        className={`fixed right-0 top-0 z-50 flex h-dvh w-1/2 min-w-[220px] flex-col overflow-y-auto bg-black transition-transform duration-300 ease-in-out md:hidden ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center px-6">
          <img
            src={EVENT.logoFlisol}
            alt="Logo FLISoL"
            className="h-8 w-auto"
          />
        </div>

        <ul className="flex flex-col gap-1 px-4 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMobile}
                className="block rounded-xl px-4 py-3 text-base font-medium text-zinc-200 transition-colors duration-200 hover:bg-white/5 hover:text-flisol-orange"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-auto border-t border-white/10 p-4 flex flex-col gap-3">
          <a
            href="#generar-pase"
            onClick={closeMobile}
            className="block rounded-full bg-flisol-orange px-6 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-orange-500"
          >
            Generar pase →
          </a>
          <a
            href="#registro"
            onClick={closeMobile}
            className="block rounded-full border border-flisol-orange/60 bg-white/5 px-6 py-3 text-center text-sm font-semibold text-flisol-orange transition duration-300 hover:bg-flisol-orange hover:text-white"
          >
            Inscríbete →
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar
