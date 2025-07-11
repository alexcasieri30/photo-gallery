import React, { useState } from 'react';
import './newcarousel.css';
import { u } from 'framer-motion/client';

const NewCarousel = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;


  const selectImage = (index) => setCurrentIndex(index);

  return (
    <div className="new-carousel-container">
   
      <div className="main-image-wrapper">
        <img
          src={images[currentIndex]}
          alt={`Main ${currentIndex}`}
          className="main-image"
        />
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {[prevIndex, currentIndex, nextIndex].map((index) => (
          <div
            key={index}
            className={`thumbnail-wrapper ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => selectImage(index)}
          >
            <img
              src={images[index]}
              alt={`Thumb ${index}`}
              className="thumbnail-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewCarousel;
