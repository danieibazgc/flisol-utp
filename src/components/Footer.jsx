import { motion } from 'framer-motion'
import { Heart, Globe, Mail, ChevronRight, Cpu } from 'lucide-react'
import { EVENT } from '../constants/eventData'
import { typography } from '../constants/designTokens'

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-flisol-black pt-16 pb-10 sm:pt-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-flisol-orange/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-flisol-orange/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Editorial Footer Header */}
        <div className="mb-10 space-y-6">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <h2 className={`${typography.sectionTitleMassive} opacity-20`}>
              FLISOL UTP <br />
              <span className="outline-text opacity-10">EDICIÓN 2026</span>
            </h2>

            <div className="flex flex-col gap-4 lg:text-right">
              <span className={`${typography.sectionLabel} text-flisol-orange`}>Soberanía Tecnológica</span>
              <div className="flex gap-2 lg:justify-end">
                <a href="https://instagram.com/lead_utp" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-flisol-orange/50 hover:text-white"><InstagramIcon /></a>
                <a href="https://linkedin.com/company/lead-utp" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-zinc-400 transition-all hover:border-flisol-orange/50 hover:text-white"><LinkedinIcon /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Columns */}
        <div className="mb-10 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <img src={EVENT.logoFlisol} alt="FLISoL UTP" className="h-12 w-auto" />
            <p className="text-sm font-light leading-relaxed text-zinc-500">
              Impulsando la innovación y la libertad digital desde la comunidad estudiantil de la Universidad Tecnológica del Perú.
            </p>
          </div>

          {/* Site Map */}
          <div className="space-y-4">
            <h4 className={`${typography.sectionLabel} text-zinc-600`}>Nodos del Sitio</h4>
            <ul className="space-y-3">
              {['Inicio', 'Speakers', 'Agenda', 'Actividades', 'Patrocinadores'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-flisol-orange">
                    <ChevronRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" /> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className={`${typography.sectionLabel} text-zinc-600`}>Recursos Externos</h4>
            <ul className="space-y-3">
              <li>
                <a href={EVENT.flisolInfoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-flisol-orange">
                  <Globe className="h-4 w-4" /> flisol.info
                </a>
              </li>
              <li>
                <a href={EVENT.sessionizeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-flisol-orange">
                  <Cpu className="h-4 w-4" /> Call for Speakers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className={`${typography.sectionLabel} text-zinc-600`}>Soporte Técnico</h4>
            <div className="space-y-3 rounded-3xl border border-white/5 bg-white/[0.02] p-5">
              <a href={`mailto:${EVENT.contactEmail}`} className="block truncate text-sm font-bold text-white transition-colors hover:text-flisol-orange">
                {EVENT.contactEmail}
              </a>
              <p className="text-[10px] uppercase tracking-widest text-zinc-500">UTP Torre Arequipa, Lima - PE</p>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-6 border-t border-white/5 pt-8 md:flex-row">
          <div className="flex items-center gap-6 opacity-30 grayscale">
            <img src={EVENT.logoFlisol} alt="FLISoL" className="h-6 w-auto" />
            <img src={EVENT.logoLead} alt="LEAD UTP" className="h-6 w-auto" />
          </div>
          <p className="flex items-center gap-2 text-xs font-light text-zinc-400">
            Crafted with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> by LEAD UTP DevTeam
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
