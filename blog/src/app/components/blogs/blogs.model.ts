export interface IBlog {
  blogId: number;
  userId: number;
  title: string;
  content: string;
  image: string;
  imageTitle: string;
  featured?: boolean;
  tags?: [];
  status?: string;
  likes?: number;
  comments?: [];
  dateCreated?: string;
  lastModified?: string;
}