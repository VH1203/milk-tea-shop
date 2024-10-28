import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-fixed text-light py-4 mt-5">
      <div className="container text-center">
        <p>&copy; {new Date().getFullYear()} Milk Tea Shop. All Rights Reserved.</p>
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-facebook"></i> Facebook
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-light mx-2">
            <i className="fab fa-twitter"></i> Twitter
          </a>
        </div>
        <div className="contact-info mt-3">
          <p>Email: anhdvhe173485@fpt.edu.vn / tienpvhe176306@fpt.edu.vn</p>
          <p>Phone: 0329986416 / 0965529916</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
