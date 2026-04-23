import { Heart, Globe, ChevronRight, Cpu } from 'lucide-react'
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
    <footer className="relative overflow-hidden border-t border-white/5 bg-flisol-black pb-10 px-4 sm:px-6 lg:px-8">
      {/* Decorative Atmosphere */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-flisol-orange/30 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-full bg-gradient-to-t from-flisol-orange/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Columns */}
        <div className="mb-10 grid grid-cols-1 gap-8 border-t border-white/5 pt-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <img src={EVENT.logoFlisol} alt="FLISoL UTP" className="h-12 w-auto" />
              <img src={EVENT.logoLead} alt="LEAD UTP" className="h-12 w-auto" />
            </div>
            <p className="text-sm font-light leading-relaxed text-zinc-500">
              Impulsando el conocimiento abierto, la colaboración tecnológica y el espíritu innovador con una visión comprometida con el futuro digital.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={EVENT.leadInstagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de LEAD UTP"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-flisol-orange/40 hover:bg-flisol-orange/10 hover:text-flisol-orange hover:scale-110"
              >
                <InstagramIcon />
              </a>
              <a
                href={EVENT.leadLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn de LEAD UTP"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-zinc-400 transition-all duration-300 hover:border-flisol-orange/40 hover:bg-flisol-orange/10 hover:text-flisol-orange hover:scale-110"
              >
                <LinkedinIcon />
              </a>
            </div>
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
        <div className="flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-8">
          <p className="flex items-center gap-2 text-xs font-light text-zinc-400">
            Crafted with <Heart className="h-3 w-3 fill-red-500 text-red-500" /> by LEAD UTP DevTeam
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
