import React from 'react';
import AboutSection from './AboutSection';
import HeroSection from './HeroSection';
import NewsSection from './NewsSection';
import ProductSection from './ProductSection';

const HomePageSection = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductSection />
      <NewsSection />
    </>
  );
};

export default HomePageSection;
