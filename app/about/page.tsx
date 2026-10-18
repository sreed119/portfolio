import { 
    ArrowUpRight, 
    Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const experiences = [
  { number: "01", title: "Software Engineering Intern", company: "Mitsubishi Electric Power Products, Inc.", duration: "Summer 2026", manager: "Mike Doak, Product Line Manager - Power I", image:"Mitsubishi.png", description: "In my role on the Power-I Team, I built a new React dashboard to monitor and audit the performance of Power-I's Machine Learning model services for over 30,000 images per industry client. The dashboard has since been integrated into the Power-I application in production." },
  { number: "02", title: "Software Development Intern", company: "CBites", duration: "Summer 2025", manager: "David McCabe, CEO", image:"CBites.jpg", description: "At CBites, I developed a React Native map feature visualizing partner location data. I additionally expanded the endpoint containing this data for over 1,000 partner locations." }
];

export default function About() {
  return ( 
    <div className="portfolio-shell">
      <header className="site-header page-frame">
        <a className="wordmark" href="#top" aria-label="Go to top">Stephanie Reed</a>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/#work">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/techStack">Tech Stack</Link>
          <Link href="/#contact">Contact</Link>
          <Link href="/documents/Stephanie_Reed_Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</Link>
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
              <p>I&apos;m Stephanie Reed, a senior at Carnegie Mellon University majoring in Information Systems with an additional major in Human-Computer Interaction. I&apos;ve been on the Dean&apos;s List <b>every semester</b> since my freshman year.</p>
              <p>I&apos;m an aspiring full-stack developer and a Teaching Assistant for Application Design and Development. I aim to create maintainable, impactful software that caters to the needs of users.</p>
              <p>Outside of coursework and code, I&apos;m a executive board member of our student choir, <Link href="https://cmucsharp.com/" target="_blank" rel="noopener noreferrer"><strong>CMU C Sharp</strong></Link>, and the secretary of <Link href="https://tartanconnect.cmu.edu/cosplay/home/" target="_blank" rel="noopener noreferrer"><strong>Cosplay@CMU</strong></Link>. My favorite creative outlets other than front-end work are music and crafts, which ultimately drives my personal projects!</p>
              <br />
            <p>Interested in my time at Carnegie Mellon? You can view my latest transcript <Link href="/documents/Stephanie_Reed_Transcript.pdf" target="_blank" rel="noopener noreferrer"><strong>here</strong></Link>, or my relevant courses <Link href="/about#courses"><strong>below</strong></Link>!</p>
              <a className="text-link" href="mailto:stephanie.reed.3026@gmail.com">Get in Touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="about-art">
              <Image
                src="/images/stephanieReedFull.png"
                alt="Stephanie Reed"
                fill
                sizes="(max-width: 700px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="experience-section page-frame" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Experience <span>(02)</span></p>
            <span className="section-note">Work Experience in Software</span>
          </div>
          <div className="experience-list">{experiences.map((experience) => 
            <div className="experience-row" key={experience.number}>
              <div className="experience-art">
                <Image className="experience-image" 
                  src={"/images/" + experience.image} 
                  alt={experience.title} 
                  fill 
                  priority 
                  sizes="(max-width: 700px) 42vw, 260px"/>
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
          {/* <MeppiCarousel /> */}
        </section>

        <section className="teaching-section page-frame">
          <div className="section-heading">
            <p className="eyebrow">Teaching</p>
            <span className="section-note">Teaching at Carnegie Mellon</span>
          </div>
          <div className="teaching-grid">
            <div className="teaching-copy">
              <p>I am a Teaching Assistant for <b>67-272: Application Design and Development</b>. This is a core course for the CMU&rsquo;s Information Systems program that teaches students how to build applications in Ruby on Rails. In my time as a teaching assistant, I run weekly labs teaching students React, MVC Software Architecutre, RESTful APIs, and other foundational skills for building software.</p>
              <br />
              <p>This coming spring, I will be the <b>Head Teaching Assistant</b> of grading for the course. I will facilitate the grading process of all assignments (exams, quizzes, and projects) for all TAs on staff.</p>
            </div>
            <div className="teaching-art">
              <Image
                src="/images/67272.jpg"
                alt="Teaching at Carnegie Mellon"
                fill
                sizes="(max-width: 700px) 100vw, 48vw"
              />
            </div>
          </div>
        </section>

        <section className="courses-section page-frame" id="courses">
          <div className="section-heading">
            <p className="eyebrow">Courses</p>
            <span className="section-note">Relevant Coursework</span>
          </div>
          <div className="courses">
            <div className="course-group">
              <h2>CS Fundamentals</h2>
              <ul className="course-list">
                <li>15-110: Principles of Computing</li>
                <li>15-112: Fundamentals of Computer Science</li>
                <li>15-121: Data Structures and Algorithms</li>
              </ul>
            </div>
            <div className="course-group">
              <h2>Software Engineering</h2>
              <ul className="course-list">
                <li>17-313: Software Engineering</li>
                <li>67-262: Database Development</li>
                <li>67-272: Application Design and Development <b>[Teaching Assistant]</b></li>
                <li>67-373: Information Systems Consulting Project</li>
                <li>67-443: Mobile App Development <b>[Currently Taking]</b></li>
              </ul>
            </div>
            <div className="course-group">
              <h2>UI/UX</h2>
              <ul className="course-list">
                <li>05-391: Designing Human-Centered Software (DHCS)</li>
                <li>05-360: Interaction Design Fundamentals (IxDF)</li>
                <li>05-410: User-Centered Research and Evaluation (UCRE)</li>
                <li>05-317: Design of AI Products</li>
                <li>05-361: Advanced Interaction Design</li>
                <li>05-315: Persuasive Design <b>[Currently Taking]</b></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="robotics-section page-frame">
          <div className="section-heading">
            <p className="eyebrow">Robotics</p>
            <span className="section-note">FIRST Tech Challenge (FTC), Nighthawk Robotics</span>
          </div>
          <div className="robotics-grid">
            <div className="robotics-art">
              <Image
                src="/images/NighthawkRobotics.jpg"
                alt="Nighthawk Robotics team"
                fill
                sizes="(max-width: 700px) 100vw, 48vw"
              />
            </div>
            <div className="robotics-copy">
              <p>I was the captain of <Link href="https://www.nighthawkrobotics.com/" target="_blank" rel="noopener noreferrer"><strong>Nighthawk Robotics</strong></Link>, team 11943 of the FIRST Tech Challenge from the Nightingale-Bamford School, during the Power Play season (2022-2023).</p>
              <p>Our team placed as <b>Finalist Alliance Captains in the NYC Super Qualifier</b> and won the <b>Think Award at the New York City Championships</b>. I was a member of the team in all four years of high school at Nightingale, specializing in autonomous robot programming in Java.</p>
            </div>
          </div>
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
