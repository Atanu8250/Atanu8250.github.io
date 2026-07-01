import { projects } from '../utils/data'

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">05 &mdash; projects</p>
          <h2 className="section-title">Selected Work</h2>
          <div className="proj-grid">
            {projects.slice(0, 6).map(item => (
              <div key={item.id} className="proj-card">
                <div className="proj-head">
                  <div className="proj-name">{item.title}</div>
                  <div className="proj-links">
                    {item.github && <a href={item.github} className="proj-link">Code</a>}
                    {item.liveDemo && <a href={item.liveDemo} className="proj-link">Live</a>}
                  </div>
                </div>
                <div className="proj-desc">{item.description}</div>
                <div className="tech-stack">
                  {item.techStack.slice(0, 3).map(tech => (
                    <span key={tech} className="tech-pill">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}