import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');

  const handleCheckout = () => {
    // Gửi thông tin đơn hàng đến server hoặc xử lý thanh toán ở đây
    console.log({ recipientName, phoneNumber, address, note, cartItems });
  };

  return (
    <div className="container">
      <h1 className="my-4">Thanh Toán</h1>
      <form onSubmit={handleCheckout}>
        <div className="mb-3">
          <label className="form-label">Họ và tên:</label>
          <input type="text" className="form-control" value={recipientName} onChange={e => setRecipientName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Số điện thoại:</label>
          <input type="text" className="form-control" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Địa chỉ giao hàng:</label>
          <input type="text" className="form-control" value={address} onChange={e => setAddress(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Ghi chú:</label>
          <textarea className="form-control" value={note} onChange={e => setNote(e.target.value)}></textarea>
        </div>
        <button type="submit" className="btn btn-success">Đặt hàng</button>
      </form>
    </div>
  );
};

export default Checkout;
