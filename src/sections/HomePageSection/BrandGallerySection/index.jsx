import React from 'react';
import CompHeader from '../../../components/CompHeader';
import PrimaryButton from '../../../components/PrimaryButton';
import { APP_ICONS, APP_IMAGES } from '../../../configs/contentConfigs';

const BrandGallerySection = () => {
  return (
    <>
      <div className='w-full lg:h-[1267px] h-auto lg:mt-[105px] mt-10'>
        <div className='flex justify-center items-center w-full'>
          <div className='lg:h-25 h-15 lg:w-[30px] w-5 bg-primary flex justify-center items-center mb-10' />
        </div>
        <div className='w-full h-full mx-auto flex flex-col items-center gap-10'>
          <div className='w-full flex justify-center'>
            <CompHeader
              icon={APP_ICONS.BRAND_GALLERY}
              iconText='Photo'
              title='Brand'
              miscText='Download premium images of beverage brands'
              subtitle='Gallery'
            />
          </div>

          <div className='mt-20 w-full flex lg:flex-row flex-col xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
            <div className='flex items-center xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
              <div>
                <img
                  className='w-72 2xl:h-[618px] h-auto'
                  src={APP_IMAGES.G_ONE}
                  alt=''
                />
              </div>
              <div className='flex flex-col items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                <div className='flex items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                  <div>
                    <img src={APP_IMAGES.G_TWO} alt='' />
                  </div>
                  <div>
                    <img src={APP_IMAGES.G_THREE} alt='' />
                  </div>
                </div>
                <div className='flex items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                  <div>
                    <img src={APP_IMAGES.G_FOUR} alt='' />
                  </div>
                  <div>
                    <img src={APP_IMAGES.G_FIVE} alt='' />
                  </div>
                </div>
              </div>
            </div>

            <div className='flex items-center xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
              <div className='flex flex-col items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                <div className='flex items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                  <div>
                    <img src={APP_IMAGES.G_SIX} alt='' />
                  </div>
                  <div>
                    <img src={APP_IMAGES.G_SEVEN} alt='' />
                  </div>
                </div>
                <div className='flex items-start xl:gap-[30px] lg:gap-[15px] gap-[10px]'>
                  <div>
                    <img src={APP_IMAGES.G_EIGHT} alt='' />
                  </div>
                  <div>
                    <img src={APP_IMAGES.G_NINE} alt='' />
                  </div>
                </div>
              </div>
              <div>
                <img src={APP_IMAGES.G_TEN} alt='' />
              </div>
            </div>
          </div>

          <div className='lg:mt-15 mt-10'>
            <PrimaryButton label='Take me to the brand gallery' />
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandGallerySection;
