import React from 'react';
import { Logo, NavbarLinks } from './index';
import { socialLinks } from '../utils/constants';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__cosmetic"></div>
        <Logo className={'footer__logo'} />
        <NavbarLinks className={'footer__list'} />
        <p className="footer__info">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>
        <p className="footer__copyright">Copyright 2021. All Rights Reserved</p>
        <ul className="footer__socials">
          {socialLinks.map((link) => {
            const { id, img, text } = link;
            return (
              <li key={id} className="footer__links">
                <img src={img} alt={text} loading="lazy" />
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
