import { useState } from 'react'
import { Link } from 'react-router-dom'
import heroCharterImg from '../assets/images/hero-charter.jpg'

export default function BookFlight() {
  const [formData, setFormData] = useState({
    tripType: 'One way flight',
    departureAirport: '',
    departureDateTime: '',
    firstTime: '',
    aircraftPreference: '',
    passengerCount: '',
    fullName: '',
    phone: '',
    email: '',
    specialRequests: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const setAircraft = (aircraft) => {
    setFormData({ ...formData, aircraftPreference: aircraft })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    alert("Flight request submitted successfully! Our team will contact you shortly.")
  }

  return (
    <div className="page-enter" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src={heroCharterImg} alt="Book a flight with Zipline Express" />
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
          <div className="booking-form-container">
            <h1 className="booking-form-title">BOOK YOUR FLIGHT</h1>
            
            <form onSubmit={handleSubmit} className="booking-form">
              {/* Trip Type */}
              <div className="booking-section">
                <label className="booking-label">Trip Type *</label>
                <div className="radio-group-vertical">
                  <label className="radio-label">
                    <input type="radio" name="tripType" value="One way flight" checked={formData.tripType === 'One way flight'} onChange={handleChange} />
                    <span>One way flight</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="tripType" value="Same-day return (up to 4 hours)" checked={formData.tripType === 'Same-day return (up to 4 hours)'} onChange={handleChange} />
                    <span>Same-day return flight (up 4 hours on ground at destination)</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="tripType" value="Same-day return (more than 4 hours)" checked={formData.tripType === 'Same-day return (more than 4 hours)'} onChange={handleChange} />
                    <span>Same-day return flight (more than 4 hours on ground at destination)</span>
                  </label>
                </div>
              </div>

              {/* Departure Airport */}
              <div className="booking-section">
                <label className="booking-label">Departure Airport</label>
                <select name="departureAirport" value={formData.departureAirport} onChange={handleChange} className="booking-input">
                  <option value="">Select departure airport</option>
                  <option value="Nassau">Nassau (NAS)</option>
                  <option value="Freeport">Freeport (FPO)</option>
                  <option value="Marsh Harbour">Marsh Harbour (MHH)</option>
                  <option value="Staniel Cay">Staniel Cay (TYM)</option>
                </select>
              </div>

              {/* Departure Date & Time */}
              <div className="booking-section">
                <label className="booking-label">Departure date & time (Nassau time)</label>
                <input type="datetime-local" name="departureDateTime" value={formData.departureDateTime} onChange={handleChange} className="booking-input" />
              </div>

              {/* First time flying */}
              <div className="booking-section">
                <label className="booking-label">First time flying with us?</label>
                <div className="radio-group-horizontal">
                  <label className="radio-label">
                    <input type="radio" name="firstTime" value="Yes" checked={formData.firstTime === 'Yes'} onChange={handleChange} />
                    <span>Yes</span>
                  </label>
                  <label className="radio-label">
                    <input type="radio" name="firstTime" value="No" checked={formData.firstTime === 'No'} onChange={handleChange} />
                    <span>No</span>
                  </label>
                </div>
              </div>

              {/* Aircraft Preference */}
              <div className="booking-section">
                <label className="booking-label" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-navy)' }}>Aircraft Preference</label>
                <div className="aircraft-selection-grid">
                  <div className={`aircraft-card ${formData.aircraftPreference === 'Cessna 402' ? 'selected' : ''}`} onClick={() => setAircraft('Cessna 402')}>
                    <h4>Cessna 402</h4>
                    <span className="aircraft-subtitle">Standard</span>
                    <div className="aircraft-seats">7 seats</div>
                  </div>
                  <div className={`aircraft-card ${formData.aircraftPreference === 'King Air' ? 'selected' : ''}`} onClick={() => setAircraft('King Air')}>
                    <h4>King Air</h4>
                    <span className="aircraft-subtitle">Premium Experience</span>
                    <div className="aircraft-seats">9 seats</div>
                  </div>
                </div>
              </div>

              {/* Passenger count */}
              <div className="booking-section">
                <label className="booking-label">Passenger count</label>
                <input type="number" name="passengerCount" placeholder="Select your aircraft preference first." value={formData.passengerCount} onChange={handleChange} className="booking-input" min="1" max={formData.aircraftPreference === 'Cessna 402' ? 7 : (formData.aircraftPreference === 'King Air' ? 9 : 9)} disabled={!formData.aircraftPreference} />
              </div>

              {/* Contact */}
              <div className="booking-section">
                <label className="booking-label" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-navy)' }}>Contact</label>
                <div className="form-row-2">
                  <div className="form-group-inner">
                    <label className="booking-sublabel">Full name</label>
                    <input type="text" name="fullName" placeholder="Your full name" value={formData.fullName} onChange={handleChange} className="booking-input" required />
                  </div>
                  <div className="form-group-inner">
                    <label className="booking-sublabel">Phone or WhatsApp</label>
                    <div className="phone-input-wrapper">
                      <span className="phone-prefix">🇺🇸 +1</span>
                      <input type="tel" name="phone" placeholder="555 123 4567" value={formData.phone} onChange={handleChange} className="booking-input" required />
                    </div>
                  </div>
                </div>
                <div className="form-group-inner" style={{ marginTop: '15px' }}>
                  <label className="booking-sublabel">Email</label>
                  <input type="email" name="email" placeholder="you@example.com" value={formData.email} onChange={handleChange} className="booking-input" required />
                </div>
              </div>

              {/* Special Requests */}
              <div className="booking-section">
                <label className="booking-label" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-navy)' }}>Special Requests</label>
                <textarea name="specialRequests" placeholder="Any special requests for the operator: pets, catering, etc" value={formData.specialRequests} onChange={handleChange} className="booking-input" rows="4"></textarea>
              </div>

              {/* Flight Quote */}
              <div className="booking-section">
                <label className="booking-label" style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-navy)' }}>Flight Quote</label>
                <div className="quote-box">
                  <div className="quote-title">Booking details</div>
                  <div className="quote-row">
                    <span className="quote-label">Trip type</span>
                    <span className="quote-val">{formData.tripType || '-'}</span>
                  </div>
                </div>
              </div>

              <button type="submit" className="btn-submit-booking">Submit flight request</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
