import React from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
  Spinner,
} from '../components';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { menuListVariant } from '../AnimationVariants/variants';
import { useProductsContext } from '../context/products_context';

export default function HomePage() {
  const { products_loading: loading } = useProductsContext();

  if (loading) {
    return <Spinner />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <main className="main homepage">
        <HomePageNewProduct />
        <section className="main__homePageWrapper">
          <m.div
            variants={menuListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <MenuList />
          </m.div>
          <ProductsPreviews />
          <About />
        </section>
      </main>
    </LazyMotion>
  );
}
