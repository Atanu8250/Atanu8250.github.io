'use client'

import { useEffect, useState } from 'react'

export default function Nav() {
  const [activeSection, setActiveSection] = useState('landing')

  useEffect(() => {
    const handleThemeToggle = () => {
      const html = document.documentElement
      html.dataset.theme = html.dataset.theme === 'dark' ? 'light' : 'dark'
    }

    const handleSchemeClick = (scheme) => {
      document.documentElement.dataset.scheme = scheme
      document.querySelectorAll('.scheme-dot').forEach(dot => dot.classList.remove('active'))
      document.querySelector(`[data-s="${scheme}"]`).classList.add('active')
    }

    const themeBtn = document.getElementById('themeBtn')
    if (themeBtn) themeBtn.addEventListener('click', handleThemeToggle)

    document.querySelectorAll('.scheme-dot').forEach(dot => {
      dot.addEventListener('click', () => handleSchemeClick(dot.dataset.s))
    })

    // Active nav highlight
    const navIO = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'))
          document.querySelector(`a[href="#${e.target.id}"]`).classList.add('active')
          setActiveSection(e.target.id)
        }
      })
    }, { rootMargin: '-50% 0px -50% 0px' })

    document.querySelectorAll('section[id]').forEach(s => navIO.observe(s))

    return () => {
      if (themeBtn) themeBtn.removeEventListener('click', handleThemeToggle)
      document.querySelectorAll('.scheme-dot').forEach(dot => dot.removeEventListener('click', handleSchemeClick))
    }
  }, [])

  return (
    <nav>
      <a href="#landing" className="nav-logo">&lt;dev_atanu /&gt;</a>
      <ul className="nav-links">
        <li><a href="#about">about</a></li>
        <li><a href="#education">edu</a></li>
        <li><a href="#skills">skills</a></li>
        <li><a href="#experience">exp</a></li>
        <li><a href="#projects">projects</a></li>
        <li><a href="#github">github</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className="nav-controls">
        <div className="scheme-dots">
          <div className="scheme-dot active" data-s="lime" title="Lime"></div>
          <div className="scheme-dot" data-s="cyan" title="Cyan"></div>
          <div className="scheme-dot" data-s="violet" title="Violet"></div>
          <div className="scheme-dot" data-s="amber" title="Amber"></div>
          <div className="scheme-dot" data-s="rose" title="Rose"></div>
        </div>
        <button className="theme-btn" id="themeBtn" aria-label="Toggle theme"></button>
      </div>
    </nav>
  )
}