import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/ProductsCategories.module.scss';
import { Pictures } from '../components/index';
import { motion } from 'framer-motion';

const ProductsList = ({ data }) => {
  return (
    <div className={style.categories}>
      <ul className={style['categories__list']}>
        {data?.map((product, index) => {
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
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1, transition: { delay: 0.2 * index } }}
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
              <div className={style['categories__wrapper']}>
                <p className="overline">new product</p>
                <h2 className={style['categories__title']}>{name}</h2>
                <p className={style['categories__description']}>
                  {description}
                </p>
                <Link className="button-1" to={`/products/${category}/${slug}`}>
                  see product
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductsList;
