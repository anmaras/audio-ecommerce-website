import React from 'react';
import { MenuList, NewProduct, Images, About } from '../components';
import { previewProducts } from '../utils/constants';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <main className="homepage">
      <NewProduct />
      <MenuList />
      <section className="homepage__section--previews">
        <ul className="homepage__list">
          {previewProducts.map((preview) => {
            const {
              id,
              title,
              category,
              desktop,
              tablet,
              mobile,
              description,
              decoration,
              slug,
            } = preview;

            const images = { desktop, tablet, mobile };

            return (
              <li key={id} className="homepage__item">
                {decoration ? (
                  <img
                    className="homepage__decoration"
                    src={decoration}
                    alt=""
                    loading="lazy"
                  />
                ) : null}
                <Images
                  images={images}
                  alt={`${title} ${category} preview image`}
                />
                {title === 'zx9' ? (
                  <>
                    <h1 className="homepage__title zx9">
                      {title} <br /> {category}
                    </h1>
                    <p className="homepage__description">{description}</p>
                    <Link
                      className="homepage__button button-2"
                      to={`products/${category}/${slug}`}
                    >
                      see product
                    </Link>
                  </>
                ) : (
                  <div className="homepage__text-wrapper">
                    <h4 className="homepage__title">
                      {title} {category}
                    </h4>
                    <Link
                      className="homepage__button button-2"
                      to={`products/${category}/${slug}`}
                    >
                      see product
                    </Link>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <About />
    </main>
  );
}
