import React, { useState, useEffect } from 'react';
import { ArrowRight, BarChart2, Shield, Users } from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

export function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = [
    'High-Frequency Trading',
    'Market Insights',
    'Finance Management',
    'Portfolio Building'
  ];
  
  const displayText = useTypewriter(rotatingTexts[currentTextIndex], 50);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === rotatingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Increased to 4 seconds to allow for typing animation

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative bg-gradient-to-r from-gray-900 to-indigo-900 pt-16">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639322537228-f710d846310a')] bg-cover bg-center opacity-10"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-8 leading-tight">
            Elevate Your Investments with <br />
            <span className="text-indigo-400 inline-block min-h-[1.2em] transition-all duration-200">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Join thousands of professionals who trust Moneta Leven for sophisticated trading strategies and capital investment solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Start Investing <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-300 hover:bg-gray-800">
              Book Consultation
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <BarChart2 className="h-8 w-8 text-indigo-400" />
              <h3 className="ml-3 text-xl font-semibold text-white">Advanced Analytics</h3>
            </div>
            <p className="text-gray-400">Real-time market analysis and predictive modeling for informed decision-making.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-indigo-400" />
              <h3 className="ml-3 text-xl font-semibold text-white">Secure Trading</h3>
            </div>
            <p className="text-gray-400">Enterprise-grade security protocols protecting your investments 24/7.</p>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700">
            <div className="flex items-center mb-4">
              <Users className="h-8 w-8 text-indigo-400" />
              <h3 className="ml-3 text-xl font-semibold text-white">Expert Support</h3>
            </div>
            <p className="text-gray-400">Dedicated financial advisors available to guide your investment journey.</p>
          </div>
        </div>
      </div>
    </div>
  );
}