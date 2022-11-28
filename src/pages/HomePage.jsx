import React from 'react';
import { MenuList, NewProduct, ProductsPreviews, About } from '../components';

export default function HomePage() {
  return (
    <main className="main homepage">
      <NewProduct />
      <section className="main__homePageWrapper">
        <MenuList />
        <ProductsPreviews />
        <About />
      </section>
    </main>
  );
}
