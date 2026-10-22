import { afterAll, beforeAll, expect, test } from 'bun:test'
import { createServer } from 'vite'
import hosting from '../vercel.json' with { type: 'json' }

let server
let origin

beforeAll(async () => {
  server = await createServer({
    logLevel: 'silent',
    server: { host: '127.0.0.1', port: 0 },
  })
  await server.listen()
  origin = `http://127.0.0.1:${server.httpServer.address().port}`
})

afterAll(async () => {
  await server?.close()
})

test('/cv returns the latest PDF as a named download, even for browser navigation', async () => {
  const response = await fetch(`${origin}/cv`, { headers: { Accept: 'text/html' } })
  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toContain('application/pdf')
  expect(response.headers.get('content-disposition')).toBe(
    'attachment; filename="Muhammad-Umar-Ramadhana-CV.pdf"',
  )
  const expected = await Bun.file('public/docs_data/data-umar-v7.pdf').arrayBuffer()
  expect(Buffer.from(await response.arrayBuffer())).toEqual(Buffer.from(expected))
})

test('/cv handles query strings and HEAD requests', async () => {
  const response = await fetch(`${origin}/cv?download=1`, { method: 'HEAD' })
  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toContain('application/pdf')
  expect(response.headers.get('content-disposition')).toContain('attachment;')
  expect(await response.text()).toBe('')
})

test('regular pages keep the SPA fallback without a download header', async () => {
  const response = await fetch(`${origin}/experience`, { headers: { Accept: 'text/html' } })
  expect(response.status).toBe(200)
  expect(response.headers.get('content-type')).toContain('text/html')
  expect(response.headers.get('content-disposition')).toBeNull()
  expect(await response.text()).toContain('<div id="root"></div>')
})

test('Vercel serves the CV before applying its SPA fallback', () => {
  expect(hosting.rewrites[0]).toEqual({
    source: '/cv',
    destination: '/docs_data/data-umar-v7.pdf',
  })
})
