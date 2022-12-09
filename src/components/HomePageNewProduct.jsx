import React from 'react';
import mobileUrl from '../assets/home/mobile/image-header.jpg';
import tabletUrl from '../assets/home/tablet/image-header.jpg';
import desktopUrl from '../assets/home/desktop/image-hero.jpg';
import { Link } from 'react-router-dom';
import style from '../styles/components/HomePageNewProduct.module.scss';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { newProductVariant } from '../AnimationVariants/variants';

const NewProduct = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className={style.newProduct}>
        <div className={style['newProduct__wrapper']}>
          <m.picture
            variants={newProductVariant}
            initial="initial"
            animate="animate"
          >
            <source media="(min-width:1220px)" srcSet={desktopUrl} />
            <source media="(min-width:600px)" srcSet={tabletUrl} />
            <source media="(min-width:375px)" srcSet={mobileUrl} />
            <img src={mobileUrl} alt="xx99 mark 2 headphones image" />
          </m.picture>
          <div className={style['newProduct__textWrapper']}>
            <p
              className={[style['newProduct__overline '], 'overline'].join(' ')}
            >
              new product
            </p>
            <h1 className={style['newProduct__title']}>
              XX99 Mark II <br />
              HeadphoneS
            </h1>
            <p className={style['newProduct__description']}>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Link
              className="button-1"
              to={'products/headphones/xx99-mark-two-headphones'}
            >
              see product
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default NewProduct;
