import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import '../styles/ProductDetail.css';

function ProductDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id);

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0] || '');
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || '');
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="product-detail">
        <div className="not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/catalog')}>Back to Catalog</button>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, {
      selectedColor,
      selectedSize
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="product-detail">
      <div className="detail-container">
        <button className="back-btn" onClick={() => navigate('/catalog')}>
          ← Back to Catalog
        </button>

        <div className="detail-content">
          <div className="product-image-section">
            <img src={product.image} alt={product.name} className="main-image" />
          </div>

          <div className="product-details-section">
            <p className="breadcrumb">{product.category}</p>
            <h1>{product.name}</h1>
            
            <div className="price-section">
              <span className="price">₦{product.price.toLocaleString()}</span>
              <p className="in-stock">✓ In Stock</p>
            </div>

            <p className="description">{product.description}</p>

            <div className="options-section">
              <div className="option-group">
                <label htmlFor="color">Color:</label>
                <select 
                  id="color" 
                  value={selectedColor} 
                  onChange={(e) => setSelectedColor(e.target.value)}
                >
                  {product.colors.map(color => (
                    <option key={color} value={color}>{color}</option>
                  ))}
                </select>
              </div>

              <div className="option-group">
                <label htmlFor="size">Size:</label>
                <select 
                  id="size" 
                  value={selectedSize} 
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {product.sizes.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              <div className="option-group">
                <label htmlFor="quantity">Quantity:</label>
                <div className="quantity-input">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input 
                    type="number" 
                    id="quantity" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                  />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
            </div>

            <div className="actions">
              <button 
                className="add-to-cart-btn"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>
            </div>

            {addedToCart && (
              <div className="success-message">
                ✅ Added to cart! 
              </div>
            )}

            <div className="info-box">
              <h3>ℹ️ Product Information</h3>
              <ul>
                <li><strong>Category:</strong> {product.category}</li>
                <li><strong>Available Colors:</strong> {product.colors.join(', ')}</li>
                <li><strong>Available Sizes:</strong> {product.sizes.join(', ')}</li>
                <li><strong>Delivery:</strong> 2-5 business days</li>
                <li><strong>Return Policy:</strong> 14 days money-back guarantee</li>
              </ul>
            </div>

            <div className="info-box">
              <h3>💬 Need Help?</h3>
              <p>Contact us on WhatsApp: <strong>+234 905 881 0096</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
