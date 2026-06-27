import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, categories } from '../data/products';
import '../styles/ProductCatalog.css';

function ProductCatalog({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const allProducts = getAllProducts();
  
  let filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(p => p.category === selectedCategory);

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else {
    filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="product-catalog">
      <div className="catalog-container">
        <div className="catalog-header">
          <h1>Product Catalog</h1>
          <p>Explore our collection of premium African fashion</p>
        </div>

        <div className="catalog-controls">
          <div className="filter-section">
            <h3>Filter by Category</h3>
            <button
              className={`category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`category-btn ${selectedCategory === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="sort-section">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="name">Name (A-Z)</option>
              <option value="price-low">Price (Low to High)</option>
              <option value="price-high">Price (High to Low)</option>
            </select>
          </div>
        </div>

        <div className="products-section">
          <p className="results-count">Found {filteredProducts.length} products</p>
          
          {filteredProducts.length === 0 ? (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          ) : (
            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <div className="product-footer">
                      <span className="product-price">₦{product.price.toLocaleString()}</span>
                      <Link to={`/product/${product.id}`} className="view-btn">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCatalog;
