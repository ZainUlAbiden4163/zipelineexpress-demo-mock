import { Link } from 'react-router-dom'
import heroCharterImg from '../assets/images/hero-charter.jpg'

export default function BookFlight() {
  return (
    <div className="page-enter" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/planes/king-air-takeoff-banner.jpeg" alt="Zipline Express King Air taking off" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Start Your Journey</span>
          <h1>Book a Flight</h1>
          <p>Request a charter and fly anywhere, anytime.</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="booking-form-container" style={{ padding: 0, overflow: 'hidden' }}>
            <iframe 
              src="https://preview--charterops-flight-request.netlify.app/?workspace=zipline" 
              title="Zipline Express Charter Request"
              style={{ width: '100%', height: '900px', border: 'none', display: 'block' }}
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}
