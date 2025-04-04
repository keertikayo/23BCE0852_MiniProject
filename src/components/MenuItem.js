import React from 'react';
import '../styles/MenuItem.css';

const MenuItem = ({ item, addToCart }) => {
  const { name, description, price, image } = item;
  
  return (
    <div className="menu-item">
      <div className="menu-item-image">
        <img src={image} alt={name} />
      </div>
      <div className="menu-item-content">
        <h3 className="menu-item-title">{name}</h3>
        <p className="menu-item-description">{description}</p>
        <div className="menu-item-footer">
          <span className="menu-item-price">₹{price.toFixed(2)}</span>
          <button 
            className="btn-add-to-cart"
            onClick={() => addToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;