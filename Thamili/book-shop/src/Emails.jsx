import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Emails = () => {
	const [emails, setEmails] = useState([]);

	useEffect(() => {
		try {
			const raw = localStorage.getItem('emails');
			setEmails(raw ? JSON.parse(raw) : []);
		} catch {
			setEmails([]);
		}
	}, []);

	return (
		<div style={{ maxWidth: 900, margin: '0 auto', padding: 24 }}>
			<h2 style={{ marginTop: 0 }}>Emails</h2>
			<p style={{ color: '#666' }}>These are simulated emails recorded in localStorage.</p>
			{emails.length === 0 ? (
				<div style={{ padding: 24, border: '1px dashed #ccc', borderRadius: 8, textAlign: 'center' }}>No emails yet.</div>
			) : (
				<div style={{ display: 'grid', gap: 12 }}>
					{emails.slice().reverse().map((m) => (
						<div key={m.id} style={{ border: '1px solid #eee', borderRadius: 8, padding: 16, background: 'white' }}>
							<div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
								<strong>{m.subject}</strong>
								<span style={{ color: '#888', fontSize: 12 }}>{new Date(m.date).toLocaleString()}</span>
							</div>
							<div style={{ color: '#444', marginTop: 6 }}>To: {m.to}</div>
							<p style={{ marginTop: 8, whiteSpace: 'pre-wrap' }}>{m.body}</p>
						</div>
					))}
				</div>
			)}
			<div style={{ marginTop: 16 }}>
				<Link to="/">Back to Home</Link>
			</div>
		</div>
	);
};

export default Emails;
