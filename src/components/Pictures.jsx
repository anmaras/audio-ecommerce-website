import React from 'react';
import { imageUrls } from '../utils/helpers';
import style from '../styles/components/Pictures.module.scss';

const Pictures = ({ desktop, tablet, mobile, alt }) => {
  console.log(desktop);
  return (
    <picture className={style.picture}>
      <source media="(min-width:1440px)" srcSet={imageUrls(desktop)} />
      <source media="(min-width:768px)" srcSet={imageUrls(tablet)} />
      <source media="(min-width:375px)" srcSet={imageUrls(mobile)} />
      <img
        src={imageUrls(mobile)}
        alt={alt}
        className={style['picture__img']}
      />
    </picture>
  );
};

export default Pictures;
