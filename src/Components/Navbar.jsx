import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaUserGraduate, FaBook, FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa';
import '../App.css';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Close mobile menu when clicking on a link
  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <FaUserGraduate className="logo-icon" />
          <span className="logo-text">EduMaster</span>
        </div>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>

        {/* Navigation Menu */}
        <ul className={`navbar-menu ${isMobile ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="home" className="navbar-link" onClick={closeMobileMenu}>
              Home
            </a>
          </li>

          <li className="navbar-item">
            <a href="about" className="navbar-link" onClick={closeMobileMenu}>
              About
            </a>
          </li>
          
          <li className="navbar-item dropdown">
            <a href="#" className="navbar-link">
              Courses <span className="dropdown-arrow">▼</span>
            </a>
            <div className="dropdown-menu">
              <a href="programming" className="dropdown-link">
                <FaBook className="dropdown-icon" />
                Programming
              </a>
              <a href="science" className="dropdown-link">
                <FaBook className="dropdown-icon" />
                Science
              </a>
              <a href="mathematics" className="dropdown-link">
                <FaBook className="dropdown-icon" />
                Mathematics
              </a>
              <a href="languages" className="dropdown-link">
                <FaBook className="dropdown-icon" />
                Languages
              </a>
            </div>
          </li>

          <li className="navbar-item">
            <a href="instructors" className="navbar-link" onClick={closeMobileMenu}>
              <FaChalkboardTeacher className="link-icon" />
              Instructors
            </a>
          </li>

          

          <li className="navbar-item">
            <a href="contact" className="navbar-link" onClick={closeMobileMenu}>
              Contact
            </a>
          </li>

          {/* Auth Buttons */}
          <li className="navbar-item auth-buttons">
            <a href="login" className="navbar-link login-btn" onClick={closeMobileMenu}>
              <FaUserCircle className="link-icon" />
              Login
            </a>
            <a href="signup" className="navbar-link signup-btn" onClick={closeMobileMenu}>
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;