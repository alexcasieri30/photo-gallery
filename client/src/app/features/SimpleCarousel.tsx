import React, { useState, useEffect } from "react";
import "./simplecarousel.css";

const SimpleCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  const [fade, setFade] = useState(true);
  useEffect(() => {
    setFade(false);
    const timeout = setTimeout(() => setFade(true), 50);
    return () => clearTimeout(timeout);
  }, [current]);

  return (
    <div className="simple-carousel">
      <div className="simple-carousel-main-image-wrapper">
        <img
          src={images[current]}
          alt={`Slide ${current}`}
          className={`simple-carousel-main-image ${fade ? "fade-in" : "fade-out"}`}
          key={images[current]}
        />
        <button className="simple-carousel-arrow left" onClick={prev} aria-label="Previous Slide">
          ‹
        </button>
        <button className="simple-carousel-arrow right" onClick={next} aria-label="Next Slide">
          ›
        </button>
      </div>
    </div>
  );
};

export default SimpleCarousel;
