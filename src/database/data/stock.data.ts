import { allProducts } from './products.data';

export type StockData = {
  productId: string;
  size: string;
  quantity: number;
};

export const stockData: StockData[] = allProducts
  .map((product) => {
    return product.sizes.map((size) => {
      return {
        productId: product.id,
        size,
        quantity: 4,
      };
    });
  })
  .flat();
