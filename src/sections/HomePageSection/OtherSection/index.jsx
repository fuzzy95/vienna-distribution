import React from 'react';
import { APP_IMAGES } from '../../../configs/contentConfigs';
import OtherInfoComp from './OtherInfoComp';

const OtherSection = () => {
  return (
    <>
      <div className='w-full lg:h-[872px] h-auto lg:mt-[250px] mt-10 overflow-hidden'>
        <div className='flex justify-center items-center w-full'>
          <div className='lg:h-25 h-15 lg:w-[30px] w-5 bg-primary flex justify-center items-center mb-10' />
        </div>
        <div className=' h-full max-w-[1263px] mx-auto flex flex-col items-center gap-10'>
          {/* heading */}
          <div className='w-full flex justify-center'>
            <h1 className='lg:text-[73px] text-[43px] lg:leading-[73px] leading-[43px] uppercase text-center'>
              other things we are <br /> known for
            </h1>
          </div>

          <div className='overflow-hidden lg:mt-19 mt-8'>
            <div className='flex items-start gap-[30px] scrollbar-hide'>
              <OtherInfoComp
                img={APP_IMAGES.OTHER_ONE}
                title='New world whiskey'
              />
              <OtherInfoComp img={APP_IMAGES.OTHER_TWO} title='Gin Moment' />
              <OtherInfoComp img={APP_IMAGES.OTHER_THREE} title='Connoisseur' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherSection;
