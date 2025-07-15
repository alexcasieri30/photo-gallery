'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

import './carousel.css';

const AnimatedCarousel = ({ imageData, theme }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    if (photos.length == 0){
      const newPhotos = [];
      for (const [key, value] of Object.entries(imageData)){
        if (key.split("-")[1] === theme){
          newPhotos.push(value);
        }
      }
      setPhotos(newPhotos)
    }
  })

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + photos.length) % photos.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper">
        <AnimatePresence custom={direction}>
          <motion.img
            key={photos[index]}
            src={photos[index]}
            alt={`Slide ${index}`}
            className="carousel-image"
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>

        <button onClick={() => paginate(-1)} className="carouse-nav-button left">←</button>
        <button onClick={() => paginate(1)} className="carousel-nav-button right">→</button>
      </div>

      <div className="carousel-thumbnails">
        {photos.map((img, i) => (
          <div
            key={i}
            className={`carousel-thumb-wrapper ${i === index ? 'carousel-active' : ''}`}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
          >
            <img src={img} alt={`Thumb ${i}`} className="carousel-thumb-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCarousel;
