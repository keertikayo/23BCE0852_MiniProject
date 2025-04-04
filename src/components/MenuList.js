import React from 'react';
import MenuItem from './MenuItem';
import '../styles/MenuList.css';

const MenuList = ({ items, addToCart }) => {
  return (
    <section className="menu-list" id="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {items.map(item => (
          <MenuItem key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default MenuList;