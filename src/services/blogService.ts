import { collection, getDocs, query, orderBy, limit, where, DocumentData } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { Blog } from '../types/blog';
import { fallbackBlogs } from '../lib/mockData';

const COLLECTION_NAME = 'blogs';

const convertToDate = (timestamp: any): Date => {
  if (timestamp?.toDate) {
    return timestamp.toDate();
  }
  return new Date(timestamp);
};

const convertDocToBlog = (doc: DocumentData): Blog => ({
  id: doc.id,
  title: doc.data().title,
  description: doc.data().description,
  content: doc.data().content,
  imageUrl: doc.data().imageUrl,
  category: doc.data().category,
  author: doc.data().author,
  createdAt: convertToDate(doc.data().createdAt),
  views: doc.data().views
});

const handleFirebaseError = (error: any): Blog[] => {
  console.warn('Falling back to mock data due to:', error);
  return fallbackBlogs;
};

export const blogService = {
  getRecentBlogs: async (): Promise<Blog[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('createdAt', 'desc'),
        limit(6)
      );
      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map(convertDocToBlog);
      return blogs.length > 0 ? blogs : fallbackBlogs;
    } catch (error) {
      return handleFirebaseError(error);
    }
  },

  getTopBlogs: async (): Promise<Blog[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        orderBy('views', 'desc'),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map(convertDocToBlog);
      return blogs.length > 0 ? blogs : fallbackBlogs.sort((a, b) => b.views - a.views);
    } catch (error) {
      return handleFirebaseError(error);
    }
  },

  getGameChangingBlogs: async (): Promise<Blog[]> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('views', '>', 1000),
        limit(3)
      );
      const querySnapshot = await getDocs(q);
      const blogs = querySnapshot.docs.map(convertDocToBlog);
      return blogs.length > 0 ? blogs : fallbackBlogs.filter(blog => blog.views > 1000);
    } catch (error) {
      return handleFirebaseError(error);
    }
  },

  getBlogBySlug: async (slug: string): Promise<Blog | null> => {
    try {
      const q = query(
        collection(db, COLLECTION_NAME),
        where('slug', '==', slug),
        limit(1)
      );
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        const fallbackBlog = fallbackBlogs.find(blog => 
          blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === slug
        );
        return fallbackBlog || null;
      }
      return convertDocToBlog(querySnapshot.docs[0]);
    } catch (error) {
      console.warn('Falling back to mock data due to:', error);
      const fallbackBlog = fallbackBlogs.find(blog => 
        blog.title.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') === slug
      );
      return fallbackBlog || null;
    }
  }
};