import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { Blog } from '../../lib/mockData';
import { getBlogUrl } from '../../lib/utils';

interface BlogCardProps {
  blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={getBlogUrl(blog)}>
        <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="flex items-center mb-2">
              <span className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded">
                {blog.category}
              </span>
              <span className="text-xs text-gray-500 ml-2">
                {new Date(blog?.createdAt) <= new Date() 
                  ? formatDistanceToNow(new Date(blog.createdAt), { addSuffix: true })
                  : 'Coming soon'}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{blog.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">{blog.description}</p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}