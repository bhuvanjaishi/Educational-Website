import React from 'react';
import { 
  FaGraduationCap, 
  FaUsers, 
  FaTrophy, 
  FaGlobeAmericas,
  FaHeart,
  FaRocket,
  FaQuoteLeft,
  FaCheckCircle,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import '../App.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVSmV8wuCtCi3PrYX6Ddf-iEKjTIIgf4EEHA&s',
      bio: 'Former Stanford Professor with 15+ years in education technology',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Chief Learning Officer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      bio: 'Education innovator with expertise in curriculum development',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Head of Instructors',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      bio: 'Passionate about creating engaging learning experiences',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'Technology Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      bio: 'Tech enthusiast focused on building scalable learning platforms',
      social: { linkedin: '#', twitter: '#' }
    }
  ];
<br/>
  const milestones = [
    { year: '2018', event: 'EduMaster Founded', description: 'Started with a vision to democratize education' },
    { year: '2019', event: 'First 10,000 Students', description: 'Reached our first major milestone' },
    { year: '2020', event: 'Global Expansion', description: 'Expanded to 50+ countries worldwide' },
    { year: '2021', event: '2M Students', description: 'Celebrated 2 million enrolled students' },
    { year: '2022', event: 'Award Winning', description: 'Received "Best EdTech Platform" award' },
    { year: '2023', event: 'AI Integration', description: 'Launched AI-powered learning assistant' }
  ];

  const values = [
    { icon: <FaGraduationCap />, title: 'Excellence in Education', description: 'We maintain the highest standards in course content and delivery' },
    { icon: <FaUsers />, title: 'Student First', description: 'Every decision we make puts our students learning experience first' },
    { icon: <FaHeart />, title: 'Passion for Learning', description: 'Learning should be engaging and transformative' },
    { icon: <FaGlobeAmericas />, title: 'Global Community', description: 'Building a diverse, inclusive learning community' },
   
    { icon: <FaRocket />, title: 'Innovation', description: 'Constantly evolving with latest educational technologies' },
    { icon: <FaTrophy />, title: 'Quality', description: 'Delivering exceptional quality in everything we do' },
    { icon: <FaQuoteLeft />, title: 'Integrity', description: 'Honesty and transparency in all our actions' },
    { icon: <FaCheckCircle />, title: 'Reliability', description: 'Consistent and trustworthy support' }
  ];

  return (
    <div id="about-page">
      {/* Hero */}
      <section id="about-hero">
        <div id="hero-container">
          <h1>About EduMaster</h1>
          <p>Empowering millions of learners worldwide to achieve their dreams through accessible, high-quality education.</p>
        </div>
      </section>

      {/* Story */}
      <section id="about-story">
        <div id="story-container">
          <div id="story-content">
            <h2>Our Story</h2>
            <p>Founded in 2018 by Dr. Sarah Johnson, EduMaster began as a passion project to make quality education accessible globally. Today, we have over 2 million learners worldwide.</p>
            <div id="story-stats">
              <div className="stat-item"><div>2M+</div><div>Students</div></div>
              <div className="stat-item"><div>500+</div><div>Courses</div></div>
              <div className="stat-item"><div>50+</div><div>Countries</div></div>
            </div>
          </div>
          <div id="story-image">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our story"/>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="about-mv">
        <div id="mv-container">
          <div id="mission-card">
            <FaRocket id="mv-icon"/>
            <h3>Our Mission</h3>
            <p>Provide accessible, affordable, high-quality learning opportunities globally.</p>
          </div>
          <div id="vision-card">
            <FaGlobeAmericas id="mv-icon"/>
            <h3>Our Vision</h3>
            <p>A world where everyone has access to the education they need to reach full potential.</p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="about-values">
        <div id="values-container">
          {values.map((v,i)=>(
            <div key={i} className="value-card">
              <div className="value-icon">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section id="about-timeline">
        <div id="timeline-container">
          {milestones.map((m,i)=>(
            <div key={i} className={`timeline-item ${i%2===0?'left':'right'}`}>
              <div className="timeline-content">
                <div className="timeline-year">{m.year}</div>
                <h4>{m.event}</h4>
                <p>{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="about-team">
        <div id="team-container">
          {teamMembers.map(t=>(
            <div key={t.id} className="team-card">
              <div className="team-image">
                <img src={t.image} alt={t.name}/>
                <div className="team-social">
                  <a href={t.social.linkedin}><FaLinkedin /></a>
                  <a href={t.social.twitter}><FaTwitter /></a>
                </div>
              </div>
              <div className="team-info">
                <h4>{t.name}</h4>
                <p>{t.role}</p>
                <p>{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="about-cta">
        <div id="cta-container">
          <h2>Join Our Learning Revolution</h2>
          <p>Be part of a global community dedicated to lifelong learning and personal growth.</p>
          <div id="cta-buttons">
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
