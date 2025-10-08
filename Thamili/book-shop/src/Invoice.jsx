import React, { useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Invoice = () => {
	const { orderId } = useParams();
	const [order, setOrder] = useState(null);

	useEffect(() => {
		try {
			const raw = localStorage.getItem('orderHistory');
			const list = raw ? JSON.parse(raw) : [];
			setOrder(list.find(o => String(o.id) === String(orderId)) || null);
		} catch {
			setOrder(null);
		}
	}, [orderId]);

	const totals = useMemo(() => {
		if (!order) return { subtotal: 0, discount: 0, total: 0 };
		return {
			subtotal: Number(order.subtotal ?? order.total) || 0,
			discount: Number(order.discount ?? 0) || 0,
			total: Number(order.total ?? 0) || 0
		};
	}, [order]);

	if (!order) {
		return (
			<div style={{ padding: 24 }}>
				<h2>Invoice</h2>
				<p>Order not found.</p>
				<Link to="/orders">Back to Orders</Link>
			</div>
		);
	}

	return (
		<div style={{ maxWidth: 800, margin: '0 auto', padding: 24, background: 'white' }}>
			<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<h2 style={{ margin: 0 }}>Invoice #{order.id}</h2>
				<button onClick={() => window.print()} style={{ padding: '8px 12px', borderRadius: 6, border: '1px solid #ddd', background: '#f9fafb', cursor: 'pointer' }}>Print</button>
			</div>
			<p style={{ color: '#666' }}>{new Date(order.date).toLocaleString()}</p>

			<hr />
			<h3>Bill To</h3>
			<p style={{ margin: 0 }}>{order.shipping.firstName} {order.shipping.lastName}</p>
			<p style={{ margin: 0 }}>{order.shipping.address}</p>
			<p style={{ margin: 0 }}>{order.shipping.city}, {order.shipping.state} {order.shipping.zipCode}</p>
			<p style={{ margin: 0 }}>{order.shipping.country}</p>

			{order.gift?.isGift && (
				<div style={{ marginTop: 10, padding: 12, borderRadius: 8, background: '#f6f7f9', border: '1px solid #e3e7eb' }}>
					<strong>Gift:</strong> {order.gift.recipientName || '-'} {order.gift.recipientEmail ? `(${order.gift.recipientEmail})` : ''}
					{order.gift.message && <div>Message: {order.gift.message}</div>}
					{order.gift.deliveryDate && <div>Scheduled: {order.gift.deliveryDate}</div>}
				</div>
			)}

			<h3 style={{ marginTop: 20 }}>Items</h3>
			<table style={{ width: '100%', borderCollapse: 'collapse' }}>
				<thead>
					<tr>
						<th style={{ textAlign: 'left', borderBottom: '1px solid #eee', padding: '8px 0' }}>Item</th>
						<th style={{ textAlign: 'right', borderBottom: '1px solid #eee', padding: '8px 0' }}>Qty</th>
						<th style={{ textAlign: 'right', borderBottom: '1px solid #eee', padding: '8px 0' }}>Price</th>
					</tr>
				</thead>
				<tbody>
					{order.items.map((it, idx) => (
						<tr key={idx}>
							<td style={{ padding: '8px 0' }}>{it.title}</td>
							<td style={{ padding: '8px 0', textAlign: 'right' }}>{it.quantity}</td>
							<td style={{ padding: '8px 0', textAlign: 'right' }}>${(parseFloat(it.price.replace('$','')) * it.quantity).toFixed(2)}</td>
						</tr>
					))}
				</tbody>
			</table>

			<div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 24 }}>
				<div>
					<div>Subtotal:</div>
					<div>Discount:</div>
					<div style={{ fontWeight: 'bold' }}>Total:</div>
				</div>
				<div style={{ textAlign: 'right' }}>
					<div>${totals.subtotal.toFixed(2)}</div>
					<div>-${totals.discount.toFixed(2)} {order.coupon ? `(${order.coupon})` : ''}</div>
					<div style={{ fontWeight: 'bold' }}>${totals.total.toFixed(2)}</div>
				</div>
			</div>

			<div style={{ marginTop: 24 }}>
				<Link to="/orders">Back to Orders</Link>
			</div>
		</div>
	);
};

export default Invoice;
