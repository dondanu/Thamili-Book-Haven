import React, { useState } from 'react';
// import Layout from './Layout';
// import { bookPlaceholder7, bookPlaceholder8, bookPlaceholder9, bookPlaceholder10 } from './assets';
import bookPlaceholder7 from './assets/book-placeholder1.png';
import bookPlaceholder8 from './assets/book-placeholder2.png';
import bookPlaceholder9 from './assets/book-placeholder3.png';
import bookPlaceholder10 from './assets/book-placeholder4.png';


const Bestsellers = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(17);
  const [language, setLanguage] = useState('en');

  const bestsellers = [
    { id: 1, title: "Bestseller 1", author: "Author 1", price: "$14.99", image: bookPlaceholder7 },
    { id: 2, title: "Bestseller 2", author: "Author 2", price: "$18.99", image: bookPlaceholder8 },
    { id: 3, title: "Bestseller 3", author: "Author 3", price: "$12.99", image: bookPlaceholder9 },
    { id: 4, title: "Bestseller 4", author: "Author 4", price: "$16.99", image: bookPlaceholder10 },
  ];

  return (
    <Layout
      darkMode={darkMode}
      fontSize={fontSize}
      language={language}
      toggleDarkMode={() => setDarkMode(!darkMode)}
      setFontSize={setFontSize}
      setLanguage={setLanguage}
    >
      <section style={{ padding: '40px 20px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '30px', fontSize: '32px' }}>Bestsellers</h2>
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {bestsellers.map(book => (
            <div key={book.id} style={{ /* Book card styling from home page */ }}>
              {/* Book card content */}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Bestsellers;