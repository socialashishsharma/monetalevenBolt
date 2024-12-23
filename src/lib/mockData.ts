import { Blog } from '../types/blog';
import { subDays } from 'date-fns';

export const fallbackBlogs: Blog[] = [
  {
    id: '1',
    title: 'Understanding High-Frequency Trading',
    description: 'A comprehensive guide to modern HFT strategies and their impact on market dynamics.',
    content: 'High-frequency trading (HFT) has revolutionized the financial markets...',
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3',
    category: 'Trading',
    author: 'Sarah Chen',
    createdAt: subDays(new Date(), 1),
    views: 1500
  },
  {
    id: '2',
    title: 'The Future of Algorithmic Trading',
    description: 'Exploring how AI and machine learning are shaping the future of automated trading systems.',
    content: 'As we move into a new era of financial technology...',
    imageUrl: 'https://images.unsplash.com/photo-1516245834210-c4c142787335',
    category: 'Technology',
    author: 'Michael Zhang',
    createdAt: subDays(new Date(), 2),
    views: 2300
  },
  {
    id: '3',
    title: 'Market Analysis: Q1 2024',
    description: 'A detailed analysis of market trends and predictions for the coming quarter.',
    content: 'The first quarter of 2024 has shown remarkable trends...',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f',
    category: 'Analysis',
    author: 'Emma Thompson',
    createdAt: subDays(new Date(), 3),
    views: 1800
  }
];