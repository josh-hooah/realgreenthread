import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

function Cart({ cart, removeFromCart, updateCartQuantity }) {


  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div className="cart-page">
      <div className="cart-container">
        <h1>Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="empty-cart">
            <div className="empty-cart-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Start shopping to add items to your cart</p>
            <Link to="/catalog" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="cart-content">
            <div className="cart-items-section">
              <div className="cart-items">
                {cart.map((item) => (
                  <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h3>{item.name}</h3>
                      <p className="item-category">{item.category}</p>
                      {item.selectedColor && <p className="item-option">Color: {item.selectedColor}</p>}
                      {item.selectedSize && <p className="item-option">Size: {item.selectedSize}</p>}
                      <p className="item-price">₦{item.price.toLocaleString()}</p>
                    </div>
                    <div className="item-quantity">
                      <label>Qty:</label>
                      <div className="quantity-control">
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                      </div>
                    </div>
                    <div className="item-total">
                      <p className="total-label">Total</p>
                      <p className="total-price">₦{(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                      title="Remove item"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-details">
                <div className="summary-row">
                  <span>Subtotal:</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
                <div className="summary-row">
                  <span>Shipping:</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="summary-row total-row">
                  <span>Total:</span>
                  <span>₦{totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="cart-actions">
                <Link to="/checkout" className="checkout-btn">
                  Proceed to Checkout
                </Link>
                <Link to="/catalog" className="continue-shopping">
                  Continue Shopping
                </Link>
              </div>

              <div className="cart-note">
                <p>💬 You can review and modify your order before checkout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
