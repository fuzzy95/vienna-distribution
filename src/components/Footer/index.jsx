import React from 'react';
import { APP_ICONS } from '../../configs/contentConfigs';

const Footer = () => {
  return (
    <>
      <div className='sm:mt-70 mt-33 bg-black sm:h-[397px] h-[658px] polygonBg px-5'>
        <div className='sm:max-w-[1266px] max-w-auto mx-auto flex flex-col items-center justify-end gap-13 pb-[30px] h-full'>
          <div className='flex justify-between items-center w-full '>
            <div className='flex sm:flex-row flex-col w-3/4  sm:justify-between justify-start sm:items-center items-start sm:gap-0 gap-4'>
              <div>
                <img className='md:flex hidden' src={APP_ICONS.LOGO} alt='' />
                <img
                  className='md:hidden flex'
                  src={APP_ICONS.LOGO_MOB}
                  alt=''
                />
              </div>

              <div>
                <ul className='flex flex-col items-start gap-4'>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Home
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Brands we work with
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Brand Gallery
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    News
                  </li>
                </ul>
              </div>

              <div>
                <ul className='flex flex-col items-start gap-4'>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    About
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Impressum
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Data Privacy
                  </li>
                  <li className='text-[15px] font-medium uppercase cursor-pointer'>
                    Contact
                  </li>
                </ul>
              </div>
            </div>

            <div className='flex sm:flex-row flex-col justify-center items-center gap-[15px]'>
              <img src={APP_ICONS.FACEBOOK} alt='' />
              <img src={APP_ICONS.INSTAGRAM} alt='' />
              <img src={APP_ICONS.TWITTER} alt='' />
            </div>
          </div>

          <div>
            <p className='text-[15px] text-[#ABABAB] sm:text-center text-left'>
              © 2020 Vienna Distribution GmbH. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
