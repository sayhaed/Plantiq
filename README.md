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
