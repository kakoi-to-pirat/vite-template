import { useQuery } from '@tanstack/react-query';

import { Post, postAPI } from '@/entities/post';
import { AddPost, UpdatePost, RemovePost } from '@/features/post';
import TodoIcon from '@/shared/assets/icons/todo.svg?react';

import s from './Page.module.css';

const POSTS_QUERY_KEY = 'posts';

export const TodoPage = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: postAPI.fetchPosts,
  });

  if (isLoading) return <p>Загрузка...</p>;

  if (error) return <p>Ошибка: {error.message}</p>;

  return (
    <>
      <div className={s.todoHeader}>
        <div className={s.todoHeader__title}>
          <TodoIcon /> <h2>Список различных дел</h2>
        </div>

        <AddPost />
      </div>

      <div>
        {data &&
          data
            .sort((a, b) => b.id - a.id)
            .map((post) => (
              <UpdatePost data={post}>
                <Post key={post.id} data={post}>
                  <RemovePost data={post} />
                </Post>
              </UpdatePost>
            ))}
      </div>
    </>
  );
};
