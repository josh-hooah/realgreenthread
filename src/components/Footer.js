import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>GREENTHREAD</h3>
          <p>Premium clothing for African men - Senator wear, Kaftan, Suits, and more.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#custom">Custom Order</a></li>
            <li><a href="#about">About Us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>📞 WhatsApp: <strong>+234 905 881 0096</strong></p>
          <p>🏪 Available across Lagos</p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <p>🌐 Coming Soon on Instagram & Facebook</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 GREENTHREAD. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
