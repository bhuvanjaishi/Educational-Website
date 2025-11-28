import React, { useState } from 'react';
import { 
  FaStar, 
  FaUsers, 
  FaClock, 
  FaPlay,
  FaFilter,
  FaSearch,
  FaChartLine,
  FaDatabase,
  FaBrain,
  FaPython,
  FaRProject,
  FaCloud,
  FaCheckCircle,
  FaChartBar
} from 'react-icons/fa';
import '../App.css';

const DataScience = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const dataScienceCourses = [
    {
      id: 1,
      title: 'Python for Data Science',
      description: 'Master Python programming specifically for data analysis, visualization, and scientific computing with NumPy, Pandas, and Matplotlib.',
      image: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Sarah Chen',
      rating: 4.8,
      students: 28700,
      duration: '36 hours',
      level: 'Beginner',
      price: 59.99,
      originalPrice: 119.99,
      category: 'programming',
      technologies: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
      features: ['Data Analysis', 'Visualization', 'Real Datasets'],
      tags: ['Python', 'Data Analysis', 'Beginner', 'Pandas']
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      description: 'Comprehensive introduction to machine learning algorithms, model evaluation, and practical implementation using scikit-learn.',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Prof. Michael Rodriguez',
      rating: 4.9,
      students: 32400,
      duration: '48 hours',
      level: 'Intermediate',
      price: 79.99,
      originalPrice: 159.99,
      category: 'machine-learning',
      technologies: ['Scikit-learn', 'Python', 'ML Algorithms', 'Model Evaluation'],
      features: ['Supervised Learning', 'Unsupervised Learning', 'Real Projects'],
      tags: ['Machine Learning', 'Python', 'Algorithms', 'Scikit-learn']
    },
    {
      id: 3,
      title: 'Deep Learning with TensorFlow',
      description: 'Advanced course covering neural networks, deep learning architectures, and implementation using TensorFlow and Keras.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. Emily Watson',
      rating: 4.8,
      students: 19800,
      duration: '52 hours',
      level: 'Advanced',
      price: 89.99,
      originalPrice: 179.99,
      category: 'deep-learning',
      technologies: ['TensorFlow', 'Keras', 'Neural Networks', 'Deep Learning'],
      features: ['Neural Networks', 'CNN/RNN', 'TensorFlow Projects'],
      tags: ['Deep Learning', 'TensorFlow', 'Neural Networks', 'Advanced']
    },
    {
      id: 4,
      title: 'Data Visualization Mastery',
      description: 'Master data visualization techniques using Python libraries like Matplotlib, Seaborn, Plotly, and Tableau for impactful insights.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Lisa Thompson',
      rating: 4.7,
      students: 15600,
      duration: '28 hours',
      level: 'Intermediate',
      price: 64.99,
      originalPrice: 129.99,
      category: 'visualization',
      technologies: ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau'],
      features: ['Interactive Charts', 'Dashboard Creation', 'Best Practices'],
      tags: ['Data Visualization', 'Python', 'Dashboards', 'Charts']
    },
    {
      id: 5,
      title: 'Big Data Analytics with Spark',
      description: 'Learn to process and analyze massive datasets using Apache Spark, PySpark, and distributed computing principles.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'David Kim',
      rating: 4.6,
      students: 12800,
      duration: '40 hours',
      level: 'Advanced',
      price: 84.99,
      originalPrice: 169.99,
      category: 'big-data',
      technologies: ['Apache Spark', 'PySpark', 'Hadoop', 'Distributed Computing'],
      features: ['Big Data Processing', 'Spark SQL', 'Cluster Management'],
      tags: ['Big Data', 'Spark', 'PySpark', 'Distributed Systems']
    },
    {
      id: 6,
      title: 'Natural Language Processing',
      description: 'Explore text analysis, sentiment analysis, and language models using modern NLP techniques and transformer architectures.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Dr. James Wilson',
      rating: 4.8,
      students: 14200,
      duration: '38 hours',
      level: 'Intermediate to Advanced',
      price: 74.99,
      originalPrice: 149.99,
      category: 'nlp',
      technologies: ['NLTK', 'spaCy', 'Transformers', 'BERT'],
      features: ['Text Processing', 'Sentiment Analysis', 'Language Models'],
      tags: ['NLP', 'Text Analysis', 'Transformers', 'AI']
    },
    {
      id: 7,
      title: 'Statistical Analysis with R',
      description: 'Comprehensive statistical analysis course using R programming for hypothesis testing, regression, and experimental design.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Maria Garcia',
      rating: 4.7,
      students: 11200,
      duration: '32 hours',
      level: 'Intermediate',
      price: 69.99,
      originalPrice: 139.99,
      category: 'statistics',
      technologies: ['R Programming', 'Statistics', 'Hypothesis Testing', 'Regression'],
      features: ['Statistical Tests', 'Data Modeling', 'R Visualization'],
      tags: ['R Programming', 'Statistics', 'Analysis', 'Modeling']
    },
    {
      id: 8,
      title: 'Time Series Analysis',
      description: 'Master time series forecasting, analysis, and modeling techniques for financial, economic, and scientific data.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Robert Chen',
      rating: 4.6,
      students: 9800,
      duration: '30 hours',
      level: 'Advanced',
      price: 79.99,
      originalPrice: 159.99,
      category: 'time-series',
      technologies: ['ARIMA', 'Forecasting', 'Seasonal Analysis', 'Python/R'],
      features: ['Time Series Models', 'Forecasting', 'Financial Analysis'],
      tags: ['Time Series', 'Forecasting', 'ARIMA', 'Analysis']
    },
    {
      id: 9,
      title: 'Computer Vision with OpenCV',
      description: 'Learn image processing, object detection, and computer vision techniques using OpenCV and deep learning models.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Alex Turner',
      rating: 4.8,
      students: 13200,
      duration: '42 hours',
      level: 'Intermediate to Advanced',
      price: 84.99,
      originalPrice: 169.99,
      category: 'computer-vision',
      technologies: ['OpenCV', 'Image Processing', 'Object Detection', 'CNN'],
      features: ['Image Analysis', 'Object Recognition', 'Real-time Processing'],
      tags: ['Computer Vision', 'OpenCV', 'Image Processing', 'AI']
    },
    {
      id: 10,
      title: 'Data Engineering Fundamentals',
      description: 'Build robust data pipelines, ETL processes, and data infrastructure using modern data engineering tools and practices.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      instructor: 'Sophia Lee',
      rating: 4.7,
      students: 11600,
      duration: '45 hours',
      level: 'Intermediate',
      price: 79.99,
      originalPrice: 159.99,
      category: 'data-engineering',
      technologies: ['ETL', 'Data Pipelines', 'Airflow', 'SQL'],
      features: ['Data Pipelines', 'ETL Processes', 'Infrastructure Design'],
      tags: ['Data Engineering', 'ETL', 'Pipelines', 'Infrastructure']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Data Science', icon: <FaChartLine />, count: dataScienceCourses.length },
    { id: 'programming', name: 'Programming', icon: <FaPython />, count: dataScienceCourses.filter(c => c.category === 'programming').length },
    { id: 'machine-learning', name: 'Machine Learning', icon: <FaBrain />, count: dataScienceCourses.filter(c => c.category === 'machine-learning').length },
    { id: 'deep-learning', name: 'Deep Learning', icon: <FaBrain />, count: dataScienceCourses.filter(c => c.category === 'deep-learning').length },
    { id: 'visualization', name: 'Visualization', icon: <FaChartBar />, count: dataScienceCourses.filter(c => c.category === 'visualization').length },
    { id: 'big-data', name: 'Big Data', icon: <FaDatabase />, count: dataScienceCourses.filter(c => c.category === 'big-data').length },
    { id: 'nlp', name: 'NLP', icon: <FaCloud />, count: dataScienceCourses.filter(c => c.category === 'nlp').length },
    { id: 'statistics', name: 'Statistics', icon: <FaChartLine />, count: dataScienceCourses.filter(c => c.category === 'statistics').length },
    { id: 'time-series', name: 'Time Series', icon: <FaChartLine />, count: dataScienceCourses.filter(c => c.category === 'time-series').length },
    { id: 'computer-vision', name: 'Computer Vision', icon: <FaBrain />, count: dataScienceCourses.filter(c => c.category === 'computer-vision').length },
    { id: 'data-engineering', name: 'Data Engineering', icon: <FaDatabase />, count: dataScienceCourses.filter(c => c.category === 'data-engineering').length }
  ];

  const technologies = ['All Tech', 'Python', 'R', 'TensorFlow', 'PyTorch', 'SQL', 'Spark', 'Tableau', 'AWS'];

  const filteredCourses = dataScienceCourses
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
      'Python': <FaPython />,
      'R Programming': <FaRProject />,
      'TensorFlow': <FaBrain />,
      'NumPy': <FaChartLine />,
      'Pandas': <FaDatabase />,
      'Scikit-learn': <FaBrain />,
      'Spark': <FaCloud />,
      'Tableau': <FaChartBar />
    };
    return icons[tech] || <FaChartLine />;
  };

  const getCategoryColor = (category) => {
    const colors = {
      'programming': '#3776AB',
      'machine-learning': '#FF6B6B',
      'deep-learning': '#FF8E53',
      'visualization': '#4ECDC4',
      'big-data': '#45B7D1',
      'nlp': '#96CEB4',
      'statistics': '#FECA57',
      'time-series': '#FF9FF3',
      'computer-vision': '#54A0FF',
      'data-engineering': '#5F27CD'
    };
    return colors[category] || '#667eea';
  };

  return (
    <div className="datascience-page">
      
      {/* Hero Section */}
      <section className="datascience-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Data Science Courses</h1>
            <p className="hero-subtitle">
              Master the art of extracting insights from data. Learn machine learning, statistical analysis, 
              and data visualization to become a proficient data scientist.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">40+</div>
                <div className="stat-label">Data Science Courses</div>
              </div>
              <div className="stat">
                <div className="stat-number">150K+</div>
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
                placeholder="Search data science courses by technology, algorithm, or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Specialization:
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
            <h2>Master Data Science Technologies</h2>
            <p className="courses-count">
              Showing {filteredCourses.length} of {dataScienceCourses.length} courses
            </p>
          </div>

          {filteredCourses.length === 0 ? (
            <div className="no-courses">
              <FaChartLine className="no-courses-icon" />
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
                      {course.category.replace('-', ' ')}
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
                      <h4>Technologies & Tools:</h4>
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
            <h2>Data Science Technology Stack</h2>
            <p>Master the essential tools and technologies used by professional data scientists</p>
          </div>
          <div className="tech-stack-grid">
            <div className="tech-category">
              <h3>Programming & Analysis</h3>
              <div className="tech-items">
                <div className="tech-item-large">
                  <FaPython className="tech-icon" style={{ color: '#3776AB' }} />
                  <span>Python</span>
                </div>
                <div className="tech-item-large">
                  <FaRProject className="tech-icon" style={{ color: '#276DC3' }} />
                  <span>R Programming</span>
                </div>
                <div className="tech-item-large">
                  <FaDatabase className="tech-icon" style={{ color: '#336791' }} />
                  <span>SQL</span>
                </div>
                <div className="tech-item-large">
                  <FaChartLine className="tech-icon" style={{ color: '#4ECDC4' }} />
                  <span>Pandas</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Machine Learning & AI</h3>
              <div className="tech-items">
                <div className="tech-item-large">
                  <FaBrain className="tech-icon" style={{ color: '#FF6B6B' }} />
                  <span>Scikit-learn</span>
                </div>
                <div className="tech-item-large">
                  <FaBrain className="tech-icon" style={{ color: '#FF8E53' }} />
                  <span>TensorFlow</span>
                </div>
                <div className="tech-item-large">
                  <FaBrain className="tech-icon" style={{ color: '#EE4C2C' }} />
                  <span>PyTorch</span>
                </div>
                <div className="tech-item-large">
                  <FaCloud className="tech-icon" style={{ color: '#E44D26' }} />
                  <span>Keras</span>
                </div>
              </div>
            </div>
            <div className="tech-category">
              <h3>Big Data & Visualization</h3>
              <div className="tech-items">
                <div className="tech-item-large">
                  <FaCloud className="tech-icon" style={{ color: '#E25A1C' }} />
                  <span>Apache Spark</span>
                </div>
                <div className="tech-item-large">
                  <FaChartBar className="tech-icon" style={{ color: '#4ECDC4' }} />
                  <span>Tableau</span>
                </div>
                <div className="tech-item-large">
                  <FaChartLine className="tech-icon" style={{ color: '#3E7CB1' }} />
                  <span>Matplotlib</span>
                </div>
                <div className="tech-item-large">
                  <FaChartBar className="tech-icon" style={{ color: '#F05340' }} />
                  <span>Seaborn</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Path Section */}
      <section className="career-path-section">
        <div className="container">
          <div className="career-path-header">
            <h2>Data Science Career Paths</h2>
            <p>Explore different career opportunities in the field of data science</p>
          </div>
          <div className="career-path-grid">
            <div className="career-card">
              <FaChartLine className="career-icon" />
              <h3>Data Analyst</h3>
              <p>Analyze data to provide actionable insights and support business decisions</p>
              <div className="career-skills">
                <span>SQL</span>
                <span>Excel</span>
                <span>Tableau</span>
              </div>
            </div>
            <div className="career-card">
              <FaBrain className="career-icon" />
              <h3>Machine Learning Engineer</h3>
              <p>Build and deploy machine learning models for production systems</p>
              <div className="career-skills">
                <span>Python</span>
                <span>TensorFlow</span>
                <span>MLOps</span>
              </div>
            </div>
            <div className="career-card">
              <FaDatabase className="career-icon" />
              <h3>Data Engineer</h3>
              <p>Design and build data pipelines and infrastructure for data processing</p>
              <div className="career-skills">
                <span>Spark</span>
                <span>Airflow</span>
                <span>Cloud</span>
              </div>
            </div>
            <div className="career-card">
              <FaChartBar className="career-icon" />
              <h3>Data Scientist</h3>
              <p>Extract insights from complex data using statistical and ML techniques</p>
              <div className="career-skills">
                <span>Statistics</span>
                <span>Python</span>
                <span>ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="datascience-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Start Your Data Science Journey Today</h2>
            <p>
              Join thousands of students who have launched successful careers in data science. 
              Whether you're starting from scratch or advancing your skills, we have the perfect learning path for you.
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

export default DataScience;