"use client";

import { useState } from "react";
import Link from "next/link";
import { skills } from "./skills";

const skillTypes = [...new Set(skills.map((skill) => skill.type))].sort();

export default function TechStack() {
    const [selectedType, setSelectedType] = useState("All");
    const filteredSkills = skills
        .filter((skill) => selectedType === "All" || skill.type === selectedType)
        .sort((a, b) => a.name.localeCompare(b.name));

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

            <section className="tech-stack-section page-frame">
                <div className="skills-chart" aria-label="Technical skills and associated experiences">
                    <div className="skills-chart-header">
                        <span>Skill</span>
                        <label className="skill-filter">
                            <span>Type</span>
                            <select
                                aria-label="Filter skills by type"
                                value={selectedType}
                                onChange={(event) => setSelectedType(event.target.value)}
                            >
                                <option value="All">All types</option>
                                {skillTypes.map((type) => (
                                    <option key={type} value={type}>{type}</option>
                                ))}
                            </select>
                        </label>
                        <span>Associated experiences</span>
                    </div>
                    {filteredSkills.map((skill) => (
                        <div className="skill-row" key={skill.name}>
                            <h4>{skill.name}</h4>
                            <span className="skill-type">{skill.type}</span>
                            <ul className="skill-experiences">
                                {skill.experiences.map((experience) => (
                                    <li key={experience}>{experience}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}
