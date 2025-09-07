import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from './Cart';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    language: '',
    rating: '',
    sortBy: 'relevance'
  });
  const [showFilters, setShowFilters] = useState(false);

  // Sample book database - in real app, this would come from API
  const allBooks = [
    { id: 1, title: "ANILAADUM MUNDRIL", author: "Na Muthukumar", price: "$16.99", image: "/assets/book-placeholder1.png", category: "Fiction", language: "Tamil", rating: 4.5, publishedDate: "2023" },
    { id: 2, title: "MGR oru Sakaptham", author: "Barathirja", price: "$15.99", image: "/assets/book-placeholder2.png", category: "Biography", language: "Tamil", rating: 4.8, publishedDate: "2023" },
    { id: 3, title: "Marakkave Ninaikiren", author: "Maari Selvaraj", price: "$13.99", image: "/assets/book-placeholder3.png", category: "Fiction", language: "Tamil", rating: 4.2, publishedDate: "2023" },
    { id: 4, title: "7g Rainbow Colony", author: "Selvaragavan", price: "$14.99", image: "/assets/book-placeholder4.png", category: "Romance", language: "Tamil", rating: 4.6, publishedDate: "2023" },
    { id: 5, title: "Kathirungal Kathalippom", author: "Madurai Iramakirusnan", price: "$14.99", image: "/assets/book-placeholder11.png", category: "Fiction", language: "Tamil", rating: 4.7, publishedDate: "2023" },
    { id: 6, title: "ANANDA YAZH", author: "Na Muthukumar", price: "$18.99", image: "/assets/book-placeholder12.png", category: "Poetry", language: "Tamil", rating: 4.9, publishedDate: "2023" },
    { id: 7, title: "Anantha yalai meedukiraai", author: "Amuthavalli", price: "$12.99", image: "/assets/book-placeholder13.png", category: "Fiction", language: "Tamil", rating: 4.3, publishedDate: "2023" },
    { id: 8, title: "Kan pesum varthaikal", author: "Na Muthukumar", price: "$12.99", image: "/assets/book-placeholder14.png", category: "Poetry", language: "Tamil", rating: 4.4, publishedDate: "2023" },
    { id: 9, title: "Yarukku eppadi eluthuvathu", author: "Isai Gani Ilataraja", price: "$11.99", image: "/assets/book-placeholder7.png", category: "Non-fiction", language: "Tamil", rating: 4.8, publishedDate: "2023" },
    { id: 10, title: "Vennira Iravugal", author: "Piyothat Thasthaveskyr", price: "$17.99", image: "/assets/book-placeholder8.png", category: "Fiction", language: "Tamil", rating: 4.9, publishedDate: "2023" },
    { id: 11, title: "Thurupidicha G Kurippukal", author: "Valipokkan", price: "$12.99", image: "/assets/book-placeholder9.png", category: "Non-fiction", language: "Tamil", rating: 4.7, publishedDate: "2023" },
    { id: 12, title: "Ariyappadatha Thamilagam", author: "A Ra Venkadachalapathy", price: "$11.99", image: "/assets/book-placeholder10.png", category: "History", language: "Tamil", rating: 4.8, publishedDate: "2023" }
  ];

  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  // Filter and search logic
  useEffect(() => {
    let results = allBooks;

    // Search by title or author
    if (searchQuery) {
      results = results.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.category) {
      results = results.filter(book => book.category === filters.category);
    }

    if (filters.language) {
      results = results.filter(book => book.language === filters.language);
    }

    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      results = results.filter(book => {
        const price = parseFloat(book.price.replace('$', ''));
        return price >= min && price <= max;
      });
    }

    if (filters.rating) {
      const minRating = parseFloat(filters.rating);
      results = results.filter(book => book.rating >= minRating);
    }

    // Sort results
    switch (filters.sortBy) {
      case 'price-low':
        results.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        break;
      case 'price-high':
        results.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        break;
      case 'rating':
        results.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        results.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
        break;
      case 'alphabetical':
        results.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        // Keep original order for relevance
        break;
    }

    setFilteredBooks(results);
  }, [searchQuery, filters]);

  const handleFilterChange = (filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      category: '',
      priceRange: '',
      language: '',
      rating: '',
      sortBy: 'relevance'
    });
  };

  const categories = [...new Set(allBooks.map(book => book.category))];
  const languages = [...new Set(allBooks.map(book => book.language))];

  const themeStyles = {
    backgroundColor: darkMode ? '#1a1a1a' : 'white',
    color: darkMode ? '#f0f0f0' : '#333',
    minHeight: '100vh'
  };

  return (
    <div style={themeStyles}>
      {/* Header */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: darkMode ? '#121212' : '#2c3e50',
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
                  Home
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
                  Categories
                </Link>
              </li>
              <li style={{ margin: '0 15px' }}>
                <Link to="/new-arrivals" style={{ 
                  color: 'white', 
                  textDecoration: 'none',
                  paddingBottom: '5px',
                  borderBottom: '2px solid transparent',
                  transition: 'all 0.3s ease'
                }}>
                  New Arrivals
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
                  Bestsellers
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
          </Link>
        </div>
      </header>

      <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto' }}>
        {/* Search Bar */}
        <div style={{ 
          background: darkMode ? '#2d2d2d' : '#f8f9fa',
          borderRadius: '15px',
          padding: '30px',
          marginBottom: '30px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
        }}>
          <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
            <input
              type="text"
              placeholder="Search books by title or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                padding: '15px 20px',
                borderRadius: '25px',
                border: '2px solid #ddd',
                fontSize: '16px',
                backgroundColor: darkMode ? '#1a1a1a' : 'white',
                color: darkMode ? '#f0f0f0' : '#333'
              }}
            />
            <button
              onClick={() => setShowFilters(!showFilters)}
              style={{
                padding: '15px 20px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: 'bold'
              }}
            >
              🔍 Filters
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: showFilters ? '300px 1fr' : '1fr', gap: '30px' }}>
          {/* Filters Sidebar */}
          {showFilters && (
            <div style={{
              background: darkMode ? '#2d2d2d' : 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`,
              height: 'fit-content',
              position: 'sticky',
              top: '100px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
                <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Filters</h3>
                <button
                  onClick={clearFilters}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#e74c3c',
                    cursor: 'pointer',
                    fontSize: '14px',
                    textDecoration: 'underline'
                  }}
                >
                  Clear All
                </button>
              </div>

              {/* Category Filter */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    backgroundColor: darkMode ? '#1a1a1a' : 'white',
                    color: darkMode ? '#f0f0f0' : '#333'
                  }}
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    backgroundColor: darkMode ? '#1a1a1a' : 'white',
                    color: darkMode ? '#f0f0f0' : '#333'
                  }}
                >
                  <option value="">All Prices</option>
                  <option value="0-10">Under $10</option>
                  <option value="10-15">$10 - $15</option>
                  <option value="15-20">$15 - $20</option>
                  <option value="20-999">Over $20</option>
                </select>
              </div>

              {/* Language Filter */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Language</label>
                <select
                  value={filters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    backgroundColor: darkMode ? '#1a1a1a' : 'white',
                    color: darkMode ? '#f0f0f0' : '#333'
                  }}
                >
                  <option value="">All Languages</option>
                  {languages.map(language => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div style={{ marginBottom: '25px' }}>
                <label style={{ display: 'block', marginBottom: '10px', fontWeight: 'bold' }}>Minimum Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '2px solid #ddd',
                    backgroundColor: darkMode ? '#1a1a1a' : 'white',
                    color: darkMode ? '#f0f0f0' : '#333'
                  }}
                >
                  <option value="">Any Rating</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                  <option value="3.0">3.0+ Stars</option>
                </select>
              </div>
            </div>
          )}

          {/* Results Section */}
          <div>
            {/* Results Header */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '15px'
            }}>
              <div>
                <h2 style={{ 
                  fontSize: '1.8rem', 
                  margin: '0 0 5px 0',
                  background: darkMode ? 'none' : 'linear-gradient(45deg, #667eea, #764ba2)',
                  WebkitBackgroundClip: darkMode ? 'initial' : 'text',
                  WebkitTextFillColor: darkMode ? 'inherit' : 'transparent'
                }}>
                  {searchQuery ? `Search Results for "${searchQuery}"` : 'All Books'}
                </h2>
                <p style={{ margin: 0, color: darkMode ? '#b0b0b0' : '#666' }}>
                  {filteredBooks.length} book{filteredBooks.length !== 1 ? 's' : ''} found
                </p>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <label style={{ fontWeight: 'bold' }}>Sort by:</label>
                <select
                  value={filters.sortBy}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                  style={{
                    padding: '8px 15px',
                    borderRadius: '20px',
                    border: '2px solid #ddd',
                    backgroundColor: darkMode ? '#2d2d2d' : 'white',
                    color: darkMode ? '#f0f0f0' : '#333',
                    cursor: 'pointer'
                  }}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                  <option value="alphabetical">A to Z</option>
                </select>
              </div>
            </div>

            {/* Books Grid */}
            {filteredBooks.length === 0 ? (
              <div style={{ 
                textAlign: 'center', 
                padding: '80px 20px',
                background: darkMode ? '#2d2d2d' : '#f8f9fa',
                borderRadius: '15px',
                border: `2px dashed ${darkMode ? '#555' : '#ddd'}`
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '20px' }}>📚</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>No books found</h3>
                <p style={{ color: darkMode ? '#b0b0b0' : '#666', marginBottom: '30px' }}>
                  Try adjusting your search terms or filters
                </p>
                <button
                  onClick={clearFilters}
                  style={{
                    padding: '12px 30px',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold',
                    cursor: 'pointer'
                  }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                gap: '30px' 
              }}>
                {filteredBooks.map(book => (
                  <div key={book.id} style={{
                    background: darkMode ? '#2d2d2d' : 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`,
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}>
                    <Link to={`/book/${book.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <img 
                        src={book.image} 
                        alt={book.title}
                        style={{
                          width: '100%',
                          height: '300px',
                          objectFit: 'cover',
                          borderBottom: `3px solid ${darkMode ? '#444' : '#f0f0f0'}`
                        }}
                      />
                      <div style={{ padding: '20px' }}>
                        <h3 style={{ 
                          margin: '0 0 10px 0', 
                          fontSize: '1.2rem',
                          color: darkMode ? '#f0f0f0' : '#333',
                          lineHeight: '1.3'
                        }}>
                          {book.title}
                        </h3>
                        <p style={{ 
                          margin: '0 0 10px 0', 
                          color: darkMode ? '#b0b0b0' : '#666',
                          fontSize: '0.9rem'
                        }}>
                          by {book.author}
                        </p>
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          marginBottom: '10px' 
                        }}>
                          <div style={{ display: 'flex', marginRight: '8px' }}>
                            {[...Array(5)].map((_, i) => (
                              <span 
                                key={i} 
                                style={{ 
                                  color: i < Math.floor(book.rating) ? '#f39c12' : '#ddd',
                                  fontSize: '14px'
                                }}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                          <span style={{ 
                            fontSize: '12px', 
                            color: darkMode ? '#b0b0b0' : '#666'
                          }}>
                            {book.rating}
                          </span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center' 
                        }}>
                          <span style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: 'bold', 
                            color: '#e74c3c'
                          }}>
                            {book.price}
                          </span>
                          <span style={{ 
                            fontSize: '12px', 
                            color: darkMode ? '#b0b0b0' : '#666',
                            background: darkMode ? '#444' : '#f0f0f0',
                            padding: '4px 8px',
                            borderRadius: '10px'
                          }}>
                            {book.category}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div style={{ padding: '0 20px 20px 20px' }}>
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(book);
                        }}
                        style={{
                          width: '100%',
                          padding: '12px',
                          background: 'linear-gradient(45deg, #667eea, #764ba2)',
                          color: 'white',
                          border: 'none',
                          borderRadius: '20px',
                          cursor: 'pointer',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
