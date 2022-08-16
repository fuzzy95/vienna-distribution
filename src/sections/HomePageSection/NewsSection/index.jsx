import React from 'react';
import CompHeader from '../../../components/CompHeader';
import PrimaryButton from '../../../components/PrimaryButton';
import { APP_ICONS, newsCardContent } from '../../../configs/contentConfigs';
import NewsCardComp from './NewsCardComp';

const NewsSection = () => {
  return (
    <>
      <div className='w-full lg:h-[1120px] h-auto lg:mt-14 mt-10 px-5'>
        <div className='max-w-[1266px] h-full mx-auto flex flex-col items-center gap-10'>
          <div className='w-full flex justify-center'>
            <CompHeader
              icon={APP_ICONS.NEWS}
              iconText='News'
              title='Awesome'
              miscText='Find out everything about spirit drinks'
              subtitle='Stories'
            />
          </div>
          <div className='lg:flex hidden items-start gap-[30px]'>
            {newsCardContent.map((item, index) => (
              <NewsCardComp
                key={index}
                image={item.img}
                heading={item.heading}
                details={item.details}
                date={item.date}
              />
            ))}
          </div>

          <div className='lg:hidden flex items-start gap-[30px] pl-3 overflow-x-scroll scrollbar-hide lg:mt-25 mt-10'>
            {newsCardContent.map((item, index) => (
              <NewsCardComp
                key={index}
                image={item.img}
                heading={item.heading}
                details={item.details}
                date={item.date}
              />
            ))}
          </div>

          <div className='lg:mt-15 mt-10'>
            <PrimaryButton label='Read more Stories on our news page' />
          </div>

          <div className='lg:h-25 h-15 lg:w-[30px] w-5 bg-primary flex justify-center items-center lg:mt-[150px] mt-20' />
        </div>
      </div>
    </>
  );
};

export default NewsSection;
