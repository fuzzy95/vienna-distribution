import React from 'react';
import { APP_ICONS } from '../../../../configs/contentConfigs';

const NewsCardComp = ({ image, heading, details, key, date }) => {
  return (
    <>
      <div
        key={key}
        className='2xl:w-[402px] xl:w-[380px] lg:w-[320px] w-[309px] 2xl:h-[490px] lg:h-[430px] h-[309px] flex flex-col justify-end relative group overflow-hidden cursor-pointer transition duration-300 ease-in-out'
      >
        {/* img part */}
        <div className='absolute top-0'>
          <img
            className='scale-100 group-hover:scale-110 transition duration-300 ease-in-out object-cover'
            src={image}
            alt=''
          />
        </div>

        {/* text part */}
        <div className='absolute bg-gradient-to-t from-bgMain w-full lg:h-[273px] h-[160px] top-0 z-0' />
        <div
          className='absolute bg-white w-full 2xl:h-[219px]
        lg:h-[226px] h-[149px] bottom-0 z-0'
        />

        <div className='p-[10px] h-full relative'>
          <div className='relative text-bgMain h-full flex flex-col border-2 border-bgMain group-hover:border-primary transition duration-300 ease-in-out z-10'>
            {/* date part */}
            <div className='h-[273px] px-5 pt-5 pb-0  z-10 relative flex items-end'>
              <div className='text-white xl:text-lg text-base text-[13px] font-semibold '>
                <p className='-mb-2'>{date}</p>
              </div>
            </div>

            {/* header part */}
            <div className='lg:flex hidden flex-col justify-start h-[217px] p-5 relative z-30 bg-white'>
              <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                  <div className='w-7/12'>
                    <h1 className='xl:text-2xl text-lg text-[18px] font-bold lg:leading-6 leading-[18px]'>
                      {heading}
                    </h1>
                  </div>
                  <div className='flex items-center justify-end gap-[10px] w-5/12'>
                    <img src={APP_ICONS.FACEBOOK_SMALL} alt='' />
                    <img src={APP_ICONS.TWITTER_SMALL} alt='' />
                    <img src={APP_ICONS.LINKEDIN_SMALL} alt='' />
                  </div>
                </div>
                <div className='w-8 h-[2px] bg-bgMain mt-2' />
              </div>

              {/* para part */}
              <div className='mt-5'>
                <p className='text-lg leading-6'>{details}</p>
              </div>
            </div>

            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}

            {/* header mob part */}
            <div className='lg:hidden flex justify-start h-[149px] p-5 relative z-30 bg-white'>
              <div className='flex flex-col items-start justify-start w-10/12'>
                <div className=''>
                  <h1 className='lg:text-2xl text-[18px] font-bold lg:leading-6 leading-[18px]'>
                    {heading}
                  </h1>
                  <div className='w-8 h-[2px] bg-bgMain mt-2' />
                </div>
                <div className='mt-5'>
                  <p className='lg:text-lg text-base leading-[14px]'>
                    {details.substring(0, 45)}...
                  </p>
                </div>
              </div>

              {/* para part */}

              <div className='flex flex-col items-center justify-between gap-[10px] w-2/12'>
                <img src={APP_ICONS.FACEBOOK_SMALL} alt='' />
                <img src={APP_ICONS.TWITTER_SMALL} alt='' />
                <img src={APP_ICONS.LINKEDIN_SMALL} alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsCardComp;
