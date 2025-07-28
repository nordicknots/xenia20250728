import { stockData, StockData } from '../data/stock.data';

export const getStockForItem = (
  productId: string,
  size: string
): StockData | undefined => {
  return stockData.find(
    (stock) => stock.productId === productId && stock.size === size
  );
};
