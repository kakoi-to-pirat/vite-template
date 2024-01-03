import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IPost, IPostDto, QUERY_KEY, postAPI } from '@/entities/post';

export const RemovePost = ({ data }: IPost) => {
  const queryClient = useQueryClient();

  const removePost = useMutation({
    mutationFn: postAPI.removePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [QUERY_KEY] }),
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
