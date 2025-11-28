import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaCode,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCheckCircle,
  FaLaptopCode
} from 'react-icons/fa';
import '../App.css';

const WebDevelopment = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const webDevCourses = [
    {
      id: 1,
      title: 'Complete HTML5 & CSS3 Mastery',
      description: 'Master modern HTML5 semantics, CSS3 flexbox, grid, animations, and responsive web design principles.',
      image: 'https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Sarah Johnson',
      rating: 4.8,
      students: 32450,
      duration: '28 hours',
      level: 'Beginner',
      price: 49.99,
      originalPrice: 99.99,
      category: 'frontend',
      technologies: ['HTML5', 'CSS3', 'Responsive Design'],
      features: ['50+ Projects', 'Real-world Exercises', 'Lifetime Access'],
      tags: ['HTML', 'CSS', 'Web Design', 'Beginner']
    },
    {
      id: 2,
      title: 'JavaScript Modern Development',
      description: 'Comprehensive JavaScript course covering ES6+, DOM manipulation, async programming, and modern JS patterns.',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Mike Chen',
      rating: 4.9,
      students: 28700,
      duration: '42 hours',
      level: 'Beginner to Intermediate',
      price: 69.99,
      originalPrice: 139.99,
      category: 'frontend',
      technologies: ['JavaScript', 'ES6+', 'DOM', 'Async JS'],
      features: ['Modern JS Patterns', 'Real Projects', 'Advanced Concepts'],
      tags: ['JavaScript', 'ES6', 'DOM', 'Async']
    },
    {
      id: 3,
      title: 'React.js Complete Guide',
      description: 'Master React.js with hooks, context API, routing, state management, and building real-world applications.',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Emily Rodriguez',
      rating: 4.8,
      students: 31500,
      duration: '38 hours',
      level: 'Intermediate',
      price: 79.99,
      originalPrice: 159.99,
      category: 'frontend',
      technologies: ['React', 'Hooks', 'Context API', 'Router'],
      features: ['20+ Projects', 'State Management', 'Best Practices'],
      tags: ['React', 'JavaScript', 'Frontend', 'Hooks']
    },
    {
      id: 4,
      title: 'Node.js & Express Backend',
      description: 'Build scalable server-side applications with Node.js, Express, REST APIs, and database integration.',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'David Kim',
      rating: 4.7,
      students: 19800,
      duration: '36 hours',
      level: 'Intermediate',
      price: 74.99,
      originalPrice: 149.99,
      category: 'backend',
      technologies: ['Node.js', 'Express', 'REST API', 'MongoDB'],
      features: ['RESTful APIs', 'Database Integration', 'Authentication'],
      tags: ['Node.js', 'Express', 'Backend', 'API']
    },
    {
      id: 5,
      title: 'Full Stack MERN Development',
      description: 'Complete full-stack development with MongoDB, Express, React, and Node.js. Build and deploy real applications.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Lisa Thompson',
      rating: 4.9,
      students: 25600,
      duration: '52 hours',
      level: 'Intermediate to Advanced',
      price: 89.99,
      originalPrice: 189.99,
      category: 'fullstack',
      technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
      features: ['Full Stack Projects', 'Deployment', 'Real-world Apps'],
      tags: ['MERN', 'Full Stack', 'React', 'Node.js']
    },
    {
      id: 6,
      title: 'Vue.js Framework Mastery',
      description: 'Learn Vue.js from basics to advanced concepts including Vuex, Vue Router, and composition API.',
      image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'James Wilson',
      rating: 4.6,
      students: 14200,
      duration: '32 hours',
      level: 'Intermediate',
      price: 64.99,
      originalPrice: 129.99,
      category: 'frontend',
      technologies: ['Vue.js', 'Vuex', 'Vue Router', 'Composition API'],
      features: ['Vue 3 Features', 'State Management', 'Routing'],
      tags: ['Vue.js', 'JavaScript', 'Frontend', 'Framework']
    },
    {
      id: 7,
      title: 'Python Django Web Development',
      description: 'Build robust web applications with Python Django framework, including ORM, authentication, and deployment.',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Robert Davis',
      rating: 4.7,
      students: 16800,
      duration: '40 hours',
      level: 'Intermediate',
      price: 69.99,
      originalPrice: 139.99,
      category: 'backend',
      technologies: ['Python', 'Django', 'ORM', 'PostgreSQL'],
      features: ['Django ORM', 'Authentication', 'Production Deployment'],
      tags: ['Python', 'Django', 'Backend', 'Web Framework']
    },
    {
      id: 8,
      title: 'Advanced CSS & Sass',
      description: 'Master advanced CSS techniques including Sass, BEM methodology, CSS architecture, and performance optimization.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Maria Garcia',
      rating: 4.8,
      students: 18700,
      duration: '24 hours',
      level: 'Intermediate to Advanced',
      price: 54.99,
      originalPrice: 109.99,
      category: 'frontend',
      technologies: ['Sass', 'CSS Architecture', 'BEM', 'Performance'],
      features: ['Sass Mastery', 'CSS Architecture', 'Optimization'],
      tags: ['CSS', 'Sass', 'Frontend', 'Styling']
    },
    {
      id: 9,
      title: 'Next.js & Server-Side Rendering',
      description: 'Learn Next.js for production-ready React applications with SSR, static generation, and API routes.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Alex Turner',
      rating: 4.9,
      students: 13200,
      duration: '30 hours',
      level: 'Advanced',
      price: 79.99,
      originalPrice: 159.99,
      category: 'fullstack',
      technologies: ['Next.js', 'SSR', 'Static Generation', 'API Routes'],
      features: ['SSR/SSG', 'Production Ready', 'Performance'],
      tags: ['Next.js', 'React', 'SSR', 'Full Stack']
    },
    {
      id: 10,
      title: 'Web Performance Optimization',
      description: 'Advanced techniques for optimizing web performance including lazy loading, code splitting, and caching strategies.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Sophia Lee',
      rating: 4.7,
      students: 9800,
      duration: '20 hours',
      level: 'Advanced',
      price: 59.99,
      originalPrice: 119.99,
      category: 'frontend',
      technologies: ['Performance', 'Optimization', 'Lighthouse', 'Core Web Vitals'],
      features: ['Performance Audits', 'Optimization Techniques', 'Real Metrics'],
      tags: ['Performance', 'Optimization', 'Web Vitals', 'Advanced']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Web Dev', icon: <FaCode />, count: webDevCourses.length },
    { id: 'frontend', name: 'Frontend', icon: <FaHtml5 />, count: webDevCourses.filter(c => c.category === 'frontend').length },
    { id: 'backend', name: 'Backend', icon: <FaNodeJs />, count: webDevCourses.filter(c => c.category === 'backend').length },
    { id: 'fullstack', name: 'Full Stack', icon: <FaLaptopCode />, count: webDevCourses.filter(c => c.category === 'fullstack').length }
  ];

  const technologies = ['All Tech', 'HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL'];

  const filteredCourses = webDevCourses
    .filter(course => {
      const matchesCategory = activeFilter === 'all' || course.category === activeFilter;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
                           course.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
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
        case 'duration':
          return parseInt(a.duration) - parseInt(b.duration);
        default:
          return 0;
      }
    });

  const getTechIcon = (tech) => {
    const icons = {
      'HTML5': <FaHtml5 />,
      'CSS3': <FaCss3Alt />,
      'JavaScript': <FaJs />,
      'React': <FaReact />,
      'Node.js': <FaNodeJs />,
      'MongoDB': <FaDatabase />,
      'Express': <FaCode />,
      'Vue.js': <FaCode />,
      'Django': <FaCode />,
      'Python': <FaCode />,
      'Next.js': <FaCode />
    };
    return icons[tech] || <FaCode />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'frontend': '#E44D26',
      'backend': '#339933',
      'fullstack': '#61DAFB'
    };
    return colors[category] || '#667eea';
  };

  return (
    <div className="webdev-page">
      
      {/* Hero Section */}
      <section className="webdev-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Web Development Courses</h1>
            <p className="hero-subtitle">
              Master the art of building modern, responsive websites and web applications. 
              From frontend design to backend development, start your journey to becoming a web developer.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Web Dev Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">200K+</div>
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
                placeholder="Search web development courses by technology, framework, or topic..."
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
                      style={{
                        '--category-color': getCategoryColor(category.id)
                      }}
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
                  <option value="duration">Duration: Short to Long</option>
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
            <h2>Master Web Development Technologies</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {webDevCourses.length} courses
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
                    <div 
                      className="course-category"
                      style={{ backgroundColor: getCategoryColor(course.category) }}
                    >
                      {course.category}
                    </div>
                    <div className="course-level">{course.level}</div>
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

                    <div className="course-technologies">
                      <h4>Technologies:</h4>
                      <div className="tech-list">
                        {course.technologies.map((tech, index) => (
                          <div key={index} className="tech-item">
                            <span className="tech-icon">{getTechIcon(tech)}</span>
                            <span className="tech-name">{tech}</span>
                          </div>
                        ))}
                      </div>
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
                          View Curriculum
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

      {/* Tech Stack Section */}
      <section className="tech-stack-section">
        <div className="container">
          <div className="tech-stack-header">
            <h2>Master the Modern Web Stack</h2>
            <p>Learn industry-standard technologies used by top companies worldwide</p>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3>Frontend Technologies</h3>
              <div className="tech-items">
                <div className="tech-item-large">
                  <FaHtml5 className="tech-icon" style={{ color: '#E44D26' }} />
                  <span>HTML5</span>
                </div>
                <div className="tech-item-large">
                  <FaCss3Alt className="tech-icon" style={{ color: '#264DE4' }} />
                  <span>CSS3</span>
                </div>
                <div className="tech-item-large">
                  <FaJs className="tech-icon" style={{ color: '#F7DF1E' }} />
                  <span>JavaScript</span>
                </div>
                <div className="tech-item-large">
                  <FaReact className="tech-icon" style={{ color: '#61DAFB' }} />
                  <span>React</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Backend Technologies</h3>
              <div className="tech-items">
                <div className="tech-item-large">
                  <FaNodeJs className="tech-icon" style={{ color: '#339933' }} />
                  <span>Node.js</span>
                </div>
                <div className="tech-item-large">
                  <FaDatabase className="tech-icon" style={{ color: '#47A248' }} />
                  <span>MongoDB</span>
                </div>
                <div className="tech-item-large">
                  <FaCode className="tech-icon" style={{ color: '#092E20' }} />
                  <span>Express</span>
                </div>
                <div className="tech-item-large">
                  <FaCode className="tech-icon" style={{ color: '#3776AB' }} />
                  <span>Python</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="webdev-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Web Development Career Today</h2>
            <p>
              Join thousands of students who have launched successful careers in web development. 
              Whether you're starting from scratch or advancing your skills, we have the perfect path for you.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse All Courses</button>
              <button className="btn btn-outline-light">Get Career Guide</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WebDevelopment;