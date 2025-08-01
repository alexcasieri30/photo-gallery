
import Carousel from "../features/Carousel";
import NavigationOrb from "../features/NavigationOrb";
import PhotoGrid from "../features/PhotoGrid";
import PhotoStack from "../features/PhotoStack";
import RotatingRows from "../features/RotatingRows";
import TypewriterTitle from "../features/TypewriterTitle";

import { useState, useEffect } from "react";

import "./homepage.css";
import "../globals.css";
import SimpleCarousel from "../features/SimpleCarousel";
import ScrollGallery from "../features/ScrollGallery";
import SlidingText from "../features/text/SlidingText";
import { AnimatedText } from "../features/text/AnimatedText";

export default function HomePage({ page, setPage, imgData }) {
    
    const [images, setImages] = useState([])

    useEffect(() => {
        if (images.length == 0){
            setImages(Object.values(imgData))

        }
    })
    return (
        <div>
            <div className="homepage-container">
                <div className="homepage-item">
                    <TypewriterTitle text="> alexcasieri/photo-gallery" />
                </div>
                 <div className="homepage-item scrolldown-feature">
                    <NavigationOrb/>
                </div>
            </div>
            <div className="homepage-features">

                <div className="homepage-feature-section" id="chicago-city">
                    <div>
                        {
                            imgData && <PhotoStack imageData={imgData} theme="chicago-city"/>
                        }
                    </div>
                    <div className="see-more" style={{ position: 'relative', top: '500px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}>See more</div>
                    </div>
                </div>
                <div className="homepage-feature-section" id="monkeypod">
                    {
                        imgData && <Carousel imageData={imgData} theme="monkeypod"/>
                    }      
                    <div className="see-more" style={{ position: 'relative', top: '0px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}>See more</div>
                    </div>  
                </div>
                 <div className="homepage-feature-section" id="sky">
                    <div>
                        {
                            imgData && <PhotoGrid imageData={imgData} theme="sky"/> 
                        }
                    </div>
                    <div className="see-more" style={{ position: 'relative', top: '100px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}>See more</div>
                    </div>
                </div>
                <div className="homepage-feature-section">
                    {
                        imgData && <SimpleCarousel images={images} id=""/>
                    }
                    <div className="see-more" style={{ position: 'relative', top: '0px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}><AnimatedText text="See more"/></div>
                    </div>
                </div>
                <div className="homepage-feature-section" id="city">
                    {
                        imgData && <ScrollGallery imageData={imgData} theme="japan"/>
                    }
                    <div className="see-more" style={{ position: 'relative', top: '0px'}}>
                        <div className="see-more-text" onClick={() => setPage(2)}>See more</div>
                    </div>
                </div>
                <div style={{ height: "1000px" }}>
                
                </div>
            </div>
        </div>
    )
}