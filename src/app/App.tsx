import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/app/layouts';
import { WithQueryClient, WithRouter } from '@/app/providers';
import { Dashboard, About, NotFound, Todo, Profile } from '@/pages';
import { BASE_PATH, PATH_PAGE } from '@/shared/config';

export const App = (): JSX.Element => (
  <WithQueryClient>
    <WithRouter>
      <Routes>
        <Route path={BASE_PATH} element={<AppLayout />}>
          <Route index element={<About />} />
          <Route path={PATH_PAGE.dashboard} element={<Dashboard />} />
          <Route path={PATH_PAGE.todo} element={<Todo />} />
          <Route path={PATH_PAGE.profile} element={<Profile />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </WithRouter>
  </WithQueryClient>
);
