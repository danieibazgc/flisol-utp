# Sistema de Diseño y Experiencia: FLISoL UTP 2026

Este documento define la identidad visual y estratégica de la landing page, elevada a un estándar **"Professional-Grade / Digital Editorial"**.

---

## 1. Concepto Creativo: "Dark Tech Freedom"

La web abandona la estética de "plantilla de evento" para adoptar un look de **Ingeniería de Alta Gama**. Se inspira en interfaces de herramientas como Linear, Vercel y Stripe, mezclado con un estilo editorial de revista tecnológica moderna.

---

## 1.5 Principio General: Menos es más (Anti-relleno)

> **El error más común en este proyecto es rellenar el espacio con elementos decorativos en lugar de dejar que el contenido respire.**

Antes de añadir cualquier elemento (tag flotante, logo extra, decoración binaria, card wrapper, línea animada), hacerse estas preguntas:

1. **¿Aporta información real?** Si no comunica nada nuevo, eliminarlo.
2. **¿Compite con el elemento principal?** Si distrae del título o la CTA, eliminarlo.
3. **¿Está duplicado en otro lugar?** El logo ya está en la Navbar — no repetirlo en el Hero.
4. **¿Añade capas sin añadir profundidad?** Un card dentro de un card dentro de una sección es ruido, no diseño.

### Qué evitar

| Patrón | Por qué es un error |
|---|---|
| Logo en Hero + Navbar | Duplicado — el usuario ya lo vio |
| Card wrapper sobre countdown | Añade borde + padding + fondo innecesarios |
| Decoración binaria / scanlines | Ruido visual que no comunica |
| Tags flotantes con `hidden sm:` | Si no se ve en mobile, no aporta en desktop |
| Descripción larga en Hero | El Hero vende, no explica — máximo 2 líneas |
| Varios wrappers anidados | Genera peso visual y dificulta el mantenimiento |

### Qué hacer en cambio

- **Título que ocupa todo el ancho** — la tipografía masiva ES el diseño, no necesita decoración alrededor.
- **Metadata inline** (fecha, lugar, acceso) como strip horizontal bajo las CTAs — conciso, sin tarjeta propia.
- **Espacio en blanco intencionado** — el `min-h-dvh` con contenido centrado genera tensión editorial por sí solo.
- **Un solo acento de color** por zona — no mezclar orange + purple + white en la misma área.
- **Badge + línea** como eyebrow: el badge da contexto, la línea que se extiende da drama. Nada más.

### Aplicación en el Hero (referencia)

El Hero actual es el modelo a seguir para cualquier rediseño futuro:

```
[badge ——————————————————————————]   ← badge + línea, nada más
[FLISOL                          ]   ← título fluid con clamp()
[UTP      LIMA '26               ]   ← color + outline en la misma línea

[descripción    |   countdown    ]   ← grid 2 col en desktop, stack en mobile
[CTAs           |   00 00 00 00  ]
[fecha · lugar · acceso gratuito ]   ← metadata inline, sin card
```

Título Hero usa `clamp()` para escala fluida sin breakpoints rígidos:
```
text-[clamp(4rem,14vw,10rem)]   ← FLISOL / UTP
text-[clamp(2.8rem,9vw,6.5rem)] ← outline secundario
```

---

## 2. Fundamentos Visuales (Foundations)

### A. Tipografía

#### Familias tipográficas
- **Display (`Bricolage Grotesque`)**: Títulos masivos. Peso *Black* y *Extrabold* — autoridad y modernidad técnica.
- **Sans (`Outfit`)**: Cuerpo y datos. Fuente geométrica de legibilidad premium.
- **Mono (`font-mono`)**: Horas y timestamps — números tabulares para alineación perfecta en la agenda.

#### Escala Tipográfica Unificada (5 pasos)
El sistema usa exactamente **5 tamaños**, ninguno más. No añadir tamaños intermedios fuera de esta tabla.

| Paso | Tamaño | Uso | Token / clase |
|---|---|---|---|
| 1 | `text-4xl sm:text-6xl` | Títulos de sección | `typography.sectionTitle` |
| 2 | `text-xl sm:text-2xl` | Títulos de card / ítem | `typography.cardTitle` |
| 3 | `text-base` | Cuerpo, descripciones de sección | (inline) |
| 4 | `text-sm` | Metadata, nombres, roles | (inline) |
| 5 | `text-[10px]` | Micro-etiquetas, badges, eyebrow | `typography.sectionLabel` |

