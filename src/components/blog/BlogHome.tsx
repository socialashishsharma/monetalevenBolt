import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { BlogCard } from './BlogCard';
import { Newsletter } from './Newsletter';
import { ArrowRight } from 'lucide-react';
import { Blog } from '../../types/blog';
import { blogService } from '../../services/blogService';

export function BlogHome() {
  const [recentBlogs, setRecentBlogs] = useState<Blog[]>([]);
  const [topBlogs, setTopBlogs] = useState<Blog[]>([]);
  const [gameChangingBlogs, setGameChangingBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      setError(null);
      try {
        const [recent, top, gameChanging] = await Promise.all([
          blogService.getRecentBlogs(),
          blogService.getTopBlogs(),
          blogService.getGameChangingBlogs()
        ]);

        setRecentBlogs(recent);
        setTopBlogs(top);
        setGameChangingBlogs(gameChanging);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

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
            onClick={() => window.location.reload()}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative bg-gradient-to-r from-indigo-600 to-purple-600 py-20 px-4"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Your Daily Dose of Financial Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto"
          >
            Stay ahead with expert analysis, market trends, and investment strategies
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Newsletter />
          </motion.div>
        </div>
      </motion.section>

      {gameChangingBlogs.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Game Changing Updates</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {gameChangingBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}

      {recentBlogs.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="text-center mt-12">
              <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                View all articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </section>
      )}

      {topBlogs.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top This Week</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {topBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}