import React, { useContext, useEffect, useState, createContext } from 'react';
import { Link } from 'react-router-dom';

const WishlistContext = createContext(null);

export const useWishlist = () => {
	const ctx = useContext(WishlistContext);
	if (!ctx) throw new Error('useWishlist must be used within a WishlistProvider');
	return ctx;
};

export const WishlistProvider = ({ children }) => {
	const [wishlistItems, setWishlistItems] = useState(() => {
		try {
			const raw = localStorage.getItem('wishlist');
			return raw ? JSON.parse(raw) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		try {
			localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
		} catch {}
	}, [wishlistItems]);

	const isInWishlist = (bookId) => wishlistItems.some((b) => b.id === bookId);

	// price alerts keyed by id -> target number
	const [priceAlerts, setPriceAlerts] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem('wishlistAlerts') || '{}');
		} catch { return {}; }
	});

	useEffect(() => {
		try { localStorage.setItem('wishlistAlerts', JSON.stringify(priceAlerts)); } catch {}
	}, [priceAlerts]);

	const setAlertPrice = (id, target) => {
		setPriceAlerts((prev) => ({ ...prev, [id]: target }));
	};

	const addToWishlist = (book) => {
		setWishlistItems((prev) => {
			if (prev.some((b) => b.id === book.id)) return prev;
			return [...prev, book];
		});
	};

	const removeFromWishlist = (bookId) => {
		setWishlistItems((prev) => prev.filter((b) => b.id !== bookId));
	};

	const clearWishlist = () => setWishlistItems([]);

	return (
		<WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist, priceAlerts, setAlertPrice }}>
			{children}
		</WishlistContext.Provider>
	);
};

const Wishlist = () => {
	const { wishlistItems, removeFromWishlist, clearWishlist, priceAlerts, setAlertPrice } = useWishlist();
	const [darkMode, setDarkMode] = useState(false);

	const themeStyles = {
		backgroundColor: darkMode ? '#1a1a1a' : 'white',
		color: darkMode ? '#f0f0f0' : '#333',
		minHeight: '100vh'
	};

	return (
		<div style={themeStyles}>
			<header style={{
				display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px',
				backgroundColor: darkMode ? '#121212' : '#2c3e50', color: 'white', position: 'sticky', top: 0, zIndex: 100
			}}>
				<h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Thamili Book Haven</h1>
				<div style={{ display: 'flex', gap: '12px' }}>
					<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
					<Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>🛒 Cart</Link>
				</div>
			</header>

			<div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 20px' }}>
				<h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>My Wishlist</h2>
				{wishlistItems.length === 0 ? (
					<div style={{ textAlign: 'center', padding: '60px', border: `2px dashed ${darkMode ? '#444' : '#ddd'}`, borderRadius: '12px' }}>
						<div style={{ fontSize: '3rem', marginBottom: '10px' }}>♥</div>
						<p>Your wishlist is empty.</p>
						<Link to="/" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 18px', background: '#e74c3c', color: 'white', borderRadius: '20px', textDecoration: 'none' }}>Browse Books</Link>
					</div>
				) : (
					<>
						<div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '20px' }}>
							{wishlistItems.map((book) => (
								<div key={book.id} style={{ background: darkMode ? '#2d2d2d' : 'white', border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`, borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
									<img src={book.image} alt={book.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
									<div style={{ padding: '15px' }}>
										<h3 style={{ margin: '0 0 6px', fontSize: '1.1rem' }}>{book.title}</h3>
										<p style={{ margin: '0 0 10px', color: darkMode ? '#b0b0b0' : '#666' }}>by {book.author}</p>
									<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
											<span style={{ fontWeight: 'bold', color: '#e74c3c' }}>{book.price}</span>
											<button onClick={() => removeFromWishlist(book.id)} style={{ border: 'none', background: 'transparent', color: '#e74c3c', cursor: 'pointer', textDecoration: 'underline' }}>Remove</button>
										</div>
										<div style={{ marginTop: 10, display: 'flex', gap: 8 }}>
											<input
												type="number"
												min="0"
												step="0.01"
												value={priceAlerts[book.id] ?? ''}
												onChange={(e) => setAlertPrice(book.id, e.target.value)}
												placeholder="Target price"
												style={{ padding: 8, borderRadius: 6, border: '1px solid #ddd', width: '50%' }}
											/>
											<small style={{ color: '#666', alignSelf: 'center' }}>Get alert when price drops to this value</small>
										</div>
									</div>
								</div>
							))}
						</div>
						<button onClick={clearWishlist} style={{ marginTop: '20px', padding: '10px 16px', borderRadius: '20px', border: '2px solid #e74c3c', background: 'transparent', color: '#e74c3c', cursor: 'pointer' }}>Clear Wishlist</button>
					</>
				)}
			</div>
		</div>
	);
};

export default Wishlist;
