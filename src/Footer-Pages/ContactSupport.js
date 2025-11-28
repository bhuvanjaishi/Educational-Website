import React, { useState } from 'react';
import '../App.css';

const ContactSupport = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    priority: 'medium',
    message: '',
    attachments: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const supportCategories = [
    {
      id: 'general',
      name: 'General Support',
      icon: '❓',
      description: 'General questions and account assistance',
      responseTime: '2-4 hours'
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: '🔧',
      description: 'Technical issues and bug reports',
      responseTime: '1-2 hours'
    },
    {
      id: 'billing',
      name: 'Billing & Payments',
      icon: '💳',
      description: 'Billing questions and payment issues',
      responseTime: '4-6 hours'
    },
    {
      id: 'feature',
      name: 'Feature Request',
      icon: '💡',
      description: 'Suggest new features or improvements',
      responseTime: '24-48 hours'
    },
    {
      id: 'bug',
      name: 'Bug Report',
      icon: '🐛',
      description: 'Report bugs or unexpected behavior',
      responseTime: '2-4 hours'
    },
    {
      id: 'security',
      name: 'Security Issue',
      icon: '🔒',
      description: 'Report security vulnerabilities',
      responseTime: 'Immediate'
    }
  ];

  const contactMethods = [
    {
      method: 'Live Chat',
      description: 'Instant help from our support team',
      availability: '24/7',
      icon: '💬',
      responseTime: '2-5 minutes',
      action: 'Start Chat',
      color: '#27ae60'
    },
    {
      method: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      icon: '📧',
      responseTime: '2-4 hours',
      action: 'Send Email',
      color: '#3498db'
    },
    {
      method: 'Phone Support',
      description: 'Talk directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      icon: '📞',
      responseTime: 'Immediate',
      action: 'Call Now',
      color: '#e74c3c'
    },
    {
      method: 'Community Forum',
      description: 'Get help from other users',
      availability: 'Always available',
      icon: '👥',
      responseTime: 'Varies',
      action: 'Visit Forum',
      color: '#9b59b6'
    }
  ];

  const faqItems = [
    {
      question: 'What information should I include in my support request?',
      answer: 'Please include your account email, detailed description of the issue, steps to reproduce, and any error messages or screenshots.'
    },
    {
      question: 'How long does it take to get a response?',
      answer: 'Response times vary by priority: Critical (1-2 hours), High (2-4 hours), Medium (4-8 hours), Low (24 hours).'
    },
    {
      question: 'Do you offer support in languages other than English?',
      answer: 'Yes! We offer support in English, Spanish, French, and German during business hours.'
    },
    {
      question: 'Can I get help with integration setup?',
      answer: 'Absolutely! Our technical team can assist with API integration, third-party connections, and custom setup requirements.'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files]
    }));
  };

  const removeAttachment = (index) => {
    setFormData(prev => ({
      ...prev,
      attachments: prev.attachments.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: 'general',
        priority: 'medium',
        message: '',
        attachments: []
      });
      setSubmitted(false);
    }, 5000);
  };

  const handleQuickAction = (method) => {
    switch(method) {
      case 'Start Chat':
        window.open('https://chat.support.com', '_blank');
        break;
      case 'Send Email':
        window.location.href = 'mailto:support@company.com';
        break;
      case 'Call Now':
        window.location.href = 'tel:1-800-SUPPORT';
        break;
      case 'Visit Forum':
        window.open('https://community.company.com', '_blank');
        break;
      default:
        break;
    }
  };

  if (submitted) {
    return (
      <div className="contact-support">
        <div className="success-message">
          <div className="success-icon">✅</div>
          <h2>Support Request Submitted!</h2>
          <p>We've received your request and will get back to you within {supportCategories.find(cat => cat.id === formData.category)?.responseTime}.</p>
          <div className="success-details">
            <p><strong>Ticket ID:</strong> #SUP-{Math.random().toString(36).substr(2, 9).toUpperCase()}</p>
            <p><strong>Category:</strong> {supportCategories.find(cat => cat.id === formData.category)?.name}</p>
            <p><strong>Priority:</strong> {formData.priority}</p>
          </div>
          <div className="success-actions">
            <button onClick={() => setSubmitted(false)} className="new-request-btn">
              Submit Another Request
            </button>
            <button className="view-status-btn">
              View Request Status
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-support">
      {/* Hero Section */}
      <section className="support-hero">
        <div className="container">
          <div className="hero-content">
            <h1>How can we help you?</h1>
            <p>Our support team is here to assist you with any questions or issues</p>
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support Available</div>
              </div>
              <div className="stat">
                <div className="stat-number">98%</div>
                <div className="stat-label">Satisfaction Rate</div>
              </div>
              <div className="stat">
                <div className="stat-number">&lt; 2h</div>
                <div className="stat-label">Avg. Response Time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="quick-contact">
        <div className="container">
          <h2>Quick Support Options</h2>
          <div className="contact-methods-grid">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-method-card">
                <div className="method-icon" style={{ backgroundColor: method.color }}>
                  {method.icon}
                </div>
                <h3>{method.method}</h3>
                <p>{method.description}</p>
                <div className="method-details">
                  <div className="availability">
                    <span className="detail-icon">🕒</span>
                    {method.availability}
                  </div>
                  <div className="response-time">
                    <span className="detail-icon">⏱️</span>
                    {method.responseTime}
                  </div>
                </div>
                <button 
                  className="method-action-btn"
                  style={{ backgroundColor: method.color }}
                  onClick={() => handleQuickAction(method.action)}
                >
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Support Form */}
      <section className="support-form-section">
        <div className="container">
          <div className="form-container">
            <div className="form-header">
              <h2>Submit a Support Request</h2>
              <p>Fill out the form below and we'll get back to you as soon as possible</p>
            </div>

            {/* Category Selection */}
            <div className="category-selection">
              <h3>What do you need help with?</h3>
              <div className="categories-grid">
                {supportCategories.map(category => (
                  <div 
                    key={category.id}
                    className={`category-card ${formData.category === category.id ? 'active' : ''}`}
                    onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                  >
                    <div className="category-icon">{category.icon}</div>
                    <h4>{category.name}</h4>
                    <p>{category.description}</p>
                    <div className="response-info">
                      Avg. response: {category.responseTime}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Support Form */}
            <form onSubmit={handleSubmit} className="support-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="Brief description of your issue"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="priority">Priority Level</label>
                  <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleInputChange}
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="medium">Medium - Feature request</option>
                    <option value="high">High - System issue</option>
                    <option value="critical">Critical - Service down</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Detailed Description *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  placeholder="Please provide detailed information about your issue, including steps to reproduce, error messages, and what you were trying to accomplish..."
                />
                <div className="char-count">
                  {formData.message.length}/5000 characters
                </div>
              </div>

              {/* File Upload */}
              <div className="form-group">
                <label htmlFor="attachments">Attachments (Optional)</label>
                <div className="file-upload-area">
                  <input
                    type="file"
                    id="attachments"
                    multiple
                    onChange={handleFileUpload}
                    className="file-input"
                  />
                  <div className="upload-placeholder">
                    <div className="upload-icon">📎</div>
                    <p>Click to upload files or drag and drop</p>
                    <small>Maximum file size: 10MB each</small>
                  </div>
                </div>
                
                {/* Attachments List */}
                {formData.attachments.length > 0 && (
                  <div className="attachments-list">
                    <h4>Attached Files:</h4>
                    {formData.attachments.map((file, index) => (
                      <div key={index} className="attachment-item">
                        <span className="file-icon">📄</span>
                        <span className="file-name">{file.name}</span>
                        <span className="file-size">
                          ({(file.size / 1024 / 1024).toFixed(2)} MB)
                        </span>
                        <button
                          type="button"
                          onClick={() => removeAttachment(index)}
                          className="remove-attachment"
                        >
                          🗑️
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Submit Button */}
              <div className="form-actions">
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Submitting...
                    </>
                  ) : (
                    'Submit Support Request'
                  )}
                </button>
                <p className="form-note">
                  By submitting this form, you agree to our terms of service and privacy policy.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="support-faq">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Status Section */}
      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="status-indicator online"></div>
            <div className="status-content">
              <h3>All Systems Operational</h3>
              <p>No ongoing incidents or maintenance affecting support services</p>
            </div>
            <div className="status-actions">
              <button className="status-btn">View Status Page</button>
              <button className="status-btn">Service Updates</button>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="emergency-contact">
        <div className="container">
          <div className="emergency-card">
            <div className="emergency-icon">🚨</div>
            <div className="emergency-content">
              <h3>Emergency Support</h3>
              <p>For critical system outages or security incidents requiring immediate attention</p>
              <div className="emergency-contacts">
                <div className="emergency-contact-item">
                  <span className="contact-type">Phone:</span>
                  <span className="contact-value">1-800-EMERGENCY</span>
                </div>
                <div className="emergency-contact-item">
                  <span className="contact-type">Email:</span>
                  <span className="contact-value">emergency@company.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSupport;