import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn hiện tại
  const navigate = useNavigate(); // Để điều hướng đến một trang mới
  const [searchTerm, setSearchTerm] = useState(''); // Trạng thái cho từ khóa tìm kiếm

  const handleSearch = (e) => {
    e.preventDefault(); // Ngăn chặn hành vi mặc định của form
    if (searchTerm) {
      navigate(`/shop?search=${encodeURIComponent(searchTerm)}`); // Điều hướng đến trang shop với từ khóa tìm kiếm
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Milk Tea Shop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current={location.pathname === '/' ? 'page' : undefined} to="/">Trang chủ</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/shop' ? 'active' : ''}`} to="/shop">Shop</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === '/cart' ? 'active' : ''}`} to="/cart">Giỏ Hàng</Link>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)} // Cập nhật trạng thái từ khóa tìm kiếm
            />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
