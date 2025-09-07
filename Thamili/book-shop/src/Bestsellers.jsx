import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bookPlaceholder7 from './assets/book-placeholder1.png';
import bookPlaceholder8 from './assets/book-placeholder2.png';
import bookPlaceholder9 from './assets/book-placeholder3.png';
import bookPlaceholder10 from './assets/book-placeholder4.png';

// Translations object
const translations = {
  en: {
    home: "Home",
    categories: "Categories",
    newArrivals: "New Arrivals",
    bestsellers: "Bestsellers",
    login: "Login",
    register: "Register",
    searchPlaceholder: "Search books...",
    addToCart: "Add to Cart"
  },
  ta: {
    home: "முகப்பு",
    categories: "வகைகள்",
    newArrivals: "புதிய வரவுகள்",
    bestsellers: "சிறந்த விற்பனையாளர்கள்",
    login: "உள்நுழைய",
    register: "பதிவு செய்ய",
    searchPlaceholder: "புத்தகங்களைத் தேடு...",
    addToCart: "கார்ட்டில் சேர்க்க"
  },
  si: {
    home: "මුල් පිටුව",
    categories: "වර්ග",
    newArrivals: "නව පැමිණීම්",
    bestsellers: "හොඳම විකුණුම්",
    login: "පුරන්න",
    register: "ලියාපදිංචි වන්න",
    searchPlaceholder: "පොත් සොයන්න...",
    addToCart: "කරත්තයට එක් කරන්න"
  }
};


const Bestsellers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [language, setLanguage] = useState('en');

  const bestsellers = [
    { id: 1, title: "Bestseller 1", author: "Author 1", price: "$14.99", image: bookPlaceholder7 },
    { id: 2, title: "Bestseller 2", author: "Author 2", price: "$18.99", image: bookPlaceholder8 },
    { id: 3, title: "Bestseller 3", author: "Author 3", price: "$12.99", image: bookPlaceholder9 },
    { id: 4, title: "Bestseller 4", author: "Author 4", price: "$16.99", image: bookPlaceholder10 },
  ];

  // Handlers
  const increaseFontSize = () => setFontSize(prev => Math.min(24, prev + 2));
  const decreaseFontSize = () => setFontSize(prev => Math.max(12, prev - 2));
  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleLanguageChange = (e) => setLanguage(e.target.value);

  // Styles
  const themeStyles = {
    backgroundColor: darkMode ? '#1a1a1a' : 'white',
    color: darkMode ? '#f0f0f0' : '#333',
    fontSize: `${fontSize}px`,
    minHeight: '100vh',
    transition: 'all 0.3s ease'
  };

  const headerFooterBg = darkMode ? '#121212' : '#2c3e50';
  const textColor = darkMode ? '#f0f0f0' : '#333';

  return (
    <div style={themeStyles}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: headerFooterBg,
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Thamili Book Haven</h1>
          <nav style={{ marginLeft: '40px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 15px' }}>
                <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].home}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/Categories" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].categories}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/new-arrivals" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].newArrivals}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/bestsellers" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].bestsellers}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <input 
            type="text" 
            placeholder={translations[language].searchPlaceholder}
            style={{ 
              padding: '7px 15px', 
              borderRadius: '20px', 
              border: 'none', 
              marginRight: '15px',
              width: '250px',
              fontSize: `${fontSize}px`
            }} 
          />
          <div style={{ display: 'flex', gap: '10px' }}>
            <Link to="/login" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              border: '1px solid white'
            }}>
              {translations[language].login}
            </Link>
            <Link to="/register" style={{
              color: 'white',
              textDecoration: 'none',
              padding: '8px 15px',
              borderRadius: '5px',
              backgroundColor: '#e74c3c'
            }}>
              {translations[language].register}
            </Link>
          </div>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
          </Link>
        </div>
      </header>

      {/* Bestsellers Section */}
      <section style={{ padding: '40px 20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Bestsellers</h2>
      <div style={{ 
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '30px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {bestsellers.map(book => (
          <div key={book.id} style={{ 
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
          }}>
            <div style={{ 
              width: '100%', 
              height: '300px', 
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={book.image} 
                alt={book.title}
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
            </div>
            <div style={{ padding: '20px' }}>
              <h3 style={{ 
                fontSize: '18px', 
                fontWeight: 'bold', 
                marginBottom: '8px',
                color: '#333',
                lineHeight: '1.3'
              }}>
                {book.title}
              </h3>
              <p style={{ 
                fontSize: '14px', 
                color: '#666', 
                marginBottom: '12px',
                fontStyle: 'italic'
              }}>
                by {book.author}
              </p>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center' 
              }}>
                <span style={{ 
                  fontSize: '20px', 
                  fontWeight: 'bold', 
                  color: '#2c5530'
                }}>
                  {book.price}
                </span>
                <button style={{
                  backgroundColor: '#2c5530',
                  color: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#1e3a21';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#2c5530';
                }}>
                  {translations[language].addToCart}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Accessibility Options */}
    <div style={{
      position: 'fixed',
      bottom: '30px',
      left: '30px',
      backgroundColor: headerFooterBg,
      color: 'white',
      padding: '10px',
      borderRadius: '5px',
      display: 'flex',
      gap: '10px',
      zIndex: 100
    }}>
      <button 
        onClick={increaseFontSize}
        style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        A+
      </button>
      <button 
        onClick={decreaseFontSize}
        style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        A-
      </button>
      <button 
        onClick={toggleDarkMode}
        style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        {darkMode ? '☀️' : '🌙'}
      </button>
      <select 
        value={language}
        onChange={handleLanguageChange}
        style={{
          padding: '5px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}
      >
        <option value="en">English</option>
        <option value="ta">தமிழ்</option>
        <option value="si">සිංහල</option>
      </select>
    </div>
  </div>
  );
};

export default Bestsellers;