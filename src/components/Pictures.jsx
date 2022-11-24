import React from 'react';
import { imageUrls } from '../utils/helpers';

const Pictures = ({ desktop, tablet, mobile, alt }) => {
  return (
    <picture>
      <source media="(min-width:1440px)" srcSet={imageUrls(desktop)} />
      <source media="(min-width:768px)" srcSet={imageUrls(tablet)} />
      <source media="(min-width:375px)" srcSet={imageUrls(mobile)} />
      <img src={imageUrls(mobile)} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Pictures;
