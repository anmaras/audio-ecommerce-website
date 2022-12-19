import React from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
} from '../components';
import { motion } from 'framer-motion';
import { ScrollToTopOnMount } from '../utils/helpers';

export default function HomePage() {
  return (
    <main className="main homepage">
      <ScrollToTopOnMount />
      <HomePageNewProduct />
      <motion.section
        className="main__homePageWrapper"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <MenuList />
        <ProductsPreviews />
        <About />
      </motion.section>
    </main>
  );
}
