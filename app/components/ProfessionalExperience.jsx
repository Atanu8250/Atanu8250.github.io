import { professionalExperience } from '../utils/data'

export default function ProfessionalExperience() {
  return (
    <section id="experience">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">04 &mdash; experience</p>
          <h2 className="section-title">Professional Experience</h2>
          {professionalExperience.map(item => (
            <div key={item.id} className="exp-item">
              <div>
                <div className="exp-co">{item.companyName}</div>
                <div className="exp-period">{item.timeline}</div>
              </div>
              <div>
                <div className="exp-role">{item.role}</div>
                <div className="exp-desc">Working as {item.role} at {item.companyName}, located in {item.companyAddress}. {item.workingLocation} position.</div>
                <div className="tech-stack">
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Next.js</span>
                  <span className="tech-pill">TypeScript</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}