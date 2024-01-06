import { IPostDto } from '@/shared/api';

export interface IPost {
  data: IPostDto;
  children?: React.ReactNode;
}
