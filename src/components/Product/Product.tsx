import * as React from 'react';
import Image from 'next/image';
import { Product as ProductType } from '@/database/data/products.data';
import {
  Box,
  Button,
  InputLabel,
  Select,
  SelectChangeEvent,
  styled,
  FormControl,
  MenuItem,
  Typography,
  Alert,
} from '@mui/material';
import { useCart } from '@/context/cart';

type ProductProps = {
  product: ProductType;
};

const ProductGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
  padding-inline: 2rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Media = styled('div')`
  position: relative;
  width: 100%;
  aspect-ratio: 3/4;
`;

const ProductDetails = styled('div')`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(3)};
`;

export const Product = ({ product }: ProductProps) => {
  const [selectedSize, setSelectedSize] = React.useState(
    product.variants[0].size
  );

  const [addingToCart, setAddingToCart] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const { addToCart, setCartOpen, itemCountInCart } = useCart();

  const selectedVariant = product.variants.find(
    (variant) => variant.size === selectedSize
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedSize(event.target.value);
  };

  const handleAddToCart = async () => {
    setAddingToCart(true);
    setError(null);

    try {
      const stockResponse = await fetch(
        `/api/stock?productId=${product.id}&size=${selectedSize}`
      );
      const { quantity } = await stockResponse.json();

      if (quantity - itemCountInCart(product.id, selectedSize) === 0) {
        setError('Out of stock');
        setAddingToCart(false);
        return;
      }

      addToCart(product, selectedSize);
      setCartOpen(true);
    } catch (error) {
      setError('Something went wrong');
    }

    setAddingToCart(false);
  };

  return (
    <ProductGrid>
      <Media>
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Media>
      <ProductDetails>
        <Box>
          <Typography variant="h5" fontWeight={500}>
            {product.name}
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            {selectedVariant?.price}
          </Typography>
        </Box>

        <Typography>{product.description}</Typography>

        <FormControl fullWidth>
          <InputLabel id="size-select-label">Size</InputLabel>
          <Select
            id="size-select"
            label="Size"
            labelId="size-select-label"
            value={selectedSize}
            onChange={handleChange}
          >
            {product.variants.map((variant) => (
              <MenuItem key={variant.size} value={variant.size}>
                {variant.size}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <Button
          variant="contained"
          fullWidth
          size="large"
          onClick={handleAddToCart}
          disabled={addingToCart}
        >
          Add to Cart
        </Button>

        {error && (
          <Alert severity="error" sx={{ display: error ? 'block' : 'none' }}>
            {error}
          </Alert>
        )}
      </ProductDetails>
    </ProductGrid>
  );
};
