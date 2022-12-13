import React from 'react';
import mobileUrl from '../assets/home/mobile/image-header.jpg';
import tabletUrl from '../assets/home/tablet/image-header.jpg';
import desktopUrl from '../assets/home/desktop/image-hero.jpg';
import { Link } from 'react-router-dom';
import style from '../styles/components/HomePageNewProduct.module.scss';
import { motion } from 'framer-motion';
import { scrollToTop } from '../utils/helpers';

const NewProduct = () => {
  return (
    <section className={style.newProduct}>
      <div className={style['newProduct__wrapper']}>
        <motion.picture
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
        >
          <source
            media="(min-width:1220px)"
            srcSet={desktopUrl}
            width="1440"
            height="633"
          />
          <source
            media="(min-width:600px)"
            srcSet={tabletUrl}
            width="1536"
            height="1280"
          />
          <source
            media="(min-width:375px)"
            srcSet={mobileUrl}
            width="750"
            height="1000"
          />
          <img
            src={mobileUrl}
            alt="xx99 mark 2 headphones image"
            width="750"
            height="1000"
          />
        </motion.picture>
        <div className={style['newProduct__textWrapper']}>
          <p className={[style['newProduct__overline '], 'overline'].join(' ')}>
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
            onClick={scrollToTop}
            className="button-1"
            to={'products/headphones/xx99-mark-two-headphones'}
          >
            see product
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewProduct;
