import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './Cart';

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
  const { addToCart, getTotalItems } = useCart();
  const navigate = useNavigate();

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
  const sectionBg = darkMode ? '#2d2d2d' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
  const cardBg = darkMode ? '#3d3d3d' : 'linear-gradient(145deg, #ffffff 0%, #f0f8ff 100%)';
  const textColor = darkMode ? '#f0f0f0' : '#333';
  const secondaryTextColor = darkMode ? '#b0b0b0' : '#666';
  const buttonBg = darkMode ? '#e74c3c' : 'linear-gradient(45deg, #ff6b6b, #ee5a24)';

  return (
    <div style={themeStyles}>
      {/* CSS Animations */}
      <style>
        {`
          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.05); }
          }
        `}
      </style>
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
                <Link to="/" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  paddingBottom: '5px',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  {translations[language].home}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/categories" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  paddingBottom: '5px',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  {translations[language].categories}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/new-arrivals" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  borderBottom: '2px solid #e74c3c',
                  paddingBottom: '5px',
                  transition: 'all 0.3s ease',
                  fontWeight: 'bold'
                }}>
                  {translations[language].newArrivals}
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/bestsellers" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  paddingBottom: '5px',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  {translations[language].bestsellers}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginRight: '15px' }}>
          <input 
            type="text" 
            placeholder={translations[language].searchPlaceholder}
            style={{ 
              padding: '7px 15px', 
                borderRadius: '20px 0 0 20px', 
              border: 'none', 
                width: '200px',
              fontSize: `${fontSize}px`
            }} 
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  const query = e.target.value;
                  if (query.trim()) {
                    navigate(`/search?q=${encodeURIComponent(query)}`);
                  }
                }
              }}
            />
            <button
              onClick={(e) => {
                const input = e.target.previousElementSibling;
                const query = input.value;
                if (query.trim()) {
                  navigate(`/search?q=${encodeURIComponent(query)}`);
                }
              }}
              style={{
                padding: '7px 12px',
                borderRadius: '0 20px 20px 0',
                border: 'none',
                background: '#e74c3c',
                color: 'white',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              🔍
            </button>
          </div>
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
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px', position: 'relative' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
            {getTotalItems() > 0 && (
              <span style={{
                position: 'absolute',
                top: '-8px',
                right: '-8px',
                backgroundColor: '#e74c3c',
                color: 'white',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                fontSize: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {getTotalItems()}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* New Arrivals Banner */}
      <section style={{ 
        position: 'relative', 
        height: '500px', 
        background: `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 50%, rgba(255, 107, 107, 0.9) 100%), url(${bannerPlaceholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center',
        overflow: 'hidden'
      }}>
        <div style={{ 
          padding: '40px',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
        }}>
          <h2 style={{ 
            fontSize: '3.5rem', 
            marginBottom: '20px',
            background: 'linear-gradient(45deg, #fff, #f0f8ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>
            {translations[language].latestBooks}
          </h2>
          <p style={{ 
            fontSize: '1.3rem', 
            marginBottom: '30px',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
          }}>
            {translations[language].exploreNew}
          </p>
          <button style={{
            padding: '18px 45px',
            background: 'linear-gradient(45deg, #ff6b6b, #ee5a24, #ff9ff3)',
            backgroundSize: '200% 200%',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            fontSize: '1.2rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)',
            animation: 'gradientShift 3s ease infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 107, 107, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(255, 107, 107, 0.4)';
          }}>
            {translations[language].shopNow}
          </button>
        </div>
      </section>

      {/* New Arrivals Grid */}
      <section style={{ 
        padding: '80px 20px', 
        background: darkMode ? sectionBg : 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          left: '-50px',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
          borderRadius: '50%',
          animation: 'float 6s ease-in-out infinite'
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-100px',
          right: '-100px',
          width: '300px',
          height: '300px',
          background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.03))',
          borderRadius: '50%',
          animation: 'float 8s ease-in-out infinite reverse'
        }}></div>
        
        <div style={{ 
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2
        }}>
          <h2 style={{ 
            textAlign: 'center', 
            marginBottom: '60px', 
            fontSize: '3rem',
            background: darkMode ? 'none' : 'linear-gradient(45deg, #fff, #f0f8ff, #e6f3ff)',
            WebkitBackgroundClip: darkMode ? 'initial' : 'text',
            WebkitTextFillColor: darkMode ? textColor : 'transparent',
            textShadow: darkMode ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 'bold'
          }}>
            {translations[language].newArrivals}
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
          }}>
            {newArrivals.map((book, index) => (
              <div key={book.id} style={{
                background: darkMode ? cardBg : `linear-gradient(145deg, #ffffff 0%, ${['#f0f8ff', '#fff0f5', '#f0fff0', '#fff8dc'][index % 4]} 100%)`,
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: `3px solid ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][index % 4]}`,
                position: 'relative',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
                e.currentTarget.style.borderColor = ['#ff4757', '#2ed573', '#3742fa', '#ffa502'][index % 4];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.2)';
                e.currentTarget.style.borderColor = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][index % 4];
              }}>
                {/* New Arrival Badge */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)',
                  color: 'white',
                  padding: '8px 15px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  zIndex: 3,
                  boxShadow: '0 4px 15px rgba(255, 107, 107, 0.4)'
                }}>
                  NEW!
                </div>
                
                <img 
                  src={book.image} 
                  alt={book.title} 
                  style={{ 
                    width: '100%', 
                    height: '350px', 
                    objectFit: 'cover',
                    borderBottom: `4px solid ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][index % 4]}`,
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }} 
                />
                <div style={{ padding: '25px' }}>
                  <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <h3 style={{ 
                    margin: '0 0 10px', 
                    fontSize: '1.3rem',
                    color: textColor,
                      minHeight: '60px',
                      cursor: 'pointer'
                  }}>
                    {book.title}
                  </h3>
                  </Link>
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
                  <button 
                    onClick={() => addToCart(book)}
                    style={{
                    width: '100%',
                      padding: '15px',
                      background: `linear-gradient(45deg, ${['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'][index % 4]}, ${['#ee5a24', '#2ed573', '#3742fa', '#ffa502'][index % 4]})`,
                    color: 'white',
                    border: 'none',
                      borderRadius: '25px',
                    cursor: 'pointer',
                      fontSize: '1.1rem',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      boxShadow: `0 4px 15px ${['rgba(255, 107, 107, 0.4)', 'rgba(78, 205, 196, 0.4)', 'rgba(69, 183, 209, 0.4)', 'rgba(150, 206, 180, 0.4)'][index % 4]}`,
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 8px 25px ${['rgba(255, 107, 107, 0.6)', 'rgba(78, 205, 196, 0.6)', 'rgba(69, 183, 209, 0.6)', 'rgba(150, 206, 180, 0.6)'][index % 4]}`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = `0 4px 15px ${['rgba(255, 107, 107, 0.4)', 'rgba(78, 205, 196, 0.4)', 'rgba(69, 183, 209, 0.4)', 'rgba(150, 206, 180, 0.4)'][index % 4]}`;
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