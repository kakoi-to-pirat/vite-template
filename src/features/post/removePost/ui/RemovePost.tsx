import { useMutation, useQueryClient } from '@tanstack/react-query';

import { IPost } from '@/entities/post';
import { IPostDto, postAPI } from '@/shared/api';
import { POSTS_KEY } from '@/shared/lib';

export const RemovePost = ({ data }: IPost) => {
  const queryClient = useQueryClient();

  const removePost = useMutation({
    mutationFn: postAPI.removePost,
    onSuccess: () => queryClient.invalidateQueries({ queryKey: [POSTS_KEY] }),
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
