import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Donate = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="donate-page">
      <SEO
        title="Donate | Support Children in South Sudan"
        description="Donate to Nile Orphan Care and directly support orphaned and vulnerable children in South Sudan with education, healthcare, nutrition, and shelter."
        path="/donate"
      />
      {/* Hero Section */}
      <section className="donate-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Make a Difference Today</h1>
            <p>Your donation directly impacts the lives of vulnerable children in South Sudan, providing them with education, healthcare, shelter, and hope for a brighter future.</p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Your Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>$25</h3>
              <p>Provides school supplies and books for one child for a month</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7z"/>
                </svg>
              </div>
              <h3>$50</h3>
              <p>Covers nutritious meals for one child for two weeks</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 12l2 2 4-4"/>
                  <path d="M21 12c-1 0-3-1-3-3s2-3 3-3 3 1 3 3-2 3-3 3"/>
                  <path d="M3 12c1 0 3-1 3-3s-2-3-3-3-3 1-3 3 2 3 3 3"/>
                  <path d="M12 3c0 1-1 3-3 3s-3-2-3-3 1-3 3-3 3 2 3 3"/>
                  <path d="M12 21c0-1 1-3 3-3s3 2 3 3-1 3-3 3-3-2-3-3"/>
                </svg>
              </div>
              <h3>$100</h3>
              <p>Provides healthcare and medical support for one child for a month</p>
            </div>
            <div className="impact-card">
              <div className="impact-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9,22 9,12 15,12 15,22"/>
                </svg>
              </div>
              <h3>$250</h3>
              <p>Supports safe housing and accommodation for one child for a month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation CTA Section */}
      <section className="donation-cta-section">
        <div className="container">
          <div className="donation-cta-content">
            <h2>Ready to Make an Impact?</h2>
            <p>Join thousands of supporters who are transforming lives. Your secure donation helps provide immediate care and long-term opportunities for children in need.</p>
            <a href="https://app.aplos.com/aws/give/NileOrphanCare" target="_blank" rel="noopener noreferrer" className="donate-now-btn">
              Donate Securely Now
            </a>
          </div>
        </div>
      </section>

      {/* Ways to Give Section */}
      <section className="ways-to-give-section">
        <div className="container">
          <h2 className="section-title">Other Ways to Give</h2>
          <div className="ways-grid">
            <div className="way-card">
              <h3>Bank Transfer</h3>
              <p>Direct bank transfers for larger donations or international supporters.</p>
            </div>
            <div className="way-card">
              <h3>Check by Mail</h3>
              <p>Send checks to our mailing address for traditional giving.</p>
            </div>
            <div className="way-card">
              <h3>Corporate Matching</h3>
              <p>Many employers match charitable donations - double your impact.</p>
            </div>
            <div className="way-card">
              <h3>Legacy Giving</h3>
              <p>Include NOC in your will or estate planning for lasting impact.</p>
            </div>
          </div>
          <div className="contact-info">
            <p>For more information about alternative giving methods, <Link to="/contact">contact us</Link> or call +211 123 456 789</p>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="donation-stats">
        <div className="container">
          <h2 className="section-title">Your Donations at Work</h2>
          <p className="donation-stats-intro">See the <Link to="/programs#impact-stats">full picture of our impact across South Sudan</Link>.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">92%</div>
              <div className="stat-label">of donations go directly to programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2,500+</div>
              <div className="stat-label">children supported annually</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15</div>
              <div className="stat-label">years of trusted service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">donor satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;