import { Link } from 'react-router-dom'
import heroMainImg from '../assets/images/hero-main.jpg'

const galleryDestinations = [
  { name: 'Abaco', image: '/Where%20we%20Fly/Abaco.jpg' },
  { name: 'Bimini', image: '/Where%20we%20Fly/Bimini.jpg' },
  { name: 'Cat Island', image: '/Where%20we%20Fly/Cat%20Island.jpg' },
  { name: 'Eleuthera', image: '/Where%20we%20Fly/Eleuthera.jpg' },
  { name: 'Exuma', image: '/Where%20we%20Fly/Exuma.jpg' },
  { name: 'Inagua', image: '/Where%20we%20Fly/Inagua.jpg' },
  { name: 'Nassau', image: '/Where%20we%20Fly/Nassau.jpg' },
  { name: 'Staniel Cay', image: '/Where%20we%20Fly/Staniel%20Cay.jpg' }
];
import heroScheduledImg from '../assets/images/hero-scheduled.jpg'
import heroCharterImg from '../assets/images/hero-charter.jpg'
import heroAboutImg from '../assets/images/hero-about.jpg'

export default function Home() {
  return (
    <div className="page-enter">
      {/* ===== HERO ===== */}
      <section className="hero" id="home-hero">
        <div className="hero-bg">
          <img src="/Landing%20Page%20Banner/staniel-cay-bahamas-flights-tours%20copy.jpg" alt="Zipline Express aircraft flying over the Bahamas" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-label">Welcome to Zipline Express</span>
          <h1>
            Fly Across<br />
            <em>The Bahamas</em>
          </h1>
          <p className="hero-text">
            An established Bahamian airline operating since 2017. Scheduled passenger 
            flights and private charter services — your journey starts here.
          </p>
          <div className="hero-actions">
            <Link to="/scheduled-flights" className="btn btn-primary btn-lg" id="hero-scheduled-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
              Book a Scheduled Flight
            </Link>
            <a href="https://www.zipline-express.com/book-a-flight" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-lg" id="hero-charter-cta">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Request a Private Charter
            </a>
          </div>
        </div>
      </section>

      {/* ===== TWO SERVICES ===== */}
      <section className="section" id="services-overview">
        <div className="container">
          <div className="text-center">
            <span className="section-label">How You Fly With Us</span>
            <h2 className="section-title">Two Ways to Experience The Bahamas</h2>
            <p className="section-subtitle">
              Whether you're looking for a scheduled flight between islands or a private 
              charter to your destination of choice, Zipline Express has you covered.
            </p>
          </div>

          <div className="services-dual">
            {/* Scheduled Flights Card */}
            <div className="service-card" id="service-scheduled">
              <div className="service-card-image">
                <img src={heroScheduledImg} alt="Zipline Express scheduled passenger flight" />
              </div>
              <div className="service-card-body">
                <div className="service-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                </div>
                <h3>Scheduled Passenger Flights</h3>
                <p>
                  Regular flights connecting Freeport to Bimini and Marsh Harbour. 
                  Check our schedules, view fares, and book your seat today.
                </p>
                <Link to="/scheduled-flights" className="btn btn-navy" id="service-scheduled-cta">
                  View Flights & Book
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>

            {/* Private Charter Card */}
            <div className="service-card" id="service-charter">
              <div className="service-card-image">
                <img src={heroCharterImg} alt="Zipline Express private charter aircraft" />
              </div>
              <div className="service-card-body">
                <div className="service-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <h3>Private Charter</h3>
                <p>
                  Fly on your schedule to destinations throughout The Bahamas and the 
                  Caribbean. Premium aircraft, experienced crew, personalized service.
                </p>
                <Link to="/private-charter" className="btn btn-navy" id="service-charter-cta">
                  Explore Charter
                  <svg className="btn-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ROUTES ===== */}
      <section className="section section-alt" id="routes-overview">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Scheduled Routes</span>
            <h2 className="section-title">Our Scheduled Routes</h2>
            <p className="section-subtitle">
              Connecting the islands of The Bahamas with regular, reliable service.
            </p>
          </div>

          <div className="routes-grid">
            {/* Freeport ⇄ Bimini */}
            <div className="route-card" id="route-freeport-bimini">
              <div className="route-card-header">
                <div className="route-from">
                  <h4>Freeport</h4>
                  <span>Grand Bahama</span>
                </div>
                <div className="route-arrow">⇄</div>
                <div className="route-to">
                  <h4>Bimini</h4>
                  <span>Bimini Islands</span>
                </div>
              </div>
              <div className="route-details">
                <div className="route-detail">
                  <div className="route-detail-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div className="route-detail-text">
                    <strong>~30 min</strong>
                    <span>Flight time</span>
                  </div>
                </div>
                <div className="route-detail">
                  <div className="route-detail-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
                  </div>
                  <div className="route-detail-text">
                    <strong>Daily Service</strong>
                    <span>Regular flights</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: 'var(--space-xl)', paddingTop: 'var(--space-lg)' }}>
                <Link to="/scheduled-flights" className="btn btn-primary" style={{ width: '100%' }}>
                  View Schedule & Book
                </Link>
              </div>
            </div>

            {/* Freeport ⇄ Marsh Harbour */}
            <div className="route-card" id="route-freeport-marsh">
              <div className="route-card-header">
                <div className="route-from">
                  <h4>Freeport</h4>
                  <span>Grand Bahama</span>
                </div>
                <div className="route-arrow">⇄</div>
                <div className="route-to">
                  <h4>Marsh Harbour</h4>
                  <span>Abaco Islands</span>
                </div>
              </div>
              <div className="route-details">
                <div className="route-detail">
                  <div className="route-detail-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  </div>
                  <div className="route-detail-text">
                    <strong>~45 min</strong>
                    <span>Flight time</span>
                  </div>
                </div>
                <div className="route-detail">
                  <div className="route-detail-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
                  </div>
                  <div className="route-detail-text">
                    <strong>Daily Service</strong>
                    <span>Regular flights</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: 'var(--space-xl)', paddingTop: 'var(--space-lg)' }}>
                <Link to="/scheduled-flights" className="btn btn-primary" style={{ width: '100%' }}>
                  View Schedule & Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PHOTO DESTINATIONS ===== */}
      <section className="section" id="destinations-gallery">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Explore The Bahamas</span>
            <h2 className="section-title">Where We Fly</h2>
            <p className="section-subtitle">
              From popular hubs to remote island paradises, our charter and scheduled services connect you to the breathtaking beauty of the Caribbean.
            </p>
          </div>

          <div className="collage-gallery">
            {galleryDestinations.map((dest) => (
              <div className="collage-item" key={dest.name}>
                <img src={dest.image} alt={dest.name} />
                <div className="collage-overlay">
                  <h3 className="collage-title">{dest.name}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center" style={{ marginTop: 'var(--space-2xl)' }}>
            <Link to="/private-charter" className="btn btn-outline btn-lg">
              View All Charter Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ZIPLINE ===== */}
      <section className="section section-alt" id="why-choose">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title">Built on Safety & Professionalism</h2>
            <p className="section-subtitle">
              At Zipline Express, your safety and comfort are at the heart of everything we do. 
              Our experienced crew, well-maintained aircraft, and strict operating standards ensure 
              you can fly with confidence.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Safety First</h4>
              <p>Rigorous maintenance programmes and strict operating procedures ensure the highest safety standards on every flight.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 9V5a3 3 0 00-6 0v4"/><rect x="2" y="9" width="20" height="13" rx="2"/><circle cx="12" cy="16" r="1"/></svg>
              </div>
              <h4>Experienced Crew</h4>
              <p>Highly trained, professional pilots with extensive experience flying across The Bahamas and the Caribbean.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h4>Reliable Service</h4>
              <p>On-time departures, consistent schedules, and dependable connections between the islands you need to reach.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h4>Customer Care</h4>
              <p>Dedicated to making your travel experience smooth and enjoyable from the moment you book to the moment you land.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SAFETY SECTION ===== */}
      <section className="section" id="safety-home">
        <div className="container">
          <div className="safety-section">
            <div className="safety-content">
              <span className="section-label">Our Commitment</span>
              <h2 className="section-title">Your Safety, Our Priority</h2>
              <p>
                As an established airline operating since 2017, Zipline Express is built 
                on a foundation of safety and reliability. Our operations prioritize 
                regulatory compliance, experienced crew, and continuous improvement.
              </p>
              <div className="safety-points">
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Rigorous Aircraft Maintenance</h4>
                    <p>Maintained in accordance with manufacturer requirements by our Nassau-based provider, GES Aviation.</p>
                  </div>
                </div>
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Professional Operating Standards</h4>
                    <p>All flights operate under strict safety protocols and Bahamian regulatory compliance.</p>
                  </div>
                </div>
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Experienced Crew</h4>
                    <p>Our senior pilots bring over 20,000 combined flight hours of commercial aviation experience.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="safety-image">
              <img src={heroAboutImg} alt="Zipline Express professional crew" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="section-navy" id="stats">
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">32,400+</div>
              <div className="stat-label">Passengers Transported</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,700+</div>
              <div className="stat-label">Commercial Flights</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2017</div>
              <div className="stat-label">Operating Since</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">20,000+</div>
              <div className="stat-label">Combined Senior Pilot Hours</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="cta-banner" id="home-cta">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Ready to Fly?</h2>
            <p>
              Book your scheduled flight or request a private charter today. 
              Experience the beauty of The Bahamas from above.
            </p>
            <div className="cta-banner-actions">
              <Link to="/book-a-flight" className="btn btn-primary btn-lg" id="cta-book">
                Book a Flight
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg" id="cta-contact">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
