import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaLock, 
  FaEye, 
  FaEyeSlash,
  FaUserGraduate,
  FaGoogle,
  FaFacebook,
  FaApple,
  FaCheckCircle
} from 'react-icons/fa';
import '../App.css'; // same CSS file for both pages

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Login successful:', formData);
    } catch (error) {
      setErrors({ submit: 'Invalid email or password' });
    } finally {
      setIsLoading(false);
    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const socialLogins = [
    { icon: <FaGoogle />, name: 'Google', color: '#DB4437' },
    { icon: <FaFacebook />, name: 'Facebook', color: '#4267B2' },
    { icon: <FaApple />, name: 'Apple', color: '#000' }
  ];

  return (
    <div id="login-page">
      <div id="login-container">
        <div id="login-form-side">
          <div id="login-header">
            <div className="auth-logo">
              <FaUserGraduate className="logo-icon"/>
              <span className="logo-text">EduMaster</span>
            </div>
            <h1>Welcome Back</h1>
            <p>Sign in to continue your learning journey</p>
          </div>

          <div id="login-social">
            <p>Or continue with</p>
            <div className="social-buttons">
              {socialLogins.map((s,i)=>(
                <button key={i} className="social-btn" style={{ '--social-color': s.color }}>
                  {s.icon} <span>{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="login-divider"><span>Or continue with email</span></div>

          <form id="login-form" onSubmit={handleSubmit}>
            {errors.submit && <div className="error-text">{errors.submit}</div>}
            <div className="form-group">
              <label htmlFor="email"><FaEnvelope /> Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'error' : ''}
                placeholder="Enter your email"
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="password"><FaLock /> Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? 'error' : ''}
                  placeholder="Enter your password"
                />
                <button type="button" className="password-toggle" onClick={togglePassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" checked={rememberMe} onChange={e=>setRememberMe(e.target.checked)}/>
                Remember me
              </label>
              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className={`submit-btn ${isLoading ? 'loading' : ''}`} disabled={isLoading}>
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>

            <div className="auth-footer">
              <p>Don't have an account? <Link to="register">Sign up</Link></p>
            </div>
          </form>
        </div>

        <div id="login-hero-side">
          <div className="feature-item"><FaCheckCircle /> <div>Access 500+ Courses</div></div>
          <div className="feature-item"><FaCheckCircle /> <div>Track Your Progress</div></div>
          <div className="feature-item"><FaCheckCircle /> <div>Join Community</div></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
