import React from 'react';
import { Link } from 'react-router-dom';

const ProductImageComp = ({ key, image, title, to }) => {
  return (
    <>
      <div
        className='relative 2xl:w-73.5 xl:w-60 lg:w-56 2xl:h-45 lg:h-auto w-[135px] h-45 overflow-hidden group'
        key={key}
      >
        <div className='imgGradient'>
          <Link className='relative overflow-hidden' to={to}>
            <img
              className='lg:w-full w-[135px] lg:h-full h-45 transform duration-300 scale-100 group-hover:scale-110 object-cover'
              src={image}
              alt=''
            />
            <div className='absolute imgGradient w-full h-full top-0' />
          </Link>
        </div>
        <div className='absolute 2xl:-bottom-1 -bottom-0 cursor-pointer group-hover:bottom-3 group-hover:text-primary transition duration-300 ease-in-out '>
          <h1 className='2xl:text-[32px] lg:text-3xl text-xl leading-[41px] uppercase font-medium pl-7'>
            {title}
          </h1>
        </div>
      </div>
    </>
  );
};

export default ProductImageComp;
