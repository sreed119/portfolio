import { 
    ArrowUpRight, 
    CircleUser, 
    Globe,
    Mail } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="portfolio-shell">
      <header className="site-header page-frame">
        <Link className="wordmark" href="/" aria-label="Go to home">Stephanie Reed</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/">Projects</Link>
          <a href="/about" aria-current="page">About</a>
          <Link href="/#contact">Contact</Link>
          <Link href="/#contact">Resume</Link>
        </nav>
      </header>

      <main id="top">
        <section className="about-page-intro page-frame">
          <p className="eyebrow reveal">About Me</p>
          <h1 className="about-page-title reveal">Producing<br /><em>User-Centered</em><br />Software.</h1>
        </section>

        <section className="about-section page-frame">
          <div className="about-grid">
            <div className="about-copy">
              <p>I&apos;m Stephanie Reed, a senior at Carnegie Mellon University majoring in Information Systems with an additional major in Human-Computer Interaction.</p>
              <p>I&apos;m an aspiring full-stack developer and a Teaching Assistant for Application Design and Development. I aim to create maintainable, impactful software that caters to the needs of users.</p>
              <p>Outside of coursework and code, I&apos;m a member of CMU&apos;s student choir, C Sharp, and the secretary of CMU&apos;s Cosplay Club.</p>
              <a className="text-link" href="mailto:stephanie.reed.3026@gmail.com">Reach Out <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer page-frame"><span>© 2026 Stephanie Reed</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/stephanie-reed-3a5ba6238/" aria-label="LinkedIn"><CircleUser size={18} /></a>
          <a href="https://github.com/sreed119" aria-label="GitHub"><Globe size={18} /></a>
          <a href="mailto:stephanie.reed.3026@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
