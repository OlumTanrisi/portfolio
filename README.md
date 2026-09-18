# João — Full Stack Developer

First-stage personal portfolio built with React, Vite, TypeScript, Tailwind CSS, Lucide React and Framer Motion.

## Local development

```bash
npm install
npm run dev
npm run build
```

## Before deploying

1. Add the CV as `public/cv.pdf`.
2. Replace the placeholder social URLs in `src/data/socialLinks.ts`.
3. Set `VITE_BASE_PATH` to the repository path before building (for example `/portfolio/`).
4. In GitHub, enable Pages with **GitHub Actions** as the source.

The hero visual is CSS-only, so it does not require a portrait asset. The workflow in `.github/workflows/deploy.yml` builds the site and publishes `dist` on every push to `main`.
