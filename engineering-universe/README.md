# Madan Patel H S — Engineering Universe

An immersive, responsive engineering portfolio built with React, TypeScript, Vite, Tailwind CSS and React Three Fiber.

## Features

- Cinematic 3D hero visualization with an animated technology core and orbiting domain nodes.
- Ten technology domains spanning frontend, backend, Salesforce, SAP, embedded systems, VLSI, industrial automation, AI/data, DevOps and electronics/energy.
- Searchable project catalogue with 100 project records.
- Domain filtering and featured project cards.
- Adaptive light/dark theme with local persistence.
- Responsive layouts and reduced-motion support.
- Centralized, typed portfolio data.

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run typecheck
npm run build
npm run preview
```

## Notes

Project records are explicitly labelled as existing projects, showcase concepts or research directions. Update the data in `src/data.ts` as implementations progress. Add verified GitHub and live-demo URLs only when they exist.

## Structure

- `src/App.tsx` — page composition and interactions
- `src/data.ts` — typed domain and project catalogue
- `src/components/UniverseCanvas.tsx` — React Three Fiber scene
- `src/components/ProjectCard.tsx` — reusable project card
- `src/index.css` — design tokens, themes, responsive styling and motion
