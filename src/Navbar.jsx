import React from 'react';
import { useSelector } from 'react-redux';

function Navbar({ page, onNavigate }) {
  const totalItems = useSelector((state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0)
  );

  return (
    <nav className="navbar">
      <div className="brand" onClick={() => onNavigate('home')}>🌿 Paradise Nursery</div>
      <div className="nav-links">
        <a className={page === 'home' ? 'active' : ''} onClick={() => onNavigate('home')}>Home</a>
        <a className={page === 'plants' ? 'active' : ''} onClick={() => onNavigate('plants')}>Plants</a>
        <a className={`cart-link ${page === 'cart' ? 'active' : ''}`} onClick={() => onNavigate('cart')} aria-label="Cart">
          🛒<span className="cart-count">{totalItems}</span>
        </a>
        <a className={page === 'cart' ? 'active' : ''} onClick={() => onNavigate('cart')}>Cart</a>
      </div>
    </nav>
  );
}

export default Navbar;
