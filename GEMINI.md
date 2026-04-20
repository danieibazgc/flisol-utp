# GEMINI.md - Contexto de FLISoL UTP 2026

Este archivo proporciona el contexto necesario para que Gemini CLI comprenda la estructura, las tecnologías y las convenciones del proyecto **FLISoL UTP 2026**.

## 🚀 Descripción del Proyecto
Landing web oficial para el evento **FLISoL UTP 2026** (Festival Latinoamericano de Instalación de Software Libre) en la Universidad Tecnológica del Perú, organizado por la comunidad **LEAD UTP**. El sitio es una Single Page Application (SPA) moderna, rápida y altamente visual.

### 🛠️ Stack Tecnológico
- **Frontend:** React 19 (Hooks, Functional Components)
- **Tooling:** Vite 8
- **Estilos:** Tailwind CSS 3.4 + PostCSS
- **Linter:** ESLint 9
- **Librerías Extra:** `html2canvas` (utilizado para captura de UI/Tickets)

## 📁 Estructura Principal
- `src/constants/eventData.js`: **CRÍTICO.** Contiene todos los textos, fechas, agenda y URLs del evento. Es la única fuente de verdad.
- `src/components/`: Componentes modulares (Navbar, Hero, Schedule, TicketGenerator, etc.).
- `src/App.jsx`: Orquestador principal de las secciones.
- `public/images/`: Assets estáticos (logos, plantillas de pases, favicons).
- `tailwind.config.js`: Define la identidad visual (colores flisol, gradientes lead, animaciones).

## ⚙️ Comandos de Desarrollo
- `npm run dev`: Inicia el servidor de desarrollo en `http://localhost:5173`.
- `npm run build`: Genera la carpeta `dist/` optimizada para producción.
- `npm run lint`: Ejecuta el análisis estático de código.
- `npm run preview`: Sirve localmente la versión de producción.

## 🎨 Convenciones de Diseño y Desarrollo
1.  **Edición de Contenido:** **NUNCA** hardcodear strings de fechas o nombres en los componentes. Todo cambio de texto sobre el evento debe realizarse en `src/constants/eventData.js`.
2.  **Estilos:** Priorizar clases de utilidad de Tailwind. Si se requieren animaciones nuevas, verificar el `safelist` en `tailwind.config.js`.
3.  **Identidad Visual:** Utilizar las variables de color extendidas:
    - `flisol-orange`: `#F97316` (Acción principal)
    - `flisol-black`: `#0A0A0A` (Fondo principal)
    - `flisol-slate`: `#111827` (Fondo secundario)
    - `lead-gradient`: Gradiente de rojo a morado.
4.  **Generación de Tickets:** El componente `TicketGenerator.jsx` usa Canvas API directamente para dibujar sobre una plantilla de imagen (`/images/plantilla-pase.jpg`). Cualquier cambio visual en el pase debe hacerse mediante coordenadas en el Canvas.

## 📋 Flujo de Trabajo para Gemini
- Al sugerir cambios en la agenda, modificar el array `SCHEDULE` en `eventData.js`.
- Al crear nuevos componentes, seguir el patrón de exportación por defecto y usar Tailwind para el diseño responsivo.
- Antes de dar por finalizada una tarea, verificar que no haya errores de lint con `npm run lint`.
