import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaGlobe,
  FaComments,
  FaBrain,
  FaBook,
  FaMicrophone,
  FaFlag,
  FaCheckCircle
} from 'react-icons/fa';
import '../App.css';

const Languages = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const languageCourses = [
    {
      id: 1,
      title: 'Spanish for Beginners',
      description: 'Learn basic Spanish vocabulary, grammar, and conversation skills for everyday communication',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Maria Rodriguez',
      rating: 4.8,
      students: 32400,
      duration: '36 hours',
      level: 'Beginner',
      price: 59.99,
      originalPrice: 129.99,
      category: 'spanish',
      features: ['Basic Conversations', 'Vocabulary Building', 'Pronunciation Practice'],
      tags: ['Spanish', 'Beginner', 'Conversation', 'Vocabulary'],
      difficulty: 'Easy'
    },
    {
      id: 2,
      title: 'French Language Mastery',
      description: 'Comprehensive French course covering grammar, conversation, and cultural insights',
      image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Pierre Dubois',
      rating: 4.7,
      students: 28700,
      duration: '42 hours',
      level: 'Beginner to Intermediate',
      price: 69.99,
      originalPrice: 149.99,
      category: 'french',
      features: ['Grammar Mastery', 'Cultural Context', 'Speaking Practice'],
      tags: ['French', 'Grammar', 'Culture', 'Speaking'],
      difficulty: 'Medium'
    },
    {
      id: 3,
      title: 'German Complete Course',
      description: 'Master German grammar, vocabulary, and conversation skills from beginner to advanced',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Anna Schmidt',
      rating: 4.6,
      students: 19800,
      duration: '48 hours',
      level: 'Beginner to Advanced',
      price: 74.99,
      originalPrice: 159.99,
      category: 'german',
      features: ['Case System', 'Sentence Structure', 'Advanced Vocabulary'],
      tags: ['German', 'Grammar', 'Vocabulary', 'Advanced'],
      difficulty: 'Hard'
    },
    {
      id: 4,
      title: 'Japanese for Travelers',
      description: 'Essential Japanese phrases and cultural tips for travelers and business professionals',
      image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Yuki Tanaka',
      rating: 4.9,
      students: 25600,
      duration: '28 hours',
      level: 'Beginner',
      price: 54.99,
      originalPrice: 119.99,
      category: 'japanese',
      features: ['Travel Phrases', 'Cultural Etiquette', 'Basic Kanji'],
      tags: ['Japanese', 'Travel', 'Culture', 'Beginner'],
      difficulty: 'Medium'
    },
    {
      id: 5,
      title: 'Mandarin Chinese Fundamentals',
      description: 'Learn Mandarin Chinese with focus on tones, characters, and practical conversation',
      image: 'https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Wei Chen',
      rating: 4.7,
      students: 18700,
      duration: '52 hours',
      level: 'Beginner to Intermediate',
      price: 79.99,
      originalPrice: 169.99,
      category: 'mandarin',
      features: ['Tone Practice', 'Character Writing', 'Practical Dialogues'],
      tags: ['Mandarin', 'Chinese', 'Tones', 'Characters'],
      difficulty: 'Hard'
    },
    {
      id: 6,
      title: 'Italian Language and Culture',
      description: 'Learn Italian while exploring the rich culture, history, and traditions of Italy',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Giovanni Rossi',
      rating: 4.8,
      students: 16800,
      duration: '34 hours',
      level: 'Beginner to Intermediate',
      price: 64.99,
      originalPrice: 139.99,
      category: 'italian',
      features: ['Cultural Insights', 'Pronunciation', 'Everyday Italian'],
      tags: ['Italian', 'Culture', 'Conversation', 'Beginner'],
      difficulty: 'Easy'
    },
    {
      id: 7,
      title: 'Arabic for Business',
      description: 'Professional Arabic language skills for business communication and negotiations',
      image: 'https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Omar Al-Farsi',
      rating: 4.5,
      students: 11200,
      duration: '40 hours',
      level: 'Intermediate to Advanced',
      price: 84.99,
      originalPrice: 179.99,
      category: 'arabic',
      features: ['Business Vocabulary', 'Formal Communication', 'Cultural Nuances'],
      tags: ['Arabic', 'Business', 'Professional', 'Advanced'],
      difficulty: 'Hard'
    },
    {
      id: 8,
      title: 'Portuguese Conversation',
      description: 'Focus on speaking and listening skills for Brazilian and European Portuguese',
      image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Carlos Silva',
      rating: 4.6,
      students: 14300,
      duration: '32 hours',
      level: 'Beginner to Intermediate',
      price: 59.99,
      originalPrice: 129.99,
      category: 'portuguese',
      features: ['Speaking Practice', 'Listening Comprehension', 'Dialects'],
      tags: ['Portuguese', 'Conversation', 'Speaking', 'Beginner'],
      difficulty: 'Medium'
    },
    {
      id: 9,
      title: 'Korean Language Essentials',
      description: 'Learn Hangul and essential Korean for K-pop fans, travelers, and culture enthusiasts',
      image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Ji-min Park',
      rating: 4.8,
      students: 29800,
      duration: '38 hours',
      level: 'Beginner',
      price: 69.99,
      originalPrice: 149.99,
      category: 'korean',
      features: ['Hangul Writing', 'K-pop Culture', 'Basic Grammar'],
      tags: ['Korean', 'Hangul', 'K-pop', 'Beginner'],
      difficulty: 'Medium'
    },
    {
      id: 10,
      title: 'Russian for Beginners',
      description: 'Master Cyrillic alphabet and basic Russian communication skills',
      image: 'https://images.unsplash.com/photo-1546412414-e1885259563a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Ivan Petrov',
      rating: 4.5,
      students: 9800,
      duration: '36 hours',
      level: 'Beginner',
      price: 64.99,
      originalPrice: 139.99,
      category: 'russian',
      features: ['Cyrillic Alphabet', 'Basic Grammar', 'Pronunciation'],
      tags: ['Russian', 'Cyrillic', 'Grammar', 'Beginner'],
      difficulty: 'Hard'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Languages', icon: <FaGlobe />, count: languageCourses.length },
    { id: 'spanish', name: 'Spanish', icon: <FaComments />, count: languageCourses.filter(c => c.category === 'spanish').length },
    { id: 'french', name: 'French', icon: <FaBook />, count: languageCourses.filter(c => c.category === 'french').length },
    { id: 'german', name: 'German', icon: <FaMicrophone />, count: languageCourses.filter(c => c.category === 'german').length },
    { id: 'japanese', name: 'Japanese', icon: <FaFlag />, count: languageCourses.filter(c => c.category === 'japanese').length },
    { id: 'mandarin', name: 'Mandarin', icon: <FaComments />, count: languageCourses.filter(c => c.category === 'mandarin').length },
    { id: 'italian', name: 'Italian', icon: <FaBook />, count: languageCourses.filter(c => c.category === 'italian').length },
    { id: 'arabic', name: 'Arabic', icon: <FaMicrophone />, count: languageCourses.filter(c => c.category === 'arabic').length },
    { id: 'portuguese', name: 'Portuguese', icon: <FaFlag />, count: languageCourses.filter(c => c.category === 'portuguese').length },
    { id: 'korean', name: 'Korean', icon: <FaComments />, count: languageCourses.filter(c => c.category === 'korean').length },
    { id: 'russian', name: 'Russian', icon: <FaBook />, count: languageCourses.filter(c => c.category === 'russian').length }
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];
  const difficulties = ['All Difficulties', 'Easy', 'Medium', 'Hard'];

  const filteredCourses = languageCourses
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

  const getDifficultyColor = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'easy': return '#4CAF50';
      case 'medium': return '#FF9800';
      case 'hard': return '#F44336';
      default: return '#666';
    }
  };

  return (
    <div className="languages-page">
      
      {/* Hero Section */}
      <section className="languages-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Language Courses</h1>
            <p className="hero-subtitle">
              Unlock new cultures and opportunities by learning languages from around the world. 
              From casual conversation to professional fluency, start your language journey today.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">25+</div>
                <div className="stat-label">Languages</div>
              </div>
              <div className="stat">
                <div className="stat-number">200K+</div>
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
                placeholder="Search language courses by name, level, or features..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Language:
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
            <h2>Explore World Languages</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {languageCourses.length} language courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <FaGlobe className="no-courses-icon" />
              <h3>No language courses found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="courses-grid">
              {filteredCourses.map(course => (
                <div key={course.id} className="course-card">
                  <div className="course-image">
                    <img src={course.image} alt={course.title} />
                    <div className="course-category">{course.category}</div>
                    <div 
                      className="course-difficulty"
                      style={{ backgroundColor: getDifficultyColor(course.difficulty) }}
                    >
                      {course.difficulty}
                    </div>
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
                          Start Learning
                        </button>
                        <button className="btn btn-outline">
                          Course Details
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

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <h2>Why Learn a New Language?</h2>
            <p>Discover the incredible benefits of becoming multilingual</p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <FaGlobe className="benefit-icon" />
              <h3>Cultural Understanding</h3>
              <p>Gain deeper insights into different cultures and perspectives</p>
            </div>
            <div className="benefit-card">
              <FaComments className="benefit-icon" />
              <h3>Career Opportunities</h3>
              <p>Enhance your resume and open doors to international careers</p>
            </div>
            <div className="benefit-card">
              <FaBrain className="benefit-icon" />
              <h3>Cognitive Benefits</h3>
              <p>Improve memory, problem-solving skills, and mental flexibility</p>
            </div>
            <div className="benefit-card">
              <FaBook className="benefit-icon" />
              <h3>Travel Experiences</h3>
              <p>Connect with locals and enrich your travel experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="languages-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Language Journey Today</h2>
            <p>
              Join millions of language learners worldwide. Whether for travel, career, or personal growth, 
              our courses will help you achieve fluency and connect with cultures around the globe.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse All Languages</button>
              <button className="btn btn-outline-light">Take Placement Test</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Languages;