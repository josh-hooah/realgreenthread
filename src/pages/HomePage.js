import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HomePage.css';

function HomePage() {
  const categories = [
    { name: 'Senator Wear', icon: '👔', description: 'Traditional senator wear' },
    { name: 'Kaftan', icon: '🧵', description: 'Comfortable and elegant kaftans' },
    { name: 'Suits', icon: '🎩', description: 'Professional business suits' },
    { name: 'Corporate Wear', icon: '💼', description: 'Office corporate collection' },
    { name: 'Shoes', icon: '👞', description: 'Formal and casual shoes' },
    { name: 'Accessories', icon: '✨', description: 'Belts, ties, and more' }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>GREENTHREAD</h1>
          <p className="tagline">Premium African Fashion for Distinguished Men</p>
          <p className="description">
            Experience authentic style with our collection of senator wear, kaftans, suits, and corporate wear.
            Elevate your wardrobe with quality craftsmanship.
          </p>
          <div className="hero-buttons">
            <Link to="/catalog" className="btn btn-primary">Shop Now</Link>
            <Link to="/custom-booking" className="btn btn-secondary">Custom Order</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="feature">
          <div className="feature-icon">✨</div>
          <h3>Premium Quality</h3>
          <p>Finest materials and expert craftsmanship</p>
        </div>
        <div className="feature">
          <div className="feature-icon">🎨</div>
          <h3>Customizable</h3>
          <p>Get your perfect custom-made outfit</p>
        </div>
        <div className="feature">
          <div className="feature-icon">⚡</div>
          <h3>Fast Delivery</h3>
          <p>Quick and reliable delivery service</p>
        </div>
        <div className="feature">
          <div className="feature-icon">💬</div>
          <h3>24/7 Support</h3>
          <p>WhatsApp support for all your needs</p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories">
        <h2>Shop by Category</h2>
        <div className="categories-grid">
          {categories.map((cat, index) => (
            <Link to="/catalog" key={index} className="category-card">
              <div className="category-icon">{cat.icon}</div>
              <h3>{cat.name}</h3>
              <p>{cat.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us">
        <h2>Why Choose GREENTHREAD?</h2>
        <div className="why-us-content">
          <div className="why-us-item">
            <h4>🌟 Authentic African Fashion</h4>
            <p>We specialize in traditional African men's fashion that blends culture with contemporary style.</p>
          </div>
          <div className="why-us-item">
            <h4>👥 Expert Tailors</h4>
            <p>Our experienced tailors ensure every piece is crafted to perfection with attention to detail.</p>
          </div>
          <div className="why-us-item">
            <h4>🎯 Perfect Fit Guarantee</h4>
            <p>Custom orders include measurements consultation for the perfect fit every time.</p>
          </div>
          <div className="why-us-item">
            <h4>💳 Easy Ordering</h4>
            <p>Simple online ordering with WhatsApp confirmation and payment options.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Upgrade Your Wardrobe?</h2>
        <p>Choose from our ready-made collection or create your perfect custom outfit</p>
        <div className="cta-buttons">
          <Link to="/catalog" className="btn btn-primary-lg">Browse Collection</Link>
          <Link to="/custom-booking" className="btn btn-secondary-lg">Book Custom Suit</Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-info">
        <h3>Get in Touch</h3>
        <div className="contact-details">
          <p>📱 WhatsApp: <strong>+234 905 881 0096</strong></p>
          <p>📍 Available in Lagos</p>
          <p>⏰ Monday - Sunday: 9:00 AM - 9:00 PM</p>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
