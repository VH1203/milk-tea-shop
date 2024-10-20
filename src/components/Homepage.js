import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

function Homepage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container">
      <h1 className="mt-4">Best Sellers</h1>
      <div className="row">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Homepage;
