import { Route, Routes } from 'react-router-dom';

import { Dashboard, About, NotFound, Todo, User } from '@/pages';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib/router';
import { AppLayout } from '@/shared/ui/layouts';

export const Pages = () => (
  <Routes>
    <Route path={BASE_PATH} element={<AppLayout />}>
      <Route index element={<About />} />
      <Route path={PATH_PAGE.dashboard} element={<Dashboard />} />
      <Route path={PATH_PAGE.todo} element={<Todo />} />
      <Route path={PATH_PAGE.user} element={<User />} />

      <Route path='*' element={<NotFound />} />
    </Route>
  </Routes>
);
