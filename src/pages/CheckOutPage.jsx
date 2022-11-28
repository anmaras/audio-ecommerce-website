import React from 'react';
import { Form, GoBackButton, Summary } from '../components';
import { useProductsContext } from '../context/products_context';

export default function CheckOutPage() {
  const { single_product: product } = useProductsContext();

  return (
    <main className="main checkout">
      <GoBackButton
        category={`/products/${product?.category}/${product?.slug}`}
      />
      <section className="main__checkoutPageWrapper">
        <Form />
        <Summary />
      </section>
    </main>
  );
}
