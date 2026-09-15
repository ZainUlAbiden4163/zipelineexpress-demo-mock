import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroCharterImg from '../assets/images/hero-charter.jpg'
import heroMainImg from '../assets/images/hero-main.jpg'
import bahamasAerialImg from '../assets/images/bahamas-aerial.jpg'

const charterDestinations = [
  {
    island: 'Abaco',
    airports: [
      { name: 'Marsh Harbour', kingAir: '$3,000', cessna: '$1,900' },
      { name: 'Moores Island', kingAir: '$2,600', cessna: '$1,600' },
      { name: 'Sandy Point', kingAir: '$2,600', cessna: '$1,600' },
      { name: 'Treasure Cay', kingAir: '$3,500', cessna: '$2,100' },
      { name: 'Spanish Cay', kingAir: '$4,000', cessna: '$2,500' },
      { name: 'Walkers Cay', kingAir: '$4,100', cessna: '$2,800' },
    ],
  },
  {
    island: 'Acklins',
    airports: [
      { name: 'Spring Point', kingAir: '$7,000', cessna: '$4,500' },
    ],
  },
  {
    island: 'Andros',
    airports: [
      { name: 'San Andros', kingAir: '$2,000', cessna: '$1,200' },
      { name: 'Fresh Creek', kingAir: '$2,000', cessna: '$1,100' },
      { name: 'Mangrove Cay', kingAir: '$2,400', cessna: '$1,400' },
      { name: 'Congo Town', kingAir: '$3,000', cessna: '$1,800' },
    ],
  },
  {
    island: 'Berry Islands',
    airports: [
      { name: 'Chub Cay', kingAir: '$2,000', cessna: '$1,200' },
      { name: 'Great Harbour Cay', kingAir: '$2,400', cessna: '$1,400' },
    ],
  },
  {
    island: 'Bimini',
    airports: [
      { name: 'South Bimini', kingAir: '$3,000', cessna: '$1,900' },
    ],
  },
  {
    island: 'Cat Island',
    airports: [
      { name: 'Arthurs Town', kingAir: '$3,400', cessna: '$2,000' },
      { name: 'Hawks Nest', kingAir: '$4,100', cessna: '$2,400' },
      { name: 'New Bight', kingAir: '$3,500', cessna: '$2,400' },
    ],
  },
  {
    island: 'Crooked Island',
    airports: [
      { name: 'Colonel Hill', kingAir: '$7,000', cessna: '$3,800' },
      { name: 'Pittstown', kingAir: '$6,700', cessna: '$3,800' },
    ],
  },
  {
    island: 'Eleuthera',
    airports: [
      { name: 'Governors Harbour', kingAir: '$2,100', cessna: '$1,400' },
      { name: 'North Eleuthera', kingAir: '$1,700', cessna: '$1,100' },
      { name: 'Rocks Sound', kingAir: '$2,400', cessna: '$1,500' },
    ],
  },
  {
    island: 'Exuma',
    airports: [
      { name: 'Black Point', kingAir: '$2,800', cessna: '$1,800' },
      { name: 'Moss Town', kingAir: '$3,800', cessna: '$2,400' },
      { name: 'Hog Cay', kingAir: '$4,600', cessna: '$2,600' },
      { name: 'Lee Stocking Island', kingAir: 'N/A', cessna: '$2,000' },
      { name: 'Farmers Cay', kingAir: 'N/A', cessna: '$2,100' },
      { name: 'Normans Cay', kingAir: '$2,200', cessna: '$1,500' },
      { name: 'Rudder Cut Cay', kingAir: 'N/A', cessna: '$2,000' },
      { name: 'Staniel Cay', kingAir: '$2,800', cessna: '$1,900' },
    ],
  },
  {
    island: 'Grand Bahama',
    airports: [
      { name: 'Freeport', kingAir: '$3,500', cessna: '$1,900' },
      { name: 'West End', kingAir: '$4,100', cessna: '$2,600' },
    ],
  },
  {
    island: 'Inagua',
    airports: [
      { name: 'Matthew Town', kingAir: '$9,000', cessna: '$5,600' },
    ],
  },
  {
    island: 'Long Island',
    airports: [
      { name: 'Deadmans Cay', kingAir: '$3,600', cessna: '$2,900' },
      { name: 'Hog Cay', kingAir: '$5,200', cessna: '$3,200' },
      { name: 'Stella Maris', kingAir: '$4,600', cessna: '$2,500' },
    ],
  },
  {
    island: 'Mayaguana',
    airports: [
      { name: 'Abrahams Bay', kingAir: '$9,000', cessna: '$3,000' },
    ],
  },
  {
    island: 'Ragged Island',
    airports: [
      { name: 'Duncan Town', kingAir: '$5,000', cessna: '$3,600' },
    ],
  },
  {
    island: 'Rum Cay',
    airports: [
      { name: 'Port Nelson', kingAir: '$5,100', cessna: '$3,200' },
    ],
  },
  {
    island: 'San Salvador',
    airports: [
      { name: 'Cockburn Town', kingAir: '$5,400', cessna: '$3,200' },
    ],
  },
]

