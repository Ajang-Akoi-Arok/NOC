import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { SITE_URL } from '../config/seo';
import DonorCTA from '../components/DonorCTA';

const About = () => {
  const location = useLocation();
  const [selectedMember, setSelectedMember] = useState(null);

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
    { name: "John Deng Ater", title: "Founder & Executive Director", image: "/board/John-3.webp" },
    { name: "Dave Albert", title: "President - Board", image: "/board/Dave.webp" },
    { name: "Ted Miller", title: "Board Vice President", image: "/board/Ted.webp" },
    { name: "Susan Albert", title: "Secretary", image: "/board/Susan.webp" },
    { name: "Joanne Keifer", title: "Treasurer - Volunteer", image: "/board/Joane.webp" },
    { name: "Tom Cox", title: "Board Member", image: "/board/tom_cox.webp" },
    { name: "Steve Roberts", title: "Committee Member", image: "/board/Steve_Roberts.webp" },
    { name: "Meredith Miller", title: "Committee - Education", image: "/board/miller.webp" },
    { name: "Evan Nord", title: "Board Member - Construction Committee", image: "/board/Evan.webp" }
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
      <section className="about-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Our Story: Nile Orphan Care in South Sudan</h1>
            <p>A journey of faith, hope, and transformation in South Sudan</p>
          </div>
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
          <div className="john-story-grid">
            <div className="story-text">
              <p>John, founder of NOC, believes that the only one who kept him alive during the civil war was not his widow mother, but GOD ALONE. He was present in these times of trouble. Since he accepted Christ as his personal Savior at age 6, he remains a devoted Christian in His service.</p>
              
              <p>In 2011, Rev. John Deng Ater took a mission trip to then autonomous Southern Sudan, which later seceded from Sudan and became the independent Republic of South Sudan on July 9, 2011 after decades of African's longest civil war that claimed millions of lives. The heart-rending stories from orphaned, street and abandoned children compelled Rev. Ater to initiate the Orphans' Scholarship Program. The goal was to provide financial assistance for education and care to South Sudanese orphaned, street, abandoned and at-risk children who are living in refugee camps (Kenya and Uganda).</p>
              
              <p>In 2013, the program was extended to South Sudan with its first headquarters located in Yei, Central Equatorial State. But, following a political crisis in 2016, Yei was seriously affected and left with no access to humanitarian aid and other means of survival. As insecurity intensified, the organization was left with no choice but to evacuate children along with their caretakers to Juba, the place now considered to be home for these disadvantaged children.</p>
              
              <div className="scripture-quote">
                <blockquote>
                  "Do not withhold good from those who deserve it, when it is in your power to act. Do not say to your neighbor, 'Come back later; I'll give it tomorrow,' when you now have it with you."
                </blockquote>
                <cite>Proverbs 3:27-28</cite>
              </div>
            </div>
            <div className="john-image">
              <img src="/board/John-3.webp" alt="Rev. John Deng Ater, Founder and Executive Director of Nile Orphan Care" loading="lazy" />
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
          
          <div className="principles-grid">
            <div className="principle-item">
              <p>Trusts in God who makes all things possible and is empowered by the love of God which manifests itself to us in actions and truth, chiefly through Jesus Christ</p>
            </div>
            
            <div className="principle-item">
              <p>Pursues excellence, integrity, accountability, and honesty in our deeds</p>
            </div>
            
            <div className="principle-item">
              <p>Seeks to be good stewards of God's resources entrusted to us and to maximize the Kingdom impact of its financial and non-financial resources</p>
            </div>
            
            <div className="principle-item">
              <p>Strives to be profitable and sustainable in the long term</p>
            </div>
            
            <div className="principle-item">
              <p>Has a kingdom motivation, purpose, and plan that is shared and embraced by the board and staff</p>
            </div>
            
            <div className="principle-item">
              <p>Aims at holistic transformation and welfare of individuals (children and staff) and communities through God's Word and His Spirit</p>
            </div>
            
            <div className="principle-item">
              <p>Models Christ-like, servant leadership, and develops it in others</p>
            </div>
            
            <div className="principle-item">
              <p>Intentionally implements ethical Christ-honoring practice that does not conflict with the gospel</p>
            </div>
            
            <div className="principle-item">
              <p>Is pro-active in intercession and seeks the prayer support of others</p>
            </div>
            
            <div className="principle-item">
              <p>Seeks to harness the power of networking with like-minded organizations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="partners-section animate-on-scroll">
        <div className="container">
          <div className="partners-header">
            <h2 className="section-title">Our Partners</h2>
            <p>Our Partners go above and beyond to bring skills, support and donations to make a difference for everyone at Nile Orphan Care and in doing so they are making a difference to the surrounding community. <Link to="/programs">Explore the programs these partnerships make possible</Link>.</p>
          </div>
          
          <div className="partners-grid">
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Discipleship_Global.png" alt="Discipleship Global logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Discipleship Global</h3>
                <div className="partner-type">Disciple Training</div>
                <p>Our Mission is to raise up, train, and equip believers to become disciple makers and trainers of disciple makers in order to catalyze Disciple Making Movements and Church Planting Movements across the globe.</p>
                <a href="https://discipleshipglobal.org/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Love_the_Hungry.png" alt="Love the Hungry logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Love the Hungry</h3>
                <div className="partner-type">Food Donation</div>
                <p>Love the Hungry's nutrient-rich meals are donated to Non-Governmental Organizations (NGO's) worldwide with an emphasis on reaching the world's most vulnerable children.</p>
                <a href="https://www.lovethehungry.org/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Sea_Partners.png" alt="Sea Partners logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Sea Partners</h3>
                <div className="partner-type">Education</div>
                <p>Their mission is to serve God through educating children and adults, advancing community development through farming and tree planting, clean water, healthcare and evangelism.</p>
                <a href="https://sea-partners.org/about/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Partners_in_Compassionate_Care.png" alt="Partners in Compassionate Care logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Partners in Compassionate Care</h3>
                <div className="partner-type">Healthcare Support</div>
                <p>Partners in Compassionate Care (PCC) exists for the purpose of providing Christ-centered hope and healing to the people of South Sudan.</p>
                <a href="https://www.pccsudan.org/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Teach_to_Transform.png" alt="Teach to Transform logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Teach to Transform</h3>
                <div className="partner-type">Vocational Skills Training</div>
                <p>Teach to Transform equips partners around the world with medical and vocational skills they can use to share the gospel of Christ.</p>
                <a href="https://teachtotransform.org/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Northside_Christian_Church.png" alt="Northside Christian Church logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Northside Christian Church</h3>
                <div className="partner-type">Local Church Support</div>
                <p>Our mission is to connect unconnected people to Jesus. Our unwavering focus of seeing people discover the hope and joy that comes with having a relationship with Jesus Christ.</p>
                <a href="https://www.mynorthside.com/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/SOS.png" alt="SOS logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>SOS</h3>
                <div className="partner-type">Global Health</div>
                <p>SOS improves global health and the environment through recovery and redistribution of surplus medical supplies.</p>
                <a href="https://soshealthandhope.org/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
            
            <div className="partner-card">
              <div className="partner-logo">
                <img src="/images/Southeast_Christian_Church.png" alt="Southeast Christian Church logo" loading="lazy" />
              </div>
              <div className="partner-content">
                <h3>Southeast Christian Church</h3>
                <div className="partner-type">Local Church Support</div>
                <p>In our mission of Connecting people to Jesus and one another, Southeast Christian Church has grown into a unified multisite community.</p>
                <a href="https://www.se.church/" target="_blank" rel="noopener noreferrer" className="partner-link">Learn More</a>
              </div>
            </div>
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
          
          <div className="process-methods-professional">
            <div className="method-item-professional">
              <div className="method-content">
                <div className="method-number">1</div>
                <h3>The Organization's Assigned Team</h3>
                <p>This team is responsible to find and invite children into the program</p>
              </div>
            </div>

            <div className="method-item-professional">
              <div className="method-content">
                <div className="method-number">2</div>
                <h3>Institutions</h3>
                <p>NOC works in partnership with other institutions to accept children who have undergone background checks with them</p>
              </div>
            </div>

            <div className="method-item-professional">
              <div className="method-content">
                <div className="method-number">3</div>
                <h3>Communities</h3>
                <p>This method required us to work with leaders from diverse communities whom we believe to know the status of the child/children they are bringing to us. The integrity of these leaders is extremely important under this method.</p>
              </div>
            </div>

            <div className="method-item-professional">
              <div className="method-content">
                <div className="method-number">4</div>
                <h3>Walk-ins</h3>
                <p>Under this category, orphaned, street, abandoned and at-risk children who hear about us can find their way to the center; explain their situation and desperately plea for help. With verification purpose, the assigned team for the organization carefully evaluates their lives stories and admits them in the program accordingly.</p>
              </div>
            </div>
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
              <div key={index} className="board-member" onClick={() => setSelectedMember(member)}>
                <div className="member-photo">
                  <img src={member.image} alt={`${member.name}, ${member.title}`} loading="lazy" />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.title}</p>
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

      {/* Modal */}
      {selectedMember && (
        <div className="modal-overlay" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedMember(null)}>×</button>
            <div className="modal-body">
              <div className="modal-photo">
                <img src={selectedMember.image} alt={`${selectedMember.name}, ${selectedMember.title}`} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;