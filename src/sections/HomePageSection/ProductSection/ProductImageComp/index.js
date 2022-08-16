import React from 'react';
import { Link } from 'react-router-dom';

const ProductImageComp = ({ key, image, title, to }) => {
  return (
    <>
      <div className='relative' key={key}>
        <div className='imgGradient w-[294px] h-45 overflow-hidden'>
          <Link className='relative group  overflow-hidden' to={to}>
            <img
              className='w-full h-full transform duration-300 scale-100 group-hover:scale-110'
              src={image}
              alt=''
            />
            <div className='absolute imgGradient w-full h-full top-0' />
          </Link>
        </div>
        <div className='absolute -bottom-2 cursor-pointer'>
          <h1 className='text-[32px] leading-[41px] uppercase font-medium pl-7'>
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProductImageComp;
