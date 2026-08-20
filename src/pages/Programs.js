import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';

const Programs = () => {
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
    <div className="programs-page">
      <SEO
        title="Our Programs | Education & Child Protection"
        description="Explore Nile Orphan Care's programs for children in South Sudan, including education, healthcare, nutrition, vocational training, and family-style child protection."
        path="/programs"
      />
      {/* Hero Section */}
      <section className="programs-hero">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Our Programs & Initiatives" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Comprehensive support that nurtures every child's growth." startDelay={0.55} />
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
              <p>From the moment a child enters our care, they become part of a family that extends far beyond our walls, a community committed to their growth, development, and future success. <Link to="/donate">See how your support funds these programs</Link>.</p>
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
            {/* Education */}
            <div className="program-card featured">
              <div className="program-photo program-photo-gallery">
                <img src="/images/Education.jpeg" alt="Children from many South Sudanese tribes learning together at the Inter-Ethnic Academy" loading="lazy" />
                <img src="https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students of the Inter-Ethnic Academy raising their hands in class" loading="lazy" />
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Inter-Ethnic Academy</h3>
                    <span className="program-tag education">Primary & Secondary Education</span>
                  </div>
                </div>
                <p className="program-description">Addressing South Sudan's tribal divisions through education. With 63 of the 64 tribes represented in our student body, we demonstrate that unity is possible through shared learning and the Gospel's unifying power.</p>
                <div className="program-details">
                  <div className="detail-section">
                    <h4>Unity Through Education</h4>
                    <p>South Sudan's 64 unique tribes are both a source of beauty and division. Our academy was specifically named to address tribal conflicts by showing that education and faith can unite what politics divides. Children who might otherwise never sit in the same room grow up sharing classrooms, meals, and friendships instead.</p>
                    <p>Every lesson is taught alongside our SLOSS peace curriculum, so reconciliation isn't a one-off workshop, it's woven into how children learn, argue, and make up every single day.</p>
                  </div>
                  <div className="program-impacts">
                    <h4>Key Features</h4>
                    <ul>
                      <li><strong>Inter-tribal unity:</strong> 63 of 64 tribes learning together, breaking down barriers</li>
                      <li><strong>Quality education:</strong> Free, comprehensive primary and secondary education for all children in our care</li>
                      <li><strong>Peace curriculum:</strong> Integrated peace education promoting reconciliation and understanding</li>
                      <li><strong>Long-term pathway:</strong> Feeds directly into our vocational training and scholarship opportunities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Agriculture */}
            <div className="program-card featured">
              <div className="program-photo program-photo-gallery">
                <img src="https://images.unsplash.com/photo-1602516818688-715dfc1b77d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cultivated farmland representing the Daalbaai Agriculture program's fields" loading="lazy" />
                <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="A farmer tending crops in a field, representing the Daalbaai Agriculture program" loading="lazy" />
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Daalbaai Agriculture</h3>
                    <span className="program-tag agriculture">Sustainable Farming</span>
                  </div>
                </div>
                <p className="program-description">"Happiness is a result of availability of food" - This program promotes indigenous food production, utilizing South Sudan's fertile land and abundant rainfall to reduce dependency on international aid.</p>
                <div className="program-details">
                  <div className="detail-section">
                    <h4>Food Independence Vision</h4>
                    <p>The fertility of our land, combined with plenty of rain, convinces us that South Sudan can become one of the world's breadbasket countries - "a land flowing with milk and honey."</p>
                    <p>Daalbaai works hand in hand with Love the Hungry: what's grown here goes straight into the daily meals that feed the children in our care, turning cultivated fields into food on the table.</p>
                  </div>
                  <div className="program-impacts">
                    <h4>Mission Goals</h4>
                    <ul>
                      <li><strong>Indigenous production:</strong> Developing local agricultural capacity and knowledge</li>
                      <li><strong>Aid independence:</strong> Reducing reliance on international humanitarian assistance</li>
                      <li><strong>Land utilization:</strong> Maximizing South Sudan's natural agricultural advantages</li>
                      <li><strong>Skills transfer:</strong> Teaching children and staff sustainable farming techniques they can carry forward</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutrition Program */}
            <div className="program-card">
              <div className="program-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Love the Hungry (LTH)</h3>
                    <span className="program-tag nutrition">Nutrition Program</span>
                  </div>
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
            </div>

            {/* Medical Care */}
            <div className="program-card">
              <div className="program-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Partners for Compassionate Care (PCC)</h3>
                    <span className="program-tag medical">Medical Care & Health Education</span>
                  </div>
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
            </div>

            {/* Discipleship */}
            <div className="program-card">
              <div className="program-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Discipleship Global (DG)</h3>
                    <span className="program-tag spiritual">Discipleship & Biblical Training</span>
                  </div>
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
            </div>

            {/* Vocational Training */}
            <div className="program-card">
              <div className="program-photo">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-4 4-3-3-6 6"/></svg>
              </div>
              <div className="program-body">
                <div className="program-header">
                  <div>
                    <h3>Technical & Vocational Training</h3>
                    <span className="program-tag vocational">Skills Development</span>
                  </div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Program Spotlight Section */}
      <section className="spotlight-section">
        <div className="container">
          <div className="programs-intro">
            <span className="problem-eyebrow">Program Spotlight</span>
            <h2 className="section-title">Two Programs, One Vision for South Sudan</h2>
            <p className="programs-subtitle">A closer look at the Inter-Ethnic Academy and Daalbaai Agriculture, the programs at the heart of how we're building unity and independence for the next generation.</p>
          </div>

          <div className="spotlight-block">
            <div className="spotlight-image">
              <img src="https://images.unsplash.com/flagged/photo-1579133311477-9121405c78dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students of the Inter-Ethnic Academy raising their hands in class" loading="lazy" />
            </div>
            <div className="spotlight-text">
              <h3>Inter-Ethnic Academy: Where 63 Tribes Learn as One</h3>
              <p>South Sudan's 64 tribes carry a beauty and a history that conflict has too often turned into division. The Inter-Ethnic Academy was named on purpose, to put that division in a single classroom and answer it with shared desks, shared meals, and a shared future.</p>
              <p>Today, 63 of those 64 tribes sit side by side in our classrooms. Children who grew up hearing that another tribe was the enemy instead grow up knowing them as classmates, and it changes how the next generation sees each other.</p>
              <p>Education here isn't separate from peacebuilding, it is peacebuilding. Every grade integrates our SLOSS peace curriculum, so reconciliation is practiced daily, not taught as a once-off lesson, and it's offered free to every child in our care so tuition is never the reason a child is left out of the unity we're building.</p>
              <div className="spotlight-stats">
                <span className="spotlight-stat">63 of 64 South Sudanese tribes represented</span>
                <span className="spotlight-stat">Free primary & secondary education</span>
                <span className="spotlight-stat">Peace curriculum in every grade</span>
              </div>
            </div>
          </div>

          <div className="spotlight-block reverse">
            <div className="spotlight-image">
              <img src="https://images.unsplash.com/photo-1741874299706-2b8e16839aaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="A farmer tending crops in a field, representing the Daalbaai Agriculture program" loading="lazy" />
            </div>
            <div className="spotlight-text">
              <h3>Daalbaai Agriculture: Growing Food Independence</h3>
              <p>"Happiness is a result of availability of food." It's a simple line, but it's the whole reason Daalbaai exists. South Sudan's soil is fertile and its rains are generous, we believe that's not a coincidence, it's an invitation to become a breadbasket rather than a country that depends on aid to eat.</p>
              <p>Daalbaai puts that belief into practice. Every field cultivated here feeds directly into the meals served through our Love the Hungry program, so the harvest isn't abstract, it shows up on a plate for a child that same season.</p>
              <p>Just as important, the program teaches children and staff the agricultural knowledge to keep that cycle going long after any single harvest, sustainable techniques, local seed varieties, and land stewardship that can be carried into their own communities and futures.</p>
              <div className="spotlight-stats">
                <span className="spotlight-stat">Feeds directly into 620 daily meals</span>
                <span className="spotlight-stat">Reducing reliance on international aid</span>
                <span className="spotlight-stat">Sustainable farming skills passed on</span>
              </div>
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

      <DonorCTA
        heading="South Sudan's future is growing up right now."
        subheading="Will you help shape it?"
        body="Every child we educate, nourish, protect, and empower has the potential to become a teacher, entrepreneur, healthcare professional, leader, or changemaker in their community. Supporting a child today is an investment in South Sudan's tomorrow."
        primaryLabel="Invest in Their Future"
        secondaryLabel="Explore Partnership Opportunities"
        secondaryTo="/contact"
      />
    </div>
  );
};

export default Programs;