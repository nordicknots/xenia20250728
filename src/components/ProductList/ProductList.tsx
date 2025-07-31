import { Box, Container, styled, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const ProductListGrid = styled('section')`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const ProductCard = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-decoration: none;
  transition: opacity 0.2s ease-in;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Media = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
  aspect-ratio: 3/4;
`;

export const ProductList = ({ products }: any) => {
  return (
    <Container maxWidth={false}>
      <Typography variant="h4" textTransform="uppercase" fontWeight={500}>
        All Rugs
      </Typography>
      <ProductListGrid>
        {products.map((product: any) => (
          <ProductCard key={product.id} href={`/products/${product.id}`}>
            <Media>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
                priority
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 20vw, 20vw"
              />
            </Media>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography fontWeight={500}>{product.name}</Typography>
              <Typography fontWeight={500}>
                From {product.variants[0].price}
              </Typography>
            </Box>
          </ProductCard>
        ))}
      </ProductListGrid>
    </Container>
  );
};
