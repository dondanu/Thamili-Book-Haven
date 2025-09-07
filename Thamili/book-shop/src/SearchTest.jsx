import React from 'react';
import { Link } from 'react-router-dom';

const SearchTest = () => {
  return (
    <div style={{ 
      padding: '20px', 
      textAlign: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      minHeight: '100vh'
    }}>
      <h1>Search Test Page</h1>
      <p>This page tests if the search functionality is working.</p>
      
      <div style={{ margin: '20px 0' }}>
        <h3>Test Links:</h3>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link 
            to="/search?q=MGR" 
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: 'bold'
            }}
          >
            Search "MGR"
          </Link>
          <Link 
            to="/search?q=Na Muthukumar" 
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: 'bold'
            }}
          >
            Search "Na Muthukumar"
          </Link>
          <Link 
            to="/search?q=Fiction" 
            style={{
              padding: '10px 20px',
              background: 'white',
              color: '#667eea',
              textDecoration: 'none',
              borderRadius: '25px',
              fontWeight: 'bold'
            }}
          >
            Search "Fiction"
          </Link>
        </div>
      </div>
      
      <div style={{ margin: '20px 0' }}>
        <Link 
          to="/" 
          style={{
            padding: '10px 20px',
            background: 'rgba(255,255,255,0.2)',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '25px',
            fontWeight: 'bold',
            border: '2px solid white'
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SearchTest;
