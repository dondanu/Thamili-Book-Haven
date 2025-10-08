import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCart } from './Cart';

const BookDetails = () => {
  const { bookId } = useParams();
  const { addToCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [reviews, setReviews] = useState([]);
  const [reviewName, setReviewName] = useState('');
  const [reviewRating, setReviewRating] = useState(0);
  const [reviewComment, setReviewComment] = useState('');
  const [formError, setFormError] = useState('');

  // Sample book data - in real app, this would come from API
  const bookData = {
    1: {
      id: 1,
      title: "ANILAADUM MUNDRIL",
      author: "Na Muthukumar",
      price: "$16.99",
      image: "/assets/book-placeholder1.png",
      rating: 4.5,
      description: "A captivating Tamil novel that explores the depths of human emotions and relationships. This masterpiece by Na Muthukumar takes readers on an unforgettable journey through the complexities of life, love, and loss.",
      isbn: "978-1234567890",
      pages: 320,
      language: "Tamil",
      publisher: "Thamili Publications",
      publishedDate: "2023",
      category: "Fiction",
      stock: 15,
      reviews: [
        { id: 1, name: "Rajesh Kumar", rating: 5, comment: "Amazing book! Couldn't put it down." },
        { id: 2, name: "Priya Sharma", rating: 4, comment: "Beautiful writing and compelling story." },
        { id: 3, name: "Arun Singh", rating: 5, comment: "One of the best Tamil novels I've read." }
      ]
    },
    2: {
      id: 2,
      title: "MGR oru Sakaptham",
      author: "Barathirja",
      price: "$15.99",
      image: "/assets/book-placeholder2.png",
      rating: 4.8,
      description: "An insightful biography of the legendary M.G. Ramachandran, exploring his life, political career, and lasting impact on Tamil Nadu politics and cinema.",
      isbn: "978-1234567891",
      pages: 450,
      language: "Tamil",
      publisher: "Political Publications",
      publishedDate: "2023",
      category: "Biography",
      stock: 8,
      reviews: [
        { id: 1, name: "Suresh Kumar", rating: 5, comment: "Excellent biography of a great leader." },
        { id: 2, name: "Meera Devi", rating: 4, comment: "Well researched and written." }
      ]
    }
  };

  const book = bookData[bookId] || bookData[1]; // Default to first book if not found

  // Track recently viewed
  useEffect(() => {
    try {
      const key = 'recentlyViewed';
      const raw = localStorage.getItem(key);
      const arr = raw ? JSON.parse(raw) : [];
      const compact = arr.filter((b) => b.id !== book.id);
      compact.unshift({ id: book.id, title: book.title, author: book.author, price: book.price, image: book.image });
      localStorage.setItem(key, JSON.stringify(compact.slice(0, 10)));
    } catch {}
  }, [book.id]);

  // Load and persist reviews per book
  useEffect(() => {
    try {
      const key = `reviews:${book.id}`;
      const raw = localStorage.getItem(key);
      const initial = raw ? JSON.parse(raw) : (book.reviews || []);
      setReviews(initial);
    } catch {
      setReviews(book.reviews || []);
    }
  }, [book.id]);

  const saveReviews = (next) => {
    try {
      localStorage.setItem(`reviews:${book.id}`, JSON.stringify(next));
    } catch {}
  };

  const averageRating = useMemo(() => {
    if (!reviews.length) return 0;
    const sum = reviews.reduce((a, r) => a + (r.rating || 0), 0);
    return Math.round((sum / reviews.length) * 10) / 10; // one decimal
  }, [reviews]);

  const handleAddToCart = () => {
    for (let i = 0; i < selectedQuantity; i++) {
      addToCart(book);
    }
    alert(`${selectedQuantity} copy/copies of "${book.title}" added to cart!`);
  };

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

      {/* Breadcrumb */}
      <div style={{ padding: '20px 40px', backgroundColor: darkMode ? '#2d2d2d' : '#f8f9fa' }}>
        <nav style={{ fontSize: '14px' }}>
          <Link to="/" style={{ color: darkMode ? '#b0b0b0' : '#666', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 10px', color: darkMode ? '#b0b0b0' : '#666' }}>/</span>
          <Link to="/categories" style={{ color: darkMode ? '#b0b0b0' : '#666', textDecoration: 'none' }}>Categories</Link>
          <span style={{ margin: '0 10px', color: darkMode ? '#b0b0b0' : '#666' }}>/</span>
          <span style={{ color: darkMode ? '#f0f0f0' : '#333' }}>{book.title}</span>
        </nav>
      </div>

      {/* Book Details */}
      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
          {/* Book Image */}
          <div>
            <div style={{
              background: darkMode ? '#2d2d2d' : 'white',
              borderRadius: '20px',
              padding: '30px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
              border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`
            }}>
              <img 
                src={book.image} 
                alt={book.title}
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  borderRadius: '15px'
                }}
              />
            </div>
          </div>

          {/* Book Info */}
          <div>
            <h1 style={{ 
              fontSize: '2.5rem', 
              marginBottom: '15px',
              color: darkMode ? '#f0f0f0' : '#333',
              lineHeight: '1.2'
            }}>
              {book.title}
            </h1>
            
            <p style={{ 
              fontSize: '1.3rem', 
              color: darkMode ? '#b0b0b0' : '#666',
              marginBottom: '20px',
              fontStyle: 'italic'
            }}>
              by {book.author}
            </p>

            {/* Rating */}
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <div style={{ display: 'flex', marginRight: '10px' }}>
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    style={{ 
                      color: i < Math.floor(averageRating) ? '#f39c12' : '#ddd',
                      fontSize: '1.5rem'
                    }}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span style={{ 
                fontSize: '1.1rem', 
                color: darkMode ? '#b0b0b0' : '#666',
                marginLeft: '10px'
              }}>
                {averageRating || '0.0'} ({reviews.length} reviews)
              </span>
            </div>

            {/* Price */}
            <div style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#e74c3c',
              marginBottom: '30px'
            }}>
              {book.price}
            </div>

            {/* Description */}
            <div style={{ marginBottom: '30px' }}>
              <h3 style={{ 
                fontSize: '1.3rem', 
                marginBottom: '15px',
                color: darkMode ? '#f0f0f0' : '#333'
              }}>
                Description
              </h3>
              <p style={{ 
                lineHeight: '1.6',
                color: darkMode ? '#b0b0b0' : '#666'
              }}>
                {book.description}
              </p>
            </div>

            {/* Book Details */}
            <div style={{ 
              background: darkMode ? '#2d2d2d' : '#f8f9fa',
              borderRadius: '15px',
              padding: '20px',
              marginBottom: '30px'
            }}>
              <h3 style={{ 
                fontSize: '1.2rem', 
                marginBottom: '15px',
                color: darkMode ? '#f0f0f0' : '#333'
              }}>
                Book Details
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <strong>ISBN:</strong> {book.isbn}
                </div>
                <div>
                  <strong>Pages:</strong> {book.pages}
                </div>
                <div>
                  <strong>Language:</strong> {book.language}
                </div>
                <div>
                  <strong>Publisher:</strong> {book.publisher}
                </div>
                <div>
                  <strong>Published:</strong> {book.publishedDate}
                </div>
                <div>
                  <strong>Category:</strong> {book.category}
                </div>
              </div>
            </div>

            {/* Stock Status */}
            <div style={{ marginBottom: '30px' }}>
              {book.stock > 0 ? (
                <span style={{ 
                  color: '#2ed573', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  ✓ In Stock ({book.stock} available)
                </span>
              ) : (
                <span style={{ 
                  color: '#e74c3c', 
                  fontWeight: 'bold',
                  fontSize: '1.1rem'
                }}>
                  ✗ Out of Stock
                </span>
              )}
            </div>

            {/* Quantity and Add to Cart */}
            <div style={{ marginBottom: '30px' }}>
              <label style={{ 
                display: 'block', 
                marginBottom: '10px',
                fontWeight: 'bold'
              }}>
                Quantity:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button 
                  onClick={() => setSelectedQuantity(Math.max(1, selectedQuantity - 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#e74c3c',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  -
                </button>
                <span style={{ 
                  fontSize: '1.2rem', 
                  fontWeight: 'bold',
                  minWidth: '30px',
                  textAlign: 'center'
                }}>
                  {selectedQuantity}
                </span>
                <button 
                  onClick={() => setSelectedQuantity(Math.min(book.stock, selectedQuantity + 1))}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: 'none',
                    background: '#2ed573',
                    color: 'white',
                    cursor: 'pointer',
                    fontSize: '18px'
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '15px' }}>
              <button 
                onClick={handleAddToCart}
                disabled={book.stock === 0}
                style={{
                  flex: 1,
                  padding: '15px 30px',
                  background: book.stock > 0 ? 'linear-gradient(45deg, #667eea, #764ba2)' : '#ccc',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: book.stock > 0 ? 'pointer' : 'not-allowed',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (book.stock > 0) {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Add to Cart
              </button>
              <button style={{
                padding: '15px 20px',
                background: 'transparent',
                color: '#e74c3c',
                border: '2px solid #e74c3c',
                borderRadius: '25px',
                fontSize: '1.1rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#e74c3c';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#e74c3c';
              }}
              >
                ♥ Wishlist
              </button>
            </div>
          </div>
        </div>

        {/* Recommendations */}
        <div style={{ marginTop: '50px' }}>
          <h2 style={{ fontSize: '1.6rem', marginBottom: '20px', color: darkMode ? '#f0f0f0' : '#333' }}>You might also like</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 16 }}>
            {Object.values(bookData)
              .filter((b) => b.id !== book.id && (b.category === book.category || b.author === book.author))
              .slice(0, 6)
              .map((b) => (
                <Link key={b.id} to={`/book/${b.id}`} style={{ textDecoration: 'none', color: darkMode ? '#f0f0f0' : '#333' }}>
                  <div style={{ background: darkMode ? '#2d2d2d' : 'white', borderRadius: 10, border: `1px solid ${darkMode ? '#444' : '#eee'}`, overflow: 'hidden' }}>
                    <img loading="lazy" src={b.image} alt={b.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                    <div style={{ padding: 10 }}>
                      <div style={{ fontWeight: 'bold', fontSize: 14, marginBottom: 6 }}>{b.title}</div>
                      <div style={{ fontSize: 12, color: darkMode ? '#b0b0b0' : '#666' }}>{b.author}</div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div style={{ marginTop: '60px' }}>
          <h2 style={{ 
            fontSize: '2rem', 
            marginBottom: '30px',
            color: darkMode ? '#f0f0f0' : '#333'
          }}>
            Customer Reviews
          </h2>
          
          <div style={{ display: 'grid', gap: '20px', marginBottom: '30px' }}>
            {reviews.map(review => (
              <div key={review.id} style={{
                background: darkMode ? '#2d2d2d' : 'white',
                borderRadius: '15px',
                padding: '25px',
                boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                  <h4 style={{ 
                    margin: 0, 
                    fontSize: '1.2rem',
                    color: darkMode ? '#f0f0f0' : '#333'
                  }}>
                    {review.name}
                  </h4>
                  <div style={{ display: 'flex' }}>
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        style={{ 
                          color: i < review.rating ? '#f39c12' : '#ddd',
                          fontSize: '1.2rem'
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p style={{ 
                  margin: 0,
                  color: darkMode ? '#b0b0b0' : '#666',
                  lineHeight: '1.6'
                }}>
                  {review.comment}
                </p>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <div style={{
            background: darkMode ? '#2d2d2d' : 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`
          }}>
            <h3 style={{ marginTop: 0, marginBottom: '15px' }}>Write a Review</h3>
            {formError && (
              <div style={{ color: '#e74c3c', marginBottom: '10px' }}>{formError}</div>
            )}
            <div style={{ display: 'grid', gap: '12px' }}>
              <input
                type="text"
                placeholder="Your name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                style={{ padding: '10px', borderRadius: '8px', border: `2px solid ${darkMode ? '#555' : '#ddd'}` }}
              />
              <div>
                <span style={{ marginRight: '10px' }}>Your rating:</span>
                {[1,2,3,4,5].map(star => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setReviewRating(star)}
                    aria-label={`Rate ${star} star${star>1?'s':''}`}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '22px',
                      color: star <= reviewRating ? '#f39c12' : '#ddd'
                    }}
                  >
                    ★
                  </button>
                ))}
              </div>
              <textarea
                rows={4}
                placeholder="Write your review..."
                value={reviewComment}
                onChange={(e) => setReviewComment(e.target.value)}
                style={{ padding: '10px', borderRadius: '8px', border: `2px solid ${darkMode ? '#555' : '#ddd'}`, resize: 'vertical' }}
              />
              <button
                onClick={() => {
                  setFormError('');
                  if (!reviewName.trim()) return setFormError('Please enter your name.');
                  if (reviewRating < 1 || reviewRating > 5) return setFormError('Please select a rating.');
                  if (!reviewComment.trim()) return setFormError('Please write a comment.');
                  const next = [
                    { id: Date.now(), name: reviewName.trim(), rating: reviewRating, comment: reviewComment.trim() },
                    ...reviews
                  ];
                  setReviews(next);
                  saveReviews(next);
                  setReviewName('');
                  setReviewRating(0);
                  setReviewComment('');
                }}
                style={{
                  padding: '12px 18px',
                  background: 'linear-gradient(45deg, #667eea, #764ba2)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  width: '180px'
                }}
              >
                Submit Review
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
