import React, { useState } from 'react';
import './ProductPage.css';
<img src="/watch.jpg" alt="Watch" className="product-image" />


function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = () => {
    setCartCount(cartCount + quantity);
    setQuantity(1);
  };

  return (
    <div className="product-page">
      <h2>Watch Product Page</h2>
      <div className="product-container">
        <img src="/watch.jpg" alt="Watch" className="product-image" />
        <div className="product-details">
          <h3>Elegant Leather Watch</h3>
          <p className="price">₹2,999</p>
          <p className="description">
            Premium leather strap, water resistant, and long battery life. Perfect for formal and casual occasions.
          </p>
          <div className="quantity-cart">
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
          <p className="cart-status">Cart Items: {cartCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
