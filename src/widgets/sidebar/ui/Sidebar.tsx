import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import DashboardIcon from '@/shared/assets/icons/dashboard.svg?react';
import MenuIcon from '@/shared/assets/icons/menu.svg?react';
import MenuOpenIcon from '@/shared/assets/icons/menu_open.svg?react';
import TodoIcon from '@/shared/assets/icons/todo.svg?react';
import { PATH_PAGE } from '@/shared/lib';

import { ISidebar } from './Sidebar.h';
import s from './Sidebar.module.css';

import cn from 'classnames';

export const Sidebar = ({ className, onCollapse = () => null }: ISidebar) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <nav className={className}>
      <ul
        className={cn(s.navigation, {
          [s['navigation--collapse']]: isCollapsed,
        })}
      >
        <li>
          <a
            className={s.navigation__collapse}
            onClick={() => {
              setIsCollapsed((prev) => !prev);
              onCollapse();
            }}
          >
            {isCollapsed ? (
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
  );
};
