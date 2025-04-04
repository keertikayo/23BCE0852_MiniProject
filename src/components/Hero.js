import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h2>Delicious Food Delivered to Your Door</h2>
        <p>Order your favorite meals online and enjoy them at home.</p>
        <a href="#menu" className="btn-primary">Order Now</a>
      </div>
    </section>
  );
};

export default Hero;