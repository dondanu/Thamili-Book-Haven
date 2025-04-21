import React from 'react';
import { Link } from 'react-router-dom';

// Import local placeholder images (you should replace these with your actual images)
import bannerPlaceholder from './assets/banner-placeholder.jpg';
import bookPlaceholder1 from './assets/book-placeholder1.jpg';
import bookPlaceholder2 from './assets/book-placeholder2.jpg';
import bookPlaceholder3 from './assets/book-placeholder3.jpg';
import bookPlaceholder4 from './assets/book-placeholder4.jpg';
import bookPlaceholder5 from './assets/book-placeholder5.jpg';
import authorPlaceholder from './assets/author-placeholder.jpg';
import offerPlaceholder1 from './assets/offer-placeholder1.jpg';
import offerPlaceholder2 from './assets/offer-placeholder2.jpg';

const Home = () => {
  // Sample data for the page using local images
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
    { id: 8, title: "It Ends With Us", author: "Colleen Hoover", price: "$11.99", rating: 4.8, image: bookPlaceholder1 },
    { id: 9, title: "Atomic Habits", author: "James Clear", price: "$17.99", rating: 4.9, image: bookPlaceholder2 },
    { id: 10, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", price: "$12.99", rating: 4.7, image: bookPlaceholder3 }
  ];

  const specialOffers = [
    { id: 11, title: "Buy 2 Get 1 Free", description: "On all fiction books", image: offerPlaceholder1 },
    { id: 12, title: "30% Off", description: "Classic literature collection", image: offerPlaceholder2 }
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", color: "#333" }}>
      {/* Header/Navigation */}
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#2c3e50',
        color: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Thamili Book Haven</h1>
          <nav style={{ marginLeft: '40px' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
              <li style={{ margin: '0 15px' }}><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link></li>
              <li style={{ margin: '0 15px' }}><Link to="/categories" style={{ color: 'white', textDecoration: 'none' }}>Categories</Link></li>
              <li style={{ margin: '0 15px' }}><Link to="/new-arrivals" style={{ color: 'white', textDecoration: 'none' }}>New Arrivals</Link></li>
              <li style={{ margin: '0 15px' }}><Link to="/bestsellers" style={{ color: 'white', textDecoration: 'none' }}>Bestsellers</Link></li>
            </ul>
          </nav>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <input 
            type="text" 
            placeholder="Search books..." 
            style={{ 
              padding: '8px 15px', 
              borderRadius: '20px', 
              border: 'none', 
              marginRight: '15px',
              width: '250px'
            }} 
          />
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', marginRight: '15px' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
          </Link>
          <Link to="/account" style={{ color: 'white', textDecoration: 'none' }}>
            <span style={{ fontSize: '20px' }}>👤</span>
          </Link>
        </div>
      </header>

      {/* Main Banner/Carousel */}
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
          <h2 style={{ fontSize: '48px', marginBottom: '20px' }}>Discover Your Next Adventure</h2>
          <p style={{ fontSize: '20px', marginBottom: '30px' }}>Explore our curated collection of books for every reader</p>
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
            }}>Shop Now</button>
            <button style={{
              padding: '12px 30px',
              backgroundColor: 'transparent',
              color: 'white',
              border: '2px solid white',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer'
            }}>Browse Collection</button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section style={{ padding: '40px 20px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Book Categories</h2>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          {['Fiction', 'Non-fiction', 'Mystery', 'Romance', 'Science', 'Fantasy', 'Biography', 'History'].map(category => (
            <div key={category} style={{
              padding: '15px 30px',
              backgroundColor: '#f8f9fa',
              borderRadius: '30px',
              fontSize: '18px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              ':hover': {
                backgroundColor: '#e74c3c',
                color: 'white'
              }
            }}>{category}</div>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>New Arrivals</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {newArrivals.map(book => (
            <div key={book.id} style={{
              backgroundColor: 'white',
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
                <h3 style={{ margin: '0 0 5px', fontSize: '18px' }}>{book.title}</h3>
                <p style={{ margin: '0 0 10px', color: '#666' }}>{book.author}</p>
                <p style={{ margin: '0 0 15px', fontWeight: 'bold' }}>{book.price}</p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bestsellers Section */}
      <section style={{ padding: '40px 20px', backgroundColor: 'white' }}>
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
              backgroundColor: '#f8f9fa',
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
              }}>Bestseller</div>
              <img src={book.image} alt={book.title} style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
              <div style={{ padding: '15px' }}>
                <h3 style={{ margin: '0 0 5px', fontSize: '18px' }}>{book.title}</h3>
                <p style={{ margin: '0 0 10px', color: '#666' }}>{book.author}</p>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < Math.floor(book.rating) ? '#f39c12' : '#ddd', fontSize: '20px' }}>★</span>
                  ))}
                  <span style={{ marginLeft: '5px', fontSize: '14px' }}>{book.rating}</span>
                </div>
                <p style={{ margin: '0 0 15px', fontWeight: 'bold' }}>{book.price}</p>
                <button style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#e74c3c',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Offers */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Special Offers</h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {specialOffers.map(offer => (
            <div key={offer.id} style={{
              backgroundColor: 'white',
              borderRadius: '8px',
              overflow: 'hidden',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
              position: 'relative'
            }}>
              <img src={offer.image} alt={offer.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 10px', fontSize: '24px', color: '#e74c3c' }}>{offer.title}</h3>
                <p style={{ margin: '0 0 15px', fontSize: '16px' }}>{offer.description}</p>
                <button style={{
                  padding: '10px 20px',
                  backgroundColor: '#2c3e50',
                  color: 'white',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}>Shop This Offer</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section style={{ padding: '40px 20px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Recommended For You</h2>
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
              <h3 style={{ margin: '0 0 5px', fontSize: '16px' }}>{book.title}</h3>
              <p style={{ margin: '0 0 10px', color: '#666', fontSize: '14px' }}>{book.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Author of the Month */}
      <section style={{ 
        padding: '40px 20px', 
        backgroundColor: '#2c3e50',
        color: 'white',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px' }}>Author of the Month</h2>
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
              The acclaimed author of "The Handmaid's Tale" and "Alias Grace" joins us this month for an exclusive interview and book signing event.
            </p>
            <button style={{
              padding: '10px 20px',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px'
            }}>Read Interview</button>
          </div>
        </div>
      </section>

      {/* Gift Cards */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px' }}>Gift Cards</h2>
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <div style={{ 
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            width: '250px'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>Physical Gift Card</h3>
            <p style={{ marginBottom: '20px' }}>Beautifully designed card shipped to you or your recipient</p>
            <button style={{
              padding: '8px 15px',
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Buy Now</button>
          </div>
          <div style={{ 
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
            width: '250px'
          }}>
            <h3 style={{ color: '#e74c3c', marginBottom: '15px' }}>E-Gift Card</h3>
            <p style={{ marginBottom: '20px' }}>Instant delivery via email for last-minute gifts</p>
            <button style={{
              padding: '8px 15px',
              backgroundColor: '#2c3e50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}>Buy Now</button>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section style={{ padding: '40px 20px', backgroundColor: 'white' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Upcoming Events</h2>
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
              backgroundColor: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <h3 style={{ margin: '0 0 10px', color: '#e74c3c' }}>{event.title}</h3>
              <p style={{ margin: '0 0 5px' }}>{event.date}</p>
              <p style={{ margin: '0 0 15px' }}>{event.time}</p>
              <button style={{
                padding: '8px 15px',
                backgroundColor: '#2c3e50',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>RSVP</button>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Reviews */}
      <section style={{ padding: '40px 20px', backgroundColor: '#f8f9fa', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px', fontSize: '32px' }}>What Our Customers Say</h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {[
            { id: 1, name: "Sarah J.", review: "Best selection of books in town! The staff recommendations are always spot on.", rating: 5 },
            { id: 2, name: "Michael T.", review: "I love the cozy atmosphere and the frequent author events. My favorite place to spend a Saturday.", rating: 4 },
            { id: 3, name: "Emma R.", review: "Found so many unique books here that I couldn't find anywhere else. Highly recommend!", rating: 5 }
          ].map(review => (
            <div key={review.id} style={{
              backgroundColor: 'white',
              padding: '25px',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                {[...Array(5)].map((_, i) => (
                  <span key={i} style={{ color: i < review.rating ? '#f39c12' : '#ddd', fontSize: '24px' }}>★</span>
                ))}
              </div>
              <p style={{ fontStyle: 'italic', marginBottom: '15px' }}>"{review.review}"</p>
              <p style={{ fontWeight: 'bold' }}>- {review.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        backgroundColor: '#2c3e50',
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
            <p>Your local independent bookstore since 1995.</p>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Quick Links</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '10px' }}><Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/faq" style={{ color: 'white', textDecoration: 'none' }}>FAQ</Link></li>
              <li style={{ marginBottom: '10px' }}><Link to="/privacy" style={{ color: 'white', textDecoration: 'none' }}>Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Newsletter</h3>
            <p>Subscribe for updates and special offers</p>
            <div style={{ display: 'flex', marginTop: '15px' }}>
              <input 
                type="email" 
                placeholder="Your email" 
                style={{ 
                  padding: '10px',
                  border: 'none',
                  borderRadius: '5px 0 0 5px',
                  flex: 1
                }} 
              />
              <button style={{
                padding: '10px 15px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '0 5px 5px 0',
                cursor: 'pointer'
              }}>Subscribe</button>
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '20px', marginBottom: '20px' }}>Follow Us</h3>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📘</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📸</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>🐦</a>
              <a href="#" style={{ color: 'white', fontSize: '24px' }}>📌</a>
            </div>
          </div>
        </div>
        <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
          <p>© 2023 Thamili Book Haven. All rights reserved.</p>
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
        boxShadow: '0 4px 8px rgba(0,0,0,0.3)'
      }}>
        💬
      </div>

      {/* Accessibility Options */}
      <div style={{
        position: 'fixed',
        bottom: '30px',
        left: '30px',
        backgroundColor: '#2c3e50',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
        display: 'flex',
        gap: '10px'
      }}>
        <button style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>A+</button>
        <button style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>A-</button>
        <button style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>☀️</button>
        <button style={{
          padding: '5px 10px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>🌙</button>
        <select style={{
          padding: '5px',
          backgroundColor: '#34495e',
          color: 'white',
          border: 'none',
          borderRadius: '3px',
          cursor: 'pointer'
        }}>
          <option>English</option>
          <option>Español</option>
          <option>Français</option>
        </select>
      </div>
    </div>
  );
};

export default Home;