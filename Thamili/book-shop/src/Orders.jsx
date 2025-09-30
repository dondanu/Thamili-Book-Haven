import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Orders = () => {
	const [darkMode, setDarkMode] = useState(false);
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		try {
			const raw = localStorage.getItem('orderHistory');
			setOrders(raw ? JSON.parse(raw) : []);
		} catch {
			setOrders([]);
		}
	}, []);

	const themeStyles = {
		backgroundColor: darkMode ? '#1a1a1a' : 'white',
		color: darkMode ? '#f0f0f0' : '#333',
		minHeight: '100vh'
	};

	return (
		<div style={themeStyles}>
			<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px', backgroundColor: darkMode ? '#121212' : '#2c3e50', color: 'white' }}>
				<h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>Order History</h1>
				<nav style={{ display: 'flex', gap: '12px' }}>
					<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
					<Link to="/cart" style={{ color: 'white', textDecoration: 'none' }}>Cart</Link>
				</nav>
			</header>

			<div style={{ maxWidth: '1100px', margin: '0 auto', padding: '30px 20px' }}>
				{orders.length === 0 ? (
					<div style={{ textAlign: 'center', padding: '60px', border: `2px dashed ${darkMode ? '#444' : '#ddd'}`, borderRadius: '12px' }}>
						<p>No orders yet.</p>
						<Link to="/" style={{ display: 'inline-block', marginTop: '10px', padding: '10px 18px', background: '#e74c3c', color: 'white', borderRadius: '20px', textDecoration: 'none' }}>Start Shopping</Link>
					</div>
				) : (
					<div style={{ display: 'grid', gap: '16px' }}>
						{orders.map(order => (
							<div key={order.id} style={{ background: darkMode ? '#2d2d2d' : 'white', border: `2px solid ${darkMode ? '#444' : '#f0f0f0'}`, borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.08)' }}>
								<div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${darkMode ? '#444' : '#eee'}` }}>
									<div>
										<h3 style={{ margin: 0 }}>Order #{order.id}</h3>
										<p style={{ margin: '6px 0 0', color: darkMode ? '#b0b0b0' : '#666' }}>{new Date(order.date).toLocaleString()}</p>
									</div>
									<div style={{ textAlign: 'right' }}>
										<p style={{ margin: 0, fontWeight: 'bold', color: '#e74c3c' }}>${order.total.toFixed(2)}</p>
										<span style={{ padding: '4px 12px', borderRadius: '14px', background: '#f39c12', color: 'white', fontSize: '12px', fontWeight: 'bold' }}>{order.status}</span>
									</div>
								</div>
								<div style={{ padding: '16px 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
									<div>
										<h4 style={{ margin: '0 0 8px' }}>Items</h4>
										{order.items.map((item, idx) => (
											<div key={idx} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${darkMode ? '#444' : '#eee'}`, padding: '6px 0' }}>
												<span>{item.title} x{item.quantity}</span>
												<span>${(parseFloat(item.price.replace('$','')) * item.quantity).toFixed(2)}</span>
											</div>
										))}
									</div>
									<div>
										<h4 style={{ margin: '0 0 8px' }}>Shipping</h4>
										<p style={{ margin: 0 }}>{order.shipping.firstName} {order.shipping.lastName}</p>
										<p style={{ margin: 0 }}>{order.shipping.address}</p>
										<p style={{ margin: 0 }}>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
										<p style={{ margin: 0 }}>{order.shipping.country}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Orders;
