import React from 'react';
import ReactDOM from 'react-dom/client'; // Thay đổi này
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-modal';

// Đặt phần tử ứng dụng cho react-modal
Modal.setAppElement('#root');

// Sử dụng createRoot để render ứng dụng
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
