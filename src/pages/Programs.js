import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';
import AnimatedHeroText from '../components/AnimatedHeroText';

const Programs = () => {
  return (
    <div className="programs-page">
      <SEO
        title="Our Programs | Education and Child Protection"
        description="Explore Nile Orphan Care's programs for children in South Sudan, including education, healthcare, nutrition, vocational training, and family-style child protection."
        path="/programs"
      />
      {/* Hero Section */}
      <section id="hero" className="programs-hero">
        <div className="hero-container">
          <div className="hero-content">
            <AnimatedHeroText as="h1" text="Our Programs and Initiatives" startDelay={0.15} />
            <AnimatedHeroText as="p" text="Comprehensive support that nurtures every child's growth." startDelay={0.55} />
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="programs-overview">
        <div className="container">
          <div className="overview-content-centered">
            <div className="overview-text-centered">
              <h2 className="section-title">Transforming Lives Through Holistic Care</h2>
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
            {[
              {
                photo: '/images/inter-ethnic.jpg',
                alt: "Children from many South Sudanese tribes learning together at the Inter-Ethnic Academy",
                title: 'Inter-Ethnic Academy',
                tag: 'Primary and Secondary Education',
                description: "Addressing South Sudan's tribal divisions through education. With 63 of the 64 tribes represented in our student body, we demonstrate that unity is possible through shared learning and the Gospel's unifying power.",
              },
              {
                photo: '/images/daalbaai.jpg',
                alt: "Cultivated farmland representing the Daalbaai Agriculture program's fields",
                title: 'Daalbaai Agriculture',
                tag: 'Sustainable Farming',
                description: '"Happiness is a result of availability of food": this program promotes indigenous food production, using South Sudan\'s fertile land and abundant rainfall to reduce dependency on international aid.',
              },
              {
                photo: '/images/food.jpeg',
                alt: "Child participating in Nile Orphan Care's nutrition program",
                title: 'Love the Hungry (LTH)',
                tag: 'Nutrition Program',
                description: 'Since 2013, Love the Hungry has been the cornerstone of our nutritional support, providing fortified meals that transform lives, since a child\'s wellbeing starts with the quality of food they eat.',
              },
              {
                photo: '/images/Health.jpeg',
                alt: 'Mobile health clinic providing medical care to children',
                title: 'Partners for Compassionate Care (PCC)',
                tag: 'Medical Care and Health Education',
                description: 'Over the past 24 months, PCC has established and operated our on-site clinic, ensuring immediate healthcare access with a full-time nurse providing coverage five days a week.',
              },
              {
                photo: '/images/hero-1.jpeg',
                alt: 'Community teaching session at a Nile Orphan Care program',
                title: 'Discipleship Global (DG)',
                tag: 'Discipleship and Biblical Training',
                description: 'Training children to be disciples who make disciples using the Paul and Timothy biblical method, fostering deeper, lived relationships with Jesus Christ through relational mentoring.',
              },
              {
                photo: '/images/child.jpeg',
                alt: 'Child supported through Nile Orphan Care programs',
                title: 'Technical and Vocational Training',
                tag: 'Skills Development',
                description: 'Empowering children with practical skills for economic independence. This program bridges the gap between education and employment, providing pathways to sustainable livelihoods.',
              },
            ].map((program) => (
              <div className="program-card" key={program.title}>
                <img className="program-photo" src={program.photo} alt={program.alt} loading="lazy" />
                <div className="program-body">
                  <span className="program-tag">{program.tag}</span>
                  <h3>{program.title}</h3>
                  <p className="program-description">{program.description}</p>
                </div>
              </div>
            ))}
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
              <img src="/images/inter-ethnic.jpg" alt="Students of the Inter-Ethnic Academy gathered together on campus" loading="lazy" />
            </div>
            <div className="spotlight-text">
              <h3>Inter-Ethnic Academy: Where 63 Tribes Learn as One</h3>
              <p>South Sudan's 64 tribes carry a beauty and a history that conflict has too often turned into division. The Inter-Ethnic Academy was named on purpose, to put that division in a single classroom and answer it with shared desks, shared meals, and a shared future.</p>
              <p>Today, 63 of those 64 tribes sit side by side in our classrooms. Children who grew up hearing that another tribe was the enemy instead grow up knowing them as classmates, and it changes how the next generation sees each other.</p>
              <p>Education here isn't separate from peacebuilding, it is peacebuilding. Every grade integrates our SLOSS peace curriculum, so reconciliation is practiced daily, not taught as a once-off lesson, and it's offered free to every child in our care so tuition is never the reason a child is left out of the unity we're building.</p>
            </div>
          </div>

          <div className="spotlight-block reverse">
            <div className="spotlight-image">
              <img src="/images/daalbaai.jpg" alt="A farmer tending crops in a field, representing the Daalbaai Agriculture program" loading="lazy" />
            </div>
            <div className="spotlight-text">
              <h3>Daalbaai Agriculture: Growing Food Independence</h3>
              <p>"Happiness is a result of availability of food." It's a simple line, but it's the whole reason Daalbaai exists. South Sudan's soil is fertile and its rains are generous, we believe that's not a coincidence, it's an invitation to become a breadbasket rather than a country that depends on aid to eat.</p>
              <p>Daalbaai puts that belief into practice. Every field cultivated here feeds directly into the meals served through our Love the Hungry program, so the harvest isn't abstract, it shows up on a plate for a child that same season.</p>
              <p>Just as important, the program teaches children and staff the agricultural knowledge to keep that cycle going long after any single harvest, sustainable techniques, local seed varieties, and land stewardship that can be carried into their own communities and futures.</p>
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
            {[
              {
                title: 'Clean Water and WASH',
                badge: 'Deep Water Well Complete',
                body: "Clean water is only second to the Living Water! Our solar water system provides safe, clean water for drinking and agriculture, while Water Step equipment enables water treatment and sanitation, saving lives daily from waterborne diseases like cholera and diarrhea, leading causes of child mortality in South Sudan.",
              },
              {
                title: 'Food Security',
                badge: '620 Daily Meals',
                body: "Through the Love the Hungry partnership and Daalbaai agriculture, we're building comprehensive food security that feeds 620 children daily, working toward a South Sudan that produces its own food rather than depending on aid.",
              },
              {
                title: 'Safe Shelter',
                badge: 'Rebuilding Stronger',
                body: 'Providing secure housing, learning spaces, and sleeping quarters. After storm damage in April 2024, we\'re rebuilding stronger with concrete structures and improved designs, because the storms may come, but we know who holds us in the eye of the storm.',
              },
              {
                title: 'Peace Education (SLOSS)',
                badge: 'Unity in Diversity',
                body: '"Shed Light on South Sudan" integrates peace education into our upper-class curriculum, teaching children through workshops on unity and reconciliation that tribal diversity is strength, not division.',
              },
              {
                title: 'Mission Outreach',
                badge: 'Community Impact',
                body: '"Children of the Beautiful Savior": our children share God\'s love in the community, demonstrating Christ\'s love through action while respecting the dignity and beliefs of every person, regardless of tribe or background.',
              },
              {
                title: 'Health Education',
                badge: 'Preventive Care',
                body: 'Comprehensive training on HIV/AIDS awareness, dental care, disease prevention, and general health education for children, workers, and vulnerable families, in partnership with SOS and other institutions across South Sudan.',
              },
            ].map((initiative) => (
              <div className="initiative-card" key={initiative.title}>
                <h3>{initiative.title}</h3>
                <span className="achievement-badge">{initiative.badge}</span>
                <p>{initiative.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DonorCTA
        heading="South Sudan's future is growing up right now."
        subheading="Will you help shape it?"
        body="Every child we educate, nourish, protect, and empower has the potential to become a teacher, entrepreneur, healthcare professional, leader, or changemaker in their community. Supporting a child today is an investment in South Sudan's tomorrow."
        primaryLabel="Invest in Their Future"
        secondaryLabel="Explore Partnerships"
        secondaryTo="/contact"
      />
    </div>
  );
};

export default Programs;