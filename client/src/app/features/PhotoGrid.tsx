import "./photogrid.css";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function PhotoGrid({ imageData, theme }) {

    const [photos, setPhotos] = useState([])
    
    useEffect(() => {
        const entries = Object.entries(imageData);
        const skyPhotos = [];

        for (const [key, value] of entries) {
            if (key.split("-")[1] === theme) {
                skyPhotos.push(value);
            }
        }

        console.log("setting photos from grid: ", skyPhotos);
        setPhotos(skyPhotos); 

    }, [imageData, theme]);

    return (
        <div className="expand-row-container">
            
            <div className="expand-row">
                {
                    photos && photos.map((val) => {
                        return (<div key={val} className="expand-row-item">
                            <Image key={val} width={200} height={150} src={val} alt="My image"/>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}
