import React from 'react';
import { MenuList, NewProduct } from '../components';
import { useProductsContext } from '../context/products_context';

export default function HomePage() {
  // const { products: name } = useProductsContext();

  return (
    <main className="homepage">
      <NewProduct />
      <MenuList />
    </main>
  );
}
