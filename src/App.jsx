import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import Navbar from './Navbar';

function App() {
  const [page, setPage] = useState('home'); // 'home' | 'plants' | 'cart'

  if (page === 'home') {
    return (
      <div className="landing-page">
        <div className="landing-content">
          <div className="landing-left">
            <h1>Paradise Nursery</h1>
            <p className="tagline">Where Green Meets Serenity</p>
            <button className="get-started-btn" onClick={() => setPage('plants')}>
              Get Started
            </button>
          </div>
          <div className="landing-right">
            <AboutUs />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar page={page} onNavigate={setPage} />
      {page === 'plants' && <ProductList />}
      {page === 'cart' && <CartItem onContinueShopping={() => setPage('plants')} />}
    </div>
  );
}

export default App;
