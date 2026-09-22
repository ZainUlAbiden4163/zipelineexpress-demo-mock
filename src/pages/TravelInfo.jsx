import { useState } from 'react'
import { Link } from 'react-router-dom'
// removed bahamasAerialImg import

export default function TravelInfo() {
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: 'What documents do I need to fly?',
      answer: 'All passengers must present a valid government-issued photo ID before boarding. For international flights, a valid passport is required. Please ensure your documents are current and in good condition.'
    },
    {
      question: 'How early should I arrive at the airport?',
      answer: 'We recommend arriving at least 45 minutes before your scheduled departure time. Check-in closes 30 minutes before departure. Late arrivals may not be able to board.'
    },
    {
      question: 'What is the baggage allowance?',
      answer: 'Each passenger is permitted one carry-on bag (max 10 lbs) and one personal item. Passengers may check up to two bags. The first checked bag is free up to 40 lbs. A second checked bag is $25 (up to 40 lbs). Overweight bags incur additional fees and bags over 60 lbs are not accepted. Excess baggage is subject to available aircraft capacity.'
    },
    {
      question: 'What happens if my flight is cancelled due to weather?',
      answer: 'Passenger safety is our top priority. If weather conditions make a flight unsafe, we will reschedule at no additional cost. Our team will contact you with alternative arrangements as quickly as possible.'
    },
    {
      question: 'Can I change or cancel my booking?',
      answer: 'Changes and cancellations are handled through the booking platform. Please refer to the booking confirmation for the applicable terms and conditions, or contact our team for assistance.'
    },
    {
      question: 'Is there food or drink service on board?',
      answer: 'Due to the short duration of our flights, we do not provide an in-flight meal service.'
    },
    {
      question: 'Are children allowed to fly?',
      answer: 'Yes, children of all ages are welcome. Children under 2 may travel on an adult\'s lap. All children must be accompanied by an adult.'
    },
  ]

  return (
    <div className="page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero-bg">
          <img src="/Landing Page Banner/travel-info-banner.jpg" alt="Bahamas islands aerial view" />
        </div>
        <div className="hero-overlay"></div>
        <div className="page-hero-content">
          <span className="section-label" style={{ color: '#C8A84E' }}>Know Before You Go</span>
          <h1>Travel Information</h1>
          <p>Everything you need to know before your Zipline Express flight</p>
        </div>
      </section>

      {/* Key Travel Info */}
      <section className="section" id="travel-essentials">
        <div className="container">
          <div className="text-center">
            <span className="section-label">Essentials</span>
            <h2 className="section-title">Preparing for Your Flight</h2>
            <p className="section-subtitle">
              Here's what you need to know to make your travel experience with 
              Zipline Express smooth and enjoyable.
            </p>
          </div>

          <div className="info-cards-grid">
            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>
              </div>
              <h3>Before You Arrive</h3>
              <ul>
                <li>Confirm your booking details</li>
                <li>Prepare your valid photo ID</li>
                <li>Check the weather forecast</li>
                <li>Review baggage allowances</li>
                <li>Note the airport location</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a4 4 0 00-8 0v2"/></svg>
              </div>
              <h3>Baggage Guidelines</h3>
              <ul>
                <li>1 carry-on bag (max 10 lbs) + 1 personal item</li>
                <li>Checked: Up to 2 bags (max 40 lbs for first free bag)</li>
                <li>Soft-sided bags preferred</li>
                <li>No hazardous materials</li>
                <li>Overweight/excess baggage subject to fees and availability</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>Check-in & Boarding</h3>
              <ul>
                <li>Arrive 45 minutes before departure</li>
                <li>Check-in closes 30 minutes before</li>
                <li>Present photo ID at check-in</li>
                <li>Listen to crew safety briefing</li>
                <li>Follow all crew instructions</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Safety on Board</h3>
              <ul>
                <li>Seatbelts must be worn during flight</li>
                <li>No smoking on any flight</li>
                <li>Follow crew safety instructions</li>
                <li>Stow baggage securely before takeoff</li>
                <li>Report any concerns to crew</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.4-.1.9.3 1.1l5.6 3.4-3.2 3.2-2-.8c-.4-.2-.8 0-1.1.3l-.1.2c-.2.3-.1.7.1 1l2.3 2.3 2.3 2.3c.3.3.7.3 1 .1l.2-.1c.3-.2.5-.7.3-1.1l-.8-2 3.2-3.2 3.4 5.6c.2.4.7.5 1.1.3l.5-.3c.4-.2.6-.7.5-1.1z"/></svg>
              </div>
              <h3>Weather & Cancellations</h3>
              <ul>
                <li>Flights may be delayed or cancelled for safety</li>
                <li>Weather-cancelled flights rebooked at no cost</li>
                <li>We will contact you if your flight is affected</li>
                <li>Monitor your email/phone on travel day</li>
              </ul>
            </div>

            <div className="info-card">
              <div className="info-card-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <h3>Need Help?</h3>
              <p>Contact our team for any travel-related questions or special requirements.</p>
              <ul>
                <li>Phone: +1 (242) 557 3498</li>
                <li>Email: info@zipline-express.com</li>
                <li>Available during business hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section-alt" id="travel-faqs">
        <div className="container">
          <div className="text-center">
            <span className="section-label">FAQs</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to the most common questions about flying with Zipline Express.
            </p>
          </div>

          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div className={`faq-item ${openFaq === index ? 'open' : ''}`} key={index}>
                <button
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  id={`faq-${index}`}
                >
                  {faq.question}
                  <svg className="faq-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="travel-cta">
        <div className="container">
          <div className="cta-banner-content">
            <h2>Have More Questions?</h2>
            <p>
              Our team is here to help. Contact us with any travel queries 
              or special requirements.
            </p>
            <div className="cta-banner-actions">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us
              </Link>
              <Link to="/book-a-flight" className="btn btn-secondary btn-lg">
                Book a Flight
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
