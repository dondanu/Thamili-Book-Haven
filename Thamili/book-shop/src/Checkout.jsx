import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cart';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Shipping Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'Sri Lanka',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing
    sameAsShipping: true,
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZipCode: ''
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      // Process order
      alert('Order placed successfully! Thank you for your purchase.');
      clearCart();
      window.location.href = '/';
    }
  };

  const themeStyles = {
    backgroundColor: darkMode ? '#1a1a1a' : 'white',
    color: darkMode ? '#f0f0f0' : '#333',
    minHeight: '100vh'
  };

  const renderStepIndicator = () => (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginBottom: '40px',
      padding: '20px 0'
    }}>
      {[1, 2, 3].map(step => (
        <div key={step} style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: step <= currentStep ? '#667eea' : '#ddd',
            color: step <= currentStep ? 'white' : '#666',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            marginRight: '10px'
          }}>
            {step}
          </div>
          <span style={{ 
            marginRight: '20px',
            color: step <= currentStep ? '#667eea' : '#666',
            fontWeight: step === currentStep ? 'bold' : 'normal'
          }}>
            {step === 1 ? 'Shipping' : step === 2 ? 'Payment' : 'Review'}
          </span>
          {step < 3 && <div style={{ width: '50px', height: '2px', background: '#ddd', marginRight: '20px' }}></div>}
        </div>
      ))}
    </div>
  );

  const renderShippingForm = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Shipping Information</h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Email *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Phone *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            rows="3"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px',
              resize: 'vertical'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>City *</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>State *</label>
          <input
            type="text"
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>ZIP Code *</label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Country *</label>
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          >
            <option value="Sri Lanka">Sri Lanka</option>
            <option value="India">India</option>
            <option value="Malaysia">Malaysia</option>
            <option value="Singapore">Singapore</option>
          </select>
        </div>
      </div>
    </div>
  );

  const renderPaymentForm = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Payment Information</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Card Number *</label>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleInputChange}
            placeholder="1234 5678 9012 3456"
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Expiry Date *</label>
            <input
              type="text"
              name="expiryDate"
              value={formData.expiryDate}
              onChange={handleInputChange}
              placeholder="MM/YY"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #ddd',
                fontSize: '16px'
              }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>CVV *</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleInputChange}
              placeholder="123"
              required
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '8px',
                border: '2px solid #ddd',
                fontSize: '16px'
              }}
            />
          </div>
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>Cardholder Name *</label>
          <input
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '8px',
              border: '2px solid #ddd',
              fontSize: '16px'
            }}
          />
        </div>
      </div>
    </div>
  );

  const renderReviewOrder = () => (
    <div>
      <h2 style={{ fontSize: '1.8rem', marginBottom: '30px' }}>Review Your Order</h2>
      
      {/* Order Summary */}
      <div style={{
        background: darkMode ? '#2d2d2d' : '#f8f9fa',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginBottom: '20px' }}>Order Summary</h3>
        {cartItems.map(item => (
          <div key={item.id} style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '10px 0',
            borderBottom: `1px solid ${darkMode ? '#444' : '#ddd'}`
          }}>
            <div>
              <span style={{ fontWeight: 'bold' }}>{item.title}</span>
              <span style={{ color: darkMode ? '#b0b0b0' : '#666', marginLeft: '10px' }}>
                x{item.quantity}
              </span>
            </div>
            <span style={{ fontWeight: 'bold' }}>
              ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '15px 0',
          borderTop: `2px solid ${darkMode ? '#444' : '#ddd'}`,
          marginTop: '15px'
        }}>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total:</span>
          <span style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e74c3c' }}>
            ${getTotalPrice().toFixed(2)}
          </span>
        </div>
      </div>

      {/* Shipping Address */}
      <div style={{
        background: darkMode ? '#2d2d2d' : '#f8f9fa',
        borderRadius: '15px',
        padding: '25px',
        marginBottom: '30px'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Shipping Address</h3>
        <p>{formData.firstName} {formData.lastName}</p>
        <p>{formData.address}</p>
        <p>{formData.city}, {formData.state} {formData.zipCode}</p>
        <p>{formData.country}</p>
        <p>Phone: {formData.phone}</p>
        <p>Email: {formData.email}</p>
      </div>

      {/* Payment Method */}
      <div style={{
        background: darkMode ? '#2d2d2d' : '#f8f9fa',
        borderRadius: '15px',
        padding: '25px'
      }}>
        <h3 style={{ marginBottom: '15px' }}>Payment Method</h3>
        <p>Card ending in: ****{formData.cardNumber.slice(-4)}</p>
        <p>Expires: {formData.expiryDate}</p>
        <p>Cardholder: {formData.cardName}</p>
      </div>
    </div>
  );

  if (cartItems.length === 0) {
    return (
      <div style={themeStyles}>
        <div style={{ 
          textAlign: 'center', 
          padding: '100px 20px',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🛒</div>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Your cart is empty</h2>
          <p style={{ marginBottom: '30px', color: darkMode ? '#b0b0b0' : '#666' }}>
            Add some books to your cart before checking out.
          </p>
          <Link to="/" style={{
            display: 'inline-block',
            padding: '15px 30px',
            background: 'linear-gradient(45deg, #667eea, #764ba2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            fontSize: '1.1rem'
          }}>
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

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
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/cart" style={{ color: 'white', textDecoration: 'none', marginLeft: '15px' }}>
            <span style={{ fontSize: '20px' }}>🛒</span>
          </Link>
        </div>
      </header>

      <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
        {renderStepIndicator()}
        
        <form onSubmit={handleSubmit}>
          {currentStep === 1 && renderShippingForm()}
          {currentStep === 2 && renderPaymentForm()}
          {currentStep === 3 && renderReviewOrder()}
          
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            marginTop: '40px' 
          }}>
            {currentStep > 1 && (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                style={{
                  padding: '15px 30px',
                  background: 'transparent',
                  color: '#667eea',
                  border: '2px solid #667eea',
                  borderRadius: '25px',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#667eea';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#667eea';
                }}
              >
                Previous
              </button>
            )}
            
            <button
              type="submit"
              style={{
                padding: '15px 30px',
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                color: 'white',
                border: 'none',
                borderRadius: '25px',
                fontSize: '1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginLeft: currentStep === 1 ? 'auto' : '0',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {currentStep === 3 ? 'Place Order' : 'Continue'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
