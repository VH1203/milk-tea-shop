import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const ShopPage = ({ addToCart, selectedCategory }) => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6; // Số sản phẩm hiển thị trên mỗi trang

  useEffect(() => {
    fetch('http://localhost:9999/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  // Lọc sản phẩm dựa trên từ khóa tìm kiếm và danh mục
  const filteredProducts = products.filter(product => {
    const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category.includes(selectedCategory) : true;
    return matchesSearchTerm && matchesCategory;
  });

  // Tính toán số trang
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  // Hàm chuyển trang
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container">
      <h1 className="my-4">Cửa Hàng</h1>
      <input
        type="text"
        placeholder="Tìm kiếm sản phẩm..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="form-control mb-4"
      />
      <div className="row">
        {currentProducts.map(product => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`page-link ${currentPage === index + 1 ? 'active' : ''}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
