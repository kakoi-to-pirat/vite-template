import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/app/layouts';
import { WithQueryClient, WithRouter } from '@/app/providers';
import { AboutPage } from '@/pages/about';
import { DashboardPage } from '@/pages/dashboard';
import { NotFoundPage } from '@/pages/notFound';
import { ProfilePage } from '@/pages/profile';
import { TodoPage } from '@/pages/todo';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib';

export const App = (): JSX.Element => (
  <WithQueryClient>
    <WithRouter>
      <Routes>
        <Route path={BASE_PATH} element={<AppLayout />}>
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
