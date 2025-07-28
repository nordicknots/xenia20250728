import * as React from 'react';
import { styled } from '@mui/system';
import { Button } from '@mui/material';
import { useCart } from '@/context/cart';
import Link from 'next/link';

const HeaderContainer = styled('header')`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
`;

const LogoLink = styled(Link)`
  font-size: 1rem;
  padding: 0.5rem;
  font-weight: 700;
`;

export const Header = () => {
  const { cart, setCartOpen } = useCart();
  return (
    <HeaderContainer>
      <LogoLink href="/">NORDIC KNOTS</LogoLink>
      <Button onClick={() => setCartOpen(true)}>
        Bag ({cart.items.length})
      </Button>
    </HeaderContainer>
  );
};
