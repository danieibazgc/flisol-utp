# FLISoL UTP 2026 – Landing Oficial

Landing web oficial del evento **FLISoL UTP 2026**, organizado por la comunidad **LEAD UTP** en la Universidad Tecnológica del Perú.

- 📅 **Fecha:** Sábado 25 de abril de 2026
- 📍 **Lugar:** Universidad Tecnológica del Perú – Lima, Perú
- 🌐 **Sitio web:** https://flisolutp.tech
- 📧 **Contacto:** leadutp@gmail.com

Esta documentación está pensada para que nuevos voluntarios puedan continuar el proyecto sin depender de contexto previo.

---

## 1. Stack Tecnológico

| Herramienta | Versión |
|---|---|
| React | 19 |
| Vite | 8 |
| Tailwind CSS | 3 |
| ESLint | 9 |

---

## 2. Estructura del Proyecto

```text
flisol-utp/
├── public/
│   └── images/
│       ├── flisol-logo.png       # Logo oficial FLISoL
│       └── lead-utp-logo.png     # Logo LEAD UTP
├── src/
│   ├── constants/
│   │   └── eventData.js          # ⭐ FUENTE ÚNICA DE DATOS DEL EVENTO
│   ├── components/
│   │   ├── Navbar.jsx            # Barra de navegación con menú móvil
│   │   ├── Hero.jsx              # Portada + contador regresivo
│   │   ├── AboutFlisol.jsx       # ¿Qué es FLISoL? + estadísticas
│   │   ├── Activities.jsx        # Actividades del evento
│   │   ├── Schedule.jsx          # Agenda del día (timeline)
│   │   ├── CallForSpeakers.jsx   # Convocatoria de ponentes
│   │   ├── Sponsors.jsx          # Patrocinadores y comunidades aliadas
│   │   ├── PracticalInfo.jsx     # Fecha, hora, lugar, costo
│   │   └── Footer.jsx            # Pie de página con links y contacto
│   ├── App.jsx                   # Composición de secciones
│   ├── index.css                 # Estilos globales y animaciones CSS
│   └── main.jsx                  # Punto de entrada React
├── index.html                    # HTML base con SEO completo
├── tailwind.config.js
├── eslint.config.js
└── vite.config.js
```

---

## 3. Cómo Ejecutar el Proyecto

### Requisitos
- Node.js 20+
- npm 10+

### Instalación
```bash
npm install
```

### Entorno de desarrollo
```bash
npm run dev
```

### Build de producción
```bash
npm run build
```

### Previsualizar build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

---

## 4. ⭐ Cómo Editar el Contenido (lo más importante)

### Todo el contenido editable está en un solo archivo

```
src/constants/eventData.js
```

Este archivo centraliza **todas las constantes del evento**: fechas, URLs, correos, logos, la agenda completa y los enlaces de navegación. **No hay strings del evento hardcodeados en los componentes.**

Para actualizar el contenido del sitio, edita este archivo y los cambios se reflejarán automáticamente en todas las secciones.

#### Variables clave en `eventData.js`

| Variable | Descripción |
|---|---|
| `EVENT.date` | Fecha del evento (texto completo) |
| `EVENT.targetDateISO` | Fecha ISO para el contador regresivo |
| `EVENT.startTime` | Hora de inicio |
| `EVENT.venue` / `EVENT.locationFull` | Lugar del evento |
| `EVENT.cfpDeadline` / `EVENT.cfpDeadlineShort` | Cierre del Call for Speakers |
| `EVENT.sessionizeUrl` | URL de Sessionize para ponentes |
| `EVENT.contactEmail` | Correo de contacto |
| `EVENT.year` | Año del evento |
| `NAV_LINKS` | Secciones del menú de navegación |
| `SCHEDULE` | Agenda completa del evento |

#### Para actualizar la agenda

Edita el array `SCHEDULE` en `eventData.js`. Cada bloque tiene esta forma:

```js
{
  time: '09:15 – 10:00',
  title: '🐧 ¿Qué es Linux y cómo instalarlo?',
  description: 'Historia, distribuciones populares y proceso de instalación.',
  type: 'talk', // 'talk' | 'workshop' | 'break' | 'opening' | 'closing'
}
```

---

## 5. Secciones del Sitio

