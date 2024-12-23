export interface Asset {
  id: string;
  name: string;
  value: number;
}

export interface Liability {
  id: string;
  name: string;
  value: number;
}

export interface ItemProps {
  id: string;
  name: string;
  value: number;
  onUpdate: (id: string, field: 'name' | 'value', value: string | number) => void;
  onRemove: (id: string) => void;
}