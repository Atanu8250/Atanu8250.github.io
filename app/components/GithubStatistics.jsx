'use client'

import { useEffect } from 'react'

export default function GithubStatistics() {
  useEffect(() => {
    // Build heatmap
    const hm = document.getElementById('heatmap')
    if (hm) {
      hm.innerHTML = ''
      const w = [0.35, 0.25, 0.2, 0.12, 0.08]
      for (let c = 0; c < 52; c++) {
        const col = document.createElement('div')
        col.className = 'hm-col'
        for (let d = 0; d < 7; d++) {
          const cell = document.createElement('div')
          cell.className = 'hm-cell'
          const intensity = Math.random()
          if (intensity > 0.8) cell.classList.add('l4')
          else if (intensity > 0.6) cell.classList.add('l3')
          else if (intensity > 0.4) cell.classList.add('l2')
          else if (intensity > 0.2) cell.classList.add('l1')
          col.appendChild(cell)
        }
        hm.appendChild(col)
      }
    }

    // Animate lang bars
    const bars = document.querySelectorAll('.lang-bar')
    bars.forEach(bar => {
      const w = bar.dataset.w
      setTimeout(() => {
        bar.style.width = w + '%'
      }, 100)
    })
  }, [])

  return (
    <section id="github">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">06 &mdash; github</p>
          <h2 className="section-title">GitHub Statistics</h2>
          <div className="gh-grid">
            <div className="gh-card">
              <div className="gh-num">1.2k</div>
              <div className="gh-label">total commits</div>
            </div>
            <div className="gh-card">
              <div className="gh-num">24</div>
              <div className="gh-label">repositories</div>
            </div>
            <div className="gh-card">
              <div className="gh-num">12</div>
              <div className="gh-label">contributions</div>
            </div>
            <div className="gh-card">
              <div className="gh-num">8</div>
              <div className="gh-label">stars earned</div>
            </div>
          </div>
          <div className="streak-row">
            <div className="streak-box">
              <div className="streak-num">12</div>
              <div className="streak-label">current streak</div>
            </div>
            <div className="streak-box">
              <div className="streak-num">24</div>
              <div className="streak-label">longest streak</div>
            </div>
            <div className="streak-box">
              <div className="streak-num">156</div>
              <div className="streak-label">contributions</div>
            </div>
          </div>
          <div className="heatmap-wrap">
            <div className="hm-title">Contribution Graph</div>
            <div className="hm-grid" id="heatmap"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div>
              <div className="lang-row">
                <div className="lang-name">JavaScript</div>
                <div className="lang-pct">45%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="45"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">TypeScript</div>
                <div className="lang-pct">30%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="30"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">CSS</div>
                <div className="lang-pct">15%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="15"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">HTML</div>
                <div className="lang-pct">10%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="10"></div>
                </div>
              </div>
            </div>
            <div>
              <div className="lang-row">
                <div className="lang-name">Python</div>
                <div className="lang-pct">20%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="20"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">Java</div>
                <div className="lang-pct">15%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="15"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">Go</div>
                <div className="lang-pct">10%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="10"></div>
                </div>
              </div>
              <div className="lang-row">
                <div className="lang-name">Other</div>
                <div className="lang-pct">10%</div>
                <div className="lang-bw">
                  <div className="lang-bar" data-w="10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}