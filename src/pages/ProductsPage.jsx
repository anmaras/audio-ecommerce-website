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

export default function ProductsPage() {
  const { category } = useParams();
  const { isLoading, data } = useFetchCategories(category);

  return (
    <main className="main categories">
      <PageHero category={category} />
      {isLoading ? (
        <Spinner />
      ) : (
        <motion.section
          className="main__productsPageWrapper"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <ProductsCategories data={data} />
          <MenuList />
          <About />
        </motion.section>
      )}
    </main>
  );
}
