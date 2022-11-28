import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import { Pictures } from './index';
import style from '../styles/components/ProductsCategories.module.scss';

const ProductsList = () => {
  const { category_products: products } = useProductsContext();

  return (
    <section className={style.categories}>
      <ul className={style['categories__list']}>
        {products.map((product) => {
          const {
            categoryImage: { desktop, tablet, mobile },
            description,
            id,
            name,
            slug,
            category,
          } = product;

          return (
            <li className={style['categories__item']} key={id}>
              <Pictures
                desktop={desktop}
                tablet={tablet}
                mobile={mobile}
                alt={`${name} picture`}
              />
              <div className={style['categories__wrapper']}>
                <p className="overline">new product</p>
                <h2 className={style['categories__title']}>{name}</h2>
                <p className={style['categories__description']}>
                  {description}
                </p>
                <Link className="button-1" to={`/products/${category}/${slug}`}>
                  see product
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
