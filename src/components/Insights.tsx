import React from 'react';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export function Insights() {
  return (
    <section id="insights" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Market Insights</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay ahead with our expert analysis and market updates
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Market Overview</h3>
                <TrendingUp className="h-6 w-6 text-indigo-600" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">S&P 500</p>
                    <p className="text-lg font-semibold text-gray-900">4,185.82</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>2.4%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">NASDAQ</p>
                    <p className="text-lg font-semibold text-gray-900">12,888.95</p>
                  </div>
                  <div className="flex items-center text-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span>1.7%</span>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <p className="text-sm text-gray-600">DOW JONES</p>
                    <p className="text-lg font-semibold text-gray-900">33,912.44</p>
                  </div>
                  <div className="flex items-center text-red-600">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span>0.5%</span>
                  </div>
                </div>
              </div>

              <button className="mt-6 w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                View Detailed Analysis
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Updates</h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Fed Signals Rate Decision",
                    time: "2 hours ago",
                    description: "Federal Reserve hints at potential rate changes in upcoming meeting."
                  },
                  {
                    title: "Tech Sector Rally",
                    time: "4 hours ago",
                    description: "Technology stocks lead market gains amid positive earnings reports."
                  },
                  {
                    title: "Global Markets Review",
                    time: "6 hours ago",
                    description: "Asian markets show strong performance, European markets mixed."
                  }
                ].map((update, index) => (
                  <div key={index} className="border-b border-gray-200 last:border-0 pb-4 last:pb-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-gray-900">{update.title}</h4>
                      <span className="text-sm text-gray-500">{update.time}</span>
                    </div>
                    <p className="text-sm text-gray-600">{update.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Daily Updates</h3>
              <p className="text-gray-600 mb-4">Subscribe to our newsletter for daily market insights.</p>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 mb-3"
              />
              <button className="w-full bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}