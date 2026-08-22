import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';

const About = () => {
  const location = useLocation();
  const [expandedMember, setExpandedMember] = useState(null);

  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location]);

  const boardMembers = [
    {
      name: "John Deng Ater",
      title: "Founder & Executive Director",
      image: "/board/John.jpg",
      imagePosition: "center 15%",
      subtitle: "Rev. John Deng Ater, Founder and Executive Director of Nile Orphan Care",
      bio: [
        "\"Growing up during the Sudanese civil war, I experienced loss and displacement at an early age. I lost my father when I was eight years old, and for many years refugee camps became my home, first in Uganda and later in Kenya. During that time, I saw children and families struggle with hunger, poverty, disease, and limited access to education.",
        "Those experiences shaped the way I see the world. Through every hardship, my faith in God gave me strength and taught me the importance of compassion and service. I came to believe that no child should be left without care, hope, or the opportunity to build a better future simply because of the circumstances into which they were born.",
        "That belief led me to found Nile Orphan Care. My vision is to restore hope for orphaned and vulnerable children in South Sudan by providing care, education, protection, and opportunities to develop the skills they need for the future. I believe that when we invest in a child today, we help build a stronger and more hopeful South Sudan tomorrow.\""
      ]
    },
    {
      name: "Dave Albert",
      title: "President - Board",
      image: "/board/Dave.jpeg",
      imageFit: "contain",
      subtitle: "Dave Albert, President of Nile Orphan Care",
      bio: [
        "Dave Albert serves as President of Nile Orphan Care, bringing 38 years of business-development leadership from a Fortune 500 career into a ministry grounded in Christlike compassion and practical impact.",
        "He is committed to living out the two great commands—to love the Lord your God and love your neighbor as yourself. That commitment shapes both the in-country team and the U.S. team, who work together to care for vulnerable children and elevate communities in South Sudan.",
        "Dave finds deep joy in watching God glorified through the development, protection, and nurturing of \"the least of these.\" His favorite scripture, \"I can do all things through Christ who strengthens me,\" anchors his work and fuels his calling."
      ]
    },
    { name: "Hon. Anne Lino Abyei", title: "Deputy Board Chair", image: "/board/Anne-Lino.jpeg", imagePosition: "center 15%" },
    { name: "Ted Miller", title: "Vice President", image: "/board/ted-meredith.jpg" },
    { name: "Susan Albert", title: "Secretary", image: "/board/Susan.webp" },
    { name: "Joanne Keifer", title: "Treasurer - Volunteer", image: "/board/Joane.webp" },
    { name: "Tom Cox", title: "Board Member", image: "/board/tom_cox.webp" },
    { name: "Steve Roberts", title: "Committee Member", image: "/board/Steve_Roberts.webp" },
    { name: "Meredith Miller", title: "Education Consultant", image: "/board/ted-meredith.jpg" },
    { name: "Evan Nord", title: "Board Member - Construction Committee", image: "/board/Evan.webp", imagePosition: "center 20%" }
  ];



  return (
    <div className="about-page">
      <SEO
        title="About Us | Nile Orphan Care's Mission in South Sudan"
        description="Learn about Nile Orphan Care's mission, founding story, guiding principles, board, and partners supporting orphaned and vulnerable children in South Sudan."
        path="/about"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: "About Us | Nile Orphan Care's Mission in South Sudan",
          url: `${SITE_URL}/about`,
        }}
      />
      {/* Hero Section */}
      <section id="hero" className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Our Story" startDelay={0.15} />
            <AnimatedHeroText as="p" text="A journey of faith, hope, and transformation." startDelay={0.4} />
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-intro animate-on-scroll">
        <div className="container">
          <span className="problem-eyebrow">Who We Are</span>
          <h2 className="section-title">A family for South Sudan's most vulnerable children</h2>
          <p className="problem-intro">Nile Orphan Care is a faith-driven organization walking alongside orphaned, abandoned and at-risk children across South Sudan. What began as a single scholarship program in 2011 has grown into a family of care providing shelter, education, healthcare and nutrition — so every child we serve has the chance to grow up safe, loved and hopeful about the future.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="mission-vision-section animate-on-scroll">
        <div className="container">
          <div className="mission-vision-grid">
            <div className="mission-card">
              <h2>Mission Statement</h2>
              <p>Loving orphans in South Sudan through education, care, and spiritual growth with the love God has shown us in Jesus.</p>
            </div>
            
            <div className="vision-card">
              <h2>Vision Statement</h2>
              <p>To nourish and nurture orphans towards holistic transformation in their lives and in South Sudan</p>
            </div>
          </div>
          
          <div className="driving-scripture">
            <blockquote>
              "Defend the weak and the fatherless; uphold the cause of the poor and the oppressed."
            </blockquote>
            <cite>Psalm 82:3</cite>
          </div>
        </div>
      </section>

      {/* Meet John Section */}
      <section className="john-story-section animate-on-scroll">
        <div className="container">
          <div className="story-header">
            <h2 className="section-title">Meet John</h2>
          </div>
          <div className="john-story-body">
            <img className="john-image-float" src="/board/John.jpg" alt="Rev. John Deng Ater, Founder and Executive Director of Nile Orphan Care" loading="lazy" />
            <p>"Growing up during the Sudanese civil war, I experienced loss and displacement at an early age. I lost my father when I was eight years old, and for many years refugee camps became my home, first in Uganda and later in Kenya. During that time, I saw children and families struggle with hunger, poverty, disease, and limited access to education.</p>

            <p>Those experiences shaped the way I see the world. Through every hardship, my faith in God gave me strength and taught me the importance of compassion and service. I came to believe that no child should be left without care, hope, or the opportunity to build a better future simply because of the circumstances into which they were born.</p>

            <p>That belief led me to found Nile Orphan Care. My vision is to restore hope for orphaned and vulnerable children in South Sudan by providing care, education, protection, and opportunities to develop the skills they need for the future. I believe that when we invest in a child today, we help build a stronger and more hopeful South Sudan tomorrow."</p>

            <div className="scripture-quote">
              <blockquote>
                "Do not withhold good from those who deserve it, when it is in your power to act. Do not say to your neighbor, 'Come back later; I'll give it tomorrow,' when you now have it with you."
              </blockquote>
              <cite>Proverbs 3:27-28</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Guiding Principles Section */}
      <section className="principles-section animate-on-scroll">
        <div className="container">
          <div className="principles-header">
            <h2 className="section-title">Guiding Principles</h2>
          </div>
          
          <div className="principles-list">
            {[
              "Trusts in God who makes all things possible and is empowered by the love of God which manifests itself to us in actions and truth, chiefly through Jesus Christ",
              "Pursues excellence, integrity, accountability, and honesty in our deeds",
              "Seeks to be good stewards of God's resources entrusted to us and to maximize the Kingdom impact of its financial and non-financial resources",
              "Strives to be profitable and sustainable in the long term",
              "Has a kingdom motivation, purpose, and plan that is shared and embraced by the board and staff",
              "Aims at holistic transformation and welfare of individuals (children and staff) and communities through God's Word and His Spirit",
              "Models Christ-like, servant leadership, and develops it in others",
              "Intentionally implements ethical Christ-honoring practice that does not conflict with the gospel",
              "Is pro-active in intercession and seeks the prayer support of others",
              "Seeks to harness the power of networking with like-minded organizations",
            ].map((principle, index) => (
              <div className="principle-row" key={index}>
                <span className="principle-number">{String(index + 1).padStart(2, '0')}</span>
                <p>{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How NOC Finds Children Section */}
      <section className="adoption-process-section animate-on-scroll">
        <div className="container">
          <div className="process-header">
            <h2 className="section-title">How NOC Finds and Adopts Children</h2>
            <p className="process-intro">Although its priority is to help children who lost parents either through war or HIV/AIDS, etc., Nile Orphan Care finds it extremely difficult to turn down or stand by as a staggering number of children in war-torn South Sudan are wailing in the street and not knowing what tomorrow holds for them. For that reason, the organization has four ways to find and adopt children:</p>
          </div>
          
          <div className="principles-list">
            {[
              { title: "The Organization's Assigned Team", body: "This team is responsible to find and invite children into the program" },
              { title: 'Institutions', body: 'NOC works in partnership with other institutions to accept children who have undergone background checks with them' },
              { title: 'Communities', body: 'This method required us to work with leaders from diverse communities whom we believe to know the status of the child/children they are bringing to us. The integrity of these leaders is extremely important under this method.' },
              { title: 'Walk-ins', body: 'Under this category, orphaned, street, abandoned and at-risk children who hear about us can find their way to the center; explain their situation and desperately plea for help. With verification purpose, the assigned team for the organization carefully evaluates their lives stories and admits them in the program accordingly.' },
            ].map((method, index) => (
              <div className="principle-row" key={method.title}>
                <span className="principle-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="principle-row-title">{method.title}</h3>
                  <p>{method.body}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="context-note">
            <p>The civil war in South Sudan has brought about unspeakable suffering, causing many people to live in abject poverty, forcing some families to abandon their children and leaving significant number of children preferred to live in the street than with parent(s) who beg at the roadside and have nowhere to sleep.</p>
          </div>
        </div>
      </section>

      {/* Reunification Program Section */}
      <section className="reunification-section animate-on-scroll">
        <div className="container">
          <div className="reunification-content">
            <h2 className="section-title">Reunification Program</h2>
            <h3>What About the Parents?</h3>
            <p>Under this program, Nile Orphan Care continues to work closely with communities or sponsored children for the possibility of reunification with parents or guardians. Although this program presents challenges because some parents don't want their children back or some children refuse to regress to life they escaped, the organization strives to create conducive environment and peaceful transition through training and counseling.</p>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section id="team" className="board-section animate-on-scroll">
        <div className="container">
          <div className="board-header">
            <h2 className="section-title">Our Board</h2>
            <p>Meet the dedicated leaders who guide our mission and ensure our commitment to transforming lives</p>
          </div>
          
          <div className="board-grid">
            {boardMembers.map((member, index) => (
              <div key={index} className="board-member">
                <div className="member-photo">
                  <img
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    loading="lazy"
                    style={{
                      ...(member.imagePosition ? { objectPosition: member.imagePosition } : {}),
                      ...(member.imageFit ? { objectFit: member.imageFit } : {})
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
                  {member.bio && (
                    <>
                      <button
                        type="button"
                        className="member-bio-toggle"
                        onClick={() => setExpandedMember(expandedMember === index ? null : index)}
                        aria-expanded={expandedMember === index}
                      >
                        {expandedMember === index ? 'Hide bio' : 'Read bio'}
                      </button>
                      {expandedMember === index && (
                        <div className="member-bio">
                          {member.subtitle && <p className="member-bio-subtitle">{member.subtitle}</p>}
                          {member.bio.map((paragraph, i) => (
                            <p key={i}>{paragraph}</p>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonorCTA
        heading="What could one opportunity mean to a child?"
        subheading="It could change everything."
        body="A meal can help a child grow. Education can open a future. Healthcare can save a life. A safe and caring environment can give a child the confidence to dream again. Together, we can make those opportunities possible."
        primaryLabel="Give a Child a Chance"
        secondaryLabel="See Our Impact"
        secondaryTo="/our-impact"
      />
    </div>
  );
};

export default About;