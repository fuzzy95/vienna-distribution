import { Icon } from '@iconify/react';
import React from 'react';
import { Link } from 'react-router-dom';

const InfoComp = ({ icon, title, details }) => {
  return (
    <>
      <div className='lg:border-l-2 border-l-none border-white p-[30px] flex flex-col items-start justify-between lg:gap-15 gap-8 lg:min-w-0 min-w-[222px] lg:min-h-[680px] min-h-[400px] '>
        <div className='flex flex-col lg:gap-15 gap-8'>
          <div>
            <img
              className='lg:w-48 w-[170px] lg:h-48 h-[160px]'
              src={icon}
              alt=''
            />
          </div>

          <div className='flex flex-col items-start'>
            <div>
              <h1 className='lg:text-[32px] text-2xl leading-6 uppercase'>
                {title}
              </h1>
              <div className='h-[2px] w-8 bg-primary mt-2' />
            </div>

            <div className='lg:mt-8 mt-5 lg:max-w-[315px] max-w-[220px]'>
              <p className='lg:text-2xl text-lg leading-6 text-[#f5f5f5]'>
                {details}
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-end justify-start flex-1'>
          <Link
            className='lg:text-lg text-[15px] flex items-center justify-start gap-2 text-[#EAEAEA] hover:text-primary transition duration-300 ease-in-out'
            to='#'
          >
            <span>Find out more</span> <Icon icon='bi:arrow-right' />
          </Link>
        </div>
      </div>
    </>
  );
};

export default InfoComp;
