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

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartItem={updateCartItem} />} />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
