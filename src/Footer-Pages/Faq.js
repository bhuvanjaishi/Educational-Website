import React, { useState } from 'react';
import '../App.css';

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const faqData = [
    {
      category: 'general',
      title: 'General Questions',
      icon: '❓',
      questions: [
        {
          id: 1,
          question: 'What is your service about?',
          answer: 'Our service provides comprehensive solutions for businesses and individuals looking to streamline their operations. We offer a range of tools and features designed to improve productivity and efficiency.',
          tags: ['general', 'about']
        },
        {
          id: 2,
          question: 'Is there a free trial available?',
          answer: 'Yes, we offer a 14-day free trial for all new users. No credit card required. You can explore all features during the trial period and upgrade to a paid plan when ready.',
          tags: ['trial', 'pricing']
        },
        {
          id: 3,
          question: 'How do I get started?',
          answer: 'Getting started is easy! Simply sign up for an account, verify your email, and follow our onboarding guide. You can be up and running in less than 10 minutes.',
          tags: ['onboarding', 'setup']
        },
        {
          id: 4,
          question: 'Do you offer student discounts?',
          answer: 'Yes, we offer a 50% discount for students with valid educational email addresses. Contact our support team with your student ID for verification.',
          tags: ['pricing', 'discount']
        }
      ]
    },
    {
      category: 'account',
      title: 'Account & Billing',
      icon: '💳',
      questions: [
        {
          id: 5,
          question: 'How can I update my payment method?',
          answer: 'You can update your payment method in the Billing section of your account settings. We accept credit cards, PayPal, and bank transfers.',
          tags: ['billing', 'payment']
        },
        {
          id: 6,
          question: 'Can I change my plan anytime?',
          answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate the charges accordingly.',
          tags: ['plan', 'billing']
        },
        {
          id: 7,
          question: 'How do I cancel my subscription?',
          answer: 'You can cancel your subscription from the Billing page. Your account will remain active until the end of your current billing period.',
          tags: ['cancellation', 'billing']
        },
        {
          id: 8,
          question: 'Where can I download my invoices?',
          answer: 'All invoices are available in the Billing section under "Invoice History". You can download PDF copies for your records.',
          tags: ['invoice', 'billing']
        }
      ]
    },
    {
      category: 'technical',
      title: 'Technical Support',
      icon: '🔧',
      questions: [
        {
          id: 9,
          question: 'What browsers are supported?',
          answer: 'We support the latest versions of Chrome, Firefox, Safari, and Edge. For the best experience, we recommend using Chrome.',
          tags: ['browser', 'compatibility']
        },
        {
          id: 10,
          question: 'Do you have a mobile app?',
          answer: 'Yes! We have native mobile apps for both iOS and Android. You can download them from the App Store and Google Play Store.',
          tags: ['mobile', 'app']
        },
        {
          id: 11,
          question: 'How secure is my data?',
          answer: 'We use industry-standard encryption (SSL/TLS) and follow best security practices. Your data is stored in secure, SOC 2 compliant data centers.',
          tags: ['security', 'privacy']
        },
        {
          id: 12,
          question: 'What are the system requirements?',
          answer: 'Our web app works on any modern browser. For mobile apps, you need iOS 12+ or Android 8+. No special hardware requirements.',
          tags: ['requirements', 'technical']
        }
      ]
    },
    {
      category: 'features',
      title: 'Features & Usage',
      icon: '⚡',
      questions: [
        {
          id: 13,
          question: 'How many team members can I invite?',
          answer: 'The number depends on your plan. Basic: 5 members, Pro: 25 members, Enterprise: Unlimited members. You can always upgrade for more seats.',
          tags: ['team', 'collaboration']
        },
        {
          id: 14,
          question: 'Can I export my data?',
          answer: 'Yes, you can export your data in multiple formats (CSV, JSON, PDF) from the Settings page. Enterprise plans offer bulk export options.',
          tags: ['export', 'data']
        },
        {
          id: 15,
          question: 'Are there API access?',
          answer: 'Yes, we provide REST API access for all paid plans. Documentation is available in our Developer Center.',
          tags: ['api', 'developer']
        },
        {
          id: 16,
          question: 'Do you offer custom integrations?',
          answer: 'Yes, we offer custom integrations for Enterprise customers. Contact our sales team to discuss your specific requirements.',
          tags: ['integration', 'enterprise']
        }
      ]
    },
    {
      category: 'support',
      title: 'Support & Contact',
      icon: '👥',
      questions: [
        {
          id: 17,
          question: 'How can I contact support?',
          answer: 'You can reach us via email at support@company.com, through live chat on our website, or by phone at 1-800-HELP-NOW.',
          tags: ['contact', 'support']
        },
        {
          id: 18,
          question: 'What are your support hours?',
          answer: 'Our support team is available 24/7 via email and chat. Phone support is available Monday-Friday, 9 AM - 6 PM EST.',
          tags: ['hours', 'support']
        },
        {
          id: 19,
          question: 'Do you offer training sessions?',
          answer: 'Yes, we offer free onboarding sessions and paid advanced training workshops. Schedule a session from your account dashboard.',
          tags: ['training', 'onboarding']
        },
        {
          id: 20,
          question: 'Where can I find documentation?',
          answer: 'Comprehensive documentation is available in our Help Center. We also have video tutorials and community forums.',
          tags: ['documentation', 'help']
        }
      ]
    }
  ];

  const popularQuestions = [
    { id: 1, question: 'How do I reset my password?', category: 'account' },
    { id: 2, question: 'Can I use the service offline?', category: 'technical' },
    { id: 3, question: 'What payment methods do you accept?', category: 'account' },
    { id: 4, question: 'Is there a limit on file uploads?', category: 'features' }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const currentCategory = faqData.find(cat => cat.category === activeCategory);
  const allQuestions = faqData.flatMap(cat => cat.questions);

  const filteredQuestions = searchQuery
    ? allQuestions.filter(q =>
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : currentCategory?.questions || [];

  return (
    <div className="faq-page">
      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Frequently Asked Questions</h1>
            <p>Find quick answers to common questions about our service</p>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-btn">🔍 Search</button>
            </div>
            <div className="hero-stats">
              <div className="stat">
                <span className="number">{allQuestions.length}+</span>
                <span className="label">Questions Answered</span>
              </div>
              <div className="stat">
                <span className="number">24/7</span>
                <span className="label">Support Available</span>
              </div>
              <div className="stat">
                <span className="number">98%</span>
                <span className="label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Questions */}
      {!searchQuery && (
        <section className="popular-questions">
          <div className="container">
            <h2>Popular Questions</h2>
            <div className="popular-grid">
              {popularQuestions.map(popular => (
                <div 
                  key={popular.id}
                  className="popular-card"
                  onClick={() => {
                    setSearchQuery(popular.question);
                  }}
                >
                  <span className="question-text">{popular.question}</span>
                  <span className="category-tag">{popular.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main FAQ Content */}
      <section className="faq-content">
        <div className="container">
          {!searchQuery ? (
            <>
              {/* Category Navigation */}
              <div className="category-nav">
                {faqData.map(category => (
                  <button
                    key={category.category}
                    className={`category-btn ${activeCategory === category.category ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.category)}
                  >
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.title}</span>
                  </button>
                ))}
              </div>

              {/* Category Title */}
              <div className="category-header">
                <h2>{currentCategory?.title}</h2>
                <p>Browse through common questions about {currentCategory?.title.toLowerCase()}</p>
              </div>
            </>
          ) : (
            /* Search Results Header */
            <div className="search-header">
              <h2>Search Results</h2>
              <p>Found {filteredQuestions.length} results for "{searchQuery}"</p>
              <button 
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                Clear Search
              </button>
            </div>
          )}

          {/* FAQ Items */}
          <div className="faq-items">
            {filteredQuestions.length > 0 ? (
              filteredQuestions.map(item => (
                <div 
                  key={item.id} 
                  className={`faq-item ${openItems.includes(item.id) ? 'active' : ''}`}
                >
                  <div 
                    className="faq-question"
                    onClick={() => toggleItem(item.id)}
                  >
                    <h3>{item.question}</h3>
                    <span className="toggle-icon">
                      {openItems.includes(item.id) ? '−' : '+'}
                    </span>
                  </div>
                  {openItems.includes(item.id) && (
                    <div className="faq-answer">
                      <p>{item.answer}</p>
                      <div className="answer-footer">
                        <div className="tags">
                          {item.tags.map((tag, index) => (
                            <span key={index} className="tag">#{tag}</span>
                          ))}
                        </div>
                        <div className="answer-actions">
                          <button className="action-btn helpful">
                            👍 Helpful ({Math.floor(Math.random() * 50)})
                          </button>
                          <button className="action-btn not-helpful">
                            👎 Not Helpful ({Math.floor(Math.random() * 10)})
                          </button>
                          <button className="action-btn share">
                            📤 Share
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))
            ) : (
              /* No Results */
              <div className="no-results">
                <div className="no-results-icon">🔍</div>
                <h3>No results found</h3>
                <p>We couldn't find any questions matching "{searchQuery}"</p>
                <div className="suggestions">
                  <p>Try:</p>
                  <ul>
                    <li>Using different keywords</li>
                    <li>Checking for spelling errors</li>
                    <li>Searching more general terms</li>
                  </ul>
                </div>
                <button 
                  className="clear-search-btn"
                  onClick={() => setSearchQuery('')}
                >
                  View All Questions
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="faq-cta">
        <div className="container">
          <div className="cta-content">
            <h2>Still have questions?</h2>
            <p>Can't find the answer you're looking for? Our support team is here to help!</p>
            <div className="cta-buttons">
              <button className="cta-btn primary">Contact Support</button>
              <button className="cta-btn secondary">Schedule a Call</button>
              <button className="cta-btn outline">Live Chat</button>
            </div>
            <div className="contact-info">
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>support@company.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <span>1-800-HELP-NOW</span>
              </div>
              <div className="contact-item">
                <span className="icon">🕒</span>
                <span>24/7 Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="quick-links-section">
        <div className="container">
          <h3>Quick Resources</h3>
          <div className="quick-links-grid">
            <a href="/help-center" className="quick-link">
              <span className="link-icon">📚</span>
              <span className="link-text">Help Center</span>
            </a>
            <a href="/documentation" className="quick-link">
              <span className="link-icon">📖</span>
              <span className="link-text">Documentation</span>
            </a>
            <a href="/video-tutorials" className="quick-link">
              <span className="link-icon">🎥</span>
              <span className="link-text">Video Tutorials</span>
            </a>
            <a href="/community" className="quick-link">
              <span className="link-icon">👥</span>
              <span className="link-text">Community Forum</span>
            </a>
            <a href="/status" className="quick-link">
              <span className="link-icon">📊</span>
              <span className="link-text">System Status</span>
            </a>
            <a href="/blog" className="quick-link">
              <span className="link-icon">✍️</span>
              <span className="link-text">Blog & Updates</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;