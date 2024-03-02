"use client";
import React, { useState, useEffect } from "react";

const images = [
  "/images/background2.jpg",
  "/images/background3.jpg",
  "/images/background5.png",
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(current => current === length - 1 ? 0 : current + 1);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, []);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden h-64 carousel-image">
    {images.map((image, index) => {
      return (
        <div
          className={`absolute transition-opacity duration-1000 ${index === current ? 'opacity-100' : 'opacity-0'}`}
          key={index}
          style={{ width: '100vw' }} 
        >
          {index === current && (
            <img src={image} alt={`Carousel Image ${index}`} className="object-contain h-full w-full carousel-image-img"/>
          )}
        </div>
      );
    })}
  </div>
  );
};

export default Carousel;
