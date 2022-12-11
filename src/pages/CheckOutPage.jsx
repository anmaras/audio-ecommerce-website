import React from 'react';
import { GoBackButton, FormContainer } from '../components';

export default function CheckOutPage() {
  return (
    <main className="main checkout">
      <GoBackButton />
      <section className="main__checkoutPageWrapper">
        <FormContainer />
      </section>
    </main>
  );
}
