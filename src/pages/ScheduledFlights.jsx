import { Link } from 'react-router-dom'
import heroScheduledImg from '../assets/images/hero-scheduled.jpg'

export default function ScheduledFlights() {
  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={heroScheduledImg} alt="Zipline Express scheduled passenger flights" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Scheduled Service</span>
          <h1>Scheduled Passenger Flights</h1>
          <p>Regular flights connecting the islands of The Bahamas</p>
        </div>
      </section>

      {/* Routes Section */}
      <section className="section" id="scheduled-routes">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Our Routes</span>
            <h2 className="section-title">Where We Fly</h2>
            <p className="section-subtitle">
              Zipline Express operates scheduled passenger flights on two routes, 
              connecting Grand Bahama to Bimini and the Abaco Islands.
            </p>
          </div>

          <div className="routes-grid">
            {/* Freeport ⇄ Bimini */}
            <div className="route-card" id="route-bimini-detail">
              <div className="route-card-header">
                <div className="route-from">
                  <h4>Freeport</h4>
                  <span>Grand Bahama (FPO)</span>
                </div>
                <div className="route-arrow">⇄</div>
                <div className="route-to">
                  <h4>Bimini</h4>
                  <span>South Bimini (BIM)</span>
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
                    <strong>Cessna 402</strong>
                    <span>7 passenger seats</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: 'var(--space-xl)', paddingTop: 'var(--space-lg)' }}>
                <Link to="/book-a-flight" className="btn btn-primary" style={{ width: '100%' }}>
                  Book This Route
                </Link>
              </div>
            </div>

            {/* Freeport ⇄ Marsh Harbour */}
            <div className="route-card" id="route-marsh-detail">
              <div className="route-card-header">
                <div className="route-from">
                  <h4>Freeport</h4>
                  <span>Grand Bahama (FPO)</span>
                </div>
                <div className="route-arrow">⇄</div>
                <div className="route-to">
                  <h4>Marsh Harbour</h4>
                  <span>Abaco (MHH)</span>
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
                    <strong>Cessna 402</strong>
                    <span>7 passenger seats</span>
                  </div>
                </div>
              </div>
              <div style={{ padding: 'var(--space-xl)', paddingTop: 'var(--space-lg)' }}>
                <Link to="/book-a-flight" className="btn btn-primary" style={{ width: '100%' }}>
                  Book This Route
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flight Schedule */}
      <section className="section section-alt" id="flight-schedule">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Flight Schedule</span>
            <h2 className="section-title">Departure Times & Fares</h2>
            <p className="section-subtitle">
              Our scheduled flights operate regularly across both routes. 
              Fares and schedules are subject to availability.
            </p>
          </div>

          <div className="schedule-table-wrapper">
            <table className="schedule-table" id="schedule-table">
              <thead>
                <tr>
                  <th>Route</th>
                  <th>Departure</th>
                  <th>Arrival</th>
                  <th>Days</th>
                  <th>Aircraft</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Freeport → Bimini</strong></td>
                  <td>8:00 AM</td>
                  <td>8:30 AM</td>
                  <td>Mon, Wed, Fri, Sun</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
                <tr>
                  <td><strong>Bimini → Freeport</strong></td>
                  <td>9:00 AM</td>
                  <td>9:30 AM</td>
                  <td>Mon, Wed, Fri, Sun</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
                <tr>
                  <td><strong>Freeport → Bimini</strong></td>
                  <td>3:00 PM</td>
                  <td>3:30 PM</td>
                  <td>Mon, Wed, Fri, Sun</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
                <tr>
                  <td><strong>Bimini → Freeport</strong></td>
                  <td>4:00 PM</td>
                  <td>4:30 PM</td>
                  <td>Mon, Wed, Fri, Sun</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
                <tr>
                  <td><strong>Freeport → Marsh Harbour</strong></td>
                  <td>9:00 AM</td>
                  <td>9:45 AM</td>
                  <td>Tue, Thu, Sat</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
                <tr>
                  <td><strong>Marsh Harbour → Freeport</strong></td>
                  <td>10:30 AM</td>
                  <td>11:15 AM</td>
                  <td>Tue, Thu, Sat</td>
                  <td>Cessna 402</td>
                  <td><span className="schedule-badge schedule-badge-active">● Active</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', marginTop: 'var(--space-xl)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>
            Schedules and fares are subject to change. Flight times are approximate and may vary based on weather and operational conditions.
          </p>
        </div>
      </section>

      {/* Travel Information */}
      <section className="section" id="scheduled-info">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Before You Fly</span>
            <h2 className="section-title">Important Travel Information</h2>
          </div>

          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
              </div>
              <h3>Baggage</h3>
              <p>Each passenger is allowed one carry-on bag and one checked bag. Weight limits apply to ensure safe aircraft operation.</p>
              <ul>
                <li>Carry-on: 1 small bag (max 15 lbs)</li>
                <li>Checked: 1 bag (max 30 lbs)</li>
                <li>Excess baggage subject to availability and fees</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 14l2 2 4-4"/></svg>
              </div>
              <h3>Check-in</h3>
              <p>Arrive at the airport at least 30 minutes before your scheduled departure for check-in and boarding.</p>
              <ul>
                <li>Bring a valid photo ID</li>
                <li>Check-in closes 15 minutes before departure</li>
                <li>Keep your booking confirmation handy</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
              </div>
              <h3>Flight Day</h3>
              <p>Important reminders for a smooth travel experience on the day of your flight.</p>
              <ul>
                <li>Flights are subject to weather conditions</li>
                <li>Follow crew instructions at all times</li>
                <li>No smoking on any Zipline Express flight</li>
                <li>Contact us if running late</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="scheduled-cta">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Ready to Book Your Flight?</h2>
            <p>
              Choose your route, check the schedule, and book your seat today. 
              Fly with confidence across The Bahamas.
            </p>
            <div className="cta-banner-actions">
              <Link to="/book-a-flight" className="btn btn-primary btn-lg" id="scheduled-book-cta">
                Book a Flight Now
              </Link>
              <Link to="/travel-information" className="btn btn-secondary btn-lg">
                Travel Information
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
