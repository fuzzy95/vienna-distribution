import React from 'react';

const AgeInputField = ({
  label,
  subLabel,
  placeholder,
  value,
  onChange,
  min,
  max,
}) => {
  return (
    <>
      <div className='flex flex-col sm:w-44 w-24 relative'>
        <label className='text-[15px] uppercase pl-[30px] flex gap-1'>
          {label}
          <span className='sm:block hidden'>{subLabel}</span>{' '}
        </label>
        <div className='relative'>
          <input
            className='bg-transparent border-[2px] border-white relative z-10 h-15 sm:w-44 w-24 sm:px-[30px] px-5  text-white placeholder:text-transparent focus:outline-none focus:bg-bgMain focus:placeholder:text-white transition duration-150 ease-in-out'
            type='number'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            min={min}
            max={max}
          />
          <div className='absolute bg-primary h-15 sm:w-44 w-24 z-0 -mt-12 ml-3'></div>
        </div>
      </div>
    </>
  );
};

export default AgeInputField;
