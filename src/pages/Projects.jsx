import { useState } from 'react'
import { Star } from '../components/Icons'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data'

export default function Projects({ onProjectOpen }) {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')
  const shown = projects.filter(
    (project) =>
      (filter === 'all' || project.type === filter) &&
      `${project.name} ${project.category} ${project.stack.join(' ')}`
        .toLowerCase()
        .includes(search.trim().toLowerCase()),
  )

  return (
    <div className="wrap">
      <header className="page-heading projects-heading">
        <div>
          <p className="eyebrow">THE WORKSHOP / IDEAS MADE REAL</p>
          <h1>
            Small ideas.
            <br />
            <span className="serif highlighted">Real things.</span>
          </h1>
        </div>
        <div className="page-heading-aside">
          <div className="project-heading-doodle">
            <Star />
            <span className="handwritten">
              made with
              <br />a little “what if?”
            </span>
          </div>
          <p>
            A collection of products, experiments, and useful little tools. Some
            from work. Most from a question I couldn’t leave alone.
          </p>
        </div>
      </header>
      <div className="project-toolbar">
        <div className="project-filters" aria-label="Filter projects">
          {[
            ['all', 'Everything'],
            ['personal', 'Side quests'],
            ['work', 'At work'],
          ].map(([value, label]) => (
            <button
              key={value}
              className={filter === value ? 'active' : ''}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {label}
              <span>
                {value === 'all'
                  ? projects.length
                  : projects.filter((p) => p.type === value).length}
              </span>
            </button>
          ))}
        </div>
        <label className="project-search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <circle cx="10.5" cy="10.5" r="6.5" />
            <path d="m16 16 5 5" />
          </svg>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="search"
            aria-label="Search projects by name or technology"
            placeholder="Find something curious…"
          />
        </label>
      </div>
      <div className="results-label mono" role="status">
        {String(shown.length).padStart(2, '0')} PROJECT
        {shown.length !== 1 && 'S'} TO EXPLORE{' '}
        <span>ORDERED BY YEAR, THEN CURIOSITY</span>
      </div>
      {shown.length ? (
        <section className="project-grid gallery" aria-label="Projects">
          {shown.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={projects.indexOf(project)}
              onOpen={onProjectOpen}
            />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <Star />
          <h2>No discoveries. Yet.</h2>
          <p>Try a different name or technology, or start fresh.</p>
          <button
            className="button dark"
            onClick={() => {
              setSearch('')
              setFilter('all')
            }}
          >
            Show everything
          </button>
        </div>
      )}
      <div className="workshop-note">
        <span aria-hidden="true">↳</span>
        <p>
          This workshop is always a work in progress.
          <br />
          <span>Some projects are archived. The curiosity isn’t.</span>
        </p>
        <a
          href="https://github.com/umarkotak"
          target="_blank"
          rel="noreferrer"
          className="text-link"
        >
          More on GitHub ↗
        </a>
      </div>
    </div>
  )
}
