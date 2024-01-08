import { Navigate, useLocation } from 'react-router-dom';

import { PATH_PAGE } from '@/shared/lib';

export const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isAuth = true;

  if (!isAuth) {
    return <Navigate to={PATH_PAGE.login} state={{ from: location }} />;
  }

  return children;
};
