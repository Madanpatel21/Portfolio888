import { useEffect, useMemo, useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Atom, Command, Github, Layers3, Menu, Moon, Orbit, Search, Sun, X, Zap } from "lucide-react";
import { domains, profile, projects } from "./data";
import UniverseCanvas from "./components/UniverseCanvas";
import ProjectCard from "./components/ProjectCard";

type Theme = "dark" | "light";

export default function App() {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("madan-theme");
    if (saved === "light" || saved === "dark") return saved;
    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  });
  const [activeDomain, setActiveDomain] = useState("all");
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("madan-theme", theme);
  }, [theme]);

  const filteredProjects = useMemo(() => projects.filter((project) => {
    const matchesDomain = activeDomain === "all" || project.domain === activeDomain;
    const text = `${project.title} ${project.description} ${project.stack.join(" ")}`.toLowerCase();
    return matchesDomain && text.includes(query.toLowerCase());
  }), [activeDomain, query]);

  const featured = projects.filter((project) => project.featured).slice(0, 6);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Madan Patel home">
          <span className="brand-mark">MP<span>.</span></span>
          <span className="brand-name">MADAN PATEL <small>H S / ENGINEERING</small></span>
        </a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          {[["Universe", "universe"], ["Domains", "domains"], ["Projects", "projects"], ["About", "about"]].map(([label, id]) => (
            <button key={id} onClick={() => scrollTo(id)}>{label}</button>
          ))}
          <button className="mobile-contact" onClick={() => scrollTo("contact")}>Let's connect <ArrowUpRight size={15} /></button>
        </nav>
        <div className="header-actions">
          <button className="icon-button theme-toggle" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle color theme">
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="header-contact" onClick={() => scrollTo("contact")}>Let's connect <ArrowUpRight size={15} /></button>
          <button className="icon-button menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse-dot" /> AVAILABLE FOR ENGINEERING OPPORTUNITIES</div>
          <h1>Engineering<br /><span className="gradient-text">Beyond Boundaries.</span></h1>
          <p className="hero-lede">I’m <strong>Madan Patel H S</strong> — building intelligent systems across software, hardware, enterprise platforms and industry.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("universe")}>Explore my universe <ArrowUpRight size={17} /></button>
            <button className="text-button" onClick={() => scrollTo("projects")}>View selected work <ArrowDown size={16} /></button>
          </div>
          <div className="hero-proof">
            <div><strong>10</strong><span>TECH DOMAINS</span></div>
            <i />
            <div><strong>100</strong><span>PROJECT CONCEPTS</span></div>
            <i />
            <div><strong>01</strong><span>ENGINEERING MINDSET</span></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="visual-label label-top"><span>FIG. 01</span> / CONNECTED SYSTEMS</div>
          <UniverseCanvas />
          <div className="visual-label label-bottom"><span>LIVE VISUALIZATION</span><span className="live-indicator">●</span></div>
          <div className="orbit-caption"><Orbit size={14} /> EXPLORE THE SYSTEM</div>
        </div>
        <div className="hero-scroll"><span>SCROLL TO EXPLORE</span><div /></div>
      </section>

      <section className="intro-strip">
        <div className="section-shell intro-inner">
          <span className="eyebrow">01 / ENGINEERING IDENTITY</span>
          <p>From <em>lines of code</em> to <em>silicon, sensors and systems</em> — I explore how technology connects the digital and physical worlds.</p>
          <span className="intro-index">MP — 2026</span>
        </div>
      </section>

      <section className="section-shell section-block" id="universe">
        <div className="section-heading">
          <div><span className="eyebrow">02 / EXPLORE MY WORLD</span><h2>The technology<br /><span className="muted-heading">universe.</span></h2></div>
          <p>Ten interconnected disciplines. One continuous curiosity. Select a domain to explore the tools, systems and ideas behind my work.</p>
        </div>
        <div className="domain-grid">
          {domains.map((domain) => (
            <button className="domain-card" key={domain.id} onClick={() => { setActiveDomain(domain.id); scrollTo("projects"); }} style={{ "--domain-color": domain.color } as React.CSSProperties}>
              <div className="domain-card-head"><span>{domain.number} / DOMAIN</span><span className="domain-symbol">{domain.symbol}</span></div>
              <h3>{domain.name}</h3>
              <p>{domain.description}</p>
              <div className="domain-stack">{domain.stack.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="domain-card-bottom"><span>{domain.short}</span><ArrowUpRight size={17} /></div>
            </button>
          ))}
        </div>
      </section>

      <section className="featured-section">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div><span className="eyebrow">03 / SELECTED WORK</span><h2>Built to solve.<br /><span className="muted-heading">Designed to scale.</span></h2></div>
            <p>A curated view of existing work and proposed engineering showcases. Each item is labelled transparently by its current status.</p>
          </div>
          <div className="featured-grid">
            {featured.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
          </div>
          <button className="outline-button" onClick={() => scrollTo("projects")}>Explore project catalogue <ArrowRight size={17} /></button>
        </div>
      </section>

      <section className="section-shell section-block" id="projects">
        <div className="section-heading">
          <div><span className="eyebrow">04 / PROJECT ARCHIVE</span><h2>Project <span className="muted-heading">explorer.</span></h2></div>
          <p>Search the engineering catalogue or filter by domain. The collection distinguishes existing projects from concepts and research directions.</p>
        </div>
        <div className="project-toolbar">
          <label className="search-box"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, tools, technologies..." /><kbd>/</kbd></label>
          <div className="filter-row">
            <button className={activeDomain === "all" ? "filter-chip active" : "filter-chip"} onClick={() => setActiveDomain("all")}>All domains</button>
            {domains.map((domain) => <button key={domain.id} className={activeDomain === domain.id ? "filter-chip active" : "filter-chip"} onClick={() => setActiveDomain(domain.id)}>{domain.name}</button>)}
          </div>
        </div>
        <div className="catalogue-meta"><span>{filteredProjects.length} PROJECTS FOUND</span><span>CURATED ENGINEERING INDEX / 2026</span></div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
        </div>
        {filteredProjects.length === 0 && <div className="empty-state">No projects match this search. Try another technology or domain.</div>}
      </section>

      <section className="stack-section" id="domains">
        <div className="section-shell section-block">
          <div className="section-heading">
            <div><span className="eyebrow">05 / TECHNICAL ARSENAL</span><h2>Tools for the<br /><span className="muted-heading">whole stack.</span></h2></div>
            <p>A cross-disciplinary toolkit spanning application development, enterprise platforms, connected devices and engineering infrastructure.</p>
          </div>
          <div className="stack-matrix">
            {domains.map((domain) => <div className="stack-row" key={domain.id}><span className="stack-number">{domain.number}</span><div className="stack-domain"><strong>{domain.name}</strong><small>{domain.short}</small></div><div className="stack-tools">{domain.stack.map((tool) => <span key={tool}>{tool}</span>)}</div><span className="stack-arrow"><ArrowUpRight size={16} /></span></div>)}
          </div>
          <p className="proficiency-note"><Zap size={15} /> Skills are presented by hands-on experience and learning stage; this catalogue is not a claim of equal proficiency across every technology.</p>
        </div>
      </section>

      <section className="section-shell section-block about-section" id="about">
        <div className="about-graphic"><div className="about-ring ring-a" /><div className="about-ring ring-b" /><div className="about-core"><Atom size={54} strokeWidth={1} /><span>MP / HS</span></div><span className="graphic-coordinate">12° 18' N / 76° 39' E</span><span className="graphic-caption">SYSTEMS THINKING / ALWAYS ON</span></div>
        <div className="about-copy"><span className="eyebrow">06 / THE ENGINEER</span><h2>Curiosity is the<br /><span className="muted-heading">operating system.</span></h2><p>{profile.summary}</p><p>My foundation in Electrical & Electronics Engineering informs how I approach software: understand the system, respect the constraints, and build for reliability. I enjoy moving between backend architecture, connected devices and the interfaces that make complex systems understandable.</p><div className="about-facts"><div><strong>EEE</strong><span>ENGINEERING FOUNDATION</span></div><div><strong>JAVA</strong><span>BACKEND EXPERIENCE</span></div><div><strong>IoT</strong><span>CONNECTED SYSTEMS</span></div></div><a className="inline-link" href={profile.github} target="_blank" rel="noreferrer">Explore GitHub profile <ArrowUpRight size={16} /></a></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-shell contact-inner">
          <span className="eyebrow">07 / START A CONVERSATION</span>
          <h2>Have a system<br />worth <span className="gradient-text">building?</span></h2>
          <p>Open to meaningful engineering opportunities, collaboration and ideas at the intersection of software and industry.</p>
          <div className="contact-actions"><a className="primary-button" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} /> Connect on GitHub <ArrowUpRight size={16} /></a><a className="text-button" href="mailto:">Email contact <ArrowUpRight size={16} /></a></div>
          <div className="contact-orbit"><div /><div /><div /></div>
        </div>
      </section>

      <footer className="site-footer"><div className="section-shell footer-inner"><a className="brand" href="#home"><span className="brand-mark">MP<span>.</span></span><span className="brand-name">MADAN PATEL <small>H S / ENGINEERING</small></span></a><span>DESIGNED TO CONNECT IDEAS AND SYSTEMS.</span><span>© 2026 MADAN PATEL H S</span></div></footer>
      <div className="corner-command"><Command size={13} /> ENGINEERING UNIVERSE <span>V1.0</span></div>
    </main>
  );
}
