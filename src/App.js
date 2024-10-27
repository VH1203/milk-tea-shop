import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import ShopPage from './components/ShopPage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const addToCart = (item) => {
    setCartItems(prev => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const updateCartItem = (index, updatedItem) => {
    setCartItems(prev => {
      const newCartItems = [...prev];
      newCartItems[index] = updatedItem;
      return newCartItems;
    });
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePlaceOrder = () => {
    // Xử lý đơn hàng tại đây (có thể gửi dữ liệu đến API)
    console.log("Đơn hàng đã được đặt:", cartItems);
    setCartItems([]); // Xóa giỏ hàng sau khi đặt hàng
    // Có thể chuyển hướng đến một trang khác nếu cần
  };

  return (
    <Router>
      <Navbar onCategoryChange={handleCategoryChange} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage addToCart={addToCart} selectedCategory={selectedCategory} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartItem={updateCartItem} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
