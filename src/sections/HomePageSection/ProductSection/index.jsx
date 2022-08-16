import React from 'react';
import CompHeader from '../../../components/CompHeader';
import { APP_ICONS, productList } from '../../../configs/contentConfigs';
import ProductImageComp from './ProductImageComp';

const ProductSection = () => {
  return (
    <>
      <div className='w-full lg:h-[790px] h-auto lg:mt-28 mt-20 px-5'>
        <div className='lg:max-w-[1266px] max-w-max lg:mx-auto mx-0 flex flex-col lg:items-center items-start'>
          <div className='w-full flex justify-center'>
            <CompHeader
              icon={APP_ICONS.PRODUCT}
              iconText='Beverages'
              title='Product'
              miscText='Rum, whiskey, vodka and more'
              subtitle='Range'
            />
          </div>
          <div className='flex flex-col w-full justify-center lg:items-center items-start gap-[30px] lg:mt-25 mt-10 overflow-hidden'>
            <div className='lg:grid lg:grid-cols-4 hidden w-full gap-[30px]'>
              {productList.map((item, index) => (
                <ProductImageComp
                  key={index}
                  image={item.img}
                  title={item.title}
                  to='#'
                />
              ))}
            </div>

            <div className='lg:hidden flex gap-3 overflow-x-scroll scrollbar-hide pl-3'>
              {productList.map((item, index) => (
                <ProductImageComp
                  key={index}
                  image={item.img}
                  title={item.title}
                  to='#'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSection;
