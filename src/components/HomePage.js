import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/styles.css';
import Banner from './Banner';

const HomePage = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [tsnew, setTsNew] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9999/products')
      .then(response => response.json())
      .then(data => {
        const bestSellers = data.filter(product => product.category.includes("Best Seller"));
        setBestSellers(bestSellers);
        const tsnew = data.filter(product => product.category.includes("Trà sữa mới"));
        setTsNew(tsnew);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">Trà Sữa Ngon Nhất</h1>
      
      <Banner />
      <h2 className="my-4">Trà sữa mới</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {tsnew.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {tsnew.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
              <Link to="/shop">
                <img src={product.image} className="d-block w-100" alt={product.name} />
              </Link>
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.name}</h5>
                <p>Giá: {product.price} VNĐ</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <h2 className="my-4">Best Seller</h2>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {bestSellers.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
              aria-current={index === 0 ? 'true' : 'false'}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {bestSellers.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={product.id}>
              <Link to="/shop">
                <img src={product.image} className="d-block w-100" alt={product.name} />
              </Link>
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.name}</h5>
                <p>Giá: {product.price} VNĐ</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
