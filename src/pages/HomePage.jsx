import React from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
} from '../components';

export default function HomePage() {
  return (
    <main className="main homepage">
      <HomePageNewProduct />
      <section className="main__homePageWrapper">
        <MenuList />
        <ProductsPreviews />
        <About />
      </section>
    </main>
  );
}
