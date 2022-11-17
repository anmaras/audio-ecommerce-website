import React from 'react';
import links from '../utils/constants';
import { Link } from 'react-router-dom';
import buttonImgUrl from '../assets/shared/desktop/icon-arrow-right.svg';
import { useProductsContext } from '../context/products_context';

const Menu = () => {
  const { isMenuOpen, closeMenu } = useProductsContext();

  return (
    <>
      <div
        className={isMenuOpen ? 'backdrop backdrop--visible' : 'backdrop'}
        onClick={closeMenu}
      ></div>
      <div className={isMenuOpen ? 'menu menu--visible' : 'menu'}>
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
                      <img
                        className="button-3__icon"
                        src={buttonImgUrl}
                        alt=""
                      />
                    </button>
                  </Link>
                </li>
              );
          })}
        </ul>
      </div>
    </>
  );
};

export default Menu;
