
import "./rotatingrows.css";
import { useState, useEffect } from "react";

export default function RotatingRows({ imageData, theme }){

    const [images, setImages] = useState([]);

    useEffect(() => {
        if (images.length == 0){
            for (const [key, value] of Object.entries(imageData)){
                if (key.split("-")[1] == theme){
                    setImages((prev) => [...prev, value])
                }
            }
        }
    })

    return (
        <div className="body">
            <div className="mask"/>
            <div className="slider">
            
                <div className="slide-track">
                    <div className="slide">
                        <div className="image">
                            <img
                            src={images[0]}
                            alt={`Main ${0}`}
                            className="main-image"
                            />
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image">
                            <img
                            src={images[1]}
                            alt={`Main ${1}`}
                            className="main-image"
                            />
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[2]}
                            alt={`Main ${2}`}
                            className="main-image"
                            /></div>
                    </div>
                    {/* <div className="slide">
                        <div className="image"><img
                            src={images[3]}
                            alt={`Main ${3}`}
                            className="main-image"
                            /></div>
                    </div> */}
                    <div className="slide">
                        <div className="image"><img
                            src={images[4]}
                            alt={`Main ${4}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[5]}
                            alt={`Main ${5}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[6]}
                            alt={`Main ${6}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[7]}
                            alt={`Main ${7}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[8]}
                            alt={`Main ${8}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[3]}
                            alt={`Main ${3}`}
                            className="main-image"
                            /></div>
                    </div>
                    {/* ---- */}
                    <div className="slide">
                        <div className="image">
                            <img
                            src={images[0]}
                            alt={`Main ${0}`}
                            className="main-image"
                            />
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image">
                            <img
                            src={images[1]}
                            alt={`Main ${1}`}
                            className="main-image"
                            />
                        </div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[2]}
                            alt={`Main ${2}`}
                            className="main-image"
                            /></div>
                    </div>
                    
                    <div className="slide">
                        <div className="image"><img
                            src={images[4]}
                            alt={`Main ${4}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[5]}
                            alt={`Main ${5}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[6]}
                            alt={`Main ${6}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[7]}
                            alt={`Main ${7}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[8]}
                            alt={`Main ${8}`}
                            className="main-image"
                            /></div>
                    </div>
                    <div className="slide">
                        <div className="image"><img
                            src={images[3]}
                            alt={`Main ${3}`}
                            className="main-image"
                            /></div>
                    </div>
                </div>
                {/* <div className="slide-track">
                    <div className="slide">
                        <div className="image">1</div>
                    </div>
                    <div className="slide">
                        <div className="image">2</div>
                    </div>
                    <div className="slide">
                        <div className="image">3</div>
                    </div>
                    <div className="slide">
                        <div className="image">4</div>
                    </div>
                    <div className="slide">
                        <div className="image">5</div>
                    </div>
                    <div className="slide">
                        <div className="image">6</div>
                    </div>
                    <div className="slide">
                        <div className="image">7</div>
                    </div>
                    <div className="slide">
                        <div className="image">8</div>
                    </div>
                    <div className="slide">
                        <div className="image">9</div>
                    </div>
    
                    <div className="slide">
                        <div className="image">1</div>
                    </div>
                    <div className="slide">
                        <div className="image">2</div>
                    </div>
                    <div className="slide">
                        <div className="image">3</div>
                    </div>
                    <div className="slide">
                        <div className="image">4</div>
                    </div>
                    <div className="slide">
                        <div className="image">5</div>
                    </div>
                    <div className="slide">
                        <div className="image">6</div>
                    </div>
                    <div className="slide">
                        <div className="image">7</div>
                    </div>
                    <div className="slide">
                        <div className="image">8</div>
                    </div>
                    <div className="slide">
                        <div className="image">9</div>
                    </div>
                </div> */}
            </div>

        </div>
    )
}