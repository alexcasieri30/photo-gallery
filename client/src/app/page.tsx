"use client";

import HomePage from "./pages/HomePage";
import "./globals.css"
import ParticleTrail from "./features/ParticleTrail";
import { useEffect, useState } from "react";
import AboutPage from "./pages/AboutPage";
import NavBar from "./NavBar";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import TechPage from "./pages/TechPage";
import Carousel from "./features/Carousel";
import PhotoStack from "./features/PhotoStack";
import ExpandRow from "./features/PhotoGrid";
import NewCarousel from "./features/NewCarousel";

export default function Home() { 
  const cursorSvg = `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTAiIGZpbGw9ImdyYXkiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+") 16 16, auto`;
  const [page, setPage] = useState(0)
  const [imgData, setImgData] = useState(null)
  const [images, setImages] = useState([])

  useEffect(() => {
    if (!imgData){
      fetch('http://localhost:5000/get_images')
        .then((res) => {
          console.log(res)
          if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
          return res.json();
        })
        .then((data) => {
          console.log("DATA: ", data)
          setImgData(data)
          setImages(Object.values(data))
        })
        .catch((err) => {
          console.error("Fetch error", err)
        })
    }
  })

  return (
    <div style={{cursor: cursorSvg, height: '100vh' }}>
      <div>
        <NavBar setPage={setPage}/>
      </div>
      <div className="homepage-container">
        <ParticleTrail/>
        {
          page==0 && <HomePage />
        }
        {
          page==1 && <AboutPage/>
        }
        {
          page==2 && <GalleryPage />
        }
        {
          page==3 && <ContactPage/>
        }
        {
          page==4 && <TechPage />
        }

      </div>
      <div className="homepage-feature-section">
        <div className="relative bg-gray-900 carousel-container-div overflow-hidden flex">
          <div className="absolute -top-20 -left-20 w-[400px] h-[400px] bg-purple-500 opacity-30 blur-3xl rounded-full z-0" />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-indigo-500 opacity-30 blur-3xl rounded-full z-0" />
          <div className="frost-background backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
            {
              imgData && <Carousel imageData={imgData}/>
            }
          </div>
        </div>
      </div>
      <div className="homepage-feature-section">
        <div>
          {
            imgData && <PhotoStack imageData={imgData}/>
          }
        </div>
      </div>
      <div className="homepage-feature-section">
        <div>
          { imgData && <ExpandRow imageData={imgData}/> }
        </div>
      </div>
      <div className="homepage-feature-section">
        {
          imgData && <NewCarousel images={images}/>
        }
      </div>
      <div style={{ height: "1000px" }}>

      </div>
          
          
    </div>
  );
}
