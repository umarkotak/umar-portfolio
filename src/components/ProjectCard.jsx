import { Arrow } from './Icons'

export default function ProjectCard({ project, onOpen, index = 0 }) {
  return (
    <article className="project-card">
      <button
        className={`project-preview ${project.color}`}
        onClick={() => onOpen(project)}
        aria-label={`Explore ${project.name}`}
      >
        <span className="preview-index mono">
          EXPERIMENT_{String(index + 1).padStart(2, '0')}
        </span>
        <span className="preview-type mono">
          {project.type === 'work' ? 'AT WORK' : 'SIDE QUEST'}
        </span>
        <span className="browser-frame">
          <span className="browser-bar">
            <i />
            <i />
            <i />
            <span>{project.name.toLowerCase().replaceAll(' ', '-')}</span>
          </span>
          <img
            src={`/images/projects/${project.image}.webp`}
            alt={`${project.name} application screenshot`}
            width="1200"
            height="750"
            loading="lazy"
            decoding="async"
          />
        </span>
        <span className="preview-open">
          <Arrow diagonal />
        </span>
      </button>
      <div className="project-meta mono">
        <span>{project.stack.slice(0, 3).join(' / ')}</span>
        <span>{project.year}</span>
      </div>
      <h3>
        <button className="project-title" onClick={() => onOpen(project)}>
          <span>{project.name}</span>
          <Arrow diagonal />
        </button>
      </h3>
      <p>{project.category}</p>
    </article>
  )
}
