export const ModernCarouselCode = `
import React, { useEffect, useState } from "react";

const ModernCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+1",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+2",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+3",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+4",
    "https://placehold.co/600x400/f3f4f6/3498db?text=Slide+5",
  ];
  const autoPlayInterval = 5000;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);
    return () => clearInterval(interval);
  }, [images, autoPlayInterval]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{
          transform: \`translateX(-\${currentIndex * 100}%)\`,
        }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={image} alt="null" className="w-full h-80 object-cover" />
          </div>
        ))}
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 items-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={\`w-2.5 h-2.5 rounded-full transition-all ease-in-out duration-500 \${index === currentIndex ? "bg-primary" : "bg-primary/30 scale-75"}\`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ModernCarousel;
`;
