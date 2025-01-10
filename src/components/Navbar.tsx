import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, TrendingUp } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <TrendingUp className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Moneta Leven</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/blogs" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
                <Link to="/net_worth_calculator" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">NetWorth Calculator</Link>
                <a href="#services" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Services</a>
                <a href="#insights" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Insights</a>
                <a href="#about" className="text-gray-800 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link to="/" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/blogs" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
            <a href="#services" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#insights" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">Insights</a>
            <a href="#about" className="text-gray-800 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium">About</a>
            <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}