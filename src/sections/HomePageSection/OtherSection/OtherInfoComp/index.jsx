import { Icon } from '@iconify/react';
import React from 'react';

const OtherInfoComp = ({ img, title }) => {
  return (
    <>
      <div className='relative 2xl:w-100 xl:w-88 lg:w-70 w-[232px] 2xl:h-120 lg:h-full h-[300px] group overflow-hidden'>
        <div>
          <img
            className='scale-100 group-hover:scale-110 transition duration-300 ease-in-out'
            src={img}
            alt=''
          />
        </div>
        <div className='p-5 h-full w-full absolute top-0'>
          <div className='p-3 h-full w-full border-2 border-transparent group-hover:border-primary transition duration-300 ease-in-out flex justify-between items-end'>
            <div className='w-full flex justify-between items-center lg:mb-0 mb-2'>
              <div className='w-2/3'>
                <div className='flex flex-col items-start gap-2'>
                  <h1 className=' uppercase lg:text-2xl text-lg font-semibold'>
                    {title}
                  </h1>
                  <div className='-mb-[14px] h-[2px] w-8 bg-primary block group-hover:hidden' />
                </div>
              </div>
              <div className='lg:hidden flex group-hover:flex transition duration-300 ease-in-out'>
                <Icon
                  className='lg:text-primary text-white text-2xl'
                  icon='bi:arrow-right'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherInfoComp;
