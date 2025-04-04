import React, { useState } from 'react';
import '../styles/Cart.css';

const Checkout = ({ cart, total, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'credit-card'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    onClose();
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <div className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              {item.name} x {item.quantity} - ₹{(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <div className="total-amount">
          <strong>Total: ₹{total}</strong>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <h3>Delivery Information</h3>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="zipCode">Zip Code</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <h3>Payment Method</h3>
        <div className="form-group payment-methods">
          <div className="payment-option">
            <input
              type="radio"
              id="credit-card"
              name="paymentMethod"
              value="credit-card"
              checked={formData.paymentMethod === 'credit-card'}
              onChange={handleChange}
            />
            <label htmlFor="credit-card">Credit Card</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="paypal"
              name="paymentMethod"
              value="paypal"
              checked={formData.paymentMethod === 'paypal'}
              onChange={handleChange}
            />
            <label htmlFor="paypal">PayPal</label>
          </div>
          <div className="payment-option">
            <input
              type="radio"
              id="cash"
              name="paymentMethod"
              value="cash"
              checked={formData.paymentMethod === 'cash'}
              onChange={handleChange}
            />
            <label htmlFor="cash">Cash on Delivery</label>
          </div>
        </div>
        <div className="form-buttons">
          <button type="button" className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Place Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Checkout;