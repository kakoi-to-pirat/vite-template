import { AxiosResponse } from 'axios';

import { API } from '@/shared/api';

import { IPostDto } from './post.dto';

export const postAPI = {
  fetchPosts: async (): Promise<IPostDto[]> => {
    const { data }: AxiosResponse<IPostDto[]> = await API.get('/posts');
    return data;
  },

  addPost: ({
    text,
    createdAt,
  }: Omit<IPostDto, 'id'>): Promise<AxiosResponse> =>
    API.post('/posts', { text, createdAt }),

  removePost: ({ id }: IPostDto): Promise<AxiosResponse> =>
    API.delete(`/posts/${id}`),

  updatePost: ({ id, text }: IPostDto): Promise<AxiosResponse> =>
    API.put(`/posts/${id}`, { text }),
};
