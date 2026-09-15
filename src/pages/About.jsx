import { useState } from 'react'
import { Link } from 'react-router-dom'

const teamMembers = [
  {
    name: 'Capt. Mornel Brown',
    title: 'Founder & CEO',
    image: '/team/Capt%20Mornel.jpg',
    points: [
      '9,500+ flight hours',
      '16+ years of aviation experience',
      'Dedicated to building a professional, safety-focused airline for The Bahamas'
    ]
  },
  {
    name: 'Capt. Hensel Bullard',
    title: 'Chief Pilot',
    image: '/team/Capt%20Hensel%20Bullard.jpg',
    points: [
      '10,500+ flight hours',
      '30+ years of commercial aviation experience',
      'Ensuring the highest standards of training and operational excellence'
    ]
  }
];
// removed heroAboutImg import
import heroMainImg from '../assets/images/hero-main.jpg'
import bahamasAerialImg from '../assets/images/bahamas-aerial.jpg'

export default function About() {
  const [activeTeamIndex, setActiveTeamIndex] = useState(0);
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/Landing Page Banner/improved_cessna.jpg" alt="Zipline Express crew" />
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
              <h2 className="section-title">About Us</h2>
              <p>
                Operating since 2017, we've built a strong reputation with our loyal customers for safety, service, and reliability. What began as a dedicated private charter operation has grown into a well-established Bahamian aviation company. 
              </p>
              <p>
                While our scheduled passenger service is a new offering designed to better connect the islands, the foundation of our company remains the same. Whether you are flying on a scheduled route or a private charter, we will ensure your satisfaction with every flight!
              </p>
              <p>
                Safety is our number one priority, and our flight crew—including founders with decades of expertise—brings over 30 years of combined experience in flying and operating optimally safe flights. Our aircraft are maintained to the highest standard of manufacturer maintenance requirements. We adhere strictly to the rules and regulations that govern the aviation industry in The Bahamas and elsewhere.
              </p>
            </div>
            <div className="about-image">
              <img src="/Landing Page Banner/charter1.jpg" alt="Zipline Express aircraft over the Bahamas" />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section-navy" id="about-leadership">
        <div className="container">
          <div className="text-center">
            <span className="section-label" style={{ color: 'var(--color-gold)' }}>Our Team</span>
            <h2 className="section-title" style={{ color: 'var(--color-white)' }}>Aviation Leadership</h2>
            <p className="section-subtitle" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Guided by decades of commercial aviation experience and a commitment to operational excellence.
            </p>
          </div>

          <div style={{ maxWidth: '1000px', margin: 'var(--space-2xl) auto 0', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <div style={{ flex: '1 1 400px', minHeight: '400px', maxHeight: '600px' }}>
                <img 
                  src={teamMembers[activeTeamIndex].image} 
                  alt={teamMembers[activeTeamIndex].name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div style={{ flex: '1 1 400px', padding: 'var(--space-2xl)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ color: 'var(--color-white)', marginBottom: 'var(--space-xs)', fontSize: 'var(--text-3xl)' }}>{teamMembers[activeTeamIndex].name}</h3>
                <div style={{ color: 'var(--color-gold)', fontWeight: 600, marginBottom: 'var(--space-xl)', fontSize: 'var(--text-lg)' }}>{teamMembers[activeTeamIndex].title}</div>
                <ul style={{ color: 'rgba(255, 255, 255, 0.8)', listStyleType: 'none', padding: 0, margin: '0 0 var(--space-2xl) 0', display: 'flex', flexDirection: 'column', gap: 'var(--space-md)', textAlign: 'left' }}>
                  {teamMembers[activeTeamIndex].points.map((point, idx) => (
                    <li key={idx} style={{ fontSize: 'var(--text-lg)' }}>{point}</li>
                  ))}
                </ul>
                <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: 'auto' }}>
                  {teamMembers.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveTeamIndex(idx)}
                      style={{ 
                        width: '40px', 
                        height: '4px', 
                        borderRadius: '2px', 
                        background: activeTeamIndex === idx ? 'var(--color-gold)' : 'rgba(255,255,255,0.3)',
                        transition: 'background 0.3s ease',
                        cursor: 'pointer',
                        border: 'none',
                        padding: 0
                      }}
                      aria-label={`View ${teamMembers[idx].name}`}
                    />
                  ))}
                </div>
              </div>
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

          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-md)' }}>Why Zipline?</h3>
            <p style={{ fontSize: 'var(--text-lg)', lineHeight: '1.8' }}>
              You come first. The protection and safekeeping of our clients and team are our first priority for all our operations and services. We always strive to ensure superior standards. We seek to offer our personnel a first-rate working environment and reward them for exceptional performance. We endeavor to uphold the highest code of conduct in all our business relationships. We seek to behave conscientiously towards humanity and the environment.
            </p>
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
                Safety is our number one priority and our flight crew has over 30 years' experience in flying and operating optimally safe flights. Our aircraft are maintained to the highest standard of manufacturer maintenance requirements. We adhere strictly to the rules and regulations that govern the aviation industry in the Bahamas and elsewhere.
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
              <img src="/Landing Page Banner/28660791_1595264923903721_3264508752249749504_o.jpg" alt="Bahamas islands aerial view" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-navy" id="about-stats">
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
