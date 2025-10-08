import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './Cart';

const Checkout = () => {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [darkMode, setDarkMode] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
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
  const [giftOptions, setGiftOptions] = useState({ isGift: false, recipientName: '', recipientEmail: '', message: '', deliveryDate: '' });

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
      // Process order and persist order history
      try {
        const subtotal = getTotalPrice();
        const discountAmount = appliedCoupon ? appliedCoupon.type === 'percent' ? Number((subtotal * appliedCoupon.value).toFixed(2)) : appliedCoupon.value : 0;
        const finalTotal = Math.max(0, Number((subtotal - discountAmount).toFixed(2)));

        const order = {
          id: `ORD-${Date.now()}`,
          date: new Date().toISOString(),
          items: cartItems.map(i => ({ id: i.id, title: i.title, author: i.author, quantity: i.quantity, price: i.price })),
          subtotal,
          discount: discountAmount,
          total: finalTotal,
          coupon: appliedCoupon ? appliedCoupon.code : null,
          gift: giftOptions.isGift ? { ...giftOptions } : null,
          shipping: {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
            country: formData.country
          },
          payment: {
            cardLast4: formData.cardNumber ? String(formData.cardNumber).slice(-4) : '****',
            cardName: formData.cardName
          },
          status: 'Processing'
        };
        const raw = localStorage.getItem('orderHistory');
        const history = raw ? JSON.parse(raw) : [];
        history.unshift(order);
        localStorage.setItem('orderHistory', JSON.stringify(history));
      } catch {}

      // Simulated email notifications
      try {
        const emails = JSON.parse(localStorage.getItem('emails') || '[]');
        emails.push({
          id: `MAIL-${Date.now()}`,
          to: formData.email,
          subject: `Order Confirmation - ${order.id}`,
          body: `Thank you for your purchase! Your order ${order.id} totals $${finalTotal.toFixed(2)}.`,
          date: new Date().toISOString()
        });
        if (order.gift?.isGift && order.gift.recipientEmail) {
          emails.push({
            id: `MAIL-${Date.now()}-GIFT`,
            to: order.gift.recipientEmail,
            subject: `A gift for you from ${formData.firstName}`,
            body: `${order.gift.message || 'You received a gift!'} Scheduled: ${order.gift.deliveryDate || 'Immediate'}`,
            date: new Date().toISOString()
          });
        }
        localStorage.setItem('emails', JSON.stringify(emails));
      } catch {}

      alert('Order placed successfully! Thank you for your purchase.');
      clearCart();
      window.location.href = '/orders';
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
        <div style={{ marginTop: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
          <input
            type="text"
            placeholder="Coupon code"
            value={couponCode}
            onChange={(e) => { setCouponCode(e.target.value); setCouponError(''); }}
            style={{ flex: 1, padding: '10px', borderRadius: '8px', border: `2px solid ${darkMode ? '#444' : '#ddd'}` }}
          />
          <button
            type="button"
            onClick={() => {
              setCouponError('');
              const code = couponCode.trim().toUpperCase();
              if (!code) { setCouponError('Enter a coupon code.'); return; }
              // Demo coupons
              const coupons = {
                SAVE10: { code: 'SAVE10', type: 'percent', value: 0.10, label: '10% off' },
                FLAT5: { code: 'FLAT5', type: 'flat', value: 5.00, label: '$5 off' }
              };
              const c = coupons[code];
              if (!c) { setCouponError('Invalid coupon code.'); return; }
              setAppliedCoupon(c);
            }}
            style={{ padding: '10px 14px', borderRadius: '8px', border: 'none', background: '#667eea', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}
          >
            Apply
          </button>
        </div>
        {couponError && <div style={{ color: '#e74c3c', marginTop: '8px' }}>{couponError}</div>}
        {appliedCoupon && (
          <div style={{ marginTop: '10px', color: '#2ed573' }}>Applied: {appliedCoupon.code} ({appliedCoupon.label})</div>
        )}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '15px 0',
          borderTop: `2px solid ${darkMode ? '#444' : '#ddd'}`,
          marginTop: '15px'
        }}>
          <div style={{ display: 'grid', gap: 6 }}>
            <div>Subtotal: ${getTotalPrice().toFixed(2)}</div>
            <div>Discount: -${(appliedCoupon ? (appliedCoupon.type === 'percent' ? (getTotalPrice()*appliedCoupon.value) : appliedCoupon.value) : 0).toFixed(2)}</div>
            <div style={{ fontWeight: 'bold' }}>Total:</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div>&nbsp;</div>
            <div>&nbsp;</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#e74c3c' }}>
              ${Math.max(0, (getTotalPrice() - (appliedCoupon ? (appliedCoupon.type === 'percent' ? (getTotalPrice()*appliedCoupon.value) : appliedCoupon.value) : 0))).toFixed(2)}
            </div>
          </div>
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

      {/* Gift Options */}
      <div style={{
        background: darkMode ? '#2d2d2d' : '#f8f9fa',
        borderRadius: '15px',
        padding: '25px',
        marginTop: '20px'
      }}>
        <h3 style={{ marginTop: 0, marginBottom: 10 }}>Gift Options</h3>
        <label style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <input type="checkbox" checked={giftOptions.isGift} onChange={(e) => setGiftOptions({ ...giftOptions, isGift: e.target.checked })} />
          This order is a gift
        </label>
        {giftOptions.isGift && (
          <div style={{ display: 'grid', gap: 12 }}>
            <input type="text" placeholder="Recipient name" value={giftOptions.recipientName} onChange={(e) => setGiftOptions({ ...giftOptions, recipientName: e.target.value })} style={{ padding: 10, borderRadius: 8, border: `2px solid ${darkMode ? '#444' : '#ddd'}` }} />
            <input type="email" placeholder="Recipient email (optional)" value={giftOptions.recipientEmail} onChange={(e) => setGiftOptions({ ...giftOptions, recipientEmail: e.target.value })} style={{ padding: 10, borderRadius: 8, border: `2px solid ${darkMode ? '#444' : '#ddd'}` }} />
            <textarea rows={3} placeholder="Personal message (optional)" value={giftOptions.message} onChange={(e) => setGiftOptions({ ...giftOptions, message: e.target.value })} style={{ padding: 10, borderRadius: 8, border: `2px solid ${darkMode ? '#444' : '#ddd'}`, resize: 'vertical' }} />
            <div>
              <label style={{ display: 'block', marginBottom: 6 }}>Schedule delivery (optional)</label>
              <input type="date" value={giftOptions.deliveryDate} onChange={(e) => setGiftOptions({ ...giftOptions, deliveryDate: e.target.value })} style={{ padding: 10, borderRadius: 8, border: `2px solid ${darkMode ? '#444' : '#ddd'}` }} />
            </div>
          </div>
        )}
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
