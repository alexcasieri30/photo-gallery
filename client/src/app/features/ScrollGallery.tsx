import React, { useEffect, useRef, useState } from 'react';
import './scrollgallery.css';

const ScrollPair = ({ leftSrc, rightSrc }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="scroll-pair">
      <div className={`scroll-image left ${visible ? 'visible' : ''}`}>
        <img src={leftSrc} alt="Left" />
      </div>
      {rightSrc && (
        <div className={`scroll-image right ${visible ? 'visible' : ''}`}>
          <img src={rightSrc} alt="Right" />
        </div>
      )}
    </div>
  );
};

const ScrollGallery = ({ imageData, theme }) => {
  const [themeImages, setThemeImages] = useState([]);

  useEffect(() => {
    const entries = Object.entries(imageData);
    const themePhotos = [];
    for (const [key, value] of entries) {
      if (key.split("-")[0] === theme) {
        themePhotos.push(value);
      }
    }
    setThemeImages(themePhotos);
  }, [imageData, theme]);

  // Group into pairs
  const imagePairs = [];
  for (let i = 0; i < themeImages.length; i += 2) {
    imagePairs.push([themeImages[i], themeImages[i + 1]]);
  }

  return (
    <div className="scroll-gallery">
      {imagePairs.map(([left, right], idx) => (
        <ScrollPair key={idx} leftSrc={left} rightSrc={right} />
      ))}
    </div>
  );
};

export default ScrollGallery;
