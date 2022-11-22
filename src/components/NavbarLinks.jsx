import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';
import { useProductsContext } from '../context/products_context';

const CategoriesList = ({ className }) => {
  const { getProductsByCategory } = useProductsContext();

  return (
    <ul className={className ? className : 'list'}>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id} className="list__link">
            <Link to={url} onClick={() => getProductsByCategory(text)}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
