import { 
    ArrowUpRight, 
    CircleUser, 
    Globe,
    Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const experiences = [
  { number: "01", title: "Software Engineering Intern", company: "Mitsubishi Electric Power Products, Inc.", duration: "Summer 2026", manager: "Mike Doak, Product Line Manager - Power I", image:"Mitsubishi.png", description: "In my role on the Power-I Team, I built a new React dashboard for clients to monitor and audit the performance of Power-I's machine learning model services. The dashboard has since been integrated into the Power-I application in production." },
  { number: "02", title: "Software Development Intern", company: "CBites", duration: "Summer 2025", manager: "David McCabe, CEO", image:"CBites.jpg", description: "At CBites, I developed a React Native map feature visualizing partner location data. I additionally expanded the endpoint containing this data for over 1000 partner locations." }
];

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

        <section className="experience-section page-frame">
          <div className="section-heading">
            <p className="eyebrow">Experience <span>(02)</span></p>
            <span className="section-note">Work Experience in Software</span>
          </div>
          <div className="experience-list">{experiences.map((experience) => 
            <div className="experience-row" key={experience.number}>
              <div className="experience-art">
                <Image className="experience-image" src={"/images/" + experience.image} alt={experience.title} fill priority sizes="(max-width: 700px) 42vw, 260px"/>
              </div>
              <div className="experience-copy">
                <h2>{experience.title}</h2>
                <h4>{experience.company}</h4>
              </div>
              <span className="experience-duration">{experience.duration}</span>
              <span className="experience-manager">Manager: {experience.manager}</span>
              <p className="experience-description">{experience.description}</p>
            </div>)}
          </div>
        </section>

        {/* <section className="teaching-section page-frame">
          <div className="section-heading">
            <p className="eyebrow">Teaching</p>
            <span className="section-note">Teaching At CMU</span>
          </div>
        </section> */}
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