function IslandAccordion({ island, airports, isOpen, onToggle }) {
  return (
    <div className={`island-accordion ${isOpen ? 'island-accordion-open' : ''}`}>
      <button className="island-accordion-header" onClick={onToggle} aria-expanded={isOpen}>
        <div className="island-accordion-title">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
          <span>{island}</span>
          <span className="island-accordion-count">{airports.length} {airports.length === 1 ? 'airport' : 'airports'}</span>
        </div>
        <svg className={`island-accordion-chevron ${isOpen ? 'island-accordion-chevron-open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6"/></svg>
      </button>
      {isOpen && (
        <div className="island-accordion-body">
          {airports.map((airport) => (
            <div className="island-accordion-row" key={airport.name}>
              <span className="island-accordion-airport">{airport.name}</span>
              <div className="island-accordion-planes">
                {airport.kingAir !== 'N/A' && <span className="plane-badge king-air">King Air</span>}
                {airport.cessna !== 'N/A' && <span className="plane-badge cessna">Cessna 402</span>}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function PrivateCharter() {
  const [openIslands, setOpenIslands] = useState({})

  const toggleIsland = (island) => {
    setOpenIslands((prev) => ({ ...prev, [island]: !prev[island] }))
  }

  const expandAll = () => {
    const all = {}
    charterDestinations.forEach((d) => (all[d.island] = true))
    setOpenIslands(all)
  }

  const collapseAll = () => {
    setOpenIslands({})
  }

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/planes/king-air.jpeg" alt="Zipline Express King Air 100 flying" style={{ objectPosition: 'center 60%' }} />
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
              <img src="/Landing Page Banner/charter1.jpg" alt="Zipline Express Cessna on the tarmac" />
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
              Our fleet features the King Air 100 and Cessna 402 aircrafts. These proven and highly dependable aircrafts offer the perfect balance of range, passenger capacity, and comfort. They are ideal for both short island-hopping routes and longer connections across the Caribbean.
            </p>
          </div>

          <div className="aircraft-grid" style={{ maxWidth: '1000px', margin: 'var(--space-2xl) auto 0' }}>
            {/* King Air 100 */}
            <div className="aircraft-card" id="aircraft-kingair">
              <div className="aircraft-card-image">
                <img src="/planes/king-air.jpeg" alt="King Air 100 aircraft" />
              </div>
              <div className="aircraft-card-body">
                <h3>King Air 100</h3>
                <span className="aircraft-card-type">Features</span>
                <div className="aircraft-specs">
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    Spacious pressurized cabin
                  </div>
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
                    Extended range capabilities
                  </div>
                  <div className="aircraft-spec">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
                    Enhanced comfort and speed
                  </div>
                </div>
              </div>
            </div>

            {/* Cessna 402 */}
            <div className="aircraft-card" id="aircraft-cessna">
              <div className="aircraft-card-image">
                <img src="/planes/cessna-402.jpeg" alt="Cessna 402 aircraft" />
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

      {/* Charter Destinations - Map + Accordion */}
      <section className="section" id="charter-destinations">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Destinations</span>
            <h2 className="section-title">Where Can You Fly?</h2>
            <p className="section-subtitle">
              Our charter services cover {charterDestinations.length} islands across The Bahamas with 
              over 40 airport destinations.
            </p>
          </div>

          {/* Static Map */}
          <div className="charter-map-wrapper">
            <img 
              src="/bahamas-charter-map.jpg" 
              alt="Map of The Bahamas showing all Zipline Express charter destinations with gold pin markers" 
              className="charter-map-image"
            />
          </div>

          {/* Accordion List */}
          <div className="island-accordion-controls">
            <button onClick={expandAll} className="island-accordion-control-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
              Expand All
            </button>
            <button onClick={collapseAll} className="island-accordion-control-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 11l-5-5-5 5M17 18l-5-5-5 5"/></svg>
              Collapse All
            </button>
          </div>

          <div className="island-accordion-list">
            {charterDestinations.map((dest) => (
              <IslandAccordion
                key={dest.island}
                island={dest.island}
                airports={dest.airports}
                isOpen={!!openIslands[dest.island]}
                onToggle={() => toggleIsland(dest.island)}
              />
            ))}
          </div>

          <p style={{ textAlign: 'center', marginTop: 'var(--space-xl)', color: 'var(--color-text-muted)', fontSize: 'var(--text-sm)' }}>
            Destination availability depends on aircraft type, weather, and regulatory requirements. 
            Contact us for custom route enquiries.
          </p>
        </div>
      </section>

      {/* The Bahamian Experience */}
      <section className="section" id="bahamian-experience">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Discover The Bahamas</span>
            <h2 className="section-title">The Bahamian Experience</h2>
            <p className="section-subtitle">
              Most of our clients fly with us to experience the unique beauty and 
              adventure of the Out Islands. Here's a glimpse of what awaits you.
            </p>
          </div>

          <div className="experiences-grid">
            <div className="experience-card experience-tall">
              <img src="/experiences/IMG_0519.jpeg" alt="Swimming with Pigs in Exuma" />
              <div className="experience-overlay">
                <h3>Swimming with Pigs</h3>
                <span>Exuma Cays</span>
              </div>
            </div>
            
            <div className="experience-card">
              <img src="/experiences/thunderball-grotto-staniel-cay-bahamas-1024x536.jpg" alt="Thunderball Grotto, Staniel Cay" />
              <div className="experience-overlay">
                <h3>Thunderball Grotto</h3>
                <span>Staniel Cay</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/JoelWestsideBone-1920_edited_edited.jpg" alt="World-Class Bonefishing" />
              <div className="experience-overlay">
                <h3>World-Class Bonefishing</h3>
                <span>Andros</span>
              </div>
            </div>

            <div className="experience-card experience-wide">
              <img src="/experiences/jakob-owens-VkpFJzV455I-unsplash.jpg" alt="Luxury Resorts & Beaches" />
              <div className="experience-overlay">
                <h3>Luxury Resorts</h3>
                <span>Bimini</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/IMG-0014.jpg" alt="Crystal Clear Waters" />
              <div className="experience-overlay">
                <h3>Crystal Clear Waters</h3>
                <span>Abaco Islands</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/claude-piche-205364-unsplash.jpg" alt="Pink Sand Beaches" />
              <div className="experience-overlay">
                <h3>Pink Sand Beaches</h3>
                <span>Eleuthera</span>
              </div>
            </div>

            <div className="experience-card experience-tall">
              <img src="/experiences/IMG_0548.jpeg" alt="Island Adventures" />
              <div className="experience-overlay">
                <h3>Island Adventures</h3>
                <span>The Out Islands</span>
              </div>
            </div>

            <div className="experience-card experience-wide">
              <img src="/experiences/jakob-owens-300988-unsplash.jpg" alt="Tropical Escapes" />
              <div className="experience-overlay">
                <h3>Tropical Escapes</h3>
                <span>Cat Island</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/46395bd3-00ab-4b2e-9a4b-652b9acf2856.jpeg" alt="Secluded Coves" />
              <div className="experience-overlay">
                <h3>Secluded Coves</h3>
                <span>Berry Islands</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/IMG_4723.jpeg" alt="Marine Life" />
              <div className="experience-overlay">
                <h3>Marine Life</h3>
                <span>Long Island</span>
              </div>
            </div>

            <div className="experience-card">
              <img src="/experiences/d1385fd5-ab64-42c3-8c5f-7f7cb3120a20.jpeg" alt="Pristine Coastlines" />
              <div className="experience-overlay">
                <h3>Pristine Coastlines</h3>
                <span>San Salvador</span>
              </div>
            </div>

            <div className="experience-card experience-wide">
              <img src="/experiences/oliver-sjostrom-iSrBg45UCaM-unsplash_edited.jpg" alt="Private Island Retreats" />
              <div className="experience-overlay">
                <h3>Private Island Retreats</h3>
                <span>Exuma Cays</span>
              </div>
            </div>
          </div>
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
