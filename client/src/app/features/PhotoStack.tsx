

import { useEffect, useState } from 'react'
import "./photostack.css"


export default function PhotoStack({ imageData }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    if (photos.length == 0){
        const photos = Object.values(imageData)
        setPhotos(photos)
    }
  })
  return (
    <div className="relative w-full h-[400px] max-w-3xl mx-auto">
      {photos.map((src, i) => {
        const isHovered = hoveredIndex === i
        const isSomeHovered = hoveredIndex !== null

        return (
          <img
            key={i}
            src={src}
            alt={`photo-${i}`}
            className={`
              stack-image absolute w-150 h-200 object-cover rounded-xl shadow-lg transition-all duration-300 cursor-pointer
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
