import React from 'react';
import { Check, Star } from 'lucide-react';

export function Pricing() {
  const tiers = [
    {
      name: 'Basic',
      price: '199',
      description: 'Perfect for getting started with trading',
      features: [
        'Real-time market data',
        'Basic trading tools',
        'Standard market analysis',
        'Email support',
        'Mobile app access',
      ],
    },
    {
      name: 'Premium',
      price: '499',
      description: 'Advanced features for serious traders',
      features: [
        'Everything in Basic',
        'Advanced trading algorithms',
        'Priority customer support',
        'Detailed portfolio analysis',
        'Custom trading strategies',
        'Tax optimization tools',
      ],
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: '999',
      description: 'Full suite for professional traders',
      features: [
        'Everything in Premium',
        'Dedicated account manager',
        'Custom API access',
        'Advanced risk management',
        'Institutional-grade tools',
        'White-glove setup',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Investment Plans</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan to accelerate your investment journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl ${
                tier.highlighted
                  ? 'bg-white ring-2 ring-indigo-600 shadow-xl scale-105'
                  : 'bg-white shadow-lg'
              } p-8`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 right-6 -translate-y-1/2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-4 py-1 text-sm font-semibold text-white">
                    <Star className="h-4 w-4" /> Popular
                  </span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-x-2">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">${tier.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">/month</span>
                </div>
                <p className="mt-4 text-sm text-gray-600">{tier.description}</p>
              </div>

              <button
                className={`w-full rounded-lg px-4 py-2.5 text-sm font-semibold ${
                  tier.highlighted
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
                } transition-colors`}
              >
                Get Started
              </button>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-indigo-600 shrink-0" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">Need a custom solution?</p>
          <button className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
            Contact our sales team
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}