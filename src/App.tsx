import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  Briefcase,
  Code2,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Menu,
  MessageSquare,
  Sparkles,
  X,
} from 'lucide-react';
import { profile } from './data/profile';
import { projects } from './data/projects';
import { skillCategories } from './data/skills';
import { journey, softwareEngineering } from './data/experience';
import { socials } from './data/socials';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const sectionFade = 'reveal';
const resumeHref = profile.resume || '#';

function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 },
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [],
  );

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <div className="app-shell">
      <div className="bg-noise" />
      <div className="page-loader" aria-hidden="true">
        <div className="loader-core">{profile.initials}</div>
      </div>

      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a href="#top" className="brand" aria-label="Home">
            <span className="brand-mark">{profile.initials}</span>
            <span>{profile.name}</span>
          </a>

          <div className="nav-desktop">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </div>

          <div className="nav-actions">
            <a
              className="btn btn-ghost"
              href={resumeHref}
              target="_blank"
              rel="noreferrer"
              aria-label="View resume"
            >
              Resume
            </a>
            <button
              className="menu-toggle"
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((prev) => !prev)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="mobile-menu">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
            <a
              className="btn btn-primary"
              href={resumeHref}
              onClick={handleNavClick}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero container section-spacing">
          <div className="hero-copy reveal">
            <p className="eyebrow">Hi, I&apos;m {profile.name}</p>
            <h1>
              <span className="gradient-text">{profile.title}</span>
            </h1>
            <p className="lead">{profile.intro}</p>
            <div className="tech-lines" aria-label="Technology stack">
              {profile.subtitle.split('•').map((item) => (
                <span key={item}>{item.trim()}</span>
              ))}
            </div>
            <div className="cta-row">
              <a href="#projects" className="btn btn-primary">
                View My Projects <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="portrait-card">
              <div className="orb orb-one" />
              <div className="orb orb-two" />
              <img src={profile.image} alt={`${profile.name} portrait`} />
            </div>
          </div>
        </section>

        <section id="about" className={`${sectionFade} container section-spacing`}>
          <div className="section-header">
            <p className="eyebrow">About Me</p>
            <h2>Building thoughtful software for real-world problems.</h2>
          </div>

          <div className="about-grid">
            <div className="about-card about-image-wrap">
              <img src={profile.image} alt={`${profile.name} profile`} className="about-image" />
            </div>
            <div className="about-card about-copy">
              <p>{profile.bio}</p>
              <p>{profile.philosophy}</p>
              <div className="focus-list">
                <span>
                  <Sparkles size={16} />
                  Product-minded engineering
                </span>
                <span>
                  <Code2 size={16} />
                  Full-stack product thinking
                </span>
              </div>
              <div className="learning-box">
                <h3>Currently improving</h3>
                <ul>
                  {profile.learning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className={`${sectionFade} container section-spacing`}>
          <div className="section-header">
            <p className="eyebrow">Skills</p>
            <h2>Technology stacks I work with.</h2>
          </div>

          <div className="tech-visual">
            <div className="tech-node tech-node-main">Software Engineering</div>
            <div className="tech-node tech-node-1">React</div>
            <div className="tech-node tech-node-2">React Native</div>
            <div className="tech-node tech-node-3">Electron.js</div>
            <div className="tech-node tech-node-4">Backend / APIs</div>
            <div className="tech-node tech-node-5">AI / ML</div>
          </div>

          <div className="skill-grid">
            {skillCategories.map((category) => (
              <article key={category.title} className="skill-card">
                <div className="skill-card-head">
                  <h3>{category.title}</h3>
                  <p>{category.description}</p>
                </div>
                <div className="skill-list">
                  {category.items.map(({ name, description, icon: Icon }) => (
                    <div key={name} className="skill-item">
                      <div className="skill-icon-wrap">
                        <Icon size={18} />
                      </div>
                      <div>
                        <strong>{name}</strong>
                        <span>{description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className={`${sectionFade} container section-spacing`}>
          <div className="section-header row-header">
            <div>
              <p className="eyebrow">Projects</p>
              <h2>Selected work and product explorations.</h2>
            </div>
            <div className="filter-group" aria-label="Project filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={category === activeFilter ? 'filter active' : 'filter'}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="project-grid">
            {filteredProjects.map((project) => (
              <article key={project.slug} className="project-card">
                <div className="project-image-wrap">
                  <img src={project.image ?? profile.image} alt={project.title} />
                  <span className="project-category">{project.category}</span>
                </div>
                <div className="project-body">
                  <div className="project-meta">
                    <h3>{project.title}</h3>
                    <span>{project.status}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="tag-list">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                  <button type="button" className="project-link" onClick={() => setSelectedProject(project)}>
                    View Details <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className={`${sectionFade} container section-spacing`}>
          <div className="section-header">
            <p className="eyebrow">Experience</p>
            <h2>How I approach software engineering.</h2>
          </div>

          <div className="journey-layout">
            <div className="timeline">
              {journey.map((step, index) => (
                <div key={step.title} className="timeline-item">
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-content">
                    <span>{step.period}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="engineering-panel">
              <h3>Software engineering focus</h3>
              <div className="engineering-grid">
                {softwareEngineering.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${sectionFade} container section-spacing resume-section`}>
          <div className="resume-card">
            <div>
              <p className="eyebrow">Resume</p>
              <h2>Interested in my background and capabilities?</h2>
            </div>
            <div className="resume-actions">
              <a href={resumeHref} className="btn btn-primary" target="_blank" rel="noreferrer">
                <Download size={18} /> View Resume
              </a>
              <a href={resumeHref} className="btn btn-secondary" download="Bibek_upadhaya_cv.pdf">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className={`${sectionFade} container section-spacing`}>
          <div className="section-header">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something meaningful.</h2>
          </div>

          <div className="contact-grid">
            <div className="contact-panel">
              <div className="contact-item">
                <Mail size={18} />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div className="contact-item">
                <Github size={18} />
                <a href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div className="contact-item">
                <Linkedin size={18} />
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <div className="contact-item">
                <MessageSquare size={18} />
                <a href={profile.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>

            <form className="contact-form" action="#" method="post" onSubmit={(event) => event.preventDefault()}>
              <label>
                Name
                <input type="text" name="name" placeholder="Your name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Message
                <textarea name="message" rows={5} placeholder="Tell me about your project..." />
              </label>
              <button type="submit" className="btn btn-primary form-btn">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>{profile.name}</h3>
            <p>{profile.title}</p>
          </div>
          <div className="footer-links">
            {socials.map((social) => (
              <a key={social.label} href={social.url} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            ))}
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 {profile.name}</span>
        </div>
      </footer>

      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close" onClick={() => setSelectedProject(null)} aria-label="Close project details">
              <X size={16} />
            </button>
            <div className="modal-header">
              <span className="project-category modal-chip">{selectedProject.category}</span>
              <h3>{selectedProject.title}</h3>
            </div>

            <div className="modal-body">
              <div className="modal-image-wrap">
                <img src={selectedProject.image ?? profile.image} alt={selectedProject.title} />
              </div>

              <div className="modal-copy">
                <section>
                  <h4>Project Overview</h4>
                  <p>{selectedProject.description}</p>
                </section>

                <section>
                  <h4>Problem</h4>
                  <p>{selectedProject.problem}</p>
                </section>

                <section>
                  <h4>Solution</h4>
                  <p>{selectedProject.solution}</p>
                </section>

                <section>
                  <h4>Key Features</h4>
                  <ul>
                    {selectedProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h4>Technologies</h4>
                  <div className="tag-list">
                    {selectedProject.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                </section>

                <section>
                  <h4>My Role</h4>
                  <p>{selectedProject.myRole}</p>
                </section>

                {selectedProject.architecture && (
                  <section>
                    <h4>Architecture</h4>
                    <div className="architecture-list">
                      {selectedProject.architecture.map((item, index) => (
                        <div key={`${item}-${index}`} className="architecture-step">
                          <span>{item}</span>
                          {index !== selectedProject.architecture!.length - 1 && <ArrowRight size={14} />}
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <div className="modal-links">
                  {selectedProject.github && selectedProject.github !== '#' && (
                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="btn btn-secondary">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {selectedProject.live && selectedProject.live !== '#' && (
                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="btn btn-primary">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
