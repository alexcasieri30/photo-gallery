

import { useEffect, useState } from 'react'
import "./photostack.css"


export default function PhotoStack({ imageData, theme }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [photos, setPhotos] = useState([])

    useEffect(() => {
        const entries = Object.entries(imageData);
        const themePhotos = [];
        const themeParts = theme.split("-")
        for (const [key, value] of entries) {

            if (key.split("-")[0] === themeParts[0] && key.split("-")[1] == themeParts[1]) {
                themePhotos.push(value);
            }
        }

        setPhotos(themePhotos); 

    }, [imageData, theme]);

  return (
    <div className="photostack-container">
      {photos.map((src, i) => {
        const isHovered = hoveredIndex === i
        const isSomeHovered = hoveredIndex !== null

        return (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            className={`
              stack-image absolute w-75 h-100 object-cover rounded-xl shadow-lg transition-all duration-300
              ${isHovered ? 'z-20 scale-110 translate-y-0 translate-x-0' : ''}
              ${!isHovered && isSomeHovered ? 'opacity-30 translate-y-20' : ''}
              ${!isSomeHovered ? `z-${i} translate-y-[${i * 20}px]` : ''}
            `}
            style={{
              left: `${i * 100}px`,
              zIndex: isHovered ? 20 : i,
            }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          />
        )
      })}
    </div>
  )
}
