import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';
import { childStories } from '../data/childStories';

const OurImpact = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [storyModal, setStoryModal] = useState(null);
  const teamVideoId = '5YXdlMN81hk';

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
  }, []);

  useEffect(() => {
    if (!storyModal) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      const root = document.documentElement;
      const prevBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = 'auto';
      window.scrollTo(0, scrollY);
      requestAnimationFrame(() => {
        root.style.scrollBehavior = prevBehavior;
      });
    };
  }, [storyModal]);

  return (
    <div className="our-impact-page">
      <SEO
        title="Our Story & Impact | Nile Orphan Care"
        description="Read the story behind Nile Orphan Care and see the measurable impact we're making for orphaned and vulnerable children in South Sudan."
        path="/our-impact"
      />
      {/* Hero Section */}
      <section className="contact-hero impact-hero">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Our Story & Impact" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Where we came from, and the difference we're making." startDelay={0.5} />
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="problem-section our-story-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Our Story</span>
            <h2 className="section-title">Born out of a personal loss, built on faith and hope.</h2>
          </div>

          <div className="story-media-body">
            <div className="story-video-float">
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
                  style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0.15)), url(https://img.youtube.com/vi/${teamVideoId}/maxresdefault.jpg)`}}
                  onClick={() => setIsVideoPlaying(true)}
                  aria-label="Play video"
                >
                  <span className="video-play-btn">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                  </span>
                </button>
              )}
            </div>
            <p>Rev. John Deng Ater, our founder, was orphaned by South Sudan's civil war as a child, and it was that loss which first taught him what it meant for a child to have no one left to call family. In 2011, he returned to then-autonomous Southern Sudan on a mission trip and was moved by the stories of orphaned, street, and abandoned children he met along the way. Those encounters were impossible to walk away from, and that same year, he initiated the Orphans' Scholarship Program to provide education and care for South Sudanese children living in refugee camps in Kenya and Uganda. In 2013, that program was extended into South Sudan itself, and Nile Orphan Care was formally established to bring the mission home.</p>
            <p>From its first headquarters in Yei, Central Equatorial State, the organization was forced to evacuate to Juba following the 2016 political crisis, when insecurity cut the city off from humanitarian aid and left the organization with no choice but to relocate the children and their caretakers to safety. Juba remains home for the children in our care today, and it is where the mission has grown roots deep enough to hold a family together through hardship.</p>
            <p>What began as one man's response to loss has grown into a community of caregivers, educators, medical staff, and partners walking alongside vulnerable children every day, a family that now spans classrooms, an on-site clinic, farmland, and the homes where these children finally get to just be children. Every program we run today, from education to nutrition to healthcare, traces back to that same conviction John carried in 2011: that no child should have to face the world alone.</p>
          </div>
        </div>
      </section>

      {/* Children's Stories Section */}
      <section id="stories" className="whatwedo-section stories-of-hope-section fade-in">
        <div className="container">
          <div className="problem-header">
            <h2 className="section-title">Stories of Hope</h2>
            <h3 className="stories-of-hope-subtitle">Transforming Lives Through Resilience and Hope</h3>
            <p className="problem-intro">Each child who enters our care carries a story of courage and potential. While their journeys begin with challenges, some arriving with nothing but hope, others carrying dreams that transcend their circumstances, they all share one powerful truth: transformation is possible when compassion meets opportunity.</p>
            <p className="problem-intro">Meet a few of the children who've found refuge, safety, and a fresh start with Nile Orphan Care. Each one arrived carrying a different story of loss, and each one is now writing a new chapter, one school day, one meal, and one caring adult at a time.</p>
          </div>
          <div className="success-story-grid">
            {childStories.map((child) => (
              <div
                className="success-story-card child-story-card"
                key={child.name}
                onClick={() => setStoryModal(child)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') setStoryModal(child); }}
              >
                {child.image ? (
                  <img className="success-story-photo" src={child.image} alt={child.name} loading="lazy" />
                ) : (
                  <div className="success-story-photo child-story-placeholder" aria-hidden="true">
                    <span>{child.name.charAt(0)}</span>
                  </div>
                )}
                <div className="child-story-body">
                  <div className="success-story-author">
                    <strong>{child.name}</strong>
                    <span>{child.subtitle}</span>
                  </div>
                  <p className="child-story-text">{child.excerpt}</p>
                  <span className="child-story-toggle">Read {child.name.split(' ')[0]}'s story &rarr;</span>
                </div>
              </div>
            ))}
            <div className="success-story-card child-story-closing">
              <p>Every child here has a story that's still being written.</p>
              <Link to="/get-involved">See how you can be part of the next chapter &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section id="impact-stats" className="impact-band-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Our Impact</span>
            <h2 className="section-title">What that mission looks like today.</h2>
            <p className="problem-intro">Real, measurable outcomes for the children we serve.</p>
          </div>
          <div className="impact-band-grid">
            {[
              { number: '620', label: 'Children fed daily through our nutrition programs.' },
              { number: '24/7', label: 'Medical coverage available to children in our care.' },
              { number: '64', label: 'Tribes united across our programs and communities.' },
              { number: '100%', label: 'Clean water access for every child we support.' },
            ].map((stat) => (
              <div className="impact-band-item" key={stat.label}>
                <span className="impact-band-number">{stat.number}</span>
                <p className="impact-band-label">{stat.label}</p>
              </div>
            ))}
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

      {storyModal && createPortal(
        <div className="child-modal-backdrop" onClick={() => setStoryModal(null)}>
          <div className="child-modal" onClick={(e) => e.stopPropagation()}>
            <button className="child-modal-close" onClick={() => setStoryModal(null)} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
            <div className="child-modal-inner">
              <div className="child-modal-left">
                {storyModal.image ? (
                  <img className="child-modal-photo" src={storyModal.image} alt={storyModal.name} />
                ) : (
                  <div className="child-modal-photo child-modal-photo-placeholder" aria-hidden="true">
                    <span>{storyModal.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="child-modal-details">
                <span className="child-modal-eyebrow">Story of Hope</span>
                <h2 className="child-modal-name">{storyModal.name}</h2>
                <span className="child-modal-subtitle">{storyModal.subtitle}</span>
                <div className="child-modal-bio">
                  {storyModal.paragraphs.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
};

export default OurImpact;
