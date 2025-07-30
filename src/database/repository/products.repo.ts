import { Product, allProducts } from '../data/products.data';

export const getAllProducts = (): Product[] => {
  return allProducts;
};

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((product) => product.id === id);
};
