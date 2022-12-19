import React, { useRef } from 'react';
import { Logo, NavbarLinks } from './index';
import { socialLinks } from '../utils/constants';
import style from '../styles/components/Footer.module.scss';
import { getImageUrl } from '../utils/helpers';
import { useInView, motion } from 'framer-motion';

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <footer className={style.footer} ref={ref}>
        <div className={style['footer__wrapper']}>
          <div className={style['footer__cosmetic']}>
            {isInView ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                Back to top
              </motion.div>
            ) : null}
          </div>
          <Logo className={style['footer__logo']} />
          <NavbarLinks className={style['footer__list']} />
          <p className={style['footer__info']}>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
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
    </>
  );
};

export default Footer;
