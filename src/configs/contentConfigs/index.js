import routePath from '../../routes/routePath';

export const APP_ICONS = Object.freeze({
  LOGO: '/icons/viennaLogo.svg',
  LOGO_MOB: '/icons/viennaLogoMob.svg',
  LOGO_SCROLL_HOME: '/icons/logo-onerow.svg',
  LOGO_MOB_HOME: '/icons/mobLogo.svg',
  HAMBURGER: '/icons/hamburger.svg',
  FACEBOOK: '/icons/Facebook.svg',
  INSTAGRAM: '/icons/Instagram.svg',
  TWITTER: '/icons/Twitter.svg',
  FACEBOOK_SMALL: '/icons/FacebookSmall.svg',
  TWITTER_SMALL: '/icons/TwitterSmall.svg',
  LINKEDIN_SMALL: '/icons/LinkedinSmall.svg',
  FACEBOOK_NAV: '/icons/FacebookNav.svg',
  INSTAGRAM_NAV: '/icons/InstagramNav.svg',
  TWITTER_NAV: '/icons/TwitterNav.svg',
  PRODUCT: '/icons/productIcon.svg',
  NEWS: '/icons/newsIcon.svg',
  BRAND_GALLERY: '/icons/brandGalleryIcon.svg',
  GASTRONOMY: '/icons/gastronomy.svg',
  RETAIL: '/icons/retail.svg',
  EVENTS: '/icons/events.svg',
});

export const APP_IMAGES = Object.freeze({
  HERO_BG: '/images/heroImage.png',
  BAIJU: '/images/baiju.png',
  RUM: '/images/rum.png',
  WHISKEY: '/images/whiskey.png',
  GIN: '/images/gin.png',
  VODKA: '/images/vodka.png',
  LIQUOR: '/images/liquor.png',
  BITTER: '/images/bitter.png',
  ATOMIC: '/images/atomic.png',
  WHISKEY_BOMB: '/images/whiskeyBomb.png',
  PARTY: '/images/party.png',
  G_ONE: '/images/gallery1.png',
  G_TWO: '/images/gallery2.png',
  G_THREE: '/images/gallery3.png',
  G_FOUR: '/images/gallery4.png',
  G_FIVE: '/images/gallery5.png',
  G_SIX: '/images/gallery6.png',
  G_SEVEN: '/images/gallery7.png',
  G_EIGHT: '/images/gallery8.png',
  G_NINE: '/images/gallery9.png',
  G_TEN: '/images/gallery10.png',
  OTHER_ONE: '/images/whiskey_Image_minify.png',
  OTHER_TWO: '/images/whiskey_Image_minify-1.png',
  OTHER_THREE: '/images/whiskey_Image_minify-2.png',
});

export const navMenuList = [
  {
    title: 'Home',
    path: routePath.HOME,
  },
  {
    title: 'Brands We Work With',
    path: routePath.BRANDS_WE_WORK_WITH,
  },
  {
    title: 'Brand Gallery',
    path: routePath.BRAND_GALLERY,
  },
  {
    title: 'News',
    path: routePath.NEWS,
  },
  {
    title: 'About Us',
    path: routePath.ABOUT_US,
  },
  {
    title: 'Contact',
    path: routePath.CONTACT,
  },
];

export const productListOne = [
  {
    img: APP_IMAGES.BAIJU,
    title: 'Baiju',
  },
  {
    img: APP_IMAGES.RUM,
    title: 'Rum',
  },
  {
    img: APP_IMAGES.WHISKEY,
    title: 'Whiskey',
  },
  {
    img: APP_IMAGES.GIN,
    title: 'Gin',
  },
];

export const productListTwo = [
  {
    img: APP_IMAGES.VODKA,
    title: 'Vodka',
  },
  {
    img: APP_IMAGES.LIQUOR,
    title: 'Liquor',
  },
  {
    img: APP_IMAGES.BITTER,
    title: 'Bitter',
  },
];

export const productList = [
  {
    img: APP_IMAGES.BAIJU,
    title: 'Baiju',
  },
  {
    img: APP_IMAGES.RUM,
    title: 'Rum',
  },
  {
    img: APP_IMAGES.WHISKEY,
    title: 'Whiskey',
  },
  {
    img: APP_IMAGES.GIN,
    title: 'Gin',
  },
  {
    img: APP_IMAGES.VODKA,
    title: 'Vodka',
  },
  {
    img: APP_IMAGES.LIQUOR,
    title: 'Liquor',
  },
  {
    img: APP_IMAGES.BITTER,
    title: 'Bitter',
  },
];

export const newsCardContent = [
  {
    img: APP_IMAGES.WHISKEY_BOMB,
    date: '20 FEB 2021',
    heading: 'Whiskey bomb (2nd edition)',
    details:
      'Yeah – we’ll have free shots for everybody, so come and join us! An awesome DJ will mix like in good old times using vinyls…',
  },
  {
    img: APP_IMAGES.ATOMIC,
    date: '03 FEB 2021',
    heading: 'Second atomic Event title',
    details:
      'Yeah – we’ll have free shots for everybody, so come and join us! An awesome DJ will mix like in good old times using vinyls…',
  },
  {
    img: APP_IMAGES.PARTY,
    date: '12 JAN 2021',
    heading: 'Headshot party concert',
    details:
      'Yeah – we’ll have free shots for everybody, so come and join us! An awesome DJ will mix like in good old times using vinyls…',
  },
];
