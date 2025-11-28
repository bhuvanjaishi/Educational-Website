import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaUser, 
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
import '../App.css';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName:'', lastName:'', email:'', password:'', confirmPassword:'', acceptTerms:false
  });
  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [errors,setErrors] = useState({});

  const handleChange = e => {
    const { name,value,type,checked } = e.target;
    setFormData(prev => ({...prev,[name]: type==='checkbox'?checked:value}));
    if(errors[name]) setErrors(prev=>({...prev,[name]:''}));
  };

  const validateForm = ()=>{
    const newErrors = {};
    if(!formData.firstName.trim()) newErrors.firstName='First name required';
    if(!formData.lastName.trim()) newErrors.lastName='Last name required';
    if(!formData.email) newErrors.email='Email required';
    else if(!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email='Email invalid';
    if(!formData.password) newErrors.password='Password required';
    else if(formData.password.length<8) newErrors.password='Password must be 8+ chars';
    if(!formData.confirmPassword) newErrors.confirmPassword='Confirm password';
    else if(formData.password!==formData.confirmPassword) newErrors.confirmPassword='Passwords do not match';
    if(!formData.acceptTerms) newErrors.acceptTerms='Accept terms';
    setErrors(newErrors);
    return Object.keys(newErrors).length===0;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if(!validateForm()) return;
    setIsLoading(true);
    try { await new Promise(r=>setTimeout(r,2000)); console.log('Registration successful:',formData); }
    catch(err){ setErrors({submit:'Registration failed'});}
    finally{ setIsLoading(false);}
  };

  const socialLogins = [
    { icon: <FaGoogle />, name: 'Google', color: '#DB4437' },
    { icon: <FaFacebook />, name: 'Facebook', color: '#4267B2' },
    { icon: <FaApple />, name: 'Apple', color: '#000' }
  ];

  return (
    <div id="register-page">
      <div id="register-container">
        <div id="register-form-side">
          <div id="register-header">
            <div className="auth-logo"><FaUserGraduate/><span className="logo-text">EduMaster</span></div>
            <h1>Join EduMaster</h1>
            <p>Start your learning journey today</p>
          </div>

          <div id="register-social">
            <p>Or continue with</p>
            <div className="social-buttons">
              {socialLogins.map((s,i)=>(
                <button key={i} className="social-btn" style={{'--social-color': s.color}}>
                  {s.icon} <span>{s.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div id="register-divider"><span>Or sign up with email</span></div>

          <form id="register-form" onSubmit={handleSubmit}>
            {errors.submit && <div className="error-text">{errors.submit}</div>}

            <div className="name-fields">
              <div className="form-group">
                <label><FaUser /> First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className={errors.firstName?'error':''} placeholder="First Name"/>
                {errors.firstName && <span className="error-text">{errors.firstName}</span>}
              </div>
              <div className="form-group">
                <label><FaUser /> Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className={errors.lastName?'error':''} placeholder="Last Name"/>
                {errors.lastName && <span className="error-text">{errors.lastName}</span>}
              </div>
            </div>

            <div className="form-group">
              <label><FaEnvelope /> Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className={errors.email?'error':''} placeholder="Email"/>
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label><FaLock /> Password</label>
              <div className="password-input-container">
                <input type={showPassword?'text':'password'} name="password" value={formData.password} onChange={handleChange} className={errors.password?'error':''} placeholder="Password"/>
                <button type="button" onClick={()=>setShowPassword(!showPassword)}>{showPassword?<FaEyeSlash/>:<FaEye/>}</button>
              </div>
              {errors.password && <span className="error-text">{errors.password}</span>}
            </div>

            <div className="form-group">
              <label><FaLock /> Confirm Password</label>
              <div className="password-input-container">
                <input type={showConfirmPassword?'text':'password'} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className={errors.confirmPassword?'error':''} placeholder="Confirm Password"/>
                <button type="button" onClick={()=>setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword?<FaEyeSlash/>:<FaEye/>}</button>
              </div>
              {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
            </div>

            <div className="form-group terms-group">
              <label className="checkbox-label">
                <input type="checkbox" name="acceptTerms" checked={formData.acceptTerms} onChange={handleChange}/>
                I agree to <Link to="/terms">Terms</Link> and <Link to="/privacy">Privacy Policy</Link>
              </label>
              {errors.acceptTerms && <span className="error-text">{errors.acceptTerms}</span>}
            </div>

            <button type="submit" className={`submit-btn ${isLoading?'loading':''}`} disabled={isLoading}>
              {isLoading?'Creating Account...':'Create Account'}
            </button>

            <div className="auth-footer">
              <p>Already have an account? <Link to="login">Sign in</Link></p>
            </div>
          </form>
        </div>

        <div id="register-hero-side">
          <div className="feature-item"><FaCheckCircle /> <div>Unlimited Access</div></div>
          <div className="feature-item"><FaCheckCircle /> <div>Expert Instructors</div></div>
          <div className="feature-item"><FaCheckCircle /> <div>Career Advancement</div></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
