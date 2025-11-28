import React from 'react';
import { 
  FaGraduationCap, 
  FaFacebookF, 
  FaTwitter, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight
} from 'react-icons/fa';
import '../App.css';

const Footer = () => {
  return (
    <footer id="footer">
      <div id="footer-container">
        
        {/* Main Footer Content */}
        <div id="footer-main">
          
          {/* Brand Column */}
          <div id="footer-brand-column">
            <div id="footer-logo">
              <FaGraduationCap id="footer-logo-icon" />
              <span id="footer-logo-text">EduMaster</span>
            </div>
            <p id="footer-description">
              Empowering minds through quality education. Join thousands of students 
              in their journey to academic excellence and career success.
            </p>
            <div id="social-links">
              <a href="facebook" id="social-facebook"><FaFacebookF /></a>
              <a href="twitter" id="social-twitter"><FaTwitter /></a>
              <a href="linkedin" id="social-linkedin"><FaLinkedinIn /></a>
              <a href="instagram" id="social-instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer-quick-links">
            <h3 id="footer-title-quick">Quick Links</h3>
            <ul id="footer-links-quick">
              <li><a href="home" id="footer-link-home">Home</a></li>
              <li><a href="about" id="footer-link-about">About Us</a></li>
              <li><a href="courses" id="footer-link-courses">All Courses</a></li>
              <li><a href="instructors" id="footer-link-instructors">Instructors</a></li>
              <li><a href="events" id="footer-link-events">Events</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div id="footer-courses">
            <h3 id="footer-title-courses">Popular Courses</h3>
            <ul id="footer-links-courses">
              <li><a href="webdevelopment" id="course-webdev">Web Development</a></li>
              <li><a href="datascience" id="course-datasci">Data Science</a></li>
              <li><a href="mobiledevelopment" id="course-mobile">Mobile Development</a></li>
              <li><a href="aimachinelearning" id="course-ai">AI & Machine Learning</a></li>
              <li><a href="businesscourse" id="course-business">Business Courses</a></li>
            </ul>
          </div>

          {/* Support */}
          <div id="footer-support">
            <h3 id="footer-title-support">Support</h3>
            <ul id="footer-links-support">
              <li><a href="helpcenter" id="support-help">Help Center</a></li>
              <li><a href="faq" id="support-faq">FAQ</a></li>
              <li><a href="privacypolicy" id="support-privacy">Privacy Policy</a></li>
              <li><a href="termsofservices" id="support-terms">Terms of Service</a></li>
              <li><a href="contactsupport" id="support-contact">Contact Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="footer-contact">
            <h3 id="footer-title-contact">Contact Info</h3>
            <div id="contact-info">
              <div id="contact-address">
                <FaMapMarkerAlt id="contact-icon-address" />
                <span>Putalisadak Street, Kathmandu Nepal </span>
              </div>
              <div id="contact-phone">
                <FaPhone id="contact-icon-phone" />
                <span>+977-9860132003</span>
              </div>
              <div id="contact-email">
                <FaEnvelope id="contact-icon-email" />
                <span>info@edumaster.com</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div id="newsletter">
              <h4 id="newsletter-title">Stay Updated</h4>
              <div id="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  id="newsletter-input"
                />
                <button id="newsletter-btn">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div id="footer-bottom">
          <div id="footer-bottom-content">
            <p id="footer-copyright">
              © 2025 EduMaster. All rights reserved.
            </p>
            <div id="footer-bottom-links">
              <a href="privacy" id="bottom-link-privacy">Privacy Policy</a>
              <a href="terms" id="bottom-link-terms">Terms of Service</a>
              <a href="cookies" id="bottom-link-cookies">Cookie Policy</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
