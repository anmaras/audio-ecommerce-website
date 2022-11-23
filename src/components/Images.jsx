import React from 'react';
import { imageUrls } from '../utils/helpers';
import style from '../styles/components/Images.module.scss';
const { picture, picture__image } = style;

const Images = ({ images: { desktop, tablet, mobile }, alt }) => {
  return (
    <picture className={picture}>
      <source media="(min-width:1440px)" srcSet={imageUrls(desktop)} />
      <source media="(min-width:768px)" srcSet={imageUrls(tablet)} />
      <source media="(min-width:375px)" srcSet={imageUrls(mobile)} />
      <img
        className={picture__image}
        src={imageUrls(mobile)}
        alt={alt}
        loading="lazy"
      />
    </picture>
  );
};

export default Images;
