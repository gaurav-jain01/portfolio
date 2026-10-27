import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'motion/react';
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpRight, Asterisk, Check, Code2, Copy, FileText, Github, Linkedin, MapPin, Menu, Pause, Phone, Play, Plus, X } from 'lucide-react';
import myprofile from '../assets/myProfile.png';
import { education, experience, profile, projects, services, skillGroups } from '../data/portfolio';
import ProjectCard from './project-cards';
import ThemeToggle from './theme-toggle';
import ResumeModal from './resume-modal';
import { MagneticLink, Reveal, Tilt, useMotionPreferences } from './motion';

const navigation = [['work', 'Projects'], ['skills', 'Skills'], ['experience', 'Experience'], ['about', 'About'], ['contact', 'Contact']];
const roles = ['Full-stack developer', 'React & Node.js', 'AWS deployments'];

function Navigation() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('home');
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { reduced, paused, systemReduced, toggle } = useMotionPreferences();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActive(entry.target.id); });
    }, { rootMargin: '-15% 0px -65% 0px' });
    document.querySelectorAll('main section[id]').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = event => {
      if (event.key === 'Escape') { setOpen(false); menuRef.current?.focus(); }
    };
    const onPointer = event => { if (!headerRef.current?.contains(event.target)) setOpen(false); };
    const onResize = () => { if (window.innerWidth > 800) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className="site-header" ref={headerRef}>
      <motion.div className="scroll-progress" style={{ scaleX: reduced ? scrollYProgress : progress }} aria-hidden="true" />
      <div className="header-inner page-width">
        <a href="#home" className="wordmark" aria-label="Gaurav Jain, home" onClick={() => setOpen(false)}>gaurav<span>.</span><span className="wordmark-suffix">/ dev</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigation.map(([id, label]) => <a key={id} href={`#${id}`} aria-current={active === id ? 'location' : undefined} className={active === id ? 'active' : ''}>{label}</a>)}</nav>
        <div className="header-actions">
          {!systemReduced && <button className="icon-button motion-toggle" onClick={toggle} aria-label={paused ? 'Resume animations' : 'Pause animations'} title={paused ? 'Resume animations' : 'Pause animations'}>{paused ? <Play size={16} /> : <Pause size={16} />}</button>}
          <ThemeToggle />
          <a className="header-contact" href={`mailto:${profile.email}`}>Let’s talk <ArrowUpRight size={16} /></a>
          <button ref={menuRef} className="icon-button menu-toggle" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: reduced ? 0 : 0.22 }}>{navigation.map(([id, label], i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} aria-current={active === id ? 'location' : undefined}><span aria-hidden="true">0{i + 1}</span>{label}<ArrowUpRight size={19} /></a>)}</motion.nav>}</AnimatePresence>
    </header>
  );
}

function Hero({ onOpenResume }) {
  const [role, setRole] = useState(0);
  const { reduced } = useMotionPreferences();
  useEffect(() => {
    if (reduced) return;
    const interval = setInterval(() => setRole(value => (value + 1) % roles.length), 3400);
    return () => clearInterval(interval);
  }, [reduced]);

  return (
    <section className="hero page-width" id="home" aria-labelledby="hero-heading">
      <div className="hero-main">
        <div className="hero-copy">
          <Reveal><p className="eyebrow hero-eyebrow"><span className="status-dot" />{profile.experienceYears} YEARS OF HANDS-ON DEVELOPMENT</p></Reveal>
          <Reveal delay={0.08}><h1 id="hero-heading"><span className="hero-name">{profile.name}</span>Full-Stack<br /><span className="accent-text">Developer<span className="hero-period">.</span></span></h1></Reveal>
          <Reveal delay={0.16}><p className="hero-focus">React, Node.js &amp; Cloud</p><p className="hero-description">I build web applications, robust APIs, and practical software products—from React interfaces to backend services and AWS deployments.</p></Reveal>
          <Reveal className="hero-buttons" delay={0.24}><MagneticLink className="button button-primary" href="#work">View projects <ArrowDownRight size={19} /></MagneticLink><button type="button" className="text-link resume-link resume-trigger" onClick={onOpenResume} aria-haspopup="dialog">View resume <FileText size={16} /></button><a href="#contact" className="text-link">Contact me <ArrowUpRight size={16} /></a></Reveal>
          <Reveal className="hero-location" delay={0.3}><MapPin size={14} /><span>{profile.location}</span><span className="location-divider" /><span>Open to opportunities</span></Reveal>
        </div>
        <Reveal className="hero-visual" delay={0.15}>
          <Tilt className="portrait-stage">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-circle" aria-hidden="true" />
            <div className="orbit orbit-one" aria-hidden="true" /><div className="orbit orbit-two" aria-hidden="true" />
            <span className="floating-code code-top" aria-hidden="true">&lt;/&gt;</span>
            <Asterisk className="hero-asterisk" size={76} strokeWidth={1.1} aria-hidden="true" />
            <img className="hero-portrait" src={myprofile} alt="Illustrated portrait of Gaurav Jain" width="1024" height="1536" fetchPriority="high" />
            <div className="portrait-name" aria-hidden="true"><span>GAURAV JAIN</span><ArrowUpRight size={18} /></div>
            <div className="developer-badge"><span className="badge-icon"><Code2 size={23} /></span><div><span className="badge-label">WEB · MOBILE · DESKTOP</span><div className="role-container" aria-hidden="true"><AnimatePresence mode="wait" initial={false}><motion.strong key={role} initial={{ opacity: 0, y: reduced ? 0 : 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: reduced ? 0 : -10 }} transition={{ duration: reduced ? 0 : 0.2 }}>{roles[role]}</motion.strong></AnimatePresence></div><span className="sr-only">{profile.title}</span></div><span className="status-dot" /></div>
          </Tilt>
        </Reveal>
      </div>
      <div className="hero-bottom"><span>FROM FRONTEND INTERFACES TO BACKEND INFRASTRUCTURE.</span><a href="#work">SCROLL TO EXPLORE <ArrowDown size={15} /></a></div>
    </section>
  );
}

