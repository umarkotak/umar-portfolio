import { Link } from 'react-router'
import { Arrow } from './Icons'
import { projects } from '../data'

export default function WorkHighlights({ onProjectOpen }) {
  const cabocil = projects.find((project) => project.id === 'cabocil')
  const everywhere = projects.find((project) => project.id === 'everywhere')

  return (
    <section
      className="work-highlights wrap section-space"
      aria-labelledby="highlights-heading"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">01 / THREE CHAPTERS, ONE COMMON THREAD</p>
          <h2 id="highlights-heading">
            Built for people.
            <br />
            <span className="serif">Made to matter.</span>
          </h2>
        </div>
        <p className="highlights-intro">
          Everyday services. Shared experiences. Little discoveries.
          <br />
          Different worlds, the same drive to make something useful.
        </p>
      </div>

      <article className="highlight-row highlight-golife">
        <div className="highlight-art mint">
          <span className="highlight-art-label mono">FIELD NOTES / 01</span>
          <img
            src="/images/illustrations/golife.svg"
            alt=""
            width="560"
            height="380"
            loading="lazy"
          />
          <span className="highlight-art-note handwritten">
            a little less friction in everyday life.
          </span>
        </div>
        <div className="highlight-copy">
          <p className="eyebrow">
            GOLIFE, GOTO / BACK END ENGINEER / 2018–2020
          </p>
          <h3>
            Big systems.
            <br />
            <span className="serif">Everyday little wins.</span>
          </h3>
          <p>
            Behind every booked clean or massage was a service that needed to
            work. At GoLife, I built and maintained the backend connecting
            people with the services that made their day easier.
          </p>
          <ul>
            <li>
              Marketplace services for partner listings, bookings, and payments.
            </li>
            <li>
              Core flows from discovery and notifications to reviews, discounts,
              and vouchers.
            </li>
          </ul>
          <div className="highlight-proof">
            <strong>Thousands</strong>
            <span>
              of daily active users, with high weekend order concurrency.
            </span>
          </div>
          <Link className="text-link" to="/experience">
            Explore my GoLife experience <Arrow diagonal />
          </Link>
        </div>
      </article>

      <article className="highlight-row highlight-everywhere">
        <div className="highlight-art peach">
          <span className="highlight-art-label mono">FIELD NOTES / 02</span>
          <img
            src="/images/illustrations/everywhere.svg"
            alt=""
            width="560"
            height="380"
            loading="lazy"
          />
          <span className="highlight-art-note handwritten">
            one signal. a thousand possibilities.
          </span>
        </div>
        <div className="highlight-copy">
          <p className="eyebrow">
            EVERYWHERE.ID / LEAD BACK END ENGINEER / 2023–2025
          </p>
          <h3>
            From one creator.
            <br />
            <span className="serif">To everywhere.</span>
          </h3>
          <p>
            I helped connect online entertainment with real-world venues, taking
            products from requirements to delivery and building the scheduling
            and advertising systems behind the screens.
          </p>
          <ul>
            <li>
              Programmatic advertising across 1,000+ connected screens, with
              features used by 30+ clients.
            </li>
            <li>
              Simplified cloud infrastructure from Kubernetes to virtual
              machines.
            </li>
          </ul>
          <div className="highlight-proof">
            <strong>
              $10,000 <span aria-hidden="true">↘</span> $600
            </strong>
            <span>
              approximate monthly infrastructure cost, after migration and
              simplification.
            </span>
          </div>
          <button
            className="text-link"
            onClick={() => onProjectOpen(everywhere)}
            aria-label="Explore Live Everywhere"
          >
            Take a look at Everywhere <Arrow diagonal />
          </button>
        </div>
      </article>

      <article className="highlight-row highlight-cabocil">
        <div className="highlight-art lavender">
          <span className="highlight-art-label mono">FIELD NOTES / 03</span>
          <img
            src="/images/illustrations/cabocil.svg"
            alt=""
            width="560"
            height="380"
            loading="lazy"
          />
          <span className="highlight-art-note handwritten">
            small humans. very big imaginations.
          </span>
        </div>
        <div className="highlight-copy">
          <p className="eyebrow">CABOCIL / PERSONAL PROJECT</p>
          <h3>
            A little playground.
            <br />
            <span className="serif">For curious minds.</span>
          </h3>
          <p>
            My own corner of the internet for children to learn, explore, and
            play. I built Cabocil as a self-hosted educational platform,
            bringing curated videos, digital books, quizzes, and problem-solving
            games together.
          </p>
          <ul>
            <li>Learning and play in one place, with activity tracking.</li>
            <li>
              An independent product, built from an idea into something people
              use.
            </li>
          </ul>
          <div className="highlight-proof">
            <strong>50+ daily active users</strong>
            <span>
              4,000+ unique visitors · 60,000+ page views
              <br />
              As of June 2026.
            </span>
          </div>
          <button
            className="text-link"
            onClick={() => onProjectOpen(cabocil)}
            aria-label="Explore Cabocil"
          >
            Step inside Cabocil <Arrow diagonal />
          </button>
        </div>
      </article>
      <div className="highlights-end">
        <span className="handwritten">
          and there’s plenty more in the workshop.
        </span>
        <Link className="button outline" to="/projects">
          Explore all projects <Arrow diagonal />
        </Link>
      </div>
    </section>
  )
}
