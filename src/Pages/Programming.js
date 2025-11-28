import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaCode,
  FaLaptopCode,
  FaMobile,
  FaDatabase,
  FaGamepad,
  FaShieldAlt,
  FaCloud,
  FaCheckCircle
} from 'react-icons/fa';
import '../App.css';

const Programming = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const programmingCourses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, Node.js and build real projects',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 25450,
      duration: '42 hours',
      level: 'Beginner to Advanced',
      price: 89.99,
      originalPrice: 199.99,
      category: 'web-development',
      features: ['50+ Projects', 'Lifetime Access', 'Certificate'],
      tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']
    },
    {
      id: 2,
      title: 'Python Programming Masterclass',
      description: 'Learn Python from scratch to advanced level with real-world applications',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Michael Chen',
      rating: 4.8,
      students: 18700,
      duration: '36 hours',
      level: 'Beginner to Advanced',
      price: 79.99,
      originalPrice: 179.99,
      category: 'python',
      features: ['Data Science', 'Web Development', 'Automation'],
      tags: ['Python', 'Django', 'Flask', 'Data Analysis']
    },
    {
      id: 3,
      title: 'React Native Mobile Development',
      description: 'Build cross-platform mobile apps for iOS and Android using React Native',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Emily Rodriguez',
      rating: 4.7,
      students: 15600,
      duration: '28 hours',
      level: 'Intermediate',
      price: 74.99,
      originalPrice: 169.99,
      category: 'mobile',
      features: ['iOS & Android', 'Real Projects', 'App Store Deployment'],
      tags: ['React Native', 'JavaScript', 'Mobile Development']
    },
    {
      id: 4,
      title: 'Data Science & Machine Learning',
      description: 'Master data science, machine learning, and AI with Python and TensorFlow',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'David Kim',
      rating: 4.9,
      students: 11200,
      duration: '48 hours',
      level: 'Intermediate to Advanced',
      price: 94.99,
      originalPrice: 219.99,
      category: 'data-science',
      features: ['ML Algorithms', 'Deep Learning', 'Real Datasets'],
      tags: ['Python', 'TensorFlow', 'Machine Learning', 'AI']
    },
    {
      id: 5,
      title: 'Java Programming Complete Course',
      description: 'Learn Java programming, Spring Boot, and enterprise application development',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Robert Wilson',
      rating: 4.6,
      students: 9800,
      duration: '34 hours',
      level: 'Beginner to Advanced',
      price: 69.99,
      originalPrice: 159.99,
      category: 'java',
      features: ['Spring Boot', 'REST APIs', 'Enterprise Apps'],
      tags: ['Java', 'Spring Boot', 'Microservices']
    },
    {
      id: 6,
      title: 'Full Stack JavaScript Development',
      description: 'Become a full-stack developer with MERN stack (MongoDB, Express, React, Node)',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Lisa Thompson',
      rating: 4.8,
      students: 13200,
      duration: '38 hours',
      level: 'Intermediate',
      price: 84.99,
      originalPrice: 189.99,
      category: 'web-development',
      features: ['MERN Stack', 'Real Projects', 'Deployment'],
      tags: ['JavaScript', 'React', 'Node.js', 'MongoDB']
    },
    {
      id: 7,
      title: 'iOS App Development with Swift',
      description: 'Build professional iOS apps using Swift and SwiftUI for Apple ecosystem',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'James Anderson',
      rating: 4.7,
      students: 8700,
      duration: '32 hours',
      level: 'Beginner to Advanced',
      price: 79.99,
      originalPrice: 179.99,
      category: 'mobile',
      features: ['SwiftUI', 'App Store', 'ARKit'],
      tags: ['Swift', 'iOS', 'Mobile Development']
    },
    {
      id: 8,
      title: 'Cybersecurity & Ethical Hacking',
      description: 'Learn cybersecurity fundamentals, ethical hacking, and network security',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Maria Garcia',
      rating: 4.9,
      students: 6400,
      duration: '40 hours',
      level: 'Intermediate to Advanced',
      price: 89.99,
      originalPrice: 199.99,
      category: 'cybersecurity',
      features: ['Ethical Hacking', 'Network Security', 'Certification'],
      tags: ['Security', 'Ethical Hacking', 'Networking']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', icon: <FaCode />, count: programmingCourses.length },
    { id: 'web-development', name: 'Web Development', icon: <FaLaptopCode />, count: programmingCourses.filter(c => c.category === 'web-development').length },
    { id: 'python', name: 'Python', icon: <FaCode />, count: programmingCourses.filter(c => c.category === 'python').length },
    { id: 'mobile', name: 'Mobile Development', icon: <FaMobile />, count: programmingCourses.filter(c => c.category === 'mobile').length },
    { id: 'data-science', name: 'Data Science', icon: <FaDatabase />, count: programmingCourses.filter(c => c.category === 'data-science').length },
    { id: 'java', name: 'Java', icon: <FaCode />, count: programmingCourses.filter(c => c.category === 'java').length },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: <FaShieldAlt />, count: programmingCourses.filter(c => c.category === 'cybersecurity').length }
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = programmingCourses
    .filter(course => {
      const matchesCategory = activeFilter === 'all' || course.category === activeFilter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.students - a.students;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'newest':
          return b.id - a.id;
        default:
          return 0;
      }
    });

  return (
    <div className="programming-page">
      
      {/* Hero Section */}
      <section className="programming-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Programming Courses</h1>
            <p className="hero-subtitle">
              Master in-demand programming skills with our expert-led courses. 
              From beginner to advanced levels, start your coding journey today.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Programming Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">100K+</div>
                <div className="stat-label">Students Enrolled</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search courses by title, description, or technology..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Category:
                </div>
                <div className="category-buttons">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeFilter === category.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(category.id)}
                    >
                      <span className="category-icon">{category.icon}</span>
                      {category.name}
                      <span className="category-count">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="sort-controls">
                <label htmlFor="sort" className="sort-label">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="popular">Most Popular</option>
                  <option value="rating">Highest Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="courses-section">
        <div className="container">
          <div className="courses-header">
            <h2>Available Programming Courses</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {programmingCourses.length} courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <FaCode className="no-courses-icon" />
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-category">{course.category.replace('-', ' ')}</div>
                    <div className="course-level">{course.level.split(' ')[0]}</div>
                  </div>
                  
                  <div className="course-content">
                    <h3 className="course-title">{course.title}</h3>
                    <p className="course-description">{course.description}</p>
                    
                    <div className="course-instructor">
                      <span>By {course.instructor}</span>
                    </div>

                    <div className="course-rating">
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <FaStar 
                            key={i} 
                            className={`star ${i < Math.floor(course.rating) ? 'filled' : ''}`}
                          />
                        ))}
                      </div>
                      <span className="rating-value">{course.rating}</span>
                      <span className="rating-count">({(course.students / 1000).toFixed(1)}k)</span>
                    </div>

                    <div className="course-meta">
                      <div className="meta-item">
                        <FaUsers className="meta-icon" />
                        <span>{course.students.toLocaleString()}+ students</span>
                      </div>
                      <div className="meta-item">
                        <FaClock className="meta-icon" />
                        <span>{course.duration}</span>
                      </div>
                    </div>

                    <div className="course-tags">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="course-features">
                      {course.features.map((feature, index) => (
                        <div key={index} className="feature">
                          <FaCheckCircle className="feature-icon" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="course-footer">
                      <div className="course-pricing">
                        <span className="current-price">${course.price}</span>
                        <span className="original-price">${course.originalPrice}</span>
                        <span className="discount">
                          {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                        </span>
                      </div>
                      <div className="course-actions">
                        <button className="btn btn-primary">
                          <FaPlay className="btn-icon" />
                          Enroll Now
                        </button>
                        <button className="btn btn-outline">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="programming-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Programming Journey Today</h2>
            <p>
              Join thousands of students who have transformed their careers through programming. 
              Whether you're starting from scratch or advancing your skills, we have the perfect course for you.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse All Courses</button>
              <button className="btn btn-outline-light">Get Career Advice</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programming;