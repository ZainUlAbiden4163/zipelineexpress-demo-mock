import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <svg className="footer-logo-icon" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="8" fill="#C8A84E" fillOpacity="0.15"/>
                <path d="M12 28h24M14 24h20M16 32h16" stroke="#C8A84E" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M24 10l-6 14h12l-6-14z" fill="#C8A84E" fillOpacity="0.3" stroke="#C8A84E" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M24 10v4M21 16h6" stroke="#C8A84E" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="24" cy="38" r="2" fill="#C8A84E"/>
              </svg>
              <div className="footer-logo-text">
                ZIPLINE
                <span>EXPRESS</span>
              </div>
            </Link>
            <p>
              Safe, reliable air travel across The Bahamas. Scheduled passenger flights 
              and private charter services connecting the islands you love.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com/ziplineexpress" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="https://www.instagram.com/ziplineexpress" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Quick Links</h4>
            <div className="footer-links">
              <Link to="/scheduled-flights">Scheduled Flights</Link>
              <Link to="/private-charter">Private Charter</Link>
              <Link to="/about">About Us</Link>
              <Link to="/travel-information">Travel Information</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/book-a-flight">Book a Flight</Link>
            </div>
          </div>

          {/* Routes */}
          <div>
            <h4>Our Routes</h4>
            <div className="footer-links">
              <Link to="/scheduled-flights">Freeport ⇄ Bimini</Link>
              <Link to="/scheduled-flights">Freeport ⇄ Marsh Harbour</Link>
              <Link to="/private-charter">Private Charter Destinations</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact Us</h4>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <div>
                Jet Nassau, Coral Harbour Road Suite<br/>
                #1 Lynden Pindling International Airport<br/>
                Nassau N.P, The Bahamas
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <div>
                <a href="tel:+12425573498">+1 (242) 557 3498</a><br/>
                <a href="tel:+12425253498">+1 (242) 525 3498</a>
              </div>
            </div>
            <div className="footer-contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@zipline-express.com">info@zipline-express.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Zipline Express. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="footer-disclaimer">
          <p>
            Flight schedules, fares, and availability are subject to change without notice. 
            All flights are subject to weather conditions and operational requirements. 
            Baggage allowances and restrictions apply — please review our travel information before booking. 
            Zipline Express reserves the right to modify schedules and cancel flights as necessary for safety and operational reasons.
          </p>
        </div>
      </div>
    </footer>
  )
}
