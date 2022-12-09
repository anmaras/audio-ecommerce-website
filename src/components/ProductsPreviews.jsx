import React from 'react';
import { Pictures } from '../components';
import { previewProducts } from '../utils/constants';
import { Link } from 'react-router-dom';
import style from '../styles/components/ProductsPreviews.module.scss';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { productPreviewsVariant } from '../AnimationVariants/variants';

const ProductsPreviews = () => {
  return (
    <LazyMotion features={domAnimation}>
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
              <m.li
                key={id}
                className={style['homepage__item']}
                variants={productPreviewsVariant}
                initial="initial"
                whileInView="whileInView"
                viewport={{ once: true }}
              >
                {decoration ? (
                  <img
                    className={style['homepage__decoration']}
                    src={decoration}
                    alt=""
                    loading="lazy"
                  />
                ) : null}
                <Pictures
                  desktop={desktop}
                  tablet={tablet}
                  mobile={mobile}
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
                      className={[style['homepage__button'], 'button-2'].join(
                        ' '
                      )}
                      to={`products/${category}/${slug}`}
                    >
                      see product
                    </Link>
                  </div>
                )}
              </m.li>
            );
          })}
        </ul>
      </section>
    </LazyMotion>
  );
};

export default ProductsPreviews;
