// src/components/NewArrivalsCarousel.js"
"use client";
import React, { useState, useEffect } from 'react';

const NewArrivalsCarousel = ({ products }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % products.length);
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [products.length]);

  return (
    <div className="relative">
      {products.map((product, index) => (
        <div
          key={index}
          className={`carousel-item absolute transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={product.img}
            alt={product.title}
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <h3 className="mt-2 text-lg font-semibold">{product.title}</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewArrivalsCarousel;
