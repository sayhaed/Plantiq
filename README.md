# PlantIQ

Identificador de plantas a partir de una imagen (demo en frontend). Sube una foto, analiza, y obtén una ficha con cuidados, datos y recomendaciones.

## Stack

- React + Vite
- Tailwind CSS (v4) + `@tailwindcss/vite`
- `react-icons`

## Requisitos

- Node.js (recomendado: 18+)
- npm

## Instalacion

```bash
npm install
```

## Correr en local

```bash
npm run dev
```

Luego abre el URL que te muestra Vite (normalmente `http://localhost:5173`).

## Build / Preview

```bash
npm run build
npm run preview
```

## Estructura del proyecto

```text
src/
  components/      Componentes UI (Header, UploadZone, ResultDisplay, PlantTabs, Footer)
  pages/           Paginas (Home)
  data/            Datos locales (plants.json)
  utils/           Logica de identificacion (demo)
  index.css        Estilos globales + Tailwind entrypoint
  main.jsx         Entry point (monta React)
```

## Notas de Tailwind (importante)

Este proyecto usa Tailwind v4, asi que el setup recomendado es via Vite plugin y el entrypoint:

```css
/* src/index.css */
@import "tailwindcss";
```

Si ves estilos incompletos o parece "HTML pelon", revisa:

1. `vite.config.js` tenga `@tailwindcss/vite` habilitado.
2. `src/main.jsx` importe `./index.css`.

## Troubleshooting rapido

- Pantalla en blanco con error de Vite tipo "doesn't provide an export named ...":
  - Normalmente es un import incorrecto. Revisa el archivo/linea que te marca la consola.
- Tailwind no aplica:
  - Para Tailwind v4, usa `@import "tailwindcss";` en `src/index.css` y asegurate de tener el plugin de Vite.

## Licencia

MIT (o la que prefieras). Si no vas a publicar el codigo, puedes borrar esta seccion sin problema.
