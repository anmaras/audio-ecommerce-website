import React from 'react';
import {
  Product,
  MenuList,
  GoBackButton,
  About,
  Spinner,
} from '../components/index';
import { useParams } from 'react-router-dom';
import { useFetchProduct } from '../hooks/useFetchProduct';
import { motion } from 'framer-motion';

export default function SingleProductPage() {
  const { id } = useParams();

  const { data: product, isLoading } = useFetchProduct(id);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="main singleProduct">
      <GoBackButton />
      <motion.section
        className="main__productPageWrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5 } }}
      >
        <Product product={product} />
        <MenuList />
        <About />
      </motion.section>
    </main>
  );
}
