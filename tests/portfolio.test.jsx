import { expect, test } from 'bun:test'
import { existsSync } from 'node:fs'
import { renderToStaticMarkup } from 'react-dom/server'
import { MemoryRouter } from 'react-router'
import Home from '../src/pages/Home'
import Experience from '../src/pages/Experience'
import Cv from '../src/pages/Cv'
import Projects from '../src/pages/Projects'
import ProjectDialog from '../src/components/ProjectDialog'
import { projects, experiences } from '../src/data'

function render(page) {
  return renderToStaticMarkup(<MemoryRouter>{page}</MemoryRouter>)
}

test('all portfolio images, company logos, and the résumé exist', () => {
  for (const project of projects) {
    for (const image of [project.image, ...project.screenshots]) {
      expect(existsSync(`public/images/projects/${image}.webp`)).toBe(true)
    }
    for (const link of [project.url, project.repo].filter(Boolean)) {
      expect(new URL(link).protocol).toBe('https:')
    }
  }
  for (const experience of experiences.filter((item) => item.logo)) {
    expect(existsSync(`public/images/projects/${experience.logo}.jpeg`)).toBe(
      true,
    )
  }
  expect(existsSync('public/docs_data/data-umar-v7.pdf')).toBe(true)
  expect(existsSync('public/media/me-enhanced.webp')).toBe(true)
})

test('home connects visitors to both portfolio pages and featured work', () => {
  const html = render(<Home />)
  expect(html).toContain('src="/media/me-enhanced.webp"')
  expect(html).toContain('href="/projects"')
  expect(html).toContain('href="/experience"')
  expect(html).toContain('Explore Cabocil')
  expect(html).toContain('Explore Live Everywhere')
  expect(html).toContain('Explore my GoLife experience')
  expect(html).toContain('50+ daily active users')
  expect(html).toContain('As of June 2026.')
  expect(html).toContain('Full Stack Engineer at Alakin Health')
})

test('the project gallery includes all ten projects', () => {
  const html = render(<Projects />)
  expect(html.match(/<article/g)).toHaveLength(10)
  for (const project of projects)
    expect(html).toContain(`Explore ${project.name}`)
})

test('all career chapters render with the current role expanded', () => {
  const html = render(<Experience />)
  expect(html.match(/<details/g)).toHaveLength(experiences.length)
  expect(html.match(/<details[^>]* open=""/g)).toHaveLength(1)
  expect(html).toContain('href="/cv"')
  expect(html).toContain('Feb 2026')
  expect(html).toContain('Alakin Health')
  expect(html.match(/<details/g)).toHaveLength(5)
  expect(html).toContain('Sanafi')
  expect(html).toContain('Sep 2025')
  expect(html).toContain('Mar 2026')
  expect(html).toContain('Contract')
  expect(html).toContain('Part time')
  expect(html).toContain('1,000+ connected screens')
  expect(html).toContain('$10,000 to $600')
  expect(html).not.toContain('Basic Computer Lab Assistant')
})

test('project galleries expose every screenshot and navigation only when needed', () => {
  const multi = render(
    <ProjectDialog project={projects[0]} onClose={() => {}} />,
  )
  expect(multi.match(/aria-roledescription="slide"/g)).toHaveLength(
    projects[0].screenshots.length,
  )
  expect(multi).toContain('aria-label="Previous screenshot"')
  expect(multi).toContain('aria-label="Next screenshot"')
  expect(multi).toContain('aria-label="Show screenshot 4"')
  expect(multi).toContain('loading="lazy"')
  const single = render(
    <ProjectDialog project={projects[1]} onClose={() => {}} />,
  )
  expect(single.match(/aria-roledescription="slide"/g)).toHaveLength(1)
  expect(single).not.toContain('aria-label="Next screenshot"')
  expect(single).not.toContain('aria-label="Previous screenshot"')
})

test('homepage highlight illustrations exist', () => {
  for (const name of ['golife', 'everywhere', 'cabocil']) {
    expect(existsSync(`public/images/illustrations/${name}.svg`)).toBe(true)
  }
})

test('Marpos has a POS description and both screenshots in its detail gallery', () => {
  const marpos = projects.find((project) => project.id === 'marpos')
  expect(marpos.description).toContain('point-of-sale (POS)')
  expect(marpos.screenshots).toEqual(['marpos/marpos-1', 'marpos/marpos-2'])
  const html = render(<ProjectDialog project={marpos} onClose={() => {}} />)
  expect(html).toContain('marpos/marpos-1.webp')
  expect(html).toContain('marpos/marpos-2.webp')
  expect(html).toContain('aria-label="Next screenshot"')
  expect(html).not.toContain('undefined')
})


test('the CV page offers a deliberate download and a separate PDF preview', () => {
  const html = render(<Cv />)
  expect(html).toContain('href="/cv/download"')
  expect(html).toContain('download="Muhammad-Umar-Ramadhana-CV.pdf"')
  expect(html).toContain('Download CV')
  expect(html).toContain('href="/docs_data/data-umar-v7.pdf"')
  expect(html).toContain('Open PDF')
  expect(html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ')).toContain(
    'Muhammad Umar Ramadhana',
  )
})
