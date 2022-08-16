import { Icon } from '@iconify/react';
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { APP_ICONS, navMenuList } from '../../configs/contentConfigs';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [clicked, setClicked] = useState(false);

  const menuVariants = {
    opened: {
      right: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.5,
      },
    },
    closed: {
      right: '100%',
    },
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      x: '100%',
    },
    closed: {
      opacity: 0,
      x: 0,
    },
  };

  return (
    <>
      <div className='bg-transparent nav_transparent_bg text-white flex items-center xl:h-45 lg:h-30 h-[62px] w-full relative z-40'>
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
            <button
              onClick={() => {
                setOpenNav(true);
              }}
            >
              <img src={APP_ICONS.HAMBURGER} alt='' />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        <motion.div
          initial={false}
          animate={{
            x: openNav ? 0 : '100%',
            opacity: 1,
          }}
          exit={{ x: openNav ? '100%' : 0 }}
          transition={{
            delay: 0.1,
            type: 'tween',
            default: { duration: 0.3 },
          }}
          className='h-screen w-full fixed z-50 bg-bgMain -mt-[62px] overflow-y-hidden pl-12 pr-5 pt-5'
        >
          <div className='w-full flex justify-end'>
            <button onClick={() => setOpenNav(false)}>
              <Icon className=' text-white text-2xl' icon='bi:arrow-right' />
            </button>
          </div>

          <div className='flex flex-col items-start gap-[46px]'>
            <div>
              <img src={APP_ICONS.LOGO_MOB} alt='' />
            </div>

            <div className='flex flex-col items-start gap-[15px]'>
              {navMenuList.map(items => (
                <NavLink
                  className=' text-[32px] leading-[64px]  border-b border-transparent hover:border-primary transition duration-150 ease-in-out uppercase'
                  activeStyle={{ borderBottom: '1px solid #54B3A1' }}
                  to={items.path}
                >
                  {items.title}
                </NavLink>
              ))}
            </div>

            <div className='flex items-center gap-8'>
              <img src={APP_ICONS.FACEBOOK_NAV} alt='' />
              <img src={APP_ICONS.INSTAGRAM_NAV} alt='' />
              <img src={APP_ICONS.TWITTER_NAV} alt='' />
            </div>

            <div>
              <p className='text-[15px] text-[#ABABAB] sm:text-center text-left'>
                © 2020 Vienna Distribution GmbH. All rights reserved.
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
