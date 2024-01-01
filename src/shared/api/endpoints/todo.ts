import { AxiosResponse } from 'axios';

import { API } from '@/shared/api';
import { IPost } from '@/shared/models';

export const fetchTodos = async (): Promise<IPost[]> => {
  const { data }: AxiosResponse<IPost[]> = await API.get('/posts');
  return data;
};

export const addTodo = ({
  text,
  createdAt,
}: Omit<IPost, 'id'>): Promise<AxiosResponse> =>
  API.post('/posts', { text, createdAt });

export const removeTodo = ({ id }: IPost): Promise<AxiosResponse> =>
  API.delete(`/posts/${id}`);

export const updateTodo = ({ id, text }: IPost): Promise<AxiosResponse> =>
  API.put(`/posts/${id}`, { text });
