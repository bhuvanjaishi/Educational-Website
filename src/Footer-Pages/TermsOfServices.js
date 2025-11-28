import React, { useState } from 'react';
import '../App.css';

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState('acceptance');
  const [accepted, setAccepted] = useState(false);

  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using these services, you shall be subject to any posted guidelines or rules applicable to such services.`
    },
    {
      id: 'description',
      title: 'Description of Service',
      content: `We provide various online services including but not limited to web applications, mobile applications, and related services (collectively, the "Service"). The Service may include new features, tools, and resources which are subject to these Terms of Service.`
    },
    {
      id: 'registration',
      title: 'Registration and Account',
      content: `To access certain features of the Service, you may be required to register for an account. You agree to:
• Provide accurate, current, and complete information during registration
• Maintain and promptly update your account information
• Maintain the security of your password and accept all risks of unauthorized access
• Notify us immediately of any unauthorized use of your account

We reserve the right to disable any user account at our sole discretion.`
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      content: `You are responsible for all activity that occurs under your account. You agree not to use the Service to:

• Violate any laws or regulations
• Infringe upon any intellectual property rights
• Transmit any viruses or malicious code
• Engage in any fraudulent, abusive, or illegal activity
• Harass, abuse, or harm another person
• Attempt to gain unauthorized access to the Service

You retain ownership of any intellectual property rights that you hold in content you submit to the Service.`
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      content: `The Service and its original content, features, and functionality are owned by us and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.

Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent. All other trademarks not owned by us that appear in the Service are the property of their respective owners.`
    },
    {
      id: 'user-content',
      title: 'User-Generated Content',
      content: `Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material. You are responsible for the content that you post to the Service, including its legality, reliability, and appropriateness.

By posting content to the Service, you grant us the right and license to use, modify, publicly perform, publicly display, reproduce, and distribute such content on and through the Service.`
    },
    {
      id: 'prohibited-uses',
      title: 'Prohibited Uses',
      content: `You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:

• In any way that violates any applicable law or regulation
• For the purpose of exploiting, harming, or attempting to exploit or harm minors
• To transmit any advertising or promotional material without our consent
• To impersonate or attempt to impersonate the company or another user
• In any way that could disable, overburden, damage, or impair the Service

We reserve the right to terminate your access for violating any of the prohibited uses.`
    },
    {
      id: 'termination',
      title: 'Termination',
      content: `We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever, including but not limited to a breach of the Terms.

Upon termination, your right to use the Service will immediately cease. If you wish to terminate your account, you may simply discontinue using the Service.`
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      content: `In no event shall we, nor our directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:

• Your access to or use of or inability to access or use the Service
• Any conduct or content of any third party on the Service
• Any content obtained from the Service
• Unauthorized access, use or alteration of your transmissions or content

Our total cumulative liability to you for all claims shall not exceed the amount you have paid us in the past twelve months.`
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: `Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.

We do not warrant that:
• The Service will function uninterrupted, secure or available at any particular time or location
• Any errors or defects will be corrected
• The Service is free of viruses or other harmful components
• The results of using the Service will meet your requirements`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: `These Terms shall be governed and construed in accordance with the laws of the State of California, United States, without regard to its conflict of law provisions.

Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.`
    },
    {
      id: 'changes',
      title: 'Changes to Terms',
      content: `We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.`
    },
    {
      id: 'contact',
      title: 'Contact Information',
      content: `If you have any questions about these Terms, please contact us:

• By email: legal@company.com
• By phone: 1-800-LEGAL-HELP
• By mail: Legal Department, 123 Business Street, Suite 100, San Francisco, CA 94105

