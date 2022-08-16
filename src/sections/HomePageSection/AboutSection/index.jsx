import React from 'react';
import { APP_ICONS } from '../../../configs/contentConfigs';

const AboutSection = () => {
  return (
    <>
      <div className='w-full bg-primary md:h-[903px] h-[640px] flex justify-center items-center -skew-y-2 -mt-14 px-12 relative'>
        <div className='bg-primary h-[126px] w-[20px] absolute -top-13 skew-y-2' />
        <div className='sm:max-w-[1050px] max-w-auto mx-auto flex flex-col items-center gap-15 skew-y-2'>
          <div>
            <p className='text-center md:text-[57px] text-[32px] md:leading-[64px] leading-[32px] font-futuraLight font-light'>
              We design and present our products to your needs and wishes.
              Whether events, exhibitions, tastings and the like, we have a
              broad portfolio with which we can convince.
            </p>
          </div>

          <div className='flex justify-center items-center gap-[15px]'>
            <img src={APP_ICONS.FACEBOOK} alt='' />
            <img src={APP_ICONS.INSTAGRAM} alt='' />
            <img src={APP_ICONS.TWITTER} alt='' />
          </div>
        </div>
        <div className='bg-primary h-[126px] w-[20px] absolute -bottom-13 skew-y-2' />
      </div>
    </>
  );
};

export default AboutSection;
