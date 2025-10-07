import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f9fa', padding: '40px' }}>
			<div style={{ textAlign: 'center', background: 'white', padding: '40px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.1)' }}>
				<h1 style={{ margin: 0, fontSize: '72px', color: '#e74c3c' }}>404</h1>
				<h2 style={{ margin: '10px 0 20px', fontSize: '24px' }}>Page Not Found</h2>
				<p style={{ marginBottom: '20px', color: '#666' }}>The page you are looking for doesn’t exist.</p>
				<Link to="/" style={{ display: 'inline-block', padding: '10px 18px', background: '#2c3e50', color: 'white', textDecoration: 'none', borderRadius: '20px' }}>Go Home</Link>
			</div>
		</div>
	);
};

export default NotFound;
