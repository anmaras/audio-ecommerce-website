import React from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductsCategories,
  PageHero,
  MenuList,
  About,
  Spinner,
} from '../components/index';
import { useProductsContext } from '../context/products_context';
import { motion, LazyMotion, domAnimation, m } from 'framer-motion';
import { menuListVariant } from '../AnimationVariants/variants';

export default function ProductsPage() {
  const { category } = useParams();
  const { products_loading: loading, category_products: categories } =
    useProductsContext();

  if (loading) {
    return <Spinner />;
  }
  return (
    <LazyMotion features={domAnimation}>
      <main className="main categories">
        <PageHero category={category} />
        <section className="main__productsPageWrapper">
          <ProductsCategories category={category} />
          <motion.div
            variants={menuListVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <MenuList />
          </motion.div>
          <About />
        </section>
      </main>
    </LazyMotion>
  );
}
