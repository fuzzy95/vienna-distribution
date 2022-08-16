import React, { useState } from 'react';
import moment from 'moment';
import { Link, useHistory } from 'react-router-dom';
import PrimaryButton from '../../components/PrimaryButton';
import { APP_ICONS } from '../../configs/contentConfigs';
import routePath from '../../routes/routePath';
import AgeInputField from './AgeInputField';

const AgeVerificationSection = () => {
  let history = useHistory();
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const handleValidAge = () => {
    if (moment(new Date()).format('L').split('/').pop() - year >= 21) {
      history.push(routePath.HOME);
    }

    return '';
  };

  return (
    <div className='w-screen h-screen bg-bgMain text-white flex justify-center font-futura px-10'>
      <div className='flex flex-col items-center justify-between w-full h-full md:pt-10 pt-5 pb-[10px]'>
        <div className='flex flex-col items-center sm:gap-10 gap-5'>
          <div className='lg:h-[162px] h-[10/12] lg:w-[186px] w-[10/12]'>
            <img className='lg:flex hidden' src={APP_ICONS.LOGO} alt='' />

            <img className='lg:hidden flex' src={APP_ICONS.LOGO_MOB} alt='' />
          </div>

          <div>
            <p className='md:text-2xl text-lg text-center font-normal'>
              Welcome! In order to continue your visit{' '}
              <br className='sm:hidden flex' /> on Vienna distribution, you{' '}
              <br className='md:flex hidden' />
              must be of <br className='sm:hidden flex' /> legal drinking age.
            </p>
          </div>
        </div>

        {/* center section */}
        <div className='flex flex-col gap-15'>
          <div className='flex flex-col sm:gap-[42px] gap-[22px] relative'>
            <div>
              <h1 className='sm:text-[32px] text-2xl text-center uppercase font-semibold'>
                When were you born?
              </h1>
            </div>

            {/* form */}
            <div className='flex sm:gap-[30px] gap-[21px] justify-center relative'>
              <AgeInputField
                value={day}
                onChange={e => setDay(e.target.value)}
                label='DAY'
                subLabel='(DD)'
                min={1}
                max={31}
              />
              <AgeInputField
                value={month}
                onChange={e => setMonth(e.target.value)}
                label='Month'
                subLabel='(MM)'
                min='1'
                max='12'
              />
              <AgeInputField
                value={year}
                onChange={e => setYear(e.target.value)}
                label='year'
                subLabel='(YYYY)'
                min='1900'
              />
            </div>
          </div>

          <div className='flex justify-center'>
            {/* <Link to={routePath.HOME}> */}
            <PrimaryButton
              onClick={handleValidAge}
              label='I am of legal drinking age'
            />
            {/* </Link> */}
          </div>
        </div>

        {/* bottm section */}
        <div className='flex flex-col gap-10'>
          <div className='md:flex hidden justify-center items-center gap-[15px]'>
            <img src={APP_ICONS.FACEBOOK} alt='' />
            <img src={APP_ICONS.INSTAGRAM} alt='' />
            <img src={APP_ICONS.TWITTER} alt='' />
          </div>

          <div className='xl:h-20 h-auto w-auto border border-white'>
            <div className='flex sm:flex-row flex-col items-center sm:gap-10 gap-[11px] p-5'>
              <div className='md:w-10/12 w-full'>
                <p className='text-[15px] sm:leading-[20px] leading-[18px] font-thin'>
                  We use cookies on our website to give you the most relevant
                  experience. By clicking “Accept”, you consent{' '}
                  <br className='xl:flex hidden' /> to the use of ALL cookies.
                  Alternatively, you may click “Cookie Settings” to provide a
                  controlled consent.
                </p>
              </div>

              <div className='sm:w-auto w-full flex md:flex-row sm:flex-col flex-row sm:items-center sm:justify-center justify-start gap-[10px]'>
                <div>
                  <button className='text-[12px] uppercase h-[27px] px-[15px] flex justify-center items-center bg-primary border border-primary rounded-[27px]'>
                    Accept
                  </button>
                </div>

                <div>
                  <button className='w-34 text-[12px] uppercase h-[27px] px-[15px] flex justify-center items-center bg-bgMain border border-white rounded-[27px]'>
                    Cookie Settings
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeVerificationSection;
