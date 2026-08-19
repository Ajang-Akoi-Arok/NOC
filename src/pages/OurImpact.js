import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';

const OurImpact = () => {
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const teamVideoId = '5YXdlMN81hk';

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.fade-in');
    animateElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [loading]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="our-impact-page">
      <SEO
        title="Our Story & Impact | Nile Orphan Care"
        description="Read the story behind Nile Orphan Care and see the measurable impact we're making for orphaned and vulnerable children in South Sudan."
        path="/our-impact"
      />
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1>Our Story & Impact</h1>
            <p>Where Nile Orphan Care came from, and the difference it's making for children in South Sudan today.</p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="problem-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Our Story</span>
            <h2 className="section-title">Born out of a personal loss, built on faith and hope.</h2>
            <p className="problem-intro">Rev. John Deng Ater, our founder, was orphaned by South Sudan's civil war as a child. In 2011, he returned on a mission trip and was moved by the stories of orphaned, street, and abandoned children he met. That encounter became the Orphans' Scholarship Program, and in 2013, Nile Orphan Care was established to bring that mission home to South Sudan.</p>
          </div>
          <div className="problem-stat-card">
            <p>
              From its first headquarters in Yei, the organization was forced to evacuate to Juba following the 2016 political crisis, and Juba remains home for the children in our care today. What began as one man's response to loss has grown into a community of caregivers, educators, and partners walking alongside vulnerable children every day.
            </p>
          </div>

          <div className="video-placeholder our-story-video">
            {isVideoPlaying ? (
              <iframe
                className="video-frame"
                src={`https://www.youtube.com/embed/${teamVideoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3`}
                title="Nile Orphan Care founder's story"
                frameBorder="0"
                allow="accelerate-compute; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <button
                type="button"
                className="video-thumb"
                style={{backgroundImage: `linear-gradient(rgba(13,59,102,0.35), rgba(13,59,102,0.55)), url(https://img.youtube.com/vi/${teamVideoId}/maxresdefault.jpg)`}}
                onClick={() => setIsVideoPlaying(true)}
                aria-label="Play video"
              >
                <span className="video-play-btn">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="whatwedo-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Success Stories</span>
            <h2 className="section-title">Lives changed, futures built.</h2>
            <p className="problem-intro">A few of the children we've walked alongside, now thriving as adults.</p>
          </div>
          <div className="success-story-grid">
            <div className="success-story-card">
              <img className="success-story-photo" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Sarah M." loading="lazy" />
              <blockquote className="success-story-quote">"Nile Orphan Care didn't just give me shelter, they gave me a family, an education, and most importantly, they believed in me. Today, I'm a registered nurse helping others, just like they helped me."</blockquote>
              <div className="success-story-author">
                <strong>Sarah M.</strong>
                <span>Registered Nurse, Class of 2019</span>
              </div>
            </div>
            <div className="success-story-card">
              <img className="success-story-photo" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Michael K." loading="lazy" />
              <blockquote className="success-story-quote">"When I arrived at NOC, I was 8 years old and had lost everything. The staff became my family, and education became my hope. Now I'm an engineer, building bridges for my community."</blockquote>
              <div className="success-story-author">
                <strong>Michael K.</strong>
                <span>Civil Engineer, Class of 2017</span>
              </div>
            </div>
            <div className="success-story-card">
              <img className="success-story-photo" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Grace A." loading="lazy" />
              <blockquote className="success-story-quote">"The life skills program at NOC taught me more than just academics. I learned leadership and how to dream big. Today, I run my own business and employ 12 people from my community."</blockquote>
              <div className="success-story-author">
                <strong>Grace A.</strong>
                <span>Entrepreneur, Class of 2018</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="impact-stats" className="impact-glance-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Our Impact</span>
            <h2 className="section-title">What that mission looks like today.</h2>
            <p className="problem-intro">Real, measurable outcomes for the children we serve.</p>
          </div>
          <div className="impact-glance-list">
            <div className="impact-glance-item">
              <span className="impact-glance-number">620</span>
              <p className="impact-glance-label">Children fed daily through our nutrition programs.</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">24/7</span>
              <p className="impact-glance-label">Medical coverage available to children in our care.</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">63</span>
              <p className="impact-glance-label">Tribes united across our programs and communities.</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">100%</span>
              <p className="impact-glance-label">Clean water access for every child we support.</p>
            </div>
          </div>
        </div>
      </section>

      <DonorCTA
        heading="Their story could be the next chapter of hope."
        subheading="You can help write it."
        body="Every number above began as one child in need. Your gift keeps this story going, providing food, shelter, education, and care for the next child who walks through our door."
        primaryLabel="Donate Today"
        secondaryLabel="Meet Our Team"
        secondaryTo="/about"
      />
    </div>
  );
};

export default OurImpact;
