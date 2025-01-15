import React, { useState } from "react";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";

const SimpleCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images: string[] = [
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+1",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+2",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+3",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+4",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+5",
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/30 hover:bg-black/10 transition-all ease-in-out duration-500 text-white w-6 h-10 flex items-center justify-center"
      >
        <RxCaretLeft size={24}/>
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/30 hover:bg-black/10 transition-all ease-in-out duration-500 text-white w-6 h-10 flex items-center justify-center"
      >
        <RxCaretRight size={24}/>
      </button>
    </div>
  );
};

export default SimpleCarousel;
