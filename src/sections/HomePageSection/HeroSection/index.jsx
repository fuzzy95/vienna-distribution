import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';

const HeroSection = () => {
  return (
    <>
      <div className='w-full xl:h-[1107px] h-screen xl:-mt-45 lg:-mt-30 -mt-[62px] bg-bgMain bg_image relative '>
        <div className='absolute md:bg-transparent bg-[#00000091] h-full w-full' />
        <div className='relative z-10 mx-auto max-w-[1348px] flex flex-col items-start justify-center xl:h-full h-screen px-4'>
          {/* hero text */}
          <div className='flex flex-col gap-[30px] h-97 md:w-[728px] w-auto p-[40px] bg-gradient-to-r md:from-bgMain from-transparent relative'>
            <div className='relative'>
              <h1 className='md:text-[100px] text-[57px] md:leading-[100px] leading-[55px]'>
                Drink less, <br /> Drin
                <span className='bg-primary'>k better.</span>
              </h1>
              <div className='absolute bg-primary h-10 w-1/2 -z-10 right-0'></div>
            </div>

            <div>
              <PrimaryButton label='Find Out More' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
