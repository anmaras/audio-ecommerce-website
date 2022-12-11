import React from 'react';
import { imageUrls } from '../utils/helpers';
import style from '../styles/components/Pictures.module.scss';

const Pictures = ({
  desktop,
  tablet,
  mobile,
  alt,
  widthMob,
  widthTab,
  widthDesk,
  heightDesk,
  heightMob,
  heightTab,
}) => {
  return (
    <picture className={style.picture}>
      <source
        media="(min-width:1440px)"
        srcSet={imageUrls(desktop)}
        width={widthDesk}
        height={heightDesk}
      />
      <source
        media="(min-width:768px)"
        srcSet={imageUrls(tablet)}
        width={widthTab}
        height={heightTab}
      />
      <source
        media="(min-width:375px)"
        srcSet={imageUrls(mobile)}
        width={widthMob}
        height={heightMob}
      />
      <img
        src={imageUrls(mobile)}
        alt={alt}
        className={style['picture__img']}
        width={widthMob}
        height={heightMob}
        loading="lazy"
      />
    </picture>
  );
};

export default Pictures;
