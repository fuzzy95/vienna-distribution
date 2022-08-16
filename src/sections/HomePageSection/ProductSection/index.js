import React from 'react';
import CompHeader from '../../../components/CompHeader';
import {
  APP_ICONS,
  APP_IMAGES,
  productList,
} from '../../../configs/contentConfigs';
import ProductImageComp from './ProductImageComp';

const ProductSection = () => {
  return (
    <>
      <div className='w-full h-[1020px] mt-28'>
        <div className='max-w-[1266px] mx-auto flex flex-col items-center'>
          <div className='w-full flex justify-center'>
            <CompHeader
              icon={APP_ICONS.PRODUCT}
              iconText='Beverages'
              title='Product'
              miscText='Rum, whiskey, vodka and more'
              subtitle='Range'
            />
          </div>

          <div className='flex flex-wrap gap-[30px] mt-25'>
            {productList.map((item, index) => (
              <ProductImageComp
                key={index}
                image={item.img}
                title={item.title}
                to='#'
              />
            ))}
          </div>

          <div className='h-25 w-[30px] bg-primary flex justify-center items-center mt-[150px]' />
        </div>
      </div>
    </>
  );
};

export default ProductSection;
