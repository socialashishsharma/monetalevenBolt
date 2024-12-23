import React from 'react';
import { Trash2 } from 'lucide-react';
import { ItemProps } from '../types';

export function Item({ id, name, value, onUpdate, onRemove }: ItemProps) {
  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
      <div className="flex-1">
        <input
          type="text"
          value={name}
          onChange={(e) => onUpdate(id, 'name', e.target.value)}
          placeholder="Enter name"
          className="w-full bg-transparent border-none focus:ring-0 text-gray-900 placeholder-gray-500"
        />
      </div>
      <div className="w-40">
        <input
          type="number"
          value={value || ''}
          onChange={(e) => onUpdate(id, 'value', Number(e.target.value) || 0)}
          placeholder="0"
          className="w-full bg-transparent border-none focus:ring-0 text-right text-gray-900 placeholder-gray-500"
        />
      </div>
      <button
        onClick={() => onRemove(id)}
        className="text-gray-400 hover:text-red-500 transition-colors"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  );
}