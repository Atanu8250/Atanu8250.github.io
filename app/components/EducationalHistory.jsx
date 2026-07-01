import { educationalHistory } from '../utils/data'

export default function EducationalHistory() {
  return (
    <section id="education">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">02 &mdash; education</p>
          <h2 className="section-title">Academic Background</h2>
          <div className="timeline">
            {educationalHistory.map(item => (
              <div key={item.id} className="tl-item">
                <div className="tl-date">{item.timeline}</div>
                <div className="tl-title">{item.degree}</div>
                <div className="tl-sub">{item.institution}, {item.location}</div>
                <div className="tl-desc">{item.workingLocation || ''}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}