import React, { useEffect } from 'react';
import {
  Product,
  MenuList,
  GoBackButton,
  About,
  Spinner,
} from '../components/index';
import { useParams, useNavigate } from 'react-router-dom';
import { useFetchProduct } from '../hooks/useFetchProduct';
import { motion } from 'framer-motion';
import ErrorPage from './ErrorPage';
import { ScrollToTopOnMount } from '../utils/helpers';

export default function SingleProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: product, isLoading, isError } = useFetchProduct(id);

  useEffect(() => {
    if (!isLoading && product === undefined) {
      navigate('/404', { replace: true });
    }
  }, [id, isLoading]);

  if (isError) {
    return <ErrorPage />;
  }

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <main className="main singleProduct">
      <ScrollToTopOnMount />
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
