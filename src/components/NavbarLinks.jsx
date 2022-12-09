import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { useProductsContext } from '../context/products_context';

/* if user click the link after page load the behavior will be smooth 
for scrolling back to top */
const CategoriesList = ({ className }) => {
  const { getProductsByCategory } = useProductsContext();
  return (
    <ul className={className ? className : 'list'}>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id} className="list__link">
            <Link
              to={url}
              onClick={() => {
                getProductsByCategory(text);

                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
