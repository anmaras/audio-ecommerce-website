import React from 'react';
import { useProductsContext } from '../context/products_context';
import { Link } from 'react-router-dom';
import { Pictures } from './index';
import style from '../styles/components/ProductsCategories.module.scss';
import { motion } from 'framer-motion';
import {
  categoryImgVariant,
  categoryText,
} from '../AnimationVariants/variants';
import { useEffect } from 'react';

const ProductsList = ({ category }) => {
  const { category_products: products, getProductsByCategory } =
    useProductsContext();

  useEffect(() => {
    getProductsByCategory(category);
  }, [category]);

  return (
    <section className={style.categories}>
      <ul className={style['categories__list']}>
        {products.map((product, index) => {
          const {
            categoryImage: { desktop, tablet, mobile },
            description,
            id,
            name,
            slug,
            category,
          } = product;

          return (
            <li className={style['categories__item']} key={id}>
              <motion.div
              // variants={categoryImgVariant}
              // initial="initial"
              // whileInView="whileInView"
              // transition={{ delay: index * 0.2 }}
              // viewport={{ once: true }}
              >
                <Pictures
                  desktop={desktop}
                  tablet={tablet}
                  mobile={mobile}
                  alt={`${name} picture`}
                  widthMob="654"
                  heightMob="704"
                  widthTab="1378"
                  heightTab="704"
                  widthDesk="1080"
                  heightDesk="1120"
                />
              </motion.div>
              <motion.div
                className={style['categories__wrapper']}
                // variants={categoryText}
                // initial="initial"
                // animate="animate"
              >
                <p className="overline">new product</p>
                <h2 className={style['categories__title']}>{name}</h2>
                <p className={style['categories__description']}>
                  {description}
                </p>
                <Link className="button-1" to={`/products/${category}/${slug}`}>
                  see product
                </Link>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ProductsList;
