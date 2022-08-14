import React from 'react';
import routePath from '../routePath';

const routes = [
  {
    path: routePath.AGE_VERIFICATION,
    exact: true,
    component: React.lazy(() => import('../../pages/AgeVerificationPage')),
  },
  {
    path: routePath.HOME,
    exact: true,
    component: React.lazy(() => import('../../pages/HomePage')),
  },
];

export default routes;
