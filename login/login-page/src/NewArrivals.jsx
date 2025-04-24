import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import local placeholder images
import bookPlaceholder1 from './assets/book-placeholder1.png';
import bookPlaceholder2 from './assets/book-placeholder2.png';
import bookPlaceholder3 from './assets/book-placeholder3.png';
import bookPlaceholder4 from './assets/book-placeholder4.png';
import bannerPlaceholder from './assets/banner-placeholder.jpg';

// Reuse translations from Home.jsx
const translations = {
  en: {
    home: "Home",
    categories: "Categories",
    newArrivals: "New Arrivals",
    bestsellers: "Bestsellers",
    login: "Login",
    register: "Register",
    searchPlaceholder: "Search books...",
    addToCart: "Add to Cart",
    price: "Price",
    author: "Author",
    shopNow: "Shop Now",
    aboutUs: "About Us",
    contact: "Contact",
    faq: "FAQ",
    privacy: "Privacy Policy",
    followUs: "Follow Us",
    newsletter: "Subscribe for updates",
    subscribe: "Subscribe",
    quickLinks: "Quick Links",
    latestBooks: "Latest Books",
    exploreNew: "Explore New Releases"
  },
  ta: {
    home: "முகப்பு",
    categories: "வகைகள்",
    newArrivals: "புதிய வரவுகள்",
    bestsellers: "சிறந்த விற்பனையாளர்கள்",
    login: "உள்நுழைய",
    register: "பதிவு செய்ய",
    searchPlaceholder: "புத்தகங்களைத் தேடு...",
    addToCart: "கார்ட்டில் சேர்க்க",
    price: "விலை",
    author: "ஆசிரியர்",
    shopNow: "இப்போது வாங்க",
    aboutUs: "எங்களைப் பற்றி",
    contact: "தொடர்பு கொள்ள",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    privacy: "தனியுரிமைக் கொள்கை",
    followUs: "எங்களைப் பின்தொடரவும்",
    newsletter: "புதுப்பிப்புகளுக்கு குழுசேரவும்",
    subscribe: "குழுசேர்",
    quickLinks: "விரைவு இணைப்புகள்",
    latestBooks: "சமீபத்திய புத்தகங்கள்",
    exploreNew: "புதிய வெளியீடுகளை ஆராயுங்கள்"
  },
  si: {
    home: "මුල් පිටුව",
    categories: "වර්ග",
    newArrivals: "නව පැමිණීම්",
    bestsellers: "හොඳම විකුණුම්",
    login: "පුරන්න",
    register: "ලියාපදිංචි වන්න",
    searchPlaceholder: "පොත් සොයන්න...",
    addToCart: "කරත්තයට එක් කරන්න",
    price: "මිල",
    author: "කතුවරයා",
    shopNow: "දැන් මිලදී ගන්න",
    aboutUs: "අපි ගැන",
    contact: "අමතන්න",
    faq: "නිතර අසන පැණ",
    privacy: "රහස්යතා ප්රතිපත්තිය",
    followUs: "අපව අනුගමනය කරන්න",
    newsletter: "යාවත්කාලීන කිරීම් සඳහා ලියාපදිංචි වන්න",
    subscribe: "දායක වන්න",
    quickLinks: "ඉක්මන් සබැඳි",
    latestBooks: "අලුත්ම පොත්",
    exploreNew: "නව发行 පරීක්ෂා කරන්න"
  }
};

