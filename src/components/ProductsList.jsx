import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import { imageUrls } from '../utils/helpers';

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

          return (
            <li className="categories__item" key={id}>
              <picture>
                <source
                  media="(min-width:1220px)"
                  srcSet={imageUrls(desktop)}
                />
                <source media="(min-width:768px)" srcSet={imageUrls(tablet)} />
                <source media="(min-width:375px)" srcSet={imageUrls(mobile)} />
                <img
                  className="categories__image"
                  src={imageUrls(mobile)}
                  alt={`${name} picture`}
                />
              </picture>
              <div className="categories__wrapper">
                <p className="overline">new product</p>
                <h2>{name}</h2>
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
