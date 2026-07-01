export default function AboutMe() {
  return (
    <section id="about">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">01 &mdash; about</p>
          <h2 className="section-title">Who I Am</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>An ambitious and self-motivated web developer with a considerable technical skill who possesses self-discipline and ability to work with minimum of supervision. Able to play a key role in website development to ensure maximum accessibility, user experience and usability. A quick-learner who can absorb new ideas and can communicate clearly and effectively. Have 1200+ hours of coding experience and solved around 600+ DSA problems.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div className="card">
                <div className="card-label">TECHNOLOGIES</div>
                <div className="tags">
                  <span className="tag">React</span>
                  <span className="tag">Next.js</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">MongoDB</span>
                </div>
              </div>
              <div className="card">
                <div className="card-label">TOOLS</div>
                <div className="tags">
                  <span className="tag">VS Code</span>
                  <span className="tag">Git</span>
                  <span className="tag">Figma</span>
                  <span className="tag">Docker</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}