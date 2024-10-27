import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onPlaceOrder }) => { // Change here
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const [recipientName, setRecipientName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleConfirmOrder = () => {
    alert("Đơn hàng đã được đặt thành công!");
    onPlaceOrder(); // Change here
    navigate('/'); // Quay về trang chủ
  };

  const handlePlaceOrderClick = () => {
    if (!recipientName || !phoneNumber || !address) {
      alert("Vui lòng nhập đầy đủ thông tin giao hàng!");
      return;
    }
    setOrderPlaced(true); // Đặt trạng thái đơn hàng đã được đặt
  };

  const handleCancelOrder = () => {
    if (window.confirm("Bạn có chắc chắn muốn hủy đơn hàng không?")) {
      window.history.back();
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Thông tin giao hàng</h1>
      {!orderPlaced ? (
        <form>
          <div className="mb-3">
            <label htmlFor="recipientName" className="form-label">Tên người nhận</label>
            <input
              type="text"
              className="form-control"
              id="recipientName"
              value={recipientName}
              onChange={(e) => setRecipientName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Số điện thoại</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Địa chỉ nhận hàng</label>
            <input
              type="text"
              className="form-control"
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="note" className="form-label">Ghi chú</label>
            <textarea
              className="form-control"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-primary" onClick={handlePlaceOrderClick}>Đặt hàng</button>
          <button type="button" className="btn btn-danger" onClick={handleCancelOrder}>Hủy đơn hàng</button>
        </form>
      ) : (
        <div>
          <h2>Đơn hàng của bạn</h2>
          <h4>Thông tin người nhận:</h4>
          <p><strong>Tên:</strong> {recipientName}</p>
          <p><strong>Số điện thoại:</strong> {phoneNumber}</p>
          <p><strong>Địa chỉ:</strong> {address}</p>
          <p><strong>Ghi chú:</strong> {note}</p>
          <h4>Sản phẩm trong giỏ hàng:</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Số lượng</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item, index) => (
                <tr key={index}>
                  <td>
                    <img src={item.image} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{(item.price * item.quantity).toLocaleString()} VNĐ</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Tổng giá: {cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toLocaleString()} VNĐ</h3>
          <button className="btn btn-success" onClick={handleConfirmOrder}>Xác nhận đặt hàng</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
