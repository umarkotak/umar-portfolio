# Umar Portfolio

A playful, lightweight portfolio built with React, Vite, and Bun.

## Develop

Use Node.js 24.22.0 (LTS, compatible with Vercel’s Node.js 24 runtime) and Bun 1.4.3. With nvm:

```sh
nvm install
nvm use
bun install
bun run dev
```

## Check and build

```sh
bun run test
bun run lint
bun run build
bun run preview
```

## Content and design

- `src/data.js` — project descriptions, screenshots, career history, and contact links.
- `src/pages/` — Home, Experience, and Projects.
- `src/index.css` — responsive design, typography, and reduced-motion support.
- `public/images/projects/<project>/` — original screenshots, optimized WebP copies, and related logos grouped by project. Cabocil and Cookie Kid share the `cabocil/` assets.
- `public/media/` — optimized profile photo.
- `public/docs_data/` — résumé and documents. The linked résumé is `data-umar-v7.pdf`.

The site uses React Router, a locally served variable font, CSS transitions,
native expandable career entries, and a native modal with keyboard and focus support.
Projects can be filtered, searched, and explored in screenshot galleries.

## Deploy

Deploy `dist/` to a static host. Route requests such as `/experience` and
`/projects` must fall back to `index.html`. Netlify/Cloudflare Pages redirects
and Vercel rewrites are included. No server or environment variables are required.

Project URLs and career details were carried forward from the original portfolio;
archived projects may no longer be online.
