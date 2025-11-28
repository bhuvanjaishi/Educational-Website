import React, { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock,
  FaPaperPlane,
  FaCheckCircle,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaGraduationCap
} from 'react-icons/fa';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Our Campus',
      details: ['123 Education Street', 'Learning City, LC 12345', 'United States'],
      description: 'Come visit our main campus for a tour and consultation'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
      description: 'Available Monday-Friday, 9AM-6PM EST'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@edumaster.com', 'support@edumaster.com'],
      description: 'We\'ll respond within 24 hours'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 4:00 PM', 'Sunday: Closed'],
      description: 'Virtual support available 24/7'
    }
  ];

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'admissions', label: 'Admissions' },
    { value: 'technical', label: 'Technical Support' },
    { value: 'billing', label: 'Billing & Payments' },
    { value: 'partnership', label: 'Partnership' },
    { value: 'careers', label: 'Careers' }
  ];

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'You can enroll directly through our website by browsing courses and clicking the "Enroll Now" button. Our admissions team will guide you through the process.'
    },
    {
      question: 'Do you offer financial aid or scholarships?',
      answer: 'Yes, we offer various scholarship programs and financial aid options. Contact our admissions team to learn about available opportunities.'
    },
    {
      question: 'Can I get a refund if I\'m not satisfied?',
      answer: 'We offer a 30-day money-back guarantee for all our courses. If you\'re not satisfied, contact our support team for a full refund.'
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'We offer both self-paced and instructor-led courses. You can choose the format that best fits your learning style and schedule.'
    }
  ];

  return (
    <div className="contact">
      
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p className="hero-subtitle">
              We're here to help you on your learning journey. Reach out with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main">
        <div className="container">
          <div className="contact-grid">
            
            {/* Contact Information */}
            <div className="contact-info">
              <div className="info-header">
                <h2>Let's Start a Conversation</h2>
                <p>
                  Whether you're a prospective student, current learner, or potential partner, 
                  we're excited to connect with you.
                </p>
              </div>

              <div className="info-cards">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      {info.icon}
                    </div>
                    <div className="info-content">
                      <h4>{info.title}</h4>
                      <div className="info-details">
                        {info.details.map((detail, i) => (
                          <p key={i}>{detail}</p>
                        ))}
                      </div>
                      <p className="info-description">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h4>Follow Us</h4>
                <p>Stay updated with our latest courses and news</p>
                <div className="social-links">
                  <a href="#facebook" className="social-link">
                    <FaFacebookF />
                  </a>
                  <a href="#twitter" className="social-link">
                    <FaTwitter />
                  </a>
                  <a href="#linkedin" className="social-link">
                    <FaLinkedinIn />
                  </a>
                  <a href="#instagram" className="social-link">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-container">
              <div className="form-header">
                <h3>Send us a Message</h3>
                <p>Fill out the form below and we'll get back to you shortly</p>
              </div>

              {isSubmitted ? (
                <div className="success-message">
                  <FaCheckCircle className="success-icon" />
                  <h4>Message Sent Successfully!</h4>
                  <p>
                    Thank you for reaching out. We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">
                      <FaUser className="input-icon" />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <FaEnvelope className="input-icon" />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="inquiryType">
                      <FaGraduationCap className="input-icon" />
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleChange}
                      required
                    >
                      {inquiryTypes.map(type => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Brief subject of your message"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us how we can help you..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="spinner"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="btn-icon" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our programs and services
            </p>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4>{faq.question}</h4>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="map-header">
            <h2>Visit Our Campus</h2>
            <p>Schedule a campus tour and see our facilities in person</p>
          </div>
          <div className="map-container">
            <div className="map-placeholder">
              <div className="map-content">
                <FaMapMarkerAlt className="map-icon" />
                <h3>EduMaster Campus</h3>
                <p>123 Education Street, Learning City, LC 12345</p>
                <button className="btn btn-primary">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>
              Join thousands of students who have transformed their careers with EduMaster. 
              Contact us today to learn more about our programs.
            </p>
            <div className="cta-buttons">
              <button className="btn btn-light">Browse Courses</button>
              <button className="btn btn-outline-light">Schedule a Call</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;