function TechRibbon() {
  const stack = ['React', 'Node.js', 'MongoDB', 'REST APIs', 'AWS', 'Next.js'];
  return <div className="tech-ribbon"><div className="ribbon-track">{[0, 1].map(copy => <div className="ribbon-group" key={copy} aria-hidden={copy === 1 ? 'true' : undefined}>{stack.map(name => <span key={name}>{name}<Asterisk size={23} strokeWidth={1.2} aria-hidden="true" /></span>)}</div>)}</div></div>;
}

function Work() {
  const [filter, setFilter] = useState('All projects');
  const { reduced } = useMotionPreferences();
  const visible = projects.filter(project => filter === 'All projects' || project.category === filter);
  return (
    <section id="work" className="section page-width" aria-labelledby="work-heading">
      <Reveal><div className="section-label"><span>01 / SELECTED WORK</span><span>PERSONAL PROJECTS & PROFESSIONAL CONTRIBUTIONS</span></div><div className="section-heading-row"><h2 id="work-heading">Ideas, made <span className="muted-text">real.</span></h2><p>Real products, clear responsibilities,<br className="desktop-break" /> and the engineering behind each one.</p></div></Reveal>
      <Reveal><div className="project-filters" role="group" aria-label="Filter projects">{['All projects', 'Web & AI', 'Desktop'].map(item => <button key={item} onClick={() => setFilter(item)} aria-pressed={filter === item} className={filter === item ? 'selected' : ''}>{filter === item && <motion.span className="filter-highlight" layoutId="project-filter" transition={{ duration: reduced ? 0 : 0.25 }} />}<span>{item}</span>{item === 'All projects' && <small aria-hidden="true">{String(projects.length).padStart(2, '0')}</small>}</button>)}</div></Reveal>
      <p className="sr-only" role="status">Showing {visible.length} projects</p>
      <motion.div layout={!reduced} className="project-grid"><AnimatePresence mode="popLayout">{visible.map(project => <ProjectCard key={project.id} project={project} />)}</AnimatePresence></motion.div>
      <Reveal className="more-work"><span>Always experimenting. Always building.</span><a className="text-link" href={profile.github} target="_blank" rel="noreferrer">More on GitHub <ArrowUpRight size={17} /></a></Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading"><div className="page-width about-grid">
      <Reveal className="about-intro"><p className="eyebrow">05 / THE PERSON BEHIND THE PRODUCTS</p><h2 id="about-heading">Curious mind.<br />Builder <span className="accent-text">at heart.</span></h2><div className="about-signature"><Asterisk size={54} strokeWidth={1.2} /><span>Good work starts<br />with a little curiosity.</span></div></Reveal>
      <Reveal className="about-copy" delay={0.12}><p className="about-lead">I take ideas from interface to API to deployment.</p><p>I’m a full-stack developer based in Jaipur with {profile.experienceYears} years of experience building web, mobile, and desktop applications. My work spans e-commerce, learning platforms, service applications, and developer tools.</p><p>I work across React interfaces, Node.js APIs, authentication, databases, and AWS deployments. I enjoy understanding how a product fits together, making its workflows dependable, and using AI where it helps people get useful work done.</p><div className="about-facts"><div><strong>{profile.experienceYears}</strong><span>Years of experience</span></div><div><strong>{String(projects.length).padStart(2, '0')}</strong><span>Selected projects</span></div><div><strong>MCA</strong><span>Computer applications</span></div></div><a href="#contact" className="text-link">Let’s build something together <ArrowUpRight size={18} /></a></Reveal>
    </div></section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section page-width skills-section" aria-labelledby="skills-heading"><Reveal><div className="section-label"><span>02 / MY TOOLKIT</span><span>THE RIGHT TOOLS FOR THE IDEA</span></div><div className="section-heading-row"><h2 id="skills-heading">The full stack.<br /><span className="muted-text">The whole picture.</span></h2><p>Frontend, backend, data, and deployment.<br className="desktop-break" /> A toolkit built through hands-on work.</p></div></Reveal>
      <div className="skill-list">{skillGroups.map((group, i) => <Reveal className="skill-row" key={group.label} delay={i * 0.06}><span className="skill-number">/{group.number}</span><div className="skill-title"><span>{group.label}</span><h3>{group.title}</h3></div><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></Reveal>)}</div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <div className="page-width">
        <Reveal><div className="section-label"><span>03 / PROFESSIONAL EXPERIENCE</span><span>{profile.experienceYears} YEARS BUILDING PRODUCTS</span></div><div className="section-heading-row"><h2 id="experience-heading">Real teams.<br /><span className="muted-text">Real responsibility.</span></h2><p>Web, mobile, and desktop development,<br className="desktop-break" /> from product features to infrastructure.</p></div></Reveal>
        <div className="experience-list">{experience.map((job, index) => (
          <Reveal className="experience-row" key={job.company} delay={index * 0.06}>
            <div className="experience-meta"><span>{job.period}</span><p>{job.location}{job.type && <> · <span className="employment-type">{job.type}</span></>}</p></div>
            <div className="experience-content"><p className="experience-role">{job.role}</p><h3>{job.company}</h3><ul>{job.highlights.map(highlight => <li key={highlight}>{highlight}</li>)}</ul></div>
          </Reveal>
        ))}</div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="section page-width" aria-labelledby="services-heading">
      <Reveal><div className="section-label"><span>04 / HOW I CAN HELP</span><span>FOR TEAMS & FREELANCE CLIENTS</span></div><div className="section-heading-row"><h2 id="services-heading">Your next idea.<br /><span className="muted-text">My kind of challenge.</span></h2><a href="#contact" className="text-link">Discuss a project <ArrowUpRight size={18} /></a></div></Reveal>
      <div className="services-grid">{services.map((service, index) => <Reveal className="service-card" key={service.number} delay={index * 0.05}><span className="service-number">/{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-tags">{service.tags}</span></Reveal>)}</div>
    </section>
  );
}

function Journey() {
  return (
    <section id="education" className="section page-width journey-section" aria-labelledby="journey-heading"><Reveal className="journey-intro"><p className="eyebrow">06 / EDUCATION</p><h2 id="journey-heading">Always a<br /><span className="muted-text">student.</span></h2><p>A foundation in computer applications.<br />A habit of never stopping learning.</p></Reveal><div className="timeline">{education.map((item, i) => <Reveal key={item.year} delay={i * 0.05}><details className="education-item" open={i === 0 ? true : undefined}><summary><span className="education-year">{item.year}</span><div><h3>{item.degree}</h3><p>{item.school}</p><span className="education-period">{item.period}</span></div><Plus className="education-plus" size={20} /></summary><p className="education-detail">{item.detail}</p></details></Reveal>)}</div></section>
  );
}

function Contact({ onOpenResume }) {
  const [copyStatus, setCopyStatus] = useState('');
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('Email copied!'); }
    catch { setCopyStatus('Select the email address to copy it, or click it to open your email app.'); }
    timer.current = setTimeout(() => setCopyStatus(''), 5000);
  };
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="page-width">
      <Reveal><div className="contact-top"><p className="eyebrow"><span className="status-dot" /> OPEN TO OPPORTUNITIES</p><span>07 / SAY HELLO</span></div><div className="contact-title-row"><h2 id="contact-heading">Have a good idea?<br /><span>Let’s make it happen.</span></h2><MagneticLink href={`mailto:${profile.email}`} className="contact-orb" aria-label="Email Gaurav Jain"><ArrowUpRight size={65} strokeWidth={1.3} /></MagneticLink></div></Reveal>
      <Reveal className="contact-bottom"><div><p>For full-stack roles, React projects, or freelance collaborations.</p><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email copied!' ? <Check size={18} /> : <Copy size={18} />}</button></div><p className="copy-status" role="status">{copyStatus}</p></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub <ArrowUpRight size={15} /></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn <ArrowUpRight size={15} /></a><a href={profile.phoneHref}><Phone size={16} />{profile.phone} <ArrowUpRight size={15} /></a><button type="button" className="contact-resume" onClick={onOpenResume} aria-haspopup="dialog">Resume <FileText size={15} /></button></div></Reveal>
    </div></section>
  );
}

export default function Layoutpage() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const openResume = () => setResumeOpen(true);

  return <><a className="skip-link" href="#main">Skip to content</a><Navigation /><main id="main"><Hero onOpenResume={openResume} /><TechRibbon /><Work /><Skills /><Experience /><Services /><About /><Journey /><Contact onOpenResume={openResume} /></main><footer className="site-footer page-width"><a href="#home" className="wordmark" aria-label="Back to home">gaurav<span>.</span></a><p>© {new Date().getFullYear()} Gaurav Jain. Crafted with care & a little code.</p><a href="#home" className="back-top">Back to top <ArrowUp size={15} /></a></footer>{resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}</>;
}
