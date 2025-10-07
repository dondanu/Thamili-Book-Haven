import React, { createContext, useContext, useEffect, useState } from 'react';

const BooksContext = createContext(null);

export const useBooks = () => {
	const ctx = useContext(BooksContext);
	if (!ctx) throw new Error('useBooks must be used within BooksProvider');
	return ctx;
};

export const BooksProvider = ({ children }) => {
	const [books, setBooks] = useState(() => {
		try {
			const raw = localStorage.getItem('books');
			return raw ? JSON.parse(raw) : [];
		} catch {
			return [];
		}
	});

	useEffect(() => {
		try { localStorage.setItem('books', JSON.stringify(books)); } catch {}
	}, [books]);

	const addBook = (book) => {
		const id = book.id || Date.now();
		setBooks(prev => [{ ...book, id }, ...prev]);
	};
	const updateBook = (book) => {
		setBooks(prev => prev.map(b => b.id === book.id ? { ...b, ...book } : b));
	};
	const deleteBook = (id) => {
		setBooks(prev => prev.filter(b => b.id !== id));
	};

	return (
		<BooksContext.Provider value={{ books, addBook, updateBook, deleteBook }}>
			{children}
		</BooksContext.Provider>
	);
};
