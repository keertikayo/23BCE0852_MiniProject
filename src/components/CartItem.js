import React from 'react';
import '../styles/Cart.css';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity } = item;
  
  return (
    <div className="cart-item">
      <div className="cart-item-details">
        <h4 className="cart-item-name">{name}</h4>
        <p className="cart-item-price">₹{price.toFixed(2)} x {quantity}</p>
      </div>
      <div className="cart-item-subtotal">
      ₹{(price * quantity).toFixed(2)}
      </div>
      <button 
        className="btn-remove-item"
        onClick={() => removeFromCart(id)}
      >
        <i className="fas fa-minus"></i>
      </button>
    </div>
  );
};

export default CartItem;