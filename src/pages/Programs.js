import React, { useState, useEffect } from 'react';

const Programs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="programs-page">
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Our Programs & Initiatives</h1>
            <p>Like children of parents, these programs are offspring that further develop the vision of Nile Orphan Care. Each child in our care receives these expressions of love through comprehensive support systems that nurture every aspect of their development.</p>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="overview-content-centered">
            <div className="overview-text-centered">
              <h2>Transforming Lives Through Holistic Care</h2>
              <p>At Nile Orphan Care, we believe that every child deserves not just shelter and food, but a comprehensive foundation for success. Our programs work together as an integrated ecosystem, addressing physical, emotional, educational, and spiritual needs.</p>
              <p>From the moment a child enters our care, they become part of a family that extends far beyond our walls—a community committed to their growth, development, and future success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Programs Section */}
      <section className="programs-content">
        <div className="container">
          <div className="programs-intro">
            <h2 className="section-title">Core Programs</h2>
            <p className="programs-subtitle">Six foundational programs that create a comprehensive support system for every child</p>
          </div>

          <div className="programs-grid">
            {/* Nutrition Program */}
            <div className="program-card featured">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8 8 3.6 8 8z"/>
                  <path d="M12 8v8"/>
                  <path d="M8 12h8"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Love the Hungry (LTH)</h3>
                <span className="program-tag nutrition">Nutrition Program</span>
              </div>
              <p className="program-description">Since 2013, Love the Hungry has been the cornerstone of our nutritional support, providing fortified meals that transform lives. The wellbeing, health, and growth of a child is determined primarily by the quality of food they eat.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Our Approach</h4>
                  <p>We deliver age-appropriate, fortified meals that prevent and treat malnutrition while building sustainable local food systems. Our partnership model ensures scalability and long-term impact.</p>
                </div>
                <div className="program-impacts">
                  <h4>Key Impacts</h4>
                  <ul>
                    <li><strong>Nutritious meal provision:</strong> Delivering fortified, age-appropriate meals that prevent and treat malnutrition</li>
                    <li><strong>Program scalability:</strong> Working with local and international partners to expand feeding reach and mobilize resources</li>
                    <li><strong>Sustainability:</strong> Developing local distribution systems, training caregivers, and creating reliable supply chains</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Medical Care */}
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Partners for Compassionate Care (PCC)</h3>
                <span className="program-tag medical">Medical Care & Health Education</span>
              </div>
              <p className="program-description">Over the past 24 months, PCC has established and operates our on-site clinic, ensuring immediate healthcare access with a full-time nurse providing 24/7 coverage, five days a week.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Comprehensive Healthcare</h4>
                  <p>Our on-site clinic provides primary medical services, ensuring children receive timely assessment and treatment instead of relying on distant or intermittent care.</p>
                </div>
                <div className="program-impacts">
                  <h4>Key Impacts</h4>
                  <ul>
                    <li><strong>Primary healthcare access:</strong> On-site medical services with 24/7 nursing coverage</li>
                    <li><strong>Integrated care:</strong> Merging healthcare delivery with educational and spiritual training</li>
                    <li><strong>Local sustainability:</strong> Building programs designed for ongoing local impact and community health</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Discipleship */}
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Discipleship Global (DG)</h3>
                <span className="program-tag spiritual">Discipleship & Biblical Training</span>
              </div>
              <p className="program-description">Training children to be disciples who make disciples using the Paul and Timothy biblical method, fostering deeper, lived relationships with Jesus Christ through relational mentoring.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Multiplication Model</h4>
                  <p>Using Paul and Timothy style relational mentoring, we pair experienced disciple-makers with children and emerging leaders, creating a sustainable multiplication effect.</p>
                </div>
                <div className="program-impacts">
                  <h4>Key Impacts</h4>
                  <ul>
                    <li><strong>Disciple multiplication:</strong> Training followers to intentionally make new disciples who reproduce the same training</li>
                    <li><strong>Leadership development:</strong> Equipping local leaders with biblical and practical shepherding skills</li>
                    <li><strong>Church sustainability:</strong> Supporting indigenous, self-sustaining churches and ministries</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="program-card featured">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Inter-Ethnic Academy</h3>
                <span className="program-tag education">Primary & Secondary Education</span>
              </div>
              <p className="program-description">Addressing South Sudan's tribal divisions through education. With 63 of the 64 tribes represented in our student body, we demonstrate that unity is possible through shared learning and the Gospel's unifying power.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Unity Through Education</h4>
                  <p>South Sudan's 64 unique tribes are both a source of beauty and division. Our academy was specifically named to address tribal conflicts by showing that education and faith can unite what politics divides.</p>
                </div>
                <div className="program-impacts">
                  <h4>Key Features</h4>
                  <ul>
                    <li><strong>Inter-tribal unity:</strong> 63 of 64 tribes learning together, breaking down barriers</li>
                    <li><strong>Quality education:</strong> Free, comprehensive education for all children in our care</li>
                    <li><strong>Peace curriculum:</strong> Integrated peace education promoting reconciliation and understanding</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Vocational Training */}
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Technical & Vocational Training</h3>
                <span className="program-tag vocational">Skills Development</span>
              </div>
              <p className="program-description">Empowering children with practical skills for economic independence. This program bridges the gap between education and employment, providing pathways to sustainable livelihoods.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Skills for Life</h4>
                  <p>Whether children have completed secondary school or not, we provide additional technical skills that open doors to employment opportunities and entrepreneurship.</p>
                </div>
                <div className="program-impacts">
                  <h4>Benefits</h4>
                  <ul>
                    <li><strong>Practical skills:</strong> Hands-on training in marketable trades and technical fields</li>
                    <li><strong>Employment readiness:</strong> Preparing youth for immediate job opportunities</li>
                    <li><strong>Entrepreneurship:</strong> Fostering business creation and economic independence</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Agriculture */}
            <div className="program-card">
              <div className="program-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2a3 3 0 0 0-3 3c0 1.5 1.5 3 3 3s3-1.5 3-3a3 3 0 0 0-3-3z"/>
                  <path d="M19 13v-2a7 7 0 0 0-14 0v2"/>
                  <path d="M12 22s8-4 8-10V6l-8-2-8 2v6c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <div className="program-header">
                <h3>Daalbaai Agriculture</h3>
                <span className="program-tag agriculture">Sustainable Farming</span>
              </div>
              <p className="program-description">"Happiness is a result of availability of food" - This program promotes indigenous food production, utilizing South Sudan's fertile land and abundant rainfall to reduce dependency on international aid.</p>
              <div className="program-details">
                <div className="detail-section">
                  <h4>Food Independence Vision</h4>
                  <p>The fertility of our land, combined with plenty of rain, convinces us that South Sudan can become one of the world's breadbasket countries - "a land flowing with milk and honey."</p>
                </div>
                <div className="program-impacts">
                  <h4>Mission Goals</h4>
                  <ul>
                    <li><strong>Indigenous production:</strong> Developing local agricultural capacity and knowledge</li>
                    <li><strong>Aid independence:</strong> Reducing reliance on international humanitarian assistance</li>
                    <li><strong>Land utilization:</strong> Maximizing South Sudan's natural agricultural advantages</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="impact-stats">
        <div className="container">
          <h2 className="section-title">Our Impact in Numbers</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">620</div>
              <div className="stat-label">Children Fed Daily</div>
              <div className="stat-description">Nutritious meals provided through Love the Hungry partnership</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Medical Coverage</div>
              <div className="stat-description">On-site clinic with full-time nursing care</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">63</div>
              <div className="stat-label">Tribes United</div>
              <div className="stat-description">Of 64 South Sudanese tribes represented in our academy</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">100%</div>
              <div className="stat-label">Clean Water Access</div>
              <div className="stat-description">Solar-powered water system serving our entire community</div>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="initiatives-section">
        <div className="container">
          <div className="initiatives-intro">
            <h2 className="section-title">Strategic Initiatives</h2>
            <p className="initiatives-subtitle">Targeted programs addressing critical community needs and building sustainable solutions</p>
          </div>

          <div className="initiatives-grid">
            <div className="initiative-card">
              <h3>Clean Water & WASH</h3>
              <p>Clean water is only second to the Living Water! Our solar water system provides safe, clean water for drinking and agriculture, while Water Step equipment enables water treatment and sanitation.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">Deep Water Well Complete</span>
              </div>
              <div className="initiative-details">
                <strong>Impact:</strong> Waterborne diseases like cholera and diarrhea are leading causes of child mortality in South Sudan. Our clean water system is saving lives daily.
              </div>
            </div>

            <div className="initiative-card">
              <h3>Food Security</h3>
              <p>Through Love the Hungry partnership and Daalbaai agriculture, we're building comprehensive food security that feeds 620 children daily while developing local agricultural capacity.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">620 Daily Meals</span>
              </div>
              <div className="initiative-details">
                <strong>Vision:</strong> Transforming South Sudan into a regional breadbasket through indigenous food production and reduced aid dependency.
              </div>
            </div>

            <div className="initiative-card">
              <h3>Safe Shelter</h3>
              <p>Providing secure housing, learning spaces, and sleeping quarters. After storm damage in April 2024, we're rebuilding stronger with concrete structures and improved designs.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">Rebuilding Stronger</span>
              </div>
              <div className="initiative-details">
                <strong>Resilience:</strong> "The storms may come, but we know who holds us in the eye of the storm. We will continue to build our house on The Rock."
              </div>
            </div>

            <div className="initiative-card">
              <h3>Peace Education (SLOSS)</h3>
              <p>"Shed Light on South Sudan" integrates peace education into upper-class curriculum, conducting workshops on unity and reconciliation to heal tribal divisions.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">Unity in Diversity</span>
              </div>
              <div className="initiative-details">
                <strong>Goal:</strong> Promoting peace within South Sudan by teaching children that tribal diversity is strength, not division.
              </div>
            </div>

            <div className="initiative-card">
              <h3>Mission Outreach</h3>
              <p>"Children of the Beautiful Savior" - our children share God's love in the community while maintaining our non-discrimination policy across beliefs, gender, and tribes.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">Community Impact</span>
              </div>
              <div className="initiative-details">
                <strong>Approach:</strong> Demonstrating Christ's love through action while respecting the dignity and beliefs of every child.
              </div>
            </div>

            <div className="initiative-card">
              <h3>Health Education</h3>
              <p>Comprehensive training on HIV/AIDS awareness, dental care, disease prevention, and general health education for children, workers, and vulnerable families.</p>
              <div className="initiative-achievement">
                <span className="achievement-badge">Preventive Care</span>
              </div>
              <div className="initiative-details">
                <strong>Partnership:</strong> Working with SOS and other institutions to provide medicines and health education across South Sudan.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;