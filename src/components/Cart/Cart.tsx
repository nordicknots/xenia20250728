import { useCart } from '@/context/cart';
import { Box, Button, List, ListItem, styled, Typography } from '@mui/material';

type CartContainerProps = {
  open: boolean;
};

const CartBackdrop = styled('div')<CartContainerProps>`
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.common.black};
  opacity: 0.1;
  z-index: 1000;
`;

const CartContainer = styled('div')<CartContainerProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  top: 0;
  right: 0;
  width: 400px;
  height: 100vh;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: 1rem;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.2s ease-in;
  z-index: 1001;
`;

const CartHeader = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const CartFooter = styled('div')`
  display: flex;
  justify-content: space-between;
`;

const CartItemContent = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Cart = () => {
  const { cart, cartOpen, setCartOpen, removeFromCart } = useCart();

  return (
    <>
      <CartContainer open={cartOpen}>
        <Box>
          <CartHeader>
            <Typography variant="h6">Bag ({cart.items.length})</Typography>
            <Button onClick={() => setCartOpen(false)}>&#10005;</Button>
          </CartHeader>
          <List>
            {cart.items.map((item) => (
              <ListItem
                key={item.id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <CartItemContent>
                  <Typography fontWeight={600}>{item.product.name}</Typography>
                  <Typography fontWeight={600}>{item.product.price}</Typography>
                </CartItemContent>
                <CartItemContent>
                  <Typography>Qty: {item.quantity}</Typography>
                  <Button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </Button>
                </CartItemContent>
              </ListItem>
            ))}
          </List>
        </Box>
        <CartFooter>
          <Typography fontWeight={600}>Total:</Typography>{' '}
          <Typography fontWeight={600}>
            {cart.total} {cart.currency}
          </Typography>
        </CartFooter>
      </CartContainer>
      <CartBackdrop open={cartOpen} onClick={() => setCartOpen(false)} />
    </>
  );
};
