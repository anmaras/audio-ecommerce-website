import React from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
} from '../components';

import { motion } from 'framer-motion';
import { menuListVariant } from '../AnimationVariants/variants';

export default function HomePage() {
  return (
    <main className="main homepage">
      <HomePageNewProduct />
      <section className="main__homePageWrapper">
        <motion.div
          variants={menuListVariant}
          initial="initial"
          whileInView="whileInView"
        >
          <MenuList />
        </motion.div>
        <ProductsPreviews />
        <About />
      </section>
    </main>
  );
}
