import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductsList, PageHero, MenuList } from '../components/index';
import { useProductsContext } from '../context/products_context';

export default function ProductsPage() {
  const { category } = useParams();
  const {
    category_products: products,
    getProductsByCategory,
    products_loading,
    category_loading,
  } = useProductsContext();

  useEffect(() => {
    getProductsByCategory(category);
  }, [category]);

  return (
    <main>
      <PageHero category={category} />
      <ProductsList />
      <MenuList />
    </main>
  );
}
