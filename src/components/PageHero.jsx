import React from 'react';
import { useProductsContext } from '../context/products_context';

const PageHero = ({ category }) => {
  const { category_products } = useProductsContext();

  if (category_products.length) {
    return (
      <section className="pageHero">
        <h2 className="pageHero__title">{category}</h2>
      </section>
    );
  } else {
    null;
  }
};

export default PageHero;
