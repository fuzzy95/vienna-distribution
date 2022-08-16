import React from 'react';
import { NavLink } from 'react-router-dom';
import { APP_ICONS, navMenuList } from '../../configs/contentConfigs';

const Navbar = () => {
  return (
    <>
      <div className='bg-transparent nav_transparent_bg text-white flex items-center xl:h-45 lg:h-30 h-[62px] w-full relative z-50'>
        <div className='mx-auto max-w-[1238px] flex items-center justify-between w-full px-4'>
          <div className='lg:flex hidden'>
            <img
              className='xl:flex hidden'
              width='149px'
              height='130px'
              src={APP_ICONS.LOGO}
              alt=''
            />
            <img
              className='xl:hidden lg:flex hidden '
              width='240px'
              height='50px'
              src={APP_ICONS.LOGO_SCROLL_HOME}
              alt=''
            />
            <img
              className='lg:hidden flex'
              src={APP_ICONS.LOGO_MOB_HOME}
              alt=''
            />
          </div>
          <div className='lg:hidden flex'>
            <img className='flex' src={APP_ICONS.LOGO_MOB_HOME} alt='' />
          </div>

          <div className='lg:flex hidden items-center xl:gap-[54px] lg:gap-[20px] gap-[15px]'>
            <div className='flex items-center xl:gap-[50px] lg:gap-[16px] gap-[11px]'>
              {navMenuList.map(items => (
                <NavLink
                  className='xl:text-[17px] lg:text-[15px] text-[13px] leading-[22px] border-b border-transparent hover:border-primary transition duration-150 ease-in-out uppercase'
                  activeStyle={{ borderBottom: '1px solid #54B3A1' }}
                  to={items.path}
                >
                  {items.title}
                </NavLink>
              ))}
            </div>

            <div className='flex items-center lg:gap-6 gap-2'>
              <img src={APP_ICONS.FACEBOOK_NAV} alt='' />
              <img src={APP_ICONS.INSTAGRAM_NAV} alt='' />
              <img src={APP_ICONS.TWITTER_NAV} alt='' />
            </div>
          </div>

          <div className='lg:hidden flex'>
            <img src={APP_ICONS.HAMBURGER} alt='' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
