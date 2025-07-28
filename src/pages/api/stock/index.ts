import { getStockForItem } from '@/database/repository/stock.repo';
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { productId, size } = req.query;
  const stock = getStockForItem(productId as string, size as string);

  return res.status(200).json(stock);
}
