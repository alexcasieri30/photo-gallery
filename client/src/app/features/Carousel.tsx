'use client';
import React, { useEffect, useState } from 'react';
import './carousel.css';
import { motion, AnimatePresence } from "framer-motion";


export default function Carousel({ imageData }) {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([])

  useEffect(() => {
    if (images.length == 0){
      setImages(Object.values(imageData))
    }
  })

  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  return (
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-3xl shadow-2xl aspect-[4/3] bg-black">      
      <AnimatePresence>
        <motion.img
          key={images[index]}
          src={images[index]}
          alt={`Image ${index}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />

      {/* Buttons */}
      <button
        onClick={prev}
        className="button absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
      >
        ←
      </button>
      <button 
        onClick={next}
        className="button absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 text-black p-2 rounded-full shadow"
      >
        →
      </button>
    </div>
  );
}
