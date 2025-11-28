import React, { useState } from 'react';
import '../App.css';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const categories = [
    {
      id: 'general',
      name: 'General Help',
      icon: '❓',
      questions: [
        {
          id: 1,
          question: 'How do I create an account?',
          answer: 'To create an account, click on the "Sign Up" button in the top right corner, fill in your details including email and password, and verify your email address through the link we send you.'
        },
        {
          id: 2,
          question: 'How can I reset my password?',
          answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a password reset link. Follow the instructions in the email to set a new password.'
        },
        {
          id: 3,
          question: 'Is my personal information secure?',
          answer: 'Yes, we use industry-standard encryption and security measures to protect your personal information. We never share your data with third parties without your consent.'
        }
      ]
    },
    {
      id: 'billing',
      name: 'Billing & Payments',
      icon: '💳',
      questions: [
        {
          id: 4,
          question: 'What payment methods do you accept?',
          answer: 'We accept credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our encrypted payment gateway.'
        },
        {
          id: 5,
          question: 'How do I update my payment information?',
          answer: 'Go to your account settings, click on "Billing Information", and then "Update Payment Method". You can add new cards or remove old ones from this section.'
        },
        {
          id: 6,
          question: 'Can I get a refund?',
          answer: 'We offer a 30-day money-back guarantee for all our plans. Contact our support team within 30 days of purchase to request a refund.'
        }
      ]
    },
    {
      id: 'technical',
      name: 'Technical Support',
      icon: '🔧',
      questions: [
        {
          id: 7,
          question: 'The website is not loading properly',
          answer: 'Try clearing your browser cache and cookies, or try using a different browser. If the issue persists, contact our technical support team with details about your browser and operating system.'
        },
        {
          id: 8,
          question: 'How do I enable cookies?',
          answer: 'In Chrome: Settings > Privacy and Security > Cookies. In Firefox: Options > Privacy & Security > Cookies. In Safari: Preferences > Privacy > Cookies. Enable "Allow all cookies" or add our site to exceptions.'
        },
        {
          id: 9,
          question: 'I\'m having trouble uploading files',
          answer: 'Make sure your file meets our size and format requirements. Try compressing large files or converting them to supported formats. If problems continue, check your internet connection.'
        }
      ]
    },
    {
      id: 'account',
      name: 'Account Management',
      icon: '👤',
      questions: [
        {
          id: 10,
          question: 'How do I change my email address?',
          answer: 'Go to Account Settings > Personal Information. Click on "Change Email", enter your new email address, and verify it through the confirmation link we send.'
        },
        {
          id: 11,
          question: 'Can I transfer my account to someone else?',
          answer: 'Account transfers require verification for security reasons. Please contact our support team with both parties\' information to initiate the transfer process.'
        },
        {
          id: 12,
          question: 'How do I delete my account?',
          answer: 'In Account Settings, scroll to the bottom and click "Delete Account". Note that this action is permanent and cannot be undone. All your data will be permanently removed.'
        }
      ]
    },
    {
      id: 'features',
      name: 'Features & Usage',
      icon: '⚡',
      questions: [
        {
          id: 13,
          question: 'How do I use the collaboration features?',
          answer: 'To collaborate, invite team members via email, set permission levels, and use the real-time editing features. All changes are automatically saved and synced across devices.'
        },
        {
          id: 14,
          question: 'Can I use this on mobile devices?',
          answer: 'Yes! We have dedicated mobile apps for iOS and Android, plus a mobile-optimized website. Download our app from the App Store or Google Play Store.'
        },
        {
          id: 15,
          question: 'Are there keyboard shortcuts?',
          answer: 'Yes! Press Ctrl+/ (Cmd+/ on Mac) to see all available keyboard shortcuts. Common shortcuts include Ctrl+S to save, Ctrl+C to copy, and Ctrl+V to paste.'
        }
      ]
    }
  ];

  const popularArticles = [
    { id: 1, title: 'Getting Started Guide', category: 'general', views: 1250 },
    { id: 2, title: 'Troubleshooting Common Issues', category: 'technical', views: 890 },
    { id: 3, title: 'Understanding Your Bill', category: 'billing', views: 760 },
    { id: 4, title: 'Advanced Feature Guide', category: 'features', views: 540 }
  ];

  const contactMethods = [
    {
      method: 'Live Chat',
      description: 'Get instant help from our support team',
      availability: '24/7',
      icon: '💬',
      responseTime: '2-5 minutes'
    },
    {
      method: 'Email Support',
      description: 'Send us a detailed message',
      availability: '24/7',
      icon: '📧',
      responseTime: '4-12 hours'
    },
    {
      method: 'Phone Support',
      description: 'Talk directly with our experts',
      availability: 'Mon-Fri, 9AM-6PM EST',
      icon: '📞',
      responseTime: 'Immediate'
    },
    {
      method: 'Community Forum',
      description: 'Get help from other users',
      availability: 'Always available',
      icon: '👥',
      responseTime: 'Varies'
    }
  ];

  const filteredQuestions = categories
    .find(cat => cat.id === activeCategory)?.questions
    .filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) || [];

  const allQuestions = categories.flatMap(cat => cat.questions);
  const searchResults = searchQuery ? 
    allQuestions.filter(q => 
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

  return (
    <div className="help-center">
      {/* Hero Section */}
      <section className="help-hero">
        <div className="container">
          <div className="hero-content">
            <h1>How can we help you?</h1>
            <p>Find answers to common questions or contact our support team</p>
            <div className="search-container">
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍 Search</button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="quick-help">
        <div className="container">
          <h2>Quick Help</h2>
          <div className="quick-links">
            <div className="quick-card">
              <div className="quick-icon">🚀</div>
              <h3>Getting Started</h3>
              <p>New user guide and setup instructions</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon">🔐</div>
              <h3>Account Security</h3>
              <p>Password reset and security settings</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon">💸</div>
              <h3>Billing Help</h3>
              <p>Payment issues and subscription questions</p>
            </div>
            <div className="quick-card">
              <div className="quick-icon">📱</div>
              <h3>Mobile App</h3>
              <p>App installation and mobile features</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchQuery && (
        <section className="search-results">
          <div className="container">
            <h2>Search Results for "{searchQuery}"</h2>
            <div className="results-list">
              {searchResults.length > 0 ? (
                searchResults.map(result => (
                  <div 
                    key={result.id} 
                    className="result-item"
                    onClick={() => setSelectedQuestion(result)}
                  >
                    <h4>{result.question}</h4>
                    <p>{result.answer.substring(0, 100)}...</p>
                    <span className="read-more">Read more →</span>
                  </div>
                ))
              ) : (
                <div className="no-results">
                  <p>No results found for "{searchQuery}"</p>
                  <p>Try different keywords or contact our support team</p>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {!searchQuery && (
        <>
          <section className="faq-section">
            <div className="container">
              <h2>Frequently Asked Questions</h2>
              
              {/* Category Tabs */}
              <div className="category-tabs">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="tab-icon">{category.icon}</span>
                    {category.name}
                  </button>
                ))}
              </div>

              {/* Questions List */}
              <div className="questions-list">
                {filteredQuestions.map(item => (
                  <div 
                    key={item.id} 
                    className={`question-item ${selectedQuestion?.id === item.id ? 'expanded' : ''}`}
                  >
                    <div 
                      className="question-header"
                      onClick={() => setSelectedQuestion(selectedQuestion?.id === item.id ? null : item)}
                    >
                      <h3>{item.question}</h3>
                      <span className="toggle-icon">
                        {selectedQuestion?.id === item.id ? '−' : '+'}
                      </span>
                    </div>
                    {selectedQuestion?.id === item.id && (
                      <div className="answer-content">
                        <p>{item.answer}</p>
                        <div className="answer-actions">
                          <button className="helpful-btn">👍 Helpful</button>
                          <button className="not-helpful-btn">👎 Not Helpful</button>
                          <button className="share-btn">📤 Share</button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Popular Articles */}
          <section className="popular-articles">
            <div className="container">
              <h2>Popular Help Articles</h2>
              <div className="articles-grid">
                {popularArticles.map(article => (
                  <div key={article.id} className="article-card">
                    <h3>{article.title}</h3>
                    <div className="article-meta">
                      <span className="category">{article.category}</span>
                      <span className="views">👁️ {article.views} views</span>
                    </div>
                    <button className="read-btn">Read Article →</button>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <h2>Still need help? Contact us</h2>
          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <div key={index} className="contact-card">
                <div className="contact-icon">{method.icon}</div>
                <h3>{method.method}</h3>
                <p>{method.description}</p>
                <div className="contact-details">
                  <span className="availability">🕒 {method.availability}</span>
                  <span className="response-time">⏱️ {method.responseTime}</span>
                </div>
                <button className="contact-btn">Get Help</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Status */}
      <section className="status-section">
        <div className="container">
          <div className="status-card">
            <div className="status-indicator online"></div>
            <div className="status-content">
              <h3>All systems operational</h3>
              <p>No ongoing incidents or maintenance</p>
            </div>
            <button className="status-btn">View Status Page</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;