import React from 'react';
import { 
  FaPlay, 
  FaStar, 
  FaUsers, 
  FaGraduationCap, 
  FaBook, 
  FaChalkboardTeacher,
  FaLaptopCode,
  FaShieldAlt,
  FaRocket,
  FaBookOpen,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';

import '../App.css';

const Home = () => {
  return (
    <div id="home-page">

      {/* ---------------- HERO SECTION ---------------- */}
      <section id="hero">
        <div id="hero-container">
          <div id="hero-left">
            <div id="hero-badge">
              <span>🎓 #1 Learning Platform</span>
            </div>

            <h1 id="hero-title">
              Learn From The 
              <span className="highlight"> Best Educators </span> 
              Worldwide!
            </h1>

            <p id="hero-text">
              Join over 2 million students advancing their careers with our expert-led courses. 
              Gain practical skills, earn certificates, and transform your future today.
            </p>

            <div id="hero-buttons">
              <button className="btn-primary">
                Explore Courses <FaArrowRight className="btn-icon" />
              </button>

              <button className="btn-secondary">
                <FaPlay className="btn-icon" /> Watch Demo
              </button>
            </div>

            <div id="hero-stats">
              <div className="stat-box">
                <h3>500+</h3>
                <p>Expert Courses</p>
              </div>

              <div className="stat-box">
                <h3>2M+</h3>
                <p>Happy Students</p>
              </div>

              <div className="stat-box">
                <h3>50+</h3>
                <p>Countries</p>
              </div>
            </div>
          </div>

          <div id="hero-right">
            <div className="floating-card fc-1">
              <FaGraduationCap className="fc-icon" />
              <div>
                <h4>Graduation</h4>
                <p>2024 Batch</p>
              </div>
            </div>

            <div className="floating-card fc-2">
              <FaStar className="fc-icon" />
              <div>
                <h4>4.9/5</h4>
                <p>Rating</p>
              </div>
            </div>

            <div className="floating-card fc-3">
              <FaUsers className="fc-icon" />
              <div>
                <h4>2M+</h4>
                <p>Students</p>
              </div>
            </div>

            <div id="hero-main-img">
              <img 
                src="https://images.stockcake.com/public/2/5/a/25ae1118-a9d8-43e1-8819-9e1a951cd76a_large/students-learning-coding-stockcake.jpg" 
                alt="Students"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FEATURES SECTION ---------------- */}
      <section id="features">
        <div className="section-header">
          <h2>Why Choose EduMaster?</h2>
          <p>We are trusted by millions of learners worldwide</p>
        </div>

        <div id="features-grid">
          <div className="feature-card">
            <FaChalkboardTeacher className="feature-icon" />
            <h3>Expert Instructors</h3>
            <p>Learn from industry professionals</p>
          </div>

          <div className="feature-card">
            <FaLaptopCode className="feature-icon" />
            <h3>Hands-on Projects</h3>
            <p>Practical real-world assignments</p>
          </div>

          <div className="feature-card">
            <FaShieldAlt className="feature-icon" />
            <h3>Lifetime Access</h3>
            <p>Access courses anytime</p>
          </div>

          <div className="feature-card">
            <FaRocket className="feature-icon" />
            <h3>Career Support</h3>
            <p>Resume + job assistance</p>
          </div>

          <div className="feature-card">
            <FaBookOpen className="feature-icon" />
            <h3>Comprehensive Materials</h3>
            <p>Wide range of resources</p>
          </div>

          
        </div>
      </section>

      {/* ---------------- POPULAR COURSES ---------------- */}
      <section id="courses">
        <div className="section-header">
          <h2>Popular Courses</h2>
          <p>Browse our most enrolled courses</p>
        </div>

        <div id="courses-grid">

          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c" 
              alt=""
            />
            <h3>Full Web Development Bootcamp</h3>
            <p>HTML, CSS, JS, React & Node</p>
            <button className="course-btn">Enroll Now</button>
          </div>

          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1555949963-aa79dcee981c" 
              alt=""
            />
            <h3>Data Science & Machine Learning</h3>
            <p>Python, pandas, TensorFlow</p>
            <button className="course-btn">Enroll Now</button>
          </div>

          <div className="course-card">
            <img 
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769" 
              alt=""
            />
            <h3>React Native Development</h3>
            <p>Build mobile apps</p>
            <button className="course-btn">Enroll Now</button>
          </div>

        </div>

        <div id="courses-cta">
          <button className="btn-outline">
            View All Courses <FaArrowRight />
          </button>
        </div>
      </section>

      {/* ---------------- CTA SECTION ---------------- */}
      <section id="cta">
        <h2>Ready to Start Learning?</h2>
        <p>Join thousands of learners transforming their careers</p>

        <div id="cta-buttons">
          <button className="btn-light">Get Started</button>
          <button className="btn-outline-light">Schedule a Demo</button>
        </div>
      </section>

    </div>
  );
};

export default Home;
