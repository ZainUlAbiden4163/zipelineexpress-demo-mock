import { useState } from 'react'
// removed heroContactImg import

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    // In production, this would submit to a backend/email service
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/Landing Page Banner/customer-service-banner.jpg" alt="Zipline Express customer service" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Get in Touch</span>
          <h1>Contact Us</h1>
          <p>We're here to help with any questions about our flights and services</p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" id="contact-section">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-cards">
              <div className="contact-info-card" id="contact-phone">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+12425573498">+1 (242) 557 3498</a><br/>
                    <a href="tel:+12425253498">+1 (242) 525 3498</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card" id="contact-email">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@zipline-express.com">info@zipline-express.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card" id="contact-address">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>
                    Jet Nassau<br/>
                    Coral Harbour Road Suite<br/>
                    #1 Lynden Pindling International Airport<br/>
                    Nassau N.P, The Bahamas<br/><br/>
                    Grand Bahama International Airport<br/>
                    Freeport, Bahamas
                  </p>
                </div>
              </div>

              <div className="contact-info-card" id="contact-hours">
                <div className="contact-info-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div>
                  <h4>Office Hours</h4>
                  <p>
                    Monday – Sunday: 6:00 a.m. – 5:00 p.m.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-xs)' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-xl)' }}>
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              {submitted && (
                <div style={{
                  padding: 'var(--space-md) var(--space-lg)',
                  background: 'rgba(34, 197, 94, 0.1)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--color-success)',
                  marginBottom: 'var(--space-lg)',
                  fontWeight: 600,
                  fontSize: 'var(--text-sm)'
                }}>
                  ✓ Thank you! Your message has been sent. We'll be in touch shortly.
                </div>
              )}

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-email-input">Email Address *</label>
                  <input
                    type="email"
                    id="contact-email-input"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="contact-phone-input">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone-input"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (242) 000 0000"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <select
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    <option value="scheduled">Scheduled Flights</option>
                    <option value="charter">Private Charter</option>
                    <option value="booking">Booking Enquiry</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }} id="contact-submit">
                Send Message
                <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-sm section-alt" id="contact-map">
        <div className="container">
          <div style={{
            borderRadius: 'var(--radius-xl)',
            overflow: 'hidden',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-medium-gray)'
          }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.1!2d-77.466!3d25.039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLynden+Pindling+International+Airport!5e0!3m2!1sen!2sbs!4v1"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zipline Express Location - Lynden Pindling International Airport"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
