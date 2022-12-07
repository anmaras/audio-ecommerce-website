import React from 'react';
import { GoBackButton, FormContainer } from '../components';
import { useCartContext } from '../context/cart_context';

export default function CheckOutPage() {
  const { cart } = useCartContext();
  const length = cart.length - 1;
  /* to redirect when page reload use the last item from cart array */
  return (
    <main className="main checkout">
      <GoBackButton
        category={
          cart.length
            ? `/products/${cart[length].category}/${cart[length].slug}`
            : '/'
        }
      />
      <section className="main__checkoutPageWrapper">
        <FormContainer />
      </section>
    </main>
  );
}
