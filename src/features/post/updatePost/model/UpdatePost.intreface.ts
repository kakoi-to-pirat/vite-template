import { IPostDto } from '@/entities/post';

export interface IPostUpdate {
  data: IPostDto;
  children: React.ReactNode;
}
