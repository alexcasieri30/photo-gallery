import "./photogrid.css";
import { useState, useEffect } from "react";
import Image from 'next/image';

export default function ExpandRow({ imageData }) {

    const [photos, setPhotos] = useState([])
    
    useEffect(() => {

        if (photos.length == 0){
            const photos = Object.values(imageData)
            setPhotos(photos)
        }

    })

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
