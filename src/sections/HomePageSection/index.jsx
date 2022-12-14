import React from 'react';
import AboutSection from './AboutSection';
import BrandGallerySection from './BrandGallerySection';
import HeroSection from './HeroSection';
import InfoSection from './InfoSection';
import NewsSection from './NewsSection';
import OtherSection from './OtherSection';
import ProductSection from './ProductSection';

const HomePageSection = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <NewsSection />
      <BrandGallerySection />
      <InfoSection />
      <OtherSection />
    </>
  );
};

export default HomePageSection;
