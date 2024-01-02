import { useQuery } from '@tanstack/react-query';

import { Post } from '@/entities';
import { AddPost } from '@/features';
import { fetchTodos } from '@/shared/api/endpoints/todo';
import TodoIcon from '@/shared/assets/icons/todo.svg?react';

import s from './Todo.module.css';

const POSTS_QUERY_KEY = 'posts';

export const Todo = () => {
  const { isLoading, error, data } = useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: fetchTodos,
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
            .map((post) => <Post key={post.id} data={post} />)}
      </div>
    </>
  );
};
