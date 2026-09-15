import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    document.body.style.overflow = ''
  }, [location])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    document.body.style.overflow = menuOpen ? '' : 'hidden'
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/scheduled-flights', label: 'Scheduled Flights' },
    { path: '/private-charter', label: 'Private Charter' },
    { path: '/about', label: 'About' },
    { path: '/travel-information', label: 'Travel Info' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-navigation">
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" aria-label="Zipline Express Home">
          <Logo variant="primary" className="navbar-logo-icon" />
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book-a-flight" className="btn btn-primary btn-sm navbar-cta" id="nav-book-flight">
            Book a Flight
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          id="mobile-menu-toggle"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book-a-flight" className="btn btn-primary btn-lg" onClick={toggleMenu}>
            Book a Flight
          </Link>
        </div>
      </div>
    </nav>
  )
}
