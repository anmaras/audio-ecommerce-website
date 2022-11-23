import React from 'react';
import { Link } from 'react-router-dom';
import { Images } from './index';
import { useProductsContext } from '../context/products_context';
import { imageUrls } from '../utils/helpers';
import FadeLoader from 'react-spinners/FadeLoader';

import style from '../styles/components/Product.module.scss';
const { main, main__title, main__description, main__price } = style;

const Product = () => {
  const { single_product, product_loading } = useProductsContext();

  const desktop = `/src${single_product?.image?.desktop.substring(1)}`;
  const tablet = `/src${single_product?.image?.tablet.substring(1)}`;
  const mobile = `/src${single_product?.image?.mobile.substring(1)}`;

  if (product_loading) {
    return <FadeLoader />;
  }

  return (
    <>
      <Link to={`/products/${single_product?.category}`}>go back</Link>
      <section>
        <picture>
          <source media="(min-width:1440px)" srcSet={desktop} />
          <source media="(min-width:768px)" srcSet={tablet} />
          <source media="(min-width:375px)" srcSet={mobile} />
          <img
            // className={picture__image}
            src={mobile}
            loading="lazy"
            alt={`${single_product?.name}`}
          />
        </picture>
        {/* <Images images={images} /> */}
        <p className="overline">new product</p>

        <h2>{single_product?.name}</h2>
        <p>{single_product?.description}</p>
        <p>{single_product?.price}</p>
        <div>
          <button type="button" className="button-1">
            add to cart
          </button>
        </div>
      </section>
    </>
  );
};

export default Product;
