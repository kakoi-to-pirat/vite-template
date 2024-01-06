import { AddPost } from '@/features/post';
import DashboardIcon from '@/shared/assets/icons/dashboard.svg?react';
import { Chart } from '@/widgets/chart';
import { Todo } from '@/widgets/todo';

import s from './Page.module.css';

export const DashboardPage = () => (
  <>
    <div className={s.dashboard__header}>
      <div className={s.dashboard__headerTitle}>
        <DashboardIcon />
        <h2>Dashboard page</h2>
      </div>
      <AddPost />
    </div>

    <div className={s.dashboard__container}>
      <Chart />
      <Todo className={s.dashboard__todos} withHeader={false} />
    </div>
  </>
);
