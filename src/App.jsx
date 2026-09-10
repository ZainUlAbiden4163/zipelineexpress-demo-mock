import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import ScheduledFlights from './pages/ScheduledFlights'
import PrivateCharter from './pages/PrivateCharter'
import About from './pages/About'
import TravelInfo from './pages/TravelInfo'
import Contact from './pages/Contact'
import BookFlight from './pages/BookFlight'
import { Link } from 'react-router-dom'
import './App.css'

function MobileBookingBar() {
  return (
    <div className="mobile-booking-bar" id="mobile-booking">
      <div className="mobile-booking-bar-inner">
        <Link to="/book-a-flight" className="btn btn-primary">
          ✈ Book a Flight
        </Link>
        <Link to="/private-charter" className="btn btn-secondary" style={{ borderColor: 'var(--color-gold)', color: 'var(--color-gold)' }}>
          Charter
        </Link>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scheduled-flights" element={<ScheduledFlights />} />
          <Route path="/private-charter" element={<PrivateCharter />} />
          <Route path="/about" element={<About />} />
          <Route path="/travel-information" element={<TravelInfo />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-a-flight" element={<BookFlight />} />
        </Routes>
      </main>
      <Footer />
      <MobileBookingBar />
    </>
  )
}

export default App
