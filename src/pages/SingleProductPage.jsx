import React from 'react';
import { Product, About, GoBackButton } from '../components/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';

export default function SingleProductPage() {
  const { id, category } = useParams();
  const { fetchSingleProduct } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  return (
    <main className="main singleProduct">
      <GoBackButton category={`/products/${category}`} />
      <section className="main__productPageWrapper">
        <Product />
        <About />
      </section>
    </main>
  );
}
