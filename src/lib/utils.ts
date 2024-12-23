import { Blog } from './mockData';

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim();
}

export function getBlogUrl(blog: Blog): string {
  return `/blogs/${slugify(blog.title)}`;
}