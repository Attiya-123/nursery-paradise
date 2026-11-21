import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

function CartItem({ onContinueShopping }) {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');

  const itemTotal = (item) => item.cost * item.quantity;
  const totalAmount = items.reduce((sum, item) => sum + itemTotal(item), 0);

  return (
    <div className="cart-page">
      <h2>Shopping Cart</h2>
      <div className="cart-total">Total Cart Amount: <strong>${totalAmount}</strong></div>

      {items.length === 0 && <p className="empty-cart">Your cart is empty. 🌱</p>}

      {items.map((item) => (
        <div className="cart-item" key={item.name}>
          <img src={item.image} alt={item.name} />
          <div className="details">
            <h3>{item.name}</h3>
            <div>Unit price: ${item.cost}</div>
          </div>
          <div className="qty">
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }))}>−</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }))}>+</button>
          </div>
          <div className="item-subtotal">Subtotal: ${itemTotal(item)}</div>
          <button className="delete-btn" onClick={() => dispatch(removeItem(item.name))}>Delete</button>
        </div>
      ))}

      {message && <p className="cart-total">{message}</p>}

      <div className="cart-actions">
        <button className="continue-btn" onClick={onContinueShopping}>Continue Shopping</button>
        <button className="checkout-btn" onClick={() => setMessage('Checkout: Coming Soon!')}>Checkout</button>
      </div>
    </div>
  );
}

export default CartItem;
