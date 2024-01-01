import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IPostData } from '@/features';
import { removeTodo } from '@/shared/api/endpoints';
import { IPost } from '@/shared/models';

const POSTS_QUERY_KEY = 'posts';

export const RemovePost = ({ data }: IPostData) => {
  const queryClient = useQueryClient();

  const removePost = useMutation({
    mutationFn: removeTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] }),
  });

  const onDeletePost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: IPost,
  ) => {
    e.stopPropagation();
    e.preventDefault();

    removePost.mutate(post);
  };

  const { isPending } = removePost;

  return (
    <button onClick={(e) => onDeletePost(e, data)} disabled={isPending}>
      {isPending ? 'Загрузка' : 'Удалить'}
    </button>
  );
};
