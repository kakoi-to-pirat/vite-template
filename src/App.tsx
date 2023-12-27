import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './layouts';
import { Dashboard, About, NotFound, Todo, User } from './pages';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<About />} />
          <Route path='about' element={<About />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='todo' element={<Todo />} />
          <Route path='user' element={<User />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
