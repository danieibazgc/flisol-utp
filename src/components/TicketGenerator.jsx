import { useState, useRef, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Download, Share2, User, Camera, Briefcase, Sparkles } from 'lucide-react'
import { typography } from '../constants/designTokens'

const TEMPLATE_SRC = '/images/plantilla-pase.jpg'
const CANVAS_W = 1600
const CANVAS_H = 2000

function TicketGenerator() {
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [photoPreview, setPhotoPreview] = useState(null)
  const [photoImg, setPhotoImg] = useState(null)
  const [templateImg, setTemplateImg] = useState(null)
  const fileInputRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const img = new Image()
    img.onload = () => setTemplateImg(img)
    img.src = TEMPLATE_SRC
  }, [])

  const handlePhotoChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => {
        setPhotoPreview(ev.target.result)
        const img = new Image()
        img.onload = () => setPhotoImg(img)
        img.src = ev.target.result
      }
      reader.readAsDataURL(file)
    }
  }

  const drawTicket = useCallback(
    (ctx, canvas) => {
      const w = canvas.width
      const h = canvas.height
      ctx.clearRect(0, 0, w, h)

      if (templateImg) {
        ctx.drawImage(templateImg, 0, 0, w, h)
      }

      const circleX = w / 2
      const circleY = h * 0.52
      const circleR = w * 0.18

      if (photoImg) {
        ctx.beginPath()
        ctx.arc(circleX, circleY, circleR + 15, 0, Math.PI * 2)
        ctx.fillStyle = '#f97316'
        ctx.fill()

        ctx.save()
        ctx.beginPath()
        ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2)
        ctx.clip()
        
        const aspect = photoImg.width / photoImg.height
        let sw, sh, sx, sy
        if (aspect > 1) {
          sh = photoImg.height; sw = sh; sx = (photoImg.width - sw) / 2; sy = 0
        } else {
          sw = photoImg.width; sh = sw; sx = 0; sy = (photoImg.height - sh) / 2
        }
        ctx.drawImage(photoImg, sx, sy, sw, sh, circleX - circleR, circleY - circleR, circleR * 2, circleR * 2)
        ctx.restore()
        drawText(ctx, w, h)
      } else {
        ctx.beginPath()
        ctx.arc(circleX, circleY, circleR, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(255, 255, 255, 0.05)'
        ctx.fill()
        drawText(ctx, w, h)
      }

      function drawText(ctx, w, h) {
        const nameY = h * 0.52 + w * 0.18 + 130
        const displayName = (name || 'TU NOMBRE').toUpperCase()
        
        ctx.font = 'bold 54px Outfit, sans-serif'
        ctx.textAlign = 'center'
        const textWidth = ctx.measureText(displayName).width + 100
        
        ctx.fillStyle = '#f97316'
        ctx.beginPath()
        ctx.roundRect((w - textWidth) / 2, nameY - 60, textWidth, 100, 50)
        ctx.fill()

        ctx.fillStyle = '#ffffff'
        ctx.fillText(displayName, w / 2, nameY + 10)

        ctx.font = '42px Outfit, sans-serif'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
        ctx.fillText(role || 'TU ROL O PROFESIÓN', w / 2, nameY + 90)
      }
    },
    [name, role, photoImg, templateImg],
  )

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d')
      drawTicket(ctx, canvasRef.current)
    }
  }, [drawTicket])

  const handleDownload = () => {
    const link = document.createElement('a')
    link.download = `pase-flisol-utp-2026.png`
    link.href = canvasRef.current.toDataURL('image/png')
    link.click()
  }

  const handleShare = () => {
    handleDownload()
    
    // El alert detiene la ejecución hasta que el usuario le de "Aceptar"
    alert('¡Imagen descargada! En LinkedIn, adjunta tu imagen.')
    
    const shareText = `Este 25 de abril seré parte de FLISoL UTP 2026, un espacio para aprender, compartir y conectar alrededor del software libre.\n\n¡Nos vemos en las charlas!\n\n#FlisolUTP #LeadUTP`
    const linkedinUrl = `https://www.linkedin.com/feed/?shareActive=true&text=${encodeURIComponent(shareText)}`
    window.open(linkedinUrl, '_blank')
  }

  return (
    <section id="generar-pase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-10"
          >
            <div className="space-y-4">
              <h2 className={typography.sectionTitle}>
                Tu entrada al <br />
                <span className="text-flisol-orange">Futuro Libre</span>
              </h2>
              <p className="text-zinc-400 text-base max-w-md">
                Personaliza tu credencial oficial, descárgala y únete a la comunidad más grande de Software Libre en Lima.
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm font-bold text-zinc-300">
                  <Camera className="h-4 w-4 text-flisol-orange" />
                  Sube tu mejor foto
                </label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  className="group relative h-32 w-full cursor-pointer overflow-hidden rounded-3xl border-2 border-dashed border-white/10 bg-white/5 transition-all hover:border-flisol-orange/50 hover:bg-white/10"
                >
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handlePhotoChange} className="hidden" />
                  <div className="flex h-full flex-col items-center justify-center gap-2 text-zinc-500 group-hover:text-zinc-300">
                    <Sparkles className="h-6 w-6" />
                    <span className="text-sm font-medium">Click para seleccionar</span>
                  </div>
                  {photoPreview && (
                    <img src={photoPreview} className="absolute inset-0 h-full w-full object-cover opacity-40 blur-sm" />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <User className="h-3 w-3" /> Nombre
                  </label>
                  <input
                    type="text"
                    maxLength={30}
                    placeholder="Ej. Juan Pérez"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none focus:border-flisol-orange/50 focus:ring-1 focus:ring-flisol-orange/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                    <Briefcase className="h-3 w-3" /> Tu Rol
                  </label>
                  <input
                    type="text"
                    maxLength={28}
                    placeholder="Ej. Desarrollador"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none focus:border-flisol-orange/50 focus:ring-1 focus:ring-flisol-orange/20 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleDownload}
                  disabled={!name}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-flisol-orange px-8 py-4 text-sm font-bold text-white shadow-glow transition-all hover:scale-105 active:scale-95 disabled:opacity-30"
                >
                  <Download className="h-5 w-5" />
                  Obtener Pase
                </button>
                <button
                  onClick={handleShare}
                  disabled={!name}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-white/5"
                >
                  <Share2 className="h-5 w-5" />
                  Compartir
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full max-w-sm sm:max-w-md"
          >
            <div className="absolute -inset-10 bg-flisol-orange/20 blur-[100px] opacity-30 animate-pulse" />
            <div className="relative rounded-[2.5rem] border border-white/10 bg-zinc-900/80 p-4 backdrop-blur-2xl shadow-2xl">
              <canvas
                ref={canvasRef}
                width={CANVAS_W}
                height={CANVAS_H}
                className="w-full h-auto rounded-[2rem] shadow-glow-purple"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default TicketGenerator
