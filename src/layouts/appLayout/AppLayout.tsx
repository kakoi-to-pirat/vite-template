import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import AboutIcon from '@/assets/icons/about.svg?react';
import DashboardIcon from '@/assets/icons/dashboard.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import viteLogo from '@/assets/icons/logo.svg';
import MenuIcon from '@/assets/icons/menu.svg?react';
import MenuOpenIcon from '@/assets/icons/menu_open.svg?react';
import NotFoundIcon from '@/assets/icons/not-found.svg?react';
import TodoIcon from '@/assets/icons/todo.svg?react';
import { baseUrl } from '@/routes/const';

import s from './AppLayout.module.css';

import cn from 'classnames';

export function AppLayout() {
  const [isCollapsedNav, setIsCollapsedNav] = useState(false);

  return (
    <div
      className={cn(s.layout, { [s['layout--collapseNav']]: isCollapsedNav })}
    >
      <header className={cn(s.layout__header, s.header)}>
        <a className={s.header__logo} href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} alt='Vite logo' />
        </a>

        <NavLink to={`${baseUrl}/user`} className={s.header__info}>
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
            <NavLink to={baseUrl} className={s.navigation__item}>
              <HomeIcon className={s.navigation__icon} />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`${baseUrl}/about`} className={s.navigation__item}>
              <AboutIcon className={s.navigation__icon} />
              About
            </NavLink>
          </li>
          <li>
            <NavLink to={`${baseUrl}/dashboard`} className={s.navigation__item}>
              <DashboardIcon className={s.navigation__icon} />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to={`${baseUrl}/todo`} className={s.navigation__item}>
              <TodoIcon className={s.navigation__icon} />
              To-Do
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`${baseUrl}/nothing-here`}
              className={s.navigation__item}
            >
              <NotFoundIcon className={s.navigation__icon} />
              404
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
