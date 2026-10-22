import { useEffect, useRef, useState } from 'react'
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from 'react-router'
import { Arrow, GitHub, Star } from './components/Icons'
import ProjectDialog from './components/ProjectDialog'
import Home from './pages/Home'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Cv from './pages/Cv'
import { contact } from './data'

function Portfolio() {
  const { pathname } = useLocation()
  const [project, setProject] = useState(null)
  const main = useRef(null)
  const previousPath = useRef(pathname)

  useEffect(() => {
    const title =
      pathname === '/'
        ? 'Software Engineer & Curious Builder'
        : pathname === '/experience'
          ? 'Experience'
          : pathname === '/projects'
            ? 'Projects'
            : pathname === '/cv'
              ? 'CV'
              : 'Page not found'
    document.title = `${title} — Umar Ramadhana`
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      main.current?.focus({ preventScroll: true })
      previousPath.current = pathname
    }
  }, [pathname])

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className="site-header wrap">
        <Link to="/" className="brand" aria-label="Umar home">
          <span className="brand-mark">
            u<span>↗</span>
          </span>
          <span>
            umar<span className="brand-period">.</span>
          </span>
        </Link>
        <nav className="main-nav" aria-label="Main navigation">
          {[
            ['/', 'Home', '01'],
            ['/experience', 'Experience', '02'],
            ['/projects', 'Projects', '03'],
          ].map(([to, label, number]) => (
            <NavLink key={to} to={to} end={to === '/'}>
              <span className="nav-number">{number}</span>
              {label}
            </NavLink>
          ))}
        </nav>
        <a className="header-contact" href={`mailto:${contact.email}`}>
          Let’s talk <Arrow diagonal />
        </a>
      </header>
      <main id="main" ref={main} tabIndex={-1}>
        <div key={pathname} className="page-enter">
          <Routes>
            <Route path="/" element={<Home onProjectOpen={setProject} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/cv" element={<Cv />} />
            <Route
              path="/projects"
              element={<Projects onProjectOpen={setProject} />}
            />
            <Route
              path="*"
              element={
                <section className="wrap not-found">
                  <p className="eyebrow">404 / A SMALL DETOUR</p>
                  <h1>
                    Well, this is
                    <br />
                    <span className="serif">uncharted.</span>
                  </h1>
                  <p>
                    This page hasn’t been built. Let’s get you somewhere good.
                  </p>
                  <Link className="button dark" to="/">
                    Back to home <Arrow />
                  </Link>
                </section>
              }
            />
          </Routes>
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-top">
            <div>
              <p className="eyebrow">
                HAVE AN IDEA, A QUESTION, OR A REALLY GOOD MEME?
              </p>
              <a className="footer-heading" href={`mailto:${contact.email}`}>
                Let’s make
                <br />
                <span className="serif">something good.</span>
                <Arrow diagonal />
              </a>
            </div>
            <div className="footer-note">
              <Star />
              <span className="handwritten">
                good things start
                <br />
                with a hello.
              </span>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="mono">
              © {new Date().getFullYear()} UMAR RAMADHANA
            </span>
            <div className="social-links">
              <a href={contact.github} target="_blank" rel="noreferrer">
                <GitHub />
                <span>GitHub</span>
                <Arrow diagonal />
              </a>
              <a href={contact.linkedin} target="_blank" rel="noreferrer">
                LinkedIn <Arrow diagonal />
              </a>
              <a href={contact.youtube} target="_blank" rel="noreferrer">
                YouTube <Arrow diagonal />
              </a>
              <a href={`mailto:${contact.email}`}>
                Email <Arrow diagonal />
              </a>
            </div>
            <span className="mono footer-signoff">
              BUILT WITH CARE. AND CURIOSITY. <span>✳</span>
            </span>
          </div>
        </div>
      </footer>
      {project && (
        <ProjectDialog
          key={project.id}
          project={project}
          onClose={() => setProject(null)}
        />
      )}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Portfolio />
    </BrowserRouter>
  )
}
