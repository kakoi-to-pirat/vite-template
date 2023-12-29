import { Link, NavLink } from 'react-router-dom';

import viteLogo from '@/shared/assets/icons/logo.svg';
import LogoutIcon from '@/shared/assets/icons/logout.svg?react';
import ProfileIcon from '@/shared/assets/icons/profile.svg?react';
import { BASE_PATH, PATH_PAGE } from '@/shared/config/paths';

import s from './Header.module.css';

import cn from 'classnames';

export interface IHeader {
  className?: string;
}

export const Header = ({ className }: IHeader) => (
  <header className={cn(className, s.header)}>
    <Link to={`${BASE_PATH}/`} className={s.header__logo}>
      <img src={viteLogo} alt='Vite logo' />
    </Link>
    <div className={s.header__info}>
      <NavLink to={PATH_PAGE.profile}>
        <ProfileIcon width='19px' height='19px' />
      </NavLink>
      <NavLink to={PATH_PAGE.logout}>
        <LogoutIcon />
      </NavLink>
    </div>
  </header>
);
