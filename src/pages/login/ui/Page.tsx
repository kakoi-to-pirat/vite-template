import { Navigate } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';

import s from './Page.module.css';

export const LoginPage = () => {
  // In PrivateLayout too
  const isAuth = true;

  if (isAuth) {
    return <Navigate to={PATH_PAGE.root} />;
  }

  return <div className={s.auth}>Login page</div>;
};
