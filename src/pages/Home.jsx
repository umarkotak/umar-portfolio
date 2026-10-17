import { useState } from 'react'
import { Link } from 'react-router'
import { Arrow, Pin, Star } from '../components/Icons'
import WorkHighlights from '../components/WorkHighlights'

export default function Home({ onProjectOpen }) {
  const [spins, setSpins] = useState(0)
  return (
    <>
      <section className="hero wrap">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> A LITTLE CURIOUS. ALWAYS BUILDING.
          </p>
          <h1>
            Serious code.
            <br />
            Playful{' '}
            <span className="scribble">
              mind.
              <svg viewBox="0 0 320 24" fill="none" aria-hidden="true">
                <path d="M4 15C90 0 191 0 314 9M28 22c91-12 190-12 267-6" />
              </svg>
            </span>
          </h1>
          <p className="hero-intro">
            Hi, I’m <strong>Umar</strong> <span className="wave">✳</span> — a
            software engineer who turns
            <br className="desktop-break" /> big “what ifs” into useful little
            things.
          </p>
          <p className="hero-description">
            Backend by instinct. Full stack by curiosity.
            <br />
            Building products, connecting dots, and enjoying the process.
          </p>
          <div className="hero-actions">
            <Link className="button dark" to="/projects">
              Explore my work <Arrow diagonal />
            </Link>
            <Link className="text-link" to="/experience">
              The story so far <Arrow />
            </Link>
          </div>
          <div className="hero-location mono">
            <Pin /> JAKARTA, INDONESIA <span>·</span> OPEN TO GOOD CONVERSATIONS
          </div>
        </div>
        <div className="hero-collage">
          <span className="handwritten portrait-note">
            a human behind the code
            <svg viewBox="0 0 90 60" fill="none" aria-hidden="true">
              <path d="M3 3c55-5 80 21 68 46m-12-8 12 11 12-10" />
            </svg>
          </span>
          <div className="photo-backing" />
          <figure className="portrait">
            <span className="tape" />
            <img
              src="/media/me-enhanced.webp"
              width="372"
              height="446"
              alt="Umar smiling, wearing a Gojek shirt"
              fetchPriority="high"
            />
            <figcaption className="handwritten">
              Umar, in his natural habitat :)
            </figcaption>
          </figure>
          <button
            className="curiosity-star"
            onClick={() => setSpins(spins + 1)}
            aria-label="Give the curiosity star a spin"
            title="A little curiosity goes a long way"
            style={{ '--turn': `${spins * 120}deg` }}
          >
            <Star />
            <span className="star-face">
              <i />
              <i />
              <b />
            </span>
          </button>
          <span className="handwritten star-note">stay curious ↗</span>
          <div className="hello-sticker">
            <span>HELLO, WORLD!</span>
            <strong>
              Building since
              <br />
              2015.
            </strong>
            <span className="sticker-spark">✳</span>
          </div>
          <div className="terminal-note">
            <span className="terminal-dots">● ● ●</span>
            <span>
              <i>~</i> whoami
            </span>
            <strong>engineer. builder. human.</strong>
            <span className="terminal-cursor">▍</span>
          </div>
          <span className="collage-caption mono">
            FIG. 01 — STILL FIGURING THINGS OUT
          </span>
        </div>
      </section>
      <div className="tools-strip">
        <div className="wrap tools-inner">
          <span className="mono tools-label">MY EVERYDAY TOOLBOX</span>
          {['Go', 'Ruby on Rails', 'React', 'Python', 'PostgreSQL'].map(
            (tool) => (
              <span className="tool" key={tool}>
                <span aria-hidden="true">✳</span>
                {tool}
              </span>
            ),
          )}
          <span className="mono tools-after">& A LITTLE INGENUITY</span>
        </div>
      </div>
      <WorkHighlights onProjectOpen={onProjectOpen} />
      <section className="about-section wrap">
        <div className="about-heading">
          <p className="eyebrow">02 / MORE THAN A JOB TITLE</p>
          <h2>
            Backend brain.
            <br />
            <span className="serif">Builder at heart.</span>
          </h2>
          <p>
            I like making complicated things feel simple. Sometimes that means
            designing a system. Sometimes it means building a tiny tool that
            saves someone’s afternoon.
          </p>
          <Link className="text-link" to="/experience">
            Get to know my journey <Arrow diagonal />
          </Link>
        </div>
        <div className="about-notebook">
          <span className="mono notebook-label">A FEW THINGS I BELIEVE</span>
          <div className="belief">
            <span>01</span>
            <p>
              Make it useful.
              <small>Real problems deserve thoughtful solutions.</small>
            </p>
          </div>
          <div className="belief">
            <span>02</span>
            <p>
              Keep it simple.
              <small>Good engineering leaves room to breathe.</small>
            </p>
          </div>
          <div className="belief">
            <span>03</span>
            <p>
              Never stop being a beginner.
              <small>There’s always something new to figure out.</small>
            </p>
          </div>
          <span className="handwritten notebook-sign">
            build. learn. repeat. <span>↶</span>
          </span>
        </div>
      </section>
      <section className="current-chapter wrap">
        <div className="current-icon" aria-hidden="true">
          ↗
        </div>
        <div>
          <span className="eyebrow">IN THE CURRENT CHAPTER</span>
          <h3>Full Stack Engineer at Alakin Health</h3>
          <p>
            Building an AI health coach and a marketplace for health training.
          </p>
        </div>
        <Link
          className="round-link"
          to="/experience"
          aria-label="Read about Umar’s current role"
        >
          <Arrow diagonal />
        </Link>
      </section>
    </>
  )
}
