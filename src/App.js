import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MenuList from './components/MenuList';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Checkout from './components/Checkout';

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, name: 'Margherita Pizza', description: 'Classic pizza with tomato sauce, mozzarella, and basil.', price: 299, image: '/images/pizza.jpg', category: 'pizza' },
    { id: 2, name: 'Pepperoni Pizza', description: 'Pizza topped with tomato sauce, mozzarella, and pepperoni.', price: 399, image: '/images/pizza.jpg', category: 'pizza' },
    { id: 3, name: 'Classic Burger', description: 'Juicy beef patty with lettuce, tomato, and special sauce.', price: 259, image: '/images/burger.jpg', category: 'burger' },
    { id: 4, name: 'Cheese Burger', description: 'Beef patty with melted cheese, lettuce, and tomato.', price: 359, image: '/images/burger.jpg', category: 'burger' },
    { id: 5, name: 'Caesar Salad', description: 'Fresh romaine lettuce with Caesar dressing and croutons.', price: 399, image: '/images/salad.jpg', category: 'salad' },
    { id: 6, name: 'Pasta Carbonara', description: 'Spaghetti with creamy sauce, bacon, and parmesan.', price: 259, image: '/images/pasta.jpg', category: 'pasta' },
    { id: 8, name: 'Soda', description: 'Choice of Coke, Sprite, or Fanta.', price: 79, image: '/images/drinks.jpg', category: 'drinks' }
  ]);

  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');

  // Add to cart function
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => 
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const filteredMenuItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  const openCheckout = () => {
    setShowModal(true);
  };

  const closeCheckout = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Hero />
      <main className="main-content">
        <div className="container">
          <div className="category-filter">
            <button 
              className={activeCategory === 'all' ? 'active' : ''} 
              onClick={() => setActiveCategory('all')}
            >
              All
            </button>
            <button 
              className={activeCategory === 'pizza' ? 'active' : ''} 
              onClick={() => setActiveCategory('pizza')}
            >
              Pizza
            </button>
            <button 
              className={activeCategory === 'burger' ? 'active' : ''} 
              onClick={() => setActiveCategory('burger')}
            >
              Burgers
            </button>
            <button 
              className={activeCategory === 'salad' ? 'active' : ''} 
              onClick={() => setActiveCategory('salad')}
            >
              Salads
            </button>
            <button 
              className={activeCategory === 'pasta' ? 'active' : ''} 
              onClick={() => setActiveCategory('pasta')}
            >
              Pasta
            </button>
            
            <button 
              className={activeCategory === 'drinks' ? 'active' : ''} 
              onClick={() => setActiveCategory('drinks')}
            >
              Drinks
            </button>
          </div>
          <div className="content-wrapper">
            <MenuList items={filteredMenuItems} addToCart={addToCart} />
            <Cart 
              items={cart} 
              total={total.toFixed(2)} 
              removeFromCart={removeFromCart} 
              clearCart={clearCart}
              checkout={openCheckout}
            />
          </div>
        </div>
      </main>
      <Footer />
      {showModal && (
        <Modal onClose={closeCheckout}>
          <Checkout cart={cart} total={total.toFixed(2)} onClose={closeCheckout} />
        </Modal>
      )}
    </div>
  );
};

export default App;