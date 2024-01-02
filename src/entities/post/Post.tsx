import dayjs from 'dayjs';

import { IPostData, RemovePost, UpdatePost } from '@/features';

import s from './Post.module.css';

export const Post = ({ data }: IPostData) => {
  return (
    <UpdatePost data={data}>
      <div className={s.post}>
        <h3>{dayjs(data.createdAt).locale('ru').format('HH:mm DD.MM.YYYY')}</h3>
        <p>
          {data.id}, {data.text}
        </p>
        <RemovePost data={data} />
      </div>
    </UpdatePost>
  );
};
