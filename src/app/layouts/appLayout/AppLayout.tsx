import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/header/ui/Header';
import { Sidebar } from '@/widgets/sidebar/ui/Sidebar';

import s from './AppLayout.module.css';

import cn from 'classnames';

export const AppLayout = () => {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);

  return (
    <div
      className={cn(s.layout, { [s['layout--collapseNav']]: isCollapsedNav })}
    >
      <Header className={s.layout__header} />
      <Sidebar
        className={s.layout__navigation}
        onCollapse={() => setIsCollapsedNav((prev) => !prev)}
      />

      <main className={cn(s.layout__main, s.main)}>
        <Outlet />
      </main>
    </div>
  );
};
