import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import buttonImgUrl from '../assets/shared/desktop/icon-arrow-right.svg';
import { useProductsContext } from '../context/products_context';

const MenuList = () => {
  const { closeMenu, getProductsByCategory } = useProductsContext();
  return (
    <ul className="menuList">
      {links.map((link, index) => {
        const { id, url, category, thumbnail } = link;
        if (index > 0)
          return (
            <li key={id} className="menuList__link">
              <Link
                className="router-link"
                to={url}
                onClick={() => {
                  getProductsByCategory(category);
                  closeMenu();
                }}
              >
                <img
                  className="menuList__thumbnail"
                  src={thumbnail}
                  alt=""
                  loading="lazy"
                />
                <p className="menuList__title">{category}</p>
                <button className="menuList__button button-3">
                  shop
                  <img className="button-3__icon" src={buttonImgUrl} alt="" />
                </button>
              </Link>
            </li>
          );
      })}
    </ul>
  );
};

export default MenuList;
