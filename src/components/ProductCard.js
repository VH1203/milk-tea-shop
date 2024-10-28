import React, { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

const ProductCard = ({ product, addToCart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [sugarLevel, setSugarLevel] = useState('');
  const [iceLevel, setIceLevel] = useState('');
  const [size, setSize] = useState('');
  const [toppings, setToppings] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [isValid, setIsValid] = useState(true); // State for form validation

  const handleAddToCart = () => {
    if (!size) {
      setIsValid(false); // Set form invalid if size is not selected
      return;
    }
    
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

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div style={{marginBottom:'10px'}} className="card">
      <img src={product.image} alt={product.name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <Button variant="primary" onClick={() => setIsOpen(true)}>
          Thêm vào giỏ hàng
        </Button>
      </div>

      {/* Modal với Bootstrap */}
      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered size="lg">
        <Modal.Header closeButton>
          <img
            src={product.image}
            alt={product.name}
            style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '5px' }}
          />
          <Modal.Title>{product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{product.description}</p>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Tỉ lệ đường:</Form.Label>
                  <Form.Select value={sugarLevel} onChange={e => setSugarLevel(e.target.value)}>
                    <option value="">Chọn tỉ lệ đường</option>
                    {(product.sugarLevel || []).map((level, index) => (
                      <option key={index} value={level}>{level}%</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Tỉ lệ đá:</Form.Label>
                  <Form.Select value={iceLevel} onChange={e => setIceLevel(e.target.value)}>
                    <option value="">Chọn tỉ lệ đá</option>
                    {(product.iceLevels || []).map((level, index) => (
                      <option key={index} value={level}>{level}%</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>

            <Row className="mb-3">
              <Col>
                <Form.Group>
                  <Form.Label>Size:</Form.Label>
                  <Form.Select
                    value={size}
                    onChange={e => {
                      setSize(e.target.value);
                      setIsValid(true); // Reset validity when a size is selected
                    }}
                    isInvalid={!isValid} // Indicate invalid selection
                    required
                  >
                    <option value="">Chọn size</option>
                    {(product.sizes || []).map((sizeOption, index) => (
                      <option key={index} value={sizeOption}>{sizeOption}</option>
                    ))}
                  </Form.Select>
                  <Form.Control.Feedback type="invalid">
                    Vui lòng chọn size.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group>
                  <Form.Label>Số lượng:</Form.Label>
                  <div className="d-flex align-items-center">
                    <Button
                      variant="outline-secondary"
                      onClick={decreaseQuantity}
                      style={{ marginRight: '5px', border: 'none', backgroundColor: 'transparent', color: '#007bff' }}
                    >
                      -
                    </Button>
                    <Form.Control
                      type="number"
                      value={quantity}
                      min="1"
                      onChange={e => setQuantity(e.target.value)}
                      style={{ width: '60px', textAlign: 'center' }}
                    />
                    <Button
                      variant="outline-secondary"
                      onClick={increaseQuantity}
                      style={{ marginLeft: '5px', border: 'none', backgroundColor: 'transparent', color: '#007bff' }}
                    >
                      +
                    </Button>
                  </div>
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Topping:</Form.Label>
              {(product.toppings || []).map((topping, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={topping}
                  value={topping}
                  onChange={e => {
                    if (e.target.checked) {
                      setToppings([...toppings, topping]);
                    } else {
                      setToppings(toppings.filter(t => t !== topping));
                    }
                  }}
                />
              ))}
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAddToCart}>
            Xác nhận thêm vào giỏ
          </Button>
          <Button variant="secondary" onClick={() => setIsOpen(false)}>
            Hủy
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ProductCard;
