import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4" key={product.id}>
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
