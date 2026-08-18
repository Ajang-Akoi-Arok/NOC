import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);
  const teamVideoId = '5YXdlMN81hk';

  const heroImages = [
    '/images/hero-1.jpeg',
    '/images/hero-2.jpeg'
  ];

  const newsArticles = [
    {
      image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
      alt: 'Classroom at a Nile Orphan Care education center in South Sudan',
      meta: 'Dec 15, 2024 • 5 min read',
      title: 'New Education Center Opens in Khartoum',
      description: "We're excited to announce the opening of our fifth education center, equipped with modern classrooms, a library, and computer lab to serve 200 additional children in the community."
    },
    {
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Vocational training graduates celebrating their achievement',
      meta: 'Dec 10, 2024 • 3 min read',
      title: '45 Students Graduate from Vocational Program',
      description: 'Celebrating another successful graduation as 45 young adults complete their vocational training and prepare to enter the workforce with valuable skills.'
    },
    {
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Mobile health clinic providing medical care to children',
      meta: 'Dec 5, 2024 • 4 min read',
      title: 'Mobile Health Clinic Reaches Remote Areas',
      description: 'Our new mobile health initiative has provided medical care to over 500 children in remote communities during its first month of successful operation.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Community outreach team supporting families in rural South Sudan',
      meta: 'Nov 28, 2024 • 6 min read',
      title: 'Community Outreach Program Expands to Rural Villages',
      description: 'Our community outreach initiative has successfully expanded to reach 15 rural villages, providing essential services and support to families in need across the region.'
    },
    {
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Youth football team participating in a Nile Orphan Care sports program',
      meta: 'Nov 22, 2024 • 3 min read',
      title: 'Youth Sports Program Wins Regional Championship',
      description: 'Our youth football team has achieved remarkable success by winning the regional championship, showcasing the talent and dedication of our young athletes.'
    },
    {
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: "Student supported by Nile Orphan Care's scholarship program",
      meta: 'Nov 18, 2024 • 5 min read',
      title: 'New Scholarship Program Launched for Higher Education',
      description: "We're proud to announce our new scholarship program that will provide full university funding for 25 exceptional students pursuing higher education degrees."
    },
    {
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: "Child participating in Nile Orphan Care's nutrition program",
      meta: 'Nov 12, 2024 • 4 min read',
      title: 'Nutrition Program Improves Child Health Outcomes',
      description: 'Our comprehensive nutrition program has shown significant improvements in child health metrics, with 95% of participants showing better growth and development indicators.'
    },
    {
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Youth learning digital skills through a technology training program',
      meta: 'Nov 8, 2024 • 7 min read',
      title: 'Digital Literacy Program Prepares Youth for Future Careers',
      description: 'Our new digital literacy initiative has equipped over 150 young people with essential computer skills and programming knowledge, opening doors to technology careers.'
    },
    {
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      alt: 'Child engaging in an art therapy activity',
      meta: 'Nov 2, 2024 • 5 min read',
      title: 'Art Therapy Program Helps Children Express Emotions',
      description: 'Our innovative art therapy program has provided creative outlets for children to process trauma and express themselves, showing remarkable improvements in emotional wellbeing.'
    }
  ];
  
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage(prev => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

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

  const testimonials = [
    {
      quote: "Nile Orphan Care didn't just give me shelter - they gave me a family, an education, and most importantly, they believed in me when I couldn't believe in myself. Today, I'm a registered nurse helping others, just like they helped me.",
      name: "Sarah M.",
      title: "Registered Nurse, Class of 2019",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "When I arrived at NOC, I was 8 years old and had lost everything. The staff became my family, and education became my hope. Now I'm an engineer, building bridges - literally and figuratively - for my community.",
      name: "Michael K.",
      title: "Civil Engineer, Class of 2017",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The life skills program at NOC taught me more than just academics. I learned leadership, responsibility, and how to dream big. Today, I run my own business and employ 12 people from my community.",
      name: "Grace A.",
      title: "Entrepreneur, Class of 2018",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "NOC gave me more than education - they gave me confidence. The mentorship program helped me discover my passion for teaching. Now I'm back, inspiring the next generation just like my teachers inspired me.",
      name: "David L.",
      title: "Teacher & Mentor, Class of 2016",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The healthcare program at NOC saved my life and showed me my calling. Today, I'm a doctor serving rural communities, bringing hope and healing to places that need it most.",
      name: "Amara T.",
      title: "Medical Doctor, Class of 2015",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "From a scared child to a confident leader - NOC's empowerment programs taught me that my voice matters. Now I advocate for children's rights at the national level.",
      name: "James R.",
      title: "Child Rights Advocate, Class of 2014",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "NOC's vocational training program gave me practical skills and confidence. Today I run a successful carpentry workshop and train other young people in my community.",
      name: "Peter K.",
      title: "Master Craftsman, Class of 2020",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "The counseling and support I received at NOC helped me heal from trauma and discover my passion for helping others. Now I'm a social worker making a difference.",
      name: "Ruth M.",
      title: "Social Worker, Class of 2019",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      quote: "NOC believed in my potential when no one else did. Their scholarship program enabled me to study law. Today I fight for justice and represent the voiceless.",
      name: "Samuel T.",
      title: "Human Rights Lawyer, Class of 2013",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const maxSlides = testimonials.length - 2;
  
  const nextTestimonial = () => {
    if (currentTestimonial < maxSlides) {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentTestimonial > 0) {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div>
      <SEO
        title="Nile Orphan Care | Supporting Vulnerable Children in South Sudan"
        description="Nile Orphan Care supports orphaned and vulnerable children in South Sudan through education, child protection, nutrition, healthcare and youth empowerment."
        path="/"
      />
      {/* Hero Section */}
      <section className="hero" style={{backgroundImage: `url(${heroImages[currentHeroImage]})`}}>
        <div className="hero-container">
          <div className="hero-content">
            <h1>Transforming Lives of Vulnerable Children in South Sudan</h1>
            <Link to="/donate" className="hero-donate-btn">
              <span className="nav-donate-heart">♥</span> Donate Now
            </Link>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="problem-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">The Problem</span>
            <h2 className="section-title">For millions of children, growing up is a struggle for survival.</h2>
            <p className="problem-intro">South Sudan's children face conflict, displacement, poverty, food insecurity, and limited access to education and healthcare. Children without parental care are at even greater risk of neglect, exploitation, and being left out of school. An estimated 5 million children were affected by the crisis in 2026.</p>
          </div>

          <div className="impact-glance-list">
            <div className="impact-glance-item">
              <span className="impact-glance-number">110,000</span>
              <p className="impact-glance-label">Children aged 0–17 estimated to have lost one or both parents to AIDS-related causes.</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">5 million</span>
              <p className="impact-glance-label">Children affected by South Sudan's humanitarian crisis.</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">2.81 million</span>
              <p className="impact-glance-label">School-aged children out of school (nearly 65% of all school-aged children).</p>
            </div>
            <div className="impact-glance-item">
              <span className="impact-glance-number">2.11 million</span>
              <p className="impact-glance-label">Children aged 6–59 months at risk of acute malnutrition.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="video-section fade-in">
        <div className="container">
          <div className="video-header">
            <span className="problem-eyebrow">Hear From Our Team</span>
            <h2 className="section-title">From Orphan to Founder: The Story Behind Nile Orphan Care</h2>
            <p className="problem-intro">Dave Albert sits down with John, our founder, and Tim of Discipleship Global to share the story behind Nile Orphan Care and what these numbers mean for the children and families we walk alongside every day.</p>
          </div>

          <div className="video-placeholder">
            {isVideoPlaying ? (
              <iframe
                className="video-frame"
                src={`https://www.youtube.com/embed/${teamVideoId}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&vq=hd1080`}
                title="Nile Orphan Care team on the situation in South Sudan"
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

      {/* What We Do Section */}
      <section className="whatwedo-section fade-in">
        <div className="container">
          <div className="whatwedo-header">
            <span className="problem-eyebrow">What We Do</span>
            <h2 className="section-title">Meeting children's needs today, building their future for tomorrow.</h2>
            <p className="problem-intro">We respond to these challenges through hands-on programs that keep children safe, fed, healthy, and in school.</p>
          </div>

          <div className="whatwedo-grid">
            <div className="whatwedo-card">
              <img className="whatwedo-photo" src="/images/Education.jpeg" alt="Children learning together at a Nile Orphan Care education program" loading="lazy" />
              <h3>Education</h3>
              <p>Quality schooling and vocational training that keep children learning and prepare them for independent futures.</p>
            </div>
            <div className="whatwedo-card">
              <img className="whatwedo-photo" src="/images/food.jpeg" alt="Child participating in Nile Orphan Care's nutrition program" loading="lazy" />
              <h3>Nutrition & Food Security</h3>
              <p>Regular meals and food support to protect children from hunger and acute malnutrition.</p>
            </div>
            <div className="whatwedo-card">
              <img className="whatwedo-photo" src="/images/Health.jpeg" alt="Mobile health clinic providing medical care to children" loading="lazy" style={{objectPosition: 'center 20%'}} />
              <h3>Healthcare</h3>
              <p>Access to medical care and health education so children can grow up healthy and strong.</p>
            </div>
            <div className="whatwedo-card">
              <img className="whatwedo-photo" src="/images/child.jpeg" alt="Community outreach team supporting families in rural South Sudan" loading="lazy" style={{objectPosition: 'center 20%'}} />
              <h3>Child Protection & Family Care</h3>
              <p>Safe shelter, family-style care, and support for children who have lost parental care.</p>
            </div>
          </div>

          <div className="whatwedo-cta">
            <Link to="/programs" className="cta-btn primary">See All Our Programs</Link>
          </div>
        </div>
      </section>

      {/* Our Impact at a Glance Section */}
      <section className="impact-glance-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Our Impact</span>
            <h2 className="section-title">Our Impact at a Glance</h2>
            <p className="problem-intro">Real numbers behind the work we do every day for children across South Sudan.</p>
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

          <div className="whatwedo-cta">
            <Link to="/programs#impact-stats" className="cta-btn primary">See Our Full Impact</Link>
          </div>
        </div>
      </section>

      {/* Why We Exist Section */}
      <section className="why-exist-section fade-in">
        <div className="container">
          <div className="why-exist-content">
            <div className="why-exist-text">
              <h2>Why Nile Orphan Care Exists</h2>
              <p>Across communities along the Nile, many children are left vulnerable due to poverty, conflict, disease, and displacement. Without intervention, these children face limited access to education, healthcare, and emotional support, putting their futures at risk.</p>
              <p>Nile Orphan Care was founded to break this cycle. We believe that every child deserves safety, education, and the chance to dream. Our mission is not just to care for children, but to empower them to thrive as independent, confident adults. <Link to="/programs">See how our programs support children in South Sudan</Link>.</p>
            </div>
            <div className="why-exist-image">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Children in a South Sudanese community supported by Nile Orphan Care" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section fade-in">
        <div className="container">
          <div className="approach-header">
            <h2 className="section-title">Our Holistic Approach to Child Care</h2>
            <p className="approach-subtitle">We take a long-term, child-centered approach that addresses physical, emotional, educational, and social needs. Rather than short-term aid, we focus on sustainable transformation.</p>
          </div>
          
          <div className="approach-grid">
            <div className="approach-item fade-in">
              <h3>Family-Style Care</h3>
              <p>Nurturing home environments with dedicated caregivers who provide stability, love, and guidance.</p>
            </div>
            <div className="approach-item fade-in">
              <h3>Trauma-Informed Support</h3>
              <p>Professional counseling and mentorship to help children heal and build emotional resilience.</p>
            </div>
            <div className="approach-item fade-in">
              <h3>Complete Education</h3>
              <p>From early learning to higher education, ensuring every child reaches their academic potential.</p>
            </div>
            <div className="approach-item fade-in">
              <h3>Health & Wellness</h3>
              <p>Comprehensive healthcare, nutrition programs, and wellness support for optimal development.</p>
            </div>
            <div className="approach-item fade-in">
              <h3>Life Skills Training</h3>
              <p>Leadership development and vocational training preparing children for independent adulthood.</p>
            </div>
            <div className="approach-item fade-in">
              <h3>Empowerment Focus</h3>
              <p>Building confidence and self-reliance so children become leaders in their communities.</p>
            </div>
          </div>
          
          <div className="ticker-container">
            <div className="ticker">
              <div className="ticker-content">
                <span>Our goal is simple: to raise children who are not only supported, but empowered.</span>
                <span>Our goal is simple: to raise children who are not only supported, but empowered.</span>
                <span>Our goal is simple: to raise children who are not only supported, but empowered.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section fade-in">
        <div className="container">
          <div className="welcome-header">
            <h2>Welcome to Nile Orphan Care</h2>
            <p className="welcome-subtitle">Transforming lives through compassionate care and unwavering commitment</p>
          </div>
          
          <div className="welcome-content">
            <div className="welcome-text">
              <p>For over a decade, we have been a beacon of hope for orphaned and vulnerable children across the Nile region. Our comprehensive approach ensures every child receives the love, care, and opportunities they deserve.</p>
              <p>From emergency shelter to long-term development, we walk alongside each child on their journey to independence, providing not just basic needs but the foundation for a bright future.</p>
              
              <div className="core-values">
                <div className="value-row">
                  <div className="value-number">01</div>
                  <div className="value-content">
                    <h4>Safe Haven</h4>
                    <p>Secure homes with loving caregivers who provide stability and emotional support</p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="value-number">02</div>
                  <div className="value-content">
                    <h4>Education First</h4>
                    <p>Quality learning opportunities that unlock potential and build bright futures</p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="value-number">03</div>
                  <div className="value-content">
                    <h4>Building Futures</h4>
                    <p>Life skills and vocational training that prepare children for independence</p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="value-number">04</div>
                  <div className="value-content">
                    <h4>Healthcare Support</h4>
                    <p>Comprehensive medical care ensuring physical and mental wellbeing for all children</p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="value-number">05</div>
                  <div className="value-content">
                    <h4>Community Integration</h4>
                    <p>Building strong connections with local communities for sustainable support networks</p>
                  </div>
                </div>
                <div className="value-row">
                  <div className="value-number">06</div>
                  <div className="value-content">
                    <h4>Empowerment Programs</h4>
                    <p>Leadership development and mentorship to help children become confident advocates</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mission-image">
              <div className="stats-image">
                <img src="https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Children learning together at a Nile Orphan Care education program" className="welcome-img" loading="lazy" />
              </div>
              <div className="impact-numbers">
                <div className="impact-item">
                  <span className="impact-number">1,200+</span>
                  <span className="impact-label">Children Served</span>
                </div>
                <div className="impact-item">
                  <span className="impact-number">8</span>
                  <span className="impact-label">Care Centers</span>
                </div>
                <div className="impact-item">
                  <span className="impact-number">150+</span>
                  <span className="impact-label">Success Stories</span>
                </div>
                <div className="impact-item">
                  <span className="impact-number">15+</span>
                  <span className="impact-label">Years of Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How You Can Help Section */}
      {/* Success Stories Section */}
      <section id="stories-section" className="stories-section fade-in">
        <div className="container">
          <div className="stories-header">
            <h2 className="section-title">Stories of Hope</h2>
            <div className="stories-intro">
              <h3>Transforming Lives Through Resilience and Hope</h3>
              <p>Each child who enters our care carries a story of courage and potential. While their journeys begin with challenges, some arriving with nothing but hope, others carrying dreams that transcend their circumstances, they all share one powerful truth: transformation is possible when compassion meets opportunity.</p>
              <p>Today, our alumni stand as living proof of this transformation. They serve as educators, healthcare professionals, engineers, and community leaders across the region. More importantly, they return as mentors and change-makers, demonstrating that with dedicated support and unwavering belief, every child can rewrite their story and create an extraordinary legacy.</p>
            </div>
          </div>
          
          <div className="stories-carousel">
            <div className="stories-track" style={{transform: window.innerWidth <= 768 ? `translateX(-${currentTestimonial * 340}px)` : `translateX(-${currentTestimonial * 380}px)`}}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="story-card">
                  <div className="story-image">
                    <img src={testimonial.image} alt={testimonial.name} loading="lazy" />
                    <div className="story-overlay"></div>
                  </div>
                  <div className="story-content">
                    <div className="quote-mark">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" fill="currentColor"/>
                      </svg>
                    </div>
                    <blockquote>{testimonial.quote}</blockquote>
                    <div className="story-author">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.title}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="stories-navigation">
              <button className="nav-btn prev" onClick={prevTestimonial} disabled={currentTestimonial === 0}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"/>
                </svg>
              </button>
              
              <div className="stories-dots">
                {Array.from({length: maxSlides + 1}).map((_, index) => (
                  <button 
                    key={index}
                    className={`story-dot ${currentTestimonial === index ? 'active' : ''}`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
              
              <button className="nav-btn next" onClick={nextTestimonial} disabled={currentTestimonial === maxSlides}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section id="news-section" className="news-section fade-in">
        <div className="container">
          <div className="news-header">
            <h2 className="section-title">Latest News & Updates</h2>
            <p className="news-subtitle">Stay informed about our ongoing programs, achievements, and community impact stories.</p>
          </div>
          
          <div className="news-grid">
            {(showAllNews ? newsArticles : newsArticles.slice(0, 3)).map((article, index) => (
              <article className="news-card" key={index}>
                <div className="news-image">
                  <img src={article.image} alt={article.alt} loading="lazy" />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="news-read-time">{article.meta}</span>
                  </div>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a href="#" className="news-link">Read Article</a>
                </div>
              </article>
            ))}
          </div>

          {!showAllNews && (
            <div className="news-more">
              <button type="button" className="cta-btn primary" onClick={() => setShowAllNews(true)}>
                Read More News
              </button>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq-section" className="faq-section fade-in">
        <div className="container">
          <div className="faq-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq-subtitle">Find answers to common questions about our programs, donations, and how you can get involved.</p>
          </div>
          
          <div className="faq-list">
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(0)}>
                <span>How do I know my donation is being used effectively?</span>
                <svg className={`faq-icon ${openFaq === 0 ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFaq === 0 ? 'open' : ''}`}>
                <p>We maintain complete transparency with quarterly impact reports, financial statements, and regular updates on program outcomes. 92% of donations go directly to programs, and we provide detailed breakdowns of how funds are allocated across education, healthcare, nutrition, and housing initiatives.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(1)}>
                <span>Can I visit the children or facilities?</span>
                <svg className={`faq-icon ${openFaq === 1 ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                <p>Yes, we welcome visitors and organize regular facility tours for donors and supporters. Please contact us in advance to schedule a visit. We also offer virtual tours and video calls for international supporters who cannot visit in person.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(2)}>
                <span>What age groups do you serve?</span>
                <svg className={`faq-icon ${openFaq === 2 ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                <p>We serve children from infancy through young adulthood (ages 0-21). Our programs are designed to support different developmental stages, from early childhood care and education to vocational training and life skills preparation for independent living.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(3)}>
                <span>How can I volunteer or get involved beyond donations?</span>
                <svg className={`faq-icon ${openFaq === 3 ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                <p>We offer various volunteer opportunities including teaching, mentoring, healthcare support, and administrative assistance. You can also help by organizing fundraising events, spreading awareness on social media, or providing professional services like legal or medical consultation.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question" onClick={() => toggleFaq(4)}>
                <span>Are donations tax-deductible?</span>
                <svg className={`faq-icon ${openFaq === 4 ? 'open' : ''}`} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </button>
              <div className={`faq-answer ${openFaq === 4 ? 'open' : ''}`}>
                <p>Yes, NOC is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the full extent allowed by law. We provide official donation receipts for tax purposes, and our Tax ID is available upon request.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-section fade-in">
        <div className="container">
          <div className="trust-header">
            <h2 className="section-title">Transparency & Accountability</h2>
            <p className="trust-subtitle">We are committed to responsible stewardship and transparency. Every donation is carefully managed to maximize impact and ensure children receive the support they need.</p>
          </div>
          
          <div className="trust-grid">
            <div className="trust-item">
              <h3>Community Monitoring</h3>
              <p>Regular program assessments with community feedback to ensure effectiveness and cultural sensitivity.</p>
            </div>
            <div className="trust-item">
              <h3>Impact Reports</h3>
              <p>Detailed quarterly reports showing exactly how funds are used and the outcomes achieved.</p>
            </div>
            <div className="trust-item">
              <h3>Donor Updates</h3>
              <p>Regular communication with supporters including success stories and program developments.</p>
            </div>
            <div className="trust-item">
              <h3>Child Protection</h3>
              <p>Strict ethical policies and safeguarding measures to protect the children in our care.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;