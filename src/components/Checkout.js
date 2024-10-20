import React, { useState } from 'react';

const Checkout = () => {
  const [recipient, setRecipient] = useState({
    name: '',
    phone: '',
    address: '',
    note: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipient({ ...recipient, [name]: value });
  };

  const handleCheckout = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length > 0) {
      const order = { ...recipient, cart, totalPrice: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) };
      console.log('Order placed:', order);
      localStorage.removeItem('cart');
    }
  };

  return (
    <div>
      <h3>Thanh toán</h3>
      <div className="form-group">
        <label>Tên người nhận</label>
        <input type="text" className="form-control" name="name" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Số điện thoại</label>
        <input type="text" className="form-control" name="phone" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Địa chỉ nhận hàng</label>
        <input type="text" className="form-control" name="address" onChange={handleInputChange} />
      </div>
      <div className="form-group">
        <label>Ghi chú</label>
        <textarea className="form-control" name="note" onChange={handleInputChange}></textarea>
      </div>
      <button className="btn btn-success mt-3" onClick={handleCheckout}>Đặt hàng</button>
    </div>
  );
};

export default Checkout;
