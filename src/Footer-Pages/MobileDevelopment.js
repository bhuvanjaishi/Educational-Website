import React from 'react';
import '../App.css';

const MobileDevelopment = () => {
  const services = [
    {
      title: "iOS Development",
      description: "Native iOS apps using Swift and Objective-C",
      icon: "📱"
    },
    {
      title: "Android Development",
      description: "Native Android apps using Kotlin and Java",
      icon: "🤖"
    },
    {
      title: "Cross-Platform",
      description: "React Native, Flutter apps for both platforms",
      icon: "🔄"
    }
  ];

  const projects = [
    {
      name: "E-Commerce App",
      platform: "iOS & Android",
      tech: "React Native, Node.js"
    },
    {
      name: "Fitness Tracker",
      platform: "iOS",
      tech: "Swift, HealthKit"
    },
    {
      name: "Business Dashboard",
      platform: "Android",
      tech: "Kotlin, Firebase"
    }
  ];

  return (
    <div className="mobile-development">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1>Mobile App Development</h1>
          <p>Creating stunning, high-performance mobile applications for iOS and Android</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="container">
          <h2>Recent Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p><strong>Platform:</strong> {project.platform}</p>
                <p><strong>Technology:</strong> {project.tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to build your mobile app?</h2>
          <button className="cta-button">Contact Us</button>
        </div>
      </section>
    </div>
  );
};

export default MobileDevelopment;