import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaFlask,
  FaAtom,
  FaDna,
  FaBrain,
  FaMountain,
  FaSeedling,
  FaMeteor,
  FaCheckCircle
} from 'react-icons/fa';
import '../App.css';

const Science = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const scienceCourses = [
    {
      id: 1,
      title: 'Introduction to Physics',
      description: 'Master fundamental physics concepts including mechanics, thermodynamics, and electromagnetism',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Sarah Wilson',
      rating: 4.8,
      students: 18700,
      duration: '36 hours',
      level: 'Beginner to Intermediate',
      price: 69.99,
      originalPrice: 149.99,
      category: 'physics',
      features: ['Lab Simulations', 'Problem Solving', 'Real-world Applications'],
      tags: ['Mechanics', 'Thermodynamics', 'Electromagnetism']
    },
    {
      id: 2,
      title: 'Organic Chemistry Fundamentals',
      description: 'Comprehensive course covering organic compounds, reactions, and molecular structures',
      image: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. Michael Chen',
      rating: 4.7,
      students: 14200,
      duration: '42 hours',
      level: 'Intermediate',
      price: 79.99,
      originalPrice: 169.99,
      category: 'chemistry',
      features: ['3D Molecular Models', 'Reaction Mechanisms', 'Laboratory Techniques'],
      tags: ['Organic Compounds', 'Reactions', 'Molecular Structure']
    },
    {
      id: 3,
      title: 'Genetics and Molecular Biology',
      description: 'Explore DNA, RNA, protein synthesis, and genetic engineering techniques',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Emily Rodriguez',
      rating: 4.9,
      students: 11800,
      duration: '38 hours',
      level: 'Intermediate to Advanced',
      price: 84.99,
      originalPrice: 179.99,
      category: 'biology',
      features: ['DNA Sequencing', 'Genetic Engineering', 'Bioinformatics'],
      tags: ['Genetics', 'Molecular Biology', 'DNA', 'RNA']
    },
    {
      id: 4,
      title: 'Astronomy and Astrophysics',
      description: 'Journey through the cosmos exploring planets, stars, galaxies, and the universe',
      image: 'https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. David Kim',
      rating: 4.8,
      students: 9600,
      duration: '32 hours',
      level: 'Beginner to Advanced',
      price: 74.99,
      originalPrice: 159.99,
      category: 'astronomy',
      features: ['Telescope Simulations', 'Space Missions', 'Cosmology'],
      tags: ['Astronomy', 'Astrophysics', 'Cosmology', 'Space']
    },
    {
      id: 5,
      title: 'Environmental Science',
      description: 'Study ecosystems, climate change, conservation, and sustainable development',
      image: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Lisa Thompson',
      rating: 4.6,
      students: 8900,
      duration: '28 hours',
      level: 'Beginner to Intermediate',
      price: 64.99,
      originalPrice: 139.99,
      category: 'environmental',
      features: ['Field Studies', 'Climate Analysis', 'Sustainability Projects'],
      tags: ['Ecology', 'Climate Change', 'Conservation']
    },
    {
      id: 6,
      title: 'Neuroscience and Brain Science',
      description: 'Understand the nervous system, brain functions, and cognitive processes',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. James Anderson',
      rating: 4.7,
      students: 7500,
      duration: '34 hours',
      level: 'Intermediate to Advanced',
      price: 79.99,
      originalPrice: 169.99,
      category: 'neuroscience',
      features: ['Brain Imaging', 'Cognitive Studies', 'Neurological Disorders'],
      tags: ['Neuroscience', 'Brain', 'Cognitive Science']
    },
    {
      id: 7,
      title: 'Geology and Earth Sciences',
      description: 'Explore Earth\'s structure, minerals, rocks, and geological processes',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. Robert Williams',
      rating: 4.5,
      students: 6800,
      duration: '30 hours',
      level: 'Beginner to Intermediate',
      price: 59.99,
      originalPrice: 129.99,
      category: 'geology',
      features: ['Mineral Identification', 'Field Geology', 'Plate Tectonics'],
      tags: ['Geology', 'Earth Science', 'Minerals', 'Rocks']
    },
    {
      id: 8,
      title: 'Biotechnology and Bioengineering',
      description: 'Learn about genetic engineering, bioprocessing, and medical applications',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Maria Garcia',
      rating: 4.8,
      students: 8200,
      duration: '40 hours',
      level: 'Advanced',
      price: 89.99,
      originalPrice: 189.99,
      category: 'biotechnology',
      features: ['Lab Techniques', 'Genetic Engineering', 'Industry Applications'],
      tags: ['Biotechnology', 'Bioengineering', 'Genetic Engineering']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Science Courses', icon: <FaFlask />, count: scienceCourses.length },
    { id: 'physics', name: 'Physics', icon: <FaAtom />, count: scienceCourses.filter(c => c.category === 'physics').length },
    { id: 'chemistry', name: 'Chemistry', icon: <FaFlask />, count: scienceCourses.filter(c => c.category === 'chemistry').length },
    { id: 'biology', name: 'Biology', icon: <FaDna />, count: scienceCourses.filter(c => c.category === 'biology').length },
    { id: 'astronomy', name: 'Astronomy', icon: <FaMeteor />, count: scienceCourses.filter(c => c.category === 'astronomy').length },
    { id: 'environmental', name: 'Environmental', icon: <FaSeedling />, count: scienceCourses.filter(c => c.category === 'environmental').length },
    { id: 'neuroscience', name: 'Neuroscience', icon: <FaBrain />, count: scienceCourses.filter(c => c.category === 'neuroscience').length },
    { id: 'geology', name: 'Geology', icon: <FaMountain />, count: scienceCourses.filter(c => c.category === 'geology').length },
    { id: 'biotechnology', name: 'Biotechnology', icon: <FaDna />, count: scienceCourses.filter(c => c.category === 'biotechnology').length }
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredCourses = scienceCourses
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
    <div className="science-page">
      
      {/* Hero Section */}
      <section className="science-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Science Courses</h1>
            <p className="hero-subtitle">
              Explore the wonders of the natural world through our comprehensive science courses. 
              From physics to biology, discover the principles that shape our universe.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">Science Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">85K+</div>
                <div className="stat-label">Students Enrolled</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.7/5</div>
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
                placeholder="Search science courses by title, description, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Discipline:
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
            <h2>Explore Science Disciplines</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {scienceCourses.length} courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <FaFlask className="no-courses-icon" />
              <h3>No courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-category">{course.category}</div>
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
      <section className="science-features">
        <div className="container">
          <div className="features-header">
            <h2>Why Study Science with Us?</h2>
            <p>Our science courses are designed to provide comprehensive learning experiences</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <FaFlask className="feature-icon" />
              <h3>Hands-on Experiments</h3>
              <p>Virtual labs and simulations for practical learning</p>
            </div>
            <div className="feature-card">
              <FaAtom className="feature-icon" />
              <h3>Expert Instructors</h3>
              <p>Learn from PhDs and industry professionals</p>
            </div>
            <div className="feature-card">
              <FaDna className="feature-icon" />
              <h3>Latest Research</h3>
              <p>Content updated with current scientific discoveries</p>
            </div>
            <div className="feature-card">
              <FaBrain className="feature-icon" />
              <h3>Interactive Content</h3>
              <p>Engaging videos, animations, and 3D models</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="science-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Scientific Journey Today</h2>
            <p>
              Join thousands of curious minds exploring the mysteries of the universe. 
              Whether you're preparing for a career in STEM or pursuing personal interest, 
              we have the perfect science course for you.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse All Courses</button>
              <button className="btn btn-outline-light">Get Science Career Guide</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Science;