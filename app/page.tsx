import {
  ArrowUpRight,
  Mail,
} from "lucide-react";
import Image from "next/image";

const projects = [
  { number: "01", title: "Find a Cosplay: Costume Resource Management System", type: "Developer · 2026", description: "A universal hub to find and review costume resources and materials from several storefronts.", className: "project-findacosplay", href: "https://findacosplay.onrender.com/home" },
  { number: "02", title: "CMU C Sharp: University Organization's Website", type: "Developer · 2026", description: "The official website for Carnegie Mellon University's student-run singing organization, C Sharp.", className: "project-csharp", href: "https://cmucsharp.com/" }
];

export default function Home() {
  return (
    <div className="portfolio-shell">
      <header className="site-header page-frame">
        <a className="wordmark" href="#top" aria-label="Go to top">Stephanie Reed</a>
        <nav className="site-nav" aria-label="Primary navigation"><a href="#work">Projects</a><a href="/about">About</a><a href="#contact">Contact</a><a href="/documents/Stephanie_Reed_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></nav>
      </header>
      <main id="top">
        <section className="hero page-frame">
          <p className="eyebrow reveal">Full-Stack Developer</p>
          <h1 className="hero-title reveal">Stephanie Reed</h1>
          <div className="hero-photo reveal"><Image src="/images/stephanieReedHeadshot.png" alt="Stephanie Reed" fill priority sizes="(max-width: 700px) 42vw, 260px" /></div>
          <div className="hero-bottom reveal">
            <p className="hero-intro">
              I&rsquo;m Stephanie Reed, a senior at Carnegie Mellon University majoring in Information Systems with an additional major in Human-Computer Interaction.
              Aspiring full-stack developer, Teaching Assistant for Application Design and Development, and a member of CMU&rsquo;s student choir, C Sharp.
            </p>
            <a className="text-link" href="/about#experience">View my Experience <ArrowUpRight size={17} /></a>
          </div>
        </section>
        <section className="work-section page-frame" id="work">
          <div className="section-heading">
            <p className="eyebrow">Projects <span>(02)</span></p>
            <span className="section-note">A selection of recent projects</span>
          </div>
          <div className="project-list">{projects.map((project) => <a className="project-row" href={project.href} target="_blank" rel="noopener noreferrer" key={project.number}>
            <div className={`project-art ${project.className}`}>
              <span>{project.number}</span>
              <Image className="project-image" src={project.number === "01" ? "/images/findacosplay.png" : "/images/csharp.png"} alt={`${project.title} preview`} fill sizes="(max-width: 700px) 100vw, 55vw" />
            </div>
            <div className="project-copy">
              <span className="project-type">{project.type}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
            <ArrowUpRight className="project-arrow" size={24} strokeWidth={1.5} /></a>)}
          </div>
        </section>
        <section className="contact-section page-frame" id="contact">
          <div>
            <p className="eyebrow">Professional Development</p>
            <h2>Seeking Entry-Level <br /><em>Full-Stack Developer</em> Roles</h2>
          </div>
          <a className="contact-email" href="mailto:stephanie.reed.3026@gmail.com">stephanie.reed.3026@gmail.com <ArrowUpRight size={22} /></a>
        </section>
      </main>
      <footer className="site-footer page-frame"><span>© 2026 Stephanie Reed</span>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/stephanie-reed-3a5ba6238/" target="_blank" aria-label="LinkedIn"><Image src="/Linkedin-Logo.svg" alt="" width={18} height={18} /></a>
          <a href="https://github.com/sreed119" target="_blank" aria-label="GitHub"><Image src="/GitHub_Invertocat_Black.svg" alt="" width={18} height={18} /></a>
          <a href="mailto:stephanie.reed.3026@gmail.com" aria-label="Email"><Mail size={18} /></a>
        </div>
        <a href="#top">Back to top ↑</a>
      </footer>
    </div>
  );
}
