import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ShopPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Cửa Hàng</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
