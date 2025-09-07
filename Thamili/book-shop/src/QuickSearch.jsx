import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuickSearch = ({ placeholder, darkMode, fontSize }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sample book titles for suggestions
  const bookTitles = [
    "ANILAADUM MUNDRIL",
    "MGR oru Sakaptham", 
    "Marakkave Ninaikiren",
    "7g Rainbow Colony",
    "Kathirungal Kathalippom",
    "ANANDA YAZH",
    "Anantha yalai meedukiraai",
    "Kan pesum varthaikal",
    "Yarukku eppadi eluthuvathu",
    "Vennira Iravugal",
    "Thurupidicha G Kurippukal",
    "Ariyappadatha Thamilagam"
  ];

  const authors = [
    "Na Muthukumar",
    "Barathirja",
    "Maari Selvaraj", 
    "Selvaragavan",
    "Madurai Iramakirusnan",
    "Amuthavalli",
    "Isai Gani Ilataraja",
    "Piyothat Thasthaveskyr",
    "Valipokkan",
    "A Ra Venkadachalapathy"
  ];

  useEffect(() => {
    if (searchQuery.length > 1) {
      const filteredTitles = bookTitles.filter(title => 
        title.toLowerCase().includes(searchQuery.toLowerCase())
      );
      const filteredAuthors = authors.filter(author => 
        author.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      const combined = [
        ...filteredTitles.map(title => ({ text: title, type: 'book' })),
        ...filteredAuthors.map(author => ({ text: author, type: 'author' }))
      ].slice(0, 5);
      
      setSuggestions(combined);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchQuery]);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion.text);
    setShowSuggestions(false);
    window.location.href = `/search?q=${encodeURIComponent(suggestion.text)}`;
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center', marginRight: '15px' }}>
      <input 
        type="text" 
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setShowSuggestions(suggestions.length > 0)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        style={{ 
          padding: '7px 15px', 
          borderRadius: '20px 0 0 20px', 
          border: 'none', 
          width: '200px',
          fontSize: `${fontSize}px`,
          outline: 'none'
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
      <button
        onClick={handleSearch}
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

      {/* Suggestions Dropdown */}
      {showSuggestions && suggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          background: darkMode ? '#2d2d2d' : 'white',
          border: `2px solid ${darkMode ? '#444' : '#ddd'}`,
          borderRadius: '0 0 15px 15px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          zIndex: 1000,
          maxHeight: '200px',
          overflowY: 'auto'
        }}>
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              style={{
                padding: '10px 15px',
                cursor: 'pointer',
                borderBottom: `1px solid ${darkMode ? '#444' : '#f0f0f0'}`,
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'background-color 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = darkMode ? '#444' : '#f8f9fa';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              <span style={{ fontSize: '16px' }}>
                {suggestion.type === 'book' ? '📖' : '✍️'}
              </span>
              <span style={{ 
                color: darkMode ? '#f0f0f0' : '#333',
                fontSize: '14px'
              }}>
                {suggestion.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuickSearch;
