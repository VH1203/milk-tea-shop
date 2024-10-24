import React from 'react';

const Modal = ({ show, onClose, product, options, setOptions, handleAddToCart }) => {
  if (!show) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'toppings') {
      setOptions(prev => {
        const toppings = prev.toppings.includes(value)
          ? prev.toppings.filter(topping => topping !== value)
          : [...prev.toppings, value];
        return { ...prev, toppings };
      });
    } else {
      setOptions(prev => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="modal fade show" style={{ display: 'block' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product.name}</h5>
            <button type="button" className="close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label>Size:</label>
                <select name="size" className="form-control" value={options.size} onChange={handleChange}>
                  <option value="S">Nhỏ</option>
                  <option value="M">Vừa</option>
                  <option value="L">Lớn</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tỉ lệ đường:</label>
                <select name="sugarLevel" className="form-control" value={options.sugarLevel} onChange={handleChange}>
                  <option value="0%">Không đường</option>
                  <option value="50%">Nửa đường</option>
                  <option value="100%">Đầy đủ đường</option>
                </select>
              </div>
              <div className="form-group">
                <label>Tỉ lệ đá:</label>
                <select name="iceLevel" className="form-control" value={options.iceLevel} onChange={handleChange}>
                  <option value="0%">Không đá</option>
                  <option value="50%">Nửa đá</option>
                  <option value="100%">Đá đầy</option>
                </select>
              </div>
              <div className="form-group">
                <label>Toppings:</label>
                <div>
                  <label>
                    <input type="checkbox" value="trân châu" checked={options.toppings.includes('trân châu')} onChange={handleChange} name="toppings" /> Trân châu
                  </label>
                  <label>
                    <input type="checkbox" value="thạch" checked={options.toppings.includes('thạch')} onChange={handleChange} name="toppings" /> Thạch
                  </label>
                  <label>
                    <input type="checkbox" value="sữa" checked={options.toppings.includes('sữa')} onChange={handleChange} name="toppings" /> Sữa
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label>Số lượng:</label>
                <input type="number" className="form-control" name="quantity" value={options.quantity} onChange={(e) => setOptions({ ...options, quantity: e.target.value })} min="1" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>Đóng</button>
            <button type="button" className="btn btn-primary" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
