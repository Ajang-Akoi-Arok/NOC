import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import AnimatedHeroText from '../components/AnimatedHeroText';

const Donate = () => {

  return (
    <div className="donate-page">
      <SEO
        title="Donate | Support Children in South Sudan"
        description="Donate to Nile Orphan Care and directly support orphaned and vulnerable children in South Sudan with education, healthcare, nutrition, and shelter."
        path="/donate"
      />
      {/* Hero Section */}
      <section className="contact-hero donate-hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Make a Difference Today" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Your gift directly reaches a child who needs it." startDelay={0.5} />
          </div>
        </div>
      </section>

      {/* Donation Hub Section */}
      <section id="donation-hub" className="donation-hub-section">
        <div className="container">
          <div className="donation-hub-card">
            <div className="donation-hub-block donation-hub-cta">
              <span className="problem-eyebrow">Give Today</span>
              <h2>Ready to Make an Impact?</h2>
              <p>Join the supporters who are transforming lives. Your secure donation helps provide immediate care, food, healthcare, and education for children in need across South Sudan.</p>
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
                  <p>Many employers match charitable donations, double your impact.</p>
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
          <h2 className="section-title">Your Donation at Work</h2>
          <p className="donation-stats-intro">See the <Link to="/our-impact">full picture of our impact across South Sudan</Link>.</p>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">620</div>
              <div className="stat-label">children fed daily through our nutrition programs</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">64</div>
              <div className="stat-label">tribes united across our programs and communities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">medical coverage available to children in our care</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2013</div>
              <div className="stat-label">the year Nile Orphan Care was established</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;
