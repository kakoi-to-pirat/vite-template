import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IPostDto, postAPI } from '@/entities/post';

const POSTS_QUERY_KEY = 'posts';

export const AddPost = () => {
  const queryClient = useQueryClient();

  const addPost = useMutation({
    mutationFn: (post: Omit<IPostDto, 'id'>) => postAPI.addPost(post),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] }),
  });

  const onAddPost = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    const text = prompt();

    if (text) {
      addPost.mutate({ text, createdAt: new Date().toISOString() });
    }
  };

  const { isPending } = addPost;

  return (
    <button onClick={onAddPost} disabled={isPending}>
      {isPending ? 'Загрузка' : 'Добавить'}
    </button>
  );
};
