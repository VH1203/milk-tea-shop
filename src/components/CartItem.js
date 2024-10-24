import React from 'react';

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Size: {item.size}, Topping: {item.toppings.join(', ')}</p>
        <p className="card-text">Giá: {item.price} VND</p>
        <input
          type="number"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.productId, Number(e.target.value))}
          min="1"
        />
        <button className="btn btn-danger" onClick={() => onRemove(item.productId)}>Xóa</button>
      </div>
    </div>
  );
};

export default CartItem;
