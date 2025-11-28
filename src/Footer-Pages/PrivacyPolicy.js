import React, { useState } from 'react';
import '../App.css';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [lastUpdated] = useState('January 1, 2024');

  const policySections = [
    { id: 'introduction', title: 'Introduction', content: `Welcome to our Privacy Policy. Your privacy is critically important to us. This Privacy Policy document describes how we collect, use, and protect your personal information when you use our services.` },
    { id: 'information-collection', title: 'Information We Collect', content: `We collect several types of information from and about users of our services, including:\n• Personal Information: Name, email address, phone number, and other contact details\n• Usage Data: Information about how you use our website and services\n• Technical Data: IP address, browser type, device information, and cookies\n• Payment Information: Billing details and transaction history (processed securely through our payment providers)` },
    { id: 'how-we-use', title: 'How We Use Your Information', content: `We use the information we collect for various purposes, including:\n• To provide and maintain our services\n• To notify you about changes to our services\n• To allow you to participate in interactive features\n• To provide customer support\n• To gather analysis or valuable information to improve our services\n• To monitor the usage of our services\n• To detect, prevent and address technical issues\n• To provide you with news, special offers, and general information about other goods, services, and events which we offer` },
    { id: 'data-sharing', title: 'Data Sharing and Disclosure', content: `We may share your personal information in the following situations:\n• With Service Providers: We may share your information with third-party vendors who perform services on our behalf\n• For Business Transfers: In connection with any merger, sale of company assets, or acquisition\n• With Affiliates: With our parent company, subsidiaries, and other companies under common control\n• With Business Partners: To offer you certain products, services, or promotions\n• With Your Consent: We may disclose your information for any other purpose with your consent` },
    { id: 'cookies', title: 'Cookies and Tracking Technologies', content: `We use cookies and similar tracking technologies to track activity on our service and hold certain information.\nTypes of cookies we use:\n• Essential Cookies\n• Performance Cookies\n• Functionality Cookies\n• Targeting Cookies` },
    { id: 'data-security', title: 'Data Security', content: `The security of your data is important to us. We implement appropriate technical and organizational security measures.\nHowever, no method is 100% secure.` },
    { id: 'data-retention', title: 'Data Retention', content: `We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.` },
    { id: 'your-rights', title: 'Your Rights', content: `Depending on your location, you may have the following rights regarding your personal information.` },
    { id: 'third-party', title: 'Third-Party Services', content: `Our service may contain links to third-party websites or services that are not operated by us.` },
    { id: 'children-privacy', title: "Children's Privacy", content: `Our services are not intended for use by children under the age of 13.` },
    { id: 'changes', title: 'Changes to This Policy', content: `We may update our Privacy Policy from time to time.` },
    { id: 'contact', title: 'Contact Us', content: `If you have any questions about this Privacy Policy, please contact us.` }
  ];

  const quickFacts = [
    { icon: '📊', title: 'Data Collection', description: 'We collect minimal data necessary to provide our services' },
    { icon: '🔒', title: 'Data Protection', description: 'Your data is encrypted and stored securely' },
    { icon: '👥', title: 'No Selling', description: 'We never sell your personal information to third parties' },
    { icon: '📝', title: 'Your Control', description: 'You have full control over your personal data' }
  ];

  const consentOptions = ['Essential Cookies (Always Active)', 'Performance Cookies', 'Functional Cookies', 'Targeting Cookies', 'Marketing Communications'];

  const handlePrint = () => window.print();
  const handleDownload = () => alert('PDF download would start here');

  return (
    <div id="privacyPolicy">

      {/* Header */}
      <header id="policyHeader">
        <h1 id="policyTitle">Privacy Policy</h1>
        <p id="lastUpdated">Last Updated: {lastUpdated}</p>
        <p id="headerDescription">This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.</p>
        <div id="headerButtons">
          <button id="printButton" onClick={handlePrint}>🖨️ Print Policy</button>
          <button id="downloadButton" onClick={handleDownload}>📥 Download PDF</button>
        </div>
      </header>

      {/* Quick Facts */}
      <section id="quickFacts">
        <h2 id="factsTitle">Key Privacy Points</h2>
        <div id="factsGrid">
          {quickFacts.map((fact, index) => (
            <div key={index} id={`factCard${index}`}>
              <div id={`factIcon${index}`}>{fact.icon}</div>
              <h3 id={`factTitle${index}`}>{fact.title}</h3>
              <p id={`factDesc${index}`}>{fact.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <div id="contentLayout">

        {/* Sidebar */}
        <nav id="policySidebar">
          <h3 id="sidebarTitle">Policy Sections</h3>
          <ul id="sidebarNav">
            {policySections.map(section => (
              <li key={section.id}>
                <button
                  id={`nav${section.id}`}
                  className={activeSection === section.id ? 'active' : ''}
                  onClick={() => setActiveSection(section.id)}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>

          {/* Consent Manager */}
          <div id="consentManager">
            <h4 id="consentTitle">Privacy Preferences</h4>
            {consentOptions.map((option, index) => (
              <div key={index} id={`consentItem${index}`}>
                <label id={`consentLabel${index}`}>
                  <input type="checkbox" defaultChecked={index === 0} disabled={index === 0}/>
                  {option}
                </label>
              </div>
            ))}
            <button id="savePreferences">Save Preferences</button>
          </div>
        </nav>

        {/* Main Policy Sections */}
        <main id="policyMain">
          {policySections.map(section => (
            <section key={section.id} id={section.id}>
              <h2 id={`sectionTitle${section.id}`}>{section.title}</h2>
              <div id={`sectionContent${section.id}`}>
                {section.content.split('\n').map((line, idx) => <p key={idx}>{line}</p>)}
              </div>
            </section>
          ))}
        </main>

      </div>

      {/* Action Section */}
      <section id="policyActions">
        <h2 id="actionTitle">Need Help with Your Privacy?</h2>
        <div id="actionButtons">
          <button id="contactPrivacyTeam">Contact Privacy Team</button>
          <button id="requestDataExport">Request Data Export</button>
          <button id="updatePreferences">Update Preferences</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="policyFooter">
        <p id="footerText">This Privacy Policy is effective as of {lastUpdated}. By using our services, you agree to the collection and use of information in accordance with this policy.</p>
        <div id="footerLinks">
          <a id="termsLink" href="/terms">Terms of Service</a>
          <a id="cookiesLink" href="/cookies">Cookie Policy</a>
          <a id="dataRequestLink" href="/data-request">Data Request Form</a>
          <a id="complianceLink" href="/compliance">Compliance Information</a>
        </div>
      </footer>

    </div>
  );
};

export default PrivacyPolicy;
