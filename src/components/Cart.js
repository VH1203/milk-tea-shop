import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, removeFromCart, updateCartItem }) => {
  const navigate = useNavigate(); // Khởi tạo useNavigate
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const confirmRemove = (index, name) => {
    if (window.confirm(`Bạn có chắc chắn muốn xóa ${name} khỏi giỏ hàng không?`)) {
      removeFromCart(index);
    }
  };

  // Hàm tăng số lượng
  const increaseQuantity = (index) => {
    const updatedItem = { ...cartItems[index], quantity: cartItems[index].quantity + 1 };
    updateCartItem(index, updatedItem);
  };

  // Hàm giảm số lượng
  const decreaseQuantity = (index) => {
    const updatedQuantity = cartItems[index].quantity - 1;
    if (updatedQuantity > 0) {
      const updatedItem = { ...cartItems[index], quantity: updatedQuantity };
      updateCartItem(index, updatedItem);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Giỏ Hàng</h1>
      {cartItems.length === 0 ? ( // Kiểm tra nếu giỏ hàng rỗng
        <p>Giỏ hàng của bạn hiện đang trống.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Tên sản phẩm</th>
              <th scope="col">Size</th>
              <th scope="col">Đường</th>
              <th scope="col">Đá</th>
              <th scope="col">Topping</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Giá</th>
              <th scope="col">Xóa</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.size}</td>
                <td>{item.sugarLevel}</td>
                <td>{item.iceLevel}</td>
                <td>{item.toppings.join(", ")}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <button className="btn btn-light" onClick={() => decreaseQuantity(index)}>-</button>
                    <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                    <button className="btn btn-light" onClick={() => increaseQuantity(index)}>+</button>
                  </div>
                </td>
                <td>{(item.price * item.quantity).toLocaleString()} VNĐ</td>
                <td>
                  <button className="btn btn-danger" onClick={() => confirmRemove(index, item.name)}>Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h3>Tổng giá: {totalPrice.toLocaleString()} VNĐ</h3>
      <button 
        className="btn btn-primary" 
        onClick={() => navigate('/checkout')}
        disabled={cartItems.length === 0} // Vô hiệu hóa nút nếu giỏ hàng rỗng
      >
        Tiến hành đặt hàng
      </button>
    </div>
  );
};

export default Cart;
