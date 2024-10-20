import React, { useState, useEffect } from 'react';

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, quantity) => {
    let updatedCart = [...cart];
    updatedCart[index].quantity = quantity;
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const removeItem = (index) => {
    let updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div>
      <h3>Giỏ hàng của bạn</h3>
      {cart.length === 0 ? (
        <p>Giỏ hàng trống</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <div key={index} className="card mb-2">
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p>Giá: {item.price} VND</p>
                <div className="form-group">
                  <label>Số lượng:</label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(index, e.target.value)}
                    min="1"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-danger mt-2" onClick={() => removeItem(index)}>
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
