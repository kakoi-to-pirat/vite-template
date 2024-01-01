import { IPostData, RemovePost, UpdatePost } from '@/features';

export const Post = ({ data }: IPostData) => {
  return (
    <UpdatePost data={data}>
      <h3>{data.createdAt}</h3>
      <p>
        {data.id}, {data.text}
      </p>
      <RemovePost data={data} />
    </UpdatePost>
  );
};
