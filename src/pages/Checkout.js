import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendToWhatsApp, formatCartMessage } from '../utils/whatsappIntegration';
import '../styles/Checkout.css';

function Checkout({ cart, clearCart }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    deliveryDate: '',
    paymentMethod: 'direct-payment'
  });
  const [submitted, setSubmitted] = useState(false);

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cart.length === 0) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="empty-checkout">
            <h2>Your cart is empty</h2>
            <p>Please add items before checking out</p>
            <button onClick={() => navigate('/catalog')} className="back-to-shop">
              Back to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.email || !formData.address || !formData.deliveryDate) {
      alert('Please fill in all required fields');
      return;
    }

    const message = formatCartMessage(cart, totalPrice) + `\n\n*Delivery Address:*\n${formData.address}\n\n*Delivery Date:*\n${formData.deliveryDate}\n\n*Customer:*\nName: ${formData.fullName}\nPhone: ${formData.phone}\nEmail: ${formData.email}`;

    sendToWhatsApp(message);

    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  };

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <h1>Checkout</h1>

        <div className="checkout-content">
          <form onSubmit={handleSubmit} className="checkout-form">
            <div className="form-section">
              <h2>Delivery Information</h2>
              
              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+234 901 2345 678"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Delivery Address *</label>
                <textarea
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your delivery address"
                  rows="3"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="deliveryDate">Preferred Delivery Date *</label>
                <input
                  type="date"
                  id="deliveryDate"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="paymentMethod">Payment Method</label>
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  value={formData.paymentMethod}
                  onChange={handleChange}
                >
                  <option value="direct-payment">Direct Payment</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="cash-on-delivery">Cash on Delivery</option>
                </select>
              </div>
            </div>

            {submitted && (
              <div className="success-message">
                ✅ Order sent to WhatsApp! We'll confirm your order shortly.
              </div>
            )}

            <button type="submit" className="submit-order-btn">
              📱 Send Order to WhatsApp
            </button>
          </form>

          <div className="order-summary">
            <h2>Order Summary</h2>
            
            <div className="order-items">
              {cart.map((item) => (
                <div key={`${item.id}-${item.selectedColor}-${item.selectedSize}`} className="order-item">
                  <div className="order-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="order-item-info">
                    <p className="order-item-name">{item.name}</p>
                    {item.selectedColor && <p className="order-item-detail">Color: {item.selectedColor}</p>}
                    {item.selectedSize && <p className="order-item-detail">Size: {item.selectedSize}</p>}
                    <p className="order-item-qty">Qty: {item.quantity}</p>
                  </div>
                  <div className="order-item-price">
                    <p>₦{(item.price * item.quantity).toLocaleString()}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="order-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>TBD</span>
              </div>
              <div className="total-row final">
                <span>Total:</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="order-note">
              <h4>📝 Order Notes</h4>
              <ul>
                <li>Your order details have been sent to our WhatsApp</li>
                <li>We will confirm your order within 2 hours</li>
                <li>Payment details will be shared in the confirmation message</li>
                <li>Delivery will be as per your selected date</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
