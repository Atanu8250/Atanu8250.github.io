'use client'

import { useEffect } from 'react'
import Landing from './components/Landing'
import AboutMe from './components/AboutMe'
import EducationalHistory from './components/EducationalHistory'
import TechnicalSkills from './components/TechnicalSkills'
import ProfessionalExperience from './components/ProfessionalExperience'
import Projects from './components/Projects'
import GithubStatistics from './components/GithubStatistics'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

export default function Home() {
  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(r => io.observe(r))
  }, [])

  return (
    <main>
      <Landing />

      <div className="divider"></div>

      <AboutMe />

      <div className="divider"></div>

      <EducationalHistory />

      <div className="divider"></div>

      <TechnicalSkills />

      <div className="divider"></div>

      <ProfessionalExperience />

      <div className="divider"></div>

      <Projects />

      <div className="divider"></div>

      <GithubStatistics />

      <div className="divider"></div>

      <ContactMe />

      <Footer />
    </main>
  )
}