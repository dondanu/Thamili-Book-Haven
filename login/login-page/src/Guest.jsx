import React from 'react';
import { Link } from 'react-router-dom';

const Guest = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        background: 'linear-gradient(to right, rgb(122, 255, 95), #feb47b)', 
        textAlign: 'center',
        paddingRight: "420px",  // Adjust padding for a better layout
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          width: '300px', 
          backgroundColor: '#fff',
          borderRadius: '10px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
          padding: '50px 50px', 
          marginLeft: '500px',
          alignItems: "center",
        }}
      >
        <h2 style={{ color: 'green' }}>Welcome to Thamili BookShop</h2>
        <p style={{ color: '#333', marginBottom: '20px' }}>
          Please login or register to access more features.
        </p>
        <Link to="/form2">
          <button
            style={{
              padding: '12px',
              width: '100%',
              backgroundColor: '#ff7e5f', 
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
          >
            Explore More
          </button>
        </Link>
        <br />
        <Link to="/">
          <button
            style={{
              padding: '12px',
              width: '100%',
              backgroundColor: 'orange', 
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              fontSize: '16px',
              cursor: 'pointer',
              marginTop: "20px",
              transition: 'background-color 0.3s ease',
            }}
          >
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Guest;
