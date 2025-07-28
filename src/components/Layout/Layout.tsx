import { ReactNode } from 'react';
import Head from 'next/head';
import { Cart } from '../Cart';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../styles/theme';
import { CartProvider } from '@/context/cart';
import { Header } from '../Header';

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Nordic Knots - Test Shop</title>
        <meta name="description" content="Nordic Knots test shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <CartProvider>
            <Header />
            {children}
            <Cart />
          </CartProvider>
        </ThemeProvider>
      </main>
    </>
  );
};
