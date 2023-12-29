import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import DashboardIcon from '@/shared/assets/icons/dashboard.svg?react';
import viteLogo from '@/shared/assets/icons/logo.svg';
import MenuIcon from '@/shared/assets/icons/menu.svg?react';
import MenuOpenIcon from '@/shared/assets/icons/menu_open.svg?react';
import TodoIcon from '@/shared/assets/icons/todo.svg?react';
import { BASE_PATH, PATH_PAGE } from '@/shared/lib/router';

import s from './AppLayout.module.css';

import cn from 'classnames';

export function AppLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);

  return (
    <div
      className={cn(s.layout, { [s['layout--collapseNav']]: isCollapsedNav })}
    >
      <header className={cn(s.layout__header, s.header)}>
        <Link to={`${BASE_PATH}/`} className={s.header__logo}>
          <img src={viteLogo} alt='Vite logo' />
        </Link>
        <NavLink to={PATH_PAGE.user} className={s.header__info}>
          User
        </NavLink>
      </header>

      <nav className={s.layout__navigation}>
        <ul
          className={cn(s.navigation, {
            [s['navigation--collapse']]: isCollapsedNav,
          })}
        >
          <li>
            <a
              className={s.navigation__collapse}
              onClick={() => setIsCollapsedNav((prev) => !prev)}
            >
              {isCollapsedNav ? (
                <MenuOpenIcon className={s.navigation__icon} />
              ) : (
                <MenuIcon className={s.navigation__icon} />
              )}
            </a>
          </li>
          <li>
            <NavLink to={PATH_PAGE.dashboard} className={s.navigation__item}>
              <DashboardIcon className={s.navigation__icon} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={PATH_PAGE.todo} className={s.navigation__item}>
              <TodoIcon className={s.navigation__icon} />
              To-Do
            </NavLink>
          </li>
        </ul>
      </nav>

      <main className={cn(s.layout__main, s.main)}>
        <Outlet />
      </main>
    </div>
  );
}
