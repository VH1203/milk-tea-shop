import React, { useState } from 'react';

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ ...product, quantity });
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="form-group">
          <label>Số lượng:</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-2" onClick={addToCart}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
