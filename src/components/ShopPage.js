import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';

const ShopPage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();

  useEffect(() => {
    fetch('http://localhost:9999/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">Cửa Hàng</h1>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)} // Cập nhật từ khóa khi người dùng nhập
        className="form-control mb-4"
      />
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
