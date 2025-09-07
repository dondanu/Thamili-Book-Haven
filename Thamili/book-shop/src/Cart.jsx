import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';

// Cart Context
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === book.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      getTotalPrice,
      getTotalItems,
      clearCart
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Cart Page Component
const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty!');
      return;
    }
    // Redirect to checkout page
    window.location.href = '/checkout';
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
          <Link to="/cart" style={{ 
            color: 'white', 
            textDecoration: 'none', 
            marginLeft: '15px',
            position: 'relative'
          }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
            {cartItems.length > 0 && (
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
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </Link>
        </div>
      </header>

      {/* Cart Content */}
      <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ 
          fontSize: '2.5rem', 
          marginBottom: '30px', 
          textAlign: 'center',
          background: darkMode ? 'none' : 'linear-gradient(45deg, #667eea, #764ba2)',
          WebkitBackgroundClip: darkMode ? 'initial' : 'text',
          WebkitTextFillColor: darkMode ? 'inherit' : 'transparent'
        }}>
          Shopping Cart
        </h2>

        {cartItems.length === 0 ? (
          <div style={{ 
            textAlign: 'center', 
            padding: '60px 20px',
            background: darkMode ? '#2d2d2d' : '#f8f9fa',
            borderRadius: '15px',
            border: `2px dashed ${darkMode ? '#555' : '#ddd'}`
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Your cart is empty</h3>
            <p style={{ color: darkMode ? '#b0b0b0' : '#666', marginBottom: '30px' }}>
              Add some books to get started!
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
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '40px' }}>
            {/* Cart Items */}
            <div>
              {cartItems.map(item => (
                <div key={item.id} style={{
                  display: 'flex',
                  background: darkMode ? '#2d2d2d' : 'white',
                  borderRadius: '15px',
                  padding: '20px',
                  marginBottom: '20px',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title}
                    style={{
                      width: '120px',
                      height: '160px',
                      objectFit: 'cover',
                      borderRadius: '10px',
                      marginRight: '20px'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h3 style={{ 
                      fontSize: '1.3rem', 
                      marginBottom: '10px',
                      color: darkMode ? '#f0f0f0' : '#333'
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      color: darkMode ? '#b0b0b0' : '#666',
                      marginBottom: '15px'
                    }}>
                      by {item.author}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center' 
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: 'none',
                            background: '#e74c3c',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '16px'
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
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{
                            width: '30px',
                            height: '30px',
                            borderRadius: '50%',
                            border: 'none',
                            background: '#2ed573',
                            color: 'white',
                            cursor: 'pointer',
                            fontSize: '16px'
                          }}
                        >
                          +
                        </button>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <p style={{ 
                          fontSize: '1.2rem', 
                          fontWeight: 'bold',
                          color: '#e74c3c',
                          margin: '0 0 5px 0'
                        }}>
                          ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                        </p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: '#e74c3c',
                            cursor: 'pointer',
                            fontSize: '14px',
                            textDecoration: 'underline'
                          }}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
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
                <h3 style={{ 
                  fontSize: '1.5rem', 
                  marginBottom: '20px',
                  color: darkMode ? '#f0f0f0' : '#333'
                }}>
                  Order Summary
                </h3>
                
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span>Subtotal:</span>
                    <span>${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}>
                    <span>Shipping:</span>
                    <span>Free</span>
                  </div>
                  <div style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between',
                    marginBottom: '20px',
                    paddingTop: '10px',
                    borderTop: `1px solid ${darkMode ? '#444' : '#ddd'}`
                  }}>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>Total:</span>
                    <span style={{ fontWeight: 'bold', fontSize: '1.1rem', color: '#e74c3c' }}>
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  style={{
                    width: '100%',
                    padding: '15px',
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    marginBottom: '15px',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Proceed to Checkout
                </button>

                <button 
                  onClick={clearCart}
                  style={{
                    width: '100%',
                    padding: '10px',
                    background: 'transparent',
                    color: '#e74c3c',
                    border: '2px solid #e74c3c',
                    borderRadius: '25px',
                    fontSize: '1rem',
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
                  Clear Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
