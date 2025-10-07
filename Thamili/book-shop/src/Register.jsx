import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaBook } from 'react-icons/fa';
import { useAuth } from './Auth';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    favoriteBook: ''
  });
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    await register({ username: formData.username, email: formData.email, password: formData.password });
    navigate('/');
  };

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      background: 'linear-gradient(to right, rgb(122, 255, 95), #feb47b)',
      padding: '20px',
      margin: '0',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}>
        {/* Left Section - Welcome Message */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: '1',
            color: '#fff',
            padding: '40px',
            textAlign: 'left'
          }}
        >
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            color: '#1a365d',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            Welcome to<br />Thamili BookShop
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: '#2d3748',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            Join our community of book lovers and get access to thousands of books.
            Register now to start your reading journey!
          </p>
          <div style={{
            padding: '20px',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '10px',
            backdropFilter: 'blur(10px)'
          }}>
            <h3 style={{ color: '#1a365d', marginBottom: '10px' }}>Benefits:</h3>
            <ul style={{ color: '#2d3748', listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FaBook style={{ marginRight: '10px' }} /> Access to exclusive collections
              </li>
              <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                <FaBook style={{ marginRight: '10px' }} /> Special member discounts
              </li>
              <li style={{ display: 'flex', alignItems: 'center' }}>
                <FaBook style={{ marginRight: '10px' }} /> Monthly newsletters
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Section - Registration Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            flex: '1',
            backgroundColor: '#fff',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)'
          }}
        >
          <h2 style={{ 
            color: '#1a365d', 
            marginBottom: '30px', 
            fontSize: '2rem',
            textAlign: 'center'
          }}>Create Your Account</h2>

          <form onSubmit={handleSubmit}>
            {[
              { icon: <FaUser />, name: 'username', type: 'text', placeholder: '      Username' },
              { icon: <FaEnvelope />, name: 'email', type: 'email', placeholder: '      Email Address' },
              { icon: <FaPhone />, name: 'phoneNumber', type: 'tel', placeholder: '      Phone Number' },
              { icon: <FaBook />, name: 'favoriteBook', type: 'text', placeholder: '      Favorite Book' },
              { icon: <FaLock />, name: 'password', type: 'password', placeholder: '      Password' },
              { icon: <FaLock />, name: 'confirmPassword', type: 'password', placeholder: '      Confirm Password' }
            ].map((field) => (
              <div key={field.name} style={{ marginBottom: '20px', position: 'relative' }}>
                <div style={{
                  position: 'absolute',
                  left: '15px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#4a5568'
                }}>
                  {field.icon}
                </div>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required
                  style={{
                    width: '100%',
                    padding: '15px 0px 15px 10px',
                    border: '2px solid #e2e8f0',
                    borderRadius: '10px',
                    fontSize: '16px',
                    transition: 'all 0.3s ease',
                    outline: 'none'
                  }}
                />
              </div>
            ))}

            <button
              type="submit"
              style={{
                width: '100%',
                padding: '15px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontSize: '18px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginTop: '20px'
              }}
            >
              Register Now
            </button>

            <div style={{
              marginTop: '20px',
              textAlign: 'center',
              color: '#4a5568'
            }}>
              Already have an account?{' '}
              <Link to="/login" style={{
                color: '#4CAF50',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                Sign In
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
