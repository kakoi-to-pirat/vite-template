import { useQuery } from '@tanstack/react-query';

import { Post } from '@/entities/post';
import { AddPost, UpdatePost, RemovePost } from '@/features/post';
import { postAPI } from '@/shared/api';
import TodoIcon from '@/shared/assets/icons/todo.svg?react';
import { POSTS_KEY } from '@/shared/lib';

import s from './Todo.module.css';

export const Todo = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: [POSTS_KEY],
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
              <UpdatePost key={post.id} data={post}>
                <Post data={post}>
                  <RemovePost data={post} />
                </Post>
              </UpdatePost>
            ))}
      </div>
    </>
  );
};