> **Regla de oro:** ningún badge o etiqueta usa `text-[9px]` o `text-[8px]`. Si es micro, va en `text-[10px]`.

#### Tokens de sección (Design Tokens)
Centralizados en `src/constants/designTokens.js`. **No repetir clases manualmente** — importar el token.

| Token | Clases Tailwind | Secciones que lo usan |
|---|---|---|
| `typography.sectionTitle` | `font-display text-4xl font-bold sm:text-6xl leading-[0.85] tracking-tighter text-white` | Estándar para la mayoría: Sponsors, Activities, SpeakersCarousel, Schedule, TicketGenerator. |
| `typography.sectionTitleLarge` | `font-display text-6xl font-black md:text-8xl leading-[0.8] tracking-tighter text-white` | Alto impacto visual: AboutFlisol, Register. |
| `typography.sectionTitleMassive` | `font-display text-7xl font-black md:text-9xl leading-[0.8] tracking-tighter text-white` | Hero-level: Footer. |
| `typography.cardTitle` | `font-display text-xl sm:text-2xl font-bold text-white` | Cards: Activities, SpeakersCarousel, Schedule. |
| `typography.sectionLabel` | `text-[10px] font-bold uppercase tracking-[0.4em]` | Eyebrow labels y badges micro (todas las secciones). |

#### Jerarquía dentro de cada sección
Para que haya armonía visual entre los elementos del header de una sección:

1. **Eyebrow (Paso 5)** — `typography.sectionLabel` en `text-flisol-orange`. Contraste intencional extremo: pequeño → grande.
2. **Título (Paso 1)** — token correspondiente. El salto brusco desde el eyebrow es parte del estilo editorial.
3. **Descripción (Paso 3)** — `text-base` (nunca `text-sm`). Actúa como puente entre el título masivo y el contenido de las cards.
4. **Títulos de cards (Paso 2)** — `typography.cardTitle` (`text-xl sm:text-2xl`). Jerarquiza sin competir con el título de sección.
5. **Roles / metadatos (Paso 4)** — `text-sm`. Mínimo legible sin romper la proporción.

---

### B. Espaciado

#### Padding horizontal (Mobile-first)
Todas las secciones siguen el mismo patrón. **No usar `px-4 sm:px-0`** — cancela el padding en pantallas medianas.

```
px-4 sm:px-6 lg:px-8
```

Este padding se aplica **tanto en el wrapper de `App.jsx` como internamente en el componente**. Referencia visual: sección "Tu entrada al Futuro Libre" (TicketGenerator).

#### Padding vertical
El espaciado vertical entre secciones se centraliza **únicamente en `App.jsx`**. Los componentes no tienen `py-` propio.

```
py-20 sm:py-24
```

**No añadir `py-` dentro del componente** — si se hace en ambos lados se duplica el espacio.

---

### C. Paleta de Colores

La paleta está definida en `tailwind.config.js`. **Solo usar colores de esta lista** — ninguna clase de Tailwind fuera del sistema (no emerald, no sky, no blue, no rose, no amber, no yellow, no violet).

| Token | Valor hex | Uso |
|---|---|---|
| `flisol-orange` | `#F97316` | Acción principal, acentos, hover, badges |
| `flisol-leadPurple` | `#7C3AED` | Acentos secundarios, workshops, badges |
| `flisol-leadRed` | `#E11D48` | Acento terciario (uso muy puntual) |
| `flisol-black` | `#0A0A0A` | Fondo primario |
| `flisol-slate` | `#111827` | Fondo secundario para diferenciar secciones |
| `zinc-*` | escala zinc | Textos de cuerpo, bordes, fondos de cards |

#### Reglas de color en componentes
- **Textos de cuerpo**: `text-zinc-400` o `text-zinc-500`
- **Bordes de cards**: `border-white/10` o `border-white/5`
- **Fondos de cards**: `bg-zinc-900/50` o `bg-white/[0.03]`
- **Hover en títulos de cards**: `group-hover:text-flisol-orange`
- **Hover en iconos**: `group-hover:bg-flisol-orange group-hover:text-white`

---

### D. Texturas y Atmósfera

