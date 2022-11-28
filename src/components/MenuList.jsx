import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import buttonImgUrl from '../assets/shared/desktop/icon-arrow-right.svg';
import { useProductsContext } from '../context/products_context';
import style from '../styles/components/MenuList.module.scss';

const MenuList = () => {
  const { closeMenu, getProductsByCategory } = useProductsContext();
  return (
    <ul className={style.menuList}>
      {links.map((link, index) => {
        const { id, url, category, thumbnail } = link;
        if (index > 0)
          return (
            <li key={id} className={style['menuList__link']}>
              <div className={style['menuList__bg']}></div>
              <Link
                className="router-link"
                to={url}
                onClick={() => {
                  getProductsByCategory(category);
                  closeMenu();
                }}
              >
                <img
                  className={style['menuList__thumbnail']}
                  src={thumbnail}
                  alt=""
                  loading="lazy"
                />
                <p className={style['menuList__title']}>{category}</p>
                <button
                  className={[style['menuList__button'], ' button-3'].join(' ')}
                >
                  shop
                  <img
                    className="button-3__icon"
                    src={buttonImgUrl}
                    alt=""
                    loading="lazy"
                  />
                </button>
              </Link>
            </li>
          );
      })}
    </ul>
  );
};

export default MenuList;
