import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import AnimatedHeroText from '../components/AnimatedHeroText';

const GetInvolved = () => {
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
    <div className="get-involved-page">
      <SEO
        title="Get Involved | Nile Orphan Care"
        description="Discover the many ways to support Nile Orphan Care — donate, volunteer, partner with us, spread awareness, give monthly, or leave a legacy gift."
        path="/get-involved"
      />
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Get Involved" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Choose your way to change a child's story." startDelay={0.5} />
          </div>
        </div>
      </section>

      <section id="help-section" className="help-section">
        <div className="container">
          <div className="help-header">
            <h2 className="section-title">How You Can Make a Difference</h2>
            <p className="help-subtitle">Your support creates lasting change in the lives of vulnerable children. Choose the way that works best for you to join our mission of hope and transformation.</p>
          </div>

          <div className="help-grid">
            <div className="help-option featured">
              <div className="help-content">
                <h3>Donate</h3>
                <div className="help-amount">Any amount helps</div>
                <p>Make an immediate impact with your generous gift. Your donation provides emergency care, educational materials, medical treatment, facility improvements, or supports our general operations. Every dollar goes directly toward changing lives.</p>
                <ul className="help-benefits">
                  <li>Immediate impact on urgent needs</li>
                  <li>100% goes to programs</li>
                  <li>Flexible giving options</li>
                  <li>Memorial and honor gifts available</li>
                </ul>
                <button
                  className="help-cta primary"
                  onClick={() => window.open('https://app.aplos.com/aws/give/NileOrphanCare', '_blank')}
                >
                  Donate Now
                </button>
              </div>
            </div>

            <div className="help-option">
              <div className="help-content">
                <h3>Volunteer Opportunities</h3>
                <div className="help-amount">Share your talents</div>
                <p>Join our dedicated team of volunteers and make a hands-on difference. Whether you're a teacher, healthcare professional, tradesperson, or simply someone with a caring heart, we have meaningful ways for you to contribute your time and skills.</p>
                <ul className="help-benefits">
                  <li>Teaching and tutoring programs</li>
                  <li>Healthcare and counseling support</li>
                  <li>Administrative and fundraising help</li>
                  <li>Skills-based volunteering opportunities</li>
                </ul>
              </div>
            </div>

            <div className="help-option">
              <div className="help-content">
                <h3>Partner With Us</h3>
                <div className="help-amount">Corporate partnerships</div>
                <p>Create meaningful partnerships that align with your organization's values. From employee engagement initiatives to facility sponsorships, we'll work together to develop impactful programs that make a real difference.</p>
                <ul className="help-benefits">
                  <li>Employee volunteer programs</li>
                  <li>Matching gift opportunities</li>
                  <li>Corporate social responsibility</li>
                  <li>Custom partnership packages</li>
                </ul>
              </div>
            </div>

            <div className="help-option">
              <div className="help-content">
                <h3>Spread Awareness</h3>
                <div className="help-amount">Amplify our mission</div>
                <p>Help us reach more people by sharing our story. Follow us on social media, share our posts, tell friends and family about our work, or invite us to speak at your organization. Your voice can help us find more supporters and advocates.</p>
                <ul className="help-benefits">
                  <li>Social media advocacy</li>
                  <li>Speaking engagement opportunities</li>
                  <li>Ambassador program participation</li>
                  <li>Community outreach support</li>
                </ul>
              </div>
            </div>

            <div className="help-option">
              <div className="help-content">
                <h3>Monthly Giving</h3>
                <div className="help-amount">Sustained impact</div>
                <p>Join our monthly giving program for consistent, ongoing support. Monthly donors provide the stable funding we need to plan long-term programs and respond quickly to urgent needs as they arise.</p>
                <ul className="help-benefits">
                  <li>Predictable program funding</li>
                  <li>Lower processing costs</li>
                  <li>Exclusive donor updates</li>
                  <li>Easy to manage and modify</li>
                </ul>
              </div>
            </div>

            <div className="help-option">
              <div className="help-content">
                <h3>Legacy Giving</h3>
                <div className="help-amount">Leave a lasting impact</div>
                <p>Create a lasting legacy through planned giving. Whether through wills, trusts, or other estate planning vehicles, your legacy gift ensures our mission continues for generations to come.</p>
                <ul className="help-benefits">
                  <li>Estate planning options</li>
                  <li>Tax benefits available</li>
                  <li>Professional guidance provided</li>
                  <li>Lasting impact on children's lives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
