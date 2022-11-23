import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link, useParams } from 'react-router-dom';
import { Images } from './index';
import { useEffect } from 'react';
import FadeLoader from 'react-spinners/FadeLoader';

const ProductsList = () => {
  const { category } = useParams();
  const {
    category_products: products,
    getProductsByCategory,
    products_loading,
    category_loading,
  } = useProductsContext();

  // useEffect(() => {
  //   getProductsByCategory(category);
  // }, [category]);

  if (category_loading) {
    return <FadeLoader />;
  }

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
