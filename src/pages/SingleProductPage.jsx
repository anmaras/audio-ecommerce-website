import React from 'react';
import { Product, About, GoBackButton, Spinner } from '../components/index';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';

export default function SingleProductPage() {
  const { id, category } = useParams();
  const { products_loading: loading } = useProductsContext();

  if (loading) {
    return <Spinner />;
  }
  return (
    <main className="main singleProduct">
      <GoBackButton category={`/products/${category}`} />
      <section className="main__productPageWrapper">
        <Product productId={id} />
        <About />
      </section>
    </main>
  );
}
