import React from 'react';
import { GoBackButton, FormContainer } from '../components';
import { useProductsContext } from '../context/products_context';
import { useCartContext } from '../context/cart_context';

export default function CheckOutPage() {
  const { single_product: product } = useProductsContext();
  const { cart } = useCartContext();
  /* to redirect when page reload use the last item from cart array */
  return (
    <main className="main checkout">
      <GoBackButton
        category={`/products/${product?.category}/${product?.slug}`}
      />
      <section className="main__checkoutPageWrapper">
        <FormContainer />
      </section>
    </main>
  );
}
