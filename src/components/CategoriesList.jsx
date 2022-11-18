import React from 'react';
import { Link } from 'react-router-dom';
import { links } from '../utils/constants';

const CategoriesList = ({ className }) => {
  return (
    <ul className={className ? className : 'list'}>
      {links.map((link) => {
        const { id, text, url } = link;
        return (
          <li key={id} className="list__link">
            <Link to={url}>{text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoriesList;
