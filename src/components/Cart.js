import React from 'react';
import CartItem from './CartItem';
import '../styles/Cart.css';

const Cart = ({ items, total, removeFromCart, clearCart, checkout }) => {
  return (
    <aside className="cart">
      <div className="cart-header">
        <h3>Your Cart</h3>
        {items.length > 0 && (
          <button className="btn-clear-cart" onClick={clearCart}>
            Clear All
          </button>
        )}
      </div>
      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty</p>
        ) : (
          items.map(item => (
            <CartItem 
              key={item.id}
              item={item}
              removeFromCart={removeFromCart}
            />
          ))
        )}
      </div>
      <div className="cart-footer">
        <div className="cart-total">
          <span>Total:</span>
          <span>₹{total}</span>
        </div>
        <button 
          className="btn-checkout"
          disabled={items.length === 0}
          onClick={checkout}
        >
          Checkout
        </button>
      </div>
    </aside>
  );
};

export default Cart;