import dayjs from 'dayjs';

import { IPost } from '@/entities/post';

import s from './Post.module.css';

export const Post = ({ data, children }: IPost) => {
  return (
    <div className={s.post}>
      <h3>{dayjs(data.createdAt).locale('ru').format('HH:mm DD.MM.YYYY')}</h3>
      <p>
        {data.id}, {data.text}
      </p>
      {children}
    </div>
  );
};
