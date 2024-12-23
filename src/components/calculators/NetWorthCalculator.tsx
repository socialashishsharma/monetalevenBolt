import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus, DollarSign, Calculator } from 'lucide-react';

interface Asset {
  id: string;
  name: string;
  value: number;
}

interface Liability {
  id: string;
  name: string;
  value: number;
}

export function NetWorthCalculator() {
  const [assets, setAssets] = useState<Asset[]>([
    { id: '1', name: 'Cash and Bank Accounts', value: 0 },
    { id: '2', name: 'Investment Accounts', value: 0 },
    { id: '3', name: 'Real Estate', value: 0 },
  ]);

  const [liabilities, setLiabilities] = useState<Liability[]>([
    { id: '1', name: 'Credit Card Debt', value: 0 },
    { id: '2', name: 'Mortgage', value: 0 },
    { id: '3', name: 'Loans', value: 0 },
  ]);

  const totalAssets = assets.reduce((sum, asset) => sum + asset.value, 0);
  const totalLiabilities = liabilities.reduce((sum, liability) => sum + liability.value, 0);
  const netWorth = totalAssets - totalLiabilities;

  const addAsset = () => {
    setAssets([...assets, { id: Date.now().toString(), name: '', value: 0 }]);
  };

  const addLiability = () => {
    setLiabilities([...liabilities, { id: Date.now().toString(), name: '', value: 0 }]);
  };

  const updateAsset = (id: string, field: 'name' | 'value', value: string | number) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, [field]: value } : asset
    ));
  };

  const updateLiability = (id: string, field: 'name' | 'value', value: string | number) => {
    setLiabilities(liabilities.map(liability => 
      liability.id === id ? { ...liability, [field]: value } : liability
    ));
  };

  const removeAsset = (id: string) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const removeLiability = (id: string) => {
    setLiabilities(liabilities.filter(liability => liability.id !== id));
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Net Worth Calculator</h1>
          <p className="text-lg text-gray-600">
            Track your financial health by calculating your net worth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Assets Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Assets</h2>
              <button
                onClick={addAsset}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <Plus className="h-5 w-5 mr-1" />
                Add Asset
              </button>
            </div>

            <div className="space-y-4">
              {assets.map((asset) => (
                <div key={asset.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={asset.name}
                      onChange={(e) => updateAsset(asset.id, 'name', e.target.value)}
                      placeholder="Asset name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={asset.value}
                      onChange={(e) => updateAsset(asset.id, 'value', Number(e.target.value))}
                      placeholder="0"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => removeAsset(asset.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total Assets:</span>
                <span className="text-xl font-bold text-green-600">{formatCurrency(totalAssets)}</span>
              </div>
            </div>
          </motion.div>

          {/* Liabilities Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-sm p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-900">Liabilities</h2>
              <button
                onClick={addLiability}
                className="flex items-center text-indigo-600 hover:text-indigo-700"
              >
                <Plus className="h-5 w-5 mr-1" />
                Add Liability
              </button>
            </div>

            <div className="space-y-4">
              {liabilities.map((liability) => (
                <div key={liability.id} className="flex items-center gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      value={liability.name}
                      onChange={(e) => updateLiability(liability.id, 'name', e.target.value)}
                      placeholder="Liability name"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <div className="relative flex-1">
                    <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      value={liability.value}
                      onChange={(e) => updateLiability(liability.id, 'value', Number(e.target.value))}
                      placeholder="0"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                    />
                  </div>
                  <button
                    onClick={() => removeLiability(liability.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Minus className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-900">Total Liabilities:</span>
                <span className="text-xl font-bold text-red-600">{formatCurrency(totalLiabilities)}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 bg-white rounded-xl shadow-sm p-8 text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
            <Calculator className="h-8 w-8 text-indigo-600" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your Net Worth</h2>
          <p className={`text-4xl font-bold ${netWorth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(netWorth)}
          </p>
        </motion.div>
      </div>
    </div>
  );
}