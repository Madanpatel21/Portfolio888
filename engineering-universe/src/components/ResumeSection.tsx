import { Download, GraduationCap, BriefcaseBusiness, Code2, ExternalLink } from "lucide-react";

const skillGroups = [
  { title: "Backend engineering", items: "Java 17/21 · Spring Boot · Spring MVC · Hibernate/JPA · JDBC · REST APIs · Spring Security · JWT" },
  { title: "Messaging & data", items: "Apache Kafka · MQTT · Redis · MySQL · PostgreSQL · SQL" },
  { title: "Frontend", items: "React · JavaScript · TypeScript · HTML · CSS · Tailwind CSS" },
  { title: "Salesforce", items: "Apex · SOQL · Lists · Sets · Maps · REST integrations" },
  { title: "Embedded & electronics", items: "C/C++ · Arduino · ESP32 · UART · GPS/GSM · Sensors · KiCad" },
  { title: "Tools & practices", items: "Git · Docker · Maven · Postman · Jira · JUnit · Mockito · Agile · SDLC" },
];

export default function ResumeSection() {
  return (
    <section className="resume-section section-shell section-block" id="resume">
      <div className="section-heading">
        <div><span className="eyebrow">06 / PROFESSIONAL PROFILE</span><h2>Experience, skills<br /><span className="muted-heading">& education.</span></h2></div>
        <p>A concise, printable resume profile highlighting software engineering experience, technical skills and education.</p>
      </div>
      <div className="resume-layout">
        <div className="resume-main">
          <div className="resume-block">
            <div className="resume-block-title"><BriefcaseBusiness size={18}/><h3>Professional experience</h3></div>
            <article className="resume-entry">
              <div className="resume-entry-top"><div><h4>Software Developer — Java Backend Development</h4><p>BerryBloomer Pvt. Ltd. · Remote</p></div><span>2025–2026*</span></div>
              <p>Software engineering experience focused on Java backend development and web application delivery.</p>
            </article>
            <article className="resume-entry">
              <div className="resume-entry-top"><div><h4>Full Stack Web Development Intern</h4><p>Varcon's Technologies Pvt. Ltd.</p></div><span>Apr – Jun 2023</span></div>
              <p>Practical exposure to full-stack web development and application fundamentals.</p>
            </article>
            <p className="resume-footnote">*Confirm the exact full-time employment dates and title at BerryBloomer before using this profile for formal applications. No TVS employment history is included.</p>
          </div>
          <div className="resume-block">
            <div className="resume-block-title"><GraduationCap size={19}/><h3>Education</h3></div>
            <article className="resume-entry">
              <div className="resume-entry-top"><div><h4>B.E. — Electrical & Electronics Engineering</h4><p>Vidya Vikas Institute of Engineering & Technology, Mysuru</p></div><span>2025</span></div>
            </article>
          </div>
        </div>
        <aside className="resume-aside">
          <div className="resume-download-card">
            <span className="resume-kicker">MADAN PATEL H S</span><div className="resume-monogram">MP<span>.</span></div>
            <h3>Engineering<br/>professional profile</h3>
            <p>Java backend development · Enterprise applications · Embedded & IoT</p>
            <button className="primary-button" onClick={() => window.print()}><Download size={16}/> Print / Save as PDF</button>
            <a className="resume-github" href="https://github.com/Madanpatel21" target="_blank" rel="noreferrer">GitHub profile <ExternalLink size={14}/></a>
          </div>
          <div className="resume-block skill-resume">
            <div className="resume-block-title"><Code2 size={18}/><h3>Technical skills</h3></div>
            {skillGroups.map(group => <div className="resume-skill" key={group.title}><strong>{group.title}</strong><p>{group.items}</p></div>)}
          </div>
        </aside>
      </div>
      <div className="resume-note">Add a verified phone number, professional email and LinkedIn URL before publishing a final job-application resume.</div>
    </section>
  );
}
