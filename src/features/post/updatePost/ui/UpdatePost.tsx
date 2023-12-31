import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { IPostDto, postAPI } from '@/shared/api';
import { POSTS_KEY } from '@/shared/lib';

import s from './UpdatePost.module.css';

export interface IPostUpdate {
  data: IPostDto;
  children: React.ReactNode;
}

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
    mutationFn: (post: IPostDto) => postAPI.updatePost(post),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [POSTS_KEY] }),
  });

  const onUpdatePost = (post: IPostDto) => {
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
