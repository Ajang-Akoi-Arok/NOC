import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/noc_logo.png" alt="Nile Orphan Care" className="logo-img" />
          <span className="logo-text">
            <span className="logo-text-main">NILE</span>
            <span className="logo-text-sub">Orphan Care</span>
          </span>
        </Link>

        <div className="mobile-nav">
          <Link to="/donate" className="mobile-top-donate-btn">
            Donate
          </Link>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
        </div>

        <div className="nav-right">
          <ul className="nav-menu">
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About Us</Link></li>
            <li><Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>Our Programs</Link></li>
            <li><Link to="/our-impact" className={`nav-link ${location.pathname === '/our-impact' ? 'active' : ''}`}>Our Impact</Link></li>
            <li><Link to="/get-involved" className={`nav-link ${location.pathname === '/get-involved' ? 'active' : ''}`}>Get Involved</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <Link to="/donate" className="nav-donate-btn">
              Donate
            </Link>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/about" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link to="/programs" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Our Programs</Link>
            <Link to="/our-impact" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Our Impact</Link>
            <Link to="/get-involved" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Get Involved</Link>
            <Link to="/contact" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <Link to="/donate" className="mobile-nav-donate-btn" onClick={() => setIsMobileMenuOpen(false)}>
              Donate
            </Link>
          </div>
        )}
      </div>
    </nav>
    </header>
  );
};

export default Navbar;
