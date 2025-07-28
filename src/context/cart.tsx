import * as React from 'react';
import { Cart, CartItem } from '@/context/cart.types';
import { Product } from '@/database/data/products.data';

const initialCart: Cart = {
  total: 0,
  currency: 'USD',
  items: [],
};

const initialCartContext = {
  cart: initialCart,
  cartOpen: false,
  addToCart: (product: Product, selectedSize: string) => {},
  removeFromCart: (id: string) => {},
  clearCart: () => {},
  setCartOpen: (open: boolean) => {},
  itemCountInCart: (productId: string, size: string) => 0,
};

const CartContext = React.createContext(initialCartContext);

const getRandomId = () => {
  return Math.random().toString(36).substring(2, 9);
};

const isSameItem = (item: CartItem, product: Product, selectedSize: string) => {
  return item.product.id === product.id && item.size === selectedSize;
};

export const useCart = () => {
  return React.useContext(CartContext);
};

type CartProviderProps = {
  children: React.ReactNode;
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = React.useState<Cart>(initialCart);
  const [cartOpen, setCartOpen] = React.useState(false);

  const addToCart = (product: Product, selectedSize: string) => {
    const existingItem = cart.items.find((item) =>
      isSameItem(item, product, selectedSize)
    );

    if (existingItem) {
      const updatedItems = cart.items.map((item) => ({
        ...item,
        quantity:
          item.quantity + (isSameItem(item, product, selectedSize) ? 1 : 0),
      }));

      setCart({
        ...cart,
        items: updatedItems,
        total: updatedItems.reduce(
          (acc, item) => acc + item.quantity * item.unitPriceAsNumber,
          0
        ),
      });
    } else {
      setCart({
        ...cart,
        items: [
          ...cart.items,
          {
            id: getRandomId(),
            quantity: 1,
            product,
            size: selectedSize,
            unitPriceAsNumber: product.priceAsNumber,
          },
        ],
        total: cart.total + product.priceAsNumber,
      });
    }
  };

  const removeFromCart = (id: string) => {
    const updatedItems = cart.items.filter((item) => item.id !== id);
    setCart({
      ...cart,
      items: updatedItems,
      total: updatedItems.reduce(
        (acc, item) => acc + item.quantity * item.unitPriceAsNumber,
        0
      ),
    });
  };

  const clearCart = () => {
    setCart(initialCart);
  };

  const itemCountInCart = (productId: string, size: string) => {
    const item = cart.items.find(
      (item) => item.product.id === productId && item.size === size
    );

    return item ? item.quantity : 0;
  };

  React.useEffect(() => {
    const cartFromStorage = localStorage.getItem('cart');
    if (cartFromStorage) {
      setCart(JSON.parse(cartFromStorage));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const cartContextValue = React.useMemo(
    () => ({
      cart,
      cartOpen,
      addToCart,
      removeFromCart,
      clearCart,
      setCartOpen,
      itemCountInCart,
    }),
    [
      cart,
      cartOpen,
      addToCart,
      removeFromCart,
      clearCart,
      itemCountInCart,
      setCartOpen,
    ]
  );

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
};
