import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface IWithRouter {
  children: React.ReactNode;
}

export const WithRouter = ({ children }: IWithRouter): JSX.Element => (
  <BrowserRouter>
    <Suspense fallback={<>Загрузка...</>}>{children}</Suspense>
  </BrowserRouter>
);
