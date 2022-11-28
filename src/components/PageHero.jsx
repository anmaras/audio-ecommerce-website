import React from 'react';
import { useProductsContext } from '../context/products_context';
import style from '../styles/components/PageHero.module.scss';

const PageHero = ({ category }) => {
  const { category_products } = useProductsContext();

  if (category_products.length) {
    return (
      <div className={style.pageHero}>
        <h2 className="pageHero__title">{category}</h2>
      </div>
    );
  } else {
    null;
  }
};

export default PageHero;
