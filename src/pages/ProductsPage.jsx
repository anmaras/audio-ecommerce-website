import React from 'react';
import {
  ProductsCategories,
  MenuList,
  About,
  Spinner,
  PageHero,
} from '../components/index';
import { useParams } from 'react-router-dom';
import { useFetchCategories } from '../hooks/useFetchCategories';
import { motion } from 'framer-motion';
import ErrorPage from './ErrorPage';

export default function ProductsPage() {
  const { category } = useParams();
  const { isLoading, data, isError } = useFetchCategories(category);

  if (isError || data?.length === 0) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <main className="main categories">
      <PageHero category={category} />
      <motion.section
        className="main__productsPageWrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ProductsCategories data={data} />
        <MenuList />
        <About />
      </motion.section>
    </main>
  );
}
