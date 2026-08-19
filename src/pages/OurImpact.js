import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import DonorCTA from '../components/DonorCTA';

const childStories = [
  {
    name: 'Ador Arop',
    subtitle: 'P3 · Dreams of becoming a pastor',
    image: '/images/Ador-Arop.jpg',
    excerpt: "Ador Arop is a 12 year old girl and a witness of her village's massacre. She hails from Tony in Eastern Bahr el Ghazal.",
    paragraphs: [
      "Ador Arop is a 12 year old girl. She is a witness of her village's massacre.",
      "She hails from Tony in Eastern Bahr el Ghazal. Ador lost her parents and siblings during a tribal attack in their village in 2020. She accounted that all the houses were burned and family murdered.",
      "Ador survived along with the other villagers. She was found in the Gudele streets begging for food in June 2020 and brought to NOC by volunteer, William Deng.",
      '"I have nothing left. NOC is my mother and father," she said when asked about her experience in NOC. Ador is in P3 and dreams of becoming a pastor when she grows up.'
    ]
  },
  {
    name: 'Chol Mayen',
    subtitle: 'P5 · Focused on education, for his mother',
    image: '/images/chol-mayen.jpg',
    excerpt: "Chol Mayen is a 13 year old boy whose father, an SPLA general, was killed in the 2013 civil war.",
    paragraphs: [
      "Chol Mayen is a 13 year old boy. Chol's father was a general in the army SPLA; he was killed in the 2013 civil war.",
      "After the death of his father, the extended family of five wives and twenty eight children was difficult to maintain due to lack of resources and responsibility. Chol's mother was the fourth wife.",
      "She single-handedly took care of Chol and three other siblings. In 2017 she fell sick and suffered mental problems.",
      "One of Chol's siblings died of malaria, and Chol and a younger sibling went to live with a relative. He narrated that life was tough since there was no food or clothes to wear. Chol went to live on the street in April 2018.",
      "It was at this time that he was identified by volunteer Deng William. Chol suffered severe skin disease on the street and his body was badly affected due to a lack of medical care.",
      "Chol is currently in Primary Five. When asked about his experience in NOC, he replied that he is better and healthy, and that he will focus on education to help care for his mother."
    ]
  },
  {
    name: 'Chanjeek and Jima',
    subtitle: 'Twin brothers, age 7',
    image: '/images/Chanjeek-and-Jima-.jpg',
    excerpt: "Chanjeek and Jima are 7 year old twin brothers found eating from a dustbin, unable to describe anything about their parents but the sound of gunshots.",
    paragraphs: [
      "Chanjeek and Jima are 7 year old twin brothers.",
      "They were brought to the orphanage in 2020 by a good Samaritan woman called Asunta. She found them eating from the dustbin in Konyokonyo street. When she asked their names and the whereabouts of their parents, they could only describe the sound of the gunshots.",
      "Asunta brought them to Nile Orphan Care in May 2020. NOC has not yet discovered the whereabouts of their parents and has categorized them as abandoned children. Chanjeek and Jima seem to hail from the Nuer ethnicity."
    ]
  },
  {
    name: 'Mapooch Yool',
    subtitle: 'Age 12',
    image: '/images/Mapooch-Yool.jpg',
    excerpt: "Mapooch Yool is a 12 year old boy, one of the children who was near death when the boat carrying his family capsized after an attack in 2016.",
    paragraphs: [
      "Mapooch Yool is a 12 year old boy, he is one of the children that was near death.",
      "His parents passed away when their boat capsized in 2016. The boat was attacked by rebels while traveling from Tony to Yirol. Mapooch accounted that his father was shot but he managed to swim with him to the river shore. He later said that his father slept and never woke up. When the SPLA rescue team later searched for survivors, he was found along with four other survivors.",
      "Mapooch was brought and reunited with the rest of his siblings in Tony. The worst day of his life was when he learned three days later that his mother had drowned and his father had succumbed to bullet wounds.",
      "Life later became difficult for them as there was no proper care for him and his four other siblings, and no one was paying their school fees. Mapooch was found in the streets of Juba in 2019."
    ]
  },
  {
    name: 'Nhial',
    subtitle: 'P5 · Dreams of joining the NOC staff',
    image: '/images/Nhial.jpg',
    excerpt: "Nhial is a 17 year old boy with war experience as a child fighter, who now acts as a big brother to the other orphans.",
    paragraphs: [
      "Nhial is a 17 year old boy; he is one of the children who has war experience as a child fighter.",
      "Nhial hails from Awerial County in Lakes State. He was engaged in the Agar and Aliab conflict. Nhial was influenced at the age of 14 and could handle an AK-47 rifle.",
      "Most of his family members were killed in these conflicts, including his mother and father. During the South Sudan National Dialogue in 2019, the youth were disarmed and as a result Nhial surrendered his gun.",
      "Then life became difficult. No one was paying for him to go to school, and all of their cattle were raided. He later went to the street in Rumbek and survived by stealing and collecting bottles for sale.",
      "In August 2020, Nhial was advised to come to Nile Orphan Care and receive a free education, by one of his relatives who is a hawker in the streets of Juba.",
      "Nhial is currently in P5 and is a very bright boy. The rest of his siblings are still in the village. Nhial is finally reformed and takes the responsibility of acting as a big brother to all the orphans, dreaming of working on the staff of NOC when he finishes his studies."
    ]
  },
  {
    name: 'Nyibol Thon',
    subtitle: 'Age 15',
    image: '/images/Nyibol-Thon.jpg',
    excerpt: "Nyibol Thon is a 15 year old girl who was sent away to protect her from the early and forced marriage that befell her sisters.",
    paragraphs: [
      "Nyibol Thon is a 15 year old girl.",
      "She hails from a family of six siblings in Lakes State. Nyibol lost her father at age six during the South Sudan civil war in 2013.",
      "Her mother was inherited by an uncle according to Dinka custom. Three of her older sisters were forced into marriage by relatives as teenagers between 2014 and 2017.",
      "Her mother protested this early and forced marriage of her children but was constantly abused by the relatives until she suffered an elbow fracture, which paralyzed her right arm. As a result of this disability, and the need to protect Nyibol and her other siblings from early marriage, she decided to send Nyibol to her elder sister's home in 2018.",
      "Life at her elder sister's home was terrible; she was constantly mistreated and bullied by the relatives of her sister's husband. She used to wash all the clothes and was often insulted and beaten. When the husband of her elder sister married a new wife, things began to change for the worst — there was insufficient food, constant quarrels between the co-wives, and Nyibol barely had clothes. She was brought to NOC in 2019 by her elder sister."
    ]
  },
  {
    name: 'Opiou',
    subtitle: 'P1 · Age 5',
    image: '/images/Opiou.jpg',
    excerpt: "Opiou is a 5 year old boy whose mother died at childbirth and whose father died before he was born.",
    paragraphs: [
      "Opiou is a 5 year old boy whose mother died at childbirth.",
      "Opiou never received love from his mother, and his father died before he was born.",
      "His grandmother took care of Opiou for a few months. Unfortunately, she had an accident and her left hand was amputated. His grandmother brought Opiou to NOC in 2018 when he was just eight months old.",
      "Opiou is now five years old and is in Primary One."
    ]
  },
  {
    name: 'Amer Ajak',
    subtitle: 'P8 · Devoted core member',
    image: '/images/Amer-Ajak.jpg',
    excerpt: "Amer Ajak is a 16 year old girl in Primary 8 who was brought to NOC after her mother resisted a forced marriage arranged for her.",
    paragraphs: [
      "Amer Ajak is a 16 year old girl in Primary 8. She is a devoted core member and loves to read the Bible every day.",
      "Amer's father died of cancer in 2012. Her mother was inherited by an uncle according to Dinka custom. The uncle already had three wives, which made it difficult for him to cater for the whole family. Her mother struggled, working in restaurants in order to support them.",
      "In 2018, the uncle decided that Amer and other girls would be taken to the village with the intent to force them into marriage. Amer's mother rejected this decision and was constantly beaten by the uncle. She later approached Rev. John Deng Ater during one of the Sundays and explained her situation.",
      "Amer was then brought to NOC. She happily studies at NOC and feels safe and protected from early and forced marriage."
    ]
  },
  {
    name: 'Ayen',
    subtitle: 'P7 · Leads her class every year',
    image: '/images/Ayen.jpg',
    excerpt: "Ayen is a 14 year old girl in Primary 7, one of the brightest girls in her class, who spent time on the street after her family's charcoal business collapsed.",
    paragraphs: [
      "Ayen is a 14 year old girl in Primary 7. She is one of the brightest girls, leading her class every year.",
      "Her father was a soldier who left the army due to economic crisis to support his family as a charcoal seller, but was sadly killed in the 2016 civil war.",
      "This affected Ayen and her two siblings; her widowed mother struggled to raise the children, cutting charcoal and selling firewood to get by. When the security situation deteriorated in 2018, the business failed and the family struggled to survive. This situation forced the then 10-year-old Ayen onto the street.",
      "She described the experience on the street as terrible — not enough food, no clothes, no shelter. Ayen was identified and brought to the orphanage in 2018 by volunteer Deng William.",
      "Ayen does not know the whereabouts of her mother and her other two siblings."
    ]
  },
  {
    name: 'Christine',
    subtitle: 'P3 · Dreams of becoming a teacher',
    image: '/images/Christine.jpg',
    excerpt: "Christine is a shy 10 year old girl whose family and past remain unknown, now learning to care for herself at NOC.",
    paragraphs: [
      "Christine is a shy 10 year old girl. The whereabouts of her parents remain unknown; she probably went to the street or was abandoned there at a very young age. There is no account from her about her parents or relatives.",
      "Christine underwent a terrible experience on the street, to the extent that she could not eat from a plate when given food. At NOC she has learned how to care for herself.",
      "Christine was brought to the orphanage in 2020 by one of the construction workers who was working at the school. In the care of NOC and God, Christine is now in P3 and happily studies.",
      "She hopes to become a teacher when she grows up."
    ]
  }
];

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

      {/* Children's Stories Section */}
      <section className="whatwedo-section fade-in">
        <div className="container">
          <div className="problem-header">
            <span className="problem-eyebrow">Their Stories</span>
            <h2 className="section-title">Every child in our care has a story like this.</h2>
            <p className="problem-intro">These are a few of the children Nile Orphan Care has welcomed in — where they came from, and how they're doing today.</p>
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
