import { Link } from 'react-router'
import { Arrow, Star } from '../components/Icons'
import { experiences } from '../data'

export default function Experience() {
  return (
    <div className="wrap">
      <header className="page-heading experience-heading">
        <div>
          <p className="eyebrow">THE JOURNEY / 2018 — NOW</p>
          <h1>
            A work in
            <br />
            <span className="serif highlighted">progress.</span>
          </h1>
        </div>
        <div className="page-heading-aside">
          <Star />
          <p>
            Building and operating production systems across entertainment,
            hospitality, advertising, and consumer platforms. Involved from the
            first requirements to the final delivery.
          </p>
          <span className="handwritten">and there’s more to come.</span>
        </div>
      </header>
      <div className="journey-summary">
        <span className="mono">THE SHORT VERSION</span>
        <span>
          Learn <Arrow /> Build <Arrow /> Lead <Arrow /> Keep learning{' '}
          <span aria-hidden="true">↶</span>
        </span>
        <Link to="/cv" className="text-link">
          Résumé <span className="mono">PDF</span>
          <Arrow diagonal />
        </Link>
      </div>
      <section className="timeline" aria-label="Work experience">
        {experiences.map((experience, index) => (
          <div
            className="timeline-row"
            key={`${experience.company}-${experience.role}`}
          >
            <div className="timeline-date mono">
              <span>{experience.start}</span>
              <span>
                {experience.end === 'Present' ? 'NOW' : experience.end}
              </span>
              {index === 0 && (
                <span className="now-label">
                  <span className="status-dot" /> CURRENTLY
                </span>
              )}
            </div>
            <details className="experience-card" open={index === 0}>
              <summary>
                <div className="company-mark">
                  {experience.logo ? (
                    <img
                      src={`/images/projects/${experience.logo}.jpeg`}
                      alt=""
                      width="48"
                      height="48"
                      loading="lazy"
                    />
                  ) : (
                    <span>{experience.company.charAt(0)}.</span>
                  )}
                </div>
                <div className="experience-title">
                  <span className="experience-company">
                    <span>
                      {experience.company}
                      {experience.employment && ` · ${experience.employment}`}
                    </span>
                    {index === 0 && <span className="current-badge">NOW</span>}
                  </span>
                  <h2>{experience.role}</h2>
                </div>
                <span className="expand-icon" aria-hidden="true">
                  +
                </span>
              </summary>
              <div className="experience-detail">
                <span className="eyebrow chapter-label">{experience.tag}</span>
                <p>{experience.summary}</p>
                <ul>
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                {experience.stack.length > 0 && (
                  <div className="tags">
                    {experience.stack.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                )}
                {experience.url && (
                  <a
                    className="text-link"
                    href={experience.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore the company <Arrow diagonal />
                  </a>
                )}
              </div>
            </details>
          </div>
        ))}
      </section>
      <div className="timeline-end">
        <Star />
        <p className="handwritten">
          Started with curiosity.
          <br />
          Still running on it.
        </p>
      </div>
    </div>
  )
}
