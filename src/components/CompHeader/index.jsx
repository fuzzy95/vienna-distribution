import React from 'react';

const CompHeader = ({ icon, iconText, title, miscText, subtitle }) => {
  return (
    <>
      <div className='w-[462px] uppercase flex flex-col items-center gap-6'>
        <div>
          <img className='sm:w-9 w-7 h-full' src={icon} alt='' />
        </div>

        {/* text part */}
        <div>
          <div>
            <p className='text-center sm:text-[15px] text-[13px]'>{iconText}</p>
          </div>
          <div className='flex justify-center'>
            <h1 className='font-bold sm:text-[57px] text-[32px] sm:leading-[73px] leading-[60px] px-3 text-center -mb-9 max-w-min bg-bgMain relative'>
              {title}
            </h1>
          </div>
          <div className='border-2 border-white sm:h-[115px] h-[79px] sm:w-[462px] w-[336px]'>
            <div className='flex justify-center items-center w-full h-full'>
              <p className='text-center sm:text-[15px] text-[13px]'>
                {miscText}
              </p>
            </div>
          </div>
          <div className='flex justify-center'>
            <h1 className='font-bold sm:text-[57px] text-[32px] sm:leading-[73px] leading-[60px] px-3 text-center -mt-9 bg-bgMain w-auto max-w-min'>
              {subtitle}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompHeader;
