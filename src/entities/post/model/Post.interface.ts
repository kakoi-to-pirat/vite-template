export interface IPostDto {
  id: number;
  createdAt: string;
  text: string;
}

export interface IPost {
  data: IPostDto;
  children?: React.ReactNode;
}
