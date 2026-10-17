import { useEffect, useRef, useState } from 'react'
import { Arrow, GitHub } from './Icons'

export default function ProjectDialog({ project, onClose }) {
  const dialog = useRef(null)
  const gallery = useRef(null)
  const [shot, setShot] = useState(0)
  const multiple = project.screenshots.length > 1
  const galleryId = `screenshots-${project.id}`

  function goTo(index) {
    const element = gallery.current
    const next =
      (index + project.screenshots.length) % project.screenshots.length
    element.scrollTo({ left: next * element.clientWidth })
  }

  function handleGalleryKey(event) {
    const destinations = {
      ArrowLeft: shot - 1,
      ArrowRight: shot + 1,
      Home: 0,
      End: project.screenshots.length - 1,
    }
    if (Object.hasOwn(destinations, event.key)) {
      event.preventDefault()
      goTo(destinations[event.key])
    }
  }

  useEffect(() => {
    const element = dialog.current
    const trigger = document.activeElement
    element.showModal()
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      element.close()
      document.body.style.overflow = previous
      if (trigger instanceof HTMLElement && trigger.isConnected) {
        trigger.focus({ preventScroll: true })
      }
    }
  }, [])

  return (
    <dialog
      ref={dialog}
      className="project-dialog"
      aria-labelledby="project-dialog-title"
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="dialog-content">
        <div className="dialog-top">
          <span className="mono">
            A LOOK UNDER THE HOOD{project.year && ` / ${project.year}`}
          </span>
          <button
            className="close-button"
            onClick={onClose}
            aria-label="Close project"
          >
            ×
          </button>
        </div>
        <div
          ref={gallery}
          id={galleryId}
          className={`screenshot-gallery ${project.color}`}
          role="region"
          aria-roledescription="carousel"
          aria-label={`${project.name} screenshots`}
          tabIndex={multiple ? 0 : undefined}
          onKeyDown={multiple ? handleGalleryKey : undefined}
          onScroll={(event) => {
            const element = event.currentTarget
            setShot(
              Math.max(
                0,
                Math.min(
                  project.screenshots.length - 1,
                  Math.round(element.scrollLeft / element.clientWidth),
                ),
              ),
            )
          }}
        >
          {project.screenshots.map((image, index) => (
            <figure
              key={image}
              className="screenshot-slide"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${project.screenshots.length}`}
            >
              <img
                src={`/images/projects/${image}.webp`}
                alt={`${project.name}, screenshot ${index + 1}`}
                width="1200"
                height="750"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            </figure>
          ))}
        </div>
        {multiple && (
          <>
            <div className="gallery-caption">
              <span className="handwritten">
                A little swipe goes a long way ↔
              </span>
              <span
                className="mono"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                {String(shot + 1).padStart(2, '0')} /{' '}
                {String(project.screenshots.length).padStart(2, '0')}
              </span>
            </div>
            <div className="gallery-navigation">
              <button
                className="gallery-step gallery-back"
                aria-label="Previous screenshot"
                aria-controls={galleryId}
                onClick={() => goTo(shot - 1)}
              >
                <Arrow /> Go back
              </button>
              <div className="screenshot-tabs" aria-label="Choose a screenshot">
                {project.screenshots.map((image, index) => (
                  <button
                    key={image}
                    className={index === shot ? 'selected' : ''}
                    aria-label={`Show screenshot ${index + 1}`}
                    aria-pressed={index === shot}
                    aria-controls={galleryId}
                    onClick={() => goTo(index)}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </button>
                ))}
              </div>
              <button
                className="gallery-step gallery-next"
                aria-label="Next screenshot"
                aria-controls={galleryId}
                onClick={() => goTo(shot + 1)}
              >
                Next peek <Arrow />
              </button>
            </div>
          </>
        )}
        <div className="dialog-copy">
          <span className="eyebrow">
            {project.type === 'work' ? 'WORK PROJECT' : 'PERSONAL PROJECT'}
          </span>
          <h2 id="project-dialog-title">{project.name}</h2>
          <p>{project.description}</p>
          <div className="tags">
            {project.stack.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
          <div className="dialog-links">
            {project.url && (
              <a
                className="button dark"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                Visit project <Arrow diagonal />
              </a>
            )}
            {project.repo && (
              <a
                className="button outline"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
              >
                <GitHub /> Explore the code <Arrow diagonal />
              </a>
            )}
          </div>
        </div>
      </div>
    </dialog>
  )
}
