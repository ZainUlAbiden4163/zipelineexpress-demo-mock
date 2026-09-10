import { Link } from 'react-router-dom'
import heroScheduledImg from '../assets/images/hero-scheduled.jpg'

export default function BookFlight() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={heroScheduledImg} alt="Book a flight with Zipline Express" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Start Your Journey</span>
          <h1>Book a Flight</h1>
          <p>Choose your service and start booking today</p>
        </div>
      </section>

      {/* Booking Options */}
      <section className="section" id="booking-options-section">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Choose Your Service</span>
            <h2 className="section-title">How Would You Like to Fly?</h2>
            <p className="section-subtitle">
              Select the type of flight that suits your needs. Scheduled flights run on 
              set routes and timetables. Private charters give you the freedom to fly 
              anywhere, anytime.
            </p>
          </div>

          <div className="booking-options">
            {/* Scheduled Flight */}
            <div className="booking-option-card" id="book-scheduled">
              <div className="booking-option-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M16 2v4M8 2v4M3 10h18"/>
                  <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
                </svg>
              </div>
              <h3>Scheduled Passenger Flight</h3>
              <p>
                Regular flights on set routes with published schedules and fares.<br/>
                <strong style={{ color: 'var(--color-navy)' }}>
                  Freeport ⇄ Bimini &nbsp;•&nbsp; Freeport ⇄ Marsh Harbour
                </strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                <a
                  href="https://www.zipline-express.com/book-a-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                  id="book-scheduled-cta"
                  style={{ width: '100%' }}
                >
                  Book a Scheduled Flight
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <Link to="/scheduled-flights" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gold)', fontWeight: 600 }}>
                  View Schedules & Fares →
                </Link>
              </div>
            </div>

            {/* Private Charter */}
            <div className="booking-option-card" id="book-charter">
              <div className="booking-option-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <h3>Private Charter</h3>
              <p>
                Fly on your schedule to destinations throughout<br/>
                <strong style={{ color: 'var(--color-navy)' }}>
                  The Bahamas &nbsp;•&nbsp; Caribbean &nbsp;•&nbsp; Florida
                </strong>
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', alignItems: 'center' }}>
                <a
                  href="https://www.zipline-express.com/book-a-flight"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-navy btn-lg"
                  id="book-charter-cta"
                  style={{ width: '100%' }}
                >
                  Request a Charter
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
                <Link to="/private-charter" style={{ fontSize: 'var(--text-sm)', color: 'var(--color-gold)', fontWeight: 600 }}>
                  Explore Charter Options →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Booking Works */}
      <section className="section section-alt" id="booking-how">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Simple Process</span>
            <h2 className="section-title">How Booking Works</h2>
          </div>

          <div className="features-grid" style={{ maxWidth: '900px', margin: 'var(--space-2xl) auto 0' }}>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))', color: 'var(--color-navy)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700 }}>1</span>
              </div>
              <h4>Choose Your Service</h4>
              <p>Select whether you want a scheduled flight or a private charter above.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))', color: 'var(--color-navy)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700 }}>2</span>
              </div>
              <h4>Select Your Flight</h4>
              <p>Choose your route, date, number of passengers, and preferred aircraft.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-light))', color: 'var(--color-navy)' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'var(--text-2xl)', fontWeight: 700 }}>3</span>
              </div>
              <h4>Confirm & Fly</h4>
              <p>Complete your booking, receive confirmation, and get ready to fly!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section" id="booking-help">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Need Help Booking?</h2>
            <p className="section-subtitle">
              Our team is available to assist you with booking, answer questions about 
              routes and schedules, or help you plan your charter flight.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-xl)', justifyContent: 'center', flexWrap: 'wrap', marginTop: 'var(--space-xl)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href="tel:+12425573498" style={{ fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--color-navy)' }}>
                  +1 (242) 557 3498
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-sm)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <a href="mailto:info@zipline-express.com" style={{ fontWeight: 600, fontSize: 'var(--text-lg)', color: 'var(--color-navy)' }}>
                  info@zipline-express.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
