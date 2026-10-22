import { Link } from 'react-router'
import { Arrow, Pin, Star } from '../components/Icons'

export default function Cv() {
  return (
    <section className="cv-page wrap" aria-labelledby="cv-heading">
      <div className="cv-intro">
        <p className="eyebrow">THE SHORT STORY / CURRICULUM VITAE</p>
        <h1 id="cv-heading">My work.<br /><span className="serif highlighted">On paper.</span></h1>
        <p className="cv-description">A closer look at my experience, the systems I’ve helped build, and the tools I work with. All wrapped up in one PDF.</p>
        <div className="cv-actions">
          <a className="button dark" href="/cv/download" download="Muhammad-Umar-Ramadhana-CV.pdf">Download CV <Arrow className="cv-download-arrow" /></a>
          <a className="text-link" href="/docs_data/data-umar-v7.pdf" target="_blank" rel="noreferrer">Open PDF <Arrow diagonal /></a>
        </div>
        <p className="cv-format mono">PDF FORMAT · LATEST AVAILABLE VERSION</p>
        <Link className="text-link cv-journey" to="/experience">For the longer story, explore my experience <Arrow /></Link>
      </div>
      <div className="cv-paper">
        <span className="tape" />
        <div className="cv-paper-top"><span className="mono">CURRICULUM VITAE</span><Star /></div>
        <img className="cv-photo" src="/media/me-enhanced.webp" alt="Umar smiling" width="80" height="80" />
        <h2>Muhammad Umar<br />Ramadhana<span className="brand-period">.</span></h2>
        <p className="cv-role">Software Engineer</p>
        <p className="cv-location"><Pin /> Jakarta, Indonesia</p>
        <div className="cv-paper-notes">
          <p><span>01</span> Production systems that people rely on.</p>
          <p><span>02</span> Products, from first idea to delivery.</p>
          <p><span>03</span> A little curiosity in everything I build.</p>
        </div>
        <span className="handwritten cv-signature">engineer. builder. human.</span>
      </div>
    </section>
  )
}
