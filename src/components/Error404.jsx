import React from 'react';
import style from '../styles/components/Error404.module.scss';
import { Link } from 'react-router-dom';
const Error404 = () => {
  return (
    <div className={style.error404}>
      <div className={style['error404__wrapper']}>
        <h1>404! </h1>
        <h3>Page not found</h3>
        <Link to="/" className="button-2">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default Error404;
