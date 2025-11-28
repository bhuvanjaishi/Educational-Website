import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaCalculator,
  FaChartLine,
  FaShapes,
  FaInfinity,
  FaCode,
  FaBrain,
  FaCheckCircle
} from 'react-icons/fa';
import '../App.css';

const Mathematics = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const mathematicsCourses = [
    {
      id: 1,
      title: 'Calculus I: Differential Calculus',
      description: 'Master limits, derivatives, and applications of differentiation with real-world problems',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Sarah Wilson',
      rating: 4.8,
      students: 23400,
      duration: '42 hours',
      level: 'Beginner to Intermediate',
      price: 79.99,
      originalPrice: 169.99,
      category: 'calculus',
      features: ['Step-by-step Solutions', 'Real Applications', 'Practice Problems'],
      tags: ['Limits', 'Derivatives', 'Differentiation', 'Applications']
    },
    {
      id: 2,
      title: 'Linear Algebra Fundamentals',
      description: 'Comprehensive course covering vectors, matrices, linear transformations, and eigenvalues',
      image: 'https://images.unsplash.com/photo-1636466497217-26a8c3af2ac4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. Michael Chen',
      rating: 4.7,
      students: 18700,
      duration: '38 hours',
      level: 'Intermediate',
      price: 74.99,
      originalPrice: 159.99,
      category: 'algebra',
      features: ['Vector Spaces', 'Matrix Operations', 'Eigenvalues', 'Applications'],
      tags: ['Vectors', 'Matrices', 'Linear Transformations', 'Eigenvalues']
    },
    {
      id: 3,
      title: 'Probability and Statistics',
      description: 'Learn probability theory, statistical inference, data analysis, and hypothesis testing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.9,
      students: 21500,
      duration: '45 hours',
      level: 'Beginner to Advanced',
      price: 84.99,
      originalPrice: 179.99,
      category: 'statistics',
      features: ['Probability Theory', 'Statistical Inference', 'Data Analysis', 'Hypothesis Testing'],
      tags: ['Probability', 'Statistics', 'Data Analysis', 'Inference']
    },
    {
      id: 4,
      title: 'Discrete Mathematics',
      description: 'Explore logic, set theory, combinatorics, graph theory, and mathematical proofs',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. David Kim',
      rating: 4.6,
      students: 12800,
      duration: '36 hours',
      level: 'Intermediate',
      price: 69.99,
      originalPrice: 149.99,
      category: 'discrete',
      features: ['Mathematical Logic', 'Set Theory', 'Combinatorics', 'Graph Theory'],
      tags: ['Logic', 'Set Theory', 'Combinatorics', 'Graph Theory']
    },
    {
      id: 5,
      title: 'Differential Equations',
      description: 'Solve ordinary and partial differential equations with engineering applications',
      image: 'https://images.unsplash.com/photo-1596496050827-82984c2c1a57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Lisa Thompson',
      rating: 4.7,
      students: 15600,
      duration: '40 hours',
      level: 'Intermediate to Advanced',
      price: 79.99,
      originalPrice: 169.99,
      category: 'differential-equations',
      features: ['ODE Solutions', 'PDE Methods', 'Engineering Applications', 'Numerical Methods'],
      tags: ['ODE', 'PDE', 'Engineering Math', 'Numerical Methods']
    },
    {
      id: 6,
      title: 'Number Theory and Cryptography',
      description: 'Explore prime numbers, modular arithmetic, and applications in modern cryptography',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. James Anderson',
      rating: 4.8,
      students: 9800,
      duration: '32 hours',
      level: 'Advanced',
      price: 89.99,
      originalPrice: 189.99,
      category: 'number-theory',
      features: ['Prime Numbers', 'Modular Arithmetic', 'Cryptographic Protocols', 'RSA Algorithm'],
      tags: ['Number Theory', 'Cryptography', 'Prime Numbers', 'RSA']
    },
    {
      id: 7,
      title: 'Mathematical Modeling',
      description: 'Learn to create and analyze mathematical models for real-world phenomena',
      image: 'https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. Robert Williams',
      rating: 4.5,
      students: 11200,
      duration: '34 hours',
      level: 'Intermediate to Advanced',
      price: 74.99,
      originalPrice: 159.99,
      category: 'modeling',
      features: ['Model Development', 'Simulation Techniques', 'Optimization', 'Real-world Applications'],
      tags: ['Mathematical Modeling', 'Simulation', 'Optimization', 'Applications']
    },
    {
      id: 8,
      title: 'Advanced Calculus: Multivariable',
      description: 'Master multivariable calculus, partial derivatives, multiple integrals, and vector calculus',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Maria Garcia',
      rating: 4.8,
      students: 14200,
      duration: '48 hours',
      level: 'Advanced',
      price: 89.99,
      originalPrice: 199.99,
      category: 'calculus',
      features: ['Multivariable Functions', 'Partial Derivatives', 'Multiple Integrals', 'Vector Calculus'],
      tags: ['Multivariable Calculus', 'Partial Derivatives', 'Vector Calculus', 'Integrals']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Mathematics', icon: <FaCalculator />, count: mathematicsCourses.length },
    { id: 'calculus', name: 'Calculus', icon: <FaChartLine />, count: mathematicsCourses.filter(c => c.category === 'calculus').length },
    { id: 'algebra', name: 'Algebra', icon: <FaInfinity />, count: mathematicsCourses.filter(c => c.category === 'algebra').length },
    { id: 'statistics', name: 'Statistics', icon: <FaChartLine />, count: mathematicsCourses.filter(c => c.category === 'statistics').length },
    { id: 'discrete', name: 'Discrete Math', icon: <FaShapes />, count: mathematicsCourses.filter(c => c.category === 'discrete').length },
    { id: 'differential-equations', name: 'Differential Equations', icon: <FaCode />, count: mathematicsCourses.filter(c => c.category === 'differential-equations').length },
    { id: 'number-theory', name: 'Number Theory', icon: <FaBrain />, count: mathematicsCourses.filter(c => c.category === 'number-theory').length },
    { id: 'modeling', name: 'Mathematical Modeling', icon: <FaCalculator />, count: mathematicsCourses.filter(c => c.category === 'modeling').length }
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = mathematicsCourses
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
    <div className="mathematics-page">
      
      {/* Hero Section */}
      <section className="mathematics-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Mathematics Courses</h1>
            <p className="hero-subtitle">
              Master mathematical concepts from basic arithmetic to advanced theories. 
              Develop problem-solving skills and logical thinking with our comprehensive courses.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">35+</div>
                <div className="stat-label">Math Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">120K+</div>
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
                placeholder="Search math courses by title, topic, or concept..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Branch:
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
            <h2>Explore Mathematical Disciplines</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {mathematicsCourses.length} courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <FaCalculator className="no-courses-icon" />
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

      {/* Features Section */}
      <section className="mathematics-features">
        <div className="container">
          <div className="features-header">
            <h2>Why Study Mathematics with Us?</h2>
            <p>Our mathematics courses are designed to build strong foundational skills and advanced problem-solving abilities</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <FaCalculator className="feature-icon" />
              <h3>Step-by-Step Solutions</h3>
              <p>Detailed explanations for every problem and concept</p>
            </div>
            <div className="feature-card">
              <FaBrain className="feature-icon" />
              <h3>Expert Instructors</h3>
              <p>Learn from PhD mathematicians and experienced educators</p>
            </div>
            <div className="feature-card">
              <FaChartLine className="feature-icon" />
              <h3>Real Applications</h3>
              <p>Connect mathematical concepts to real-world problems</p>
            </div>
            <div className="feature-card">
              <FaInfinity className="feature-icon" />
              <h3>Comprehensive Curriculum</h3>
              <p>From basic arithmetic to advanced mathematical theories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mathematics-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Master Mathematics Today</h2>
            <p>
              Join thousands of students building strong mathematical foundations. 
              Whether you're preparing for exams, advancing your career, or pursuing personal interest, 
              our courses will help you achieve your goals.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse All Courses</button>
              <button className="btn btn-outline-light">Get Math Placement Test</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Mathematics;