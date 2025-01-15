import React from "react";
import { globalStyles } from "../../global/globalStyles";
import ComponentsContainer from "../../components/others/ComponentsContainer";
import { ModernCarouselCode } from "../../components/carouselComponents/ModernCarousel/ModernCarouselCode";
import ModernCarousel from "../../components/carouselComponents/ModernCarousel/ModernCarousel";
import SimpleCarousel from "../../components/carouselComponents/SimpleCarousel/SImpleCarousel";
import { SimpleCarouselCode } from "../../components/carouselComponents/SimpleCarousel/SimpleCarouselCode";

const CarouselPage = () => {
  return (
    <div className={globalStyles.container2}>
      <h1 className={globalStyles.header}>Carousel components</h1>
      <div className="w-full flex flex-col gap-10">
        <ComponentsContainer
          title="Simple Carousel"
          code={SimpleCarouselCode}
          component={<SimpleCarousel />}
        />
        <ComponentsContainer
          title="Modern Carousel"
          code={ModernCarouselCode}
          component={<ModernCarousel />}
        />
      </div>
    </div>
  );
};

export default CarouselPage;
