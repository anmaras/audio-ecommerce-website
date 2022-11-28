import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  ProductsCategories,
  PageHero,
  MenuList,
  About,
} from '../components/index';
import { useProductsContext } from '../context/products_context';

export default function ProductsPage() {
  const { category } = useParams();
  const { getProductsByCategory } = useProductsContext();

  useEffect(() => {
    getProductsByCategory(category);
  }, [category]);

  return (
    <main className="main categories">
      <PageHero category={category} />
      <section className="main__productsPageWrapper">
        <ProductsCategories />
        <MenuList />
        <About />
      </section>
    </main>
  );
}
