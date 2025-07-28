export type Product = {
  id: string;
  name: string;
  color: string;
  image: string;
  description: string;
  price: string;
  priceAsNumber: number;
  sizes: string[];
};

export const allProducts: Product[] = [
  {
    id: '1',
    name: 'Park 03 - Burgundy',
    image: '/img/products/park_1.webp',
    color: 'Burgundy',
    description:
      'With the ever-enduring allure of a classic statement piece, Park is a sophisticated design in a harmony of alluring shades. Crafted from supremely soft New Zealand wool, the densely woven loops and hand-cut pile gives each piece a thick and plush texture—bringing an atmosphere of worldly elegance to modern homes.',
    price: '$895.00',
    priceAsNumber: 895,
    sizes: ['5x8', '8x10', '9x12'],
  },
  {
    id: '2',
    name: 'Park 03 - Camel',
    image: '/img/products/park_2.jpeg',
    color: 'Beige',
    description:
      'With the ever-enduring allure of a classic statement piece, Park is a sophisticated design in a harmony of alluring shades. Crafted from supremely soft New Zealand wool, the densely woven loops and hand-cut pile gives each piece a thick and plush texture—bringing an atmosphere of worldly elegance to modern homes.',
    price: '$895.00',
    priceAsNumber: 895,
    sizes: ['5x8', '8x10', '9x12'],
  },
  {
    id: '3',
    name: 'Boho - Brown Mix',
    image: '/img/products/boho_1.jpeg',
    color: 'Beige',
    description:
      'Raw bohemian textures are elevated with architectural lines in Boho, inspired by the limestone steps of grand stairs to historic Stockholm buildings. Crafted from all-natural, undyed European wool to a contemporary geometric pattern that combines a flat-woven canvas with lush hand-knotted pile.',
    price: '$995.00',
    priceAsNumber: 995,
    sizes: ['4x6', '5x8', '6x9'],
  },
  {
    id: '4',
    name: 'Boho - Gray Mix',
    image: '/img/products/boho_2.jpeg',
    color: 'Gray',
    description:
      'Raw bohemian textures are elevated with architectural lines in Boho, inspired by the limestone steps of grand stairs to historic Stockholm buildings. Crafted from all-natural, undyed European wool to a contemporary geometric pattern that combines a flat-woven canvas with lush hand-knotted pile.',
    price: '$495.00',
    priceAsNumber: 495,
    sizes: ['4x6', '5x8', '6x9'],
  },
  // Add more products as needed
];
