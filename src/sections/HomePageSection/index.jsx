import React from 'react';
import { APP_ICONS } from '../../configs/contentConfigs';

const HomePageSection = () => {
  return (
    <>
      <div className='bg-bgMain h-screen w-screen'>
        <img src={APP_ICONS.LOGO} alt='' />
        <h1 className='text-4xl text-white font-futura'>HomePage</h1>
      </div>
    </>
  );
};

export default HomePageSection;
