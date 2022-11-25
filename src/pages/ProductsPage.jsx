import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsList, PageHero, MenuList, About } from '../components/index';
import { useProductsContext } from '../context/products_context';

export default function ProductsPage() {
  const { category } = useParams();
  const { getProductsByCategory } = useProductsContext();

  useEffect(() => {
    getProductsByCategory(category);
  }, [category]);

  return (
    <main>
      <PageHero category={category} />
      <ProductsList />
      <MenuList />
      <About />
    </main>
  );
}