For copyright-related inquiries, please contact: copyright@company.com`
    }
  ];

  const importantPoints = [
    {
      icon: '📝',
      title: 'Agreement',
      description: 'By using our service, you agree to these terms'
    },
    {
      icon: '🔒',
      title: 'Account Security',
      description: 'You are responsible for your account security'
    },
    {
      icon: '⚖️',
      title: 'Content Rules',
      description: 'Follow our guidelines for user-generated content'
    },
    {
      icon: '📄',
      title: 'Updates',
      description: 'Terms may be updated with proper notice'
    }
  ];

  const handleAccept = () => {
    setAccepted(true);
    alert('Terms accepted successfully!');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="terms-of-service">
      {/* Header */}
      <header className="terms-header">
        <div className="container">
          <div className="header-content">
            <h1>Terms of Service</h1>
            <p className="last-updated">Last Updated: January 1, 2024</p>
            <p className="header-description">
              Please read these terms carefully before using our services. By using our services, you agree to be bound by these terms.
            </p>
            <div className="header-actions">
              <button className="action-btn print" onClick={handlePrint}>
                🖨️ Print Terms
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Quick Overview */}
      <section className="quick-overview">
        <div className="container">
          <h2>Key Points</h2>
          <div className="points-grid">
            {importantPoints.map((point, index) => (
              <div key={index} className="point-card">
                <div className="point-icon">{point.icon}</div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="terms-content">
        <div className="container">
          <div className="content-layout">
            {/* Sidebar Navigation */}
            <nav className="terms-sidebar">
              <h3>Table of Contents</h3>
              <ul className="sidebar-nav">
                {sections.map(section => (
                  <li key={section.id}>
                    <button
                      className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                      onClick={() => setActiveSection(section.id)}
                    >
                      {section.title}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Acceptance Box */}
              <div className="acceptance-box">
                <h4>Accept Terms</h4>
                <p>By checking this box, you acknowledge that you have read and agree to our Terms of Service.</p>
                <label className="acceptance-label">
                  <input 
                    type="checkbox" 
                    checked={accepted}
                    onChange={(e) => setAccepted(e.target.checked)}
                  />
                  <span className="checkmark"></span>
                  I accept the Terms of Service
                </label>
                <button 
                  className="accept-btn"
                  onClick={handleAccept}
                  disabled={!accepted}
                >
                  Confirm Acceptance
                </button>
              </div>
            </nav>

            {/* Main Terms Content */}
            <main className="terms-main">
              {sections.map(section => (
                <section 
                  key={section.id}
                  id={section.id}
                  className={`terms-section ${activeSection === section.id ? 'active' : ''}`}
                >
                  <h2>{section.title}</h2>
                  <div className="section-content">
                    {section.content.split('\n').map((paragraph, index) => (
                      <p key={index}>
                        {paragraph.trim() ? paragraph : <br />}
                      </p>
                    ))}
                  </div>

                  {/* Additional content for specific sections */}
                  {section.id === 'user-responsibilities' && (
                    <div className="additional-info">
                      <h4>Prohibited Content</h4>
                      <div className="prohibited-list">
                        <div className="prohibited-item">
                          <span className="icon">🚫</span>
                          <span>Hate speech or discriminatory content</span>
                        </div>
                        <div className="prohibited-item">
                          <span className="icon">🚫</span>
                          <span>Spam or unsolicited commercial content</span>
                        </div>
                        <div className="prohibited-item">
                          <span className="icon">🚫</span>
                          <span>Malware or harmful software</span>
                        </div>
                        <div className="prohibited-item">
                          <span className="icon">🚫</span>
                          <span>Personal information of others without consent</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {section.id === 'intellectual-property' && (
                    <div className="additional-info">
                      <h4>Copyright Policy</h4>
                      <p>
                        We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property rights of any person.
                      </p>
                      <div className="copyright-steps">
                        <h5>DMCA Takedown Process:</h5>
                        <ol>
                          <li>Submit a written notice with required information</li>
                          <li>We will review and respond within 48 hours</li>
                          <li>Counter-notice process available</li>
                          <li>Repeat infringer policy applies</li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {section.id === 'limitation-liability' && (
                    <div className="additional-info warning">
                      <h4>⚠️ Important Limitations</h4>
                      <p>
                        This section limits our liability to you. Please read it carefully. We are not responsible for:
                      </p>
                      <ul>
                        <li>Service interruptions or downtime</li>
                        <li>Data loss or corruption</li>
                        <li>Third-party actions or content</li>
                        <li>Indirect or consequential damages</li>
                      </ul>
                    </div>
                  )}
                </section>
              ))}
            </main>
          </div>
        </div>
      </div>

      {/* Acceptance Section */}
      <section className="acceptance-section">
        <div className="container">
          <div className="acceptance-content">
            <h2>Ready to Get Started?</h2>
            <p>Accept our terms to continue using our services</p>
            <div className="acceptance-actions">
              <button 
                className="accept-main-btn"
                onClick={handleAccept}
                disabled={!accepted}
              >
                {accepted ? '✅ Terms Accepted' : 'Accept Terms & Continue'}
              </button>
              <div className="acceptance-status">
                {accepted ? (
                  <span className="status-accepted">✔️ You have accepted the Terms of Service</span>
                ) : (
                  <span className="status-pending">Please read and accept the terms above</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="legal-footer">
        <div className="container">
          <div className="footer-content">
            <div className="legal-notice">
              <h4>Legal Notice</h4>
              <p>
                These Terms of Service constitute a legally binding agreement between you and our company. 
                By using our services, you acknowledge that you have read, understood, and agree to be bound by these terms.
              </p>
            </div>
            <div className="footer-links">
              <div className="link-group">
                <h5>Legal Documents</h5>
                <a href="/privacy">Privacy Policy</a>
                <a href="/cookies">Cookie Policy</a>
                <a href="/data-processing">Data Processing Agreement</a>
              </div>
              <div className="link-group">
                <h5>Support</h5>
                <a href="/help">Help Center</a>
                <a href="/contact">Contact Legal Team</a>
                <a href="/disputes">Dispute Resolution</a>
              </div>
              <div className="link-group">
                <h5>Company</h5>
                <a href="/about">About Us</a>
                <a href="/compliance">Compliance</a>
                <a href="/security">Security Information</a>
              </div>
            </div>
            <div className="copyright">
              <p>&copy; 2024 Company Name. All rights reserved.</p>
              <p>These terms are governed by the laws of the State of California.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TermsOfService;