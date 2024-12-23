export interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  imageUrl: string;
  category: string;
  author: string;
  createdAt: Date;
  views: number;
}