import { motion } from 'framer-motion'
import { ExternalLink, Sparkles } from 'lucide-react'
import { typography } from '../constants/designTokens'

function Register() {
  return (
    <section id="registro" className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Ambient Glow */}
        <div className="absolute -inset-10 bg-flisol-orange/10 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="relative space-y-20 text-center">
          {/* Massive Editorial Header */}
          <div className="space-y-6 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 rounded-full border border-flisol-orange/20 bg-flisol-orange/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] text-flisol-orange"
            >
              <Sparkles className="h-3 w-3" />
              Acceso Gratuito
            </motion.div>
            
            <motion.h2 className={typography.sectionTitleLarge}>
              TU PASE AL <br />
              <span className="text-white/20 outline-text uppercase text-center">FUTURO</span>
            </motion.h2>

            <p className="text-zinc-500 max-w-2xl mx-auto text-base leading-relaxed font-medium">
              Obtén tu credencial digital personalizada y asegura tu lugar en la revolución del Software Libre.
            </p>
          </div>

          <div className="mx-auto w-full max-w-5xl">
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl group">
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              
              <iframe
                src="https://lu.ma/embed/event/evt-ozQmVBGuFvngDKQ/simple"
                width="100%"
                height="650"
                frameBorder="0"
                style={{ border: 'none', background: 'transparent' }}
                allowFullScreen
                aria-hidden="false"
                tabIndex="0"
                title="Registro FLISoL UTP 2026 — Luma"
                className="relative z-10"
              />
            </div>
            
            <div className="mt-8 flex justify-center">
              <a 
                href="https://lu.ma/event/evt-ozQmVBGuFvngDKQ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm"
              >
                Abrir en página completa <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Register
