import React from 'react';
import { MenuList, NewProduct, About, Footer } from '../components';
import { useProductsContext } from '../context/products_context';
import { previewProducts } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="homepage">
      <NewProduct />
      <MenuList />
      <ul className="homepage__list">
        {previewProducts.map((preview) => {
          const {
            id,
            title,
            category,
            description,
            mobileImg,
            tabletImg,
            desktopImg,
            decoration,
          } = preview;

          return (
            <li key={id} className={`homepage__item ${title}`}>
              {decoration ? (
                <img className="homepage__decoration" src={decoration} alt="" />
              ) : null}
              <picture>
                <source media="(min-width:1220px)" srcSet={desktopImg} />
                <source media="(min-width:768px)" srcSet={tabletImg} />
                <source media="(min-width:375px)" srcSet={mobileImg} />
                <img
                  className={`homepage__img ${title}`}
                  src={mobileImg}
                  alt={`${title} ${category} preview image`}
                  loading="lazy"
                />
              </picture>
              {title === 'zx9' ? (
                <>
                  <h1 className="homepage__title zx9">
                    {title} <br /> {category}
                  </h1>
                  <p className="homepage__description">{description}</p>
                  <Link
                    className={`homepage__button ${title} button-2`}
                    to={`products/${category}/${title}`}
                  >
                    see product
                  </Link>
                </>
              ) : (
                <div className="homepage__text-wrapper">
                  <h4 className={`homepage__title ${title}`}>
                    {title} {category}
                  </h4>
                  <Link
                    className={`homepage__button ${title} button-2`}
                    to={`products/${category}/${title}`}
                  >
                    see product
                  </Link>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </main>
  );
}
