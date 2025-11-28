import React, { useState } from 'react';
import { 
  FaStar, 
  FaGraduationCap, 
  FaUsers, 
  FaPlay,
  FaLinkedin,
  FaTwitter,
  FaGlobe,
  FaFilter,
  FaSearch,
  FaBook,
  FaAward,
  FaChalkboardTeacher
} from 'react-icons/fa';
import '../App.css';

const Instructors = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const instructors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Senior Web Development Instructor',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      students: 12500,
      courses: 15,
      experience: '8 years',
      specialization: ['Web Development', 'JavaScript', 'React'],
      bio: 'Former Google engineer with passion for teaching web technologies. Specialized in modern JavaScript frameworks.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'development'
    },
    {
      id: 2,
      name: 'Prof. Michael Chen',
      role: 'Data Science Expert',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      students: 8900,
      courses: 12,
      experience: '6 years',
      specialization: ['Data Science', 'Python', 'Machine Learning'],
      bio: 'PhD in Computer Science with focus on machine learning. Former data scientist at Amazon.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'data-science'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Mobile Development Specialist',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      students: 7400,
      courses: 8,
      experience: '5 years',
      specialization: ['Mobile Development', 'React Native', 'Flutter'],
      bio: 'Award-winning mobile developer with expertise in cross-platform app development.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'mobile'
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'AI & Machine Learning Instructor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      students: 11200,
      courses: 10,
      experience: '7 years',
      specialization: ['AI', 'Deep Learning', 'TensorFlow'],
      bio: 'AI researcher and educator passionate about making complex concepts accessible to everyone.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'ai-ml'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'UX/UI Design Expert',
      image: 'https://images.unsplash.com/photo-1536922246289-88c42f957773?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.6,
      students: 6800,
      courses: 9,
      experience: '6 years',
      specialization: ['UX Design', 'UI Design', 'Figma'],
      bio: 'Lead designer at top tech companies, now sharing design principles and best practices.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'design'
    },
    {
      id: 6,
      name: 'Robert Williams',
      role: 'Cybersecurity Specialist',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.8,
      students: 5200,
      courses: 7,
      experience: '9 years',
      specialization: ['Cybersecurity', 'Network Security', 'Ethical Hacking'],
      bio: 'Cybersecurity consultant with extensive experience in protecting digital assets and networks.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'cybersecurity'
    },
    {
      id: 7,
      name: 'Maria Garcia',
      role: 'Business & Marketing Instructor',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.7,
      students: 9500,
      courses: 11,
      experience: '8 years',
      specialization: ['Digital Marketing', 'Business Strategy', 'SEO'],
      bio: 'Marketing director turned educator, helping students build successful business careers.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'business'
    },
    {
      id: 8,
      name: 'James Wilson',
      role: 'Cloud Computing Expert',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80',
      rating: 4.9,
      students: 8300,
      courses: 8,
      experience: '7 years',
      specialization: ['AWS', 'Cloud Architecture', 'DevOps'],
      bio: 'Cloud solutions architect with certifications in AWS, Azure, and Google Cloud platforms.',
      social: {
        linkedin: '#',
        twitter: '#',
        website: '#'
      },
      category: 'cloud'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Instructors', count: instructors.length },
    { id: 'development', name: 'Web Development', count: instructors.filter(i => i.category === 'development').length },
    { id: 'data-science', name: 'Data Science', count: instructors.filter(i => i.category === 'data-science').length },
    { id: 'mobile', name: 'Mobile Development', count: instructors.filter(i => i.category === 'mobile').length },
    { id: 'ai-ml', name: 'AI & ML', count: instructors.filter(i => i.category === 'ai-ml').length },
    { id: 'design', name: 'Design', count: instructors.filter(i => i.category === 'design').length },
    { id: 'cybersecurity', name: 'Cybersecurity', count: instructors.filter(i => i.category === 'cybersecurity').length },
    { id: 'business', name: 'Business', count: instructors.filter(i => i.category === 'business').length },
    { id: 'cloud', name: 'Cloud Computing', count: instructors.filter(i => i.category === 'cloud').length }
  ];

  const filteredInstructors = instructors.filter(instructor => {
    const matchesCategory = activeFilter === 'all' || instructor.category === activeFilter;
    const matchesSearch = instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         instructor.specialization.some(skill => 
                           skill.toLowerCase().includes(searchTerm.toLowerCase())
                         );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="instructors">
      
      {/* Hero Section */}
      <section className="instructors-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Meet Our Expert Instructors</h1>
            <p className="hero-subtitle">
              Learn from industry professionals with real-world experience and passion for teaching
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Instructors</div>
              </div>
              <div className="stat">
                <div className="stat-number">2M+</div>
                <div className="stat-label">Students Taught</div>
              </div>
              <div className="stat">
                <div className="stat-number">4.8/5</div>
                <div className="stat-label">Average Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="filter-section">
        <div className="container">
          <div className="filter-container">
            <div className="search-box">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search instructors by name, specialization, or skills..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="filter-options">
              <div className="filter-label">
                <FaFilter className="filter-icon" />
                Filter by Category:
              </div>
              <div className="category-filters">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                    <span className="filter-count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Grid */}
      <section className="instructors-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Expert Instructors</h2>
            <p className="section-subtitle">
              Handpicked professionals with industry experience and teaching excellence
            </p>
          </div>

          <div className="instructors-grid">
            {filteredInstructors.map(instructor => (
              <div key={instructor.id} className="instructor-card">
                <div className="instructor-image">
                  <img src={instructor.image} alt={instructor.name} />
                  <div className="instructor-overlay">
                    <div className="social-links">
                      <a href={instructor.social.linkedin} className="social-link">
                        <FaLinkedin />
                      </a>
                      <a href={instructor.social.twitter} className="social-link">
                        <FaTwitter />
                      </a>
                      <a href={instructor.social.website} className="social-link">
                        <FaGlobe />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="instructor-content">
                  <h3 className="instructor-name">{instructor.name}</h3>
                  <p className="instructor-role">{instructor.role}</p>
                  
                  <div className="instructor-rating">
                    <div className="rating-stars">
                      {[...Array(5)].map((_, i) => (
                        <FaStar 
                          key={i} 
                          className={`star ${i < Math.floor(instructor.rating) ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="rating-value">{instructor.rating}</span>
                  </div>

                  <p className="instructor-bio">{instructor.bio}</p>

                  <div className="instructor-specialization">
                    <h4>Specializations:</h4>
                    <div className="skills">
                      {instructor.specialization.map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="instructor-stats">
                    <div className="stat">
                      <FaUsers className="stat-icon" />
                      <div className="stat-info">
                        <div className="stat-number">{instructor.students.toLocaleString()}+</div>
                        <div className="stat-label">Students</div>
                      </div>
                    </div>
                    <div className="stat">
                      <FaBook className="stat-icon" />
                      <div className="stat-info">
                        <div className="stat-number">{instructor.courses}</div>
                        <div className="stat-label">Courses</div>
                      </div>
                    </div>
                    <div className="stat">
                      <FaAward className="stat-icon" />
                      <div className="stat-info">
                        <div className="stat-number">{instructor.experience}</div>
                        <div className="stat-label">Experience</div>
                      </div>
                    </div>
                  </div>

                  <div className="instructor-actions">
                    <button className="btn btn-primary">
                      View Courses
                    </button>
                    <button className="btn btn-outline">
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredInstructors.length === 0 && (
            <div className="no-results">
              <FaChalkboardTeacher className="no-results-icon" />
              <h3>No instructors found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="instructors-cta">
        <div className="container">
          <div className="cta-content">
            <div className="cta-text">
              <h2>Become an Instructor</h2>
              <p>
                Share your knowledge with millions of students worldwide. 
                Join our community of expert instructors and make an impact.
              </p>
              <div className="cta-features">
                <div className="feature">
                  <FaGraduationCap className="feature-icon" />
                  <span>Reach millions of students</span>
                </div>
                <div className="feature">
                  <FaUsers className="feature-icon" />
                  <span>Join expert community</span>
                </div>
                <div className="feature">
                  <FaAward className="feature-icon" />
                  <span>Build your brand</span>
                </div>
              </div>
            </div>
            <div className="cta-actions">
              <button className="btn btn-light">Apply Now</button>
              <button className="btn btn-outline-light">Learn More</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Instructors;