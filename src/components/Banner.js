import React, { useEffect, useState } from 'react';
import './Banner.css'; // Import CSS cho banner

const Banner = () => {
  const images = [
    "Banner/a1.jpg",
    "Banner/a2.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000); 

    return () => clearInterval(interval); // Dọn dẹp khi component unmount
  }, [images.length]);

  return (
    <div className="banner">
      <img src={images[currentImageIndex]} className="img-fluid" alt="Banner" />
    </div>
  );
};

export default Banner;
