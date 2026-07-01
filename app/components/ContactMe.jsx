'use client'

import { useState } from 'react'

export default function ContactMe() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Simulate send
    const btn = document.getElementById('sendBtn')
    if (btn) {
      btn.textContent = 'Sent ✓'
      btn.style.background = 'var(--accent-dim)'
      setTimeout(() => {
        btn.textContent = 'Send Message →'
        btn.style.background = ''
      }, 3000)
    }
  }

  return (
    <section id="contact">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="reveal" style={{ padding: 'clamp(4rem,8vw,7rem) 0' }}>
          <p className="section-label">07 &mdash; contact</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div>
              <div className="contact-text">I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just want to chat about technology, feel free to reach out!</div>
              <a href="mailto:atanu@example.com" className="clink">
                <div className="clink-icon">✉</div>
                <div>
                  <div style={{ fontWeight: 500 }}>Email</div>
                  <div style={{ fontSize: '12px', opacity: 0.7 }}>Send me an email</div>
                </div>
              </a>
              <a href="https://linkedin.com/in/atanu" className="clink">
                <div className="clink-icon">💼</div>
                <div>
                  <div style={{ fontWeight: 500 }}>LinkedIn</div>
                  <div style={{ fontSize: '12px', opacity: 0.7 }}>Connect with me</div>
                </div>
              </a>
              <a href="https://github.com/Atanu8250" className="clink">
                <div className="clink-icon">🐙</div>
                <div>
                  <div style={{ fontWeight: 500 }}>GitHub</div>
                  <div style={{ fontSize: '12px', opacity: 0.7 }}>Check my code</div>
                </div>
              </a>
            </div>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">NAME</label>
                  <input
                    type="text"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">EMAIL</label>
                  <input
                    type="email"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className="form-field">
                  <label className="form-label">MESSAGE</label>
                  <textarea
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" id="sendBtn" style={{ marginTop: '10px' }}>Send Message →</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}