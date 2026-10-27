import { forwardRef } from 'react';
import { ArrowUpRight, Check, Code2, Cpu, GitPullRequest, Github, Layers, Lightbulb, Plus, ShieldCheck, Terminal, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { Tilt, useMotionPreferences } from './motion';

function ProjectArtwork({ id }) {
  if (id === 'tasktic') return (
    <div className="project-art tasktic-art" aria-hidden="true">
      <div className="tasktic-window">
        <div className="mockup-heading"><Layers size={17} /><strong>tasktic<span>.</span></strong><span>TEAM WORKSPACE</span></div>
        <div className="tasktic-board">
          <div><span>TO DO</span><p><i />Plan the project</p><p><i />Define the API</p></div>
          <div><span>IN PROGRESS</span><p><i />Build the interface</p></div>
          <div><span>DONE</span><p><Check size={10} />Set up the team</p></div>
        </div>
        <div className="mockup-foot"><Users size={12} /> A shared space for moving work forward.</div>
      </div>
      <span className="art-caption">PROJECTS. PEOPLE. PROGRESS.</span>
    </div>
  );
  if (id === 'repoguardian') return (
    <div className="project-art guardian-art" aria-hidden="true">
      <div className="art-orbit" />
      <div className="review-window">
        <div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>pull-request / review</span><GitPullRequest size={13} /></div>
        <div className="review-heading"><span className="shield-icon"><ShieldCheck size={25} /></span><div><strong>RepoGuardian AI</strong><small>Your code. A little more confident.</small></div><span className="tiny-status">Active</span></div>
        <div className="code-line"><span>01</span><i /><i /></div>
        <div className="code-line"><span>02</span><i /><i /></div>
        <div className="review-note"><Check size={15} /><div><strong>Review complete</strong><small>AI review + ESLint + Prettier</small></div></div>
        <div className="code-line"><span>03</span><i /><i /></div>
      </div>
      <span className="art-caption">AUTOMATED REVIEWS. HUMAN FOCUS.</span>
    </div>
  );
  if (id === 'cye') return (
    <div className="project-art cye-art" aria-hidden="true">
      <div className="cye-window"><div className="mockup-heading"><Cpu size={17} /><strong>CYE<span>.</span></strong><span>CODE YOUR ELECTRONICS</span></div><h4>Explore. Build.<br />Learn by doing.</h4><div className="cye-products"><div><Cpu size={25} /><span>Robotics</span></div><div><Lightbulb size={25} /><span>Electronics</span></div><div><Code2 size={25} /><span>Coding</span></div></div></div>
      <span className="art-caption">FROM CURIOUS MINDS TO REAL PRODUCTS.</span>
    </div>
  );
  if (id === 'aladdin') return (
    <div className="project-art aladdin-art" aria-hidden="true">
      <div className="aladdin-window"><div className="mockup-heading"><ShieldCheck size={18} /><strong>aladdin<span>.</span></strong><span>ADMIN WORKSPACE</span></div><h4>One platform.<br />Connected services.</h4><div className="access-roles"><span>User</span><span>Vendor</span><span>Admin</span></div><div className="mockup-foot"><Check size={12} /> Role-based access. Connected workflows.</div></div>
      <span className="art-caption">THE RIGHT ACCESS. THE RIGHT EXPERIENCE.</span>
    </div>
  );
  return (
    <div className="project-art arduino-art" aria-hidden="true">
      <div className="terminal-window"><div className="window-bar"><span className="window-dots"><i /><i /><i /></span><span>blink.ino</span><Code2 size={13} /></div>
        <div className="terminal-code"><p><em>void</em> <b>setup</b>() {'{'}</p><p>&nbsp; pinMode(LED_BUILTIN, <em>OUTPUT</em>);</p><p>{'}'}</p><p><em>void</em> <b>loop</b>() {'{'}</p><p>&nbsp; digitalWrite(LED_BUILTIN, <em>HIGH</em>);</p><p>{'}'}</p></div>
        <div className="terminal-status"><Terminal size={12} /> Ready to build something.</div>
      </div><span className="hardware-chip">∞</span>
      <span className="art-caption">WRITE. COMPILE. BRING IT TO LIFE.</span>
    </div>
  );
}

const ProjectCard = forwardRef(function ProjectCard({ project }, ref) {
  const { reduced } = useMotionPreferences();
  return (
    <motion.article ref={ref} layout={!reduced} initial={{ opacity: 0, y: reduced ? 0 : 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reduced ? 1 : 0.97 }} transition={{ duration: reduced ? 0 : 0.35 }} className={`project-card project-${project.id}`} aria-labelledby={`project-${project.id}`}>
      <Tilt className="project-art-wrap"><ProjectArtwork id={project.id} /></Tilt>
      <div className="project-meta"><span>{project.number} / {project.type}</span><span className="project-concept">Concept preview</span></div>
      <div className="project-title-row"><h3 id={`project-${project.id}`}>{project.title}</h3></div>
      <p>{project.description}</p>
      <ul className="tech-tags" aria-label={`${project.title} technologies`}>{project.tech.map(tech => <li key={tech}>{tech}</li>)}</ul>
      <details className="case-study">
        <summary><span>Read case study<span className="sr-only">: {project.title}</span></span><Plus size={17} /></summary>
        <div className="case-study-content">{project.caseStudy.map(section => <div key={section.title}><h4>{section.title}</h4><p>{section.text}</p></div>)}</div>
      </details>
      {(project.github || project.live) && <div className="project-actions">
        {project.github && <a className="text-link" href={project.github} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><Github size={14} />Source code<ArrowUpRight size={14} /></a>}
        {project.live && <a className="text-link" href={project.live} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} website`}>Visit website<ArrowUpRight size={14} /></a>}
      </div>}
    </motion.article>
  );
});

export default ProjectCard;
