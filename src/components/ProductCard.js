import React, { useState } from 'react';
import Modal from 'react-modal';

const ProductCard = ({ product, addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sugarLevel, setSugarLevel] = useState('');
  const [iceLevel, setIceLevel] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const item = {
      ...product,
      sugarLevel,
      iceLevel,
      size,
      toppings,
      quantity,
    };
    addToCart(item);
    setIsOpen(false);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <button className="btn btn-primary" onClick={() => setIsOpen(true)}>Thêm vào giỏ hàng</button>
      </div>

      {/* Modal cho việc chọn tùy chọn */}
      <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
      <button
          style={{ position: 'absolute', right: '20px', top: '20px', background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}
          onClick={() => setIsOpen(false)}
        >&times; {/* Dấu X */}
        </button>
        <h2>{product.name}</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Tỉ lệ đường:</label>
            <select className="form-select" value={sugarLevel} onChange={e => setSugarLevel(e.target.value)} required>
              <option value="">Chọn tỉ lệ đường</option>
              {(product.sugarLevel || []).map((level, index) => (
                <option key={index} value={level}>{level}%</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Tỉ lệ đá:</label>
            <select className="form-select" value={iceLevel} onChange={e => setIceLevel(e.target.value)} required>
              <option value="">Chọn tỉ lệ đá</option>
              {(product.iceLevels || []).map((level, index) => (
                <option key={index} value={level}>{level}%</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Size:</label>
            <select className="form-select" value={size} onChange={e => setSize(e.target.value)} required>
              <option value="">Chọn size</option>
              {(product.sizes || []).map((sizeOption, index) => (
                <option key={index} value={sizeOption}>{sizeOption}</option>
              ))}
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Topping:</label>
            {(product.toppings || []).map((topping, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  value={topping}
                  onChange={e => {
                    if (e.target.checked) {
                      setToppings([...toppings, topping]);
                    } else {
                      setToppings(toppings.filter(t => t !== topping));
                    }
                  }}
                />
                <label>{topping}</label>
              </div>
            ))}
          </div>
          <div className="mb-3">
            <label className="form-label">Số lượng:</label>
            <input
              type="number"
              className="form-control"
              value={quantity}
              min="1"
              onChange={e => setQuantity(e.target.value)}
            />
          </div>
          <button type="button" className="btn btn-success" onClick={handleAddToCart}>Xác nhận thêm vào giỏ</button>
          <button type="button" className="btn btn-secondary" onClick={() => setIsOpen(false)}>Hủy</button>
        </form>
      </Modal>
    </div>
  );
};

export default ProductCard;
