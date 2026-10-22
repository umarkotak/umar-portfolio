import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import hosting from './vercel.json' with { type: 'json' }

// Match the production download route in development and build previews.
function serveCv(server) {
  const route = hosting.rewrites.find(({ source }) => source === '/cv')
  const { headers } = hosting.headers.find(({ source }) => source === '/cv')
  server.middlewares.use((req, res, next) => {
    if (req.url?.split('?')[0] === '/cv') {
      for (const { key, value } of headers) res.setHeader(key, value)
      req.url = route.destination
    }
    next()
  })
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'cv-download',
      configureServer: serveCv,
      configurePreviewServer: serveCv,
    },
  ],
})
