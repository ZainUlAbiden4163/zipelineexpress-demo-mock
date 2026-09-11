import { Link } from 'react-router-dom'
import heroCharterImg from '../assets/images/hero-charter.jpg'
import heroMainImg from '../assets/images/hero-main.jpg'
import bahamasAerialImg from '../assets/images/bahamas-aerial.jpg'

export default function PrivateCharter() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/Landing Page Banner/improved_charter1.jpg" alt="Person enjoying a private getaway" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Private Aviation</span>
          <h1>Private Charter</h1>
          <p>Fly on your schedule to destinations across The Bahamas and the Caribbean</p>
        </div>
      </section>

      {/* Charter Overview */}
      <section className="section" id="charter-overview">
        <div className="container">
          <div className="safety-section">
            <div className="safety-content">
              <span className="section-label">Tailored to You</span>
              <h2 className="section-title">Your Aircraft. Your Schedule.</h2>
              <p>
                Zipline Express's private charter service gives you the freedom to fly 
                where you want, when you want. As an established operator with over 2,700 
                commercial charter flights completed since 2017, we have the experience 
                to tailor every aspect of your flight to your exact needs.
              </p>
              <p>
                With senior pilots bringing over 20,000 combined flight hours, aircraft 
                maintained to the highest manufacturer standards, and an unwavering 
                commitment to safety, you can relax and enjoy the journey while we take 
                care of the rest.
              </p>
              <div style={{ marginTop: 'var(--space-xl)' }}>
                <Link to="/book-a-flight" className="btn btn-primary btn-lg" id="charter-request-cta">
                  Request a Charter
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
            <div className="safety-image">
              <img src={bahamasAerialImg} alt="Beautiful Bahamas islands from above" />
            </div>
          </div>
        </div>
      </section>

      {/* Aircraft Fleet */}
      <section className="section section-alt" id="charter-aircraft">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Fleet</span>
            <h2 className="section-title">Aircraft</h2>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Our fleet features Cessna 402 aircrafts. The Cessna 400 series aircraft is a proven and very dependable aircraft which, along with its range and passenger capacity, has made it a popular choice for many small regional airlines worldwide. Our planes are ideal for short routes and to connect from the islands to mainland hubs.
            </p>
          </div>

          <div className="aircraft-grid" style={{ maxWidth: '800px', margin: 'var(--space-2xl) auto 0' }}>
            {/* Cessna 402 */}
            <div className="aircraft-card" id="aircraft-cessna">
              <div className="aircraft-card-image">
                <img src={heroMainImg} alt="Cessna 402 aircraft" />
              </div>
              <div className="aircraft-card-body">
                <h3>Cessna 402</h3>
                <span className="aircraft-card-type">Features</span>
                <div className="aircraft-specs">
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Up to 9 passengers' configuration
                  </div>
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                    Short runway takeoff and landings
                  </div>
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
                    Reduced cabin noise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charter Destinations */}
      <section className="section" id="charter-destinations">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Destinations</span>
            <h2 className="section-title">Where Can You Fly?</h2>
            <p className="section-subtitle">
              Our charter services cover the islands of The Bahamas and extend across the 
              Caribbean. If you need to get there, we can take you.
            </p>
          </div>

          <div className="destinations-grid">
            {['Nassau', 'Freeport', 'Bimini', 'Marsh Harbour', 'Eleuthera', 'Exuma', 'Long Island', 'Cat Island', 'San Salvador', 'Andros', 'Jamaica', 'Cuba', 'Haiti', 'Santo Domingo', 'Cayman Islands', 'Turks & Caicos', 'Florida'].map((dest) => (
              <div className="destination-tag" key={dest}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                {dest}
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 'var(--space-2xl)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
            Destination availability depends on aircraft type, weather, and regulatory requirements. 
            Contact us for custom route enquiries.
          </p>
        </div>
      </section>

      {/* Charter Features */}
      <section className="section section-alt" id="charter-features">
        <div className="container">
          <div className="text-center">
            <span className="section-label">The Charter Advantage</span>
            <h2 className="section-title">Why Charter with Zipline?</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h4>Your Schedule</h4>
              <p>Depart when it suits you. No waiting for scheduled flights or dealing with airline timetables.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <h4>Your Destination</h4>
              <p>Fly direct to airports commercial airlines don't serve. Access remote islands and exclusive destinations.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Safety & Standards</h4>
              <p>The same high maintenance standards and professional crew you expect from Zipline Express.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
              </div>
              <h4>Personalised Service</h4>
              <p>Every charter is tailored to your needs. Group travel, special occasions, business trips — we adapt to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="charter-cta">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Ready to Charter?</h2>
            <p>
              Tell us where you want to go and when. Our team will put together 
              a tailored flight plan just for you.
            </p>
            <div className="cta-banner-actions">
              <Link to="/book-a-flight" className="btn btn-primary btn-lg" id="charter-book-cta">
                Request a Charter
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
