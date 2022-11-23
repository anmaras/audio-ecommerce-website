import React from 'react';
import { imageUrls } from '../utils/helpers';

const Pictures = ({ desktop, tablet, mobile, alt }) => {
  const desktopImg = `/src${desktop?.substring(1)}`;
  const tabletImg = `/src${tablet?.substring(1)}`;
  const mobileImg = `/src${mobile?.substring(1)}`;

  return (
    <picture>
      <source media="(min-width:1440px)" srcSet={desktopImg} />
      <source media="(min-width:768px)" srcSet={tabletImg} />
      <source media="(min-width:375px)" srcSet={mobileImg} />
      <img src={mobileImg} alt={alt} loading="lazy" />
    </picture>
  );
};

export default Pictures;