- **Grain Effect (Ruido SVG)**: Capa de 4% de opacidad que elimina el "píxel plano", dando sensación de material orgánico y premium.
- **Atmospheric Glows**: Luces ambientales de 500px–600px con `blur-[120px]+` detrás del contenido para dar tridimensionalidad. Se implementan como `div` con `pointer-events-none`.

---

## 3. Patrones de UI

### A. Títulos "Editorial Masivo"
- **Dúo Dinámico**: texto sólido en blanco + `outline-text` semitransparente (`text-white/10` o `text-white/20`). Permite títulos gigantes sin saturar el espacio.
- **Eyebrow + línea**: la etiqueta de sección va acompañada de una línea de 1px (`h-px w-12 bg-flisol-orange/50`) que conecta visualmente con el contenido.

### B. Cards y Layouts de Sección

#### Cards estilo "Activities" (vertical)
Layout vertical: icono arriba → título → descripción. Usado en: **Activities**, **About (mobile)**.

```
rounded-3xl border border-white/10 bg-zinc-900/50 p-8
```

Dentro: `space-y-4`, icono con `inline-flex rounded-2xl bg-white/5 p-3 ring-1 ring-white/10`.

#### Cards estilo "About" (horizontal, desktop)
Layout horizontal: icono a la izquierda + texto a la derecha. Solo en `sm:` en adelante.

```
rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-8
```

Dentro: `flex items-start gap-6`. En mobile (`< sm`) se convierte en layout vertical idéntico al estilo Activities.

#### Agenda — Compact List
La agenda usa una lista compacta con grid en desktop, sin cards de gran altura.

```
Desktop: grid-cols-[140px_90px_1fr_200px] gap-6 py-5
Mobile:  flex flex-col gap-2 py-4
```

- Hora: `font-mono text-sm text-zinc-500`
- Badge de tipo: `text-[10px] font-bold uppercase` con colores por tipo (`opening/activity/closing` → orange, `workshop` → leadPurple, `talk` → white, `break` → zinc)
- Título de sesión: `text-xl font-semibold`, `hover:text-flisol-orange`
- Speaker: avatar `h-8 w-8 rounded-full` + `text-sm text-zinc-400`
- Breaks: `opacity-50`

### C. Speakers — Modal "Magazine"
Al hacer click en una card se abre un modal fullscreen con:
- Foto en proporción `4/5` a la izquierda (tratada como credencial física)
- Nombre en `text-5xl md:text-7xl` con apellido en `text-white/40`
- Sesión destacada en card interior con `bg-white/[0.03]`
- Bio en `text-sm font-light`

---

## 4. Estrategia de UX

### A. Navegación
- **Acción única en Navbar**: el menú lleva a secciones informativas; el botón "Inscribirme" es la única CTA de conversión.
- **Lock de scroll en menú mobile**: cuando el overlay mobile está abierto, `document.body.style.overflow = 'hidden'` evita scroll de fondo.

### B. Mobile-first
- Todos los layouts se diseñan primero para mobile y se expanden en `sm:` / `lg:`.
- Cards que son horizontales en desktop deben ser verticales en mobile (ver "Cards estilo About").
- Ningún elemento interactivo debe pegarse a los bordes — respetar el padding horizontal estándar.
- Textos de sección grandes (`text-4xl`) son seguros en mobile; `text-6xl+` solo desde `sm:`.

### C. Agenda y carga cognitiva
- La agenda es una lista compacta, no un conjunto de cards de gran altura.
- El objetivo es mostrar toda la información con el mínimo scroll posible.

---

## 5. Movimiento y Respuesta (Motion)

- **Orquestación Staggered**: los elementos se revelan secuencialmente con `framer-motion` (`staggerChildren: 0.05`).
- **Interactive Glows**: cards emiten luz o escalan sutilmente al interactuar (`whileHover={{ y: -5 }}` o `whileHover={{ x: 10 }}`).
- **Smart Autoplay**: el carrusel de speakers avanza solo pero se pausa al hacer hover (`isPaused` state).
- **Viewport trigger**: todas las animaciones usan `whileInView` con `{ once: true, margin: '-100px' }` para no dispararse antes de que el elemento sea visible.

---

## Meta Final
Convertir la landing de **FLISoL UTP 2026** en el referente visual de eventos tecnológicos en la región, proyectando **profesionalismo, innovación y excelencia técnica**.
