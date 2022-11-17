import React from 'react';
import { Link } from 'react-router-dom';
import links from '../utils/constants';
import buttonImgUrl from '../assets/shared/desktop/icon-arrow-right.svg';
import { useProductsContext } from '../context/products_context';

const MenuList = () => {
  const { closeMenu } = useProductsContext();
  return (
    <ul className="menu__linksList">
      {links.map((link, index) => {
        const { id, url, category, thumbnail } = link;
        if (index > 0)
          return (
            <li key={id} className="menu__link">
              <Link className="router-link" to={url} onClick={closeMenu}>
                <img className="menu__thumbnail" src={thumbnail} alt="" />
                <p className="menu__title">{category}</p>
                <button className="menu__button button-3">
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
