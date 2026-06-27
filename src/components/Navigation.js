import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navigation.css';

function Navigation({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          🧵 GREENTHREAD
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/catalog" className="navbar-link">Shop</Link>
          </li>
          <li className="navbar-item">
            <Link to="/custom-booking" className="navbar-link">Custom Order</Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link cart-link">
              🛒 Cart ({cartCount})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
