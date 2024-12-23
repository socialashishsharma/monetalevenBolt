import React from 'react';
import { formatCurrency } from '../utils';

interface SummaryProps {
  netWorth: number;
}

export function Summary({ netWorth }: SummaryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Net Worth</h2>
        <p className={`text-5xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
          {formatCurrency(netWorth)}
        </p>
      </div>
    </div>
  );
}