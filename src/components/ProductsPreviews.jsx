import React from 'react';
import { Pictures } from '../components';
import { previewProducts } from '../utils/constants';
import { Link } from 'react-router-dom';
import style from '../styles/components/ProductsPreviews.module.scss';
import { getImageUrl, scrollToTop } from '../utils/helpers';

const ProductsPreviews = () => {
  return (
    <section className={style.homepage}>
      <ul className={style['homepage__list']}>
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

          return (
            <li key={id} className={style['homepage__item']}>
              {decoration ? (
                <img
                  className={style['homepage__decoration']}
                  src={getImageUrl(decoration)}
                  alt="decoration lines"
                />
              ) : null}
              <Pictures
                desktop={desktop}
                tablet={tablet}
                mobile={mobile}
                widthMob={title === 'zx9' ? '320' : '654'}
                heightMob={
                  title === 'zx9' ? '388' : title === 'zx7' ? '640' : '400'
                }
                widthTab={
                  title === 'zx9' ? '366' : title === 'zx7' ? '689' : '678'
                }
                heightTab={
                  title === 'zx9' ? '444' : title === 'zx7' ? '320' : '640'
                }
                widthDesk={
                  title === 'zx9' ? '756' : title === 'zx7' ? '1110' : '540'
                }
                heightDesk={title === 'zx9' ? '918' : '320'}
                alt={`${title} ${category} preview image`}
              />
              {title === 'zx9' ? (
                <>
                  <h1 className={[style['homepage__title'], 'zx9'].join(' ')}>
                    {title} <br /> {category}
                  </h1>
                  <p className={style['homepage__description']}>
                    {description}
                  </p>
                  <Link
                    onClick={scrollToTop}
                    className={[style['homepage__button'], 'button-2'].join(
                      ' '
                    )}
                    to={`products/${category}/${slug}`}
                  >
                    see product
                  </Link>
                </>
              ) : (
                <div className={style['homepage__text-wrapper']}>
                  <h4 className={style['homepage__title']}>
                    {title} {category}
                  </h4>
                  <Link
                    onClick={scrollToTop}
                    className={[style['homepage__button'], 'button-2'].join(
                      ' '
                    )}
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
  );
};

export default ProductsPreviews;
