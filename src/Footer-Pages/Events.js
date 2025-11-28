import React, { useState } from 'react';
import { 
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaClock,
  FaUsers,
  FaRegCalendarCheck,
  FaSearch,
  FaFilter,
  FaVideo,
  FaUserTie,
  FaChalkboardTeacher,
  FaLaptop,
  FaMicrophone,
  FaStar,
  FaShare,
  FaBookmark
} from 'react-icons/fa';
import '../App.css';

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');

  const events = [
    {
      id: 1,
      title: 'Annual Tech Conference 2024',
      description: 'Join industry leaders for insights on AI, Machine Learning, and emerging technologies shaping the future of education.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-03-15',
      time: '9:00 AM - 5:00 PM',
      location: 'San Francisco Convention Center',
      type: 'conference',
      category: 'technology',
      attendees: 1200,
      maxAttendees: 1500,
      price: 299,
      isFree: false,
      isVirtual: false,
      speakers: [
        { name: 'Dr. Sarah Chen', role: 'AI Research Lead' },
        { name: 'Mike Johnson', role: 'EdTech Innovator' }
      ],
      tags: ['AI', 'Machine Learning', 'EdTech', 'Innovation']
    },
    {
      id: 2,
      title: 'Web Development Workshop',
      description: 'Hands-on workshop covering modern web development technologies including React, Node.js, and cloud deployment.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-03-20',
      time: '10:00 AM - 4:00 PM',
      location: 'Online Virtual Event',
      type: 'workshop',
      category: 'programming',
      attendees: 85,
      maxAttendees: 100,
      price: 0,
      isFree: true,
      isVirtual: true,
      speakers: [
        { name: 'Emily Rodriguez', role: 'Senior Web Developer' }
      ],
      tags: ['React', 'JavaScript', 'Web Development', 'Workshop']
    },
    {
      id: 3,
      title: 'Data Science Summit',
      description: 'Explore the latest trends in data science, analytics, and big data with expert practitioners and researchers.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-04-05',
      time: '8:30 AM - 6:00 PM',
      location: 'New York Tech Hub',
      type: 'summit',
      category: 'data-science',
      attendees: 450,
      maxAttendees: 500,
      price: 199,
      isFree: false,
      isVirtual: false,
      speakers: [
        { name: 'Dr. Michael Kim', role: 'Data Science Director' },
        { name: 'Lisa Thompson', role: 'Analytics Expert' }
      ],
      tags: ['Data Science', 'Analytics', 'Big Data', 'AI']
    },
    {
      id: 4,
      title: 'Career Fair 2024',
      description: 'Connect with top tech companies and explore career opportunities in software development, data science, and more.',
      image: 'https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2023/08/3091-Career-Fair_Web-Banner_1500x459-1024x313.jpg',
      date: '2024-04-12',
      time: '11:00 AM - 3:00 PM',
      location: 'Campus Main Hall',
      type: 'career-fair',
      category: 'career',
      attendees: 300,
      maxAttendees: 400,
      price: 0,
      isFree: true,
      isVirtual: false,
      speakers: [],
      tags: ['Career', 'Networking', 'Jobs', 'Recruitment']
    },
    {
      id: 5,
      title: 'Mobile App Development Bootcamp',
      description: 'Intensive 2-day bootcamp covering iOS and Android development with React Native and Flutter.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-04-18',
      time: '9:00 AM - 5:00 PM',
      location: 'Online Virtual Event',
      type: 'bootcamp',
      category: 'mobile',
      attendees: 75,
      maxAttendees: 100,
      price: 149,
      isFree: false,
      isVirtual: true,
      speakers: [
        { name: 'David Wilson', role: 'Mobile Development Lead' }
      ],
      tags: ['Mobile', 'React Native', 'Flutter', 'Bootcamp']
    },
    {
      id: 6,
      title: 'Cybersecurity Workshop',
      description: 'Learn essential cybersecurity practices, threat detection, and protection strategies for modern applications.',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-05-02',
      time: '1:00 PM - 5:00 PM',
      location: 'Tech Innovation Center',
      type: 'workshop',
      category: 'security',
      attendees: 60,
      maxAttendees: 80,
      price: 0,
      isFree: true,
      isVirtual: false,
      speakers: [
        { name: 'Robert Chen', role: 'Security Specialist' }
      ],
      tags: ['Security', 'Cybersecurity', 'Workshop', 'Protection']
    },
    {
      id: 7,
      title: 'AI & Machine Learning Meetup',
      description: 'Monthly meetup for AI enthusiasts to discuss recent developments, share projects, and network.',
      image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-05-15',
      time: '6:00 PM - 8:00 PM',
      location: 'Community Tech Space',
      type: 'meetup',
      category: 'ai-ml',
      attendees: 120,
      maxAttendees: 150,
      price: 0,
      isFree: true,
      isVirtual: false,
      speakers: [
        { name: 'Dr. Anna Park', role: 'ML Researcher' },
        { name: 'James Miller', role: 'AI Engineer' }
      ],
      tags: ['AI', 'Machine Learning', 'Networking', 'Meetup']
    },
    {
      id: 8,
      title: 'Digital Marketing Masterclass',
      description: 'Comprehensive masterclass covering SEO, social media marketing, and digital advertising strategies.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      date: '2024-05-22',
      time: '10:00 AM - 4:00 PM',
      location: 'Online Virtual Event',
      type: 'masterclass',
      category: 'marketing',
      attendees: 200,
      maxAttendees: 300,
      price: 99,
      isFree: false,
      isVirtual: true,
      speakers: [
        { name: 'Maria Garcia', role: 'Digital Marketing Expert' }
      ],
      tags: ['Marketing', 'SEO', 'Social Media', 'Digital']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', icon: <FaCalendarAlt />, count: events.length },
    { id: 'conference', name: 'Conferences', icon: <FaUserTie />, count: events.filter(e => e.type === 'conference').length },
    { id: 'workshop', name: 'Workshops', icon: <FaChalkboardTeacher />, count: events.filter(e => e.type === 'workshop').length },
    { id: 'summit', name: 'Summits', icon: <FaMicrophone />, count: events.filter(e => e.type === 'summit').length },
    { id: 'bootcamp', name: 'Bootcamps', icon: <FaLaptop />, count: events.filter(e => e.type === 'bootcamp').length },
    { id: 'meetup', name: 'Meetups', icon: <FaUsers />, count: events.filter(e => e.type === 'meetup').length },
    { id: 'career-fair', name: 'Career Fairs', icon: <FaRegCalendarCheck />, count: events.filter(e => e.type === 'career-fair').length },
    { id: 'masterclass', name: 'Masterclasses', icon: <FaStar />, count: events.filter(e => e.type === 'masterclass').length }
  ];

  const filteredEvents = events
    .filter(event => {
      const matchesCategory = activeFilter === 'all' || event.type === activeFilter;
      const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           event.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const getEventTypeColor = (type) => {
    const colors = {
      conference: '#FF6B6B',
      workshop: '#4ECDC4',
      summit: '#45B7D1',
      bootcamp: '#96CEB4',
      meetup: '#FECA57',
      'career-fair': '#FF9FF3',
      masterclass: '#54A0FF'
    };
    return colors[type] || '#667eea';
  };

  const isUpcoming = (dateString) => {
    return new Date(dateString) >= new Date();
  };

  return (
    <div className="events-page">
      
      {/* Hero Section */}
      <section className="events-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Upcoming Events</h1>
            <p className="hero-subtitle">
              Join our community of learners and professionals at exciting events, workshops, and conferences. 
              Learn, network, and grow with industry experts.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">{events.filter(e => isUpcoming(e.date)).length}</div>
                <div className="stat-label">Upcoming Events</div>
              </div>
              <div className="stat">
                <div className="stat-number">{events.reduce((sum, event) => sum + event.attendees, 0).toLocaleString()}+</div>
                <div className="stat-label">Total Attendees</div>
              </div>
              <div className="stat">
                <div className="stat-number">{events.filter(e => e.isFree).length}</div>
                <div className="stat-label">Free Events</div>
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
                placeholder="Search events by title, description, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="filter-controls">
              <div className="category-filters">
                <div className="filter-label">
                  <FaFilter className="filter-icon" />
                  Filter by Type:
                </div>
                <div className="category-buttons">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      className={`category-btn ${activeFilter === category.id ? 'active' : ''}`}
                      onClick={() => setActiveFilter(category.id)}
                      style={{
                        '--category-color': getEventTypeColor(category.id)
                      }}
                    >
                      <span className="category-icon">{category.icon}</span>
                      {category.name}
                      <span className="category-count">({category.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="view-controls">
                <div className="view-label">View:</div>
                <div className="view-buttons">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    Grid
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    List
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <div className="events-header">
            <h2>Discover Amazing Events</h2>
            <p className="events-count">
              Showing {filteredEvents.length} of {events.length} events
            </p>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="no-events">
              <FaCalendarAlt className="no-events-icon" />
              <h3>No events found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className={`events-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
              {filteredEvents.map(event => (
                <div key={event.id} className="event-card">
                  <div className="event-image">
                    <img src={event.image} alt={event.title} />
                    <div 
                      className="event-type"
                      style={{ backgroundColor: getEventTypeColor(event.type) }}
                    >
                      {event.type}
                    </div>
                    {event.isVirtual && (
                      <div className="virtual-badge">
                        <FaVideo className="virtual-icon" />
                        Virtual
                      </div>
                    )}
                    {event.isFree && (
                      <div className="free-badge">Free</div>
                    )}
                  </div>
                  
                  <div className="event-content">
                    <div className="event-header">
                      <h3 className="event-title">{event.title}</h3>
                      <div className="event-actions">
                        <button className="action-btn">
                          <FaBookmark />
                        </button>
                        <button className="action-btn">
                          <FaShare />
                        </button>
                      </div>
                    </div>
                    
                    <p className="event-description">{event.description}</p>

                    <div className="event-details">
                      <div className="detail-item">
                        <FaCalendarAlt className="detail-icon" />
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="detail-item">
                        <FaClock className="detail-icon" />
                        <span>{event.time}</span>
                      </div>
                      <div className="detail-item">
                        <FaMapMarkerAlt className="detail-icon" />
                        <span>{event.location}</span>
                      </div>
                      <div className="detail-item">
                        <FaUsers className="detail-icon" />
                        <span>{event.attendees} / {event.maxAttendees} attending</span>
                      </div>
                    </div>

                    {event.speakers.length > 0 && (
                      <div className="event-speakers">
                        <h4>Featured Speakers:</h4>
                        <div className="speakers-list">
                          {event.speakers.map((speaker, index) => (
                            <div key={index} className="speaker">
                              <div className="speaker-avatar">
                                {speaker.name.split(' ').map(n => n[0]).join('')}
                              </div>
                              <div className="speaker-info">
                                <div className="speaker-name">{speaker.name}</div>
                                <div className="speaker-role">{speaker.role}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="event-tags">
                      {event.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                      ))}
                    </div>

                    <div className="event-footer">
                      <div className="event-pricing">
                        {event.isFree ? (
                          <span className="price-free">Free</span>
                        ) : (
                          <span className="price-paid">${event.price}</span>
                        )}
                      </div>
                      <div className="event-actions-main">
                        <button className={`btn btn-primary ${!isUpcoming(event.date) ? 'btn-past' : ''}`}>
                          {isUpcoming(event.date) ? 'Register Now' : 'Event Ended'}
                        </button>
                        <button className="btn btn-outline">
                          View Details
                        </button>
                      </div>
                    </div>

                    {!isUpcoming(event.date) && (
                      <div className="past-event-overlay">
                        <span>Past Event</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="events-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Host Your Event With Us</h2>
            <p>
              Have an amazing event idea? Partner with EduMaster to reach thousands of eager learners 
              and professionals in our community.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Submit Event Proposal</button>
              <button className="btn btn-outline-light">Become a Speaker</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Events;