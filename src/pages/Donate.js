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
      {/* Intro Section */}
      <section className="donate-intro-section" style={{backgroundImage: `url(/images/donate-hero-new.jpeg)`}}>
        <div className="donate-intro-overlay"></div>
        <div className="container">
          <div className="donate-intro-text">
            <span className="donate-intro-eyebrow">Make a Difference Today</span>
            <h1>Your Gift Changes a Child's Story</h1>
            <p>Your donation directly impacts the lives of vulnerable children in South Sudan, providing them with education, healthcare, shelter, and hope for a brighter future.</p>
            <div className="donate-intro-actions">
              <a href="https://app.aplos.com/aws/give/NileOrphanCare" target="_blank" rel="noopener noreferrer" className="donate-now-btn">
                Donate Securely Now
              </a>
              <a href="#donation-hub" className="donate-intro-scroll">See Your Impact &darr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Hub Section */}
      <section id="donation-hub" className="donation-hub-section">
        <div className="container">
          <div className="donation-hub-card">
            <div className="donation-hub-block">
              <h2 className="section-title">Your Impact</h2>
              <div className="impact-grid">
                <div className="impact-card">
                  <h3>$25</h3>
                  <p>Provides school supplies and books for one child for a month</p>
                </div>
                <div className="impact-card">
                  <h3>$50</h3>
                  <p>Covers nutritious meals for one child for two weeks</p>
                </div>
                <div className="impact-card">
                  <h3>$100</h3>
                  <p>Provides healthcare and medical support for one child for a month</p>
                </div>
                <div className="impact-card">
                  <h3>$250</h3>
                  <p>Supports safe housing and accommodation for one child for a month</p>
                </div>
              </div>
            </div>

            <div className="donation-hub-divider"></div>

            <div className="donation-hub-block donation-hub-cta">
              <h2>Ready to Make an Impact?</h2>
              <p>Join thousands of supporters who are transforming lives. Your secure donation helps provide immediate care and long-term opportunities for children in need.</p>
              <a href="https://app.aplos.com/aws/give/NileOrphanCare" target="_blank" rel="noopener noreferrer" className="donate-now-btn">
                Donate Securely Now
              </a>
            </div>

            <div className="donation-hub-divider"></div>

            <div className="donation-hub-block">
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
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="donation-stats">
        <div className="container">
          <h2 className="section-title">Your Donations at Work</h2>
          <p className="donation-stats-intro">See the <Link to="/our-impact">full picture of our impact across South Sudan</Link>.</p>
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