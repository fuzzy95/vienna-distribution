import React from 'react';
import { Link } from 'react-router-dom';
import { APP_ICONS } from '../../../configs/contentConfigs';
import { Icon } from '@iconify/react';
import InfoComp from './InfoComp';

const InfoSection = () => {
  return (
    <>
      <div className='w-full lg:h-[1090px] h-auto lg:mt-[150px] mt-20 px-5'>
        <div className='flex justify-center items-center w-full'>
          <div className='lg:h-25 h-15 lg:w-[30px] w-5 bg-primary flex justify-center items-center mb-10' />
        </div>
        <div className='max-w-[1266px] mx-auto flex flex-col items-center'>
          <div className='w-full flex justify-center'>
            <h1 className='lg:text-[73px] text-[43px] lg:leading-[73px] leading-[43px] uppercase text-center'>
              The best spirits, <br className='lg:flex hidden' /> Wherever{' '}
              <br className='lg:hidden flex' /> you might{' '}
              <br className='lg:flex hidden' /> need them.
            </h1>
          </div>

          <div className='flex items-start lg:mt-[150px] mt-15 overflow-y-scroll scrollbar-hide'>
            <InfoComp
              icon={APP_ICONS.GASTRONOMY}
              title='Gastronomy'
              details='Aangezien wij in de filosofie ‘merken bouw je in de horeca’ geloven, schieten wij daar met scherp. De juiste doelgroep op het juiste moment.'
            />
            <InfoComp
              icon={APP_ICONS.RETAIL}
              title='Retail'
              details='We zijn in elk segment thuis en bouwen graag samen aan structurele merk-en categorie. We bieden producten voor iedere consument.'
            />

            <InfoComp
              icon={APP_ICONS.EVENTS}
              title='Events'
              details='Evenementen en merken versterken elkaar. Op de evenementen waar wij actief zijn zorgen we dat onze merken bijdragen aan de totaalbeleving.'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSection;
