import { ArrowUpRight, Cpu } from "lucide-react";
import type { Project } from "../data";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card group" style={{ animationDelay: `${index * 45}ms` }}>
      <div className="project-card-top">
        <span className="project-index">PROJECT / {String(project.id).padStart(3, "0")}</span>
        <span className="project-icon"><Cpu size={17} /></span>
      </div>
      <div className="project-orb" aria-hidden="true"><span /></div>
      <div className="project-card-content">
        <div className="project-meta">
          <span>{project.domain.replace("-", " ")}</span>
          <span className="status-dot">{project.status}</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="tag-list">
          {project.stack.slice(0, 4).map((item) => <span className="tech-tag" key={item}>{item}</span>)}
        </div>
      </div>
      <div className="project-card-footer">
        <span>ENGINEERING CASE FILE</span>
        <ArrowUpRight size={18} className="arrow-icon" />
      </div>
    </article>
  );
}
