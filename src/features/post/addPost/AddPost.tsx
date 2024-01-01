import { useMutation, useQueryClient } from '@tanstack/react-query';

import { addTodo } from '@/shared/api/endpoints';
import { IPost } from '@/shared/models';

const POSTS_QUERY_KEY = 'posts';

export const AddPost = () => {
  const queryClient = useQueryClient();

  const addPost = useMutation({
    mutationFn: (post: Omit<IPost, 'id'>) => addTodo(post),
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
