import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { updateTodo } from '@/shared/api/endpoints';
import { IPost } from '@/shared/models';

import s from './updatePost.module.css';

const POSTS_QUERY_KEY = 'posts';

export type IPostUpdate = {
  data: IPost;
  children: React.ReactNode;
};

export const UpdatePost = ({ data, children }: IPostUpdate) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementRef = useRef<any>(null);

  useEffect(() => {
    setWidth(elementRef?.current?.offsetWidth);
    setHeight(elementRef?.current?.offsetHeight);
  }, []);

  const queryClient = useQueryClient();

  const updatePost = useMutation({
    mutationFn: (post: IPost) => updateTodo(post),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] }),
  });

  const onUpdatePost = (post: IPost) => {
    const text = prompt();
    if (text) updatePost.mutate({ ...post, text });
  };

  const { isPending } = updatePost;

  return (
    <div ref={elementRef} onClick={() => onUpdatePost(data)}>
      {isPending && (
        <div className={s.updatingPost} style={{ width, height }}>
          Загрузка...
        </div>
      )}
      {children}
    </div>
  );
};
