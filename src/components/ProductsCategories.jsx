import React from 'react';
import { Link } from 'react-router-dom';
import style from '../styles/components/ProductsCategories.module.scss';
import { Pictures } from '../components/index';
import { scrollToTop } from '../utils/helpers';

const ProductsList = ({ data }) => {
  return (
    <div className={style.categories}>
      <ul className={style['categories__list']}>
        {data?.map((product) => {
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
              <div className={style['categories__wrapper']}>
                <p className="overline">new product</p>
                <h2 className={style['categories__title']}>{name}</h2>
                <p className={style['categories__description']}>
                  {description}
                </p>
                <Link
                  className="button-1"
                  to={`/products/${category}/${slug}`}
                  onClick={scrollToTop}
                >
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
