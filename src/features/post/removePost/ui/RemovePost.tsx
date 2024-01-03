import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IPost, IPostDto, postAPI } from '@/entities/post';

const POSTS_QUERY_KEY = 'posts';

export const RemovePost = ({ data }: IPost) => {
  const queryClient = useQueryClient();

  const removePost = useMutation({
    mutationFn: postAPI.removePost,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] }),
  });

  const onDeletePost = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    post: IPostDto,
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
