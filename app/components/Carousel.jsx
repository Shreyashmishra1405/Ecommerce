"use client";
import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="flex gap-2 px-2">
      <div className="flex flex-col items-center relative h-[90vh] w-full  cursor-pointer">
        {images.map((image, index) => (
          <div
            key={index}
            className={`object-cover transition-opacity ease-in-out duration-500  ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              fill
              className=""
              objectFit="cover"
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