const NewArrivals = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [language, setLanguage] = useState('en');

  // Sample new arrivals data
  const newArrivals = [
    { 
      id: 1, 
      title: "ANILAADUM MUNDRIL", 
      author: "Na Muthukumar", 
      price: "$16.99", 
      image: bookPlaceholder1,
      rating: 4.5
    },
    { 
      id: 2, 
      title: "MGR oru Sakaptham", 
      author: "Barathirja", 
      price: "$15.99", 
      image: bookPlaceholder2,
      rating: 4.8
    },
    { 
      id: 3, 
      title: "Marakkave Ninaikiren", 
      author: "Maari Selvaraj", 
      price: "$13.99", 
      image: bookPlaceholder3,
      rating: 4.2
    },
    { 
      id: 4, 
      title: "7g Rainbow Colony", 
      author: "Selvaragavan", 
      price: "$14.99", 
      image: bookPlaceholder4,
      rating: 4.6
    }
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
  const sectionBg = darkMode ? '#2d2d2d' : '#f8f9fa';
  const cardBg = darkMode ? '#3d3d3d' : 'lightblue';
  const textColor = darkMode ? '#f0f0f0' : '#333';
  const secondaryTextColor = darkMode ? '#b0b0b0' : '#666';
  const buttonBg = darkMode ? '#e74c3c' : '#2c3e50';

  return (
    <div style={themeStyles}>
      {/* Header - Same as Home.jsx */}
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
                <Link to="/categories" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].categories}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/new-arrivals" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  borderBottom: '2px solid #e74c3c',
                  paddingBottom: '5px'
                }}>
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

      {/* New Arrivals Banner */}
      <section style={{ 
        position: 'relative', 
        height: '400px', 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), url(${bannerPlaceholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ padding: '40px' }}>
          <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>
            {translations[language].latestBooks}
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            {translations[language].exploreNew}
          </p>
          <button style={{
            padding: '15px 40px',
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.1rem',
            cursor: 'pointer',
            transition: 'transform 0.3s',
            ':hover': {
              transform: 'scale(1.05)'
            }
          }}>
            {translations[language].shopNow}
          </button>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section style={{ padding: '60px 20px', backgroundColor: sectionBg }}>
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '50px', 
            fontSize: '2.5rem',
            color: textColor
          }}>
            {translations[language].newArrivals}
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}>
            {newArrivals.map(book => (
              <div key={book.id} style={{
                backgroundColor: cardBg,
                borderRadius: '10px',
                overflow: 'hidden',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s',
                ':hover': {
                  transform: 'translateY(-5px)'
                }
              }}>
                <img 
                  src={book.image} 
                  alt={book.title} 
                  style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'cover',
                    borderBottom: '3px solid #e74c3c'
                  }} 
                />
                <div style={{ padding: '25px' }}>
                  <h3 style={{ 
                    margin: '0 0 10px', 
                    fontSize: '1.3rem',
                    color: textColor,
                    minHeight: '60px'
                  }}>
                    {book.title}
                  </h3>
                  <p style={{ 
                    margin: '0 0 10px', 
                    color: secondaryTextColor,
                    fontSize: '0.9rem'
                  }}>
                    {translations[language].author}: {book.author}
                  </p>
                  <div style={{ 
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '15px'
                  }}>
                    <span style={{
                      color: textColor,
                      fontWeight: 'bold',
                      fontSize: '1.1rem'
                    }}>
                      {book.price}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {[...Array(5)].map((_, i) => (
                        <span 
                          key={i} 
                          style={{ 
                            color: i < Math.floor(book.rating) ? '#f39c12' : '#ddd',
                            fontSize: '1.1rem'
                          }}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                  <button style={{
                    width: '100%',
                    padding: '12px',
                    backgroundColor: buttonBg,
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    transition: 'opacity 0.3s',
                    ':hover': {
                      opacity: 0.9
                    }
                  }}>
                    {translations[language].addToCart}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Same as Home.jsx */}
      <footer style={{ 
        backgroundColor: headerFooterBg,
        color: 'white',
        padding: '40px 20px',
        textAlign: 'center'
      }}>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'left'
        }}>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Thamili Book Haven</h3>
            <p>{translations[language].language === 'en' 
              ? "Your local bookstore since 1995"
              : "1995 முதல் உங்கள் உள்ளூர் புத்தக கடை"}</p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>{translations[language].quickLinks}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].aboutUs}
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].contact}
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].faq}
                </Link>
              </li>
              <li style={{ marginBottom: '10px' }}>
                <Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>
                  {translations[language].privacy}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>{translations[language].newsletter}</h3>
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <input 
                type="email" 
                placeholder={translations[language].language === "en" ? "Your email" : "உங்கள் மின்னஞ்சல்"}
                style={{ 
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px 0 0 5px',
                  flex: 1,
                  fontSize: `${fontSize}px`
                }} 
              />
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '0 5px 5px 0',
                cursor: 'pointer'
              }}>
                {translations[language].subscribe}
              </button>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>{translations[language].followUs}</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📘</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📸</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>🐦</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📌</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p>© 2023 Thamili Book Haven. {translations[language].language === 'en' 
            ? "All rights reserved" 
            : "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டுள்ளன"}</p>
        </div>
      </footer>

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

      {/* Live Chat Button */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#e74c3c',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
        zIndex: 100
      }}>
        💬
      </div>
    </div>
  );
};

export default NewArrivals;