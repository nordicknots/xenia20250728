import { allProducts } from './products.data';

export type StockData = {
  productId: string;
  size: string;
  quantity: number;
};

export const stockData: StockData[] = allProducts
  .map((product) => {
    return product.variants.map((variant) => {
      return {
        productId: product.id,
        size: variant.size,
        quantity: 4,
      };
    });
  })
  .flat();
