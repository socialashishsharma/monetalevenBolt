import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Share2, Clock, User, ArrowLeft } from 'lucide-react';
import { Blog } from '../../types/blog';
import { blogService } from '../../services/blogService';
import { format } from 'date-fns';

export function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!slug) return;
      
      setLoading(true);
      setError(null);
      try {
        const fetchedBlog = await blogService.getBlogBySlug(slug);
        if (fetchedBlog) {
          setBlog(fetchedBlog);
        } else {
          navigate('/blogs', { replace: true });
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog post. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => navigate('/blogs')}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Return to Blogs
          </button>
        </div>
      </div>
    );
  }

  if (!blog) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-20 pb-16"
    >
      <article className="max-w-4xl mx-auto px-4">
        <button 
          onClick={() => navigate('/blogs')}
          className="flex items-center text-indigo-600 hover:text-indigo-700 mb-8"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Blogs
        </button>

        <div className="mb-8">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-xl"
          />
        </div>

        <div className="prose prose-lg max-w-none">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">{blog.title}</h1>
            
            <div className="flex items-center space-x-6 mb-8 text-gray-600">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{format(blog.createdAt, 'MMM dd, yyyy')}</span>
              </div>
              <button 
                onClick={() => {
                  navigator.share({
                    title: blog.title,
                    text: blog.description,
                    url: window.location.href,
                  }).catch(console.error);
                }}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </button>
            </div>

            <div className="prose prose-lg prose-indigo">
              {blog.content}
            </div>
          </motion.div>
        </div>
      </article>
    </motion.div>
  );
}