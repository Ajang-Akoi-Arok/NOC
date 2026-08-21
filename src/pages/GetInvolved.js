import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';

const GetInvolved = () => {

  return (
    <div className="get-involved-page">
      <SEO
        title="Get Involved | Nile Orphan Care"
        description="Discover the many ways to support Nile Orphan Care — donate, volunteer, partner with us, spread awareness, give monthly, or leave a legacy gift."
        path="/get-involved"
      />
      {/* Hero Section */}
      <section className="contact-hero get-involved-hero">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Get Involved" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Choose your way to change a child's story." startDelay={0.5} />
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="problem-section get-involved-intro fade-in">
        <div className="container">
          <div className="get-involved-intro-grid">
            <div className="problem-header">
              <span className="problem-eyebrow">How to Help</span>
              <h2 className="section-title">There's a place for you in this story.</h2>
              <p className="problem-intro">Every child in our care is there because someone decided to act, a donor, a volunteer, a partner, a friend who told someone else. Some of what's below takes money, some takes time, and some just takes your voice. All of it matters.</p>
            </div>
            <img className="get-involved-intro-photo" src="/images/child.jpeg" alt="A volunteer holding a child at Nile Orphan Care" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Donate Feature Section */}
      <section className="problem-section donate-feature-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Give</span>
            <h2 className="section-title">Donate</h2>
          </div>
          <div className="story-media-body donate-feature-body">
            <img className="john-image-float donate-feature-photo" src="/images/hero-2.jpeg" alt="Volunteers and board members visiting children at Nile Orphan Care" loading="lazy" />
            <p>A gift to Nile Orphan Care goes straight to work, a fortified meal through Love the Hungry, a nurse's visit at our on-site clinic, a seat in the Inter-Ethnic Academy, or a roof over a child's head after a storm. There's no layer between your donation and the child it reaches.</p>
            <p>Give once or give monthly, whichever fits your life. You can also designate a gift in memory or honor of someone, and we're glad to talk through what your support could fund if you'd like it directed somewhere specific.</p>
            <Link to="/donate" className="donor-cta-btn primary donate-feature-btn">Donate Now</Link>
          </div>
        </div>
      </section>

      {/* Other Ways to Help Section */}
      <section className="initiatives-section other-ways-section fade-in">
        <div className="container">
          <div className="initiatives-intro">
            <h2 className="section-title">More Ways to Help</h2>
            <p className="initiatives-subtitle">Not everyone can give financially right now, and that's alright. Here's what else moves the mission forward.</p>
          </div>

          <div className="initiatives-grid">
            {[
              {
                title: 'Volunteer',
                badge: 'Share your time',
                body: "Teachers, healthcare workers, tradespeople, and anyone with a caring heart can put real skills to use here, whether that's tutoring, counseling support, or lending a hand with admin and fundraising.",
              },
              {
                title: 'Partner With Us',
                badge: 'Corporate & church',
                body: 'Employee giving programs, matching gifts, facility sponsorships, mission trips, we build partnerships around what your organization already does well and cares about.',
              },
              {
                title: 'Spread Awareness',
                badge: 'Amplify our mission',
                body: "Share our story on social media, invite us to speak at your church or organization, or simply tell someone who hasn't heard of us yet. Awareness is how new supporters find their way here.",
              },
              {
                title: 'Monthly Giving',
                badge: 'Sustained impact',
                body: 'Recurring gifts, of any size, are what let us plan more than a month ahead: signing a teacher\'s contract, committing to a clinic partnership, starting a build before every dollar is already in hand.',
              },
              {
                title: 'Legacy Giving',
                badge: 'A lasting gift',
                body: "Through a will, trust, or other estate gift, you can extend your support to the generations of children who'll come through our doors long after today. We're happy to talk through the options with you and your advisor.",
              },
            ].map((way) => (
              <div className="initiative-card" key={way.title}>
                <h3>{way.title}</h3>
                <span className="achievement-badge">{way.badge}</span>
                <p>{way.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonorCTA
        heading="A child is waiting for someone to say yes."
        subheading="It could be you."
        body="However you're able to help, financially, with your time, or just by sharing our story, it becomes part of a child's chance at a different future. Thank you for considering it."
        primaryLabel="Donate Today"
        secondaryLabel="See Our Programs"
        secondaryTo="/programs"
      />
    </div>
  );
};

export default GetInvolved;
