import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);

export const useAuth = () => {
	const ctx = useContext(AuthContext);
	if (!ctx) throw new Error('useAuth must be used within AuthProvider');
	return ctx;
};

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(() => {
		try { return JSON.parse(localStorage.getItem('auth:user') || 'null'); } catch { return null; }
	});

	useEffect(() => {
		try { localStorage.setItem('auth:user', JSON.stringify(user)); } catch {}
	}, [user]);

	const register = async ({ username, email, password }) => {
		// demo: accept any, store minimal profile
		setUser({ id: Date.now(), username, email });
	};

	const login = async ({ email }) => {
		// demo: accept any email
		setUser({ id: Date.now(), username: email.split('@')[0], email });
	};

	const logout = () => setUser(null);

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
