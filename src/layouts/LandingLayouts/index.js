import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LandingLayouts = ({ children }) => {
  return (
    <>
      <Navbar />

      <div>{children}</div>

      <Footer />
    </>
  );
};

export default LandingLayouts;
