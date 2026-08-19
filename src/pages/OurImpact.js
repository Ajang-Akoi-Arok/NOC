import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';
import { childStories } from '../data/childStories';

const OurImpact = () => {
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandedStory, setExpandedStory] = useState(null);
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
            <AnimatedHeroText as="h1" text="Our Story & Impact" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Where we came from, and the difference we're making." startDelay={0.5} />
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

      {/* Children's Stories Section */}
      <section id="stories" className="whatwedo-section fade-in">
        <div className="container">
          <div className="problem-header">
            <h2 className="section-title">Stories of Hope</h2>
            <h3 className="stories-of-hope-subtitle">Transforming Lives Through Resilience and Hope</h3>
            <p className="problem-intro">Each child who enters our care carries a story of courage and potential. While their journeys begin with challenges, some arriving with nothing but hope, others carrying dreams that transcend their circumstances, they all share one powerful truth: transformation is possible when compassion meets opportunity.</p>
            <p className="problem-intro">Meet a few of the children who've found refuge, safety, and a fresh start with Nile Orphan Care. Each one arrived carrying a different story of loss, and each one is now writing a new chapter, one school day, one meal, and one caring adult at a time.</p>
          </div>
          <div className="success-story-grid">
            {childStories.map((child, index) => {
              const isOpen = expandedStory === index;
              return (
                <div className="success-story-card child-story-card" key={child.name}>
                  {child.image ? (
                    <img className="success-story-photo" src={child.image} alt={child.name} loading="lazy" />
                  ) : (
                    <div className="success-story-photo child-story-placeholder" aria-hidden="true">
                      <span>{child.name.charAt(0)}</span>
                    </div>
                  )}
                  <div className="success-story-author">
                    <strong>{child.name}</strong>
                    <span>{child.subtitle}</span>
                  </div>
                  <p className="child-story-text">
                    {isOpen ? child.paragraphs.map((para, pIndex) => (
                      <span className="child-story-paragraph" key={pIndex}>{para}</span>
                    )) : child.excerpt}
                  </p>
                  <button
                    type="button"
                    className="child-story-toggle"
                    onClick={() => setExpandedStory(isOpen ? null : index)}
                  >
                    {isOpen ? 'Show less' : `Read ${child.name.split(' ')[0]}'s story`}
                  </button>
                </div>
              );
            })}
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

      {/* Annual Reports Section */}
      <section className="report-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Transparency</span>
            <h2 className="section-title">Our Annual Reports</h2>
            <p className="problem-intro">See the full picture of our finances, programs, and impact, transparently laid out for our donors and partners, year by year.</p>
          </div>
          <div className="report-grid">
            <div className="report-card">
              <img src="/images/welcome-to-noc.jpeg" alt="2025 Annual Report cover" loading="lazy" />
              <div className="report-card-body">
                <h3>2025 Annual Report</h3>
                <a href="/documents/annual-report-2025.pdf" target="_blank" rel="noopener noreferrer" className="report-link">View PDF &rarr;</a>
              </div>
            </div>
            <div className="report-card">
              <img src="/images/Education.jpeg" alt="2024 Annual Report cover" loading="lazy" />
              <div className="report-card-body">
                <h3>2024 Annual Report</h3>
                <a href="/documents/annual-report-2024.pdf" target="_blank" rel="noopener noreferrer" className="report-link">View PDF &rarr;</a>
              </div>
            </div>
            <div className="report-card">
              <img src="/images/donate-hero.jpeg" alt="2023 Annual Report cover" loading="lazy" />
              <div className="report-card-body">
                <h3>2023 Annual Report</h3>
                <a href="/documents/annual-report-2023.pdf" target="_blank" rel="noopener noreferrer" className="report-link">View PDF &rarr;</a>
              </div>
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
