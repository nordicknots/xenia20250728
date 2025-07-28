import React from 'react';
import { Product } from './Product';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CartProvider } from '@/context/cart';
import { allProducts } from '@/database/data/products.data';
import { Cart } from '../Cart';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ quantity: 5 }),
  })
) as jest.Mock;

describe('<Product />', () => {
  beforeEach(() => {
    render(
      <CartProvider>
        <Product product={allProducts[0]} />
        <Cart />
      </CartProvider>
    );
  });

  describe('when the add to cart button is clicked', () => {
    beforeEach(async () => {
      await userEvent.click(screen.getByText(/Add to Cart/i));
    });

    it('then adds the product to the cart', () => {
      expect(screen.getByText(`Bag (1)`)).toBeTruthy();
    });
  });
});
