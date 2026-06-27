import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import CustomBooking from './pages/CustomBooking';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity = 1, options = {}) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity, ...options }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(cart.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <div className="App">
        <Navigation cartCount={cart.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<ProductCatalog addToCart={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/custom-booking" element={<CustomBooking />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />} />
            <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
