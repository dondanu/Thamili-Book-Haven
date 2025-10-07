import { useState } from 'react';
import './Login.css';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing
import { useAuth } from './Auth';

// Import your image from the assets folder
import loginImage from './assets/namu2.png'; // Adjust the path if necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login({ email, password });
    navigate('/');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="welcome-text"
        >
          <h1>Welcome to Thamili BookHaven</h1>
          <p>புத்தகங்களோடு வாழ்பவனுக்கு என்றும் வசந்தகாலம் தான்</p>
          {/* Display the image */}
          <img src={loginImage} alt="Welcome to BookHaven" className="login-image" />
        </motion.div>
      </div>

      <motion.div 
        className={`login-right ${isDarkMode ? 'dark' : ''}`}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="login-box">
          <h2>Sign In to Your Account</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            
            <div className="form-options">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            {/* Theme Toggle Button Inside the Form */}
            <div className="theme-toggle-wrapper">
              <button 
                type="button" 
                className="theme-toggle-btn" 
                onClick={toggleTheme}
              >
                {isDarkMode ? '🌞' : '🌙'}
              </button>
            </div>
            
            <button type="submit" className="login-button">
              Sign In
            </button>
            
            <div className="social-login">
              <p>Or continue with</p>
              <div className="social-buttons">
                <button className="google-btn">Google</button>
                <button className="facebook-btn">Facebook</button>
              </div>
            </div>
            
            <p className="signup-link">
              Don't have an account? <Link to="/register">Sign up</Link>
            </p>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
