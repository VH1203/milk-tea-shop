import React, { useState } from 'react';
import Modal from 'react-modal';

const ProductCard = ({ product, addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [size, setSize] = useState('');
  const [sugarLevel, setSugarLevel] = useState('');
  const [iceLevel, setIceLevel] = useState('');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleAddToCart = () => {
    const item = {
      ...product,
      size,
      sugarLevel,
      iceLevel,
      toppings,
      quantity,
    };
    addToCart(item);
    toggleModal(); // Đóng modal sau khi thêm vào giỏ
  };

  const handleToggleTopping = (topping) => {
    setToppings(prev =>
      prev.includes(topping) ? prev.filter(t => t !== topping) : [...prev, topping]
    );
  };

  return (
    <div className="card">
      <img src={product.image} className="card-img-top" alt={product.name} />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <button className="btn btn-primary" onClick={toggleModal}>Thêm vào giỏ</button>
      </div>

      {/* Modal cho lựa chọn */}
      <Modal isOpen={isOpen} onRequestClose={toggleModal} contentLabel="Lựa chọn sản phẩm">
        <h2>Lựa chọn cho {product.name}</h2>
        <button className="btn btn-close" onClick={toggleModal}>Đóng</button>

        <div className="mb-3">
          <label className="form-label">Size:</label>
          <select className="form-select" value={size} onChange={e => setSize(e.target.value)}>
            <option value="">Chọn kích thước</option>
            {product.sizes && product.sizes.map((s, index) => (
              <option key={index} value={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Tỉ lệ đường:</label>
          <select className="form-select" value={sugarLevel} onChange={e => setSugarLevel(e.target.value)}>
            <option value="">Chọn tỉ lệ đường</option>
            <option value="không">Không đường</option>
            <option value="ít">Ít đường</option>
            <option value="vừa">Vừa</option>
            <option value="nhiều">Nhiều đường</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Tỉ lệ đá:</label>
          <select className="form-select" value={iceLevel} onChange={e => setIceLevel(e.target.value)}>
            <option value="">Chọn tỉ lệ đá</option>
            {product.iceLevels && product.iceLevels.map((ice, index) => (
              <option key={index} value={ice}>{ice}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Topping thêm:</label>
          <div>
            {product.toppings && product.toppings.map((topping, index) => (
              <label key={index}>
                <input type="checkbox" onChange={() => handleToggleTopping(topping)} /> {topping}
              </label>
            ))}
          </div>
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

        <button className="btn btn-success" onClick={handleAddToCart}>Xác nhận thêm vào giỏ</button>
      </Modal>
    </div>
  );
};

export default ProductCard;
