import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendToWhatsApp, formatBookingMessage } from '../utils/whatsappIntegration';
import '../styles/CustomBooking.css';

function CustomBooking() {

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    clothType: 'senator wear',
    description: '',
    deliveryDate: '',
    deliveryTime: '09:00'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.phone || !formData.email || !formData.description || !formData.deliveryDate) {
      alert('Please fill in all required fields');
      return;
    }

    const message = formatBookingMessage(formData);
    sendToWhatsApp(message);
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        clothType: 'senator wear',
        description: '',
        deliveryDate: '',
        deliveryTime: '09:00'
      });
    }, 3000);
  };

  return (
    <div className="custom-booking">
      <div className="booking-container">
        <h1>Custom Cloth Booking</h1>
        <p className="subtitle">Get your perfect custom made outfit tailored just for you</p>

        <div className="booking-content">
          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-section">
              <h2>Personal Information</h2>
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
            </div>

            <div className="form-section">
              <h2>Cloth Details</h2>
              <div className="form-group">
                <label htmlFor="clothType">Type of Cloth *</label>
                <select
                  id="clothType"
                  name="clothType"
                  value={formData.clothType}
                  onChange={handleChange}
                  required
                >
                  <option value="senator wear">Senator Wear</option>
                  <option value="kaftan">Kaftan</option>
                  <option value="suit">Suit</option>
                  <option value="corporate wear">Corporate Wear</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description of Your Custom Cloth *</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe your desired cloth in detail. Include color, patterns, style preferences, measurements, etc."
                  rows="6"
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h2>Delivery Information</h2>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="deliveryDate">Delivery Date *</label>
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
                  <label htmlFor="deliveryTime">Preferred Delivery Time</label>
                  <input
                    type="time"
                    id="deliveryTime"
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            {submitted && (
              <div className="success-message">
                ✅ Booking request sent to WhatsApp! We'll confirm shortly.
              </div>
            )}

            <button type="submit" className="submit-btn">
              📱 Send to WhatsApp
            </button>
          </form>

          <div className="booking-info">
            <div className="info-card">
              <h3>📏 Measurements</h3>
              <p>Please provide accurate body measurements in your description for the perfect fit.</p>
            </div>
            <div className="info-card">
              <h3>🎨 Customization</h3>
              <p>Choose your colors, patterns, and style. Our expert tailors will bring your vision to life.</p>
            </div>
            <div className="info-card">
              <h3>⏱️ Timeline</h3>
              <p>Custom orders typically take 5-14 business days depending on complexity.</p>
            </div>
            <div className="info-card">
              <h3>💬 Contact</h3>
              <p>WhatsApp: +234 905 881 0096</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomBooking;
