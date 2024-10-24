import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="container">
      <h1 className="my-4">Giỏ Hàng</h1>
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
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} VNĐ</td>
              <td>
                <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>Tổng giá: {totalPrice} VNĐ</h3>
      <button className="btn btn-primary">Tiến hành thanh toán</button>
    </div>
  );
};

export default Cart;
