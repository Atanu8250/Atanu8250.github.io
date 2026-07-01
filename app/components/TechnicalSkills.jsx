'use client'

import { useEffect } from 'react'

export default function TechnicalSkills() {
  useEffect(() => {
    // Animate bars
    const bars = document.querySelectorAll('.bar')
    bars.forEach(bar => {
      const w = bar.dataset.w
      setTimeout(() => {
        bar.style.width = w + '%'
      }, 100)
    })
  }, [])

  return (
    <section id="skills">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">03 &mdash; skills</p>
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">⚛</div>
                <div>
                  <div className="sk-name">React Ecosystem</div>
                  <div className="sk-type">FRAMEWORK</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">React 18</span>
                <span className="sk-tag">Next.js</span>
                <span className="sk-tag">React Query</span>
                <span className="sk-tag">Zustand</span>
                <span className="sk-tag">Jotai</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="92"></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">🎨</div>
                <div>
                  <div className="sk-name">Styling & Design</div>
                  <div className="sk-type">STYLING</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">Tailwind CSS</span>
                <span className="sk-tag">CSS Modules</span>
                <span className="sk-tag">Framer Motion</span>
                <span className="sk-tag">Radix UI</span>
                <span className="sk-tag">GSAP</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="88"></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">🔷</div>
                <div>
                  <div className="sk-name">TypeScript / JS</div>
                  <div className="sk-type">LANGUAGE</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">TypeScript</span>
                <span className="sk-tag">ES2024+</span>
                <span className="sk-tag">Generics</span>
                <span className="sk-tag">Zod</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="90"></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">🛠</div>
                <div>
                  <div className="sk-name">Tooling & DevOps</div>
                  <div className="sk-type">TOOLING</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">Vite</span>
                <span className="sk-tag">Webpack</span>
                <span className="sk-tag">Docker</span>
                <span className="sk-tag">GitHub Actions</span>
                <span className="sk-tag">Vercel</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="80"></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">🧪</div>
                <div>
                  <div className="sk-name">Testing</div>
                  <div className="sk-type">QA</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">Vitest</span>
                <span className="sk-tag">Testing Library</span>
                <span className="sk-tag">Playwright</span>
                <span className="sk-tag">Storybook</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="78"></div>
              </div>
            </div>
            <div className="skill-card">
              <div className="sk-head">
                <div className="sk-icon">⚡</div>
                <div>
                  <div className="sk-name">Performance</div>
                  <div className="sk-type">OPTIMIZATION</div>
                </div>
              </div>
              <div className="sk-tags">
                <span className="sk-tag">Core Web Vitals</span>
                <span className="sk-tag">Lighthouse</span>
                <span className="sk-tag">Bundle Analysis</span>
                <span className="sk-tag">Web Workers</span>
              </div>
              <div className="bar-wrap">
                <div className="bar" data-w="85"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}