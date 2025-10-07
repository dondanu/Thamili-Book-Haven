import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useBooks } from './BooksStore';

const emptyForm = { id: null, title: '', author: '', price: '', category: '', image: '', stock: 0 };

const Admin = () => {
	const { books, addBook, updateBook, deleteBook } = useBooks();
	const [query, setQuery] = useState('');
	const [editing, setEditing] = useState(null);
	const [form, setForm] = useState(emptyForm);
	const [error, setError] = useState('');

	const filtered = useMemo(() => {
		const q = query.toLowerCase();
		return books.filter(b => [b.title, b.author, b.category].join(' ').toLowerCase().includes(q));
	}, [books, query]);

	const submit = () => {
		setError('');
		if (!form.title.trim()) return setError('Title is required');
		if (!form.author.trim()) return setError('Author is required');
		const priceNum = Number(String(form.price).replace(/[^0-9.]/g, ''));
		if (Number.isNaN(priceNum) || priceNum < 0) return setError('Price must be a positive number');
		const payload = { ...form, price: `$${priceNum.toFixed(2)}` };
		if (editing) {
			updateBook(payload);
		} else {
			addBook(payload);
		}
		setForm(emptyForm);
		setEditing(null);
	};

	const startEdit = (b) => { setEditing(b.id); setForm(b); };
	const cancelEdit = () => { setEditing(null); setForm(emptyForm); setError(''); };

	return (
		<div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
			<header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20, background: '#2c3e50', color: 'white' }}>
				<h1 style={{ margin: 0, fontSize: 22 }}>Admin - Products</h1>
				<nav style={{ display: 'flex', gap: 12 }}>
					<Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
				</nav>
			</header>

			<div style={{ maxWidth: 1100, margin: '0 auto', padding: 20 }}>
				<div style={{ display: 'flex', gap: 10, marginBottom: 16 }}>
					<input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search products..." style={{ flex: 1, padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
				</div>

				<div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
					<div style={{ background: 'white', border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
						<h3 style={{ marginTop: 0 }}>{editing ? 'Edit Book' : 'Add Book'}</h3>
						{error && <div style={{ color: '#e74c3c', marginBottom: 10 }}>{error}</div>}
						<div style={{ display: 'grid', gap: 10 }}>
							<input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} placeholder="Title" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })} placeholder="Author" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price (e.g. 12.99)" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} placeholder="Category" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<input value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="Image URL (optional)" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: Number(e.target.value) })} placeholder="Stock" style={{ padding: 10, borderRadius: 8, border: '1px solid #ddd' }} />
							<div style={{ display: 'flex', gap: 10 }}>
								<button onClick={submit} style={{ padding: '10px 14px', borderRadius: 8, border: 'none', background: '#2c3e50', color: 'white', fontWeight: 'bold', cursor: 'pointer' }}>{editing ? 'Update' : 'Add'}</button>
								{editing && <button onClick={cancelEdit} style={{ padding: '10px 14px', borderRadius: 8, border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>Cancel</button>}
							</div>
						</div>
					</div>

					<div style={{ background: 'white', border: '1px solid #eee', borderRadius: 12, padding: 16 }}>
						<h3 style={{ marginTop: 0 }}>Books</h3>
						<div style={{ display: 'grid', gap: 10 }}>
							{filtered.length === 0 && <div style={{ color: '#666' }}>No books</div>}
							{filtered.map((b) => (
								<div key={b.id} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 10, alignItems: 'center', borderBottom: '1px solid #eee', paddingBottom: 10 }}>
									<div>
										<div style={{ fontWeight: 'bold' }}>{b.title}</div>
										<div style={{ color: '#666', fontSize: 13 }}>{b.author} • {b.category} • {b.price}</div>
									</div>
									<button onClick={() => startEdit(b)} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', background: 'white', cursor: 'pointer' }}>Edit</button>
									<button onClick={() => deleteBook(b.id)} style={{ padding: '6px 10px', borderRadius: 8, border: '1px solid #e74c3c', color: '#e74c3c', background: 'white', cursor: 'pointer' }}>Delete</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
