export type ListItem = {
  id: number;
  images?: ImageListItem[] | [];
  title?: string;
  content?: string;
};

export type ImageListItem = {
  id?: number;
  src: string;
  height: number;
  width: number;
  alt: string;
};
