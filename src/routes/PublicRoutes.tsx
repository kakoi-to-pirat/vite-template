import { Route, Routes } from 'react-router-dom';

import { AppLayout } from '@/layouts';
import { Dashboard, About, NotFound, Todo, User } from '@/pages';
import { baseUrl } from '@/routes/const';

export function PublicRoutes() {
  return (
    <Routes>
      <Route path={baseUrl} element={<AppLayout />}>
        <Route index element={<About />} />
        <Route path={`${baseUrl}/about`} element={<About />} />
        <Route path={`${baseUrl}/dashboard`} element={<Dashboard />} />
        <Route path={`${baseUrl}/todo`} element={<Todo />} />
        <Route path={`${baseUrl}/user`} element={<User />} />

        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
  );
}
