import { GetStaticPropsContext } from 'next';
import { getProductById } from '@/database/repository/products.repo';
import { Product as ProductType } from '@/database/data/products.data';
import { Layout, Product } from '@/components';

export const getStaticProps = async (
  context: GetStaticPropsContext<{ id: string }>
) => {
  const { params } = context;

  const product = getProductById(params?.id as string);

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

type Props = {
  product: ProductType;
};

export default function ProductPage({ product }: Props) {
  return (
    <Layout>
      <Product product={product} />
    </Layout>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking',
  };
}
