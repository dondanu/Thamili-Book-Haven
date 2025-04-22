import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import local placeholder images
import bannerPlaceholder from './assets/banner-placeholder.jpg';
import bookPlaceholder1 from './assets/book-placeholder1.png';
import bookPlaceholder2 from './assets/book-placeholder2.png';
import bookPlaceholder3 from './assets/book-placeholder3.png';
import bookPlaceholder4 from './assets/book-placeholder4.png';

import bookPlaceholder7 from './assets/book-placeholder7.png';
import bookPlaceholder8 from './assets/book-placeholder8.png';
import bookPlaceholder9 from './assets/book-placeholder9.png';
import bookPlaceholder10 from './assets/book-placeholder10.png';

import bookPlaceholder11 from './assets/book-placeholder11.png';
import bookPlaceholder12 from './assets/book-placeholder12.png';
import bookPlaceholder13 from './assets/book-placeholder13.png';
import bookPlaceholder14 from './assets/book-placeholder14.png';


import authorPlaceholder from './assets/author-placeholder.jpg';
import offerPlaceholder1 from './assets/offer-placeholder1.jpg';
import offerPlaceholder2 from './assets/offer-placeholder2.jpg';

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
    bannerTitle: "Discover Your Next Adventure",
    bannerSubtitle: "Explore our curated collection of books for every reader",
    shopNow: "Shop Now",
    browseCollection: "Browse Collection",
    bookCategories: "Book Categories",
    fiction: "Fiction",
    nonFiction: "Non-fiction",
    mystery: "Mystery",
    romance: "Romance",
    science: "Science",
    fantasy: "Fantasy",
    biography: "Biography",
    history: "History",
    addToCart: "Add to Cart",
    specialOffers: "Special Offers",
    // recommendedForYou: "Recommended For You",
    // authorOfMonth: "Author of the Month",
    // readInterview: "Read Interview",
    // giftCards: "Gift Cards",
    // physicalCard: "Physical Gift Card",
    // eCard: "E-Gift Card",
     buyNow: "Buy Now",
    // upcomingEvents: "Upcoming Events",
    // customerReviews: "What Our Customers Say",
    // newsletter: "Subscribe for updates and special offers",
    // aboutUs: "About Us",
    // contact: "Contact",
    // faq: "FAQ",
    // privacy: "Privacy Policy",
    // followUs: "Follow Us",
    // bestsellerTag: "Bestseller",
    // rsvp: "RSVP",
    // subscribe: "Subscribe",

    shopThisOffer: "Shop This Offer",
    recommendedForYou: "Recommended For You",
    authorOfMonth: "Author of the Month",
    readInterview: "Read Interview",
    giftCards: "Gift Cards",
    physicalCard: "Physical Gift Card",
    eCard: "E-Gift Card",
    upcomingEvents: "Upcoming Events",
    customerReviews: "What Our Customers Say",
    aboutUs: "About Us",
    contact: "Contact",
    faq: "FAQ",
    privacy: "Privacy Policy",
    followUs: "Follow Us",
    newsletter: "Subscribe for updates",
    subscribe: "Subscribe",
    rsvp: "RSVP",
    bestsellerTag: "Bestseller"
  },
  ta: {
    home: "முகப்பு",
    categories: "வகைகள்",
    newArrivals: "புதிய வரவுகள்",
    bestsellers: "சிறந்த விற்பனையாளர்கள்",
    login: "உள்நுழைய",
    register: "பதிவு செய்ய",
    searchPlaceholder: "புத்தகங்களைத் தேடு...",
    bannerTitle: "உங்கள் அடுத்த சாகசத்தைக் கண்டறியவும்",
    bannerSubtitle: "ஒவ்வொரு வாசகருக்கும் உருவாக்கப்பட்ட எங்கள் தொகுப்பை ஆராயவும்",
    shopNow: "இப்போது வாங்க",
    browseCollection: "தொகுப்பை உலாவு",
    bookCategories: "புத்தக வகைகள்",
    fiction: "கற்பனை",
    nonFiction: "கற்பனை அல்லாத",
    mystery: "மர்மம்",
    romance: "காதல்",
    science: "அறிவியல்",
    fantasy: "கனவுருப்புனைவு",
    biography: "சுயசரிதை",
    history: "வரலாறு",
    addToCart: "கார்ட்டில் சேர்க்க",
    specialOffers: "சிறப்பு சலுகைகள்",
    // recommendedForYou: "உங்களுக்கான பரிந்துரைகள்",
    // authorOfMonth: "மாதத்தின் எழுத்தாளர்",
    // readInterview: "நேர்காணலைப் படிக்கவும்",
    // giftCards: "பரிசு அட்டைகள்",
    // physicalCard: "உடல் பரிசு அட்டை",
    // eCard: "மின்னணு பரிசு அட்டை",
    buyNow: "இப்போது வாங்க",
    // upcomingEvents: "வரவிருக்கும் நிகழ்வுகள்",
    // customerReviews: "எங்கள் வாடிக்கையாளர்கள் என்ன சொல்கிறார்கள்",
    // newsletter: "புதுப்பிப்புகள் மற்றும் சிறப்பு சலுகைகளுக்கு குழுசேரவும்",
    // aboutUs: "எங்களைப் பற்றி",
    // contact: "தொடர்பு கொள்ள",
    // faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    // privacy: "தனியுரிமைக் கொள்கை",
    // followUs: "எங்களைப் பின்தொடரவும்",
    // bestsellerTag: "சிறந்த விற்பனையாளர்",
    // rsvp: "பதிலளி",
    // subscribe: "குழுசேர்",

    shopThisOffer: "இந்த சலுகையை வாங்க",
    recommendedForYou: "உங்களுக்கான பரிந்துரைகள்",
    authorOfMonth: "மாத எழுத்தாளர்",
    readInterview: "நேர்காணலைப் படிக்கவும்",
    giftCards: "பரிசு அட்டைகள்",
    physicalCard: "உடல் பரிசு அட்டை",
    eCard: "மின்னணு பரிசு அட்டை",
    upcomingEvents: "வரவிருக்கும் நிகழ்வுகள்",
    customerReviews: "வாடிக்கையாளர் மதிப்புரைகள்",
    aboutUs: "எங்களைப் பற்றி",
    contact: "தொடர்பு கொள்ள",
    faq: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
    privacy: "தனியுரிமைக் கொள்கை",
    followUs: "எங்களைப் பின்தொடரவும்",
    newsletter: "புதுப்பிப்புகளுக்கு குழுசேரவும்",
    subscribe: "குழுசேர்",
    rsvp: "பதிலளி",
    bestsellerTag: "சிறந்த விற்பனையாளர்"
  },
  si: {
    home: "මුල් පිටුව",
    categories: "වර්ග",
    newArrivals: "නව පැමිණීම්",
    bestsellers: "හොඳම විකුණුම්",
    login: "පුරන්න",
    register: "ලියාපදිංචි වන්න",
    searchPlaceholder: "පොත් සොයන්න...",
    bannerTitle: "ඔබගේ ඊළඟ ගවේෂණය සොයා ගන්න",
    bannerSubtitle: "සෑම කියවන්නෙකුටම අපගේ පොත් එකතුව ගවේෂණය කරන්න",
    shopNow: "දැන් මිලදී ගන්න",
    browseCollection: "සංග්රහය ගවේෂණය කරන්න",
    bookCategories: "පොත් වර්ග",
    fiction: "කල්පිත",
    nonFiction: "නොකල්පිත",
    mystery: "අභිරහස",
    romance: "රොමාන්ස්",
    science: "විද්යාව",
    fantasy: "පරාකල්පිත",
    biography: "චරිතාපදාන",
    history: "ඉතිහාසය",
    addToCart: "කරත්තයට එක් කරන්න",
    specialOffers: "විශේෂ ඉල්ලුම්",
    // recommendedForYou: "ඔබ වෙනුවෙන් නිර්දේශිත",
    // authorOfMonth: "මාසයේ කතුවරයා",
    // readInterview: "සම්මුඛ සාකච්ඡා කියවන්න",
    // giftCards: "ත්යාග කාඩ්පත්",
    // physicalCard: "භෞතික ත්යාග කාඩ්පත්",
    // eCard: "ඊ-ත්යාග කාඩ්පත්",
     buyNow: "දැන් මිලදී ගන්න",
    // upcomingEvents: "ඉදිරි වැඩසටහන්",
    // customerReviews: "අපේ ගනුදෙනුකරුවන් කියන දේ",
    // newsletter: "යාවත්කාලීනවීම් සහ විශේෂ පිරිනැමීම් සඳහා ලියාපදිංචි වන්න",
    // aboutUs: "අපගේ ගැන",
    // contact: "සම්බන්ධ කරගන්න",
    // faq: "නිතර අසන පැණ",
    // privacy: "පෞද්ගලිකත්ව ප්රතිපත්තිය",
    // followUs: "අපිත් එක්ක එකතු වෙන්න",
    // bestsellerTag: "හොඳම විකුණුම්",
    // rsvp: "පිළිතුරු දෙන්න",
    // subscribe: "දායක වන්න",

    shopThisOffer: "මෙම පිරිනැමීම store",
    recommendedForYou: "ඔබ වෙනුවෙන් නිර්දේශිත",
    authorOfMonth: "මාසයේ කතුවරයා",
    readInterview: "සම්මුඛ පරිශීලනය කරන්න",
    giftCards: "ත්යාග කාඩ්පත්",
    physicalCard: "ද්රව්යමය ත්යාග කාඩ්පත",
    eCard: "ඊ-ත්යාග කාඩ්පත",
    upcomingEvents: "ඉදිරි වැඩසටහන්",
    customerReviews: "පාරිභෝගික සමාලෝචන",
    aboutUs: "අපි ගැන",
    contact: "අමතන්න",
    faq: "නිතර අසන පැණ",
    privacy: "රහස්යතා ප්රතිපත්තිය",
    followUs: "අපව අනුගමනය කරන්න",
    newsletter: "යාවත්කාලීන කිරීම් සඳහා ලියාපදිංචි වන්න",
    subscribe: "දායක වන්න",
    rsvp: "ප්රතිචාර දක්වන්න",
    bestsellerTag: "හොඳම විකුණුම්"
  }
};

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [language, setLanguage] = useState('en');

  // Sample data
  const featuredBooks = [
    { id: 1, title: "The Midnight Library", author: "Matt Haig", price: "$14.99", image: bookPlaceholder1 },
    { id: 2, title: "Project Hail Mary", author: "Andy Weir", price: "$18.99", image: bookPlaceholder2 },
    { id: 3, title: "Where the Crawdads Sing", author: "Delia Owens", price: "$12.99", image: bookPlaceholder3 }
  ];

  const newArrivals = [
    { id: 4, title: "The Paris Apartment", author: "Lucy Foley", price: "$16.99", image: bookPlaceholder1 },
    { id: 5, title: "Sea of Tranquility", author: "Emily St. John Mandel", price: "$15.99", image: bookPlaceholder2 },
    { id: 6, title: "Book Lovers", author: "Emily Henry", price: "$13.99", image: bookPlaceholder3 },
    { id: 7, title: "The Maid", author: "Nita Prose", price: "$14.99", image: bookPlaceholder4 }
  ];

  const bestsellers = [
    { id: 8, title: "It Ends With Us", author: "Colleen Hoover", price: "$11.99", rating: 4.8, image: bookPlaceholder7 },
    { id: 9, title: "Atomic Habits", author: "James Clear", price: "$17.99", rating: 4.9, image: bookPlaceholder8 },
    { id: 10, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "$12.99", rating: 4.7, image: bookPlaceholder9 },
    { id: 11, title: "hmjghj", author: "Colleen Hoover", price: "$11.99", rating: 4.8, image: bookPlaceholder10 }
  ];

  const specialOffers = [
    { id: 11, title: "Buy 2 Get 1 Free", description: "On all fiction books", image: offerPlaceholder1 },
    { id: 12, title: "30% Off", description: "Classic literature collection", image: offerPlaceholder2 }
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
                <Link to="/categories" style={{ color: 'white', textDecoration: 'none' }}>
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

      {/* Main Banner */}
      <section style={{ 
        position: 'relative', 
        height: '500px', 
        backgroundColor: '#f5f5f5',
        backgroundImage: `url(${bannerPlaceholder})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ backgroundColor: 'rgba(0,0,0,0.6)', padding: '40px', borderRadius: '10px' }}>
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>{translations[language].bannerTitle}</h2>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>{translations[language].bannerSubtitle}</p>
          <div>
            <button style={{
              padding: '12px 30px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              fontSize: '18px',
              marginRight: '15px',
              cursor: 'pointer'
            }}>{translations[language].shopNow}</button>
            <button style={{
              padding: '12px 30px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer'
            }}>{translations[language].browseCollection}</button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={{ padding: '40px 20px', backgroundColor: sectionBg }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].bookCategories}
        </h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {[
            translations[language].fiction,
            translations[language].nonFiction,
            translations[language].mystery,
            translations[language].romance,
            translations[language].science,
            translations[language].fantasy,
            translations[language].biography,
            translations[language].history
          ].map(category => (
            <div key={category} style={{
              padding: '15px 30px',
              backgroundColor: cardBg,
              borderRadius: '12px',
              fontSize: '20px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              color: textColor,
              ':hover': {
                backgroundColor: buttonBg,
                color: 'white'
              }
            }}>{category}</div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '40px 20px', backgroundColor: sectionBg }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].newArrivals}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {newArrivals.map(book => (
            <div key={book.id} style={{
              backgroundColor: cardBg,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s',
              ':hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <img src={book.image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px', color: textColor }}>{book.title}</h3>
                <p style={{ margin: '0 0 10px', color: secondaryTextColor }}>{book.author}</p>
                <p style={{ margin: '0 0 15px', fontWeight: 'bold', color: textColor }}>{book.price}</p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: buttonBg,
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>{translations[language].addToCart}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section style={{ padding: '40px 20px', backgroundColor: darkMode ? '#1a1a1a' : 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].bestsellers}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {bestsellers.map(book => (
            <div key={book.id} style={{
              backgroundColor: cardBg,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <div style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                backgroundColor: '#e74c3c',
                color: 'white',
                padding: '5px 10px',
                borderRadius: '5px',
                fontSize: '14px'
              }}>{translations[language].bestsellerTag}</div>
              <img src={book.image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px', color: textColor }}>{book.title}</h3>
                <p style={{ margin: '0 0 10px', color: secondaryTextColor }}>{book.author}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < Math.floor(book.rating) ? '#f39c12' : '#ddd', fontSize: '20px' }}>★</span>
                  ))}
                  <span style={{ marginLeft: '5px', fontSize: '14px', color: secondaryTextColor }}>{book.rating}</span>
                </div>
                <p style={{ margin: '0 0 15px', fontWeight: 'bold', color: textColor }}>{book.price}</p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: buttonBg,
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>{translations[language].addToCart}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Rest of sections follow similar pattern for translations */}

{/* Special Offers */}
<section style={{ padding: '40px 20px', backgroundColor: sectionBg }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].specialOffers}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {specialOffers.map(offer => (
            <div key={offer.id} style={{
              backgroundColor: cardBg,
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '24px', color: '#e74c3c' }}>{offer.title}</h3>
                <p style={{ margin: '0 0 15px', fontSize: '16px', color: textColor }}>{offer.description}</p>
                <button style={{
                  padding: '10px 20px',
                  backgroundColor: buttonBg,
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>{translations[language].shopThisOffer}</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommended For You */}
      <section style={{ padding: '40px 20px', backgroundColor: darkMode ? '#1a1a1a' : 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].recommendedForYou}
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[...newArrivals].slice(0, 4).map(book => (
            <div key={book.id} style={{ textAlign: 'center' }}>
              <img src={book.image} alt={book.title} style={{ width: '120px', height: '180px', objectFit: 'cover', marginBottom: '10px' }} />
              <h3 style={{ margin: '0 0 5px', fontSize: '16px', color: textColor }}>{book.title}</h3>
              <p style={{ margin: '0 0 10px', color: secondaryTextColor, fontSize: '14px' }}>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Author of the Month */}
      <section style={{ 
        padding: '40px 20px', 
        backgroundColor: headerFooterBg,
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px' }}>{translations[language].authorOfMonth}</h2>
        <div style={{ 
          display: 'flex',
          alignItems: 'center',
          maxWidth: '800px',
          margin: '0 auto',
          gap: '40px',
          textAlign: 'left'
        }}>
          <img 
            src={authorPlaceholder}
            alt="Author of the Month" 
            style={{ borderRadius: '5px', width: '200px', height: '250px', objectFit: 'cover' }}
          />
          <div>
            <h3 style={{ fontSize: '28px', marginBottom: '10px' }}>Margaret Atwood</h3>
            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '20px' }}>
              {translations[language].language === 'en' 
                ? `The acclaimed author of "The Handmaid's Tale" and "Alias Grace" joins us this month for an exclusive interview.`
                : 'பிரபல எழுத்தாளர் மார்கரெட் அட்வுட் இந்த மாதம் நமது சிறப்பு நேர்காணலில் பங்கேற்கிறார்.'}
            </p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>{translations[language].readInterview}</button>
          </div>
        </div>
      </section>

       {/* Gift Cards */}
       <section style={{ padding: '40px 20px', backgroundColor: sectionBg, textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].giftCards}
        </h2>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            backgroundColor: cardBg,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            width: '250px'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>{translations[language].physicalCard}</h3>
            <p style={{ marginBottom: '20px', color: textColor }}>
              {translations[language].language === 'en' 
                ? "Beautifully designed physical gift cards"
                : "அழகாக வடிவமைக்கப்பட்ட உடல் பரிசு அட்டைகள்"}
            </p>
            <button style={{
              padding: '8px 15px',
              backgroundColor: buttonBg,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>{translations[language].buyNow}</button>
          </div>
          <div style={{ 
            backgroundColor: cardBg,
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            width: '250px'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>{translations[language].eCard}</h3>
            <p style={{ marginBottom: '20px', color: textColor }}>
              {translations[language].language === 'en' 
                ? "Instant digital gift cards via email"
                : "உடனடி மின்னணு பரிசு அட்டைகள்"}
            </p>
            <button style={{
              padding: '8px 15px',
              backgroundColor: buttonBg,
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>{translations[language].buyNow}</button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: '40px 20px', backgroundColor: darkMode ? '#1a1a1a' : 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].upcomingEvents}
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { id: 1, title: "Author Talk: New Science Fiction", date: "June 15, 2023", time: "6:00 PM" },
            { id: 2, title: "Children's Story Hour", date: "June 18, 2023", time: "10:00 AM" },
            { id: 3, title: "Book Signing: Local Authors", date: "June 22, 2023", time: "2:00 PM" }
          ].map(event => (
            <div key={event.id} style={{
              backgroundColor: cardBg,
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px', color: '#e74c3c' }}>{event.title}</h3>
              <p style={{ margin: '0 0 5px', color: textColor }}>{event.date}</p>
              <p style={{ margin: '0 0 15px', color: textColor }}>{event.time}</p>
              <button style={{
                padding: '8px 15px',
                backgroundColor: buttonBg,
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>{translations[language].rsvp}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section style={{ padding: '40px 20px', backgroundColor: sectionBg, textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px', color: textColor }}>
          {translations[language].customerReviews}
        </h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { id: 1, name: "Sarah J.", review: "Best selection of books in town!", rating: 5 },
            { id: 2, name: "Michael T.", review: "Cozy atmosphere and great events", rating: 4 },
            { id: 3, name: "Emma R.", review: "Unique books selection", rating: 5 }
          ].map(review => (
            <div key={review.id} style={{
              backgroundColor: cardBg,
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: i < review.rating ? '#f39c12' : '#ddd', fontSize: '24px' }}>★</span>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '15px', color: textColor }}>"{review.review}"</p>
              <p style={{ fontWeight: 'bold', color: textColor }}>- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
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
              : "1995 முதல் உங்கள் உள்நாட்டு புத்தககம்"}</p>
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
                placeholder={translations[language].language === 'en' ? "Your email" : "மின்னஞ்சல்"}
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
              }}>{translations[language].subscribe}</button>
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
            : "அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை"}</p>
        </div>
      </footer>

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

export default Home;