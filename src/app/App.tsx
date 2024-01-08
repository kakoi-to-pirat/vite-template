import { Route, Routes } from 'react-router-dom';

import { AppLayout, PrivateLayout } from '@/app/layouts';
import { WithQueryClient, WithRouter } from '@/app/providers';
import { AboutPage } from '@/pages/about';
import { DashboardPage } from '@/pages/dashboard';
import { LoginPage } from '@/pages/login';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { TodoPage } from '@/pages/todo';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib';

export const App = (): JSX.Element => (
  <WithQueryClient>
    <WithRouter>
      <Routes>
        <Route path={PATH_PAGE.login} element={<LoginPage />} />

        <Route
          path={BASE_PATH}
          element={
            <PrivateLayout>
              <AppLayout />
            </PrivateLayout>
          }
        >
          <Route index element={<AboutPage />} />
          <Route path={PATH_PAGE.dashboard} element={<DashboardPage />} />
          <Route path={PATH_PAGE.todo} element={<TodoPage />} />
          <Route path={PATH_PAGE.profile} element={<ProfilePage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </WithRouter>
  </WithQueryClient>
);
