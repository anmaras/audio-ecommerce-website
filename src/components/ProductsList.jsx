import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import { Images } from './index';

const ProductsList = () => {
  const { category_products: products } = useProductsContext();

  return (
    <section className="categories">
      <ul className="categories__list">
        {products.map((product) => {
          const {
            categoryImage: { desktop, tablet, mobile },
            description,
            id,
            name,
            slug,
            category,
          } = product;

          const images = { desktop, tablet, mobile };

          return (
            <li className="categories__item" key={id}>
              <Images images={images} alt={`${name} picture`} />
              <div className="categories__wrapper">
                <p className="overline">new product</p>
                <h2 className="categories__title">{name}</h2>
                <p className="categories__description">{description}</p>
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
