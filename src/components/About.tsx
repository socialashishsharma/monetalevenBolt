import React from 'react';
import { Users2, Target, Trophy } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Who We Are</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Moneta Leven is a leading high-frequency trading and capital investment firm, 
            dedicated to empowering professionals with cutting-edge financial solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To revolutionize investment strategies through advanced technology and expert insights.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600">
              Becoming the most trusted partner for professionals seeking financial growth.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users2 className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Team</h3>
            <p className="text-gray-600">
              Expert financial advisors and analysts with decades of combined experience.
            </p>
          </div>
        </div>

        <div className="mt-20 bg-indigo-50 rounded-2xl p-8 sm:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Achievements</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                  $10B+ Assets Under Management
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                  20,000+ Active Investors
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="w-4 h-4 bg-indigo-600 rounded-full mr-3"></span>
                  25% Average Annual Returns
                </li>
              </ul>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="Team meeting"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}