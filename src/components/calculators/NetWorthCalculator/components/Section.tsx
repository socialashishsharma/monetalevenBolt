import React from 'react';
import { Plus } from 'lucide-react';
import { Item } from './Item';
import { formatCurrency } from '../utils';
import { Asset, Liability } from '../types';

interface SectionProps {
  title: string;
  items: (Asset | Liability)[];
  total: number;
  onAdd: () => void;
  onUpdate: (id: string, field: 'name' | 'value', value: string | number) => void;
  onRemove: (id: string) => void;
  isAssets?: boolean;
}

export function Section({ 
  title, 
  items, 
  total, 
  onAdd, 
  onUpdate, 
  onRemove, 
  isAssets = false 
}: SectionProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="p-6 border-b border-gray-100">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onAdd}
            className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add {isAssets ? 'Asset' : 'Liability'}
          </button>
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            value={item.value}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </div>
      
      <div className="p-6 bg-gray-50 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900">Total {title}</span>
          <span className={`text-xl font-bold ${isAssets ? 'text-green-600' : 'text-red-600'}`}>
            {formatCurrency(total)}
          </span>
        </div>
      </div>
    </div>
  );
}