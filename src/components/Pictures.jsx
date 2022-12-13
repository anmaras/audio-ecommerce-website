import React from 'react';
import style from '../styles/components/Pictures.module.scss';
import { getImageUrl } from '../utils/helpers';

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
        srcSet={getImageUrl(desktop)}
        width={widthDesk}
        height={heightDesk}
      />
      <source
        media="(min-width:768px)"
        srcSet={getImageUrl(tablet)}
        width={widthTab}
        height={heightTab}
      />
      <source
        media="(min-width:375px)"
        srcSet={getImageUrl(mobile)}
        width={widthMob}
        height={heightMob}
      />

      <img
        src={getImageUrl(mobile)}
        alt={alt}
        className={style['picture__img']}
        width={widthMob}
        height={heightMob}
      />
    </picture>
  );
};

export default Pictures;
