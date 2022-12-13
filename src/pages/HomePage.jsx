import React from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
} from '../components';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="main homepage">
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
