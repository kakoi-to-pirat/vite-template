import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { updateTodo } from '@/shared/api/endpoints';
import { IPost } from '@/shared/models';

const POSTS_QUERY_KEY = 'posts';

export type IPostUpdate = {
  data: IPost;
  children: React.ReactNode;
};

export const UpdatePost = ({ data, children }: IPostUpdate) => {
  const [height, setHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const elementRef = useRef<any>(null);

  useEffect(() => {
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
    <div onClick={() => onUpdatePost(data)} ref={elementRef}>
      {isPending ? (
        <div
          style={{
            height,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#ddd',
          }}
        >
          Загрузка
        </div>
      ) : (
        children
      )}
    </div>
  );
};
