import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = ({ onCategoryChange }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-">
      <div className="container-fluid">
        <Link className="navbar-brand text-light" to="/">
          <img src="images/logo.png" className="logo" alt="Logo" /><br></br>
          Milk Tea Shop
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">Trang Chủ</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" activeClassName="active">Cửa Hàng</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" activeClassName="active">Giỏ hàng</NavLink>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/shop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Danh Mục
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('')}>Tất cả danh mục</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Best Seller')}>Best Seller</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Trà sữa')}>Trà sữa</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Cà phê')}>Cà phê</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Nước giải khát')}>Nước giải khát</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Nước ép')}>Nước ép</a></li>
                <li><a className="dropdown-item" href="shop#" onClick={() => onCategoryChange('Sinh tố')}>Sinh tố</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="navbar-brand text-light" to="/">
          <img src="images/logo.png" className="logo" alt="Logo" /><br></br>
          Milk Tea Shop
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
