import React, { useState } from 'react';
import '../App.css';

const AIMachineLearning = () => {
  const [activeTab, setActiveTab] = useState('services');

  const services = [
    {
      title: "Machine Learning",
      description: "Build predictive models and intelligent systems",
      icon: "🧠",
      features: ["Predictive Analytics", "Pattern Recognition", "Data Mining"]
    },
    {
      title: "Deep Learning",
      description: "Neural networks for complex problem solving",
      icon: "🔍",
      features: ["Computer Vision", "Natural Language Processing", "Speech Recognition"]
    },
    {
      title: "Computer Vision",
      description: "Image and video analysis solutions",
      icon: "👁️",
      features: ["Object Detection", "Facial Recognition", "Image Classification"]
    },
    {
      title: "NLP",
      description: "Natural Language Processing applications",
      icon: "💬",
      features: ["Chatbots", "Sentiment Analysis", "Text Generation"]
    },
    {
      title: "AI Consulting",
      description: "Strategic AI implementation guidance",
      icon: "🚀",
      features: ["AI Strategy", "Implementation Planning", "Team Training"]
    },
    {
      title: "MLOps",
      description: "Machine Learning operations and deployment",
      icon: "⚙️",
      features: ["Model Deployment", "Monitoring", "Automated Pipelines"]
    }
  ];

  const technologies = [
    { name: "Python", category: "Programming" },
    { name: "TensorFlow", category: "Framework" },
    { name: "PyTorch", category: "Framework" },
    { name: "Scikit-learn", category: "Library" },
    { name: "OpenCV", category: "Computer Vision" },
    { name: "NLTK", category: "NLP" },
    { name: "Keras", category: "Framework" },
    { name: "Pandas", category: "Data Analysis" }
  ];

  const projects = [
    {
      name: "Predictive Maintenance",
      description: "ML system for equipment failure prediction",
      technology: "TensorFlow, Python",
      results: "Reduced downtime by 45%"
    },
    {
      name: "Customer Sentiment Analysis",
      description: "Real-time customer feedback analysis",
      technology: "NLP, BERT",
      results: "Improved customer satisfaction by 30%"
    },
    {
      name: "Medical Image Diagnosis",
      description: "AI-assisted medical image analysis",
      technology: "Computer Vision, CNN",
      results: "95% accuracy in detection"
    }
  ];

  return (
    <div className="ai-ml-page">
      {/* Hero Section */}
      <section className="ai-hero">
        <div className="container">
          <div className="ai-hero-content">
            <h1>AI & Machine Learning</h1>
            <p>Transforming businesses with intelligent algorithms and data-driven solutions</p>
            <div className="hero-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>AI Projects</p>
              </div>
              <div className="stat">
                <h3>95%</h3>
                <p>Accuracy Rate</p>
              </div>
              <div className="stat">
                <h3>24/7</h3>
                <p>Model Monitoring</p>
              </div>
            </div>
            <button className="cta-button">Start AI Project</button>
          </div>
          <div className="ai-hero-visual">
            <div className="neural-network">
              <div className="node"></div>
              <div className="node"></div>
              <div className="node"></div>
              <div className="connection"></div>
              <div className="connection"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="ai-services">
        <div className="container">
          <h2>Our AI Services</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <button className="service-btn">Learn More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="tech-section">
        <div className="container">
          <h2>Technologies We Use</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                <span className="tech-name">{tech.name}</span>
                <span className="tech-category">{tech.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="ai-projects">
        <div className="container">
          <h2>AI Success Stories</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  <strong>Technology:</strong> {project.technology}
                </div>
                <div className="project-results">
                  <strong>Results:</strong> {project.results}
                </div>
                <div className="project-badge">AI Powered</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <h2>Our AI Development Process</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h4>Data Collection</h4>
              <p>Gather and preprocess relevant data</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h4>Model Training</h4>
              <p>Train and validate ML models</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h4>Deployment</h4>
              <p>Deploy models to production</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h4>Monitoring</h4>
              <p>Continuously monitor and improve</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ai-cta">
        <div className="container">
          <h2>Ready to Implement AI in Your Business?</h2>
          <p>Let's discuss how artificial intelligence can transform your operations</p>
          <div className="cta-buttons">
            <button className="primary-btn">Schedule Consultation</button>
            <button className="secondary-btn">View Case Studies</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIMachineLearning;