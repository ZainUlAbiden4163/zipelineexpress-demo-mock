import { Link } from 'react-router-dom'
import heroAboutImg from '../assets/images/hero-about.jpg'
import heroMainImg from '../assets/images/hero-main.jpg'
import bahamasAerialImg from '../assets/images/bahamas-aerial.jpg'

export default function About() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={heroAboutImg} alt="Zipline Express crew" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Our Story</span>
          <h1>About Zipline Express</h1>
          <p>Connecting The Bahamas through safe, reliable air travel</p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section" id="about-story">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Your Trusted Partner in Bahamian Aviation</h2>
              <p>
                Zipline Express is a Bahamian air charter and scheduled passenger service 
                operator based at Lynden Pindling International Airport in Nassau. For over 
                15 years, we have been providing safe, reliable air travel across the islands 
                of The Bahamas and beyond.
              </p>
              <p>
                Our team of experienced aviation professionals is dedicated to delivering 
                the highest standards of safety, customer care, and operational excellence. 
                Whether you're flying on one of our scheduled passenger routes or chartering 
                a private flight, you can trust that every aspect of your journey has been 
                carefully managed.
              </p>
              <p>
                We are proud to now offer scheduled passenger services alongside our 
                established private charter operations, giving travellers more ways to 
                experience the beauty and diversity of The Bahamas.
              </p>
            </div>
            <div className="about-image">
              <img src={heroMainImg} alt="Zipline Express aircraft over the Bahamas" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="section section-alt" id="about-values">
        <div className="container">
          <div className="text-center">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Values</h2>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h4>Safety Above All</h4>
              <p>
                Safety is not just a policy — it's the foundation of every decision 
                we make. From aircraft maintenance to crew training, every aspect of 
                our operation prioritises the wellbeing of our passengers and team.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h4>Operational Excellence</h4>
              <p>
                We hold ourselves to the highest professional operating standards. 
                Our maintenance programmes exceed regulatory requirements, and our 
                crew undergoes continuous training and assessment.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h4>Reliability</h4>
              <p>
                Our passengers depend on us, and we take that responsibility seriously. 
                Consistent schedules, well-maintained aircraft, and a team that shows 
                up ready — every time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              </div>
              <h4>Customer First</h4>
              <p>
                From the moment you enquire to the moment you land, we are focused 
                on making your experience smooth, comfortable, and enjoyable. Your 
                satisfaction is our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Standards */}
      <section className="section" id="about-safety">
        <div className="container">
          <div className="about-content reverse">
            <div className="about-text">
              <span className="section-label">Our Standards</span>
              <h2 className="section-title">Safety & Maintenance</h2>
              <p>
                At Zipline Express, we believe that world-class safety standards are 
                non-negotiable. Our aircraft maintenance programmes are designed to 
                meet and exceed all regulatory requirements set by the Bahamas Civil 
                Aviation Authority.
              </p>
              <div className="safety-points">
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Regular Inspections</h4>
                    <p>All aircraft undergo scheduled and unscheduled inspections to ensure airworthiness.</p>
                  </div>
                </div>
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Qualified Maintenance Team</h4>
                    <p>Our maintenance staff holds all required certifications and qualifications.</p>
                  </div>
                </div>
                <div className="safety-point">
                  <div className="safety-point-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                  </div>
                  <div>
                    <h4>Crew Training</h4>
                    <p>Pilots undergo recurrent training, proficiency checks, and continuous professional development.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-image">
              <img src={bahamasAerialImg} alt="Bahamas islands aerial view" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-navy" id="about-stats">
        <div className="container">
          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Years of Service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Aircraft Types</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">700+</div>
              <div className="stat-label">Islands Accessible</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Safety Commitment</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="about-cta">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Fly with Confidence</h2>
            <p>
              Experience the difference that comes with a team dedicated to your safety, 
              comfort, and satisfaction.
            </p>
            <div className="cta-banner-actions">
              <Link to="/book-a-flight" className="btn btn-primary btn-lg">
                Book a Flight
              </Link>
              <Link to="/contact" className="btn btn-secondary btn-lg">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
