import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const location = useLocation();
  const { theme, setTheme } = useTheme();
  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileThemeOpen, setMobileThemeOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (!event.target.closest('.mobile-menu') && !event.target.closest('.mobile-menu-btn')) {
        setIsMobileMenuOpen(false);
        setMobileAboutOpen(false);
        setMobileThemeOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      alert(`Searching for: ${searchQuery}`);
      setShowSearch(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img src="/images/noc_logo.png" alt="Nile Orphan Care" className="logo-img" />
          <span className="logo-text">Nile Orphan Care</span>
        </Link>
        
        <div className="mobile-nav">
          <button className="nav-btn search-btn" onClick={() => setShowSearch(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
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
            <li className="dropdown" 
                onMouseEnter={() => setShowAboutDropdown(true)}
                onMouseLeave={() => setShowAboutDropdown(false)}>
              <span className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </span>
              {showAboutDropdown && (
                <div className="dropdown-menu">
                  <Link to="/about" className="dropdown-item">About Us</Link>
                  <a href="/about#mission-vision" className="dropdown-item">Mission & Vision</a>
                  <a href="/about#partners" className="dropdown-item">Partners</a>
                  <a href="/about#team" className="dropdown-item">Our Team</a>
                </div>
              )}
            </li>
            <li><Link to="/programs" className={`nav-link ${location.pathname === '/programs' ? 'active' : ''}`}>Programs</Link></li>
            <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link></li>
          </ul>
          <div className="nav-actions">
            <div className="theme-dropdown"
                 onMouseEnter={() => setShowThemeDropdown(true)}
                 onMouseLeave={() => setShowThemeDropdown(false)}>
              <Link to="#" className="nav-link">Theme 
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </Link>
              {showThemeDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item" onClick={() => setTheme('light')}>Light</button>
                  <button className="dropdown-item" onClick={() => setTheme('dark')}>Dark</button>
                </div>
              )}
            </div>
            <Link to="/donate" className="nav-link">Donate</Link>
            <button className="nav-btn" onClick={() => setShowSearch(true)}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mobile-menu">
            <Link to="/" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <div className="mobile-dropdown">
              <button className="mobile-menu-item dropdown-toggle" onClick={() => setMobileAboutOpen(!mobileAboutOpen)}>
                About
                <svg className={`dropdown-arrow ${mobileAboutOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="mobile-submenu">
                  <a href="/about#mission-vision" className="mobile-submenu-item" onClick={() => setIsMobileMenuOpen(false)}>Mission & Vision</a>
                  <a href="/about#partners" className="mobile-submenu-item" onClick={() => setIsMobileMenuOpen(false)}>Partners</a>
                  <a href="/about#team" className="mobile-submenu-item" onClick={() => setIsMobileMenuOpen(false)}>Our Team</a>
                </div>
              )}
            </div>
            <Link to="/programs" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Programs</Link>
            <Link to="/contact" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
            <div className="mobile-dropdown">
              <button className="mobile-menu-item dropdown-toggle" onClick={() => setMobileThemeOpen(!mobileThemeOpen)}>
                Theme
                <svg className={`dropdown-arrow ${mobileThemeOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              {mobileThemeOpen && (
                <div className="mobile-submenu">
                  <button className="mobile-submenu-item" onClick={() => { setTheme('light'); setIsMobileMenuOpen(false); }}>Light</button>
                  <button className="mobile-submenu-item" onClick={() => { setTheme('dark'); setIsMobileMenuOpen(false); }}>Dark</button>
                </div>
              )}
            </div>
            <Link to="/donate" className="mobile-menu-item" onClick={() => setIsMobileMenuOpen(false)}>Donate</Link>
          </div>
        )}

        {showSearch && (
          <div className="search-overlay" onClick={() => setShowSearch(false)}>
            <div className="search-modal" onClick={(e) => e.stopPropagation()}>
              <div className="search-header">
                <h3>Search NOC</h3>
                <button className="search-close" onClick={() => setShowSearch(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"/>
                    <line x1="6" y1="6" x2="18" y2="18"/>
                  </svg>
                </button>
              </div>
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search for programs, news, stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                  autoFocus
                />
                <button type="submit" className="search-submit">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;