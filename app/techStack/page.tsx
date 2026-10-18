import Image from "next/image";
import Link from "next/link";


export default function TechStack() {
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
            <section className="about-page-intro page-frame">
            <p className="eyebrow reveal">Tech Stack</p>
            <h1 className="about-page-title reveal">An Overview of My Technical Skills</h1>
            </section>
        </div>
    )
}
