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
          
        })
        .catch((err) => {
          console.error("Fetch error", err)
        })
    }
  })

  return (
    <div style={{cursor: cursorSvg, height: '100vh' }}>
      {/* <ParticleTrail/> */}
      <div className="animated-gradient-bg">

      </div>
      <div>
        <NavBar page={page} setPage={setPage}/>
      </div>
      <div className="homepage-container">
        
        {
          page==0 && imgData && <HomePage imgData={imgData}/>
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
    </div>
  );
}
