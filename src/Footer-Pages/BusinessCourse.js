import React, { useState } from 'react';
import '../App.css';

const BusinessCourse = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: "Business Strategy Fundamentals",
      category: "strategy",
      duration: "8 weeks",
      level: "Beginner",
      price: "$299",
      rating: 4.8,
      students: 1250,
      instructor: "Sarah Johnson",
      image: "📊",
      features: ["Strategic Planning", "Market Analysis", "Competitive Advantage"]
    },
    {
      id: 2,
      title: "Digital Marketing Mastery",
      category: "marketing",
      duration: "6 weeks",
      level: "Intermediate",
      price: "$249",
      rating: 4.7,
      students: 890,
      instructor: "Mike Chen",
      image: "📱",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy"]
    },
    {
      id: 3,
      title: "Financial Management for Entrepreneurs",
      category: "finance",
      duration: "10 weeks",
      level: "Intermediate",
      price: "$349",
      rating: 4.9,
      students: 670,
      instructor: "Dr. Emily Roberts",
      image: "💰",
      features: ["Budgeting", "Financial Analysis", "Investment Strategies"]
    },
    {
      id: 4,
      title: "Leadership & Team Management",
      category: "leadership",
      duration: "7 weeks",
      level: "Advanced",
      price: "$399",
      rating: 4.8,
      students: 540,
      instructor: "James Wilson",
      image: "👥",
      features: ["Team Building", "Conflict Resolution", "Performance Management"]
    },
    {
      id: 5,
      title: "Startup Entrepreneurship",
      category: "entrepreneurship",
      duration: "12 weeks",
      level: "Beginner",
      price: "$449",
      rating: 4.6,
      students: 1200,
      instructor: "Lisa Patel",
      image: "🚀",
      features: ["Business Planning", "Funding Strategies", "Growth Hacking"]
    },
    {
      id: 6,
      title: "Data Analytics for Business",
      category: "analytics",
      duration: "9 weeks",
      level: "Intermediate",
      price: "$379",
      rating: 4.7,
      students: 780,
      instructor: "David Kim",
      image: "📈",
      features: ["Data Visualization", "KPIs", "Business Intelligence"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'strategy', name: 'Strategy' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'finance', name: 'Finance' },
    { id: 'leadership', name: 'Leadership' },
    { id: 'entrepreneurship', name: 'Entrepreneurship' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const instructors = [
    {
      name: "Sarah Johnson",
      role: "Business Strategist",
      experience: "15+ years",
      courses: 12,
      students: 5000
    },
    {
      name: "Mike Chen",
      role: "Digital Marketing Expert",
      experience: "10+ years",
      courses: 8,
      students: 3200
    },
    {
      name: "Dr. Emily Roberts",
      role: "Financial Advisor",
      experience: "20+ years",
      courses: 15,
      students: 6800
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="business-course">
      {/* Hero Section */}
      <section className="course-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Transform Your Business Career</h1>
            <p>Learn from industry experts and advance your business skills with our comprehensive courses</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Courses</p>
              </div>
              <div className="stat">
                <h3>10K+</h3>
                <p>Students</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Instructors</p>
              </div>
              <div className="stat">
                <h3>4.8/5</h3>
                <p>Average Rating</p>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="primary-btn">Browse Courses</button>
              <button className="secondary-btn">View Curriculum</button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="categories-section">
        <div className="container">
          <h2>Course Categories</h2>
          <div className="categories-filter">
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="container">
          <h2>Featured Courses</h2>
          <div className="courses-grid">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card">
                <div className="course-image">{course.image}</div>
                <div className="course-content">
                  <div className="course-category">{course.category}</div>
                  <h3>{course.title}</h3>
                  <p className="instructor">By {course.instructor}</p>
                  
                  <div className="course-meta">
                    <span className="duration">⏱️ {course.duration}</span>
                    <span className="level">🎯 {course.level}</span>
                  </div>

                  <div className="course-features">
                    {course.features.map((feature, index) => (
                      <span key={index} className="feature-tag">✓ {feature}</span>
                    ))}
                  </div>

                  <div className="course-footer">
                    <div className="rating">
                      <span className="stars">⭐ {course.rating}</span>
                      <span className="students">👥 {course.students}</span>
                    </div>
                    <div className="price">{course.price}</div>
                  </div>

                  <div className="course-actions">
                    <button className="enroll-btn">Enroll Now</button>
                    <button className="info-btn">Learn More</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="instructors-section">
        <div className="container">
          <h2>Meet Our Expert Instructors</h2>
          <div className="instructors-grid">
            {instructors.map((instructor, index) => (
              <div key={index} className="instructor-card">
                <div className="instructor-avatar">
                  {instructor.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3>{instructor.name}</h3>
                <p className="instructor-role">{instructor.role}</p>
                <div className="instructor-stats">
                  <div className="instructor-stat">
                    <strong>{instructor.experience}</strong>
                    <span>Experience</span>
                  </div>
                  <div className="instructor-stat">
                    <strong>{instructor.courses}</strong>
                    <span>Courses</span>
                  </div>
                  <div className="instructor-stat">
                    <strong>{instructor.students}</strong>
                    <span>Students</span>
                  </div>
                </div>
                <button className="view-profile-btn">View Profile</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2>Why Choose Our Business Courses?</h2>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <h3>Industry Experts</h3>
              <p>Learn from professionals with real-world business experience</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">💼</div>
              <h3>Practical Skills</h3>
              <p>Get hands-on experience with real business case studies</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <h3>Flexible Learning</h3>
              <p>Study at your own pace with online and offline options</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🏆</div>
              <h3>Certification</h3>
              <p>Earn recognized certificates to boost your career</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Business Journey Today</h2>
            <p>Join thousands of students who have transformed their careers with our business courses</p>
            <div className="cta-buttons">
              <button className="cta-primary">Get Started</button>
              <button className="cta-secondary">Schedule Consultation</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusinessCourse;