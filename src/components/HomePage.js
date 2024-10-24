import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/products')
      .then(response => response.json())
      .then(data => {
        const bestSellers = data.filter(product => product.category.includes("Best Seller"));
        setBestSellers(bestSellers);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Trà Sữa Ngon Nhất</h1>
      <div className="banner">
        <img src="images/banner.jpg" className="img-fluid" alt="Banner" />
      </div>
      <h2 className="my-4">Sản Phẩm Best Seller</h2>
      <div className="row">
        {bestSellers.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card mb-4">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Giá: {product.price} VNĐ</p>
                <Link to="/shop" className="btn btn-primary">Mua Ngay</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
