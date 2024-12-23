import React from 'react';
import { LineChart, Wallet, PiggyBank, Calculator, BarChart3 } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to your investment goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <LineChart className="h-8 w-8 text-indigo-600" />,
              title: "Stock Trading",
              description: "Advanced algorithmic trading with real-time market analysis and automated execution."
            },
            {
              icon: <Wallet className="h-8 w-8 text-indigo-600" />,
              title: "Financial Management",
              description: "Personalized portfolio management and wealth optimization strategies."
            },
            {
              icon: <PiggyBank className="h-8 w-8 text-indigo-600" />,
              title: "Mutual Funds",
              description: "Diversified investment options with expertly managed fund portfolios."
            },
            {
              icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
              title: "SIPs",
              description: "Systematic Investment Plans for long-term wealth creation and goal achievement."
            },
            {
              icon: <Calculator className="h-8 w-8 text-indigo-600" />,
              title: "Tax Planning",
              description: "Strategic tax-saving investments and compliance management."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-indigo-600 font-medium hover:text-indigo-700 flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-indigo-600 rounded-2xl p-8 sm:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Ready to Start Investing?</h3>
              <p className="mb-6">Get started with our professional investment services today.</p>
              <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-indigo-500/50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl mb-1">98%</h4>
                <p className="text-sm">Client Satisfaction</p>
              </div>
              <div className="bg-indigo-500/50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl mb-1">25%</h4>
                <p className="text-sm">Annual Returns</p>
              </div>
              <div className="bg-indigo-500/50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl mb-1">24/7</h4>
                <p className="text-sm">Expert Support</p>
              </div>
              <div className="bg-indigo-500/50 p-4 rounded-lg">
                <h4 className="font-bold text-2xl mb-1">10+</h4>
                <p className="text-sm">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}