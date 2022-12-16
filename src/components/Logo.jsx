import React from 'react';
import logoUrl from '../assets/shared/desktop/logo.svg';
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <Link to="/">
      <img
        src={logoUrl}
        alt="audiophile logo"
        width="143"
        height="25"
        className={className ? className : 'logo'}
      />
    </Link>
  );
};

export default Logo;
