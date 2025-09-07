import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+94 77 123 4567',
    address: '123 Main Street, Colombo 03',
    city: 'Colombo',
    state: 'Western Province',
    zipCode: '00300',
    country: 'Sri Lanka',
    dateOfBirth: '1990-01-15',
    favoriteGenres: ['Fiction', 'Mystery', 'Biography']
  });

  const [orderHistory] = useState([
    {
      id: 'ORD-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: '$45.97',
      items: [
        { title: 'ANILAADUM MUNDRIL', author: 'Na Muthukumar', quantity: 1, price: '$16.99' },
        { title: 'MGR oru Sakaptham', author: 'Barathirja', quantity: 1, price: '$15.99' },
        { title: 'Marakkave Ninaikiren', author: 'Maari Selvaraj', quantity: 1, price: '$12.99' }
      ]
    },
    {
      id: 'ORD-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: '$28.98',
      items: [
        { title: '7g Rainbow Colony', author: 'Selvaragavan', quantity: 2, price: '$14.99' }
      ]
    }
  ]);

  const [wishlist] = useState([
    { id: 1, title: 'Kathirungal Kathalippom', author: 'Madurai Iramakirusnan', price: '$14.99', image: '/assets/book-placeholder11.png' },
    { id: 2, title: 'ANANDA YAZH', author: 'Na Muthukumar', price: '$18.99', image: '/assets/book-placeholder12.png' }
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSaveProfile = () => {
    alert('Profile updated successfully!');
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#1a1a1a' : 'white',
    color: darkMode ? '#f0f0f0' : '#333',
    minHeight: '100vh'
  };

  const renderProfileTab = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Personal Information</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email *</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address *</label>
          <textarea
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            rows="3"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              resize: 'vertical',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City *</label>
          <input
            type="text"
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>State *</label>
          <input
            type="text"
            name="state"
            value={userData.state}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ZIP Code *</label>
          <input
            type="text"
            name="zipCode"
            value={userData.zipCode}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Country *</label>
          <select
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          >
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Date of Birth</label>
          <input
            type="date"
            name="dateOfBirth"
            value={userData.dateOfBirth}
            onChange={handleInputChange}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              backgroundColor: darkMode ? '#2d2d2d' : 'white',
              color: darkMode ? '#f0f0f0' : '#333'
            }}
          />
        </div>
      </div>
      <button
        onClick={handleSaveProfile}
        style={{
          marginTop: '30px',
          padding: '15px 30px',
          background: 'linear-gradient(45deg, #667eea, #764ba2)',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          fontSize: '1rem',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.3s ease'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        Save Changes
      </button>
    </div>
  );

  const renderOrderHistory = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Order History</h2>
      {orderHistory.map(order => (
        <div key={order.id} style={{
          background: darkMode ? '#2d2d2d' : 'white',
          borderRadius: '15px',
          padding: '25px',
          marginBottom: '20px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <div>
              <h3 style={{ margin: '0 0 5px 0', fontSize: '1.2rem' }}>Order #{order.id}</h3>
              <p style={{ margin: 0, color: darkMode ? '#b0b0b0' : '#666' }}>Placed on {order.date}</p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: '0 0 5px 0', fontSize: '1.1rem', fontWeight: 'bold' }}>{order.total}</p>
              <span style={{
                padding: '5px 15px',
                borderRadius: '20px',
                fontSize: '12px',
                fontWeight: 'bold',
                backgroundColor: order.status === 'Delivered' ? '#2ed573' : '#f39c12',
                color: 'white'
              }}>
                {order.status}
              </span>
            </div>
          </div>
          <div>
            <h4 style={{ margin: '0 0 15px 0' }}>Items:</h4>
            {order.items.map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center',
                padding: '10px 0',
                borderBottom: `1px solid ${darkMode ? '#444' : '#ddd'}`
              }}>
                <div>
                  <span style={{ fontWeight: 'bold' }}>{item.title}</span>
                  <span style={{ color: darkMode ? '#b0b0b0' : '#666', marginLeft: '10px' }}>
                    by {item.author}
                  </span>
                  <span style={{ color: darkMode ? '#b0b0b0' : '#666', marginLeft: '10px' }}>
                    x{item.quantity}
                  </span>
                </div>
                <span style={{ fontWeight: 'bold' }}>{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  const renderWishlist = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>My Wishlist</h2>
      {wishlist.length === 0 ? (
        <div style={{ 
          textAlign: 'center', 
          padding: '60px 20px',
          background: darkMode ? '#2d2d2d' : '#f8f9fa',
          borderRadius: '15px',
          border: `2px dashed ${darkMode ? '#555' : '#ddd'}`
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>♥</div>
          <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Your wishlist is empty</h3>
          <p style={{ color: darkMode ? '#b0b0b0' : '#666', marginBottom: '30px' }}>
            Add books to your wishlist to save them for later!
          </p>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '12px 30px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            transition: 'transform 0.3s ease'
          }}>
            Browse Books
          </Link>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '30px' }}>
          {wishlist.map(book => (
            <div key={book.id} style={{
              background: darkMode ? '#2d2d2d' : 'white',
              borderRadius: '15px',
              padding: '20px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`,
              textAlign: 'center'
            }}>
              <img 
                src={book.image} 
                alt={book.title}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '10px',
                  marginBottom: '15px'
                }}
              />
              <h3 style={{ 
                fontSize: '1.1rem', 
                marginBottom: '10px',
                color: darkMode ? '#f0f0f0' : '#333'
              }}>
                {book.title}
              </h3>
              <p style={{ 
                color: darkMode ? '#b0b0b0' : '#666',
                marginBottom: '15px',
                fontSize: '0.9rem'
              }}>
                by {book.author}
              </p>
              <p style={{ 
                fontSize: '1.1rem', 
                fontWeight: 'bold', 
                color: '#e74c3c',
                marginBottom: '15px'
              }}>
                {book.price}
              </p>
              <button style={{
                width: '100%',
                padding: '10px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '20px',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 'bold'
              }}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );

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

      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '40px' }}>
          {/* Sidebar */}
          <div>
            <div style={{
              background: darkMode ? '#2d2d2d' : 'white',
              borderRadius: '15px',
              padding: '25px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`,
              position: 'sticky',
              top: '100px'
            }}>
              <h3 style={{ marginBottom: '20px', fontSize: '1.2rem' }}>My Account</h3>
              <nav>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  <li style={{ marginBottom: '10px' }}>
                    <button
                      onClick={() => setActiveTab('profile')}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        background: activeTab === 'profile' ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent',
                        color: activeTab === 'profile' ? 'white' : (darkMode ? '#f0f0f0' : '#333'),
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      👤 Profile
                    </button>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <button
                      onClick={() => setActiveTab('orders')}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        background: activeTab === 'orders' ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent',
                        color: activeTab === 'orders' ? 'white' : (darkMode ? '#f0f0f0' : '#333'),
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      📦 Orders
                    </button>
                  </li>
                  <li style={{ marginBottom: '10px' }}>
                    <button
                      onClick={() => setActiveTab('wishlist')}
                      style={{
                        width: '100%',
                        padding: '12px 15px',
                        background: activeTab === 'wishlist' ? 'linear-gradient(45deg, #667eea, #764ba2)' : 'transparent',
                        color: activeTab === 'wishlist' ? 'white' : (darkMode ? '#f0f0f0' : '#333'),
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        textAlign: 'left',
                        fontSize: '1rem',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      ♥ Wishlist
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {activeTab === 'profile' && renderProfileTab()}
            {activeTab === 'orders' && renderOrderHistory()}
            {activeTab === 'wishlist' && renderWishlist()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
