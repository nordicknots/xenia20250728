import { GetStaticPropsContext } from 'next';
import { getAllProducts } from '@/database/repository/products.repo';
import { Product } from '@/database/data/products.data';
import { Layout, ProductList } from '@/components';

export const getStaticProps = async () => {
  const products = getAllProducts();

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 24,
  };
};

type Props = {
  products: Product[];
};

export default function Home({ products }: Props) {
  return (
    <Layout>
      <ProductList products={products} />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
