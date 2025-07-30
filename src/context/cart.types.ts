import { Product } from '@/database/data/products.data';

export type CartItem = {
  id: string;
  quantity: number;
  size: string;
  unitPriceAsString: string;
  unitPriceAsNumber: number;
  product: Product;
};

export type Cart = {
  total: number;
  currency: string;
  items: CartItem[];
};
