import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductsList, PageHero } from '../components/index';

export default function ProductsPage() {
  const { category } = useParams();
  return (
    <main>
      <PageHero category={category} />
      <ProductsList />
    </main>
  );
}
