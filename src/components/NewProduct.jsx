import React from 'react';
import mobileUrl from '../assets/home/mobile/image-header.jpg';
import tabletUrl from '../assets/home/tablet/image-header.jpg';
import desktopUrl from '../assets/home/desktop/image-hero.jpg';
import { Link } from 'react-router-dom';

const NewProduct = () => {
  return (
    <section className="newProduct">
      <picture className="newProduct__imgWrapper">
        <source media="(min-width:1220px)" srcSet={desktopUrl} />
        <source media="(min-width:600px)" srcSet={tabletUrl} />
        <source media="(min-width:375px)" srcSet={mobileUrl} />
        <img
          className="newProduct__img"
          src={mobileUrl}
          alt="xx99 mark 2 headphones image"
        />
      </picture>
      <div className="newProduct__textWrapper">
        <p className="newProduct__overline overline">new product</p>
        <h1 className="newProduct__title">
          XX99 Mark II <br />
          HeadphoneS
        </h1>
        <p className="newProduct__description">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link
          className="newProduct__button button-1"
          to={'products/headphones/xx99-mark-two-headphones'}
        >
          see product
        </Link>
      </div>
    </section>
  );
};

export default NewProduct;
