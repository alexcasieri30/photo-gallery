import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';


type ImageData = Record<string, string>
type FadeInSectionProps = {
  imageData: ImageData;
};

export default function FadeInSection({ imageData } : FadeInSectionProps){
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-2000 ease-out ${
        inView ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div className="h-100 w-100">
        {
            imageData && Object.entries(imageData).map(([key, val]) => (
                <Image ref={ref} key={key} width={100} height={100} src={val} alt="My image"/>
            ))
        }
      </div>
    </div>
  );
};
