import React from 'react';
import { Logo, NavbarLinks } from './index';
import { socialLinks } from '../utils/constants';
import style from '../styles/components/Footer.module.scss';

function getImageUrl(name) {
  return new URL(`../${name.substring(2)}`, import.meta.url).href;
}

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style['footer__wrapper']}>
        <div className={style['footer__cosmetic']}></div>
        <Logo className={style['footer__logo']} />
        {/* <NavbarLinks className={style['footer__list']} /> */}
        <p className={style['footer__info']}>
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className={style['footer__copyright']}>
          Copyright 2021. All Rights Reserved
        </p>
        <ul className={style['footer__socials']}>
          {socialLinks.map((link) => {
            const { id, img, text } = link;
            return (
              <li key={id} className={style['footer__links']}>
                <img src={getImageUrl(img)} alt={text} />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
