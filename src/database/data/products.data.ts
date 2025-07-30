export type Variants = {
  size: string;
  price: string;
  priceAsNumber: number;
};

export type Product = {
  id: string;
  name: string;
  color: string;
  image: string;
  description: string;
  variants: Variants[];
};

export const allProducts: Product[] = [
  {
    id: '1',
    name: 'Park 03 - Burgundy',
    image: '/img/products/park_1.webp',
    color: 'Burgundy',
    description:
      'With the ever-enduring allure of a classic statement piece, Park is a sophisticated design in a harmony of alluring shades. Crafted from supremely soft New Zealand wool, the densely woven loops and hand-cut pile gives each piece a thick and plush texture—bringing an atmosphere of worldly elegance to modern homes.',
    variants: [
      { size: '5x8', price: '$895.00', priceAsNumber: 895 },
      { size: '8x10', price: '1195$', priceAsNumber: 1195 },
      { size: '9x12', price: '1395$', priceAsNumber: 1395 },
    ],
  },
  {
    id: '2',
    name: 'Park 03 - Camel',
    image: '/img/products/park_2.jpeg',
    color: 'Beige',
    description:
      'With the ever-enduring allure of a classic statement piece, Park is a sophisticated design in a harmony of alluring shades. Crafted from supremely soft New Zealand wool, the densely woven loops and hand-cut pile gives each piece a thick and plush texture—bringing an atmosphere of worldly elegance to modern homes.',
    variants: [
      { size: '5x8', price: '$895.00', priceAsNumber: 895 },
      { size: '8x10', price: '1195$', priceAsNumber: 1195 },
      { size: '9x12', price: '1395$', priceAsNumber: 1395 },
    ],
  },
  {
    id: '3',
    name: 'Boho - Brown Mix',
    image: '/img/products/boho_1.jpeg',
    color: 'Beige',
    description:
      'Raw bohemian textures are elevated with architectural lines in Boho, inspired by the limestone steps of grand stairs to historic Stockholm buildings. Crafted from all-natural, undyed European wool to a contemporary geometric pattern that combines a flat-woven canvas with lush hand-knotted pile.',
    variants: [
      { size: '5x8', price: '$895.00', priceAsNumber: 895 },
      { size: '8x10', price: '1195$', priceAsNumber: 1195 },
      { size: '9x12', price: '1395$', priceAsNumber: 1395 },
    ],
  },
  {
    id: '4',
    name: 'Boho - Gray Mix',
    image: '/img/products/boho_2.jpeg',
    color: 'Gray',
    description:
      'Raw bohemian textures are elevated with architectural lines in Boho, inspired by the limestone steps of grand stairs to historic Stockholm buildings. Crafted from all-natural, undyed European wool to a contemporary geometric pattern that combines a flat-woven canvas with lush hand-knotted pile.',
    variants: [
      { size: '5x8', price: '$895.00', priceAsNumber: 895 },
      { size: '8x10', price: '1195$', priceAsNumber: 1195 },
      { size: '9x12', price: '1395$', priceAsNumber: 1395 },
    ],
  },
  // Add more products as needed
];
