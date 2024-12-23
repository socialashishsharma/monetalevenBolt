import React, { useState } from 'react';
import { Section } from './components/Section';
import { Summary } from './components/Summary';
import { Asset, Liability } from './types';
import { calculateTotal } from './utils';

const DEFAULT_ASSETS: Asset[] = [
  { id: '1', name: 'Cash', value: 0 },
  { id: '2', name: 'Investments', value: 0 },
  { id: '3', name: 'Property', value: 0 },
];

const DEFAULT_LIABILITIES: Liability[] = [
  { id: '1', name: 'Credit Cards', value: 0 },
  { id: '2', name: 'Mortgage', value: 0 },
  { id: '3', name: 'Loans', value: 0 },
];

export function NetWorthCalculator() {
  const [assets, setAssets] = useState<Asset[]>(DEFAULT_ASSETS);
  const [liabilities, setLiabilities] = useState<Liability[]>(DEFAULT_LIABILITIES);

  const totalAssets = calculateTotal(assets);
  const totalLiabilities = calculateTotal(liabilities);
  const netWorth = totalAssets - totalLiabilities;

  const handleAddAsset = () => {
    setAssets([...assets, { id: Date.now().toString(), name: '', value: 0 }]);
  };

  const handleAddLiability = () => {
    setLiabilities([...liabilities, { id: Date.now().toString(), name: '', value: 0 }]);
  };

  const handleUpdateAsset = (id: string, field: 'name' | 'value', value: string | number) => {
    setAssets(assets.map(asset => 
      asset.id === id ? { ...asset, [field]: value } : asset
    ));
  };

  const handleUpdateLiability = (id: string, field: 'name' | 'value', value: string | number) => {
    setLiabilities(liabilities.map(liability => 
      liability.id === id ? { ...liability, [field]: value } : liability
    ));
  };

  const handleRemoveAsset = (id: string) => {
    setAssets(assets.filter(asset => asset.id !== id));
  };

  const handleRemoveLiability = (id: string) => {
    setLiabilities(liabilities.filter(liability => liability.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Net Worth Calculator</h1>
          <p className="mt-4 text-lg text-gray-600">
            Track and calculate your total net worth by listing your assets and liabilities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <Section
            title="Assets"
            items={assets}
            total={totalAssets}
            onAdd={handleAddAsset}
            onUpdate={handleUpdateAsset}
            onRemove={handleRemoveAsset}
            isAssets={true}
          />
          <Section
            title="Liabilities"
            items={liabilities}
            total={totalLiabilities}
            onAdd={handleAddLiability}
            onUpdate={handleUpdateLiability}
            onRemove={handleRemoveLiability}
          />
        </div>

        <Summary netWorth={netWorth} />
      </div>
    </div>
  );
}