| Sección | Componente | ID de ancla |
|---|---|---|
| Portada + Contador | `Hero.jsx` | `#inicio` |
| ¿Qué es FLISoL? | `AboutFlisol.jsx` | `#que-es-flisol` |
| Actividades | `Activities.jsx` | `#actividades` |
| Agenda del día | `Schedule.jsx` | `#agenda` |
| Call for Speakers | `CallForSpeakers.jsx` | `#speakers` |
| Patrocinadores | `Sponsors.jsx` | `#patrocinadores` |
| Información práctica | `PracticalInfo.jsx` | `#participa` |

---

## 6. Guía de Estilo

- Todos los estilos se hacen con **Tailwind CSS**. No crear archivos CSS nuevos salvo casos excepcionales.
- Los estilos globales y animaciones viven en `src/index.css`.
- Las animaciones de entrada disponibles son: `animate-fade-in-up`, `animate-fade-in`, `animate-slide-in-left`. Los delays van de `delay-100` a `delay-700`.
- La paleta de colores del proyecto está definida en `tailwind.config.js`:
  - `flisol-orange` → #F97316 (color principal)
  - `flisol-black` → #0A0A0A
  - `flisol-slate` → #111827 (fondo de secciones alternas)
  - `flisol-muted` → #A1A1AA (texto secundario)
  - `lead-gradient` → gradiente rojo → morado (identidad LEAD UTP)

---

## 7. Convenciones para Voluntarios

### Flujo de trabajo recomendado
1. Crear rama desde `main` con nombre descriptivo (e.g. `feat/nueva-seccion-faq`).
2. Hacer cambios pequeños y enfocados en un solo tema.
3. Ejecutar `npm run lint` y `npm run build` antes de enviar PR.
4. Adjuntar capturas (desktop y mobile) en el PR si se tocó la UI.

### Mensajes de commit sugeridos
```
feat: agrega sección de FAQ
fix: corrige enlace de convocatoria de speakers
style: mejora contraste en tarjetas de actividades
content: actualiza agenda del evento
docs: actualiza README con instrucciones de despliegue
```

---

## 8. Checklist Antes de Publicar Cambios

- [ ] El proyecto levanta con `npm run dev` sin errores
- [ ] Build exitoso: `npm run build`
- [ ] Sin errores de lint: `npm run lint`
- [ ] Contador regresivo funcionando
- [ ] Menú móvil (hamburguesa) funcional
- [ ] Todos los enlaces externos funcionando
- [ ] Navegación por anclas funcionando (Navbar)
- [ ] Vista mobile y desktop revisadas
- [ ] Textos sin faltas ortográficas

---

## 9. Mejoras Pendientes Sugeridas

Estas son tareas que quedan abiertas para los próximos voluntarios:

- **Sección de Speakers confirmados**: mostrar ponentes con foto, nombre y tema una vez confirmados.
- **Sección de FAQ**: preguntas frecuentes del evento.
- **Formulario de inscripción**: si el evento requiere pre-registro.
- **Galería de ediciones anteriores**: fotos de FLISoL UTP en años pasados.
- **Logos reales de patrocinadores**: reemplazar los placeholders en `Sponsors.jsx`.
- **Internacionalización (i18n)**: soporte opcional para inglés/portugués.
- **Mapa embebido**: ubicación de la UTP en Google Maps o OpenStreetMap.

---

## 10. Contacto del Equipo

Si tienes dudas para continuar el proyecto:
- 📧 **Correo:** `leadutp@gmail.com`
- 🌐 **FLISoL oficial UTP:** https://flisol.info/FLISOL2026/Peru/Lima-UTP
- Coordinar cambios de contenido con el equipo organizador de **LEAD UTP**.

---

## 11. Ruta Mínima para Nuevos Voluntarios

Si eres voluntario nuevo, sigue estos pasos:

1. Clona el repositorio e instala dependencias: `npm install`
2. Levanta el entorno de desarrollo: `npm run dev`
3. Lee `src/constants/eventData.js` para entender la estructura de datos
4. Ubica cada sección en `src/components/`
5. Haz un cambio pequeño de prueba (ej: texto en `eventData.js`)
6. Valida con `npm run lint` y `npm run build`
7. Abre un PR con descripción clara y capturas de pantalla

Con eso ya puedes contribuir de forma segura y ordenada. ¡Gracias por apoyar el software libre! 🐧
