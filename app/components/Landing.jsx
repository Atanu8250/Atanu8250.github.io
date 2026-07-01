'use client'

import { useEffect } from 'react'

export default function Landing() {
  useEffect(() => {
    const deco = document.getElementById('heroDeco')
    if (deco) {
      for (let i = 0; i < 96; i++) {
        const c = document.createElement('div')
        c.className = 'deco-cell'
        deco.appendChild(c)
      }
    }
  }, [])

  return (
    <section id="landing" style={{ padding: 0, maxWidth: '100%' }}>
      <div id="landing-wrap">
        <div style={{ maxWidth: '660px' }}>
          <p className="hero-pre">// hello, world</p>
          <h1 className="hero-name">I'm<br /><span>Atanu Karmakar</span><br />Here.</h1>
          <p className="hero-role">Frontend Developer &middot; UI Engineer &middot; Open Source Contributor</p>
          <p className="hero-desc">I build performant, accessible, and visually precise interfaces. Obsessed with the intersection of great design and clean code.</p>
          <div className="hero-ctas">
            <a href="/Resume/Atanu_Karmakar_Resume.pdf" download className="btn-primary">Download Resume</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-val">8+</div><div className="stat-label">years exp</div></div>
            <div><div className="stat-val">24</div><div className="stat-label">projects shipped</div></div>
            <div><div className="stat-val">842</div><div className="stat-label">git commits</div></div>
            <div><div className="stat-val">12</div><div className="stat-label">open source PRs</div></div>
          </div>
        </div>
        <div className="hero-deco" aria-hidden="true" id="heroDeco"></div>
      </div>
    </section>
  )
}